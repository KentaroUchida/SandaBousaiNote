import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormRegisterDialog from "../components/RegisterDialog";
import FormEditDialog from "../components/EditDialog";
import Button from "@material-ui/core/Button";

const Form = () => {
  const [familyList, setFamilyList] = useState(
    JSON.parse(localStorage.getItem("familyList")) || []
  );
  const [relativeList, setRelativeList] = useState(
    JSON.parse(localStorage.getItem("relativeList")) || []
  );
  const [facilityList, setFacilityList] = useState(
    JSON.parse(localStorage.getItem("facilityList")) || []
  );
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phone") || ""
  );
  const [ichiji, setIchiji] = useState(localStorage.getItem("ichiji") || "");
  const [saigai, setSaigai] = useState(localStorage.getItem("saigai") || "");
  const [tsunami, setTsunami] = useState(localStorage.getItem("tsunami") || "");

  const switchCategory = (category, func) => {
    switch (category) {
      case "family":
        setFamilyList(func);
        break;
      case "relative":
        setRelativeList(func);
        break;
      case "facility":
        setFacilityList(func);
        break;
      default:
    }
  };

  const addAddress = (category, member) => {
    const listName = category + "List";
    let memberList = JSON.parse(localStorage.getItem(listName)) || [];
    memberList.push(member);
    localStorage.setItem(listName, JSON.stringify(memberList));
    switchCategory(category, JSON.parse(localStorage.getItem(listName)) || []);
  };

  const editAddress = (index) => (category, member) => {
    const listName = category + "List";
    let memberList = JSON.parse(localStorage.getItem(listName)) || [];
    memberList.splice(index, 1, member);
    localStorage.setItem(listName, JSON.stringify(memberList));
    switchCategory(category, JSON.parse(localStorage.getItem(listName)) || []);
  };

  const removeAddress = (index) => (category) => {
    const listName = category + "List";
    let memberList = JSON.parse(localStorage.getItem(listName)) || [];
    memberList.splice(index, 1);
    localStorage.setItem(listName, JSON.stringify(memberList));
    switchCategory(category, JSON.parse(localStorage.getItem(listName)) || []);
  };

  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleIchijiChange = (event) => setIchiji(event.target.value);
  const handleSaigaiChange = (event) => setSaigai(event.target.value);
  const handleTsunamiChange = (event) => setTsunami(event.target.value);

  const setValues = () => {
    localStorage.setItem("phone", phoneNumber);
    localStorage.setItem("ichiji", ichiji);
    localStorage.setItem("saigai", saigai);
    localStorage.setItem("tsunami", tsunami);
    alert("電話番号と避難先を保存しました");
  };

  const PrintFamilyInformation = ({
    name,
    phoneNumber,
    insuranceId,
    illness,
    index,
  }) => (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography>名前:{name}</Typography>
          </Grid>
          <Grid item>
            <FormEditDialog
              category="family"
              edit={editAddress(index)}
              remove={removeAddress(index)}
              defaultMember={familyList[index]}
            />
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p>電話番号:{phoneNumber}</p>
          <p>保険証番号:{insuranceId}</p>
          <p>病気・アレルギー:{illness}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );

  const PrintRelativeInformation = ({ name, phoneNumber, index }) => (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography>名前:{name}</Typography>
          </Grid>
          <Grid item>
            <FormEditDialog
              category="relative"
              edit={editAddress(index)}
              remove={removeAddress(index)}
              defaultMember={relativeList[index]}
            />
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p>電話番号:{phoneNumber}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );

  const PrintFacilityInformation = ({ name, phoneNumber, index }) => (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography>施設名:{name}</Typography>
          </Grid>
          <Grid item>
            <FormEditDialog
              category="facility"
              edit={editAddress(index)}
              remove={removeAddress(index)}
              defaultMember={facilityList[index]}
            />
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p>電話番号:{phoneNumber}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );

  return (
    <div>
      <Grid justify="space-between" alignItems="center" container>
        <h2>・家族の連絡先</h2>
        {<FormRegisterDialog category="family" submit={addAddress} />}
      </Grid>
      {familyList.map((v, index) => (
        <PrintFamilyInformation
          name={v.name}
          phoneNumber={v.phoneNumber}
          insuranceId={v.insuranceId}
          illness={v.illness}
          index={index}
        />
      ))}
      <Grid justify="space-between" alignItems="center" container>
        <h2>・親戚、知人の連絡先</h2>
        {<FormRegisterDialog category="relative" submit={addAddress} />}
      </Grid>
      {relativeList.map((v, index) => (
        <PrintRelativeInformation
          name={v.name}
          phoneNumber={v.phoneNumber}
          index={index}
        />
      ))}

      <Grid justify="space-between" alignItems="center" container>
        <h2>・保育園、幼稚園、学校の連絡先</h2>
        {<FormRegisterDialog category="facility" submit={addAddress} />}
      </Grid>
      {facilityList.map((v, index) => (
        <PrintFacilityInformation
          name={v.name}
          phoneNumber={v.phoneNumber}
          index={index}
        />
      ))}
      <br></br>
      <table border="1">
        <tbody>
          <tr>
            <td>NTT災害ダイヤル</td>
            <td>171</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <table border="1">
        <tbody>
          <tr>
            <td>自宅の電話番号</td>
            <td>
              <TextField
                onChange={handlePhoneNumberChange}
                id="phone"
                defaultValue={phoneNumber}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <h2>・避難所</h2>
      <table border="1">
        <tbody>
          <tr>
            <td>一時避難所</td>
            <td>
              <TextField
                onChange={handleIchijiChange}
                id="ichiji"
                defaultValue={ichiji}
              />
            </td>
          </tr>
          <tr>
            <td>災害避難所</td>
            <td>
              <TextField
                onChange={handleSaigaiChange}
                id="saigai"
                defaultValue={saigai}
              />
            </td>
          </tr>
          <tr>
            <td>津波避難所</td>
            <td>
              <TextField
                onChange={handleTsunamiChange}
                id="tsunami"
                defaultValue={tsunami}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <Button onClick={setValues} variant="contained" color="primary">
        保存
      </Button>
    </div>
  );
};

export default Form;
