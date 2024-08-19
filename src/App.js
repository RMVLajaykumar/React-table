import { Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login'
import Transaction from './components/Transaction'

function App() {
  return (
    <Routes>
      <Route path='/'
      element={<Login/>}/>
      <Route path='/transaction'
      element={<Transaction/>}/>

    </Routes>
  );
}

export default App;
