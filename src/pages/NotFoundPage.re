module Styles = {
  open Css;

  let heading =
    style([
      color(Palette.carbon),
      fontSize(px(100)),
      marginBottom(px(20)),
    ]);
  let link = style([color(Palette.fruit), fontSize(px(20))]);
  let outer = style([textAlign(`center)]);
};

[@react.component]
let make = () =>
  <PageTemplates.CenteredContent>
    <div className=Styles.outer>
      <h1 className=Styles.heading> {React.string("Sorry, no dice!")} </h1>
      <Link href="/" className=Styles.link>
        {React.string("Take me back")}
      </Link>
    </div>
  </PageTemplates.CenteredContent>;