(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ipsum = document.getElementById('ipsum');
var ipso = document.getElementById('ipso');
var bipso = document.getElementById('bipso');

var buzz = {
  noun: function () {
    return rand(noun)+' ';
  },
  adj: function () {
    return rand(adj)+' ';
  },
  ing: function () {
    return rand(ing)+' ';
  },
  verb: function () {
    return rand(verb)+' ';
  },
};

function rand (words) {
  return words[Math.floor(Math.random()*words.length)];
}

function cap (word) {
  return word.charAt(0).toUpperCase()+word.slice(1);
}

function dot (word, symb) {
  return word.slice(0, word.length-1)+symb+' ';
}

function plur (word, symb) {
  return word.slice(0, word.length-1)+'s ';
}

var noun = [
  'cloud', 'big data', 'SaaS', 'analytics',
  'behavior-driven development', 'data mining',
  'data mining', 'ecosystems', 'Hadoop', 
  'multi-core', 'single-page applications',
  'development', 'machine learning',
  'pair programming', 'infrastructure',
  'performance', 'mindshare', 'HTML5',
  'convergence', 'datafication', 'dev ops',
  'disruptive technologies', 'document management',
  'document management', 'frameworks', 'portals',
  'skeuomorphism', 'lifecycles', 'user-generated content',
  'dogfood', 'low-hanging fruit'
];

var adj = [
  'asynchronous', 'agile', 'open source',
  'RESTful', 'scalable', 'enterprise',
  'thin-client', 'full-stack', 'noSQL',
  'freemium', 'distributed', 'automated',
  'platform agnostic', 'modular', 'compiled',
  'data-driven', 'optimized', 'pragmatic',
  'self-driving', 'vertical', 'mobile',
  'real-time', 'viral', 'virtual', 'seamless',
  'granular', 'holistic', 'next-generation',
  'long-tail', 'hyperlocal'
];

var ing = [
  'benchmarking', 'visualizing', 'automating',
  'pre-processing', 'optimizing', 'profiling',
  'engaging'
];

var verb = [
  'leverage', 'create', 'improve', 'emulate',
  'persist', 'brainstorm', 'reimagine', 'engineer',
  'recreate', 'replace', 'render obsolete', 
  'innovate', 'maximize', 'gamify', 'recontextualize',
   'create the opportunity for', 'make a case for',
   'interfere with', 'facilitate the creation of' 
];

var frag = [
  'will', 'should', 'can', 'must', 'will eventually',
  'won\'t', 'mustn\'t', 'might', 'may'
];

var join = [
  'and', 'or', 'rather than', 'in lieu of', 'for',
  'because of'
];

var start = [
  'looking forward', 
];

ipsum.innerHTML = s1()+s1()+s1()+s1()+s1()+s1()+'\n\n'+s1()+s1()+s1()+s1()+s1()+s1();
ipso.innerHTML = s2()+s2()+s2()+s2()+s2()+s2()+s2()+s2()+s2()+s2()+s2()+s2();
bipso.innerHTML = s3()+s2()+s1()+s2()+s1()+s2()+s1()+s2()+s1()+s2()+s1()+s1();

function s1 () {
  return cap(buzz.adj())+buzz.noun()+rand(frag)+
  ' '+buzz.verb()+buzz.adj()+dot(buzz.noun(), '.');
}

function s2 () {
  return cap(buzz.ing())+buzz.adj()+buzz.noun()+
  rand(frag)+' '+buzz.verb()+buzz.noun()+
  rand(join)+' '+buzz.adj()+dot(buzz.noun(), '.');
}

function s3 () {
  return 'We '+buzz.verb()+buzz.adj()+buzz.noun()+
  'for '+buzz.adj()+buzz.noun()+rand(join)+' '+
  buzz.adj()+dot(buzz.noun(), '.');
}
},{}],2:[function(require,module,exports){
var ipsum = require('./ipsum.js');
},{"./ipsum.js":1}]},{},[2]);