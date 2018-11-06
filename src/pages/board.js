import React, { Component } from "react";
import { Link } from "gatsby";
import { Header, Segment } from "semantic-ui-react";
import Layout from "../components/layout";

import ThanksGrid from "../components/ThanksBoard/ThanksGrid";

export default class Board extends Component {
  state = {
    boardTitle: "Thanks for comming Alan Turing!",
    boardDescription: "lorem impusm jksdhgjks sdhf sdf j bsdbsb",
    thanks: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  };
  render() {
    const { boardTitle, boardDescription, thanks } = this.state;
    return (
      <Layout>
        <Header as="h2" attached="top">
          {boardTitle}
        </Header>
        <Segment attached>{boardDescription}</Segment>
        <ThanksGrid thanks={thanks} />
      </Layout>
    );
  }
}
