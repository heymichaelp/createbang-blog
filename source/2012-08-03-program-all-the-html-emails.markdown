---
layout: post
title: "The <span class='select'>debacle</span> that is <span class='select'>HTML Email</span> Coding"
date: 2012-08-03 19:02
comments: true
categories: html, email, headache
---
Today, we sent out our first newsletter to our list subscribers.  It was a process, from start to finish, that was almost entirely new to me.

The first thing I did to lay out the email was to design it the exact same as any other web page.  Right?  I mean, why would I have to do anything else.  Clearly, at this point, I hadn't done any research into the absolute debacle that HTML emails actually are.  I was in for a surprise.

<!-- more -->

So I got everything laid out nicely in the browser, using CSS3, custom web fonts (including a custom graphics font made using [Inkscape](http://www.bestvendor.com/apps/graphic-design/Inkscape), a pretty unpleasant piece of software that helps you achieve something super pleasant - custom SVG web fonts as a font face.  See [why custom fonts are the shit](http://css-tricks.com/examples/IconFont/).)  The layout was solid, and I was feeling pretty good.

And then I sent it to myself…

Lo, and behold, email clients don't understand HTML the same way a browser does.  So I started my reading, because better late than never, right?  Turns out you have to lay your emails out like it's 1990.  With the need for table and inline styles, and a whole host of other outdated methods, it's a real bear.  And not to mention the sheer quantity of clients that are out there.  There are lots more email clients than there are browsers, so it's even more difficult to design for.

--------------------------

## If it's annoying…

As the great [Ariel Podwal](http://arielpodwal.com) once said, "if it's annoying - someone probably made a solution."  Right, he was.

There are a whole host of tools that can make this process much easier for a developer to not only create the email in a much more modern way, but to ease up the burden of cross-client testing.

> Clients we decided to test for

> * Apple Mail (4, 5)
> * Outlook (2000, 2002/XP, 2003, 2007, 2010, 2013)
> * Android (2.3, 4.0)
> * iOS (iPad, iPhone iOS 4, iPhone iOS 5)
> * Gmail (Chrome, Explorer, Firefox)
> * Hotmail (Chrome, Explorer, Firefox)
> * Yahoo! Mail (Chrome, Explorer, Firefox)

> Take a look at this [infographic on email client usage](http://emailclientmarketshare.com/) to help guide your own decision

### [Litmus](http://www.bestvendor.com/apps/email-marketing/litmus)

Litmus is a web app that helps you render out your HTML email in almost every single client that is used today, and will actually give you an image of it in the client.  It's essentially a render farm for email clients.  The service costs, but the benefit of it is huge.  Definitely a key part of the HTML email development toolkit.

### [HTML Email Boilerplate](http://htmlemailboilerplate.com/)

Ariel also was gracious enough to tip me off to HTML Email Boilerplate, a great starting reset template for your HTML email.  It has a lot of great defaults set so that you don't have to start at such a deficit.  It even includes some basic layout defaults, like a 600px column centered to get your content laid out quickly.

### [Premailer](http://premailer.dialect.ca/) from [Dialect](http://dialect.ca/)

This was a real win for me.  This compiler automagically will bring all of your head styles inline, omit any comments, absolute any relative URLs you reference, and a few other amazing things.

This basically allows you to write your CSS like it's 2012, and then loops over the DOM, inserting any applicable inline styles to all elements in the body.  Huge win.

Another great thing it does is generate a Plain Text version of the email for you, so you can include that in your code, as well.

One gotcha with this is that if you're using [Mustache] or any other templating system like I am, any template variables within a link are broken in the conversion process, so you'll have to clean those up.

--------------------------

It's been an interesting journey wading through the muck that is HTML emails, but it's going to be much, much easier next time 'round.  I still have a lot to learn in terms of writing code that is seamless across clients, but we'll save that for another day.

I'd be interested to see if anyone else has tools or advice for making the process of programming your HTML emails less painful.  Please drop a line in the comments below.

Fuck Gmail,


Michael