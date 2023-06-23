'use client'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

export const BragList = ({setBrags, brags, loading}: {setBrags: any, brags: any[] | null, loading: boolean}) => {
  const styles = {
    headingThree: {
      marginTop: 0,
      marginBottom: 0,
      fontSize: '1.25rem',
      fontWeight: 550,
    },
    starHeadingThree: {
      marginTop: 2,
      marginBottom: 0,
      fontSize: '1.25rem',
      fontWeight: 550,
    }
  }

  return <List disablePadding>
    {(loading) && (<>
      <ListItem aria-label='loading' disablePadding sx={{marginBottom: 1.5}}>
        <Paper sx={{width: '100%', padding: 2}}>
          <Stack>
            <ListItemText primaryTypographyProps={{variant: 'h2', fontSize: '1.5rem'}}>
              <Skeleton width={'45%'} variant='text'/>
            </ListItemText>
            <Stack gap={1} alignItems={'flex-end'} direction={'row'}>
              <Skeleton width={'30%'} variant='text'/>
              <Skeleton width={'40%'} variant='text'/>
            </Stack>
            <Stack gap={1} alignItems={'flex-end'} direction={'row'}>
              <Skeleton width={'30%'} variant='text'/>
              <Skeleton width={'40%'} variant='text'/>
            </Stack>
            <Divider aria-hidden sx={{ marginTop: 2 }} />
            <Skeleton height={'36px'} width={'30%'} variant='text'/>
            <Skeleton variant='text'/>
            <Skeleton height={'36px'} width={'30%'} variant='text'/>
            <Skeleton variant='text'/>
            <Skeleton height={'36px'} width={'30%'} variant='text'/>
            <Skeleton variant='text'/>
            <Skeleton height={'36px'} width={'30%'} variant='text'/>
            <Skeleton variant='text'/>
          </Stack>
        </Paper>
      </ListItem>
      <ListItem aria-label='loading' disablePadding sx={{marginBottom: 1.5}}>
        <Paper sx={{width: '100%', padding: 2}}>
          <Stack>
            <ListItemText primaryTypographyProps={{variant: 'h2', fontSize: '1.5rem'}}>
              <Skeleton width={'45%'} variant='text'/>
            </ListItemText>
            <Stack gap={1} alignItems={'flex-end'} direction={'row'}>
              <Skeleton width={'30%'} variant='text'/>
              <Skeleton width={'40%'} variant='text'/>
            </Stack>
            <Stack gap={1} alignItems={'flex-end'} direction={'row'}>
              <Skeleton width={'30%'} variant='text'/>
              <Skeleton width={'40%'} variant='text'/>
            </Stack>
            <Divider aria-hidden sx={{ marginTop: 2 }} />
            <Skeleton height={'36px'} width={'30%'} variant='text'/>
            <Skeleton variant='text'/>
            <Skeleton height={'36px'} width={'30%'} variant='text'/>
            <Skeleton variant='text'/>
            <Skeleton height={'36px'} width={'30%'} variant='text'/>
            <Skeleton variant='text'/>
            <Skeleton height={'36px'} width={'30%'} variant='text'/>
            <Skeleton variant='text'/>
          </Stack>
        </Paper>
      </ListItem>
    </>)}
    {brags?.map((brag: any) => (
      <ListItem disablePadding sx={{marginBottom: 1.5}} key={brag.id}>
        <Paper sx={{width: '100%', padding: 2}}>
          <Stack>
            <Stack direction={'row'}>
              <ListItemText primaryTypographyProps={{variant: 'h2', fontSize: '1.5rem'}} primary={brag.title} secondary={brag.start_date + ' to ' + brag.end_date} />
              <IconButton aria-label='delete brag' onClick={(event) => {
                event.preventDefault();
                fetch(`/brag-document/api?id=${brag.id}`, {method: 'DELETE' })
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.error === null) {
                      setBrags((previousData: typeof brags) => previousData.filter((prevBrag: any) => prevBrag.id !== brag.id))
                    }
                  })
                  .catch((error) => console.error(error))
              }}>
                <Delete/>
              </IconButton>
            </Stack>
            <Stack gap={1} alignItems={'flex-end'} direction={'row'}>
              <Typography sx={styles.headingThree} variant='h3'>
                Position:
              </Typography>
              <Typography>
                {brag.position}
              </Typography>
            </Stack>
            {brag.manager.length > 0 && (
              <Stack gap={1} alignItems={'flex-end'} direction={'row'}>
                <Typography sx={styles.headingThree} variant='h3'>
                  Manager:
                </Typography>
                <Typography>
                  {brag.manager}
                </Typography>
              </Stack>
            )}
            {brag.team.join('') !== '' && (
              <Stack gap={1} alignItems={'flex-end'} direction={'row'}>
                <Typography sx={styles.headingThree} variant='h3'>
                  Team:
                </Typography>
                <Typography>
                  {brag.team.join(', ')}
                </Typography>
              </Stack>
            )}
            <Divider aria-hidden  sx={{ marginTop: 2 }} />
            <Typography sx={styles.starHeadingThree} variant='h3'>
              Situation
            </Typography>
            <Typography>
              {brag.situation}
            </Typography>
            <Typography sx={styles.starHeadingThree} variant='h3'>
              Task
            </Typography>
            <Typography>
              {brag.task}
            </Typography>
            <Typography sx={styles.starHeadingThree} variant='h3'>
              Action
            </Typography>
            <Typography>
              {brag.action}
            </Typography>
            <Typography sx={styles.starHeadingThree} variant='h3'>
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