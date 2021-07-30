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

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member: {},
            open: false
        };

        this.cg = "";
        if(props.category === "family") {
            this.cg = "家族";
        } else if(props.category === "relative") {
            this.cg = "親戚・知人";
        } else if(props.category === "facility") {
            this.cg = "保育園・幼稚園・学校";
        }

        this.handleClickOpen      = this.handleClickOpen.bind(this);
        this.handleClose          = this.handleClose.bind(this);
        this.handleCloseAndSubmit = this.handleCloseAndSubmit.bind(this);
        this.setMember            = this.setMember.bind(this);
    }

    handleClickOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    handleCloseAndSubmit() {
        this.props.submit(this.state.member);
        this.handleClose();
    }

    setMember(member) {
        this.setState({member: member});
    }

    render() {
        return (
            <div className="Create">
                <IconButton
                    color="primary"
                    aria-label="create form"
                    onClick={this.handleClickOpen}
                >
                    <AddCircleIcon/>
                </IconButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        {this.cg}の連絡先追加
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.cg}の情報を入力してください。
                        </DialogContentText>
                        {this.props.category === "family"   &&
                            <FamilyTextField   func={this.setMember}/>}
                        {this.props.category === "relative" &&
                            <RelativeTextField func={this.setMember}/>}
                        {this.props.category === "facility" &&
                            <FacilityTextField func={this.setMember}/>}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            キャンセル
                        </Button>
                        <Button onClick={this.handleCloseAndSubmit} color="primary">
                            追加
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
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

    // TODO整理
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
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
        this.state = { // TODO: ローカルストレージに情報を保持させられるように
            family: [],
            relatives: [],
            facilities: []
        };
        this.addFamily   = this.addFamily.bind(this);
        this.addRelative = this.addRelative.bind(this);
        this.addFacility = this.addFacility.bind(this);
    }

    addFamily(member) {
        this.state.family.push(member);
    }

    addRelative(member) {
        this.state.relatives.push(member);
    }

    addFacility(member) {
        this.state.facilities.push(member);
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
