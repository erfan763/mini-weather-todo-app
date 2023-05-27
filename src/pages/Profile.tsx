import { Box, Button, Input, MenuItem, Select, TextField, Typography, useMediaQuery } from "@mui/material";
import { useFormik } from "formik";
import { getUserData, setToken } from "../utils";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { getModifiedValues } from "../logic/utils";
import { toast } from "react-toastify";
const schema = Yup.object({
  username: Yup.string().required().min(0).max(20),
});

export default function Profile() {
  const Smobile = useMediaQuery("(max-width:350px)");
  const { t } = useTranslation();
  const { handleSubmit, values, setFieldValue, isValid } = useFormik({
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
        setToken(JSON.stringify(data));
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
          sx={{ width: Smobile ? "250px" : "300px" }}
          value={values.username}
          onChange={(e) => setFieldValue("username", e.target.value)}
          label={t("username")}
        />
        <Typography sx={{ width: Smobile ? "250px" : "300px" }}>{t("theme")} : </Typography>
        <Select
          value={values.theme}
          onChange={(e) => setFieldValue("theme", e.target.value)}
          sx={{ width: Smobile ? "250px" : "300px" }}
        >
          <MenuItem value="light">{t("light")}</MenuItem>
          <MenuItem value="dark">{t("dark")}</MenuItem>
        </Select>
        <Typography sx={{ width: Smobile ? "250px" : "300px" }}>{t("language")} :</Typography>
        <Select
          value={values.language}
          onChange={(e) => setFieldValue("language", e.target.value)}
          sx={{ width: Smobile ? "250px" : "300px" }}
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
