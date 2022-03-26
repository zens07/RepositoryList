import axios from "axios";
export const fetchListGetRepos = async (dispatch) => {
  try {
    const { data } = await axios({
      url: "https://api.github.com/users/zens07/repos",
      method: "GET",
    });
    dispatch({ type: "list-repository/setListRepository", payload: data });
  } catch (error) {
    console.log(error);
  }
};
