// This is to fix: Image is missing required "src" property.
// Make sure you pass "src" in props to the `next/image` component. Received: {}
export default {
  src: '/foo.png',
  width: 12,
  height: 12
}
// TODO: 2023-03-15 https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler
