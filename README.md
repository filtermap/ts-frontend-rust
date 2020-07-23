# ts-frontend-rust

## install

```sh
git clone <repository> <dir>
cd <dir>
yarn
rustup component add rustfmt
cargo install wasm-bindgen-cli
cargo install wasm-pack
```

## develop

```sh
yarn dev
```

## format

```sh
yarn format
```

## type check

```sh
yarn type-check
```

Type check fails before build.

## lint

```sh
yarn lint
```

## test

Only node-like environment is available for TypeScript.

```sh
yarn test
```

## build

```sh
yarn build
```

## type check, lint, test and build

```sh
yarn predeploy
```

## deploy

```sh
yarn deploy
```
