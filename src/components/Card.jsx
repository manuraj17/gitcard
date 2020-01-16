import React, { Component } from "react";
import {
  Card as MuCard,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import { parse } from "qs";
import axios from "axios";

import "./Card.scss";

const URL = "https://api.github.com/users/";

class Card extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      handle: null,
      data: null,
      error: null
    };
  }

  componentDidMount() {
    const { search } = this.props.location;
    const { q: handle } = parse(search, { ignoreQueryPrefix: true });
    this.setState({ handle });
    axios
      .get(URL + handle)
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <MuCard>
          {this.state.data && (
            <CardContent className="card">
              <CardMedia
                className="avatar"
                component="img"
                image={this.state.data.avatar_url}
                title={this.state.name}
              />
              <Typography color="textSecondary" gutterBottom></Typography>
              <Typography variant="h5" component="h2">
                {this.state.data.name}
              </Typography>
              <Typography color="textSecondary">
                {this.state.data.login}
              </Typography>
              <Typography variant="body2" component="p">
                {this.state.data.bio}
              </Typography>
            </CardContent>
          )}
        </MuCard>
      </div>
    );
  }
}

export default Card;
