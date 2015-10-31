process.env.TZ = 'GMT';

var XinhuaReader = require('./index');
var toMarkdown = require('./markdown');
var reader = new XinhuaReader();

var sampleDom = '<p>test text node <a href="http://google.com"><p>this whole 2 par is link</p><p>im serious</p></a></p>';

var xmldom = new require('xmldom');
DOMParser = new xmldom.DOMParser({
   errorHandler: {
      warning: function() {/* Ignore */},
      error: function() {/* Ignore */}
   }
});
var dom = DOMParser.parseFromString(sampleDom);

reader.read('http://news.xinhuanet.com/english/2015-10/31/c_134769673.htm');