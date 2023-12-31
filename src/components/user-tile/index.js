import styles from "./user-tile.module.css";
import { getUserDetails } from "../../api/users.js";

const UserTile = (props) => {
  const { userId, votes } = props;
  const userDetails = getUserDetails(userId);
  const { name, profilePicUrl } = userDetails;
  return (
    <li className={styles.userTile}>
      <img
        src={profilePicUrl}
        alt={`Profile of ${name}`}
        className={styles.profilePic}
      />
      <h2 className={styles.userName}>{name}</h2>
      <p className={styles.userVotes}>{votes}</p>
    </li>
  );
};

export default UserTile;
