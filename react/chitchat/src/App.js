import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Chat from './Components/Chat';

function App() {
  return (
    <>
   
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/chat" element={<Chat/>}/>
      
    </Routes>
   </Router>

      
      </>
  );
}

export default App;
