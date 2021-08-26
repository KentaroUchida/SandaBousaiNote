import React, { useState } from "react";
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton} from "@material-ui/core";
import {AddCircle as AddCircleIcon} from "@material-ui/icons";

const categoryTextList = {
  family: "家族",
  relative: "親戚・知人",
  facility: "保育園・幼稚園・学校",
};

const FormRegisterDialog = ({ category, submit }) => {
  const [member, setMember] = useState({});
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleMemberUpdate = (event) =>
    setMember((member) => {
      const nextMember = member;
      nextMember[event.target.id] = event.target.value;
      return nextMember;
    });

  const handleSubmit = () => {
    submit(category,member);
    handleClose();
  };

  const AddressTextField = ({
    id,
    label,
    type,
    helperText,
    required = false,
  }) => {
    return (
      <TextField
        margin="dense"
        id={id}
        label={label}
        type={type}
        helperText={helperText}
        fullWidth
        required={required}
        onChange={handleMemberUpdate}
      />
    );
  };

  const FamilyRegisterTextField = () => (
    <div className="FamilyTextField">
      <AddressTextField
        id="name"
        label="名前"
        type="name"
        helperText="家族の名前を入力してください。"
        required={true}
      />
      <AddressTextField
        id="phoneNumber"
        label="電話番号"
        type="text"
        helperText="家族の電話番号を入力してください。"
      />
      <AddressTextField
        id="insuranceId"
        label="保険証番号"
        type="text"
        helperText="家族の保険証番号を入力してください。"
      />
      <AddressTextField
        id="illness"
        label="病気・アレルギー"
        type="text"
        helperText="家族の病気・アレルギーを入力してください。"
      />
    </div>
  );

  const RelativeRegisterTextField = () => (
    <div className="RelativeTextField">
      <AddressTextField
        id="name"
        label="名前"
        type="name"
        helperText="親戚・知人の名前を入力してください。"
        required={true}
      />
      <AddressTextField
        id="phoneNumber"
        label="電話番号"
        type="text"
        helperText="親戚・知人の電話番号を入力してください。"
      />
    </div>
  );

  const FacilityRegisterTextField = () => (
    <div className="RelativeTextField">
      <AddressTextField
        id="name"
        label="施設名"
        type="name"
        helperText="施設名を入力してください。"
        required={true}
      />
      <AddressTextField
        id="phoneNumber"
        label="電話番号"
        type="text"
        helperText="施設の電話番号を入力してください。"
      />
    </div>
  );

  const textFieldList = {
    family: <FamilyRegisterTextField />,
    relative: <RelativeRegisterTextField />,
    facility: <FacilityRegisterTextField />,
  };

  return (
    <div className="FormDialog">
      <IconButton
        color="primary"
        aria-label="create form"
        onClick={handleClickOpen}
      >
        <AddCircleIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {categoryTextList[category]}の連絡先追加
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {categoryTextList[category]}の情報を入力してください。
          </DialogContentText>
          {textFieldList[category]}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleSubmit} color="primary">
            追加
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormRegisterDialog;
