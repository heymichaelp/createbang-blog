---
layout: post
title: "Utilizing the <span class=\"select\">Git Flow</span> methodology"
date: 2012-08-17 17:33
comments: true
categories: 
---

I wanted to put up a quick post about how I've been using the Git Flow command line tool to streamline my committing process while developing [Feelday](http://feelday.com).

A while back, we made the switch from SVN to Git, which was a huge win for our workflow.  All of a sudden, branching was simple, quick, and effective.  None of us missed SVN once we made the switch, and all of us Git kids were pleased as punch to be using the VCS we know and love.

But with great freedom comes great responsibility, and branching can be a Pandora's Box of freedom if you don't know how to control it.

<!--more-->

A while back, my friend [Moudy Elkammash](http://moudy.me) introduced me to [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/), a strong methodology for controlling your branches.  It focuses on organization, consistency, and strength in a multi-developer environment.  

![Git Flow Diagram](http://nvie.com/img/2009/12/Screen-shot-2009-12-24-at-11.32.03.png)

As a companion to this workflow, there is a very handy [set of Git extensions](https://github.com/nvie/gitflow) you can find on Github that will help you work within the parameters of the methodology.  This gives you the `$ git flow` prefixed commands that will execute commands that are in keeping with Git Flow.

To create a new feature branch:

    $ git flow feature start new-feature
    $ # creates a branch called feature/new-feature
    $ # add some commits
    $ git flow feature finish new-feature

This will merge the `feature` branch into the `develop` branch and delete the `feature` branch for you, so you don't have a collection of outdated, unnecessary feature branches.

To create a new versioned release branch:

    $ git flow release start 0.7.2
    $ # creates a branch called release/0.7.2
    $ # do some QA, possibly commit small fixes, no feature work
    $ git flow release finish 0.7.2

This will merge the `release` branch both into your `master` branch as well as your `develop` branch, so any commits you made to your release branch are updated in develop and your master branch is good to go with the new version.  It will also delete the `release/0.7.2` branch since it is no longer needed.

On gotcha: if you are working with a remote repository, say on Github, you will not have repos that match the names of your release branches.  That is to say, your local branch `release/0.7.2` will not match up with a repository called `release/0.7.2` on Github, unless you're creating a repo for each release or you are renaming your release branch each time.  This means that the command:

    $ git push origin release

will not work, because you don't have a branch called `release` locally, and conversely you can't call:

    $ git push origin release/0.7.2

Because there's no branch called `release/0.7.2` on Github.  Ideally you'll have a `develop`, `release` and `master` branch for your remote repositories.  To get around this, adjust your `git push` call to specify the origin local branch name and the destination remote repo name as such:

    $ git push origin release/0.7.2:release

This will properly match and deploy your local release to remote.

The Git Flow extension suite has been an essential part of my day-to-day development toolkit, and the Git Flow methodology has proven stable and helpful in the development of our product.