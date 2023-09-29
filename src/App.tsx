import React, { useState } from "react";
import "./App.css";
import FormZod from "./component/FormZod";
import ExpenseList from "./expense-tracker/components/ExpenseList";
// import Button from "./component/Button";
// import Alert from "./component/Alert";
// import ListGroup from "./component/ListGroup";
// import { FaBeer } from "react-icons/fa";
// import Like from "./component/Like";
// import Object from "./component/Object";
// import ExpandableText from "./component/ExpandableText";
// import Form from "./component/Form";
// import Object from "./component/Object";
// import Array from "./component/Array";
function App() {
 
  const [expenses, setExpenses]= useState([
      {id:1, description: 'aaa' , amount:10, category: 'Utilities'},
      {id:2, description: 'bbb' , amount:10, category: 'Utilities'},
      {id:3, description: 'ccc' , amount:10, category: 'Utilities'},
      {id:4, description: 'ddd' , amount:10, category: 'Utilities'},
    ])


  return (
    <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />
  );
}

export default App;
