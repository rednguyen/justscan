import MenuLalunaSpa from './menu-lalunaspa/MenuLalunaSpa';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css"


export default function App() {
  return (
      <>
        <Router>
          <Routes>
              <Route path="/main-menu/lalunaspa/" element={<MenuLalunaSpa/>}/>
          </Routes>
        </Router>
      </>
  )
      
}