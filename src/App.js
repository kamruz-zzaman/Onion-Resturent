import './App.css';
import Food_Menus from './component/Food_Menus/Food_Menus';
import Navbar from './component/Header/Navbar/Navbar';

function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>
      <Food_Menus></Food_Menus>

    </div>
  );
}

export default App;
