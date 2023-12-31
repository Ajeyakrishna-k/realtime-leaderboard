import { getVotes } from "../../../api/votes";
import mockVotes from "../../../mock-data/votes";

describe("Api | users", () => {
  it("should fetch list of votes", async () => {
    const votesList = getVotes();
    expect(votesList).toEqual(mockVotes);
  });
});
