import React, { Component } from "react";
import { Card } from "semantic-ui-react";

export default class ThanksCard extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Description>
            Matthew is a pianist living in Nashville.
          </Card.Description>
          <Card.Meta textAlign="right" style={{ marginTop: `10px` }}>
            Added by Stephen Hawking
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}
