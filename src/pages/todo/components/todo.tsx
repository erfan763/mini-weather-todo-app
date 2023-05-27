import { Box, Divider, IconButton, Typography, useMediaQuery } from "@mui/material";
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
  const SMobile = useMediaQuery("(max-width:450px)");
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
      <Box
        p={SMobile ? 1 : 2}
        display="flex"
        justifyContent={SMobile ? "unset" : "space-between"}
        alignItems={SMobile ? "unset" : "center"}
        flexDirection={SMobile ? "column" : "row"}
      >
        <Typography variant="h6">
          {idx + 1}
          {")"}
          {data?.title}
        </Typography>
        <Box display="flex" gap={SMobile ? 0 : 1} mt={0.5}>
          <IconButton sx={{ p: 0 }} onClick={() => setOpenEditTodo(true)}>
            <EditIcon sx={{ cursor: "pointer" }} />
          </IconButton>
          <IconButton sx={{ p: 0 }} onClick={() => setOpen(true)}>
            <DeleteIcon sx={{ cursor: "pointer" }} color="error" />
          </IconButton>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
