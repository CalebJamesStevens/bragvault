'use client'

import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

export const Footer = () => {
  return (
    <>
      <Divider sx={{width: '90dvw', marginX: 'auto'}} />
      <Box component={'footer'} padding={4}>
        <Stack justifyContent={'center'} direction={'row'}>
          <Typography sx={{fontSize:'.875rem'}}>&copy; 2023 Brag Vault. All rights reserved.</Typography>
        </Stack>
      </Box>
    </>
  )
}

export default Footer;