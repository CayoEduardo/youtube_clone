import React from 'react'

import { videos } from './videos'

import {
  Box,
  Toolbar,
  Typography,
  Grid,
  Hidden,
  makeStyles,
} from '@material-ui/core'
const Content = () => {
  return (
    <>
      <Box p={8}>
        <Toolbar />
        <Typography
          variant='h5'
          color='textPrimary'
          style={{ fontWeight: 600 }}
        >
          Recomendados
        </Typography>
        <Grid container spacing={4}>
          {videos.map((item) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    src={item.thumb}
                    alt={item.title}
                    style={{ width: '100%' }}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      display='block'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} + ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </>
  )
}

export default Content
