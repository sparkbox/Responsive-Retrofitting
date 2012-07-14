# Responsive Retrofitting
[Ben Callahan](http://twitter.com/bencallahan), [Sparkbox](http://seesparkbox.com)

** WARNING **
This is very much in alpha form and is only working in webkit browsers. Please don't hesitate to play with this and make suggestions on how to improve it!

This repo is an experiment in responsive retrofitting. It's a positive response to more negative (but still much needed) critiques of the mobile web like [Brad Frost's](http://twitter.com/brad_frost) [WTF Mobile Web](http://wtfmobileweb.com).

Let's get started...

### What Is This?
There are two components to this project:
* a small bookmarklet which inserts an html link and a meta tag into the head of the current page
* a bunch of CSS files for public websites

So here's a use case. Someone decides they'd like to experiment with making a website (say John Gruber's http://daringfireball.com) responsive. They check to see if anyone else has already started this process and see that there is NOT a "daringfireball.net" directory in the "gh-pages" branch. They fork the repo, install the bookmarklet, create "daringfireball.net/css/retrofit.css" (in the "gh-pages" branch) with some CSS to make the site respond and submit a pull request. Once this is accepted, anyone with the bookmarklet will be able to see their CSS in action by running the bookmarklet from John's site.

This simple little bookmarklet gives you a chance to flex your #rwd muscles. Practice makes perfect!

Also, one note. This is only working in WebKit browsers right now. If someone wants to help me figure out why, I'd be much obliged.

### Install
[Read this page for installation instructions.](http://sparkbox.github.com/Responsive-Retrofitting)

### Use
Now, you can visit any of these sites and run the bookmarklet to see the changes.
* [Switch to Gmail](https://mail.google.com/mail/help/intl/en/switch.html)
* [Daring Fireball](http://daringfireball.net)
* [Apple](http://apple.com)

### Contribute
Everything happens in the "gh-pages" branch so that we can hot-link to these files appropriately. In order to contribute, you'll need to fork the repo and make changes to the "gh-pages" branch. I'm not exactly a git-master, so if you know of a better way to configure this (maybe working in master and "releasing" into gh-pages?) let me know.

You'll need a directory that's the same as "document.location.hostname" with a "css" sub directory (so for Apple, that's www.apple.com/css). Only one CSS file is loaded (retrofit.css) so you can use Scss or LESS or whatever you want to generate that single CSS file.

For dev purposes, you might want to change the reference to the CSS file in the bookmarklet to reference your repo's version. Just make sure you revert before you make a pull request or I will not accept it.

I look forward to seeing your creations!