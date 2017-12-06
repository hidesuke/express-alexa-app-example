const fs = require('fs');
const alexa = require('../routes/alexa');

// utterance.txtファイルを作成
const utterances = alexa.utterances();
// schema.jsonを作成
const schema = alexa.schema();

fs.writeFileSync(`${__dirname}/SampleUtterance.txt`, utterances, err => { if (err) throw err; });
fs.writeFileSync(`${__dirname}/IntentSchema.json`, schema, err => { if (err) throw err; });