import React, { useState, useRef, useContext } from 'react';
import { useEffect } from 'react';
import { Nav, Overlay, Popover } from "react-bootstrap/";
import data from "../contetnt/Cards/data.json";
import { SearchedItem } from './SearchedItem';
import {isShownSearchContext} from "./HeaderNavIcons"

export const PopoverSearchList = (props) => {
   const {setIsShownSearch} = useContext(isShownSearchContext)

  const ref = useRef(null);
    const [isShow, setIsShow] = useState(false);
   const [resFooter , setResFooter] = useState(0);

    useEffect(() => {
       setIsShow(props.seachInput ? true : false)


    },[props.seachInput] )

  return (
    <div ref={ref} >
      <Overlay
        show={isShow}
        target={props.target}
        placement="bottom-end"
        container={ref}
        containerPadding={20}

      >
        <Popover id="popover-contained" onClick={() => {setIsShow(false); setIsShownSearch(false)}} className="mw-100">
          <Popover.Body className='p-0 '>
            <SearchList text={props.seachInput} />
            {/* <SearchList text={props.seachInput} setResFooter={setResFooter}/> */}
            {/* <PopoverFooter resFooter={resFooter}/> */}
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}


const SearchList = (props) => {
  const text = props.text;
  const { girls } = data;
  const { ticket } = data;
  const { shirts } = data;
  const { hoods } = data;
  const { stuff } = data;
  const  allProducts = [...girls,...ticket,...shirts,...hoods,...stuff];
  let i = 0;

  return allProducts.map((item) => {
  let res = item.title.toLowerCase().includes(text.toLowerCase());
  i= res ? i+1 : i;
  // props.setResFooter(i);
    return (

      <Nav.Item key={item.id}>
        {res && i<=6 && <SearchedItem item={item}  /> }
      </Nav.Item>

    )
  } 
  )
};

const PopoverFooter = (props) => {
const foot = props.resFooter === 0 ? `No results found` : `${props.resFooter} results`;

return (
  <Nav className='p-2 w-100 justify-content-center'>
   {foot}
   </Nav>
)
}

//  Warning: Cannot update a component (`PopoverSearchList`) while rendering a different component (`SearchList`). To locate the bad setState() call inside `SearchList`,