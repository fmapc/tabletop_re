module CenteredContent = {
  module Styles = {
    open Css;

    let outer =
      style([display(`grid), height(pct(100.0)), width(pct(100.0))]);

    let inner = style([margin(`auto)]);
  };

  [@react.component]
  let make = (~children) =>
    <div className=Styles.outer>
      <div className=Styles.inner> children </div>
    </div>;
};