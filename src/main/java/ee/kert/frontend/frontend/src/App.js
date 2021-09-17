import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home'
//muudatus
function App() {
  return (
    <div>
      <Route path='/'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
