// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App" style={{backgroundColor:"skyblue" , color:"yellow"}} >
// //       <h1 style={{color:"red "}}> HELLO </h1>
// //       <h2>HELLO</h2>
// //       <h3>HELLO</h3>
// //       <h4>HELLO</h4>
// //       <h5>HELLO</h5>
// //       <h6>HELLO</h6>
// //     </div>
// //   );
// // }
// //  export default App;
 

// // import { useState, useEffect } from "react";


// // const Home = () => {
// //   const [data, setData] = useState(null);

// //   useEffect(() => {
// //     fetch("https://jsonplaceholder.typicode.com/todos")
// //       .then((res) => res.json())
// //       .then((data) => setData(data));
// //   }, []);

// //   return (
// //     <>
// //       {data &&
// //         data.map((item) => {
// //           return <p key={item.id}>{item.title}</p>;
// //         })}
// //     </>
// //   );
// // };


// // export default Home;

// import { useState, useEffect } from "react";


// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });

//   return <h1>I have rendered {count} times!</h1>;
// }

// export default Timer;

import React from 'react'
import { useState } from 'react'



const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [details, setDetails] = useState({counter: 0, name: ""})

  function increaseCounter() {
    setCounter(counter +1);
    setDetails({counter:details.counter + 1});
  }

  return (
    <div>
      <input type='text' onChange={(e) => setCounter(e.target.value)} />
      <h1>
        {details.name} has clicked {details.counter}
        {name} has clicked {counter} times!!
      </h1>
      <button onClick={increaseCounter}  style={{backgroundColor:"skyblue"}}>Increas</button>
      <button onClick={increaseCounter}  style={{backgroundColor:"skyblue",margin:"1px"}}>Increas</button>
    </div>
  );
};

export default App
