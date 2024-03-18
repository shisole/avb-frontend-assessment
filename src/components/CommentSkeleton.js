import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: "#D3D3D3",
  },
  name: {
    margin: theme.spacing(2),
    marginTop: 0,
  },
  comment: {
    margin: theme.spacing(2),
  },
}));

const CommentSkeleton = ({
  commentDetails = { name: "", comment: "", ava: "" },
  isLoading,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            {isLoading ? (
              <Skeleton variant="circle" width={40} height={40} />
            ) : (
              <Avatar>{commentDetails?.avatar}</Avatar>
            )}
          </Grid>
          <Grid item xs zeroMinWidth>
            <div className={classes.name}>
              {isLoading ? (
                <Skeleton variant="text" width={"100%"} height={10} />
              ) : (
                commentDetails.name
              )}
            </div>
            <Divider light variant="middle" />
            <div className={classes.comment}>
              {isLoading ? (
                <Skeleton variant="rect" width={"100%"} height={40} />
              ) : (
                commentDetails?.comment || commentDetails?.body
              )}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CommentSkeleton;
