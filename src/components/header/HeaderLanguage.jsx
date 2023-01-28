import React, { useContext, useState, useEffect} from 'react';
import LocaleContext from "../../LocaleContext";
import i18n from "../../i18n";
import ukflag from './img/uk.png'
import deflag from './img/de.png'
import { Dropdown, ButtonGroup } from 'react-bootstrap';

export function HeaderLanguage () {
    const enLabel = (<img src={ukflag} width="20" alt="" />);
    const deLabel = (<img src={deflag} width="20" alt="" />);

    const { locale } = useContext(LocaleContext);
    const [langLabel, setLangLabel] = useState(enLabel);
  
    function  changeLocale(l){
      if (locale !== l) {
        i18n.changeLanguage(l);
      }
    }

    useEffect(()=>{
      setLangLabel(locale === 'en' ? enLabel : deLabel)
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
          <Dropdown.Item onClick={() => changeLocale('en')}>en</Dropdown.Item>
          <Dropdown.Item onClick={() => changeLocale('de')}>de</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </>
    )
};
