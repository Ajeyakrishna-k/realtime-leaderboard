import mockUserDetails from "../mock-data/users";

export const getUserDetails = (userId) => {
  return mockUserDetails[userId];
};
