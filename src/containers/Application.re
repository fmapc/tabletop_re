module Styles = {
  open Css;
};

[@react.component]
let make = () => {
  <span> {React.string("Hello, world!")} </span>;
};