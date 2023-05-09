import GlobalContext from "./UseContext";

const GlobalState = (props) => {
  const state = ["Prabin", "Ryu", "Nabaraj"];
  return (
    <GlobalContext.Provider value={state}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
