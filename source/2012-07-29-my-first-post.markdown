---
layout: post
title: "Creating this blog with <span class='select'>Octopress</span> and <span class='select'>Heroku</span>"
date: 2012-07-29 19:40
comments: true
categories: [Writing, Blog, Life]
---
For a long time, I've wanted to build a code engineering blog, more to document my path of discovery for posterity's sake than anything.  Recently, I took the jump into startup life and took a job with [Feelday](http://feelday.com) as a developer.  I came into the role while the product was in its infancy, so I've been fortunate enough to have a part in the entire stack of the product.  We've been making a lot of decisions about which technologies to use and what approaches to take, and I think a place to write down our conversations, decisions, and reflections would be a good thing.

<!-- more -->

I recently had the pleasure of meeting [Justin Reidy](https://twitter.com/JMREIDY), husband to the wonderful photographer [Meaghin Kennedy](https://twitter.com/meaghink).  Justin keeps a blog as [Razor Sharp Design](http://rzrsharp.net/) that I've really enjoyed reading.  His blog is built on [Octopress](http://octopress.org), and so I decided to check it out.  I start to vomit when I think about using Wordpress, Blogger or Tumblr, so I was excited to find a more versatile, configurable blogging platform that I didn't have to build myself.

Turns out, Octopress is almost perfect for this.  Self-billed as a "blogging framework for hackers", it operates almost exclusively out of the command line.  From creating a new post or page to previewing your changes on a self-mounted local server, you can do it all with Octopress.

> Technologies used:

> * [Octopress](http://octopress.org) blogging platform
> * [Heroku](http://heroku.com) for hosting
> * [Hover](http://hover.com) for domain registration
> * [Zerigo DNS](http://www.zerigo.com/managed-dns/) as Heroku add-on for DNS maintenance
> * [iA Writer](http://www.iawriter.com/) and [MacVim](http://code.google.com/p/macvim/) for writing content

It comes in a tidy little package of lightweight files.  It doesn't feel like it's full of cruft or esoteric libraries that you have to take time to wipe out.  There are some helpful widgets, but not many, and they're very easy to drop in and take out.

One of the best things about Octopress is that its styles are completely written in modular [SCSS](http://sass-lang.org) files, so finding the code you want is simple and logical, and you get to leverage the wonderfully abbreviated language of SCSS.  Huge win.

Also, I love that there's no database involved.  All of the content is generated through `rake` commands, so there's no database queries for pulling your content.  Also, the html files are interpreted through the wonderful [Markdown](http://daringfireball.net/projects/markdown/) language, so writing posts is simple, and you don't have to dirty your hands with HTML.

So far, Octopress has been a real dream to use.  Getting this blog off the ground has been a goal for a while, and this framework has enabled me to do this in a fast, enjoyable, and efficient way.

Blogs away,


Michael