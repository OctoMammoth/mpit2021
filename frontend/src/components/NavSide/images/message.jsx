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
      <g opacity={props.opacity}>
        <path
          fillRule="evenodd"
          d="M15.5 5h-11L2.9 3.8 1.1 6.2 3 7.625V14a1 1 0 001 1h12a1 1 0 001-1V7.625L18.9 6.2l-1.8-2.4L15.5 5zm0 0h.5a1 1 0 011 1v1.625L13.3 10.4a5.5 5.5 0 01-6.6 0L3 7.625V6a1 1 0 011-1h.5l4 3a2.5 2.5 0 003 0l4-3zM4 2a4 4 0 00-4 4v8a4 4 0 004 4h12a4 4 0 004-4V6a4 4 0 00-4-4H4z"
          clipRule="evenodd"
        ></path>
        <path d="M3 6a1 1 0 011-1h.5L2.9 3.8 1.1 6.2 3 7.625V6zM16 5a1 1 0 011 1v1.625L18.9 6.2l-1.8-2.4L15.5 5h.5z"></path>
      </g>
    </svg>
  );
}

export default Icon;
