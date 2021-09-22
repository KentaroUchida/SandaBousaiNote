import React from "react";
import {
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles"
import { ResponsiveFontProvider } from "../components/ResponsiveFontProvider";

const imgPath = "/img/pages/P14Daijobu/";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
  },
  card: {
    margin: theme.spacing(1),
  },
  cardTitle: {
    backgroundColor: theme.palette.tertiary.main,
    margin: theme.spacing(1),
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
  },
  image: {
    width: 128,
    height: 128,
  },
  img1: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  img2: {
    textAlign: "center",
  }
}));

const Photo = ({ image1, image2, text1 ,text2 }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div>
              <img className={classes.img1} src={image1} alt="complex" />
            </div>
          </Grid>
          <Grid item xs={9} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Paper elevation={3} className={classes.cardTitle}>
                  <Typography variant="h5">{text1}</Typography>
                </Paper>
                {text2}
                <div className={classes.img2}>
                  <img src={image2} alt="" style={{ maxWidth: "100%" ,height: "200px"}}/>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br/>
    </div>
  );
};


const heartImages = ["heart1.png", "heart2.png"];

const illustTexts1 = ["体に避難行動をすり込ませます。",
  "勇気を出して、主体的に避難します。",];
  
const illustTexts2 = ["継続的に、様々な場所や場面を想定した防災訓練に取り組みます。すぐに行動するには、体で覚えるしかありません。ふだんからイメージして実際に訓練しましょう。",
  "今までに経験したことのない場面で迷ったとき、周囲の人と同じ行動を取ろうとすることがあります。周囲と異なる行動には抵抗があるかもしれませんが、声を掛けながら避難することは、自分だけでなく、周りの人の命を助けることにもなります。"];

const subImages = ["pic1_1.png", "pic2_1.png"]


export const P14Daijobu = () => {
    const classes = useStyles();
    return (
      <>
        <ResponsiveFontProvider>
          <Typography variant="h1" gutterBottom>
            私は大丈夫!
          </Typography>
          <Typography variant="h3" gutterBottom>
            って思ってない？
          </Typography>
        </ResponsiveFontProvider>
        <ResponsiveFontProvider>
          <Typography variant="h4" gutterBottom style={{color:"red"}}>
            それは、イヤなことを考えたくない心理です！
          </Typography>
        </ResponsiveFontProvider>

        <br/>
        <ResponsiveFontProvider>
          <Typography variant="h6" gutterBottom >
            ●確かな災害情報があったにもかかわらず、避難に結びつかなかったケースがありました。その理由のひとつは、非常事態が起きても「自分は大丈夫」という心理が働き、「油断」を生み、避難を遅くさせてしまったからです。
          </Typography>
        </ResponsiveFontProvider>

        <Grid container>
          {heartImages.map((_, i) => (
            <Grid item xs={12} className={classes.grid} key={i.toString()}>
              <Photo image1={imgPath + heartImages[i]} image2={imgPath + subImages[i]} text1={illustTexts1[i]} text2={illustTexts2[i]} />
            </Grid>
          ))}
        </Grid>

        <Grid container>
          <Grid item xs={12} className={classes.grid}>
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <div>
                      <img className={classes.img1} src={imgPath + "heart3.png"} alt="complex" />
                    </div>
                  </Grid>
                  <Grid item xs={9} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Paper elevation={3} className={classes.cardTitle}>
                          <Typography variant="h5">油断しないで、最善をつくす。</Typography>
                        </Paper>
                        自然災害は、想定していたものより、小さなもので済むことがあります。
                        でも、そのようなことが続いたとしても、油断しないで最善を尽くします。
                        自然災害は、想定していた以上の被害が生じることもあるからです。
                        <div className={classes.img2}>
                          <img src={imgPath + "pic3_1.png"} alt="" style={{ maxWidth: "100%" ,height: "auto"}}/>
                          <img src={imgPath + "pic3_2.png"} alt="" style={{ maxWidth: "50%" ,height: "auto"}}/>
                          <img src={imgPath + "pic3_3.png"} alt="" style={{ maxWidth: "50%" ,height: "auto"}}/>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
        </Grid>
        
      </>
    );
  };