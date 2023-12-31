import React from "react";
import { render, screen } from "@testing-library/react";
import UserTile from "../../../components/user-tile";
import { getUserDetails } from "../../../api/users.js";

jest.mock("../../../api/users.js");

describe("Components | UserTile", () => {
  it("renders user details after successful API call", async () => {
    getUserDetails.mockReturnValue({
      name: "John Doe",
      profilePicUrl: "http://example.com/profile.jpg",
    });

    render(<UserTile userId="1" votes={5} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByAltText("Profile of John Doe")).toBeInTheDocument();
  });
});
