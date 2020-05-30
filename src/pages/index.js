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
import tabletImg from '../images/tablet.png'
import devicesImg from '../images/5.png'
import BtnDemonstration from '../components/btnDemonstration'

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
              <Button variant="contained" className={landingStyles.btnMainButton}>
                <BtnDemonstration />
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
              videoSrcURL="https://www.youtube.com/embed/PE3h1NDseVw"
              videoTitle="iGoandSee Suite"
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
            <h2>{t(`main.more_know`)}</h2>
            <img src={devicesImg} alt="" />
            <p>{t(`main.red_tags`)}</p>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section6}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={landingStyles.textSection6}>
            <h2>{t(`main.ensure_production`)}</h2>
            <h2>
              <small>{t(`main.generate_andon`)}</small>
            </h2>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} className={landingStyles.contentSection6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.ensures_signal`)}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.measure_response`)}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.escalate_alert`)}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.run_reports`)}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={phone3} alt="" />
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section7}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <p>{t(`main.eandon_system`)}</p>
          </Grid>
          <Grid item xs={12} md={6} className={landingStyles.contentSection7}>
            <h2 className={landingStyles.titleSection7}>
              <span>{t(`main.some_examples`)}:</span>
            </h2>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <NotificationsIcon className={landingStyles.iconDanger} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.report_quality`)}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <NotificationsIcon className={landingStyles.iconDanger} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.report_abnormalities`)}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <NotificationsIcon className={landingStyles.iconDanger} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.require_replenishment`)}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section8}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7} className={landingStyles.contentSection8}>
            <p>{t(`main.key_meeting`)}</p>
            <h2>
              <span className={landingStyles.titleNormal}>iGo&Track</span>{' '}
              {t(`main.allows_you`)}:
            </h2>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.easily_blackboards`)}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.set_individual`)}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon className={landingStyles.iconSuccess} />
                </ListItemIcon>
                <ListItemText
                  primary={t(`main.capture_production`)}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={3} className={landingStyles.contentImgTrack}>
            <img src={tabletImg} alt="" />
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section9}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3>{t(`main.information_power`)}:</h3>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={landingStyles.imgBox}>
              <p>{t(`main.create_discipline`)}</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={landingStyles.imgBox}>
              <p>{t(`main.generates_reports`)}</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={landingStyles.imgBox}>
              <p>{t(`main.allows_production`)}</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={landingStyles.imgBox}>
              <p>{t(`main.all_generated`)}</p>
            </Box>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section10}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={landingStyles.contentText}>
            <h1>{t(`main.mobile_solutions`)}</h1>
            <Button variant="contained" className={landingStyles.btnMainButton}>
              <BtnDemonstration />
            </Button>
          </Grid>
        </Grid>
      </section>
    </>
  )
}
