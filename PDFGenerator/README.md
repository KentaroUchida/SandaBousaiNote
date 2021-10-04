# PDFGenerator

PDFを生成するためのサーバレスアプリケーションモデルです。
AWS SAMのcliがインストールされている環境で開発してください。

## 動作環境

sam cliをインストールしている環境 or AWS Cloud9

> AWS Cloud9を利用する場合は、EC2の容量が足りなくなる場合があります。
> ストレージ容量を拡張するか利用しないDocker imageを全て削除してください。

## 下準備

`src/`以下に、ttfファイル`GenShinGothic-P-Normal.ttf`と親子防災ノート`1015_Bousai_A4.pdf`を配置してから以下の作業をおこなってください。

## ビルド・デプロイ

```
> sam build --use-container # Dockerが必要
> sam deploy --guided
```

## ローカルでのテスト

```
> sam local invoke -e event/event.json # 関数としてのテスト
> sam local start-api                  # ローカルでのAPI Gatewayを通したテスト
```