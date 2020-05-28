import React from 'react'
import PropTypes from 'prop-types'
import { withTrans } from '../i18n/withTrans'

import Header from './header'
import Footer from './footer'

const Layout = ({ children, t, i18n }) => {

  const translatedTitle = t(`main.demonstration`)

  return (
    <>
      <Header btnTitle={translatedTitle} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)
