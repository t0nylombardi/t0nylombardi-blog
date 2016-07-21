---
title: Tracking Pixels in ruby
date:   2016-07-20 4:18pm
categories: [ruby]
tags: [ruby]
---


If you are sending out content to your customers, it pretty handy to know if the content is loading. I speak if you are sending out emails, newsletters, ads, etc.  If you have ever sent out an email newsletter from a service like Mailchimp, you would have seen email open graphs. Of course, tracking this stuff is super important for a campaign, but it would also be interesting to see if users are seeing your content.

The simplest way to do this is via a tracking pixel – a small, invisible image that is loaded from your server every time your medium is opened. This is fairly simple to achieve using Rails by building a simple Rack application.

The idea
---
Picture you are creating ads for clients and you are sending them out to ad shops. If you are using a program like Google Doubleclick. Google DoubleClick allows you to track your ad through a pixel tracking url.  This data can be gathered to figure out trends when those ads, emails, or newletters are being opened.  

The Setup
---
We’ll add one model: One to tracking pixels:

`rails generate model pixel ip_address, campaign, station, created_at:date ,city, state, user_agent, referral, banner_size`

All of these fields are strings except for created_at so by default they are created as strings. 

```ruby

```
