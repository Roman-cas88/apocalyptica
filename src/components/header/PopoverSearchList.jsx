// import { match } from 'assert';
import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { Nav, Overlay, Popover } from "react-bootstrap/";
import data from "../contetnt/Cards/data.json";
import { SearchedItem } from './SearchedItem'

export const PopoverSearchList = (props) => {
  const ref = useRef(null);
   const [show, setShow] = useState(false);
  //  const [isSearch , setIsSearch] = useState(false);
 
    useEffect(() => {
      setShow(props.seachInput ? true : false)

    },[props.seachInput] )

  return (
    <div ref={ref} >
      <Overlay
        show={show}
        target={props.target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained" onClick={() => setShow(false)} className="mw-100">
          <Popover.Header as="h3">`Search Result: {}`</Popover.Header>
          <Popover.Body className='p-0 '>
            <SearchList text={props.seachInput} />
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

  return allProducts.map((item) => {
    return (
      <Nav.Item key={item.id}>
        {item.title.toLowerCase().includes(text.toLowerCase()) && <SearchedItem item={item} /> }
      </Nav.Item>
    )
  } )
};

