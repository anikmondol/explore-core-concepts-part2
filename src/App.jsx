import './App.css'
import './Button.css'
import Friends from './Friends';
import Users from './Users';
import Counter from './counter';
import Team from './team';


function App() {
  function handleClick1(){
    alert('button clicked-1');
  };
  const handleClick2 = ()=>{
    alert('button clicked-2');
  }
  const addToFive = (num) =>{
    alert(num + 4);
  };
  return (
    <>
      <h2>Vite + React</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onclick="functionName()">Click Me</button> */}
      <button className='button1' onClick={handleClick1}>Click-1</button>
      <button className='button2' onClickCapture={handleClick2}>Click-2</button>
      <button className='button3' onClick={()=>{alert('button clicked-3')}}>Click-3</button>
      <button className='button4' onClick={() => 
      //vejailla topices
      {addToFive(4)}}>click-4</button>
    </>
  )
}

export default App
