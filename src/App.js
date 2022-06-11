import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './pages/Login';
import AllDishes from './pages/AllDishes';
import Leaderboard from './pages/Leaderboard';
import './App.css';

function App() {


  return (
    <Layout>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dishes' element={<AllDishes />} />
        <Route path='/leaderboard' element={<Leaderboard/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
