'use client'
import { AppBar, Box, Button, ButtonGroup, Container, List, ListItem, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
export default function Home() {
  return (
    <main>
      <Container sx={{paddingTop: 8}}>
        <Stack alignItems={'center'}>
          <Typography textAlign='center' variant="h1">Let your achievements speak for you</Typography>
          <Typography marginTop={2} textAlign='center' variant="body1">Transforming your achievements into a powerful brag document and unlocking job opportunities like never before.</Typography>
          <Button size='large' variant="contained" sx={{marginTop: 4}}>Get Started Free</Button>
          <Button size='large' variant="outlined" sx={{marginTop: 2}}>Learn More</Button>
        </Stack>
        <Container sx={{padding: 8}}>
          <Box component={'img'} src='interview.svg' alt="Woman working on computer" width='100%'/>
        </Container>
        <Stack>
          <Typography textAlign='center' variant="h2">Stand out from the competition and impress employers</Typography>
          {/* <Typography marginTop={2} variant="body1">In today's competitive job market, standing out is essential</Typography> */}
          <List sx={{marginTop: 4}}>
            <ListItem >
              <ListItemIcon>
                <BarChartIcon fontSize='large' />
              </ListItemIcon>
              <ListItemText>
                Quantify your experience
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmojiEventsIcon fontSize='large'/>
              </ListItemIcon>
              <ListItemText>
                Highlight your accomplishments
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WorkIcon fontSize='large'/>
              </ListItemIcon>
              <ListItemText>
                Land your dream job
              </ListItemText>
            </ListItem>
          </List>
          <Button size='large' variant="contained" sx={{marginTop: 4, marginBottom: 4, marginInline: 'auto'}}>Get Started Free</Button>

        </Stack>
      </Container>
    </main>
  )
}
