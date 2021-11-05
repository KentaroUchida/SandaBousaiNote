import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Grid,
  CardContent,
} from "@mui/material";
import {
  CardBase,
  HeaderCardPart,
} from "../components/CardComponents";
import { SimpleTitle } from "../components/TitleComponents";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { FormRegisterDialog, FormEditDialog } from "../components";

export const SandaP20Form = () => {
  const [familyList, setFamilyList] = useState(
    JSON.parse(localStorage.getItem("familyList")) || []
  );
  const [relativeList, setRelativeList] = useState(
    JSON.parse(localStorage.getItem("relativeList")) || []
  );
  const [acquaintanceList, setAcquaintanceList] = useState(
    JSON.parse(localStorage.getItem("acquaintanceList")) || []
  );
  const [hinanbasyo, setHinanbasyo] = useState(
    localStorage.getItem("P20Hinanbasyo") || ""
  );
  const [shishitei, setShishitei] = useState(
    localStorage.getItem("P20Shishitei") || ""
  );

  const switchCategory = (category, func) => {
    switch (category) {
      case "family":
        setFamilyList(func);
        break;
      case "relative":
        setRelativeList(func);
        break;
      case "acquaintance":
        setAcquaintanceList(func);
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
  const handleHinanbasyoChange = (event) => {
    setHinanbasyo(event.target.value);
    localStorage.setItem("P20Hinanbasyo", event.target.value);
  };
  const handleShishiteiChange = (event) => {
    setShishitei(event.target.value);
    localStorage.setItem("P20Shishitei", event.target.value);
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
        expandIcon={<ExpandMoreIcon fontSize="large" />}
        aria-label="Expand"
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justifyContent="space-between" alignItems="center">
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
        <Typography>電話番号:{phoneNumber}</Typography>
        <Typography>保険証番号:{insuranceId}</Typography>
        <Typography>病気・アレルギー:{illness}</Typography>
      </AccordionDetails>
    </Accordion>
  );

  const PrintRelativeInformation = ({ name, phoneNumber, index }) => (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon fontSize="large" />}
        aria-label="Expand"
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justifyContent="space-between" alignItems="center">
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
        <Typography>電話番号:{phoneNumber}</Typography>
      </AccordionDetails>
    </Accordion>
  );

  const PrintAcquaintanceInformation = ({ name, phoneNumber, index }) => (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon fontSize="large" />}
        aria-label="Expand"
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography>名前:{name}</Typography>
          </Grid>
          <Grid item>
            <FormEditDialog
              category="acquaintance"
              edit={editAddress(index)}
              remove={removeAddress(index)}
              defaultMember={acquaintanceList[index]}
            />
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>電話番号:{phoneNumber}</Typography>
      </AccordionDetails>
    </Accordion>
  );

  const Caution = () => {
    return(
      <CardBase>
        <CardContent>
          <Typography>・以下の情報は外部に送信等されませんので、安心してお使いください。</Typography>
          <Typography>・家族、親戚、知人の連絡先は、追加ボタンを押すと入力ができます。</Typography>
          <Typography>・避難場所の情報は、入力をすると自動的に保存されます。</Typography>
        </CardContent>
      </CardBase>
    )
  }

  const Contact = () => {
    return(
      <>
        <CardBase>
          <HeaderCardPart title="家族の連絡先"  color="tertiary.main" />
          <CardContent>
            <div style={{textAlign:"center"}}>
              <FormRegisterDialog category="family" submit={addAddress} />
              <br/>
            </div>
            {familyList.map((v, index) => (
              <PrintFamilyInformation
                name={v.name}
                phoneNumber={v.phoneNumber}
                insuranceId={v.insuranceId}
                illness={v.illness}
                index={index}
                key={index}
              />
            ))}

          </CardContent>
        </CardBase>

        <CardBase>
          <HeaderCardPart title="親戚の連絡先"  color="tertiary.main" />
          <CardContent>
            <div style={{textAlign:"center"}}>
              <FormRegisterDialog category="relative" submit={addAddress} />
              <br/>
            </div>
            {relativeList.map((v, index) => (
              <PrintRelativeInformation
                name={v.name}
                phoneNumber={v.phoneNumber}
                index={index}
                key={index}
              />
            ))}
          </CardContent>
        </CardBase>

        <CardBase>
          <HeaderCardPart title="知人の連絡先"  color="tertiary.main" />
          <CardContent>
            <div style={{textAlign:"center"}}>
              <FormRegisterDialog category="acquaintance" submit={addAddress} />
              <br/>
            </div>
            {acquaintanceList.map((v, index) => (
              <PrintAcquaintanceInformation
                name={v.name}
                phoneNumber={v.phoneNumber}
                index={index}
                key={index}
              />
            ))}
          </CardContent>
        </CardBase>
      </>
    )
  }

  const Dial = () => {
    return(
      <>
        <CardBase>
          <HeaderCardPart title="災害伝言ダイヤル"  color="tertiary.main" />
          <CardContent>
            <CardBase>
              <CardContent>
                <h3 style={{textAlign:"center"}}>NTT災害ダイアル:171</h3>
                <Typography>毎月1日と15日は無料で試せます！</Typography>
                <Typography>家族で練習しておきましょう！</Typography>
              </CardContent>
            </CardBase>
            <CardBase>
              <HeaderCardPart title="録音するとき" color='#FFF8AD' />
              <CardContent>
                  <Typography>①「1」をダイヤル。</Typography>
                  <Typography>②自分の番号をダイヤル。</Typography>
                  <Typography>③メッセージを録音。</Typography>
              </CardContent>
            </CardBase>
            <CardBase>
              <HeaderCardPart title="再生するとき" color='#FFF8AD' />
              <CardContent>
                  <Typography>①「2」をダイヤル。</Typography>
                  <Typography>②相手の番号をダイヤル。</Typography>
                  <Typography>③メッセージを聞く。</Typography>
              </CardContent>
            </CardBase>
            <CardBase>
              <HeaderCardPart title="公衆電話" color="tertiary.main" />
              <CardContent>
                <Typography>災害時でもつながりやすい公衆電話がどこにあるのかを調べて、子どもと実際にかけてみましょう。</Typography>
                <br/>
                <div style={{textAlign:"center"}}>
                  <img src="/img/pages/SandaP20Form/phone.png"  alt="公衆電話の画像" width='100px' height='auto'/>
                </div>
              </CardContent>
            </CardBase>
            <Typography>災害時には、携帯は繋がりにくい場合があります。</Typography>
            <Typography>災害用伝言ダイヤルやデータ通信によるLINEやTwitter、Facebookなどの複数のSNSの連絡手段も覚えておきましょう。</Typography>
          </CardContent>
        </CardBase>
      </>
    )
  }
  const Wifi = () => {
    return(
      <>
        <CardBase>
          <HeaderCardPart title="フリーWiFi" color="tertiary.main" />
          <CardContent>
            <Typography style={{textAlign:"center"}}>災害時に誰でも使えるWiFi「00000JAPAN」</Typography>
            <div style={{textAlign:"center"}}>
              <img src="/img/pages/SandaP20Form/wifi.png" alt="wifiの画像" width="100px" height='auto' />
            </div>
          </CardContent>
        </CardBase>
      </>
    )
  }
  return (
    <>
      <SimpleTitle title="緊急時の我が家の情報"/>
      <Caution />
      <Contact />
      {/* <Shelter /> */}
      <CardBase>
        <HeaderCardPart title="集合場所・避難場所を決めておく"  color="tertiary.main" />
        <CardContent>
          <table>
            <tbody>
              <tr>
                <td>避難場所</td>
                <td>
                  <TextField
                    onChange={handleHinanbasyoChange}
                    id="P0Hinanbasyo"
                    defaultValue={hinanbasyo}
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td>市指定避難場所</td>
                <td>
                  <TextField
                    onChange={handleShishiteiChange}
                    id="shishitei"
                    defaultValue={shishitei}
                    variant="standard"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Typography>避難場所:危険を回避するための待機場所</Typography>
          <Typography>市指定避難所:避難生活を送る場所</Typography>
        </CardContent>
      </CardBase>
      <Dial />
      <Wifi />
    </>
  );
};