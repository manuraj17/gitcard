import React, { Component, useEffect, useState } from "react";
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

function Card(props) {
  let [handle, setHandle] = useState(null);
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);

  useEffect(() => {
    const { search } = props.location;
    const { q: handle } = parse(search, { ignoreQueryPrefix: true });

    setHandle(handle);

    axios
      .get(URL + handle)
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, [props.location]);

  return (
    <div>
      <MuCard>
        {data && (
          <CardContent className="card">
            <CardMedia
              className="avatar"
              component="img"
              image={data.avatar_url}
              title={data.name}
            />
            <Typography color="textSecondary" gutterBottom />
            <Typography variant="h5" component="h2">
              {data.name}
            </Typography>
            <Typography color="textSecondary">{data.login}</Typography>
            <Typography variant="body2" component="p">
              {data.bio}
            </Typography>
          </CardContent>
        )}

        {error && (
          <CardContent>
            <Typography variant="h5" component="h2">
              {error.message}
            </Typography>
          </CardContent>
        )}
      </MuCard>
    </div>
  );
}

export default Card;
