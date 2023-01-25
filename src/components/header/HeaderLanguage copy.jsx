import React, { useContext, useState, useEffect } from 'react';
import LocaleContext from "../../../src/LocaleContext";
import i18n from "../../../src/i18n";
import ukflag from './img/uk.png'
import deflag from './img/de.png'
import Select from 'react-select';     //  npm i --save react-select   https://react-select.com/home#custom-styles
import { useRef } from 'react';

export function HeaderLanguage () {

  // sessionStorage.setItem('language', 'value')
  // Сохранение данных в sessionStorage
  //sessionStorage.setItem('key', 'value');
  // Получение данных из sessionStorage
  //var data = sessionStorage.getItem('key');

    const { locale } = useContext(LocaleContext);
  
    const options = [
      { value: 'en', label: <div><img src={ukflag} width="20" alt="" />  en</div> },
      { value: 'de', label: <div><img src={deflag} width="20" alt="" />  de</div> },
    ]
    //const defVal = locale === 'en' ? 0 : 1 ;
    //const [defVal, setDefVal] = useState(options[locale === 'en' ? 0 : 1])
    //const defVal = useRef(locale === 'en' ? 0 : 1)

    const [test,settest] = useState(options[locale === 'en' ? 0 : 1])

     useEffect(()=> {
    //   setDefVal(options.map(num => {
    //     if (num.value === locale) { return locale === 'en' ? options[0] : options[1]}
    //   }))
    settest(options[locale === 'en' ? 0 : 1])
      console.log("useEf:", locale, test)
     }, [locale]);  

    const selectStyle = { 
      control: (base) => ({
        ...base,
        padding: 0,
        border: '0',
        boxShadow: 'none',
        height: '10px',
      }),
      indicatorSeparator: (base) => ({
        ...base,
         display: 'none',
         height: '10px',
      }),
      valueContainer: (provided) => ({
        ...provided,
        paddingTop: '0',
      }),
      dropdownIndicator: (base) => ({
        ...base,
        color: '#757575',
        padding: 0,
        height: '40px',
       //
      }),
      clearIndicator: (base) => ({
        ...base,
       }),
      container: (base) => ({
        ...base,
      }),
      input: (base) => ({
        ...base,
        height: '10px',
      }),
      singleValue: (provided) => ({
        ...provided,
        height: '40px',   // 
        paddingTop: '0',
      }),
  
      option: (styles, { isFocused }) => {
        return {
          ...styles,
          backgroundColor: isFocused ? '#e9ecef' : 'white',
          color: 'black',
          };
      },
  
  
    };
    function changeLocale(l) {
      if (locale !== l.value) {
        i18n.changeLanguage(l.value);
        // settest(options[l.value=== 'en' ? 0 : 1])
        // console.log('locale, l.value, test: ', locale, l.value, test)

      }
    }

console.log('defaultValue: ', test)
    return (
        <>
            <Select 
              onChange={changeLocale}
              styles={selectStyle}               
              defaultValue={test}
              options={options} 
              // value={}
              />
                      {/* {console.log('defVal:', options[defVal].value)} */}

        </>
    )
};