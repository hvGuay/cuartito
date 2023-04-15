import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
  <div>
    <BrowserRouter> 
        <div className="container">
          <div className="row">
            <div className="col-md-12">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>} />
        <Route path={"/category/:id"} element={<ItemListContainer/>} />
        <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
      </Routes>
            </div>
          </div>
      </div>
    </BrowserRouter>
</div>
);
}

export default App;
