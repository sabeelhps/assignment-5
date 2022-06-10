import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './pages/Login';
import AllDishes from './pages/AllDishes';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dishes' element={ <AllDishes/> }/>
      </Routes>
    </Layout>
  );
}

export default App;
