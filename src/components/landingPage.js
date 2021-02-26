import React from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from './navbar'
import Products from './products'
import ImageC from './ImageC'

const useStyles = makeStyles({
  gridPad: {
    padding: '32px',
  }
})

function LandingPage() {

  const classes = useStyles()

  return (
    <Grid container>
      <CssBaseline />

      <Grid container xs={12}>
        <NavBar />
      </Grid>

      <Grid container xs={12} spacing={3} className={classes.gridPad}>
        <Products />
        </Grid>

      <Grid container xs={12} spacing={3} className={classes.gridPad}>
        <ImageC />
      </Grid>
    </Grid>
  );
};

export default LandingPage