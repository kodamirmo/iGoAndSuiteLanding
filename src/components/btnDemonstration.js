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
          a1: '',
        },
        email: '',
        firstName: '',
        lastName: '',
        name: ''
      }}
      text={t(`main.demonstration`)}
      textColor="#ffffff"
      url="https://calendly.com/info-igoandsuite"
      utm={{
        utmCampaign: 'Info iGo&Suite',
        utmContent: 'Information',
        utmMedium: 'Ad',
        utmSource: 'Facebook',
        utmTerm: 'Spring'
      }}
    />
  );
}