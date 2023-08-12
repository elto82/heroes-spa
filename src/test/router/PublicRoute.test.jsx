import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../router/PublicRoute";
import { AuthContext } from "../../auth/context/AuthContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Test PublicRoute', () => {

  test('should show children if not authenticated', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>PublicRoute</h1>
        </PublicRoute>
      </AuthContext.Provider>);
    expect(screen.getByText('PublicRoute')).toBeTruthy();
  });

  test('should navigate if authenticated', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Falcao',
        id: '123'
      }
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={[ '/login' ]}>
          <Routes>
            <Route path="login" element={
              <PublicRoute>
                <h1>PublicRoute</h1>
              </PublicRoute>
            } />
            <Route path="marvel" element={<h1>Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>);
    expect(screen.getByText('Marvel')).toBeTruthy();

  });

});
