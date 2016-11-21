---
title: A good setup
date:   2016-11-21
categories: [dotfiles, terminal, vim]
tags: [dotfiles, terminal, vim]
---


Here I’ll cover what I believe is a __very__ solid terminal development setup. Is it the best? Most definitely not. With every additional month in my software development career my development environment continues to improve. I’ve no doubt my environment a year from now will be significantly better than it is now. I’ve just reached a point where I’m fairly comfortable saying I’ve arrived at a pretty productive, lightweight, and above all fun environment for my day to day development.

Disclaimer: I spend most of my day writing ruby and rails. If you’re writing mostly Java or C++, you’re likely spending a lot of your day in an IDE, and the terminal becomes distinctly less attractive.

### Hardware/OS

This is a guide on terminal setup, but you’ll need a UNIX-like environment to follow along. I do most of my development on a Macbook && iMac. OS X is a great environment for my style of development.

### iTerm2, not Terminal.app

If you’re coming from Windows, Terminal.app likely looks pretty sweet. Don’t be fooled. Grab iterm2 right away and don’t look back. The colors are better, the fonts look better, the settings are better. It is better.

### Brew

Brew is an OS X package manager and it is fantastic. Get it.

### Autojump

Are you still cding around everywhere? Welcome to the 21st century, grab yourself an autojump and take a seat. Autojump basically just manages a database of folders you’ve visited and lets you jump between them by just specifying part of the path.

So, instead of:


```
[~/]: cd path/to/my/project
[~/path/to/my/project]:
```
you can do:

```
[~/]: j project
[~/path/to/my/project]:
```
Much faster.

### Zsh

Time to talk shells. bash is great, but I’ve found zsh to be better. It has sexier prompts, better autocompletion, and awesome goodies like command syntax coloring.

Seriously, the tab completion alone elevates it far above bash. Add to that the ability to define wonderful prompts (with the help of oh-my-zsh), and vi-mode, and you’re already well on your way to having a kickass command line experience.

### Laptop

[laptop](https://github.com/thoughtbot/laptop) is a great tool to install if your coming off a fresh wipe or want to set up a brand new computer. For me, this sets up all my normal scripts, bash shell and Ruby and Rails envorioments.


### Dotfiles

[ThoughtBot](https://thoughtbot.com/tools#command-line-tools) Has some great tools for command line utilities. These have helped me organize my alias in a easy set up manor. Thoughtbot along with ZSH has totally made my terminal work a lot easier.

I have tweaked my setup so I can add more functionality to Thoughtbot's dotfiles: [My dotfiles](https://github.com/t0nylombardi/dotfiles)


### Atom

This is by far my highest recommended tool of this entire article. For years I've struggled with getting the write text editor. I needed something that was comfortable and flexible for my changing curiosity to programing languages. Since its made from Github, amount of plugins and hacks have been huge.  

Has Atom made me a better developer? No. But it has lowered the barriers to my text-editing experience. Atom really lowered the barrier from my brain to code on a screen.
