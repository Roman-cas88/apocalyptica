import React, { useContext, useState } from 'react';
import LocaleContext from "../../../src/LocaleContext";
import i18n from "../../../src/i18n";
import ukflag from './img/uk.png'
import deflag from './img/de.png'
// import Select from 'react-select';     //  npm i --save react-select   https://react-select.com/home#custom-styles
import { Dropdown, ButtonGroup } from 'react-bootstrap';

export function HeaderLanguage () {
    const { locale } = useContext(LocaleContext);
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
    const [lang, setLang] = useState(locale);
    const [langLabel, setLangLabel] = useState(options[0].label);
  
    function  handlclick(n){
      setLangLabel(options[n].label);
      setLang(options[n].value);
       if (locale !== lang) {
        i18n.changeLanguage(lang);
        console.log('<>lang:',lang,'locale:', locale)
       }
    }

    // function changeLocale(l) {
    //   console.log('l.value:',l)
    //   const lbl = l.value === 'en' ? options[0] : options[1] 
    //   if (locale !== l.value) {
    //     i18n.changeLanguage(l.value);
    //     setLangLabel(lbl.label);
    //     setLang(lbl.value);
    //   }
    // }

    return (
        <>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle
            className=" bg-transparent btn-outline-secondary border-0 p-0"
            id="lng-dropdown"
          >
            {langLabel}
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item onClick={() => handlclick(0)}>{options[0].value}</Dropdown.Item>
          <Dropdown.Item onClick={() => handlclick(1)}>{options[1].value}</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <p>{lang}</p>
        <p>{locale}</p>


        </>
    )
};