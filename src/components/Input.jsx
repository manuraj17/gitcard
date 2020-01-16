import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { withRouter } from "react-router";
import { stringify } from "qs";

class Input extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      q: ""
    };
  }

  handleChange = event => {
    this.setState({ q: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      const { q } = this.state;
      const search = stringify(
        { q },
        {
          addQueryPrefix: true
        }
      );
      this.props.history.push("/card" + search);
    }
  };

  render() {
    return (
      <TextField
        required
        variant={"outlined"}
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
      />
    );
  }
}

export default withRouter(Input);
