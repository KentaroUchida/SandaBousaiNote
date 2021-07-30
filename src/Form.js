import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

class PrintFamilyInformation extends React.Component{
    constructor(props){
        super(props);
        this.state={name:props.name, phoneNumber:props.phoneNumber, insuranceId:props.insuranceId, illness:props.illness};
    }
    render(){
        return(
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography >名前:{this.state.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>電話番号:{this.state.phoneNumber}</p>
                            <p>保険証番号:{this.state.insuranceId}</p>
                            <p>病気・アレルギー:{this.state.illness}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}

class PrintRelativeInformation extends React.Component{
    constructor(props){
        super(props);
        this.state={name:props.name, phoneNumber:props.phoneNumber};
    }
    render(){
        return(
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography >名前:{this.state.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>電話番号:{this.state.phoneNumber}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}

class PrintSchoolInformation extends React.Component{
    constructor(props){
        super(props);
        this.state={name:props.name, phoneNumber:props.phoneNumber};
    }
    render(){
        return(
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography >施設名:{this.state.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>電話番号:{this.state.phoneNumber}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}

class PrintShelterInformation extends React.Component{
    constructor(props){
        super(props);
        this.state={ichiji:props.ichiji, saigai:props.saigai, tsunami:props.tsunami};
    }
    render(){
        return(
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography >避難所</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>一時避難所:{this.state.ichiji}</p>
                            <p>災害時避難所:{this.state.saigai}</p>
                            <p>津波避難所:{this.state.tsunami}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}

let family=[
    {
        "name":"山田航樹",
        "phoneNumber":"090-1234-5678",
        "insuranceId":"123456789",
        "illness":"花粉"
    },
    {
        "name":"内田健太郎",
        "phoneNumber":"090-8765-4321",
        "insuranceId":"987654321",
        "illness":"猫アレルギー"
    }
];
let relative=[
    {
        "name":"三田太郎",
        "phoneNumber":"090-1234-5678"
    },
    {
        "name":"四山",
        "phoneNumber":"090-8765-4321"
    }
];
let school=[
    {
        "name":"神戸大学",
        "phoneNumber":"090-1234-5678"
    },
    {
        "name":"生駒高校",
        "phoneNumber":"090-8765-4321"
    }
];
export default function Input(){
    // list.push(obj);
    return(
        <div>
            <h2>・家族の連絡先</h2>
            {family.map((v) => <PrintFamilyInformation name={v.name} phoneNumber={v.phoneNumber} insuranceId={v.insuranceId} illness={v.illness}/>)}
            <h2>・親戚、知人の連絡先</h2>
            {relative.map((v) => <PrintRelativeInformation name={v.name} phoneNumber={v.phoneNumber}/>)}
            <h2>・学校の連絡先</h2>
            {school.map((v) => <PrintSchoolInformation name={v.name} phoneNumber={v.phoneNumber}/>)}
            <br></br>
            <table border="1">
                <tr>
                    <td>NTT災害ダイヤル</td>
                    <td>171</td>
                </tr>
            </table>
            <br></br>
            <table border="1">
                <tr>
                    <td>自宅の電話番号</td>
                    <td><TextField/></td>
                </tr>
            </table>
            <h2>・避難所</h2>
            <table border="1">
                <tr>
                    <td>一時避難所</td>
                    <td><td><TextField id="standard-basic"/></td></td>
                </tr>
                <tr>
                    <td>災害避難所</td>
                    <td><td><TextField id="standard-basic"/></td></td>
                </tr>
                <tr>
                    <td>津波避難所</td>
                    <td><td><TextField id="standard-basic"/></td></td>
                </tr>
            </table>
        </div>
    )
}

// export default function Form(props) {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(true);
//     const handleClick = () => {
//         setOpen(!open);
//     };
//     return(
//         <div>
//             <h2>・家族の連絡先</h2>
//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                     >
//                     <Typography className={classes.heading}>{props.name}</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         <p>{props.phoneNumber}</p>
//                         <p>{props.insuranceId}</p>
//                         <p>{props.illness}</p>
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//             <br></br>
//             <h2>・親戚、知人の連絡先</h2>
//             <br></br>
//             <h2>・保育園、幼稚園、学校の連絡先</h2>
//         </div>
//     );
// }