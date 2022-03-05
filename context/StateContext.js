import { createContext, useState } from "react";

export const StateContext = createContext();

export default function StateContextProvider(props) {
  // グローバルに共有したいStateを定義
  const [selectedTask, setSelectedTask] = useState({ id: 0, title: "" });

  return (
    <StateContext.Provider
      value={{
        selectedTask,
        setSelectedTask,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
