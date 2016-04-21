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
   'interfere with', 'facilitate the creation of',
   'overtake'
];

var frag = [
  'will', 'should', 'can', 'must', 'will eventually',
  'won\'t', 'mustn\'t', 'might', 'may', 'can never',
  'should not', 'must never', 'is preparing to',
  'comes up against'
];

var join = [
  'and', 'or', 'rather than', 'in lieu of', 'for',
  'because of'
];

var start = [
  'looking forward',
];

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
  connect: function () {
    return rand(frag)+' ';
  }
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

module.exports = buzz;
