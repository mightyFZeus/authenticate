import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import ProtectedRoute from "./ProtectedRoutes";

import { AuthProvider,} from "./components/context/AuthContext";
import LandingPage from "./components/LandingPage";
import ForgotPassword from "./components/ForgotPassword";


function App() {
    
    
  
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Navbar />
                    <Route exact path="/" component={LandingPage} />
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route path="/login" component={Login} />
                    <ProtectedRoute
                        path="/home"
                        component={Home}
                       
                    />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
