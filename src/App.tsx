import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { askForPermissionToReceiveNotifications } from "./push-notification";

const About = lazy(() => import("./modules/About"));
const Home = lazy(() => import("./modules/Home"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
            <button onClick={askForPermissionToReceiveNotifications}>
              Click to receive notifications
            </button>
          </li>
        </ul>
      </nav>
      <Routes>
        <>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
        </>
      </Routes>
    </Suspense>
  </Router>
);

export default App;
