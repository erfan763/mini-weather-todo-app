import { Box, Divider, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ITodo } from "../todoType";
import { Dispatch, SetStateAction, useState } from "react";
import Confirm from "../../../components/Dialogs/Confirm";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import UpdateTodo from "./updateTodo";

export default function Todo({
  data,
  idx,
  todos,
  setTodos,
}: {
  data: ITodo;
  idx: number;
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [openEditTodo, setOpenEditTodo] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <>
      <UpdateTodo
        setTodos={setTodos}
        todos={todos}
        idx={idx}
        currentTodo={data}
        open={openEditTodo}
        onClose={() => setOpenEditTodo(false)}
      />
      <Confirm
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          setTodos(todos?.filter((x, index) => index !== idx));
          setOpen(false);
          toast.success(t("delete_successfully"));
        }}
      />
      <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">
          {idx + 1} {")"}
          {data?.title}
        </Typography>
        <Box display="flex" gap={1}>
          <IconButton onClick={() => setOpenEditTodo(true)}>
            <EditIcon sx={{ cursor: "pointer" }} />
          </IconButton>
          <IconButton onClick={() => setOpen(true)}>
            <DeleteIcon sx={{ cursor: "pointer" }} color="error" />
          </IconButton>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
