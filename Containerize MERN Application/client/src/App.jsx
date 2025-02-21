import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Student from './Components/Student'
import Category from './Components/Category'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'
import AddStudent from './Components/AddStudent'
import EditStudent from './Components/EditStudent'
// import PrivateRoute from './Components/PrivateRoute'
import Start from './Components/Start'
import StudentLogin from './Components/StudentLogin'
import StudentDetail from './Components/StudentDetails'
import AdminRegister from './Components/AdminRegister'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/adminlogin' element={<Login />}></Route>
        <Route path='/student_login' element={<StudentLogin />}></Route>
        <Route path='/admin_register' element={<AdminRegister />}></Route>
        <Route path='/student_detail/:id' element={<StudentDetail />}></Route>
        <Route path='/dashboard' element={<Dashboard /> }>
          <Route path='' element={<Home />}></Route>
          <Route path='/dashboard/student' element={<Student />}></Route>
          <Route path='/dashboard/category' element={<Category />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
          <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
          <Route path='/dashboard/add_student' element={<AddStudent />}></Route>
          <Route path='/dashboard/edit_student/:id' element={<EditStudent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
