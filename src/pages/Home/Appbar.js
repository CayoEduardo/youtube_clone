import React from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  makeStyles,
  useTheme,
  Switch,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AppsIcon from '@material-ui/icons/Apps'
import MoreVert from '@material-ui/icons/MoreVert'
import VideoCall from '@material-ui/icons/VideoCall'
import preto from '../../assets/preto.png'
import branco from '../../assets/branco.png'

const useStyles = makeStyles((theme) => ({
  appBar: { boxShadow: 'none', zIndex: theme.zIndex.drawer + 1 },
  logo: {
    height: '25px',
  },
  grow: {
    flexGrow: 1,
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
}))

const Appbar = ({ darkMode, setDarkMode }) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <AppBar color='inherit' className={classes.appBar}>
      <Toolbar>
        <IconButton edge='start' className={classes.menuIcon} aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <img
          src={theme.palette.type === 'dark' ? branco : preto}
          alt='logo'
          className={classes.logo}
        />
        <div className={classes.grow} />
        <Switch
          value={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className={classes.icons}
        />
        <IconButton edge='start' className={classes.icons} aria-label='menu'>
          <VideoCall />
        </IconButton>
        <IconButton edge='start' className={classes.icons} aria-label='menu'>
          <AppsIcon />
        </IconButton>
        <IconButton edge='start' className={classes.icons} aria-label='menu'>
          <MoreVert />
        </IconButton>
        <Button
          startIcon={<AccountCircle />}
          variant='outlined'
          color='secondary'
        >
          Fazer login
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
