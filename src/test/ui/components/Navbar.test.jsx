import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../ui";
import { AuthContext } from "../../../auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));


describe('test Navbar', () => {
  const contextValue = {
    logged: true,
    user: {
      name: 'test'
    },
    logout: jest.fn()
  };
  beforeEach(() => jest.clearAllMocks());

  test('should show name of user logged', () => {

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("test")).toBeTruthy();

  });

  test('should display the logout and navigate when you click on the button', () => {

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const logoutButton = screen.getByRole('button');
    fireEvent.click(logoutButton);
    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { "replace": true });

  });

});
