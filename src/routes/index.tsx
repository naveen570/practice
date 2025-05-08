import { Route, Routes } from "react-router";
import { RootLayout } from "./root-layout";
import Home from "./home";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Route>
    </Routes>
  );
};
