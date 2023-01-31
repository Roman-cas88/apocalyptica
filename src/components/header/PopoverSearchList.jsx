import React, { useState, useRef } from 'react';
import { Nav, Overlay, Popover } from "react-bootstrap/";
import data from "../contetnt/Cards/data.json";
import { SearchedItem } from './SearchedItem'

export const PopoverSearchList = (props) => {
  const ref = useRef(null);
  const [show, setShow] = useState(props.show);

  return (
    <div ref={ref} >
      <Overlay
        show={show}
        target={props.target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained" onClick={() => setShow(false)}>
          <Popover.Header as="h3">Search Result:</Popover.Header>
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

  return girls.map((item) => {
    return (
      <Nav.Item key={item.id}>
        {item.title.includes(text) && <SearchedItem item={item} />}
      </Nav.Item>
    )
  })
};

