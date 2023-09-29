import React, { useState } from "react";
import "./App.css";
import FormZod from "./component/FormZod";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
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
import categories from "./expense-tracker/Categories";

function App() {

  const [selectCategory,setselectCategory] = useState('');
 
  const [expenses, setExpenses]= useState([
      {id:1, description: 'aaa' , amount:10, category: 'Utilities'},
      {id:2, description: 'bbb' , amount:10, category: 'Utilities'},
      {id:3, description: 'ccc' , amount:10, category: 'Utilities'},
      {id:4, description: 'ddd' , amount:10, category: 'Utilities'},
    ])

    const visibleExpenses = selectCategory ? expenses.filter((e) => e.category === selectCategory) : expenses

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={(expense) => setExpenses([...expenses,{...expense, id:expenses.length + 1}])} /> {/*note line*/}
      </div>
      <div className="mb-3">
      <ExpenseFilter onSelectCategory={(category) => setselectCategory(category)} />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />
    </div>
  );
}

export default App;
