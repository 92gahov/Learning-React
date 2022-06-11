import Counter from './Components/Counter';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Users from './Views/Users';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='relative pb-12 min-h-screen'>
      <Router>

        <Header />
        <Counter />
        <Routes>
          {/* <Route path='/' element={<div>Home page</div>}></Route>
          <Route path='/about' element={<div>About us</div>}></Route> */}
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/users' element={<Users />}></Route>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
