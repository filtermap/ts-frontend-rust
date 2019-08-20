declare module "*.toml" {
  const value: typeof import("../pkg/wasm");
  export default value;
}
