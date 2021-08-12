import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles({
    root: {
      minWidth: '100%',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
function Notice() {
  return (
  <Card raised>
    <CardHeader
      title="家族で防災カイギ"
      titleTypographyProps={{ align: 'center' }}
      style={{backgroundColor: "#6699ff"}}
    />
    <CardContent>
      <Typography>
        いざという時のために「今」できること
      </Typography>
    </CardContent>
  </Card>
  );
}

function CheckList(){
    const classes = useStyles();
 　 const bull = <span className={classes.bullet}>•</span>;
 　 const [state, setState] = React.useState(false);
    const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
    return(
            <Card className={classes.root}>
                <CardHeader
                title="ーーチェックリストーー"
                titleTypographyProps={{ align: 'center' }}
                style={{backgroundColor: "#6699ff"}}
                />
              <CardContent>
              <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />

              </CardContent>
            </Card>
          );
}
　


export default function P15Bousaikaigi() {
  return (<>
    <Notice/>
    <br/>
    <Typography>
        大地震が起きたとき、家族が別の場所にいて、離ればなれになることも。
        避難場所にはたくさんの人が集まり、すぐに会えるとはかぎりません。
        集合場所は時間と場所をピンポイントできめておきましょう。
    </Typography>
    <Typography　style={{color: "blue"}}　>
        （例えば）三田小学校の運動場の鉄棒の前　10時と15時に30分だけ待つ。
    </Typography>
    <br/>
    <CheckList/>

 
  </>);
}