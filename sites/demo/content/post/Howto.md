# 目次
- [目次](#目次)
- [始めに](#始めに)
  - [環境構築](#環境構築)
  - [2回目以降の起動](#2回目以降の起動)
  - [終了](#終了)
- [Githubのルール▢](#githubのルール)
- [TypeScriptのあれこれ](#typescriptのあれこれ)
  - [TypeScriptってなんだよ](#typescriptってなんだよ)
  - [callbackとは](#callbackとは)
  - [逐次処理と並行処理](#逐次処理と並行処理)
  - [アロー関数式](#アロー関数式)
  - [ラムダ式](#ラムダ式)
  - [ジェネリクス](#ジェネリクス)
  - [構造的部分型](#構造的部分型)
- [今後書き足して行きたいこと](#今後書き足して行きたいこと)
- [参考](#参考)

# 始めに
- 始め方はここにある
https://github.com/hu-gsd/gsd-discord-bot.ts  
(始め方の記述はnoname先輩が頑張って書いているぞ!)  
- 現在使っているのはType Scriptである(拡張子は .ts)
- ZuakiTest.tsに書き方は書いてある

## 環境構築
1. ~~Vim の使い方を覚えます。~~
1. VS Code と Docker Desktop をインストールしてセットアップする。Windows の場合 Docker Desktop は WSL2 を使用するためそれもインストールしてセットアップする。
1. これを押して右側の Clone repo in container volume をクリックする。  
   [![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/hu-gsd/gsd-discord-bot.ts)  
   魔法の力で開発環境が勝手にできる。
1. [Discord の Developer Portal](https://discord.com/developers/applications) でボットを作成する。
   - 下の画像の項目を最低限チェックを入れてサーバーに招待する。
     ![Discord Developer Portal OAuth2 URL](https://github.com/hu-gsd/gsd-discord-bot.ts/blob/main/docs/images/discord-bot-oauth2-url.png)
2. `config.ts.sample` というファイルを**複製**（コピーして貼り付け）して `config.ts` という名前に変更して自分で取得した Bot のトークンを入れる。
3. Debug ボタンを押してみる。
4. Happy Coding!

## 2回目以降の起動  
- DockerDesktopを起動
VSCodeで"Debug Bot"を選んで左の<span style="color: yellowgreen; ">右三角形</span>を押して自分のbotが起動する  
<img src="images_Howto/2022-02-17-17-20-12.png" width="50%">
- 左側のリモートエクスプローラーのgsd-discord-bot.tsから再度開ける  

## 終了
- 下の図の右にある<span style="color: #FF6666; ">四角形のマーク</span>から終了botを止める  
<img src="images_Howto/2022-02-17-17-25-25.png" width="25%">

# Githubのルール▢
- マージ
- ふぇっち
- ぷる (ふぇっち+まーじ)
- リセット
- プッシュ
- リムーブ

# TypeScriptのあれこれ
## TypeScriptってなんだよ

## callbackとは
関数を引数に取る処理のことを言う．
```typescript
function1(callback){
    callbask();
}
```
と書いて
```typescript
function1(function2);
```
とすると，上のcallbackという部分でfunction2が実行される．


## 逐次処理と並行処理
早いはなし，普通にコードを上から行われていくのが逐次処理です．  
並行処理は，

## アロー関数式
C# や java に出てくる「[ラムダ式](#ラムダ式)」みたいなものです
```typescript
var func1 = function (x: number, y: number) { return x + y; };
```
これをアロー関数式にすると
```typescript
var func2 = (x: number, y: number) => x + y; 
```
## ラムダ式
C# について説明する．

## ジェネリクス

## 構造的部分型
メンバの名前と型が一致すれば型チェックを通す  
(メンバ :メソッドの構成要素のこと)

&nbsp;

# 今後書き足して行きたいこと
- [ ] async await
- [ ] プロパティ
- [x] callback
- [ ] 同期，非同期
- [ ] 逐次処理，並行処理

# 参考
- promiseについて https://note.affi-sapo-sv.com/js-promise.php  
- マークダウンチートシート
https://qiita.com/Qiita/items/c686397e4a0f4f11683d  
- vscodeを利用したmarkdown https://tracpath.com/works/development/markdown_basics/#Visual_Studio_CodeVS_Code
- async await https://note.affi-sapo-sv.com/js-await-async.php#title2
- ラムダ式
- アロー関数式 https://www.buildinsider.net/web/pronamatypescript/03