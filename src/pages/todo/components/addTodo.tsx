import {
  Box,
  Button,
  Dialog,
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextField,
  TextFieldVariants,
  Typography,
} from "@mui/material";
import { ITodo } from "../todoType";
import { Dispatch, SetStateAction } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { setTodoToken } from "utils";

const schema = Yup.object({
  title: Yup.string().required().min(0).max(20),
});

export default function AddTodo({
  open,
  onClose,
  todos,
  setTodos,
}: {
  open: boolean;
  onClose: () => void;
  todos?: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}) {
  const { t } = useTranslation();
  const { handleSubmit, values, setFieldValue, isValid, resetForm } = useFormik({
    initialValues: {
      title: "",
      date: new Date(),
    },
    validationSchema: schema,
    onSubmit(data) {
      if (todos) {
        setTodos([...todos, { title: data.title, date: new Date() }]);
      } else {
        setTodos([{ title: data.title, date: new Date() }]);
      }
      onClose();
      resetForm();
      toast.success(t("create_successfully"));
    },
  });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box py={4} p={2} textAlign="center">
        <Typography variant="h5" mb={1}>
          {t("add_todo")}
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
            sx={{ width: "300px" }}
            value={values.title}
            onChange={(e) => setFieldValue("title", e.target.value)}
            label={t("title")}
          />
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
          {/* <DesktopDatePicker
              label="Date desktop"
              //   inputFormat="MM/DD/YYYY"
              value={values.date}
              onChange={(e) => setFieldValue("date", e?.getDate())}
              // renderInput={(params: any) => <TextField {...params} />}
            /> */}
          {/* </LocalizationProvider> */}
          <Button variant="contained" type="submit" disabled={!isValid}>
            {t("submit")}
          </Button>
        </form>
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1} mx={8} my={2}></Box>
      </Box>
    </Dialog>
  );
}
