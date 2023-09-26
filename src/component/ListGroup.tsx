import React,{useState} from "react";

const ListGroup = () => {
  let items = ["Faisalabad", "Lahore", "Karchi", "Islamabad", "Multan"];
//   items=[]
let [selectIndex, setSelectIndex] = useState(-1)
  return (
    <div>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>NO item found</p> : null} */}
      {items.length === 0 && <p>NO item found</p> }
      <ul className="list-group">
        {items.map((item,index) => (
          <li 
          className={selectIndex == index ? "list-group-item active" : 'list-group-item'} 
          key={item} 
           onClick={() => {setSelectIndex(index)}}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
