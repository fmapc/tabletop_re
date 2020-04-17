// Entry point
[@bs.val] external document: Js.t({..}) = "document";

let app_container = document##createElement("div");

let makeContainer = text => {
  let container = document##createElement("div");
  container##className #= "container";

  let title = document##createElement("div");
  title##className #= "containerTitle";
  title##innerText #= text;

  let content = document##createElement("div");
  content##className #= "containerContent";

  let () = container##appendChild(title);
  let () = container##appendChild(content);
  let () = document##body##appendChild(container);

  content;
};

ReactDOMRe.render(
  <Application />,
  makeContainer("Reducer From ReactJS Docs"),
);