[@bs.val] external document: Js.t({..}) = "document";
let app_container = document##getElementById("main");

ReactDOMRe.render(<Application />, app_container);