import MenuLalunaSpa from './menu-lalunaspa/MenuLalunaSpa';
import PageNotFound from './page-not-found/PageNotFound';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css"


export default function App() {
  return (
      <>
        <Router>
          <Routes>
              <Route path="/main-menu/lalunaspa/" element={<MenuLalunaSpa/>}/>
              <Route
                    path="*" element={<PageNotFound />}/>
          </Routes>
        </Router>
      </>
  )
      
}