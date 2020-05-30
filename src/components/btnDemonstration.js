import React from 'react'
import { PopupText } from 'react-calendly'
import { useTranslation } from 'react-i18next'

export default function() {
  const { t } = useTranslation();

  return (
    <PopupText
      pageSettings={{
        backgroundColor: 'ffffff',
        hideEventTypeDetails: true,
        hideLandingPageDetails: false,
        primaryColor: '00a2ff',
        textColor: '4d5055'
      }}
      prefill={{
        customAnswers: {
          a1: 'a1',
          a10: 'a10',
          a2: 'a2',
          a3: 'a3',
          a4: 'a4',
          a5: 'a5',
          a6: 'a6',
          a7: 'a7',
          a8: 'a8',
          a9: 'a9'
        },
        email: '',
        firstName: '',
        lastName: '',
        name: ''
      }}
      text={t(`main.demonstration`)}
      textColor="#ffffff"
      url="https://calendly.com/linda-lopez"
      utm={{
        utmCampaign: 'Spring Sale 2019',
        utmContent: 'Shoe and Shirts',
        utmMedium: 'Ad',
        utmSource: 'Facebook',
        utmTerm: 'Spring'
      }}
    />
  );
}