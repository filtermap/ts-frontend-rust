import React from "react";
import * as functions from "./functions";
import wasm from "../Cargo.toml";

const n = 10;

const App = (): JSX.Element => {
  return (
    <>
      <p>{wasm.hello("world")}</p>
      <p>
        TypeScript fibonacci({n}): {functions.fibonacci(n)}
      </p>
      <p>
        Rust fibonacci({n}): {wasm.fibonacci(n)}
      </p>
    </>
  );
};

export default App;
