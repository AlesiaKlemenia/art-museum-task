import "@testing-library/jest-dom";

import { validateSchema as schema } from "@/pages/Home/SearchInput/validateScheme";

describe("Input validation scheme", () => {
  test("length", async () => {
    await expect(schema.validate({ search: "x" })).rejects.toBeTruthy();
    await expect(schema.validate({ search: "test" })).resolves.toBeTruthy();
  });
});
