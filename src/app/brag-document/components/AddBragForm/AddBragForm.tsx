"use client";
import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import Add from "@mui/icons-material/Add";
import { Database } from "../../types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AddBragForm({setData}: {setData: any}) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const dialogId = React.useId();
  const supabase = createClientComponentClient<Database>();
  const [formValues, setFormValues] = React.useState<
    Database["public"]["Tables"]["brag"]["Insert"]
  >({
    title: "",
    action: "",
    end_date: "",
    manager: "",
    position: "",
    result: "",
    situation: "",
    start_date: "",
    task: "",
    team: [],
    user: '',
  });

  //   Google describes this as: "Accomplished [X] as measured by [Y], by doing [Z]."
  // But just to make it easier to remember, let's shorten it to X-Y-Z.
  //
  // S - The whole situation. Example: "I was working on a project with a tight deadline."
  // T - the specific task you worked on in the situation. Example: "I was responsible for the front-end."
  // A - the action you took to complete that task. Example: "I built a React app."
  // R - the result of your actions. Example: "We shipped the project on time and under budget."
  //
  React.useEffect(() => {
    supabase.auth.getUser().then(user => {
      setFormValues((previousValues) => ({...previousValues, user: user.data.user?.id ?? ''}))
    })
  }, [])

  return (
    <>
      <Button
        aria-controls={dialogId}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        startIcon={<Add />}
      >
        Add Brag
      </Button>
      <Dialog
        onSubmit={(event) => {
          event.preventDefault();
          setLoading(true);
          fetch("/brag-document/api", {
            method: "POST",
            body: JSON.stringify(formValues),
          })
            .then((response) => response.json())
            .then(({data, error}) => {
              if(!error) {
                setData((previousValues: Database["public"]["Tables"]["brag"]["Row"][]) => [data[0], ...previousValues ])
              }
              setOpen(false)
              setLoading(false)
            })
        }}
        fullWidth
        id={dialogId}
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Add A Brag</DialogTitle>
        <Box component={"form"}>
          <DialogContent>
            <Stack gap={2}>
              <TextField
                required
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    title: event.target.value,
                  }))
                }
                name="title"
                label="Title"
                size="small"
                variant="standard"
              />
              <InputLabel htmlFor={"start_date"}>Start Date</InputLabel>
              <Input
                required
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    start_date: event.target.value,
                  }))
                }
                id="start_date"
                name="start_date"
                type="date"
                size="small"
              />
              <InputLabel htmlFor={"end_date"}>End Date</InputLabel>
              <Input
                required
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    end_date: event.target.value,
                  }))
                }
                id="end_date"
                name="end_date"
                type="date"
                size="small"
              />
              <TextField
                required
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    position: event.target.value,
                  }))
                }
                name="position"
                label="Position"
                size="small"
                variant="standard"
              />
              <TextField
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    manager: event.target.value,
                  }))
                }
                name="manager"
                label="Manager"
                size="small"
                variant="standard"
              />
              <TextField
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    team: event.target.value.split(",")
                  }))
                }
                name="team"
                label="Team"
                size="small"
                variant="standard"
              />
              <TextField
                required
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    situation: event.target.value,
                  }))
                }
                multiline
                rows={4}
                name="situation"
                label="Situation"
                size="small"
                variant="outlined"
              />
              <TextField
                required
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    task: event.target.value,
                  }))
                }
                multiline
                rows={4}
                name="task"
                label="Task"
                size="small"
                variant="outlined"
              />
              <TextField
                required
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    action: event.target.value,
                  }))
                }
                multiline
                rows={4}
                name="action"
                label="Action"
                size="small"
                variant="outlined"
              />
              <TextField
                required
                onChange={(event) =>
                  setFormValues((previousValues) => ({
                    ...previousValues,
                    result: event.target.value,
                  }))
                }
                multiline
                rows={4}
                name="result"
                label="Result"
                size="small"
                variant="outlined"
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button disabled={loading} color="error" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button disabled={loading || !formValues.user} type="submit">Add</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}
