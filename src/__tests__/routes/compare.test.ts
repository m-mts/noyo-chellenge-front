import { render } from "@testing-library/svelte";
import compare from "../../routes/compare.svelte";
import type {Address} from "../../models/address";

describe.only('Compare addresses page tests', () => {
  test("should render", () => {
    expect(() => render(compare, { props: { addressesData: new Map<keyof Address, Set<unknown>>() } })).not.toThrow();
  });
});