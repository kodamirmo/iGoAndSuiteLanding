import React from 'react'
import { Grid, Button, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core'
import landingStyles from '../styles/landing.module.css'
import { useTranslation } from 'react-i18next'
import Video from '../components/video'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import PinDropIcon from '@material-ui/icons/PinDrop'
import PanToolIcon from '@material-ui/icons/PanTool'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf'
import EmailIcon from '@material-ui/icons/Email'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import NotificationsIcon from '@material-ui/icons/Notifications'

import notesLogo from '../images/notes.png'
import userLogo from '../images/user.png'
import userLogo2 from '../images/user-2.png'
import statusLogo from '../images/status.png'
import phone1 from '../images/1.png'
import phone2 from '../images/4.png'
import phone3 from '../images/3.png'
import devicesImg from '../images/5.png'

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className={landingStyles.filterMain}>
        <div className={landingStyles.main}>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <h1>{t(`main.title`)}</h1>
              <h2><small>{t(`main.subtitle`)}</small></h2>
              <Button variant="contained" color="primary">
                {t(`main.demonstration`)}
              </Button>
            </Grid>
            <Grid item md={6}>&nbsp;</Grid>
          </Grid>
        </div>
      </section>

      <section className={landingStyles.section1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <p>{t(`main.iGo&See_platformthat`)}</p>
          </Grid>

          <Grid item xs={12}>
            <Video
              videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
              videoTitle="Official Music Video on YouTube"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <img className={landingStyles.iconImg} src={notesLogo} alt="" />
            <p>{t(`main.all_audits`)}</p>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img className={landingStyles.iconImg} src={userLogo} alt="" />
            <p>{t(`main.standard_work`)}</p>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img className={landingStyles.iconImg} src={userLogo2} alt="" />
            <p>{t(`main.gemba_execution`)}</p>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img className={landingStyles.iconImg} src={statusLogo} alt="" />
            <p>{t(`main.corrective_actions`)}</p>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section2}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={landingStyles.contentSection2}>
            <h2>{t(`main.building_discipline`)}</h2>
            <p>{t(`main.leader_reponsible`)}</p>
          </Grid>
          <Grid item md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.help_you`)}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.unproductive_practices`)}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.sustain_improvements`)}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.comply_regulations`)}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7} className={landingStyles.contentSection3}>
            <h2>{t(`main.regulation_compliance`)}</h2>
            <p>{t(`main.if_endanger`)}</p>
          </Grid>

          <Grid item xs={12} md={5} className={landingStyles.phone1}>
            <img src={phone1} alt="" />
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section3b}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2>{t(`main.time_money`)}</h2>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className={landingStyles.infoBox}>
              <AssignmentTurnedInIcon className={landingStyles.iconBox} />
              <p>{t(`main.reports_audits`)}</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className={landingStyles.infoBox}>
              <PinDropIcon className={landingStyles.iconBox} />
              <p>{t(`main.reports_by`)}</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className={landingStyles.infoBox}>
              <PanToolIcon className={landingStyles.iconBox} />
              <p>{t(`main.real_time_follow`)}</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className={landingStyles.infoBox}>
              <PictureAsPdfIcon className={landingStyles.iconBox} />
              <p>{t(`main.automatic_reports`)}</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className={landingStyles.infoBox}>
              <EmailIcon className={landingStyles.iconBox} />
              <p>{t(`main.email_messages`)}</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className={landingStyles.infoBox}>
              <NotificationsActiveIcon className={landingStyles.iconBox} />
              <p>{t(`main.instant_notifications`)}</p>
            </Box>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} className={landingStyles.phone1}>
            <img src={phone2} alt="" />
          </Grid>
          <Grid item xs={12} md={8} className={landingStyles.contentSection4}>
            <h2 className={landingStyles.titleSection4}>
              <span>iGo&Tag:</span>
              <br />
              {t(`main.igo_tag`)}
            </h2>
            <p>{t(`main.description_igotag`)}</p>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section4b}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <h2 className={landingStyles.titleSection4}>
              <span>{t(`main.how_work`)}</span>
            </h2>
          </Grid>
          <Grid item xs={12} md={8}>
            <p>{t(`main.work_igotag`)}</p>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section5}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2>The more you know!</h2>
            <img src={devicesImg} alt="" />
            <p>
              Red Tags are used in your 5S program or to report abnormalities
              detected during your audits or Gemba Walks. With iGo&Tag app,
              you can manage e-red tags until these are successfully closed.
            </p>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section6}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={landingStyles.textSection6}>
            <h2>Ensure the production areas receive the right Support</h2>
            <h2>
              <small>Generate ANDON signals with a touch of the screen</small>
            </h2>
            <p>
              Red Tags are used in your 5S program or to report abnormalities
              detected during your audits or Gemba Walks. With iGo&Tag app,
              you can manage e-red tags until these are successfully closed.
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6} className={landingStyles.contentSection6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary="Ensures the signal is received by the correct person"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary="Measure the response time of you support personnel"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary="Escalate alert when an ANDON is not attended"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary="Run performance reports"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
            <img src={phone3} alt="" />
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section7}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <p>
              E-Andon is a system that allows production operators to ask for
              help when they detect any abnormality in their area before
              performance metrics are impacted.
            </p>
          </Grid>
          <Grid item xs={12} md={6} className={landingStyles.contentSection7}>
            <h2 className={landingStyles.titleSection7}>
              <span>Some common examples:</span>
            </h2>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <NotificationsIcon className={landingStyles.iconDanger} />
                </ListItemIcon>
                <ListItemText
                  primary="Report quality problems"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <NotificationsIcon className={landingStyles.iconDanger} />
                </ListItemIcon>
                <ListItemText
                  primary="Report machine abnormalities"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <NotificationsIcon className={landingStyles.iconDanger} />
                </ListItemIcon>
                <ListItemText
                  primary="Require replenishment of raw material"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section8}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <p>
              The key to meeting your goals for the day is reaching them hour
              by hour and a digital blackboard will be your best ally for this
              purpose.
            </p>
            <h2>iGo&Track allows you:</h2>
            <p>Easily create digital blackboards for any workday</p>
            <p>Set individual goals for each hour</p>
            <p>
              Capture both the production output and the reasons that affected
              the area.
            </p>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </section>

      <section className={landingStyles.section9}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <p>
              The information is power and iGo&Track puts that power in your
              hands, wherever you are:
            </p>
          </Grid>
          <Grid item md={6}>
            <p>Create discipline in capturing information every hour</p>
          </Grid>
          <Grid item md={6}>
            <p>
              Generates automatics reports of shift start and end of the day
              and automatically distributes them in PDF format.
            </p>
          </Grid>
          <Grid item md={6}>
            <p>
              It allows to know the production status in any time from any
              mobile device
            </p>
          </Grid>
          <Grid item md={6}>
            <p>
              All generated information available for analysis in Excel or
              Power-BI.
            </p>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section10}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <p>Mobile solutions are the industry's future, leap into it!</p>
          </Grid>
        </Grid>
      </section>
    </>
  )
}
