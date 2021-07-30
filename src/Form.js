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
                            <p>病気、アレルギー:{this.state.illness}</p>
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
export default function Input(obj){
    return(
        <div>
            <h2>・家族の連絡先</h2>
            <PrintFamilyInformation name="やまだ" phoneNumber="090-1234-5678" insuranceId="12345" illness="犬アレルギー"/>
            <PrintFamilyInformation name="うちだ" phoneNumber="456" insuranceId="12345" illness="猫アレルギー"/>
            <h2>・親戚、知人の連絡先</h2>
            <PrintRelativeInformation name="さんだ" phoneNumber="111"/>
            <h2>・学校の連絡先</h2>
            <PrintRelativeInformation name="神戸大学" phoneNumber="078-"/>
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