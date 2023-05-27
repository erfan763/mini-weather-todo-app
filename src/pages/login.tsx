import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material";
import { useFormik } from "formik";
import { getUserData, setToken } from "../utils";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = Yup.object({
  username: Yup.string().required().min(0).max(20),
});
export default function Login() {
  const Smobile = useMediaQuery("(max-width:350px)");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { handleSubmit, values, setFieldValue, isValid } = useFormik({
    initialValues: {
      username: getUserData()?.username || "",
    },
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit(data) {
      setToken(JSON.stringify(data));
      toast.success(t("create_successfully"));
      navigate("/home");
      window.location.reload();
    },
  });
  return (
    <Box mt={10}>
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
        <Typography variant="h6">{t("please_write_name")}</Typography>
        <TextField
          sx={{ width: Smobile ? "250px" : "300px" }}
          value={values.username}
          onChange={(e) => setFieldValue("username", e.target.value)}
          label={t("username")}
        />

        <Button variant="contained" type="submit" disabled={!isValid}>
          {t("submit")}
        </Button>
      </form>
    </Box>
  );
}
