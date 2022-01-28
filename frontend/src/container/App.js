
import '../styles/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
 import ProductDetail from '../components/ProductDetail/ProductDetail'; 
import Cart from '../components/Cart/Cart';
 import Form from '../components/forms/Form.jsx'; 
 import Home from '../components/home/Home.jsx';
 import NotFoundPage from '../components/notFound/NotFoundPage';
 import Register from '../components/forms/Register';
import Login from '../components/forms/Login';
 import HeaderLogo from '../components/home/HeaderLogo';
import LoadProduct from '../components/forms/LoadProduct';
import EditProduct from '../components/forms/EditProduct';


function App() {
  return (
    
    <BrowserRouter>
      {/* <HeaderLogo/> */} {/* Solo tiene que aparecer en Desktop */}
      <Routes>

        <Route path="/luminati" element={<Home/>} />
        <Route path="/detalleProducto" element={<ProductDetail/>} />
        <Route path="/carrito" element={<Cart/>} />
        <Route path="/formulario/*" element={<Form/>}> 
                    <Route path="login" element={<Login/>}/>
                    <Route path="registrarse" element={<Register/>}/>
                    <Route path="cargarProducto" element={<LoadProduct/>}/> {/* Esto es para el Admin */}
                    <Route path="editarProducto" element={<EditProduct/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>} />

      </Routes>
    </BrowserRouter>
       
  );
}

export default App;
