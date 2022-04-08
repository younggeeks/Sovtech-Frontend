import React, { Dispatch } from "react";

export type GlobalContext = {
  toggleModal: Dispatch<React.SetStateAction<boolean>>;
  showModal?: boolean;
};

const AppContext = React.createContext<GlobalContext>({
  toggleModal: () => {},
});

export default AppContext;
