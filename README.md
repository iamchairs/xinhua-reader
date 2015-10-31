bbc-reader
----------

Scrape a Xinhua article from Xinhua.com


## Install

```
npm install xinhua-reader --save
```

## Use

```
   var XinhuaReader = require('xinhua-reader');
   var xinhuareader = new XinhuaReader();

   // Promise
   xinhuareader.read('http://news.xinhuanet.com/english/2015-10/31/c_134769673.htm').then(function(article) {
      // Do Something with Article
   });

   // Callback
   xinhuareader.read('http://news.xinhuanet.com/english/2015-10/31/c_134769673.htm', function(article) {
      // Do Something with Article
   });
```

## Article

```
var Article = {
   title: '',
   datetime: '',
   body: {
      clean: '',
      markdown: ''
   },
   images: [
      {
         full: ''
      }
   ],
   source: ''
};
```

**title**
The title of the Article. What appears in the h1 on the page.

**datetime**
The datetime with timezone of the last update of the article. Format: `YY-mm-dd H:i:s GMT`. The datetime will always be `GMT+0000`.

**body**
The body of the article. Comes in two formats. *clean* and *minimal*. The clean format removes all html elements and separates paragraphs by two newlines. Markdown attempts to provide a markdown version of the article.

**images**
An array of image urls found in the body. Comes in sizes `full` for each image. Images are categorized on year-month-day (but this is GMT+0 time). So be sure to set your timezone to `GMT+0`: `process.env.TZ = 'GMT+0';`.

**source**
The url of the xinhua article.