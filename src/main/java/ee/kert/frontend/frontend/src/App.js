import './App.css';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart';
import AddItem from './pages/AddItem'
import AddCat from './pages/AddCat';
import ViewCat from './pages/ViewCat';
import AdminHome from './pages/AdminHome';
import SingleItem from "./pages/SingleItem";
import EditItem from "./pages/EditItem";
//muudatus
function App() {
  return (
    <div>
      <Navbar/>
    <Route path='/'>
      <Home />
    </Route>
    <Route path='/cart'>
        <Cart />
    </Route>
    <Route path='/add-item'>
        <AddItem />
    </Route>
    <Route path='/add-cat'>
        <AddCat />
    </Route>
    <Route path='/view-cat'>
        <ViewCat />
    </Route>
    <Route path='/admin'>
        <AdminHome />
    </Route>
    <Route path='/item/:itemId'>
        <SingleItem />
    </Route>
    <Route path='/edit-item/:itemId'>
        <EditItem                                                                                       />
    </Route>
    </div>
  );
}

export default App;
