let response;
const hummus = require('hummus');

exports.lambdaHandler = async (event, context) => {
  try {
    const pdfWriter = hummus.createWriterToModify("1015_Bousai_A4.pdf", {
      modifiedFilePath: "/tmp/output.pdf"
    });
    const font = pdfWriter.getFontForFile('GenShinGothic-P-Normal.ttf');

    // テストデータ
    const params = {
      form: {
        family: [
          { name: "伊藤博文", phone: "000-0000-0000", insurance: "00000000", illness: "テストデータ" },
          { name: "伊藤博文", phone: "000-0000-0000", insurance: "00000000", illness: "テストデータ" },
          { name: "伊藤博文", phone: "000-0000-0000", insurance: "00000000", illness: "テストデータ" },
          { name: "伊藤博文", phone: "000-0000-0000", insurance: "00000000", illness: "テストデータ" },
          { name: "伊藤博文", phone: "000-0000-0000", insurance: "00000000", illness: "テストデータ" },
        ],
        relatives: [
          { name: "伊藤博文", phone: "000-0000-0000" },
          { name: "伊藤博文", phone: "000-0000-0000" },
          { name: "伊藤博文", phone: "000-0000-0000" },
          { name: "伊藤博文", phone: "000-0000-0000" },
          { name: "伊藤博文", phone: "000-0000-0000" },
        ],
        facilities: [
          { name: "国会議事堂", phone: "000-0000-0000" },
          { name: "国会議事堂", phone: "000-0000-0000" },
          { name: "国会議事堂", phone: "000-0000-0000" },
          { name: "国会議事堂", phone: "000-0000-0000" },
          { name: "国会議事堂", phone: "000-0000-0000" },
        ],
        home: "000-0000-0000",
        temporary: "下関市テスト会館テスト号室",
        disaster: "下関市テスト会館テスト号室",
        tsunami: "下関市テスト会館テスト号室",
      },
      card: {
        flood: { evacuation: "テストテスト", shelter: "テストテストテスト" },
        sediment: { evacuation: "テストテスト", shelter: "テストテストテスト" },
        earthquake: { evacuation: "テストテスト", shelter: "テストテストテスト" },
        fire: { evacuation: "テストテスト", shelter: "テストテストテスト" },
      },
      goods: {
      },
      foods: {
      },
      checkList: {
        earthquake: "テストテストテストテスト",
        flood: "テストテストテストテスト",
        place: "テストテストテストテスト",
      },
    }

    // 1ページ目:緊急時のわがやの情報
    let pageModifier = new hummus.PDFPageModifier(pdfWriter,0);
    const options = {
      font:font,
      size:10,
      colorspace:'gray',
      color:0x00
    };
    const phoneOptions = {
      font:font,
      size:8,
      colorspace:'gray',
      color:0x00
    };
    let context = pageModifier.startContext().getContext()

    params.form.family.slice(0,5).forEach((el,i) => { // 5人までしか書き込めない
      context.writeText(
        el.name, 59,466-i*17, options);
      context.writeText(
        el.phone,
        130,466-i*17,
        phoneOptions
      );
      context.writeText(
        el.insurance,
        210,466-i*17,
        options
      );
      context.writeText(
        el.illness,
        270,466-i*17,
        options
      );
    });

    params.form.relatives.slice(0,5).forEach((el,i) => { // 5人までしか書き込めない
      context.writeText(el.name,59,335-i*17, options);
      context.writeText(el.phone,128,335-i*17,phoneOptions);
    });

    params.form.facilities.slice(0,5).forEach((el,i) => { // 5つまでしか書き込めない
      context.writeText(el.name,210,335-i*17, options);
      context.writeText(el.phone,276,335-i*17,phoneOptions);
    });

    context.writeText(params.form.home,276,231,phoneOptions);
    context.writeText(params.form.temporary,128,180,options);
    context.writeText(params.form.disaster,128,163,options);
    context.writeText(params.form.tsunami,128,146,options);

    pageModifier.endContext().writePage();

    // 4ページ目:わがやの災害避難カードを作ろう!
    pageModifier = new hummus.PDFPageModifier(pdfWriter,3);
    cardOptions = {
      font:font,
      size:6,
      colorspace:'gray',
      color:0x00
    }
    context = pageModifier.startContext().getContext()
    const disasters = ["flood", "sediment", "earthquake", "fire"];
    disasters.forEach((name,i) => {
      context.writeText(params.card[name].evacuation,645,143-i*11,cardOptions);
      context.writeText(params.card[name].shelter,702,143-i*11,cardOptions);
    });

    pageModifier.endContext().writePage();

    // 11ページ目:チェックリスト
    pageModifier = new hummus.PDFPageModifier(pdfWriter,7);
    const checkListOptions = {
      font:font,
      size:8,
      colorspace:'gray',
      color:0x00
    }
    context = pageModifier.startContext().getContext()
    context.writeText(params.checkList.earthquake,570,302,checkListOptions);
    context.writeText(params.checkList.flood,570,285,checkListOptions);
    context.writeText(params.checkList.place,520,250,checkListOptions);

    pageModifier.endContext().writePage();

    pdfWriter.end();

    response = {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'hello world',
      })
    }
  } catch(err) {
    console.log(err);
    return err;
  }

  return response;
};
