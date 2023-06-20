'use client'

import React from 'react';

import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, SwipeableDrawer, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DescriptionIcon from '@mui/icons-material/Description';

export const NavBar = () => {
    const [navigationMenuOpen, setNavigationMenuOpen] = React.useState(false);
    const navigationMenuId = React.useId();

    return (
        <AppBar sx={{background: 'white'}} position="sticky">
            <Toolbar sx={{background: 'none'}}>
                <Stack alignItems={'center'} width={'100%'} direction={'row'} justifyContent={'space-between'}>
                    <img src='logo.svg' alt="Brag Vault Logo" height={24}/>
                    <IconButton onClick={() => setNavigationMenuOpen(true)} aria-controls={navigationMenuId} aria-haspopup={'dialog'} aria-label="Open Navigation Menu" size="medium">
                        <MenuIcon fontSize="medium" />
                    </IconButton>
                    <Drawer sx={{height: '100dvh' }} id={navigationMenuId} anchor='right' open={navigationMenuOpen} onClose={() => setNavigationMenuOpen(false)}>
                        <Box component={'nav'} sx={{height:'auto', width: '100%'}}>
                            <List sx={{width: 250}}>
                                <ListItem disablePadding >
                                    <ListItemButton href={'/brag-document'}>
                                        <ListItemIcon aria-hidden><DescriptionIcon/></ListItemIcon>
                                        <ListItemText>Brag Document</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>                        
                        </Box>
                    </Drawer>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;