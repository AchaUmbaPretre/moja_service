import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import BlogFormation from './pages/formation/BlogFormation';
import BlogCuisiniere from './pages/cuisiniere/BlogCuisiniere';
import BlogHotesse from './pages/hotesse/BlogHotesse';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cuisiniere' element={<BlogCuisiniere/>}/>
          <Route path='/hotesse' element={<BlogHotesse/>}/>
          <Route path='/formation' element={<BlogFormation/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
