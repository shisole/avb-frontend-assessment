import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { mockComments } from "store/api.js";
import { Map } from "immutable";

export const name = "comments";

const commentStepper = 10;

let currentPage = 1;

const initialState = {
  comments: [],
  isLoading: false,
  currentPage,
  commentLeaderboard: Map(),
};

const commentsAPIUrl = "https://jsonplaceholder.typicode.com/comments";

export const getCommentsFromAPI = createAsyncThunk(
  `${name}/getCommentsFromAPI`,
  async () => {
    const response = await fetch(
      `${commentsAPIUrl}?_start=${(currentPage - 1) * commentStepper}&_end=${
        currentPage * commentStepper
      }`
    );
    const result = await response.json();
    return result;
  }
);

const commentSlice = createSlice({
  name,
  initialState,
  reducers: {
    addComment(state, { payload }) {
      state.comments = [normalizeComment(payload), ...state.comments];
      const updatedLeaderboard = state.commentLeaderboard.has(
        payload.name.toLowerCase()
      )
        ? state.commentLeaderboard.set(
            payload.name.toLowerCase(),
            state.commentLeaderboard.get(payload.name.toLowerCase()) + 1
          )
        : state.commentLeaderboard.set(payload.name.toLowerCase(), 1);
      state.commentLeaderboard = updatedLeaderboard;
    },
    addCommentsFromLocal(state) {
      state.comments = [
        ...mockComments.map(normalizeComment),
        ...state.comments,
      ];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCommentsFromAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCommentsFromAPI.fulfilled, (state, action) => {
        action.payload.forEach((data) => {
          const updatedLeaderboard = state.commentLeaderboard.has(
            data.name.toLowerCase()
          )
            ? state.commentLeaderboard.set(
                data.name.toLowerCase(),
                state.commentLeaderboard.get(data.name.toLowerCase()) + 1
              )
            : state.commentLeaderboard.set(data.name, 1);
          state.commentLeaderboard = updatedLeaderboard;
        });

        state.comments = [
          ...state.comments,
          ...action.payload.map(normalizeComment),
        ];
        state.isLoading = false;
      })
      .addCase(getCommentsFromAPI.rejected, (state, action) => {
        console.log("err");
        state.isLoading = false;
      });
  },
});

const getSlice = (state) => state[name] || {};

export const normalizeComment = (comment) => {
  const nameSplit = comment.name.split(" ");
  const avatar =
    nameSplit.length === 1
      ? nameSplit[0][0]
      : nameSplit[0][0] + nameSplit[nameSplit.length - 1][0];

  return {
    name: comment.name,
    comment: comment?.comment ?? comment?.body,
    avatar,
  };
};

export const { addComment, addCommentsFromLocal } = commentSlice.actions;

export const getComments = createSelector(getSlice, (slice) => ({
  comments: slice.comments.map(normalizeComment),
  isLoading: slice.isLoading,
}));

export const getLeaderboard = createSelector(getSlice, (slice) => {
  const leaderboardArray = Array.from(slice.commentLeaderboard);
  const sortedLeaderboard = leaderboardArray.sort(
    ([key1, value1], [key2, value2]) => value2 - value1
  );

  return sortedLeaderboard.slice(0, 3);
});

export default commentSlice.reducer;
