import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import {Card} from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export const PrecautionList1 = () => {
    const classes = useStyles();
    return (<>
        <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image="/public/img/jishin_tsukue.png"
              title="jishin tasukete irasutoya"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                テーブルや机などの下にもぐり身を守る。足は出さないように注意！
              </Typography>
            </CardContent>
        </Card>
        </>
      );
}