import React from 'react';
import Header from './components/Header';
import { Routes , Route} from "react-router-dom";
import Home from './Pages/Home';
import News from "./Pages/News"

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App
