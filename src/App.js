import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddInventoryItem from './pages/AddInventoryItem/AddInventoryItem';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home/Home';
import InventoryItems from './pages/Home/InventoryItems/InventoryItems';
import InventoryItemDetails from './pages/InventoryItemDetails/InventoryItemDetails/InventoryItemDetails';
import Login from './pages/LoginSignup/Login/Login';
import RequireAuth from './pages/LoginSignup/RequireAuth/RequireAuth';
import Signup from './pages/LoginSignup/Signup/Signup';
import ManageItems from './pages/ManageItems/ManageItems/ManageItems';
import MyItems from './pages/MyItems/MyItems/MyItems';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/inventory/:inventoryItemId' element={
            <RequireAuth>
              <InventoryItemDetails></InventoryItemDetails>
            </RequireAuth>
          }></Route>
          <Route path='/manageItems' element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }></Route>
          <Route path='/addItem' element={
            <RequireAuth>
              <AddInventoryItem></AddInventoryItem>
            </RequireAuth>
          }></Route>
          <Route path='/myItem' element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes> 

        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

        
    </div>
  );
}

export default App;
