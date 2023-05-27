import { Autocomplete, Box, Card, TextField, Typography } from "@mui/material";
import { data } from "./cityDb";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { IWeatherType } from "api/weather";
import { GetWeatherStatus } from "./weatherStatus";

export default function Weather() {
  const { t } = useTranslation();

  // const [weatherStatus, setWeatherStatus] = useState<"windy" | "rainy" | "sunny" | "cloudy">("sunny");

  const [state, setState] = useState<{ lat: string; lng: string; label: string }>({
    lat: "35.7000",
    lng: "51.4167",
    label: "Tehran",
  });

  const neededData = data.map((a) => {
    return { label: a.city, lat: a.lat, lng: a.lng };
  });

  const { data: weather } = useSWR<IWeatherType>(
    `/forecast?latitude=${state?.lat}&longitude=${state?.lng}&current_weather=true&hourly=precipitation,cloudcover`
  );

  const [weatherStatusState, setWeatherStatusState] = useState<{
    windy: boolean;
    rainy: boolean;
    cloudy: boolean;
    sunny: boolean;
  }>();
  useEffect(() => {
    const weatherStatus = GetWeatherStatus(weather);
    setWeatherStatusState(weatherStatus);
  }, [weather]);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" m={5}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        value={state}
        onChange={(e, nv) => nv && setState(nv)}
        options={neededData}
        sx={{ width: "300px" }}
        renderInput={(params) => <TextField {...params} label={t("city")} />}
      />
      <Card
        sx={{
          width: "300px",
          mt: 2,
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        variant="outlined"
      >
        <Typography>{state?.label}</Typography>
        <Typography>{weather?.current_weather?.temperature} C</Typography>
        <Typography>
          {weatherStatusState?.cloudy && t("cloudy")}
          {"  "}
          {weatherStatusState?.rainy && t("rainy")}
          {"  "}
          {weatherStatusState?.windy && t("windy")}
          {"  "}
          {weatherStatusState?.sunny && t("sunny")}
          {"  "}
        </Typography>
      </Card>
    </Box>
  );
}
