const AWS = require('aws-sdk');
const s3 = new AWS.S3({apiVersion: '2006-03-01'});
const fs = require('fs');
const hummus = require('hummus');
const BUCKET_NAME = 'sanda-bousai-note-pdf-generator-temporary-bucket';
const FONT_TTF_PATH = 'GenShinGothic-P-Normal.ttf';
const FILE_INPUT_PATH = '211029.pdf';
const FILE_OUTPUT_PATH = '/tmp/output.pdf';

exports.lambdaHandler = async (event, context) => {
  try {
    const body = event.body ? JSON.parse(event.body) : {};

    await generatePDF(body);

    const fileStream = fs.createReadStream(FILE_OUTPUT_PATH);
    const key = Math.random().toString(32).substring(2) + ".pdf";
    const uploadParams = {
      Bucket: BUCKET_NAME,
      Key: key,
      Body: fileStream,
    };

    await (() => new Promise((resolve, reject) => {
      s3.upload(uploadParams, (err, data) => {
        if(err) reject(err);
        else resolve(data);
      });
    }))();

    const getUrlParams = {
      Bucket: BUCKET_NAME,
      Key: key,
      Expires: 60,
    };

    const url = await s3.getSignedUrl('getObject', getUrlParams);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: url,
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: 'Error occured',
    };
  }
};

async function generatePDF(params) {
  const pdfWriter = hummus.createWriterToModify(FILE_INPUT_PATH, {
    modifiedFilePath: FILE_OUTPUT_PATH
  });
  const font = pdfWriter.getFontForFile(FONT_TTF_PATH);

  // 裏表紙:緊急時のわがやの情報
  if(typeof params.form === 'object') {
    const form = params.form;
    const pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
    const option = {
      font:font,
      size:10,
      colorspace:'gray',
      color:0x00
    };
    const phoneOption = {
      font:font,
      size:8,
      colorspace:'gray',
      color:0x00
    };
    const context = pageModifier.startContext().getContext();

    // 5人までしか書き込めない
    if(Array.isArray(form.family)) {
      const family = form.family.slice(0,5);
      const keys = [
        {'k': 'name', 'x': 59, 'opt': option},
        {'k': 'phoneNumber', 'x': 130, 'opt': phoneOption},
        {'k': 'insuranceId', 'x': 207, 'opt': option},
        {'k': 'illness', 'x': 270, 'opt': option},
      ];
      for(let i=0; i<family.length; i++) {
        for(let j=0; j<keys.length; j++) {
          if(family[i][keys[j].k])
            context.writeText(family[i][keys[j].k],keys[j].x,480-i*17,keys[j].opt);
        }
      }
    }

    const categories = ['relatives', 'acquaintance'];
    for(let i=0; i<categories.length; i++) {
      if(typeof form[categories[i]] === 'object') {
        if(form[categories[i]].name)
          context.writeText(form[categories[i]].name,95,350-i*51,option);
        if(form[categories[i]].phoneNumber)
          context.writeText(form[categories[i]].phoneNumber,
            95,334-i*51,phoneOption);
      }
    }

    const shelters = ['shelter', 'specified'];
    for(let i=0; i<shelters.length; i++) {
      if(form[shelters[i]])
        context.writeText(form[shelters[i]],187,347-i*40,option);
    }
    pageModifier.endContext().writePage();
  }

  // 10ページ目:普段から意識してみよう
  if(typeof params.consciousness === 'object') {
    const consciousness = params.consciousness;
    const pageModifier = new hummus.PDFPageModifier(pdfWriter,5);
    const option = {
      font:font,
      size:14,
      colorspace:'rgb',
      color:0xdd1111
    };
    const context = pageModifier.startContext().getContext();
    const keys = [
      {'k': 'socializing', 'x': 464, 'y': 87},
      {'k': 'preparation', 'x': 593, 'y': 100},
      {'k': 'walking', 'x': 593, 'y': 66},
      {'k': 'camp', 'x': 647, 'y': 66},
      {'k': 'plasticBagCooking', 'x': 708, 'y': 66},
    ];
    for(let i=0; i<keys.length; i++) {
      if(consciousness[keys[i].k]) context.writeText('✓',keys[i].x,keys[i].y,option);
    }
    pageModifier.endContext().writePage();
  }

  // 11,12ページ目:防災グッズを備えよう
  if(typeof params.goods === 'object') {
    const goods = params.goods;
    const pageModifier = new hummus.PDFPageModifier(pdfWriter,6);
    const option = {
      font:font,
      size:14,
      colorspace:'rgb',
      color:0xdd1111
    };
    const context = pageModifier.startContext().getContext();
    if(typeof goods.zeroth === 'object') {
      const zeroth = goods.zeroth;
      // 一部内容の修正、Webアプリでばらばらにチェックボックスがあるもので
      // PDF版では1つにチェックボックスがまとめられているものはまとめる
      if(zeroth.mirror && zeroth.lipstick && zeroth.hairband)
        zeroth.mirror_and_others = true;
      const keys = [
        {'k': 'coin', 'x': 153, 'y': 409},
        {'k': 'mobile_battery', 'x': 192, 'y': 409},
        {'k': 'mirror_and_others', 'x': 273, 'y': 409},
        {'k': 'portable_toilets', 'x': 344, 'y': 409},
        {'k': 'address', 'x': 55, 'y': 364},
        {'k': 'sanitary_napkin', 'x': 133, 'y': 364},
        {'k': 'disinfectant_wetwipes', 'x': 204, 'y': 364},
        {'k': 'handkerchief', 'x': 273, 'y': 364},
        {'k': 'candy', 'x': 344, 'y': 364},
        {'k': 'bandage', 'x': 55,  'y': 315},
        {'k': 'mask', 'x': 110, 'y': 315},
        {'k': 'blanket', 'x': 154, 'y': 315},
        {'k': 'medicine_0', 'x': 55,  'y': 265},
        {'k': 'poli', 'x': 88,  'y': 265},
        {'k': 'light_0', 'x': 149, 'y': 265},
        {'k': 'drink_S', 'x': 182, 'y': 265},
        // 以下はmoreの分だがzeroの要素を参照するため、ここに記載
        {'k': 'mask', 'x': 272, 'y': 84},
        {'k': 'disinfectant_wetwipes', 'x': 272, 'y': 75},
        {'k': 'thermometer', 'x': 272, 'y': 66},
      ];
      for(let i=0; i<keys.length; i++) {
        if(zeroth[keys[i].k]) context.writeText('✓',keys[i].x,keys[i].y,option);
      }
    }
    if(typeof goods.first === 'object') {
      const first = goods.first;
      const keys = [
        {'k': 'drink_M', 'x': 55, 'y': 178},
        {'k': 'diaper', 'x': 144, 'y': 178},
        {'k': 'baby_foods', 'x': 217, 'y': 178},
        {'k': 'tableware', 'x': 276, 'y': 178},
        {'k': 'tissues', 'x': 339, 'y': 178},

        {'k': 'dentifrice', 'x': 55, 'y': 128},
        {'k': 'light_1', 'x': 110, 'y': 128},
        {'k': 'bosi_book', 'x': 151, 'y': 128},
        {'k': 'real_money', 'x': 206, 'y': 128},
        {'k': 'clothes_shoes', 'x': 244, 'y': 128},
        {'k': 'medicine_1', 'x': 297, 'y': 128},
        {'k': 'others', 'x': 339, 'y': 128},
      ];
      for(let i=0; i<keys.length; i++) {
        if(first[keys[i].k]) context.writeText('✓',keys[i].x,keys[i].y,option);
      }
    }
    if(typeof goods.more === 'object') {
      const more = goods.more;
      const keys = [
        {'k': 'for_children','x': 70,  'y': 84},
        {'k': 'newspaper', 'x': 190, 'y': 84},
      ];
      for(let i=0; i<keys.length; i++) {
        if(more[keys[i].k]) context.writeText('✓',keys[i].x,keys[i].y,option);
      }
    }
    if(typeof goods.second === 'object') {
      const second = goods.second;
      const keys = [
        {'k': 'drink_L', 'x': 446, 'y': 459},
        {'k': 'foods', 'x': 522, 'y': 459},
        {'k': 'toiletry', 'x': 562, 'y': 459},
        {'k': 'light_2', 'x': 621, 'y': 459},
        {'k': 'mobile_battery_2', 'x': 678, 'y': 459},
        {'k': 'power_supply', 'x': 725, 'y': 459},

        {'k': 'first_aid', 'x': 446, 'y': 403},
        {'k': 'sanitary_2', 'x': 498, 'y': 403},
        {'k': 'radio', 'x': 567, 'y': 403},
        {'k': 'battery', 'x': 626, 'y': 403},
        {'k': 'burner', 'x': 710, 'y': 428},

        {'k': 'broom', 'x': 482, 'y': 382},
        {'k': 'bath', 'x': 592, 'y': 382},
        {'k': 'other_2', 'x': 710, 'y': 382},
      ];
      for(let i=0; i<keys.length; i++) {
        if(second[keys[i].k]) context.writeText('✓',keys[i].x,keys[i].y,option);
      }
    }
    if(typeof goods.hyakkin === 'object') {
      const hyakkin = goods.hyakkin;
      const keys = [
        {'k': 'water_tank', 'x': 452, 'y': 192},
        {'k': 'blanket_100', 'x': 492, 'y': 192},
        {'k': 'cairo', 'x': 554, 'y': 192},
        {'k': 'raincoat', 'x': 589, 'y': 192},
        {'k': 'wp_cover', 'x': 640, 'y': 192},
        {'k': 'portable_toilets_100', 'x': 685, 'y': 192},
        {'k': 'battery_light', 'x': 731, 'y': 192},

        {'k': 'poli_100', 'x': 452, 'y': 136},
        {'k': 'rap', 'x': 498, 'y': 136},
        {'k': 'cold_sheets', 'x': 539, 'y': 136},
        {'k': 'bandage_100', 'x': 589, 'y': 136},
        {'k': 'dis_pants', 'x': 638, 'y': 136},
        {'k': 'body_sheet', 'x': 688, 'y': 136},
        {'k': 'sewing', 'x': 727, 'y': 136},

        {'k': 'pen', 'x': 452, 'y': 86},
        {'k': 'tape', 'x': 492, 'y': 86},
        {'k': 'toothbrush_set', 'x': 543, 'y': 86},
        {'k': 'wet_sheet', 'x': 583, 'y': 86},
        {'k': 'glasses', 'x': 637, 'y': 86},
        {'k': 'headlight', 'x': 680, 'y': 86},
        {'k': 'glove', 'x': 732, 'y': 86},
      ];
      for(let i=0; i<keys.length; i++) {
        if(hyakkin[keys[i].k]) context.writeText('✓',keys[i].x,keys[i].y,option);
      }
    }
    pageModifier.endContext().writePage();
  }

  // 13,14ページ目:食べ物がない?!
  if(typeof params.foods === 'object') {
    const foods = params.foods;
    const pageModifier = new hummus.PDFPageModifier(pdfWriter,7);
    const option = {
      font:font,
      size:14,
      colorspace:'rgb',
      color:0xdd1111
    };
    const context = pageModifier.startContext().getContext();
    if(typeof foods.foodList === 'object') {
      const foodList = foods.foodList;
      const keys = [
        {'k': 'drink_water', 'x': 69, 'y':  315},
        {'k': 'kanzume', 'x': 148, 'y': 315},
        {'k': 'soup', 'x': 228, 'y': 315},
        {'k': 'dry', 'x': 322, 'y': 315},
        {'k': 'tsukemono', 'x': 69, 'y':  266},
        {'k': 'saien', 'x': 148, 'y': 266},
        {'k': 'food_reitou_syokuhin', 'x': 228, 'y': 266},
        {'k': 'men', 'x': 298, 'y': 266},
        {'k': 'baby_food', 'x': 228, 'y': 239},
      ];
      for(let i=0; i<keys.length; i++) {
        if(foodList[keys[i].k]) context.writeText('✓',keys[i].x,keys[i].y,option);
      }
    }
    if(typeof foods.cookingList === 'object') {
      const cookingList = foods.cookingList;
      const keys = [
        {'k': 'conlo', 'x': 452, 'y': 154},
        {'k': 'gas', 'x': 535, 'y': 154},
        {'k': 'poli_bukuro', 'x': 607, 'y': 154},
        {'k': 'hasami_slicer', 'x': 656, 'y': 154},

        {'k': 'wrap', 'x': 453, 'y': 87},
        {'k': 'almi', 'x': 520, 'y': 87},
        {'k': 'suitou', 'x': 589, 'y': 87},
        {'k': 'wet', 'x': 652, 'y': 87},
        {'k': 'tableware', 'x': 652, 'y': 78},
      ];
      for(let i=0; i<keys.length; i++) {
        if(cookingList[keys[i].k]) context.writeText('✓',keys[i].x,keys[i].y,option);
      }
    }
    pageModifier.endContext().writePage();
  }

  // 17ページ目:わがやの災害避難カードを作ろう!
  if(typeof params.card === 'object') {
    const card = params.card;
    const pageModifier = new hummus.PDFPageModifier(pdfWriter,9);
    const option = {
      font:font,
      size:8,
      colorspace:'gray',
      color:0x00
    };
    const checkOption = {
      font:font,
      size:14,
      colorspace:'rgb',
      color:0xdd1111
    };
    const context = pageModifier.startContext().getContext();
    if(typeof card.shelters === 'object') {
      const shelters = card.shelters;
      const keys = ['suigai', 'dosya', 'jishin', 'kasai'];
      for(let i=0; i<keys.length; i++) {
        for(let j=0; j<2; j++) {
          const text = shelters[keys[i] + (j+1).toString()];
          if(text) context.writeText(text,218+j*86,333-i*13,option);
        }
      }
    }
    if(card.place) {
      context.writeText('✓',93,275,checkOption);
      context.writeText(card.place,121,259,option);
    }
    if(typeof card.home === 'object') {
      const home = card.home;
      const keys = [
        {'k': 'fixFurniture', 'x': 121, 'y': 227},
        {'k': 'glass', 'x': 184, 'y': 227},
        {'k': 'storage', 'x': 262, 'y': 227},
        {'k': 'arrangeFurniture', 'x': 302, 'y': 227},
      ];
      for(let i=0; i<keys.length; i++) {
        if(home[keys[i].k]) context.writeText('✓',keys[i].x,keys[i].y,checkOption);
      }
      if(home.fixFurniture && home.glass &&
        home.storage && home.arrangeFurniture) {
          context.writeText('✓',93,241,checkOption);
      }
    }

    if(typeof card.stock === 'object') {
      const stock = card.stock;
      const keys = [
        {'k': 'meal', 'x': 120, 'y': 197},
        {'k': 'water', 'x': 182, 'y': 197},
        {'k': 'stove', 'x': 292, 'y': 197},
        {'k': 'gas', 'x': 120, 'y': 187},
        {'k': 'toilet', 'x': 182, 'y': 187},
      ];
      for(let i=0; i<keys.length; i++) {
        if(stock[keys[i].k]) context.writeText('✓',keys[i].x,keys[i].y,checkOption);
      }
      if(stock.meal && stock.water && stock.stove && stock.gas &&
        stock.toilet) {
          context.writeText('✓',93,210,checkOption);
      }
    }
    pageModifier.endContext().writePage();
  }
  // pdfWrite.end()の処理に時間がかかる。ローカルのAWS SAMだと20秒かかる。通常のNodeだと1秒以内に終わるのでなんらかのチューニングをおこなえば改善するか。 <- 本番環境だと3秒くらいで終わるので緊急性は低い
  pdfWriter.end();
}
