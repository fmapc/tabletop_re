let prefix = contents => "Tabletop | " ++ contents;

let computeTitle = (url: ReasonReactRouter.url) =>
  switch (url.path) {
  | [] => prefix("Home")
  | _ => prefix("Not found")
  };

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  <BsReactHelmet title={computeTitle(url)} />;
};