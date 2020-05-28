import React from 'react'
import PropTypes from 'prop-types'
import { withTrans } from '../i18n/withTrans'

import Header from './header'
import Footer from './footer'

const Layout = ({ children, t, i18n }) => {

  const translatedTitle = t(`main.demonstration`)
  const translatedCompany = t(`footer.company`)
  const translatedBlog = t(`footer.blog`)
  const translatedSupport = t(`footer.support`)
  const translatedPrivacy = t(`footer.privacy_terms`)

  return (
    <>
      <Header btnTitle={translatedTitle} />
      <main>{children}</main>
      <Footer
        company={translatedCompany}
        blog={translatedBlog}
        support={translatedSupport}
        privacy={translatedPrivacy}
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)
