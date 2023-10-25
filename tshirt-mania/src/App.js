import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/orderreview' element={<OrderReview/>}/>
     </Routes>
    </div>
  );
}

export default App;
