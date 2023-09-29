import React from 'react'
import categories from "../Categories";
interface props {
    onSelectCategory:(category:string) => void;
} 
const ExpenseFilter = ({onSelectCategory}: props) => {
    
  return (
    <select className='form-select' onChange={(event) => onSelectCategory(event.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) =>  <option key={category} value={category}>{category}</option>)}

    </select>
  )
}

export default ExpenseFilter


// lecture no 58 Building ExpenseFilter