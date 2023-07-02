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
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import MenuIcon from "@mui/icons-material/Menu";
import DescriptionIcon from '@mui/icons-material/Description';

import { Database } from '@/lib/database.types';
import { useRouter } from 'next/navigation';
import { Help, Logout } from '@mui/icons-material';
import Link from 'next/link';
import { Button } from '@mui/material';

export const NavBar = () => {
    const router = useRouter()
    const [navigationMenuOpen, setNavigationMenuOpen] = React.useState(false);
    const navigationMenuId = React.useId();
    const [user, setUser] = React.useState<User | null>(null)
    const supabase = createClientComponentClient<Database>()
    supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_OUT') {
            setUser(null)
        }
    })

    React.useEffect(() => {
        const getUser = () => {
            supabase.auth.getUser().then(res => setUser(res.data.user), (() => setUser(null)));
        }

        getUser()
    }, [supabase])

    return (
        <AppBar sx={{background: 'white'}} position="sticky">
            <Toolbar sx={{background: 'none'}}>
                <Stack alignItems={'center'} width={'100%'} direction={'row'} justifyContent={'space-between'}>
                    <Button href='/' aria-label='Image Of Brag Vault Logo: Click To Navigate Home'>
                        <img src='logo.svg' alt="Brag Vault Logo" height={24}/>
                    </Button>
                    <IconButton onClick={() => setNavigationMenuOpen(true)} aria-controls={navigationMenuId} aria-haspopup={'dialog'} aria-label="Open Navigation Menu" size="medium">
                        <MenuIcon fontSize="medium" />
                    </IconButton>
                    <Drawer sx={{height: '100dvh' }} id={navigationMenuId} anchor='right' open={navigationMenuOpen} onClose={() => setNavigationMenuOpen(false)}>
                        <Box component={'nav'} sx={{height:'auto', width: '100%'}}>
                            <List sx={{width: 250}}>
                                <ListItem disablePadding >
                                    <ListItemButton LinkComponent={Link} href={'/brag-document'}>
                                        <ListItemIcon aria-hidden><DescriptionIcon/></ListItemIcon>
                                        <ListItemText>Brag Document</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                {user && (
                                    <ListItem disablePadding >
                                        <ListItemButton onClick={async () => {
                                            await supabase.auth.signOut()
                                            setNavigationMenuOpen(false)
                                        }}>
                                            <ListItemIcon aria-hidden><Logout/></ListItemIcon>
                                            <ListItemText>Logout</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                )}
                                <ListItem disablePadding >
                                    <ListItemButton LinkComponent={Link} href={'/help'}>
                                        <ListItemIcon aria-hidden><Help/></ListItemIcon>
                                        <ListItemText>Help</ListItemText>
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