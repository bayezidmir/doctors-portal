import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Appointment from "./pages/Appointment/Appointment";
import SignUp from "./pages/Login/SignUp";
import RequireAuth from "./pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointments from "./pages/Dashboard/MyAppointments";
import MyReview from "./pages/Dashboard/MyReview";
import MyHistory from "./pages/Dashboard/MyHistory";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="history" element={<MyHistory />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
