import React, { Component, useState } from "react";
import { TextField } from "@material-ui/core";
import { withRouter } from "react-router";
import { stringify } from "qs";

function Input(props) {
  let [q, setQ] = useState("");

  const handleChange = event => {
    setQ(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      const search = stringify(
        { q },
        {
          addQueryPrefix: true
        }
      );
      props.history.push("/card" + search);
    }
  };

  return (
    <TextField
      required
      variant={"outlined"}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
    />
  );
}

export default withRouter(Input);
