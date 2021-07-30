import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Create(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let cg = "";
    if(props.category === "family") {
        cg = "家族";
    } else if(props.category === "relative") {
        cg = "親戚・知人";
    } else if(props.category === "facility") {
        cg = "保育園・幼稚園・学校";
    }

    return (
        <div className="Create">
            <IconButton color="primary" aria-label="create form" onClick={handleClickOpen}>
                <AddCircleIcon/>
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    {cg}の連絡先追加
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {cg}の情報を入力してください。
                    </DialogContentText>
                    {props.category === "family"   && <FamilyTextField/>}
                    {props.category === "relative" && <RelativeTextField/>}
                    {props.category === "facility" && <FacilityTextField/>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        キャンセル
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        追加
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

class FamilyTextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            healthInsuranceId: "",
            illnessAndAllergy: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.name,
            phone: event.target.phone,
            healthInsuranceId: event.target.healthInsuranceId,
            illnessAndAllergy: event.target.illnessAndAllergy
        });
        this.props.func(this.state);
    }

    render() {
        return (
            <div className="FamilyTextField">
                <TextField
                    margin="dense"
                    id="name"
                    label="名前"
                    type="name"
                    helperText="家族の名前を入力してください。"
                    fullWidth
                    required
                    onChange={this.handleChange}
                />
                <TextField
                    margin="dense"
                    id="phone"
                    label="電話番号"
                    type="text"
                    helperText="家族の電話番号を入力してください。"
                    fullWidth
                    onChange={this.handleChange}
                />
                <TextField
                    margin="dense"
                    id="healthInsuranceId"
                    label="保険証番号"
                    type="text"
                    helperText="家族の保険証番号を入力してください。"
                    fullWidth
                    onChange={this.handleChange}
                />
                <TextField
                    margin="dense"
                    id="illnessAndAllergy"
                    label="病気・アレルギー"
                    type="text"
                    helperText="家族の病気・アレルギーを入力してください。"
                    fullWidth
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

class RelativeTextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: ""
        }
    }

    handleChange(event) {
        this.setState({
            name: event.target.name,
            phone: event.target.phone
        });
        this.props.func(this.state);
    }

    render() {
        return (
            <div className="RelativeTextField">
                <TextField
                    margin="dense"
                    id="name"
                    label="名前"
                    type="name"
                    helperText="親戚・知人の名前を入力してください。"
                    fullWidth
                    required
                    onChange={this.handleChange}
                />
                <TextField
                    margin="dense"
                    id="phone"
                    label="電話番号"
                    type="text"
                    helperText="親戚・知人の電話番号を入力してください。"
                    fullWidth
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

class FacilityTextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: ""
        }
    }

    handleChange(event) {
        this.setState({
            name: event.target.name,
            phone: event.target.phone
        });
        this.props.func(this.state);
    }

    render() {
        return (
            <div className="RelativeTextField">
                <TextField
                    margin="dense"
                    id="name"
                    label="施設名"
                    type="name"
                    helperText="施設名を入力してください。"
                    fullWidth
                    required
                    onChange={this.handleChange}
                />
                <TextField
                    margin="dense"
                    id="phone"
                    label="電話番号"
                    type="text"
                    helperText="施設の電話番号を入力してください。"
                    fullWidth
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // TODO: キャッシュから情報を読み取れるように
            family: [],
            relatives: [],
            facilities: []
        };
    }

    addFamily(member) {
        this.family.push(member);
        this.getAllState()
    }

    addRelative(member) {
        this.relatives.push(member);
        this.getAllState()
    }

    addFacility(member) {
        this.facilities.push(member);
        this.getAllState()
    }

    getAllState() {
        console.log(this.state);
    }

    render() {
        return (
            <div className="Form">
                <p>Test</p>
                <Create category="family"   submit={this.addFamily}/>
                <Create category="relative" submit={this.addRelative}/>
                <Create category="facility" submit={this.addFacility}/>
            </div>
        );
    }
}

export default Form;
