---
layout: default
title:  "ブックマークレットにアイコン(favicon)をつける"
date:   2024-04-30 00:00:00 +0900
categories: blog
index: true
follow: true
---

# ブックマークレットにアイコン(favicon)をつける

## ブックマークレットにもアイコン(favicon)を表示させたい

ブックマークレットでは通常以下のようにアイコンが設定されない。  
しかし、数が増えてくるとぱっと見で視覚的にわかりやすいアイコンが付いてて欲しくなる。  

<img src="./img/bookmarklet1.png">

## ブックマークレットにアイコン(favicon)を設定する方法

Chromeでやってます。

**1. 設定したいfaviconが入ったブックマークページを用意する**  
Twitter(X)関連のブックマークレットなのでXのfaviconのあるページをブックマークに追加。  
<img src="./img/bookmarklet2.png">

**2. ブックマークマネージャからブックマークをエクスポートする**  
html形式で出力される。

**3. エクスポートしたhtmlファイルを適当なエディタで開く**  
各ブックマークが`<A>`タグで定義されている。

**4. 1.のページの`<A>`タグの`ICON`属性に設定されている値をコピーする**  

**5. faivconを設定したいブックマークレットの`<A>`タグに`ICON`属性を追加し4.を貼り付け**  

**6. 保存して、ブックマークマネージャからインポートする**  
ブックマークレットにXのfaviconが設定された。  
<img src="./img/bookmarklet3.png">


## ブックマークレットを編集するとfaviconの設定が消える

faviconは設定できたが、jsをちょっと修正したくなってブックマークレットを編集するとfaviconは消えてしまう。  
対応策としてはjs本体は外部ファイルとして別の場所に置くという方法がある。  

ブックマークレットとしては、以下のように外部のjsファイルを差し込む処理だけを記述する。

```
javascript:(function(url){s=document.createElement('script');s.src=url;document.body.appendChild(s);})('js本体のURL')
```

注意点としては当然ながらjs本体を参照できない状況では実行できない。（js本体のURLにアクセスできない・CORS制約に引っかかるなど）