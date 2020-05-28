import React, { useState } from 'react'
import { Select, MenuItem, ListItemIcon, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import usaLogo from '../images/usa.png'
import mexicoLogo from '../images/mexico.png'

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
      className="selectLanguage"
      inputProps={{
        name: 'language'
      }}
    >
      <MenuItem value={'en'}>
        <ListItemIcon>
          <img src={usaLogo} className="logoTranslated" alt="" />
        </ListItemIcon>
        <Typography variant="inherit">EN</Typography>
      </MenuItem>
      <MenuItem value={'es'}>
        <ListItemIcon>
          <img src={mexicoLogo} className="logoTranslated" alt="" />
        </ListItemIcon>
        <Typography variant="inherit">ES(Latino)</Typography>
      </MenuItem>
    </Select>
  )
}

export default LanguageMenu;
