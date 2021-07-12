import React from 'react';
import './App.css';
import Home from './container/home';

function App() {
  return (
    <Home></Home>
  );
}
export default App;


// function Counter() {
//   const ref = useRef();
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(count + 1); // 这个 effect 依赖于 `count` state
//       ref.current = count;
//       console.log(ref.current);
//     }, 1000);
//     return () => clearInterval(id);
//   }, [ref.current]); // 🔴 Bug: `count` 没有被指定为依赖

//   return <h1>{count}</h1>;
// }
// export default Counter;

// import React, { useState } from 'react';
// import './App.css';
// function Table(props) {
//   function createRows(counts) {
//     console.log('creating');
//     return [counts];
//   }
//   // ⚠️ createRows() 每次渲染都会被调用
//   const [rows, setRows] = useState(() => createRows(2));

//   return (
//     <div>
//       {rows.map(r => <a key={r}>{r}</a>)}<br/>
//       <button onClick={() => setRows(rows.concat(rows.length))}>aaa</button>
//     </div>
//   )
// }
// export default Table;

// function Memotest() {
//   const [val, changeVal] = useState(1);
//   const [valb, changeValb] = useState(1);
//   const mem = useCallback(() => {
//     console.log('memoing')
//     return 1+val;
//   }, [valb]);

//   return (
//     <div>
//       {mem()}, {val}
//       <input type="text" onChange={(e) => changeVal(e.target.value)} />
//       <input type="text" onChange={(e) => changeValb(e.target.value)} />
//     </div>
//   )
// }

// export default Memotest;

// function Parent() {
//   const [count, setCount] = useState(1);
//   const [val, setValue] = useState('');

//   const getNum = useMemo(() => {
//       return Array.from({length: count * 100}, (v, i) => i).reduce((a, b) => a+b)
//   }, [count])

//   return <div>
//       <Child getNum={getNum} />
//       <div>
//           <button onClick={() => setCount(count + 1)}>+1</button>
//           <input value={val} onChange={event => setValue(event.target.value)}/>
//       </div>
//   </div>;
// }

// const Child = React.memo(function ({ getNum }) {
//   return <h4>总和：{getNum}</h4>
// })

// export default Parent;
