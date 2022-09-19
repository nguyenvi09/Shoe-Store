import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './Pages/Detail';
import Register from './Pages/Register';
import Home from './Pages/Home';
import HomeTemplate from './Templates/HomeTemplate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
