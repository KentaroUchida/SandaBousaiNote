import { Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import blueGrey from "@mui/material/colors/blueGrey"

export const SwipeNotifier = () => (
  <>
    <Box
      bgcolor="grey.100"
      position="absolute"
      left="0%"
      height="100%"
      width={50}
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      style={{opacity: 0.4}}
      zIndex="appBar"
    >
        <ArrowBackIos style={{fontSize: 40, color :blueGrey[900]}}/>
    </Box>
    <Box
      bgcolor="grey.100"
      position="absolute"
      right="0%"
      height="100%"
      width={50}
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{opacity: 0.4}}
      zIndex="appBar"
    >
        <ArrowForwardIos style={{fontSize: 40, color :blueGrey[900]}}/>
    </Box>
  </>
);
