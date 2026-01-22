import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import AppLayout from "./AppLayout";
import Home from "./home";
import Register from "./register";
import AppHome from "./AppHome";
import Settings from "./settings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
      </Route>
      
      <Route path="/app" element={<AppLayout />}>
        <Route path="home" element={<AppHome />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
