import { authReducer } from "../../../auth/context/authReducer";
import { types } from "../../../auth/types/types";

describe("Test authReducer", () => {
  test("should return default state", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("should call the login authenticate and set the user", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Juan",
        id: "123",
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, user: action.payload });
  });

  test("should delete user name and logged in false", () => {
    const state = {
      logged: true,
      user: { id: "123", name: "Juan" },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: false });
  });
});
