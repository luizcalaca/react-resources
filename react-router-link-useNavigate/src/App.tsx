// src/App.tsx

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';
import Coffee from './pages/coffee';
import NavBar from './components/nav-bar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/coffees" element={ <CoffeeList /> } />
          <Route path="/coffee" element={ <Coffee /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
