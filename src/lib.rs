extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn hello(s: &str) -> String {
    format!("hello, {}", s)
}

#[wasm_bindgen]
pub fn fibonacci(n: i32) -> i32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 2) + fibonacci(n - 1),
    }
}

#[cfg(test)]
mod tests {
    use super::hello;
    #[test]
    fn test_hello() {
        assert_eq!(hello("world"), "hello, world");
    }

    use super::fibonacci;
    #[test]
    fn test_fibonacci() {
        assert_eq!(fibonacci(42), 267914296);
    }
}
