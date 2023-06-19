'use client'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { alpha } from '@mui/material/styles';

import AddBragForm from "../AddBragForm/AddBragForm";
import BragList from '../BragList/BragList';

export default ({data}: any) => {
  return (
    <Box component={'main'} sx={{
      backgroundImage: theme => `linear-gradient(180deg, ${alpha(theme.palette.primary.main, .1)}, transparent)`
    }}>
      <Container sx={{paddingTop: 2}}>
        <Typography variant="h1">Your Brag Document</Typography>
        <Paper sx={{ height: '80dvh', marginTop: 1}}>
          <Stack paddingY={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
            <AddBragForm/>
          </Stack>
          <Stack>
            <BragList brags={data}/>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}