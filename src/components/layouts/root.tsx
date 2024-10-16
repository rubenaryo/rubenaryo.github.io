import React from "react";

/**
 * Root component that wraps the entire page.
 * Adds dividers between the panels
 * @param props
 * @returns
 */
function Root(props: { children?: React.ReactNode }) {
  return <div className={"flex min-h-screen flex-col"}>{props.children}</div>;
}

export { Root };
