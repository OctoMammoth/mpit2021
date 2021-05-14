import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill={props.fill}
      viewBox="0 0 20 20"
    >
      <g fillRule="evenodd" clipRule="evenodd" opacity={props.opacity}>
        <path d="M7 6a3 3 0 106 0 3 3 0 00-6 0zm3-6a6 6 0 100 12 6 6 0 000-12z"></path>
        <path d="M5 17h10a5 5 0 00-10 0zm13 0v3H2v-3a8 8 0 1116 0z"></path>
      </g>
    </svg>
  );
}

export default Icon;
