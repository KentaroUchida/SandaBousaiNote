import React from "react";
import {
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { CardBase } from "../components/CardComponents";
import { SimpleTitle } from "../components/TitleComponents";

export const SandaP8Mada = () => {
  return (<>
    <SimpleTitle title="「まだ大丈夫」は危険!" subtitle="土砂災害・水害はあっという間!"/>

    <CardBase>
      <CardHeader
        title="避難指示で必ず避難!!"
        titleTypographyProps={{ align: "center" }}
        sx={{ bgcolor: "tertiary.main" }}
      />
      <CardContent>
        <CardBase>
          <CardHeader
            title="1 早期注意情報"
            titleTypographyProps={{ align: "center" }}
            subheader="(気象庁)"
            subheaderTypographyProps={{ align: "center" }}
            sx={{ bgcolor: "#fefad7" }}
          />
          <CardContent>

          </CardContent>
        </CardBase>
        <CardBase>
          <CardHeader
            title="2 大雨/洪水/高潮注意報"
            titleTypographyProps={{ align: "center" }}
            subheader="(気象庁)"
            subheaderTypographyProps={{ align: "center" }}
            sx={{ bgcolor: "#f8d92d" }}
          />
          <CardContent>

          </CardContent>
        </CardBase>
        <CardBase>
          <CardHeader
            title="3 高齢者等避難"
            titleTypographyProps={{ align: "center" }}
            sx={{ color: "white", bgcolor: "#ef5834" }}
          />
          <CardContent>

          </CardContent>
        </CardBase>
        <CardBase>
          <CardHeader
            title="4 避難指示"
            titleTypographyProps={{ align: "center" }}
            sx={{ color: "white", bgcolor: "#802a97" }}
          />
          <CardContent>

          </CardContent>
        </CardBase>
        <CardBase>
          <CardHeader
            title="5 緊急安全確保"
            titleTypographyProps={{ align: "center" }}
            sx={{ color: "white", bgcolor: "#2c2e35" }}
          />
          <CardContent>

          </CardContent>
        </CardBase>

      </CardContent>
    </CardBase>
  </>);
};