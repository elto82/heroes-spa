import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
// import { AppRouter } from "../../router/AppRouter";


describe('Test AppRouter', () => {
  // test('should show login if not authenticated', () => {
  //   const contextValue = {
  //     logged: false,
  //   };
  //   render(
  //     <MemoryRouter initialEntries={[ "/marvel" ]}>
  //       <AuthContext.Provider value={contextValue}>
  //         <AppRouter />
  //       </AuthContext.Provider>
  //     </MemoryRouter>
  //   );
  //   expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(2);
  // });

  test('should show component Marvel if authenticated', () => {
    // const contextValue = {
    //   logged: true,
    //   user: {
    //     id: '123',
    //     name: 'Pepe',
    //   }
    // };
    // render(
    //   <MemoryRouter initialEntries={[ "/login" ]}>
    //     <AuthContext.Provider value={contextValue}>
    //       <AppRouter />
    //     </AuthContext.Provider>
    //   </MemoryRouter>
    // );
    // expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

  });



});
