const Alexa = require('alexa-app');
const app = new Alexa.app('Sample');

const UTTERANCES = {
  response: {
    launch: '「ふっふー」とか「ばっばー」とか言ったらなんか言います。選べ',
    foo: 'ふっふっふー！ テンション上がってきたぁぁ！',
    bar: 'あばばばばばばばばば',
    stopAndCancel: 'あ、すいません。退場します。',
  },
  request: {
    stop: ['やめて', 'もうええわ', 'バイバイ'],
    help: ['ボスケテ', 'たすけて'],
    foo: ['ふっふー', 'ふー'],
    bar: ['ばっばー', 'ばばぁ'],
  },
};

const helpResponse = (req, res) => res.say(UTTERANCES.response.launch).shouldENdSession(false);
const stopAndCancelResponse = (req, res) => res.say(UTTERANCES.response.stopAndCancel);
const fooResponse = (req, res) => foobarResponse(req, res, 'foo');
const barResponse = (req, res) => foobarResponse(req, res, 'bar');
const foobarResponse = (req, res, type) => res.say(UTTERANCES.response[type]).shouldENdSession(true);

// 「Alexa〜〜を開いて」と言ってSkillsを起動したときに発動するintent
app.launch((req, res) => {
  res.say(UTTERANCES.response.launch).shouldEndSession(false);
});

// 下記3つは実装しとかないと審査通らないので注意。↑のlaunchも
app.intent('AMAZON.StopIntent', { utterances: UTTERANCES.request.stop }, stopAndCancelResponse);
app.intent('AMAZON.CancelIntent', { utterances: UTTERANCES.request.stop }, stopAndCancelResponse);
app.intent('AMAZON.HelpIntent', { utterances: UTTERANCES.request.help }, helpResponse);

// 「ふっふー」と陽気に問いかけると実行されるやつ
app.intent('foo', { utterances: UTTERANCES.request.foo }, fooResponse);
// 「ばっばー」と不穏に問いかけると実行されるやつ
app.intent('bar', { utterances: UTTERANCES.request.bar }, barResponse);

module.exports = app;