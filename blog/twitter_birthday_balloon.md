---
layout: default
title:  "Twitter(現X)の誕生日バルーンをいっぱいにする"
date:   2024-05-30 00:00:00 +0900
categories: blog
index: true
follow: true
---

# Twitter(現X)の誕生日バルーンをいっぱいにする

Twitterで誕生日にプロフィールを開くと風船が飛ぶ。  
あれを長い間飛ばし続ける。

以下をコンソールで実行。またはブックマークレットで登録しておく。

```
var timer = setInterval(function(){
	document.getElementById('layers').insertBefore(document.getElementById('layers').lastElementChild.cloneNode(true), null);
}, 300);
setTimeout(function(){ clearInterval(timer); }, 50 * 1000);
```

以上。