'use client'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

export const BragList = ({brags}: {brags: any[] | null}) => {
  const styles = {
    headingThree: {
      marginTop: 2,
      marginBottom: 0,
      fontSize: '1.25rem',
      fontWeight: 550,
    }
  }

  console.log(brags)

  return <List disablePadding>
    {brags?.map((brag: any) => (
      <ListItem disablePadding sx={{marginBottom: 1.5}} key={brag.id}>
        <Paper sx={{width: '100%', padding: 2}}>
          <Stack>
            <ListItemText primaryTypographyProps={{variant: 'h2', fontSize: '1.5rem'}} primary={brag.title} secondary={brag.start_date + ' to ' + brag.end_date}/>
            <Typography>
              Position: {brag.position}
            </Typography>
            {brag.manager.length > 0 && (
              <Typography>
                Manager: {brag.manager}
              </Typography>
            )}
            {brag.team.length > 0 && (
              <Typography>
                Team: {brag.team.join(', ')}
              </Typography>
            )}
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
        </Paper>
      </ListItem>
    ))}
  </List>
}

export default BragList;