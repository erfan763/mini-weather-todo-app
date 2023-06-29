import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material";
import { useFormik } from "formik";
import { getUserData, setUserToken } from "../utils";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useRTL from "../hooks/useRTL";

export default function Login() {
  const SMobile = useMediaQuery("(max-width:350px)");
  const { t } = useTranslation();
  const isRtl = useRTL();
  const navigate = useNavigate();

  const schema = Yup.object({
    username: isRtl
      ? Yup.string()
          .required("وارد کردن نام کاربری الزامی است")
          .min(3, "نام کابری شما حداقل باید شامل 3 حرف باشد")
          .max(20, "شما حداکثر مجاز به وارد کردن 20 حرف هستید")
      : Yup.string().required().min(0).max(20),
  });

  const { handleSubmit, values, setFieldValue, isValid, errors, touched } = useFormik({
    initialValues: {
      username: getUserData()?.username || "",
    },
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit(data) {
      if (data.username === "Mahla" || data.username === "مهلا") {
        setUserToken(JSON.stringify(data));
        toast.success(t("create_successfully"));
        navigate("/home");
        window.location.reload();
      }
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
          sx={{ width: SMobile ? "250px" : "300px" }}
          value={values.username}
          onChange={(e) => setFieldValue("username", e.target.value)}
          label={t("username")}
          error={Boolean(touched.username && errors.username)}
          helperText={errors.username}
        />

        <Button variant="contained" type="submit" disabled={!isValid}>
          {t("submit")}
        </Button>
      </form>
    </Box>
  );
}
