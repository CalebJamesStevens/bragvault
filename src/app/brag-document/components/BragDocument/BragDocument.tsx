'use client'

import React, { Suspense } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { alpha } from '@mui/material/styles';

import AddBragForm from "../AddBragForm/AddBragForm";
import BragList from '../BragList/BragList';

export const BragDocument = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = () => {
      fetch('/brag-document/api')
        .then((response) => response.json())
        .then((data) => setData(data))
        .then(() => setLoading(false))
        .catch((error) => setLoading(false));
    };

    getData();
  }, [])

  return (
    <Box component={'main'} sx={{
      backgroundImage: theme => `linear-gradient(180deg, ${alpha(theme.palette.primary.main, .1)}, transparent)`
    }}>
      <Container sx={{paddingTop: 2}}>
        <Typography variant="h1">Your Brag Document</Typography>
          <Stack paddingY={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
            <AddBragForm setData={setData} />
          </Stack>
          <BragList setBrags={setData} loading={loading} brags={data}/>
      </Container>
    </Box>
  )
}

export default BragDocument;