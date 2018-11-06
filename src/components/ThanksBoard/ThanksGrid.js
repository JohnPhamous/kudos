import React, { Component } from "react";
import { Card } from "semantic-ui-react";

import ThanksCard from "./ThanksCard";

export default class ThanksGrid extends Component {
  render() {
    const thankCardsRender = this.props.thanks.map(card => {
      return <ThanksCard />;
    });
    return (
      <Card.Group style={{ marginTop: `30px` }}>{thankCardsRender}</Card.Group>
    );
  }
}
