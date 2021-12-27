# log-aggregator

AmplifyやLambdaのログをCloudWatchからダウンロードするためのプログラムです。
`output.csv`というファイルを出力します。

## 動作環境

aws cliが利用できる環境 or AWS Cloud9

> Cloud9を利用する方が環境設定の手間が省けて楽だと思います

## 使用方法

コマンドライン引数でApp名と日付を指定します。
指定した日付から今日までの、毎日の指定Appのリクエスト数を出力します。

```
> npm install # 依存パッケージのダウンロード
> node request.js <対象のAmplify App名> <日付>
```

Amplify App名は、AmplifyアプリケーションのアプリケーションARNに書いてあります。
> 例: `arn:aws:amplify:us-east-1:006472071757:apps/abcdefghijklmn`の`abcdefghijklmn`がApp名です。

日付は`2021/12/31`のようなフォーマットで入力することを推奨しますが、nodeのDateが読み込めるフォーマットなら何でもいいです。
