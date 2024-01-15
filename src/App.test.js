import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import mockFetch from './mocks/mockFetch';
import App from './App';

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
})

afterEach(() => {
  jest.restoreAllMocks()
});

test('renders the landing page', async () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent(/The fellowship of the tretton37/);
  expect(screen.getByRole("combobox")).toHaveDisplayValue("All Offices");
  expect(screen.getByPlaceholderText('Search')).toHaveValue('');
  expect(await screen.findByTestId("John")).toBeInTheDocument();
  expect(await screen.findByTestId("Jane")).toBeInTheDocument();
});

test('search for employee', async () => {
  render(<App />);
  // Search for John
  const input = await screen.findByTestId('search');
  userEvent.type(input, "John");
  // Make sure John is displayed and not Jane
  expect(await screen.findByTestId("John")).toBeInTheDocument();
  expect(screen.queryByTestId("Jane")).not.toBeInTheDocument();
});


test('filter on office', async () => {
  render(<App />);
  const select = screen.getByRole("combobox");
  // Check Lund is in combo
  expect(await screen.findByRole("option", { name: "Lund" })).toBeInTheDocument();
  // Select option
  userEvent.selectOptions(select, "Lund");
  // Check that value is now Lund
  expect(select).toHaveValue("Lund");
  // Check John is showing but not Jane
  expect(await screen.findByTestId("John")).toBeInTheDocument();
  expect(screen.queryByTestId("Jane")).not.toBeInTheDocument();
});


test('grid and list view', async () => {
  render(<App />);
  const listButton = screen.getByTestId("list");
  // Make sure buttons are there after render
  expect(screen.getByTestId("grid")).toBeInTheDocument();
  expect(listButton).toBeInTheDocument();
  // Check that cards are showing
  expect(await screen.findByTestId("John")).toBeInTheDocument();
  expect(await screen.findByTestId("Jane")).toBeInTheDocument();

  userEvent.click(listButton);
  // Use aria role table to make sure list view is loaded.
  expect(screen.getByRole("table")).toBeInTheDocument();

  // Check the header values
  expect(screen.getByRole('columnheader', { name: "Employee" })).toBeInTheDocument();
  expect(screen.getByRole('columnheader', { name: "Office" })).toBeInTheDocument();
  expect(screen.getByRole('columnheader', { name: "Social Networks" })).toBeInTheDocument();

  // Check cell values
  expect(screen.getByRole('cell', { name: "John" })).toBeInTheDocument();
  expect(screen.getByRole('cell', { name: "Lund" })).toBeInTheDocument();
});
