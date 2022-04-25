import React, {createContext, useContext} from "react";
import {io, Socket} from "socket.io-client";

const ws = io(process.env.REACT_APP_SOCKET_URL!);

interface IState {
  rooms: string[];
  setRooms: Function;
  currentRoom: [];
  setCurrentRoom: Function;
  members: [];
  setMembers: Function;
  privateMemberMsg: object;
  setPrivateMemberMsg: Function;
  newMessages: object;
  setNewMessages: Function;
  ws: Socket;
}

const initialState: IState = {
  rooms: [],
  setRooms: () => {},
  currentRoom: [],
  setCurrentRoom: () => {},
  members: [],
  setMembers: () => {},
  privateMemberMsg: {},
  setPrivateMemberMsg: () => {},
  newMessages: {},
  setNewMessages: () => {},
  ws,
};

export const AppContext = createContext<IState>(initialState);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  const values = useContext(AppContext);
  const setRooms = (rooms: string[]) => {
    console.log(rooms);
    values.rooms = rooms;
  };
  return (
    <AppContext.Provider value={{...values, setRooms}}>
      {children}
    </AppContext.Provider>
  );
};
