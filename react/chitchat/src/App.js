import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Chat from './Components/Chat';

function App() {
  return (
    <div class="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </Router>
    </div>


   
   
  );
}

export default App;
