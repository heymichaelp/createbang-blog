---
layout: post
title: "Setting up <span class='select'>Apache</span> to give your <span class='select'>local sites</span> a unique URL"
date: 2012-08-09 17:07
comments: true
categories: 
---
For a long time now, when I've wanted to do local development on my machine for Feelday, I'd navigate to this address: http://localhost/.  I had initialized this configuration at the request of some more senior members of the team, and I had almost no idea what it meant at the time.

It worked alright for a long time, since I wasn't really developing anything else locally.  Such is startup life, am I right?

But awhile ago I started to tinker with other technologies and ideas, and my virtual host configuration was creating some issues.  I couldn't easily navigate to other sites on localhost/, since they all routed to my local Feelday directory.  

<!-- more -->

Since I didn't understand VirtualHosts, I would just comment out the <VirtualHost></VirtualHost> XML block from my httpd.conf file and then restart Apache, which would take away this configuration and I could access my other sites.  Not the best workflow, to be sure.

So today, I decided to actually decode this nonsense, and make my workflow better.  My goal was to give a named domain for my local dev site for Feelday, ideally at http://feelday.dev, that wouldn't interfere with my ability to make calls to other sites in my /Sites/ directory.

Turns out, this is very simple.  Here's a quick recap of how I configured my httpd.conf file and my /etc/hosts file to enable this setup.

<hr>

## /etc/hosts

    127.0.0.1   feelday.dev

This directive will tell your browser to look locally for a response to feelday.dev instead of searching for it on the internet.  Any other routes, (e.g. localsite.dev), will also route to 127.0.0.1.  Basically each line is saying to the browser, "this address is a local one, so check this machine for a response to that domain"

## /private/etc/apache2/httpd.conf

    <VirtualHost *:80>
      ServerName feelday.dev
      DocumentRoot "/Users/username/Sites/feelday/..."
      DirectoryIndex index.php
    </VirtualHost>

This establishes the response to the hosts directive.  With this XML block, we are creating a virtual host that tells apache where to find the files it needs to respond to the request.  The ServerName should match the domain in hosts, and the DocumentRoot and DirectoryIndex specify the files to use.

<hr>

Pretty simple stuff, but it makes a huge difference in my local dev environment. Now I can navigate to http://feelday.dev for my day to day work, and can still bump over to other local sites without any mess.  In fact, I'm going to put this into practice for all of my local sites, just because the address is cleaner and it keeps things tidy.