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

export const PrecautionList2 = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image="/public/img/gomi_waremono.png"
              title="gomi waremono irasutoya"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                キッチンにいる人は、子供の名前を呼んではいけません。キッチンにはガラスや割れ物がいっぱいです。
              </Typography>
            </CardContent>
            
        </Card>
      );
}