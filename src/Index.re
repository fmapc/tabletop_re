[@bs.val] external document: Js.t({..}) = "document";
let appContainer = document##getElementById("main");

ReactDOMRe.render(<Application />, appContainer);