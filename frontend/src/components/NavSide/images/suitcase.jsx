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
        <path d="M6 4a3 3 0 003 3h2a3 3 0 100-6H9a3 3 0 00-3 3z"></path>
        <path
          fillRule="evenodd"
          d="M15.5 7h-11L2.9 5.8 1.1 8.2 3 9.625V16a1 1 0 001 1h12a1 1 0 001-1V9.625L18.9 8.2l-1.8-2.4L15.5 7zm0 0h.5a1 1 0 011 1v1.625L13.3 12.4a5.5 5.5 0 01-6.6 0L3 9.625V8a1 1 0 011-1h.5l4 3a2.5 2.5 0 003 0l4-3zM4 4a4 4 0 00-4 4v8a4 4 0 004 4h12a4 4 0 004-4V8a4 4 0 00-4-4H4z"
          clipRule="evenodd"
        ></path>
        <path d="M3 8a1 1 0 011-1h.5L2.9 5.8 1.1 8.2 3 9.625V8zM16 7a1 1 0 011 1v1.625L18.9 8.2l-1.8-2.4L15.5 7h.5z"></path>
      </g>
    </svg>
  );
}

export default Icon;
