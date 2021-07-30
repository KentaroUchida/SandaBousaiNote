import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import {Card} from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { CardContent } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      width: "100%",
      backgroundColor: "#81c784"
    },
    media: {
      height: "100%"
    },
  });

export const PrecautionList1 = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
           <CardMedia>
        <img src="/img/jishin_tsukue.png" alt="" style={{height: 200}}/>
      </CardMedia>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                テーブルや机などの下にもぐり身を守る。足は出さないように注意！
              </Typography>
            </CardContent>
        </Card>
      );
}