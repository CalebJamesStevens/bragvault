'use client'
import React from 'react'

import { AppBar, Box, Button, ButtonGroup, Container, Dialog, DialogActions, DialogContent, DialogTitle, Input, InputLabel, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, TextField, Toolbar, Typography, alpha } from "@mui/material";
import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import Add from "@mui/icons-material/Add";

export default function AddBragForm() {
  const [open, setOpen] = React.useState(false);
  const dialogId = React.useId();

//   Google describes this as: "Accomplished [X] as measured by [Y], by doing [Z]." 
// But just to make it easier to remember, let's shorten it to X-Y-Z.  
//   
// S - The whole situation. Example: "I was working on a project with a tight deadline."
// T - the specific task you worked on in the situation. Example: "I was responsible for the front-end."
// A - the action you took to complete that task. Example: "I built a React app."
// R - the result of your actions. Example: "We shipped the project on time and under budget."
//   
  return (
    <>
      <Button aria-controls={dialogId} aria-haspopup='dialog' onClick={() => setOpen(true)} startIcon={<Add/>}>Add Brag</Button>
      <Dialog fullWidth id={dialogId} open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add A Brag</DialogTitle>
        <Box component={'form'}>
          <DialogContent>
            <Stack gap={2}>
              <TextField name='title' label='Title' size='small' variant='standard'/>
              <InputLabel htmlFor={'timelineStart'}>Start Date</InputLabel>
              <Input id='timelineStart' name='timelineStart' type='date' size='small'/>
              <InputLabel htmlFor={'timelineEnd'}>End Date</InputLabel>
              <Input id='timelineEnd' name='timelineEnd' type='date' size='small'/>
              <TextField name='position' label='Position' size='small' variant='standard'/>
              <TextField name='manager' label='Manager' size='small' variant='standard'/>
              <TextField name='team' label='Team' size='small' variant='standard'/>
              <TextField multiline rows={4} name='situation' label='Situation' size='small' variant='outlined'/>
              <TextField multiline rows={4} name='task' label='Task' size='small' variant='outlined'/>
              <TextField multiline rows={4} name='action' label='Action' size='small' variant='outlined'/>
              <TextField multiline rows={4} name='result' label='Result' size='small' variant='outlined'/>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button color='error' onClick={() => setOpen(false)}>Cancel</Button>
            <Button type='submit' onClick={() => setOpen(false)}>Add</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  )
}
