import React from "react";
import Users from "./components/Users";
import { UsersProvider } from "./Context/UserContext";

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
