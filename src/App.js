import logo from './logo.svg';
import './App.css';
// we have to defined 'export default' before the function while importing
import Info from './info.js';
// when we did not defiend this function is 'export ' then we can import this
// import {Info} from './info.js'
import { useState } from 'react';
import SearchBar from './searchBars.js';
// import { useState } from 'react';
import AddItem from './Additem';
import ItemDisplay from './Itemdisplay';


function App() {
  const [filter, setFilter] = useState({});

  const [data, setData] = useState({ items: [] });

  const updateFilter = (searchParams) => {
    setFilter(searchParams);
  }; 

  // const addItemToData = (item) => {
  //   let currentData = data;
  //   currentData['items'].push(item);
  //   setData(currentData)
  // }

  // or

  const addItemToData = (item) => {
    let items = data['items'];
    item.id = items.length;
    items.push(item);
    setData({ items: items })
    console.log(data)
  }

  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilter}></SearchBar>
      <ItemDisplay items={data['items']}></ItemDisplay>
      <AddItem AddItem={addItemToData}></AddItem>
      
      

      {/* <Info></Info>
      <ButtonState/> */}



    </div>
  );
}




// function App() {
//   const [data, setData] = useState({});
//   const updateData = (searchParams) => {
//     setData(searchParams);
//   }; 

//   return (
//     <div className="App">
//       <SearchBar callback={updateData}></SearchBar>
//       <p>Name: {'name' in data ? data['name'] : 'no data'}</p>
//       <p>Price: {'price' in data ? data['price'] : 'no data'}</p>
//       <p>Type: {'type' in data ? data['type'] : 'no data'}</p>
//       <p>Brand: { 'brand' in data ? data['brand']: 'no data'}</p>

//       {/* <Info></Info>
//       <ButtonState/> */}



//     </div>
//   );
// }


// function ButtonState() {
//   const [title, setTitle] = useState('');
//   const [count, setCount] = useState(0);

//   const UpdateTitleClicked = () => {
//     setTitle(' now we have a title')
//   }

//   const UpdateCountClicked = () => {
//     setCount(count+ 1)
//   }



//   return (
//     <div>
//       <Data title={title} count={count}></Data>

//       <button onClick={UpdateTitleClicked}>Update title</button>
//       <button onClick={UpdateCountClicked}>Update count</button>
      
//     </div>

//   );
// }

// function Data({title,count}) {
//   return (
//     <div>
//       <p>Title: {title}</p>
//       <p>Count: { count }</p>
//     </div>
//   )
// }

export default App;
