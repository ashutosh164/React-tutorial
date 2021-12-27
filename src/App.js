import logo from './logo.svg';
import './App.css';
// we have to defined 'export default' before the function while importing
import Info from './info.js';
// when we did not defiend this function is 'export ' then we can import this
// import {Info} from './info.js'
import { useState } from 'react';



function App() {
  return (
    <div className="App">

      <Info></Info>
      <ButtonState/>



    </div>
  );
}


function ButtonState() {
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);

  const UpdateTitleClicked = () => {
    setTitle(' now we have a title')
  }

  const UpdateCountClicked = () => {
    setCount(count+ 1)
  }



  return (
    <div>
      <Data title={title} count={count}></Data>

      <button onClick={UpdateTitleClicked}>Update title</button>
      <button onClick={UpdateCountClicked}>Update count</button>
      
    </div>

  );
}

function Data({title,count}) {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Count: { count }</p>
    </div>
  )
}

export default App;
