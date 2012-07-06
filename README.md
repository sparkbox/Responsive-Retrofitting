# Responsive Retrofitting
## [Ben Callahan](http://twitter.com/bencallahan), [Sparkbox](http://seesparkbox.com)

This repo is an experiment in responsive retrofitting. It's a positive response to more negative (but still much needed) critiques of the mobile web like [Brad Frost's])http://twitter.com/brad_frost) [WTF Mobile Web](http://wtfmobileweb.com).

Let's get started...

### What Is This?
There are two components to this project:
1. a small bookmarklet which inserts an html link and a meta tag into the head of the current page
2. a bunch of CSS files for any website which are reference by the link added by the bookmarklet

So here's a use case. Someone decides they'd like to experiment with making a website (say John Gruber's http://daringfireball.com) responsive. They check to see if anyone else has already started this process and see that there is NOT a "daringfireball.net" directory in the "gh-pages" branch. They clone the repo, install the bookmarklet, create "daringfireball.net/css/retrofit.css" (in the "gh-pages" branch) with some CSS to make the site respond and submit a pull request. Once this is accepted, anyone with the bookmarklet will be able to see their CSS in action by running the bookmarklet from John's site.

This simple little bookmarklet gives you a chance to do something about the bad mobile experiences you find.

Stop complaining. Start fixing.

### Installation
You can install the bookmarklet simply by dragging the following link to your browser's bookmark bar:

[Retrofit](javascript: (function (\) {var jsCode = document.createElement('script'\);jsCode.setAttribute('src', 'https://raw.github.com/sparkbox/responsive-retrofitting/master/responsive-retrofit.js'\);document.body.appendChild(jsCode\);}(\)\);)

### Use
Now, you can visit any of these sites and run the bookmarklet to see the changes.
* [Switch to Gmail](https://mail.google.com/mail/help/intl/en/switch.html)
* [Daring Fireball](http://daringfireball.net)

### Contribute
In order to contribute, you'll need to clone the repo and make changes to the "gh-pages" branch. I'm not exactly a git-master, so if you know of a better way to configure this (maybe working in master and "releasing" into gh-pages) let me know.

You'll need a directory that's the same as the "document.location.hostname" with a "css" sub directory. Only one CSS file is loaded (retrofit.css) so you can use scss or LESS or whatever you want to generate that single CSS file.

You also might find it easier to work in the "incogneto" mode of your favorite browser. Caching seems to get in the way pretty easily when you're doing this kind of stuff.

I look forward to seeing your creations!