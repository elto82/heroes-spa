import { types } from "../../../../auth/types/types";

describe("Test types", () => {
  test("should return this types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
