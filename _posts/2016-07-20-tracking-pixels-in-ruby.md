---
title: Tracking Pixels in ruby
date:   2016-07-20 4:18pm
categories: [ruby]
tags: [ruby]
---


If you are sending out content to you customers, it pretty handy to know if they are opening them. If you have ever sent out an email newsletter from a service like Mailchimp, you would have seen email open graphs. Of course, tracking this stuff is super important for a campaign, but it would also be interesting to see if users are opening, for example, welcome emails or onboarding emails.

The simplest way to do this is via a tracking pixel – a small, invisible image that is loaded off your server every time the email is opened (See caveat below). This is fairly simple to achieve using Rails by building a simple Rack application.

Caveat
----
This only works for HTML emails (unless you can work out how to embed an image in a plain text email), and relies on the user having “Load images” turned on. Clearly, this isn’t super accurate, but it should give you a decent estimate.

The Setup
---
We’ll add two models: One to tracking sending email, and one to track opening of email:
