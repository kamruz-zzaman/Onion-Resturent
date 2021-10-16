import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUS from './component/About Us/AboutUS/AboutUS';
import Food_Menus from './component/Food_Menus/Breakfast/Food_Menus';
import Dinner from './component/Food_Menus/Dinner/Dinner';
import Lunch from './component/Food_Menus/Lunch/Lunch';
import MenuNav from './component/Food_Menus/Menu_Navbar/MenuNav';
import Navbar from './component/Header/Navbar/Navbar';

function App() {
  return (
    <div className="App ">


      <Router>
        <Navbar></Navbar>
        <MenuNav></MenuNav>
        <Switch>
          <Route path='/breakfast'>
            <Food_Menus></Food_Menus>
          </Route>
          <Route path='/lunch'>
            <Lunch></Lunch>
          </Route>
          <Route path='/dinner'>
            <Dinner></Dinner>
          </Route>
        </Switch>
        <AboutUS></AboutUS>
      </Router>

    </div>
  );
}

export default App;
