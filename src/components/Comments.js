import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommentsFromAPI,
  addCommentsFromLocal,
  getLeaderboard,
  getComments,
} from "store/slices/comment";
import CommentSkeleton from "components/CommentSkeleton";

const Comments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCommentsFromLocal());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCommentsFromAPI());
  }, [dispatch]);

  const { comments, isLoading } = useSelector(getComments);
  const leaderboard = useSelector(getLeaderboard);
  return (
    <>
      {comments.map((commentDetails) => (
        <CommentSkeleton
          commentDetails={commentDetails}
          isLoading={isLoading}
        />
      ))}
    </>
  );
};

export default Comments;
