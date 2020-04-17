[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  <span>
    {switch (url.path) {
     | [] => <HomePage />
     | _ => <NotFoundPage />
     }}
  </span>;
};