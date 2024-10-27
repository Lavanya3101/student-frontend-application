import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from './Home';
import StudentsView from './components/Student/StudentsView';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import AddStudent from './components/Student/AddStudent';
import EditStudent from './components/Student/EditStudent';
import StudentProfile from './components/Student/StudentProfile';
function App() {
  return (
    <main className="container">
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/viewStudents" element={<StudentsView/>}/>
          <Route path='/addStudent' element={<AddStudent/>}/>
          <Route path='/editStudent/:id' element={<EditStudent/>}/>
<Route path='/Student-profile/:id' element={<StudentProfile/>}/>
        </Routes>
      </Router>
    
    </main>
  );
}

export default App;
