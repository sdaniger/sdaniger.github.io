/*!
 * DomAnimator.js
 *
 * MIT licensed
 * Copyright (C) 2015 Tim Holman, http://tholman.com
 */
;var DomAnimator=function(){var n=0,e=[],a=[],r=!window.chrome,o=null,t=500,d=!1,i=" ";function m(n){for(var e=0;e<n.length;e++)n[e]=n[e].replace(/ /g,i);return n}function u(n){return"\n"+n+"\n"}return function(n,e){for(var a in e)a in n||(n[a]=e[a]);return n}(function(){},{addFrame:function(n){n||(n="no frame data");var a=typeof n;"object"===a?e.push(function(n){return r?m(n):u(n.join("\n"))}(n)):"string"===a&&e.push(function(n){return r?m(n.split("\n")):u(n)}(n))},animate:function(i){i||(i=t),0!==e.length?(!1===d&&function(){var n=document.head,o=n.parentNode;if(r)for(var t=0,d=e[0].length;t<d;t++){var i=document.createComment("");a.push(i),o.insertBefore(i,n)}else{var i=document.createComment("");a.push(i),o.insertBefore(i,n)}}(),o=setInterval(function(){!function(){var o=e[n];if(r)for(var t=0;t<a.length;t++)a[t].nodeValue=o[t];else a[0].nodeValue=o;(n+=1)===e.length&&(n=0)}()},i)):console.log("I need frames to animate. You can add them with .addFrame( string )")},stop:function(){clearInterval(o)}})},domAni=new DomAnimator;domAni.addFrame("関サバ　アジ　ホタテ"),domAni.addFrame("ネギトロ　ブリ　穴子"),domAni.addFrame("甘エビ　イカ　コハダ"),domAni.addFrame("カンパチ　タイ　カツオ"),domAni.addFrame("子供はやっぱりタマゴ"),domAni.addFrame("大人のふりしてエンガワ"),domAni.addFrame("サーモン大好きオンナ"),domAni.addFrame("唐揚げ食うなよオトコ"),domAni.animate(2e3);