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