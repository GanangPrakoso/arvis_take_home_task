import React from "react";

export default function InstaPic(props) {
  const { id, src } = props;

  return (
    <div
      className="instagram-pic"
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  );
}
