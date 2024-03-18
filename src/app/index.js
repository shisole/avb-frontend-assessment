import React from "react";

import "app/App.css";
import logo from "app/logo.svg";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import Comments from "components/Comments";
import CommentLeaderboard from "components/CommentLeaderboard";

function App() {
  return (
    <>
      <CommentModal />

      <CommentLeaderboard />

      <Comments />

      <Header />
    </>
  );
}

export default App;
