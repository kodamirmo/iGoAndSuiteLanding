import React from 'react'
import PropTypes from 'prop-types'
import { withTrans } from '../i18n/withTrans'

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
      <main>{children}</main>
      <Footer trans={translated} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)
