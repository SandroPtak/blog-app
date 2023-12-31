import './App.css';
import "./style.scss";
import "./media-query.css";
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Detail from './pages/Detail';
import AddEditBlog from './pages/AddEditBlog';
import About from './pages/About';
import NotFound from './pages/NotFound'
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detalhes/:id" element={<Detail/>}/>
        <Route path="/adicionar" element={<AddEditBlog/>}/>
        <Route path="/atualizar/:id" element={<AddEditBlog/>}/>
        <Route path="/sobre" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
