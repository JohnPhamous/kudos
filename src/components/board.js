import React, { Component } from "react";

export default class Board extends Component {
  state = {
    boardTitle: "Thanks for coming!",
    boards: []
  };
  render() {
    const { boardTitle } = this.state;
    return (
      <div>
        <h1>{boardTitle}</h1>
      </div>
    );
  }
}
