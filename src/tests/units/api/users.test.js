import { getUserDetails } from "../../../api/users";
import mockUserDetails from "../../../mock-data/users";

describe("Api | users", () => {
  it("should fetch user details for given user id", async () => {
    const userDetails = getUserDetails("user1");
    expect(userDetails).toEqual(mockUserDetails.user1);
  });
});
