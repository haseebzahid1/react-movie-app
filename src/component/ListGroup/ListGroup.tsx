import React, { useState } from "react";
import "../ListGroup/ListGroup.css";
// import styled from 'styled-components';

// interface ListItemProps {
//   active:boolean
// }

// const List = styled.ul`
// list-style: none;
//     padding: 0;
// `
// const ListItem = styled.li<ListItemProps>`
// padding:5px 0px;
// background:${props => props.active ? 'blue' : 'one'}
// `

interface props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = (props: props) => {
  const { items, heading, onSelectItem } = props;
  let [selectIndex, setSelectIndex] = useState(0);
  return (
    <div>
      <h1>{heading}</h1>
      {items.length === 0 && <p>NO item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            // active={index === selectIndex}
            key={item}
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
