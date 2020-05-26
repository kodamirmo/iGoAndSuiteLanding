import React, { useState } from "react"
import { Select, MenuItem } from '@material-ui/core';
import { useTranslation } from "react-i18next"

const LanguageMenu = (props) => {
  const { i18n } = useTranslation()
  
  const [values, setValues] = useState({
    language: 'en'
  });

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return(
    <Select
      value={values.language}
      onChange={(e) => handleChange(e)}
      disableUnderline
      inputProps={{
        name: 'language'
      }}
    >
      <MenuItem value={'en'}>EN</MenuItem>
      <MenuItem value={'es'}>ES</MenuItem>
    </Select>
  )
}

export default LanguageMenu;
