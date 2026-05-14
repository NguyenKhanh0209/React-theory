import { Routes, Route, NavLink } from "react-router-dom";
import Practice1 from "./pages/beginner/Practice1";
import "./App.css";

function Home() {
  return (
    <div className="home-content">
      <h2>Welcome to React Practice Playground 🚀</h2>
      <p>
        Select an exercise from the sidebar to start practicing your React
        skills.
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Practice Playground</h1>
      </header>

      <div className="app-main">
        <aside className="app-sidebar">
          <h3>Exercises</h3>

          <div className="sidebar-section">
            <h4>Beginner</h4>
            <ul>
              <li>
                <NavLink
                  to="/beginner/Practice1"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Practice 1: Basic Component
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h4>Intermediate</h4>
            <ul>
              <li className="coming-soon">More coming soon...</li>
            </ul>
          </div>
        </aside>

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beginner/Practice1" element={<Practice1 />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
