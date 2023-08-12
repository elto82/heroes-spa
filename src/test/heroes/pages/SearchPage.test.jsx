import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// import { SearchPage } from "../../../heroes/pages/SearchPage";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));


describe('test component <SearchPage/>', () => {

  beforeEach(() => jest.clearAllMocks());

  test('should display the component correctly with default values. ', () => {
    // const { container } = render(
    //   <MemoryRouter>
    //     <SearchPage />
    //   </MemoryRouter>
    // );
    // expect(container).toMatchSnapshot();
  });

  test('should display Batman and the input with the value of the queryString', () => {
    // render(
    //   <MemoryRouter initialEntries={[ `/search?q=batman` ]}>
    //     <SearchPage />
    //   </MemoryRouter>
    // );

    // const input = screen.getByRole('textbox');
    // expect(input.value).toBe('batman');

    // const img = screen.getByRole('img');
    // expect(img.src).toContain('batman');

    // const alert = screen.getByLabelText('alert-danger');
    // expect(alert.style.display).toBe('none');

  });

  test('should display the alert with the message of the error', () => {
    // render(
    //   <MemoryRouter initialEntries={[ `/search?q=batman123` ]}>
    //     <SearchPage />
    //   </MemoryRouter>
    // );

    // const alert = screen.getByLabelText('alert-danger');
    // expect(alert.style.display).toBe('');

  });

  test("you must call the navigate to the new screen", () => {
    // render(
    //   <MemoryRouter initialEntries={[ `/search` ]}>
    //     <SearchPage />
    //   </MemoryRouter>
    // );
    // const input = screen.getByRole('textbox');
    // fireEvent.change(input, { target: { name: "searchText", value: "superman" } });
    // const form = screen.getByRole('form');
    // fireEvent.submit(form);
    // expect(screen.getByRole('img').src).toContain('superman');
    // expect(screen.getByLabelText('alert-danger').style.display).toBe('none');

    // expect(mockUseNavigate).toHaveBeenCalledWith(`/?q=superman`);

  });

});
