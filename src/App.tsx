import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header/header';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import AddCourses from './Components/AddCourses/AddCourses';
import Details from './Components/Details/Details';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Courses></Courses>
        <About></About>
        <Contact></Contact>
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<Details />} />
          <Route path="/addCourses" element={<AddCourses />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:courseId" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>,
    </div>
  );
}

export default App;
