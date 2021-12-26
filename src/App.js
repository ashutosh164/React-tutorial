import logo from './logo.svg';
import './App.css';
// we have to defined 'export default' before the function while importing
import Info from './info.js';
// when we did not defiend this function is 'export ' then we can import this
// import {Info} from './info.js'

function App() {
  return (
    <div className="App">

      <Info></Info>

      <AddItem></AddItem>
      <AddItem></AddItem>
      <AddItem></AddItem>

    </div>
  );
}



function AddItem(){
   const value = 'python is ';
  return(
      <form>
        <label for='text-form'>Type something</label>
        <input type='text' value={value} id='text-form'/>
      </form>
   
  );
}

export default App;
