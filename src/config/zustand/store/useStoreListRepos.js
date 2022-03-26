import create from "zustand";

const initialState = {
  listRepository: [],
  loadingRepo: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "list-repository/setListRepository":
      return {
        ...state,
        listRepository: payload,
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
