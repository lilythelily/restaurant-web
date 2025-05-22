import { render, waitFor } from "@testing-library/react";
import { describe, expect, test, jest } from "@jest/globals";
import Booking from "./Booking";

test("Renders the Booking heading", () => {
  render(<Booking />);
  const dateElement = screen.getByTestId("date-picker");
  expect(dateElement).toBeInTheDocument();
  expect(dateElement).toHaveAttribute("required");

  const timeElement = screen.getByTestId("time-picker");
  expect(timeElement).toBeInTheDocument();
  expect(timeElement).toHaveAttribute("required");

  const guestElement = screen.getByTestId("guest-picker");
  expect(guestElement).toBeInTheDocument();
  expect(guestElement).toHaveAttribute("required");
});

describe("Booking Component useEffect", () => {
  const mockSetFetchAPI = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
  });

  test("fetchRemoteAPI sets fetchAPI on success", async () => {
    const mockFetchAPI = jest.fn();
    const mockResponse = `
      module.exports = {
        fetchAPI: ${mockFetchAPI.toString()}
      };
    `;
    fetch.mockResolvedValueOnce({
      text: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    render(<Booking setFetchAPI={mockSetFetchAPI} />);

    await waitFor(() => {
      expect(mockSetFetchAPI).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  test("fetchRemoteAPI sets fetchAPI to null on error", async () => {
    fetch.mockRejectedValueOnce(new Error("Fetch failed"));

    render(<Booking setFetchAPI={mockSetFetchAPI} />);

    await waitFor(() => {
      expect(mockSetFetchAPI).toHaveBeenCalledWith(null);
    });
  });
});
