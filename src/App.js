import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import Category from './pages/Category'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import CreateListing from './pages/CreateListing';
import Listing from './pages/Listing';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/Contact';
import EditListing from './pages/EditListing';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/category/:categoryName' element={<Category />}/>
        <Route path='/category/:categoryName/:listingId' element={<Listing />}/>
        <Route path='/profile' element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/create-listing' element={<CreateListing/>}/>
        <Route path='/edit-listing/:listingId' element={<EditListing/>}/>
        <Route path='/contact/:landlordId' element={<Contact />}/>
      </Routes>
      <Navbar/> 
    </Router>

    <ToastContainer
      position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
    />
    </>
  );
}

export default App;
