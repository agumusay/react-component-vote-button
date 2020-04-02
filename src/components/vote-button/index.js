import React from "react";

class VoteButton extends React.Component {
  constructor(props) {
    super(props);
    // this.message = faker.lorem.words();
    // Set initial state

    this.state = {
      number: 10
    };

    this.handleClick = this.handleClick.bind(this);
  }

  voteFunction(num) {
    if (this.props.voteType === "upVote") {
      num++;
    } else {
      num--;
    }
    return num;
  }

  voteText(text) {
    if (this.props.voteType === "upVote") {
      text = `Upvote`;
    } else {
      text = "Downvote";
    }
    return text;
  }

  handleClick() {
    this.setState({
      number: this.voteFunction(this.state.number)
    });
  }

  disable(num) {
    if (num === 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const isEnabled = !this.state.number;
    return (
      <div className="vote-container">
        <button onClick={this.handleClick} disabled={isEnabled}>
          <p>{this.voteText(this.state.text)}</p>
          <span>{this.state.number}</span>
        </button>
      </div>
    );
  }
}

export default VoteButton;
