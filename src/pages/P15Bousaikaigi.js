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
import FormGroup  from '@material-ui/core/FormGroup';
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import TextField  from '@material-ui/core/TextField';

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
            <FormControlLabel
            control = {<Checkbox
            checked={state.checkedBasyo}
            onChange={handleChange}
            name="checkedBasyo"
            color="primary"/>}
           label = "避難場所について家族で場所の確認などをしましたか？"
           />
            
        <FormGroup row>
           <FormControlLabel
           control = {
            <table border = "1"　align="center">
                <tbody>
            <tr>
            <td>地震の場合</td>
            <td><TextField id="standard-basic"/></td>
            </tr>
            <tr>
            <td>水害の場合</td>
            <td><TextField id="standard-basic"/></td>
            </tr>
          </tbody>
          </table>
           }
           />          
        </FormGroup>

        <FormControlLabel
            control = {<Checkbox
            checked={state.checkedBasyo}
            onChange={handleChange}
            name="checkedBasyo"
            color="primary"/>}
           label = "家族の集合場所は決めましたか？"
           />
　　　　　　<FormGroup row>
           <FormControlLabel
           control = {
            <table border = "1"　align="center">
                <tbody>
            <tr>
            <td>家族の集合場所</td>
            <td><TextField id="standard-basic"/></td>
            </tr>
          </tbody>
          </table>
           }
           />          
        　</FormGroup>

        <FormControlLabel
            control = {<Checkbox
            checked={state.checkedBasyo}
            onChange={handleChange}
            name="checkedBasyo"
            color="primary"/>}
           label = "家の中の安全対策はできていますか？"
           />

        <FormGroup row>
        <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedKaguKotei}
            onChange={handleChange}
            name="checkedKaguKotei"
            color="primary"
          />
        }
        label="家具の固定"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedGarasuHisan}
            onChange={handleChange}
            name="checkedGarasuHisan"
            color="primary"
          />
        }
        label="ガラス飛散防止"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedSyuno}
            onChange={handleChange}
            name="checkedSyuno"
            color="primary"
          />
        }
        label="収納"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedKaguHaiti}
            onChange={handleChange}
            name="checkedKaguHaiti"
            color="primary"
          />
        }
        label="家具の配置"
      />
        </FormGroup>


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