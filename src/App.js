import React, { useReducer } from "react";
import "./App.css";

const initialState = {
  Apple: 0,
  Banana: 0,
  Orange: 0,
  Mango: 0,
  Pineapple: 0,
  Total_Quantity: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, [action.fruit]: state[action.fruit] + 1, Total_Quantity: state.Total_Quantity + 1 };
    case "decrement":
      if (state[action.fruit] > 0) {
        return { ...state, [action.fruit]: state[action.fruit] - 1, Total_Quantity: state.Total_Quantity - 1 };
      }
      return state;
    case "Reset":
      return { ...state, [action.fruit]: 0, Total_Quantity: state.Total_Quantity - state[action.fruit] };
    default:
      throw new Error("Invalid action type");
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className="App">
      <div>
        <h1 className="title">Shopping Cart</h1>
      </div>
      <h1>Apple Count: {state.Apple}</h1>
      <button onClick={() => dispatch({ type: "increment", fruit: "Apple" })}>Increment Apple</button>
      <button onClick={() => dispatch({ type: "decrement", fruit: "Apple" })}>Decrement Apple</button>
      <button onClick={() => dispatch({ type: "Reset", fruit: "Apple" })}>Reset</button>

      <h1>Banana Count: {state.Banana}</h1>
      <button onClick={() => dispatch({ type: "increment", fruit: "Banana" })}>Increment Banana</button>
      <button onClick={() => dispatch({ type: "decrement", fruit: "Banana" })}>Decrement Banana</button>
      <button onClick={() => dispatch({ type: "Reset", fruit: "Banana" })}>Reset</button>
      
      <h1>Orange Count: {state.Orange}</h1>
      <button onClick={() => dispatch({ type: "increment", fruit: "Orange" })}>Increment Orange</button>
      <button onClick={() => dispatch({ type: "decrement", fruit: "Orange" })}>Decrement Orange</button>
      <button onClick={() => dispatch({ type: "Reset", fruit: "Orange" })}>Reset</button>
      
      <h1>Mango Count: {state.Mango}</h1>
      <button onClick={() => dispatch({ type: "increment", fruit: "Mango" })}>Increment Mango</button>
      <button onClick={() => dispatch({ type: "decrement", fruit: "Mango" })}>Decrement Mango</button>
      <button onClick={() => dispatch({ type: "Reset", fruit: "Mango" })}>Reset</button>
      
      <h1>Pineapple Count: {state.Pineapple}</h1>
      <button onClick={() => dispatch({ type: "increment", fruit: "Pineapple" })}>Increment Pineapple</button>
      <button onClick={() => dispatch({ type: "decrement", fruit: "Pineapple" })}>Decrement Pineapple</button>
      <button onClick={() => dispatch({ type: "Reset", fruit: "Pineapple" })}>Reset</button>

      <h1>Total Quantity: {state.Total_Quantity}</h1>
    </div>
  );
}

export default App;
