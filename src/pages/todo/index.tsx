import { Box, Button, Card, Divider, Typography, useMediaQuery } from "@mui/material";
import { ITodo } from "./todoType";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getUserTodoData, setTodoToken } from "../../utils";
import Todo from "./components/todo";
import AddTodo from "./components/addTodo";

export default function Todos() {
  const Smobile = useMediaQuery("(max-width:450px)");

  const myTodoData = getUserTodoData();
  const [todos, setTodos] = useState<ITodo[]>(myTodoData);
  const [open, setOpen] = useState<boolean>(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (todos) {
      setTodoToken(JSON.stringify(todos));
    }
  }, [todos]);
  return (
    <>
      <AddTodo open={open} onClose={() => setOpen(false)} todos={todos} setTodos={setTodos} />
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Card
          variant="outlined"
          sx={{
            mx: 4,
            mt: 6,
            mb: 2,
            minWidth: Smobile ? "250px" : "650px",
          }}
        >
          <Typography variant="h4" textAlign="center">
            {t("todo_list")}
          </Typography>
          <Divider />
          <Box sx={{ overflowY: "scroll" }} height={Smobile ? "350px" : "450px"}>
            {todos?.map((i, idx) => (
              <Todo todos={todos} setTodos={setTodos} data={i} idx={idx} key={idx} />
            ))}
          </Box>
        </Card>
        <Box p={1} display="flex" justifyContent="center" alignItems="center">
          <Button variant="contained" onClick={() => setOpen(true)}>
            {t("add")}
          </Button>
        </Box>
      </Box>
    </>
  );
}
