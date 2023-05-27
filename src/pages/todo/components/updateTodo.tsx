import { Box, Button, Dialog, TextField, Typography, useMediaQuery } from "@mui/material";
import { ITodo } from "../todoType";
import { Dispatch, SetStateAction } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { getModifiedValues } from "../../../logic/utils";

const schema = Yup.object({
  title: Yup.string().required().min(0).max(50),
});
export default function UpdateTodo({
  open,
  onClose,
  currentTodo,
  todos,
  setTodos,
  idx,
}: {
  open: boolean;
  onClose: () => void;
  currentTodo?: ITodo;
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
  idx: number;
}) {
  const SMobile = useMediaQuery("(max-width:350px)");
  const { t } = useTranslation();

  const { handleSubmit, values, setFieldValue, isValid } = useFormik({
    initialValues: {
      title: currentTodo?.title || "",
      date: new Date(),
    },
    validationSchema: schema,
    onSubmit(data) {
      const modified = getModifiedValues(
        { ...data },
        {
          currentTodo,
        }
      );
      if (modified) {
        const updatedData = [...todos];
        updatedData[idx] = data;

        setTodos(updatedData);
        toast.success(t("update_successfully"));
        onClose();
      } else {
        toast.error(t("no_change"));
      }
    },
  });
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box py={4} p={2} textAlign="center">
        <Typography variant="h5" mb={1}>
          {t("update_todo")}
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <TextField
            sx={{ width: SMobile ? "200px" : "300px" }}
            value={values.title}
            onChange={(e) => setFieldValue("title", e.target.value)}
            label={t("title")}
          />
          <Button variant="contained" type="submit" disabled={!isValid}>
            {t("submit")}
          </Button>
        </form>
      </Box>
    </Dialog>
  );
}
