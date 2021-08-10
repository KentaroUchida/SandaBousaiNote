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

class FormDialog extends React.Component {
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

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose     = this.handleClose.bind(this);
        this.handleSubmit    = this.handleSubmit.bind(this);
        this.setMember       = this.setMember.bind(this);
    }

    handleClickOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    handleSubmit() {
        this.props.submit(this.state.member);
        if(this.props.category==="family"){
            var cnt = localStorage.getItem('familyCounter');
            if(cnt === null) cnt=1;
            else cnt++;
            localStorage.setItem('familyCounter', cnt);
            localStorage.setItem("family"+cnt, JSON.stringify(this.state.member));
        }else if(this.props.category==="relative"){
            var cnt = localStorage.getItem('relativeCounter');
            if(cnt === null) cnt=1;
            else cnt++;
            localStorage.setItem('relativeCounter', cnt);
            localStorage.setItem("relative"+cnt, JSON.stringify(this.state.member));
        }else{
            var cnt = localStorage.getItem('facilityCounter');
            if(cnt === null) cnt=1;
            else cnt++;
            localStorage.setItem('facilityCounter', cnt);
            localStorage.setItem("facility"+cnt, JSON.stringify(this.state.member));
        }

        this.handleClose();
    }

    setMember(member) {
        this.setState({member: member});
    }

    render() {
        return (
            <div className="FormDialog">
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
                        <Button onClick={this.handleSubmit} color="primary">
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
            phoneNumber: "",
            insuranceId: "",
            illness: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
        await this.setState({
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
                    id="phoneNumber"
                    label="電話番号"
                    type="text"
                    helperText="家族の電話番号を入力してください。"
                    fullWidth
                    onChange={this.handleChange}
                />
                <TextField
                    margin="dense"
                    id="insuranceId"
                    label="保険証番号"
                    type="text"
                    helperText="家族の保険証番号を入力してください。"
                    fullWidth
                    onChange={this.handleChange}
                />
                <TextField
                    margin="dense"
                    id="illness"
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
            phoneNumber: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
        await this.setState({
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
                    id="phoneNumber"
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
            phoneNumber: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
        await this.setState({
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
                    id="phoneNumber"
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

export default FormDialog;
