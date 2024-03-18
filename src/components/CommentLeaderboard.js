import React from "react";
import { useSelector } from "react-redux";

import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import { getLeaderboard } from "store/slices/comment";

const useStyles = makeStyles((theme) => ({
  leaderboardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    padding: "6px 24px",
    flexDirection: "column",
    maxWidth: "450px",
    margin: "12px auto",

    "& > *": {
      margin: "8px 0",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  leaderboardCard: {
    "& > *": {
      margin: "0 8px 0 0",
    },
  },
}));

const extractAvatarInitials = (name) => {
  const nameSplit = name.split(" ");

  if (nameSplit.length === 1) {
    return nameSplit[0][0];
  }

  return nameSplit[0][0] + nameSplit[nameSplit.length - 1][0];
};

const CommentLeaderboard = () => {
  const classes = useStyles();

  const leaderboard = useSelector(getLeaderboard);

  if (leaderboard.length === 0) {
    return <></>;
  }

  const [
    [firstName, firstCommentCount],
    [secondName, secondCommentCount],
    [thirdName, thirdCommentCount],
  ] = leaderboard;

  return (
    <Paper className={classes.leaderboardContainer}>
      <div className={classes.title}>
        <h2>Top Commentors</h2>
      </div>
      <div className={classes.leaderboardCard}>
        <Badge badgeContent={firstCommentCount} color="primary">
          <Avatar>{extractAvatarInitials(firstName)}</Avatar>
        </Badge>
        {firstName.toUpperCase()}
      </div>
      <div className={classes.leaderboardCard}>
        <Badge badgeContent={secondCommentCount} color="primary">
          <Avatar>{extractAvatarInitials(secondName)}</Avatar>
        </Badge>
        {secondName.toUpperCase()}
      </div>
      <div className={classes.leaderboardCard}>
        <Badge badgeContent={thirdCommentCount} color="primary">
          <Avatar>{extractAvatarInitials(thirdName)}</Avatar>
        </Badge>
        {thirdName.toUpperCase()}
      </div>
    </Paper>
  );
};

export default CommentLeaderboard;
