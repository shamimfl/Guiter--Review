import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import Blogs from './Components/Blogs/Blogs';
import Dashbord from './Components/Dashbord/Dashbord';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/review' element={<Review></Review>}/>
          <Route path='/dashbord' element={<Dashbord></Dashbord>} />
          <Route path='/blogs' element={<Blogs></Blogs>} />
          <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      
    </div>
  );
}

export default App;
