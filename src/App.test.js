import { render, waitFor } from "@testing-library/react";
import { describe, expect, test, jest } from "@jest/globals";
import Booking from "./Booking";

test("Renders the BookingForm heading", () => {
  render(<Booking />);
  const headingElement = screen.getByText("Select Occasion");
  expect(headingElement).toBeInTheDocument();
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
