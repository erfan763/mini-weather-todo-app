import { Box, Button, Card, Divider, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ITodo, d } from "./todoType";
import { Fragment, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState<ITodo[]>();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Card
        variant="outlined"
        sx={{
          mx: 4,
          mt: 6,
          mb: 2,
          minWidth: "650px",
          // height: "70vh",
        }}
      >
        <Typography variant="h4" textAlign="center">
          TODO list
        </Typography>
        <Divider />
        <Box sx={{ overflowY: "scroll" }} height="450px">
          {d.map((i, idx) => (
            <Fragment key={idx}>
              <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6">1 {")"} sjdv</Typography>
                <Box display="flex" gap={1}>
                  <EditIcon sx={{ cursor: "pointer" }} />
                  <DeleteIcon sx={{ cursor: "pointer" }} color="error" />
                </Box>
              </Box>
              <Divider />
            </Fragment>
          ))}
        </Box>
      </Card>
      <Box p={1} display="flex" justifyContent="center" alignItems="center">
        <Button variant="contained">Add</Button>
      </Box>
    </Box>
  );
}
