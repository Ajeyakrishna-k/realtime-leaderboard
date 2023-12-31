import { useEffect, useState } from "react";
import { getVotes } from "../../api/votes";
import { generateRandomVotes } from "../../utils/randomVotes";
import LeaderboardHeader from "../leaderboard-header";
import UserTile from "../user-tile";
import styles from "./leaderboard-list.module.css";
import { motion } from "framer-motion";
import { LIST_POLL_DURATION } from "../../constants/commons";

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
    const interval = setInterval(fetchVotes, LIST_POLL_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <LeaderboardHeader />
      <ul className={styles.userList}>
        {votesList.map((vote) => (
          <motion.li
            key={vote.userId}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            layout
            transition={{ duration: 0.5 }}
          >
            <UserTile
              key={vote.userId}
              userId={vote.userId}
              votes={vote.votes}
            />
          </motion.li>
        ))}
      </ul>
    </>
  );
};
export default UserList;
