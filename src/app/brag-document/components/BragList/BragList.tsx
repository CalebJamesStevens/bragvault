'use client'

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default ({brags}: {brags: any[] | null}) => {
  console.log(brags)

  const styles = {
    headingThree: {
      marginTop: 2,
      marginBottom: 0,
      fontSize: '1.25rem',
      fontWeight: 550,
    }
  }

  return <>
    {brags?.map((brag: any) => (
      <ListItem key={brag.id} divider>
        <Stack>
          <ListItemText primaryTypographyProps={{variant: 'h2', fontSize: '1.5rem'}} primary={brag.title} secondary={brag.start_date + ' to ' + brag.end_date}/>
          <Typography>
            Position: {brag.position}
          </Typography>
          <Typography>
            Manager: {brag.manager}
          </Typography>
          <Typography>
            Team: {brag.team.join(', ')}
          </Typography>
          <Typography sx={styles.headingThree} variant='h3'>
            Situation
          </Typography>
          <Typography>
            {brag.situation}
          </Typography>
          <Typography sx={styles.headingThree} variant='h3'>
            Task
          </Typography>
          <Typography>
            {brag.task}
          </Typography>
          <Typography sx={styles.headingThree} variant='h3'>
            Action
          </Typography>
          <Typography>
            {brag.action}
          </Typography>
          <Typography sx={styles.headingThree} variant='h3'>
            Result
          </Typography>
          <Typography>
            {brag.result}
          </Typography>
        </Stack>
      </ListItem>
    ))}
  </>
}
