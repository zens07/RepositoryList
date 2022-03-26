import create from "zustand";

const initialState = {
  listRepository: [],
  loadingRepo: false,
  error: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "list-repository/setListRepository":
      return {
        ...state,
        listRepository: payload,
      };
    case "list-repository/setLoading":
      return {
        ...state,
        loadingRepo: payload,
      };
    case "list-repository/setError":
      return {
        ...state,
        error: payload,
      };
    default:
      return;
  }
};

const useStoreListRepos = create((set) => ({
  ...initialState,
  dispatch: ({ type, payload }) =>
    set((state) => reducer(state, { type, payload })),
}));

export default useStoreListRepos;
