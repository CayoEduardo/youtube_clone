import React from 'react'
import { makeStyles, Typography, Hidden, Box, Toolbar } from '@material-ui/core'

import Appbar from './Appbar'
import Drawer from './Drawer'
import Content from './Content'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  },
}))

const Home = ({ darkMode, setDarkMode }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Appbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Box display='flex'>
        <Hidden mdDown>
          <Drawer />
        </Hidden>
        <Content />
      </Box>
    </div>
  )
}

export default Home
