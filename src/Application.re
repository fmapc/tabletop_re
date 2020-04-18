module Helmet = {
  let applyPrefix = contents => "Tabletop | " ++ contents;

  let computeTitle = (url: ReasonReactRouter.url) =>
    switch (url.path) {
    | [] => "Home"
    | _ => "Not found"
    };

  [@react.component]
  let make = () => {
    let title = ReasonReactRouter.useUrl() |> computeTitle |> applyPrefix;

    <BsReactHelmet title />;
  };
};

module Routes = {
  [@react.component]
  let make = () => {
    let url = ReasonReactRouter.useUrl();

    switch (url.path) {
    | [] => <HomePage />
    | _ => <NotFoundPage />
    };
  };
};

[@react.component]
let make = () => <React.Fragment> <Helmet /> <Routes /> </React.Fragment>;