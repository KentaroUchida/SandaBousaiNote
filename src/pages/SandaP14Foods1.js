import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  FormGroup,
  ImageList,
  Typography,
} from "@mui/material";
import {
  CardBase,
  HeaderCardPart,
  TitleCardPart,
  ImageCardPart,
} from "../components/CardComponents";
import { SimpleTitle2, BodyText } from "../components/TitleComponents";

const preparationList = {
  foodList: [
    {
      name: "飲料水",
      comment: "1日3ℓ×家族の人数×7日分。",
      path: "drink_water",
    },
    {
      name: "缶詰・レトルト",
      comment: null,
      path: "kanzume",
    },
    {
      name: "スープ(フリーズドライ)",
      comment: null,
      path: "soup",
    },
    {
      name: "乾物",
      comment: null,
      path: "dry",
    },
    {
      name: "漬物",
      comment: "伝統的な保存方法で。",
      path: "tsukemono",
    },
    {
      name: "家庭菜園",
      comment: "庭やベランダ等も活用して菜園を。",
      path: "saien",
    },
    {
      name: "冷凍食品",
      comment: "自然解凍できるものが便利。",
      path: "food_reitou_syokuhin",
    },
    {
      name: "乾麺・即席麺・カップ麺",
      comment: null,
      path: "men",
    },
    {
      name: "離乳食・液体ミルク・おやつ",
      comment:
        "乳幼児を持つご家庭は、離乳食・液体ミルクや食べられるおやつを多い目に備蓄しましょう。",
      path: "baby_food",
    },
  ],
  cookingList: [
    {
      name: "カセットコンロ",
      comment:
        "カセットコンロがあればライフラインがストップした時にでも調理できます。",
      path: "conlo",
    },
    {
      name: "カセットボンベ",
      comment:
        "カセットボンベ1本で約60分使用可能。1日2本×7日分=14本(※家族4人分の目安です)。",
      path: "gas",
    },
    {
      name: "ポリ袋",
      comment: "耐熱性のポリ袋をお使いください。",
      path: "poli_bukuro",
    },
    {
      name: "キッチンばさみ・スライサー",
      comment: "まな板を使わずに調理できて衛生面でも安心。",
      path: "hasami_slicer",
    },
    {
      name: "ラップフィルム",
      comment: "食器や紙食器にかぶせると水が節約できる。",
      path: "wrap",
    },
    {
      name: "アルミホイル",
      comment: "フライパンに敷いて調理すると水の節約になる。",
      path: "almi",
    },
    {
      name: "水筒(魔法瓶)",
      comment: "乾麺をゆでたり、もどすなどお湯の再利用も可能。",
      path: "suitou",
    },
    {
      name: "ウエットティッシュ・お皿・コップ・割りばし(使い捨て)",
      comment: null,
      path: "wet",
    },
    {
      name: "お皿・コップ・割りばし(使い捨て)",
      comment: null,
      path: "tableware",
    },
  ],
};

const img_path = "/img/pages/SandaP14P15Foods";
const generateImagePath = (filename) => img_path + "/" + filename + ".png";

const loadPreparationList = (listName) => {
  const storedPreparationListString = localStorage.getItem(listName);
  let storedPreparationList = null;
  if (storedPreparationListString !== null) {
    storedPreparationList = JSON.parse(storedPreparationListString);
  }

  return preparationList[listName].reduce((obj, el) => {
    let checked = false;
    if (
      storedPreparationList !== null &&
      Object.keys(storedPreparationList).includes(el.path)
    ) {
      checked = storedPreparationList[el.path] ? true : false;
    }

    return {
      ...obj,
      [el.path]: {
        name: el.name,
        comment: el.comment,
        checked: checked,
      },
    };
  }, {});
};

const SandaP14Foods1 = () => {
  const [foodList, setFoodList] = useState(loadPreparationList("foodList"));
  const [cookingList, setCookingList] = useState(
    loadPreparationList("cookingList")
  );

  const handleFoodListChange = (event) => {
    let nextFoodList = foodList;
    nextFoodList[event.target.name].checked = event.target.checked;
    setFoodList({ ...nextFoodList });

    localStorage.setItem(
      "foodList",
      JSON.stringify(
        Object.keys(nextFoodList).reduce(
          (obj, key) => ({ ...obj, [key]: nextFoodList[key].checked }),
          {}
        )
      )
    );
  };

  const handleCookingListChange = (event) => {
    const nextCookingList = cookingList;
    nextCookingList[event.target.name].checked = event.target.checked;
    setCookingList({ ...nextCookingList });

    localStorage.setItem(
      "cookingList",
      JSON.stringify(
        Object.keys(nextCookingList).reduce(
          (obj, key) => ({ ...obj, [key]: nextCookingList[key].checked }),
          {}
        )
      )
    );
  };

  const Preparation = ({ title, items, handleChange, comment }) => (
    <CardBase>
      <HeaderCardPart title={title} />
      <CardContent>
        {comment !== null ? <BodyText>{comment}</BodyText> : ""}
        <FormGroup row>
          <ImageList cols={2} rowHeight="auto" sx={{ width: "100%" }}>
            {Object.keys(items).map((key) => {
              const item = items[key];
              const [name, comment, checked] = [
                item.name,
                item.comment,
                item.checked,
              ];
              return (
                <Card key={key}>
                  <CardActionArea
                    onClick={(event) => {
                      event.target.name = key;
                      event.target.checked = !checked;
                      handleChange(event);
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked}
                          name={key}
                          onChange={handleChange}
                        />
                      }
                      label={name}
                      onClick={(event) => {
                        event.stopPropagation(); // CardActionAreaのonClickを無効化
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt={name}
                        image={generateImagePath(key)}
                        title={name}
                        sx={{
                          maxHeight: { xs: 100, sm: 250 },
                          height: "auto",
                          maxWidth: "90%",
                          width: "auto",
                        }}
                      />
                    </Box>
                    {comment !== null ? (
                      <Typography variant="caption">{comment}</Typography>
                    ) : (
                      ""
                    )}
                  </CardActionArea>
                </Card>
              );
            })}
          </ImageList>
        </FormGroup>
      </CardContent>
    </CardBase>
  );

  return (
    <>
      <SimpleTitle2
        title="食べ物がない?! その1"
        subtitle="避難所に行っても 全員分の"
      />
      <BodyText>
        巨大地震など発生直後は、ライフラインも壊滅状態となり、水や食料の不足が予想されます。
        <br />
        さらにアレルギー対応食や幼児用の食事は手に入りません！
      </BodyText>
      <Preparation
        title="備えておきたい 非常食"
        items={foodList}
        handleChange={handleFoodListChange}
        comment={null}
      />
      <CardBase>
        <CardContent>
          <TitleCardPart title="ポリ袋クッキング(パッククッキング)" />
          <ImageCardPart image={generateImagePath("poli_cooking")} />
          <BodyText>
            普段でも使える調理法です！
            <br />
            <br />
            高密度ポリエチレンに食材を入れ、袋のまま鍋で湯せんする調理方法です。
            <br />
            少ない水で温かい食べ物が作れます。
          </BodyText>
          <ImageCardPart image={generateImagePath("poli_cooking_2")} />
          <br />
          <ImageCardPart image={generateImagePath("poli_cooking_1")} />
        </CardContent>
      </CardBase>
      <Preparation
        title="備えておきたい 調理器具"
        items={cookingList}
        handleChange={handleCookingListChange}
        comment="衛星調理を心掛け汚れたものはウエットティッシュで拭いたり、使い捨てのものや袋を使うなど工夫しましょう。"
      />
    </>
  );
};

export { SandaP14Foods1 };
