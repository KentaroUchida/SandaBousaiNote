import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import {Card} from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
const useStyles = makeStyles({
    root: {
      width: "100%",
      backgroundColor: "#ffcc66"
    },
    media: {
      height: "100%"
    },
  });

export const PrecautionList2 = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia>
        <img src="/img/gomi_waremono.png" alt="" style={{height: 200}}/>
      </CardMedia>
            <CardContent>
              
                キッチンにいる人は、子供の名前を呼んではいけません。キッチンにはガラスや割れ物がいっぱいです。
             
            </CardContent>
            
        </Card>
      );
}