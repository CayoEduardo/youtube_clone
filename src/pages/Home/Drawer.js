import React from 'react'

import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Box,
  Typography,
  Button,
  ListSubheader,
} from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Home'
import Whatshot from '@material-ui/icons/Whatshot'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AddCircle from '@material-ui/icons/AddCircle'

import VideoLibrary from '@material-ui/icons/VideoLibrary'
import History from '@material-ui/icons/History'

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase',
  },
}))

const DrawerHome = () => {
  const classes = useStyles()
  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem button classes={{ root: classes.listItem }} key={'Inicio'}>
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Inicio'}
            />
          </ListItem>{' '}
          <ListItem button classes={{ root: classes.listItem }} key={'Em Alta'}>
            <ListItemIcon>{<Whatshot />}</ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Em alta'}
            />
          </ListItem>{' '}
          <ListItem
            button
            classes={{ root: classes.listItem }}
            key={'Inscrições'}
          >
            <ListItemIcon>{<Subscriptions />}</ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Inscrições'}
            />
          </ListItem>
          <Divider />
          <ListItem
            button
            classes={{ root: classes.listItem }}
            key={'Biblioteca'}
          >
            <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Biblioteca'}
            />
          </ListItem>{' '}
          <ListItem
            button
            classes={{ root: classes.listItem }}
            key={'Histórico'}
          >
            <ListItemIcon>{<History />}</ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Histórico'}
            />
          </ListItem>{' '}
        </List>
        <Divider />
        <Box p={7}>
          <Typography variant='body2'>
            Faça login para curtir vídeos, comentar e se Inscrever.
          </Typography>
          <Box mt={2}>
            <Button
              variant='outlined'
              color='secondary'
              startIcon={<AccountCircle />}
            >
              Fazer login
            </Button>
          </Box>
        </Box>
        <Divider />
        <List
          component='nav'
          aria-laelledby='nested-list-subheader'
          subheader={
            <ListSubheader
              component='div'
              id='nested-list-subheader'
              className={classes.subheader}
            >
              O melhor do youtube
            </ListSubheader>
          }
        >
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Música'}
            />
          </ListItem>{' '}
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Esportes'}
            />
          </ListItem>{' '}
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Jogos'}
            />
          </ListItem>{' '}
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Filmes'}
            />
          </ListItem>{' '}
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Notícias'}
            />
          </ListItem>{' '}
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Ao vivo'}
            />
          </ListItem>{' '}
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Destaques'}
            />
          </ListItem>{' '}
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Videos 360'}
            />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

export default DrawerHome
