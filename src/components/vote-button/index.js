import React from "react";

class VoteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10
    };
    this.text = this.props.voteType === "upVote" ? "Upvote" : "Downvote";
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state, props) => {
      let updatedCounter = state.counter;
      props.voteType === "upVote" ? updatedCounter++ : updatedCounter--;
      return {
        counter: updatedCounter
      };
    });
  }

  render() {
    return (
      <button onClick={this.handleClick} disabled={!this.state.counter}>
        {this.text} {this.state.counter}
      </button>
    );
  }
}

export default VoteButton;
