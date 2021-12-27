const fs = require('fs');
const {stringify} = require('csv-stringify/sync');
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'}); // リージョン名は展開先の環境に合わせること

const cloudwatch = new AWS.CloudWatch();

if(process.argv.length < 4) {
  console.log(`
  request.js is a tool for generating csv of sum of request each day in the service.
  
  Usage:
  
      node request.js [app name] [date]
  `);
  return;
}

const end = new Date();
const start = new Date(process.argv[3]);

const params = {
  MetricName: 'Requests',
  Namespace: 'AWS/AmplifyHosting',
  Period: String(3600*24), // 1日毎に集計
  StartTime: start,
  EndTime: end,
  Statistics: ['Sum'],
  Dimensions: [{'Name': 'App', 'Value': process.argv[2]}],
};

cloudwatch.getMetricStatistics(params, (err, data) => {
  if(err) console.log(err, err.stack);
  else {
    const datapoints = data.Datapoints;
    datapoints.sort(function (a, b) {
      return a.Timestamp - b.Timestamp;
    });
    for(const dp of datapoints) {
      console.log(dp);
      // Timestampの型をDateからString(YYYY/MM/DD)に変更
      dp.Timestamp = dp.Timestamp.getFullYear() + '/' + dp.Timestamp.getMonth() + '/' + dp.Timestamp.getDate();
    }

    const csvString = stringify(datapoints, {
      header: true,
      columns: {
        Timestamp: 'date',
        Sum: 'Number of Requests',
      },
      quoted_string: true,
    });
    try {
      fs.writeFileSync('output.csv', csvString);
      console.log('success');
    } catch(err) {
      console.log(err);
    }
  }
});
