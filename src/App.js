
import './App.css';

import NewsComponent from './NewsComponent'
import { Routes, Route } from 'react-router-dom';
import NewsItem from './NewsItem';
function App() {

  
  return (
    <div className="App">
     
    <Routes>
      <Route path="/" element={<NewsComponent/>} />
      <Route path="/:pub" element={<NewsItem/>} />

    </Routes>
    
    </div>
  );
}

export default App;
