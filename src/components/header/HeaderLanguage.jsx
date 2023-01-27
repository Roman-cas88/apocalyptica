import React, { useContext, useState, useEffect} from 'react';
import LocaleContext from "../../../src/LocaleContext";
import i18n from "../../../src/i18n";
import ukflag from './img/uk.png'
import deflag from './img/de.png'
import { Dropdown, ButtonGroup } from 'react-bootstrap';

export function HeaderLanguage () {
    const options = [
      {
        value: "en",
        label: (<img src={ukflag} width="20" alt="" />)
      }, 
      {
        value: "de",
        label: (<img src={deflag} width="20" alt="" />)
      } 
    ];
    const { locale } = useContext(LocaleContext);
  
    // let option = options.find(obj => obj.value === locale);  
    const [langLabel, setLangLabel] = useState('');
  
    function  handlclick(n){
      if (locale !== options[n].value) {
        i18n.changeLanguage(options[n].value);
      }
    }

    useEffect(()=>{
      setLangLabel(options.find(obj => obj.value === locale).label);
    },[locale])

    return (
        <>
        <Dropdown as={ButtonGroup} className="d-inline-block">
          <Dropdown.Toggle
            className=" bg-transparent btn-outline-secondary border-0 pt-0"
            id="lng-dropdown"
          >
            {langLabel}
          </Dropdown.Toggle>
          <Dropdown.Menu >
          <Dropdown.Item onClick={() => handlclick(0)}>{options[0].value}</Dropdown.Item>
          <Dropdown.Item onClick={() => handlclick(1)}>{options[1].value}</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </>
    )
};
