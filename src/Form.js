import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormDialog from './Form/Dialog';
import Button from '@material-ui/core/Button';

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

class PrintFacilityInformation extends React.Component{
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

class Form extends React.Component {
    constructor() {
        super();
        this.state = { // プロトタイプ閲覧用初期データ TODO: ローカルストレージに情報を保持させられるように
            family: [
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
            ],
            relatives: [
                {
                    "name":"三田太郎",
                    "phoneNumber":"090-1234-5678"
                },
                {
                    "name":"四山",
                    "phoneNumber":"090-8765-4321"
                }
            ],
            facilities: [
                {
                    "name":"神戸大学",
                    "phoneNumber":"090-1234-5678"
                },
                {
                    "name":"生駒高校",
                    "phoneNumber":"090-8765-4321"
                }
            ]
        };

        this.addFamily = this.addFamily.bind(this);
        this.addRelative = this.addRelative.bind(this);
        this.addFacility = this.addFacility.bind(this);
        this.setValues = this.setValues.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    addFamily(member) {
        this.state.family.push(member);
        this.setState(this.state);
    }

    addRelative(member) {
        this.state.relatives.push(member);
        this.setState(this.state);
    }

    addFacility(member) {
        this.state.facilities.push(member);
        this.setState(this.state);
    }

    handleChange(event){
        this.setState({[event.target.id]:event.target.value});
    }
    setValues(){
        localStorage.setItem('phone',this.state.phone);
        localStorage.setItem('ichiji',this.state.ichiji);
        localStorage.setItem('saigai',this.state.saigai);
        localStorage.setItem('tsunami',this.state.tsunami);
        alert(this.state.phone +"と"+this.state.ichiji +"を保存しました");
        // alert("電話番号と避難先を保存しました");
    }

    render() {
        var phoneNumber=localStorage.getItem('phone');
        var ichiji=localStorage.getItem('ichiji');
        var saigai=localStorage.getItem('saigai');
        var tsunami=localStorage.getItem('tsunami');
        return(
            <div>
                <Grid
                    justify="space-between"
                    alignItems="center"
                    container
                >
                    <h2>・家族の連絡先</h2>
                    <FormDialog category="family" submit={this.addFamily}/>
                </Grid>
                {this.state.family.map((v) => <PrintFamilyInformation name={v.name} phoneNumber={v.phoneNumber} insuranceId={v.insuranceId} illness={v.illness}/>)}

                <Grid
                    justify="space-between"
                    alignItems="center"
                    container
                >
                    <h2>・親戚、知人の連絡先</h2>
                    <FormDialog category="relative" submit={this.addRelative}/>
                </Grid>
                {this.state.relatives.map((v) => <PrintRelativeInformation name={v.name} phoneNumber={v.phoneNumber}/>)}

                <Grid
                    justify="space-between"
                    alignItems="center"
                    container
                >
                    <h2>・保育園、幼稚園、学校の連絡先</h2>
                    <FormDialog category="facility" submit={this.addFacility}/>
                </Grid>
                {this.state.facilities.map((v) => <PrintFacilityInformation name={v.name} phoneNumber={v.phoneNumber}/>)}
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
                        <td><TextField onChange={this.handleChange} id="phone" defaultValue={phoneNumber}/></td>
                    </tr>
                </table>
                <h2>・避難所</h2>
                <table border="1">
                    <tr>
                        <td>一時避難所</td>
                        <td><TextField onChange={this.handleChange} id="ichiji" defaultValue={ichiji}/></td>
                    </tr>
                    <tr>
                        <td>災害避難所</td>
                        <td><TextField onChange={this.handleChange} id="saigai" defaultValue={saigai}/></td>
                    </tr>
                    <tr>
                        <td>津波避難所</td>
                        <td><TextField onChange={this.handleChange} id="tsunami" defaultValue={tsunami}/></td>
                    </tr>
                </table>
                <br></br>
                <Button onClick={this.setValues} variant="contained" color="primary">
                保存
                </Button>
            </div>
        );
    }
}

export default Form;
