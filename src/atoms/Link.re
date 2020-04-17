module Styles = {
  open Css;
  let base =
    style([textDecoration(`none), hover([textDecoration(`underline)])]);
};

[@react.component]
let make = (~className, ~href, ~children) =>
  <a
    className={Cn.make([className, Styles.base])}
    href
    onClick={event => {
      ReactEvent.Mouse.preventDefault(event);
      ReasonReactRouter.push(href);
    }}>
    children
  </a>;