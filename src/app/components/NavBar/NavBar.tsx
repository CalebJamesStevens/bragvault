'use client'

import React from 'react';

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import MenuIcon from "@mui/icons-material/Menu";
import DescriptionIcon from '@mui/icons-material/Description';

import { Database } from '@/lib/database.types';
import { useRouter } from 'next/navigation';
import { Logout } from '@mui/icons-material';

export const NavBar = () => {
    const router = useRouter()
    const [navigationMenuOpen, setNavigationMenuOpen] = React.useState(false);
    const navigationMenuId = React.useId();
    // const [session, setSession] = React.useState<Session | null>(null)
    const [unAuthed, setUnAuthed] = React.useState(true)
    const supabase = createClientComponentClient<Database>()

    React.useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            setUnAuthed(!session)
        })
    }, [])

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
                                {!unAuthed && (
                                    <ListItem disablePadding >
                                        <ListItemButton onClick={async () => {
                                            await supabase.auth.signOut()
                                            router.refresh()
                                        }}>
                                            <ListItemIcon aria-hidden><Logout/></ListItemIcon>
                                            <ListItemText>Logout</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                )}
                            </List>                        
                        </Box>
                    </Drawer>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;