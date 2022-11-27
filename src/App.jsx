import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Password from "./Password";
import Success from "./Success/Success";
import Ticket from "./Ticket";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />}></Route>
      <Route path="/password" element={<Password />}></Route>
      <Route path="/ticket" element={<Ticket />}></Route>
      <Route path="/success" element={<Success />}></Route>
    </Routes>
  );
};

export default App;
