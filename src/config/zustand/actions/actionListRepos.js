import axios from "axios";
export const fetchListGetRepos = async (dispatch) => {
  try {
    dispatch({ type: "list-repository/setLoading", payload: true });
    const { data } = await axios({
      url: "https://api.github.com/users/zens07/repos",
      method: "GET",
    });
    dispatch({ type: "list-repository/setListRepository", payload: data });
    dispatch({ type: "list-repository/setLoading", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "list-repository/setLoading", payload: false });
  }
};
