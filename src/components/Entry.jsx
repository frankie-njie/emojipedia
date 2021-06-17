import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.emoji}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.desc}</dd>
    </div>
  );
}

export default Entry;
