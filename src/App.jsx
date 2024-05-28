import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/main';
import AboutUs from './Components/AboutUs';
import Home from './Pages/Home';
import ContactUs from './Components/ContactUs';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/contact" Component={ContactPage} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
