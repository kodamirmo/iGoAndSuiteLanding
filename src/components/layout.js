import React from 'react'
import PropTypes from 'prop-types'
import ScrollTop from 'react-scrolltop-button'
import { withTrans } from '../i18n/withTrans'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import Header from './header'
import Footer from './footer'

const Layout = ({ children, t, i18n }) => {

  const translated = {
    company : t(`footer.company`),
    blog : t(`footer.blog`),
    support : t(`footer.support`),
    privacy : t(`footer.privacy_terms`),
    contact : t(`footer.contact_team`),
    language : t(`footer.language`),
  }

  return (
    <>
      <Header />
      <ScrollTop
        text={<KeyboardArrowUpIcon />}
        className="scroll-button"
        speed={1000}
      />
      <main>{children}</main>
      <Footer trans={translated} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)
