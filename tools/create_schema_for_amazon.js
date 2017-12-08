const fs = require('fs');
const alexa = require('../routes/alexa');

// SampleUtteranceを作成
const utterances = alexa.utterances();
// IntentSchemaを作成
const schema = alexa.schema();

// ファイルに書き出し
fs.writeFileSync(`${__dirname}/SampleUtterance.txt`, utterances, err => { if (err) throw err; });
fs.writeFileSync(`${__dirname}/IntentSchema.json`, schema, err => { if (err) throw err; });