import { Route, Routes } from 'react-router-dom';
import './App.css';
import ManageItem from './ManageItem/ManageItem';
import Blog from './Pages/Blogs/Blog';
import AddProduct from './Pages/Home/AddProduct/AddProduct';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import MyItem from './Pages/MyItem/MyItem';
import ProductsDetail from './Pages/ProductsDetail/ProductsDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Subscribe from './Pages/Shared/Subscribe/Subscribe';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/product/:productId' element={<RequireAuth>
          <ProductsDetail></ProductsDetail>
        </RequireAuth>}></Route>
        <Route path='/addProduct' element={<RequireAuth>
          <AddProduct></AddProduct>
        </RequireAuth>}></Route>
        <Route path='/manageItem' element={<RequireAuth>
          <ManageItem></ManageItem>
        </RequireAuth>}></Route>
        <Route path='/myItem' element={<RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/subscribe' element={<Subscribe></Subscribe>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
