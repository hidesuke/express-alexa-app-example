# express-alexa-app-example

## Overview

[Amazon Alexa Advent Calendar 2017](https://adventar.org/calendars/2332) のために気合をいれて作ったサンプルです。

通常、Alexa Skillsのサーバを作ろうと思うと [Alexa Skills Kit SDK for Nodejs](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)を使いますが、これを使うと[AWS lambda](https://aws.amazon.com/jp/lambda/) にコードをホスティングする必要があります。

でも、ほら、いろいろ宗教上の理由で自分のところのサーバにコード置かないといけない場合とかあるじゃないですか。でもAlexaしたい的な。そういうときに役に立つのがこの[alexa-app](https://www.npmjs.com/package/alexa-app)です。

これを使うと Express + alexa-app で簡単にAlexa Skillsを自前サーバにホスティングすることができます。詳しくは [Amazon Alexa Advent Calendar 2017 10日目の記事](https://qiita.com/hidesuke/items/3366c8c55665a79bfcaf)を参照してください。

ちなみに、alexa-appを使っても [AWS lambdaにデプロイすることもできます](https://www.npmjs.com/package/alexa-app#aws-lambda)。

## How to run

```bash
$ npm install
$ npm start
```

## Creating Utterance and Intent Schema

```bash
$ npm run build
```

これをすると、`tools`ディレクトリに`utterances.txt`と`schema.json`が作成されます。この中身をそれぞれAmazon Developer Consoleの適切な場所にコピペするといろいろ捗る。

## Appendix

* [Express](http://expressjs.com)
* [alexa-app](https://www.npmjs.com/package/alexa-app)
* [Amazon Alexa Advent Calendar 2017](https://adventar.org/calendars/2332) 
