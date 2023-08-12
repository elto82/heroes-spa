import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../auth/context/AuthContext";
import { PrivateRoute } from "../../router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Test PrivateRoute', () => {
  test('should show children if  authenticated', () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: 'ABC123',
        name: 'Pepe',
      }
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={[ '/search?q=batman' ]}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>);

    expect(screen.getByText('Ruta privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
  });
});


