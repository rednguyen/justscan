import MenuLalunaSpa from './menu-lalunaspa/MenuLalunaSpa';
import PageNotFound from './page-not-found/PageNotFound';
import BeBong from './be-bong/BeBong';
import MenuLalunaTour from './menu-lalunatour/MenuLalunaTour';
import LalunaRestaurant from './menu-lalunarestaurant/LalunaRestaurant';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css"


export default function App() {
  return (
      <>
        <Router>
          <Routes>
              <Route path="/main-menu/lalunaspa/" element={<MenuLalunaSpa/>}/>
              <Route path="/main-menu/bebong/" element={<BeBong/>}/>
              <Route path="/main-menu/lalunatour/" element={<MenuLalunaTour/>}/>
              <Route path="/main-menu/lalunarestaurant/" element={<LalunaRestaurant/>}/>
              <Route
                    path="*" element={<PageNotFound />}/>
          </Routes>
        </Router>
      </>
  )
      
}