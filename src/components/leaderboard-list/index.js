import { useEffect, useState } from "react";
import { getVotes } from "../../api/votes";
import { generateRandomVotes } from "../../utils/randomVotes";
import LeaderboardHeader from "../leaderboard-header";
import UserTile from "../user-tile";
import styles from "./leaderboard-list.module.css";

const UserList = () => {
  const [votesList, setVotesList] = useState([]);
  useEffect(() => {
    const fetchVotes = async () => {
      const votes = getVotes();
      generateRandomVotes(votes);
      votes.sort((a, b) => b.votes - a.votes);
      setVotesList(votes);
    };
    fetchVotes();
    const interval = setInterval(fetchVotes, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <LeaderboardHeader />
      <ul className={styles.userList}>
        {votesList.map((vote) => (
          <UserTile key={vote.userId} userId={vote.userId} votes={vote.votes} />
        ))}
      </ul>
    </>
  );
};
export default UserList;
