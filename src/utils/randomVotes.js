export const generateRandomVotes = (votesList) => {
  const randomIndex = Math.floor(Math.random() * votesList.length);
  votesList.forEach((votes,index) => {
    if(randomIndex > 0 && randomIndex < votesList.length && randomIndex === index)
    votes.votes = Math.floor(Math.random() * 100);
  });
};
