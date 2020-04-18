open Jest;
open Expect;
include Bootstrap;

describe("Application", () => {
  test("renders correctly", () => {
    let render = () => Enzyme.shallow(<Application />);
    expect(render) |> not |> toThrow;
  })
});

describe("Application.Helmet.applyPrefix", () => {
  test("prefixes given string with application title", () =>
    expect(Application.Helmet.applyPrefix("Route"))
    |> toEqual(Core.Config.title ++ " | " ++ "Route")
  )
});