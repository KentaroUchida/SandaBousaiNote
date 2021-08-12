import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const categoryTextList = {
  family: "家族",
  relative: "親戚・知人",
  facility: "保育園・幼稚園・学校",
};

const FormEditDialog = ({ category, edit, remove, defaultMember }) => {
  const [member, setMember] = useState(defaultMember);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleMemberUpdate = (event) =>
    setMember((member) => {
      const nextMember = member;
      nextMember[event.target.id] = event.target.value;
      return nextMember;
    });

  const handleEdit = () => {
    edit(category,member);
    handleClose();
  };

  const handleRemove = () => {
    remove(category, member);
    handleClose();
  }

  const AddressTextField = ({
    id,
    label,
    type,
    helperText,
    defaultValue,
    required = false,
  }) => {
    return (
      <TextField
        margin="dense"
        id={id}
        label={label}
        type={type}
        helperText={helperText}
        defaultValue={defaultValue}
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
        defaultValue={member.name}
        required={true}
      />
      <AddressTextField
        id="phoneNumber"
        label="電話番号"
        type="text"
        helperText="家族の電話番号を入力してください。"
        defaultValue={member.phoneNumber}
      />
      <AddressTextField
        id="insuranceId"
        label="保険証番号"
        type="text"
        helperText="家族の保険証番号を入力してください。"
        defaultValue={member.insuranceId}
      />
      <AddressTextField
        id="illness"
        label="病気・アレルギー"
        type="text"
        helperText="家族の病気・アレルギーを入力してください。"
        defaultValue={member.illness}
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
        defaultValue={member.name}
        required={true}
      />
      <AddressTextField
        id="phoneNumber"
        label="電話番号"
        type="text"
        helperText="親戚・知人の電話番号を入力してください。"
        defaultValue={member.phoneNumber}
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
        defaultValue={member.name}
        required={true}
      />
      <AddressTextField
        id="phoneNumber"
        label="電話番号"
        type="text"
        helperText="施設の電話番号を入力してください。"
        defaultValue={member.phoneNumber}
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
        <EditIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {categoryTextList[category]}の連絡先編集
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {categoryTextList[category]}の情報に変更があれば入力してください。
          </DialogContentText>
          {textFieldList[category]}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleEdit} color="primary">
            編集
          </Button>
          <Button onClick={handleRemove} color="primary">
            削除
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormEditDialog;
