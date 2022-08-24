import Header from "./components/Header"
import Button from"./components/Button"
import NavBar from "./components/NavBar";
//import Practice from "./components/Practice";
import TaskManager from "./pages/TaskManager";
import Form from "./components/Form";
import ProductList from "./pages/ProductList";
import Product from "./components/Product";
import Spinner from "./components/Spinner";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";


function App(){
return (<div>
   <BrowserRouter>
   <NavBar />
     <Routes>
      <Route path="/"element= {<Home />}/>
      <Route path="/product"element= {<ProductList />}/>
      <Route path="/products/:productId"element= {<ProductDetail />}/>
      <Route path="/task-manager"element= {<TaskManager />}/>
      <Route path="/about"element= {<About />}/>
      <Route path="/contact"element= {<Contact />}/>
      <Route path="/NotFound"element= {<NotFound />}/>
     </Routes>
   </BrowserRouter>
     </div>
);
}
export default App;