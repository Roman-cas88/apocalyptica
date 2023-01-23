import React, { useContext } from 'react';
import LocaleContext from "../../../src/LocaleContext";
import i18n from "../../../src/i18n";
import ukflag from './img/uk.png'
import deflag from './img/de.png'
import Select from 'react-select';     //  npm i --save react-select   https://react-select.com/home#custom-styles

export function HeaderLanguage () {
    const options = [
      { value: 'en', label: <div><img src={ukflag} width="20" alt="" />  en</div> },
      { value: 'de', label: <div><img src={deflag} width="20" alt="" />  de</div> },
    ]
    // const [language, setLanguage] = useState(options[0].value);
  
    const { locale } = useContext(LocaleContext);
  
    function changeLocale(l) {
      if (locale !== l.value) {
        i18n.changeLanguage(l.value);
        console.log('locale=',locale)
      }

    }
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
  
    return (
        <>
            <Select 
              onChange={changeLocale}
              styles={selectStyle}               
              defaultValue={options[0]}
              options={options} 
              />
        </>
    )
};