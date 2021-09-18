const fs = require('fs');
const hummus = require('hummus');

async function generatePDF(params) {
  const pdfWriter = hummus.createWriterToModify('1015_Bousai_A4.pdf', {
    modifiedFilePath: '/tmp/output.pdf'
  });
  const font = pdfWriter.getFontForFile('GenShinGothic-P-Normal.ttf');

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
    if(el.name) context.writeText(el.name,59,466-i*17,options);
    if(el.phone) context.writeText(el.phone,130,466-i*17,phoneOptions);
    if(el.insurance) context.writeText(el.insurance,210,466-i*17,options);
    if(el.illness) context.writeText(el.illness,270,466-i*17,options);
  });

  params.form.relatives.slice(0,5).forEach((el,i) => { // 5人までしか書き込めない
    if(el.name) context.writeText(el.name,59,335-i*17, options);
    if(el.phone) context.writeText(el.phone,128,335-i*17,phoneOptions);
  });

  params.form.facilities.slice(0,5).forEach((el,i) => { // 5つまでしか書き込めない
    if(el.name) context.writeText(el.name,210,335-i*17, options);
    if(el.phone) context.writeText(el.phone,276,335-i*17,phoneOptions);
  });

  context.writeText(params.form.home,276,231,phoneOptions);
  context.writeText(params.form.temporary,128,180,options);
  context.writeText(params.form.disaster,128,163,options);
  context.writeText(params.form.tsunami,128,146,options);

  pageModifier.endContext().writePage();

  // 4ページ目:わがやの災害避難カードを作ろう!
  pageModifier = new hummus.PDFPageModifier(pdfWriter,3);
  const cardOptions = {
    font:font,
    size:6,
    colorspace:'gray',
    color:0x00
  }
  context = pageModifier.startContext().getContext()
  const disasters = ['flood', 'sediment', 'earthquake', 'fire'];
  disasters.forEach((name,i) => {
    if(params.card[name].evacuation) context.writeText(params.card[name].evacuation,645,143-i*11,cardOptions);
    if(params.card[name].shelter) context.writeText(params.card[name].shelter,702,143-i*11,cardOptions);
  });

  pageModifier.endContext().writePage();

  // 5,6ページ目:防災グッズ,食べ物がない
  pageModifier = new hummus.PDFPageModifier(pdfWriter,4);
  const checkOptions = {
    font:font,
    size:14,
    colorspace:'rgb',
    color:0xdd1111
  }
  context = pageModifier.startContext().getContext()
  if(params.goods.water) context.writeText('✓',50,373,checkOptions);
  if(params.goods.coin) context.writeText('✓',119,373,checkOptions);
  if(params.goods.chocolate_and_candy) context.writeText('✓',180,373,checkOptions);
  if(params.goods.battery) context.writeText('✓',268,373,checkOptions);
  if(params.goods.handkerchief) context.writeText('✓',348,373,checkOptions);

  if(params.goods.whistle) context.writeText('✓',50,310,checkOptions);
  if(params.goods.aid) context.writeText('✓',98,310,checkOptions);
  if(params.goods.diapers) context.writeText('✓',164,310,checkOptions);
  if(params.goods.address) context.writeText('✓',231,310,checkOptions);
  if(params.goods.poli) context.writeText('✓',297,310,checkOptions);
  if(params.goods.pin) context.writeText('✓',363,310,checkOptions);

  if(params.goods.picnic_sheet) context.writeText('✓',58,218,checkOptions);
  if(params.goods.mask) context.writeText('✓',108,218,checkOptions);
  if(params.goods.dentifrice_sheet) context.writeText('✓',147,218,checkOptions);
  if(params.goods.socks) context.writeText('✓',196,218,checkOptions);
  if(params.goods.scissor) context.writeText('✓',254,218,checkOptions);
  if(params.goods.bandage) context.writeText('✓',301,218,checkOptions);
  if(params.goods.whistle2) context.writeText('✓',361,218,checkOptions);

  if(params.goods.wrap) context.writeText('✓',58,150,checkOptions);
  if(params.goods.toilet) context.writeText('✓',95,150,checkOptions);
  if(params.goods.tape) context.writeText('✓',148,150,checkOptions);
  if(params.goods.pillow) context.writeText('✓',208,150,checkOptions);
  if(params.goods.glasses) context.writeText('✓',260,150,checkOptions);
  if(params.goods.wet_tissue) context.writeText('✓',308,150,checkOptions);
  if(params.goods.light) context.writeText('✓',366,150,checkOptions);

  if(params.goods.for_children) context.writeText('✓',84,94,checkOptions);
  if(params.goods.essential_oil) context.writeText('✓',238,94,checkOptions);

  if(params.foods.water) context.writeText('✓',475,300,checkOptions);
  if(params.foods.can) context.writeText('✓',545,300,checkOptions);
  if(params.foods.soup) context.writeText('✓',625,300,checkOptions);
  if(params.foods.dryfood) context.writeText('✓',719,300,checkOptions);
  if(params.foods.stove) context.writeText('✓',456,209,checkOptions);
  if(params.foods.poli) context.writeText('✓',553,209,checkOptions);

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
  if(params.checkList.earthquake) {
    context.writeText('✓',515,301,checkOptions);
    context.writeText(params.checkList.earthquake,570,302,checkListOptions);
  }
  if(params.checkList.flood) {
    context.writeText('✓',515,285,checkOptions);
    context.writeText(params.checkList.flood,570,285,checkListOptions);
  }
  if(params.checkList.earthquake && params.checkList.flood)
    context.writeText('✓',486,318,checkOptions);

  if(params.checkList.place) {
    context.writeText('✓',486,267,checkOptions);
    context.writeText(params.checkList.place,520,250,checkListOptions);
  }

  if(params.checkList.fixFurniture && params.checkList.glass &&
      params.checkList.storage && params.checkList.arrangeFurniture)
    context.writeText('✓',486,231,checkOptions);
  if(params.checkList.fixFurniture) context.writeText('✓',514,219,checkOptions);
  if(params.checkList.glass) context.writeText('✓',577,219,checkOptions);
  if(params.checkList.storage) context.writeText('✓',655,219,checkOptions);
  if(params.checkList.arrangeFurniture) context.writeText('✓',696,219,checkOptions);

  if(params.checkList.meal && params.checkList.water && params.checkList.stove &&
      params.checkList.gas && params.checkList.toilet)
    context.writeText('✓',486,201,checkOptions);
  if(params.checkList.meal) context.writeText('✓',514,188,checkOptions);
  if(params.checkList.water) context.writeText('✓',577,188,checkOptions);
  if(params.checkList.stove) context.writeText('✓',514,178,checkOptions);
  if(params.checkList.gas) context.writeText('✓',577,178,checkOptions);
  if(params.checkList.toilet) context.writeText('✓',514,168,checkOptions);

  pageModifier.endContext().writePage();
  pdfWriter.end();
}

const event = {
  params: {
    form: {
      family: [
        { name: '伊藤博文', phone: '000-0000-0000', insurance: '00000000', illness: 'テストデータ' },
        { name: '伊藤博文', phone: '000-0000-0000', insurance: '00000000', illness: 'テストデータ' },
        { name: '伊藤博文', phone: '000-0000-0000', insurance: '00000000', illness: 'テストデータ' },
        { name: '伊藤博文', phone: '000-0000-0000', insurance: '00000000', illness: 'テストデータ' },
        { name: '伊藤博文', phone: '000-0000-0000', insurance: '00000000', illness: 'テストデータ' },
      ],
      relatives: [
        { name: '伊藤博文', phone: '000-0000-0000' },
        { name: '伊藤博文', phone: '000-0000-0000' },
        { name: '伊藤博文', phone: '000-0000-0000' },
        { name: '伊藤博文', phone: '000-0000-0000' },
        { name: '伊藤博文', phone: '000-0000-0000' }
      ],
      facilities: [
        { name: '国会議事堂', phone: '000-0000-0000' },
        { name: '国会議事堂', phone: '000-0000-0000' },
        { name: '国会議事堂', phone: '000-0000-0000' },
        { name: '国会議事堂', phone: '000-0000-0000' },
        { name: '国会議事堂', phone: '000-0000-0000' }
      ],
      home: '000-0000-0000',
      temporary: '下関市テスト会館テスト号室',
      disaster: '下関市テスト会館テスト号室',
      tsunami: '下関市テスト会館テスト号室'
    },
    card: {
      flood: { evacuation: 'テストテスト', shelter: 'テストテストテスト' },
      sediment: { evacuation: 'テストテスト', shelter: 'テストテストテスト' },
      earthquake: { evacuation: 'テストテスト', shelter: 'テストテストテスト' },
      fire: { evacuation: 'テストテスト', shelter: 'テストテストテスト' },
    },
    goods: {
      water: true,
      coin: true,
      chocolate_and_candy: true,
      battery: true,
      handkerchief: true,
      whistle: true,
      aid: true,
      diapers: true,
      address: true,
      poli: true,
      pin: true,
      picnic_sheet: true,
      mask: true,
      dentifrice_sheet: true,
      socks: true,
      scissor: true,
      bandage: true,
      whistle2: true,
      wrap: true,
      toilet: true,
      tape: true,
      pillow: true,
      glasses: true,
      wet_tissue: true,
      light: true,
      for_children: true,
      essential_oil: true,
    },
    foods: {
      water: true,
      can: true,
      soup: true,
      dryfood: true,
      stove: true,
      poli: true,
    },
    checkList: {
      earthquake: 'テストテストテストテスト',
      flood: 'テストテストテストテスト',
      place: 'テストテストテストテスト',
      fixFurniture: true,
      glass: true,
      storage: true,
      arrangeFurniture: true,
      meal: true,
      water: true,
      stove: true,
      gas: true,
      toilet: true,
    },
  },
}

exports.lambdaHandler = async (event) => {
  const params = event.params ? event.params : {};
  // undefinedな値を定義
  if(params.form === undefined) params.form = {};
  ['family', 'relatives', 'facilities'].forEach(key => {
    if(params.form[key] === undefined) params.form[key] = [];
  });
  ['home', 'temporary', 'disaster', 'tsunami'].forEach(key => {
    if(params.form[key] === undefined) params.form[key] = "";
  });
  if(params.card === undefined) params.card = {};
  ['flood', 'sediment', 'earthquake', 'fire'].forEach(key => {
    if(params.card[key] === undefined) params.card[key] = {};
  });
  if(params.goods === undefined) params.goods = {};
  if(params.foods === undefined) params.foods = {};
  if(params.checkList === undefined) params.checkList = {};

  await generatePDF(params);

  const contents = fs.readFileSync('/tmp/output.pdf', {encoding: 'base64'});
  return {
    'statusCode': 200,
    'headers': {
      'Content-Type': 'application/pdf'
    },
    'body': contents,
    'isBase64Encoded': true
  };
}
