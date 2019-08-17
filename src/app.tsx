import React from "react";
import * as functions from "./functions";
import * as lib from "./lib.rs";

const n = 10;

const App = (): JSX.Element => {
  return (
    <>
      <p>hello, world</p>
      <p>
        TypeScript fibonacci({n}): {functions.fibonacci(n)}
      </p>
      <p>
        Rust fibonacci({n}): {lib.fibonacci(n)}
      </p>
    </>
  );
};

export default App;
