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

export const PrecautionList3 = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image="/public/img/jiko_jishin_himoto.png"
              title="jiko jishin himoto"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                火の元よりもまずは自分の身を守ること。大阪ガスでは、震度５以上の揺れを感知すると自動的にガスが止まるようになっています。
              </Typography>
            </CardContent>
        </Card>
      );
}