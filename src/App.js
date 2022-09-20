import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import HomeTemplate from './Templates/HomeTemplate';
import Detail from './Pages/Detail/Detail';
import Register from './Pages/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
