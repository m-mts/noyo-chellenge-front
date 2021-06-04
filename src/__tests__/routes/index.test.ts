import { render } from "@testing-library/svelte";
import index from "../../routes/index.svelte";

describe.only('index page tests', () => {
  test("should render", () => {
    expect(() => render(index, { props: { users: [] } })).not.toThrow();
  });
});