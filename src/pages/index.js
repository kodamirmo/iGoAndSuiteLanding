import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import landingStyles from '../styles/landing.module.css';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(12),
  },
}));

export default function Home() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={landingStyles.main}>
        <Grid container spacing={3}>
          <Grid item md={7}>
            <h1>{t(`main.title`)}</h1>
            <p>{t(`main.subtitle`)}</p>
          </Grid>
          <Grid item md={5}>&nbsp;</Grid>
        </Grid>
      </section>

      <section className={landingStyles.section1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <p>
              iGo&See is a mobile platformthat allows you tomanage your entire
              compliance system including ISO, OSHA, 5’S, HACCP
              andLeaderStandardWork.
            </p>
          </Grid>
          <Grid item md={6} lg={3}>
            <p>All you audits, one platform</p>
          </Grid>
          <Grid item md={6} lg={3}>
            <p>Standard Work, for leaders</p>
          </Grid>
          <Grid item md={6} lg={3}>
            <p>Gemba Walk execution</p>
          </Grid>
          <Grid item md={6} lg={3}>
            <p>Corrective Actions and e-red Tags</p>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3>Building discipline has neverbeen easier</h3>
            <p>
              As a leader, you are responsible for making sure that everyone
              within your organization conduct operations as they should be
              done.
            </p>
          </Grid>
          <Grid item md={6}>
            <ul>
              <li>Help you stabilize a process</li>
              <li>Leave behind unproductive practices</li>
            </ul>
          </Grid>
          <Grid item md={6}>
            <ul>
              <li>Sustain improvements</li>
              <li>Comply with regulations all the time</li>
            </ul>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section3}>
        <Grid container spacing={3}>
          <Grid item md={8}>
            <h3>Regulation compliance</h3>
            <p>
              If a standard is not met you can endanger someone’s life or
              health. As a manager, you should recognize that making sure the
              organization is always in compliance is everyone’s job.
            </p>
          </Grid>

          <Grid item md={4}>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3>Make the most of your time and money</h3>
          </Grid>
          <Grid item md={6} lg={3}>
            <p>On-time completion reports of your audits.</p>
          </Grid>
          <Grid item md={6} lg={3}>
            <p>Compliance trend reports by Area/Leader.</p>
          </Grid>
          <Grid item md={6} lg={3}>
            <p>Real-time follow up on corrective actions.</p>
          </Grid>
          <Grid item md={6} lg={3}>
            <p>Automatic reports (PDF and export to excel).</p>
          </Grid>
          <Grid item md={6} lg={3}>
            <p>E-mail messages to report abnormalities.</p>
          </Grid>
          <Grid item md={6} lg={3}>
            <p>Instant notifications.</p>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section4}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            &nbsp;
          </Grid>
          <Grid item md={8}>
            <h3>
              iGo&Tag:
              <br />
              the ideal Gemba Walk companion
            </h3>
            <p>
              What a power couple iGo&See and iGo&Tag are! They make a
              comprehensive system that allows to create, manage, sustain a
              worldclass organization.
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item md={4}>
            <h3>How does it work?</h3>
          </Grid>
          <Grid item md={8}>
            <p>
              By assurance compliance with regulation + proper follow up of
              corrective actions and improvement opportunities.
            </p>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section5}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3>The more you know!</h3>
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
          <Grid item xs={12}>
            <h3>Ensure the production areas receive the right Support</h3>
            <h3>
              <small>Generate ANDON signals with a touch of the screen</small>
            </h3>
            <p>
              Red Tags are used in your 5S program or to report abnormalities
              detected during your audits or Gemba Walks. With iGo&Tag app,
              you can manage e-red tags until these are successfully closed.
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <ul>
              <li>Ensures the signal is received by the correct person </li>
              <li>Measure the response time of you support personnel</li>
              <li>Escalate alert when an ANDON is not attended</li>
              <li>Run performance reports</li>
            </ul>
          </Grid>
          <Grid item xs={6}></Grid>
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
          <Grid item md={8}>
            <h3>Some common examples:</h3>
          </Grid>
          <Grid item md={4}>
            <ul>
              <li>Report quality problems</li>
              <li>Report machine abnormalities</li>
              <li>Require replenishment of raw material</li>
            </ul>
          </Grid>
        </Grid>
      </section>

      <section className={landingStyles.section8}>
        <Grid container spacing={3}>
          <Grid item md={8}>
            <p>
              The key to meeting your goals for the day is reaching them hour
              by hour and a digital blackboard will be your best ally for this
              purpose.
            </p>
            <h3>iGo&Track allows you:</h3>
            <p>Easily create digital blackboards for any workday</p>
            <p>Set individual goals for each hour</p>
            <p>
              Capture both the production output and the reasons that affected
              the area.
            </p>
          </Grid>
          <Grid item md={4}></Grid>
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
    </div>
  )
}
