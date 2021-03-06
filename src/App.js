import React from "react";
import "./App.css";
import VoteButton from "./components/vote-button";

function App() {
  return (
    <div className="App">
      <VoteButton voteType="upVote" />
      <VoteButton voteType="downVote" />
    </div>
  );
}

export default App;
