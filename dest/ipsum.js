!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(){function a(a){return a[Math.floor(Math.random()*a.length)]}function b(a){return a.charAt(0).toUpperCase()+a.slice(1)}function c(a,b){return a.slice(0,a.length-1)+b+" "}function d(){return b(j.adj())+j.noun()+a(o)+" "+j.verb()+j.adj()+c(j.noun(),".")}function e(){return b(j.ing())+j.adj()+j.noun()+a(o)+" "+j.verb()+j.noun()+a(p)+" "+j.adj()+c(j.noun(),".")}function f(){return"We "+j.verb()+j.adj()+j.noun()+"for "+j.adj()+j.noun()+a(p)+" "+j.adj()+c(j.noun(),".")}var g=document.getElementById("ipsum"),h=document.getElementById("ipso"),i=document.getElementById("bipso"),j={noun:function(){return a(k)+" "},adj:function(){return a(l)+" "},ing:function(){return a(m)+" "},verb:function(){return a(n)+" "}},k=["cloud","big data","SaaS","analytics","behavior-driven development","data mining","data mining","ecosystems","Hadoop","multi-core","single-page applications","development","machine learning","pair programming","infrastructure","performance","mindshare","HTML5","convergence","datafication","dev ops","disruptive technologies","document management","document management","frameworks","portals","skeuomorphism","lifecycles","user-generated content","dogfood","low-hanging fruit"],l=["asynchronous","agile","open source","RESTful","scalable","enterprise","thin-client","full-stack","noSQL","freemium","distributed","automated","platform agnostic","modular","compiled","data-driven","optimized","pragmatic","self-driving","vertical","mobile","real-time","viral","virtual","seamless","granular","holistic","next-generation","long-tail","hyperlocal"],m=["benchmarking","visualizing","automating","pre-processing","optimizing","profiling","engaging"],n=["leverage","create","improve","emulate","persist","brainstorm","reimagine","engineer","recreate","replace","render obsolete","innovate","maximize","gamify","recontextualize","create the opportunity for","make a case for","interfere with","facilitate the creation of"],o=["will","should","can","must","will eventually","won't","mustn't","might","may"],p=["and","or","rather than","in lieu of","for","because of"];g.innerHTML=d()+d()+d()+d()+d()+d()+"\n\n"+d()+d()+d()+d()+d()+d(),h.innerHTML=e()+e()+e()+e()+e()+e()+e()+e()+e()+e()+e()+e(),i.innerHTML=f()+e()+d()+e()+d()+e()+d()+e()+d()+e()+d()+d()},{}],2:[function(a){a("./ipsum.js")},{"./ipsum.js":1}]},{},[2]);