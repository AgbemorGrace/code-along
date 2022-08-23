import Header from "./components/Header"
import Button from"./components/Button"
import NavBar from "./components/NavBar";
//import Practice from "./components/Practice";
import TaskManager from "./components/TaskManager";
import Form from "./components/Form";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Spinner from "./components/Spinner";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App(){
return (<div>
   <BrowserRouter>
   <NavBar />
     <Routes>
      <Route path="/"element= {<Home />}></Route>
      <Route path="/product"element= {<ProductList />}></Route>
      <Route path="/task-manager"element= {<TaskManager />}></Route>
      <Route path="/about"element= {<About />}></Route>
      <Route path="/contact"element= {<Contact />}></Route>
     </Routes>
   </BrowserRouter>
     </div>
);
}
export default App;