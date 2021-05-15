import React from "react";

function Icon(props) {
    console.log(props)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill={props.fill}
      viewBox="0 0 20 20"
    >
      <g fillRule="evenodd" clipRule="evenodd" opacity={props.opacity}>
        <path d="M10 4.072L6.318 7.701h7.364L10 4.072zm.847-3.737a1.236 1.236 0 00-1.693 0L.3 9.061c-.668.659-.147 1.715.846 1.715h17.708c.993 0 1.514-1.056.846-1.715L10.847.335z"></path>
        <path d="M5.722 10.775l.485 5.21c.049.532.545.94 1.14.94h5.306c.595 0 1.091-.409 1.14-.94l.485-5.21H5.722zM4.479 7.701c-1.339 0-2.391 1.025-2.28 2.22l.588 6.32C2.984 18.366 4.967 20 7.347 20h5.306c2.38 0 4.363-1.634 4.56-3.76l.588-6.32c.112-1.194-.941-2.22-2.28-2.22H4.48z"></path>
      </g>
    </svg>
  );
}

export default Icon;
