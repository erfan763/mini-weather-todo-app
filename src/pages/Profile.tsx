import { Box, Button, Input, MenuItem, Select, TextField, Typography, useMediaQuery } from "@mui/material";
import { useFormik } from "formik";
import { getUserData, setUserToken } from "../utils";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { getModifiedValues } from "../logic/utils";
import { toast } from "react-toastify";
import useRTL from "../hooks/useRTL";

export default function Profile() {
  const SMobile = useMediaQuery("(max-width:350px)");
  const isRtl = useRTL();
  const { t } = useTranslation();

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
      username: getUserData()?.username,
      theme: getUserData()?.theme || "light",
      language: getUserData()?.language || "en",
    },
    validationSchema: schema,
    onSubmit(data) {
      const modified = getModifiedValues(
        { ...data },
        {
          username: getUserData()?.username,
          theme: getUserData()?.theme || "light",
          language: getUserData()?.language || "en",
        }
      );
      if (modified) {
        setUserToken(JSON.stringify(data));
        window.location.reload();
        toast.success(t("update_successfully"));
      } else {
        toast.error(t("no_change"));
      }
    },
  });
  return (
    <Box mt={5}>
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
          sx={{ width: SMobile ? "250px" : "300px" }}
          value={values.username}
          onChange={(e) => setFieldValue("username", e.target.value)}
          label={t("username")}
          error={Boolean(touched.username && errors.username)}
          helperText={errors.username}
        />
        <Typography sx={{ width: SMobile ? "250px" : "300px" }}>{t("theme")} : </Typography>
        <Select
          value={values.theme}
          onChange={(e) => setFieldValue("theme", e.target.value)}
          sx={{ width: SMobile ? "250px" : "300px" }}
        >
          <MenuItem value="light">{t("light")}</MenuItem>
          <MenuItem value="dark">{t("dark")}</MenuItem>
        </Select>
        <Typography sx={{ width: SMobile ? "250px" : "300px" }}>{t("language")} :</Typography>
        <Select
          value={values.language}
          onChange={(e) => setFieldValue("language", e.target.value)}
          sx={{ width: SMobile ? "250px" : "300px" }}
        >
          <MenuItem value="en">{t("en")}</MenuItem>
          <MenuItem value="fs">{t("fs")}</MenuItem>
        </Select>

        <Button variant="contained" type="submit" disabled={!isValid}>
          {t("submit")}
        </Button>
      </form>
    </Box>
  );
}
