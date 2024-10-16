import React from "react";

function MiddlePanel(props: { children?: React.ReactNode }) {
  return (
    <div className="m-auto flex w-screen flex-auto flex-col p-6 sm:w-3/5">
      {props.children}
    </div>
  );
}

export { MiddlePanel };
