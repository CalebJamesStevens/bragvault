'use client'
import { AppBar, Box, Button, ButtonGroup, Container, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Toolbar, Typography, alpha } from "@mui/material";
import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import Add from "@mui/icons-material/Add";
export default function BragDocument() {
  return (
    <Box component={'main'} sx={{
      backgroundImage: theme => `linear-gradient(180deg, ${alpha(theme.palette.primary.main, .1)}, transparent)`
    }}>
      <Container sx={{paddingTop: 2}}>
        <Typography variant="h1">Your Brag Document</Typography>
        <Paper sx={{ height: '80dvh', marginTop: 1}}>
          <Stack paddingY={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
            <Button startIcon={<Add/>}>Add Brag</Button>
          </Stack>
          <Stack>

          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
