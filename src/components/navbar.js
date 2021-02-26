import React from 'react'
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between'
  }
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container className={classes.toolbar}>
          <Grid item >
            <Button component={Link} to='/' color='inherit'>
              House of Optical
            </Button>
          </Grid>

          <Grid item >
            <Button component={Link} to='/login' color='inherit'>
              Login
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar