---
title: Shawarma Sheriff Discord Bot! A 24-hour Hackathon Project.
description: We created a discord bot with leaderboard and point tracking functionality in 24 hours!
author: aryan
image:
  url: ""
  alt: ""
pubDate: 2023-11-21
draft: false
tags:
  - projects
  - hackathon
---

# Creating a discord bot in 24 hours

Hacked Beta 2023 was my first ever hackathon. A group of friends and I went into this hackathon without expectations or preparation and it was a fantastic event. Starting in the morning, we needed to make a decision, create a project that would be <a href="/projects/pill-tracker">useful</a> or create something for fun. We chose the latter. Our team embarked on a journey to create a fun and engaging clicker game within Discord, where users can immerse themselves in the world of donairs and embark on heists and competitive adventures to become the top shwarma holder.

## What it does:

With this bot, users can collect virtual donairs, build their empire, and compete with friends to become the ultimate donair tycoon. If you've ever used the <a href="https://virtualfisher.com/">virtual fisher</a> bot, it was our inspiration as we were in a bit of an addicted phase with that game. 

Our basic plan for the game was:
- Have a random hunting for donair system
- Donair rarity
- selling collected donairs for money

We covered these basics while also changing them throughout the project's 24 hour development period. Images at the bottom!

## How we built it:

I was on a team of 5 people for this hackathon, initially we had no idea how to even start a project as we had not done any programming practice over the summer(with the event being in November, only one of our members had a programming class.)

We decided to work with python as it is a powerful but simple language and we all had prior experience with it. In hindsight, JavaScript may have been the better choice as the discord documentation is specifically tailored for it.  Anyways, we started with a basic power scaling system for donairs and got to work learning how to make a discord bot through the <a href="https://discordpy.readthedocs.io/en/stable/">discord.py</a> documentation. 

## Additional Features:

Despite the challenges we faced, we're proud to have successfully integrated a robbery system into the game, allowing users to embark on daring heists and test their skills against others. Developing the robbery system wasn't just about adding content. It was a valuable learning experience for our team as it allowed us to delve deeper into the API through direct messaging players, keeping track of user data, and ensuring a balanced game. 

## My role:

My role in this project in the beginning was getting our working environment set up as well as the configuration for the bot through discord's developer portal.

For project setup, I had one of our team members set up a git repository while I created the API key and clientID for the bot through the dev portal. Although I would not consider myself an expert on git, I wanted to use this tool so we could all work on different portions of the project and coordinate features. 

During this project, I took initiative in teaching my fellow teammates the basics of version control through git and github where this project is <a href="https://github.com/dumplingggg/hackedbeta">hosted</a>. 

## Challenges:
While developing the bot, we encountered various challenges, with one of the most significant hurdles being our own ambition. We stared the hackathon with the idea to make a text-based game but halfway into the night, we started getting carried away in our excitement and began developing a user-interface for the bot. This UI would mimic that of virtual fisher and have elements from discord's regular UI so as not to disrupt the design language of the system.

While everything else went well, we struggled with the implementation of the embed button. Ensuring its functionality and  integration with the platform required patience, perseverance, and a lot of trial and error.

## Conclusion:
This was overall a fantastic experience for our first hackathon. By combining our love for donairs with our coding mediocrity, we were able to create a unique and enjoyable experience for our personal server as well as receive some laughs from the judges for a fun idea. 

I would highly recommend anyone to experiment with creating basic discord bots whether it be a game, for moderation, or just for fun.

### Images
<div style="display:flex; flex-wrap: wrap;" >
  <img src="/images/blog/shawarma-sheriff/heist.png" style="align-self:center" width="400">
    <img src="/images/blog/shawarma-sheriff/rummage.png" style="align-self:center" width="400">
  <img src="/images/blog/shawarma-sheriff/Roll.png" style="align-self:center" width="400">
  <img src="/images/blog/shawarma-sheriff/stats.png" style="align-self:center" width="400">
</div>

#### links
1. [useful project](https://pyarya.pages.dev/projects/pill-tracker)
2. [virtual fisher](https://virtualfisher.com/)
3. [discord.py](https://discordpy.readthedocs.io/en/stable/)
4. [shwarma sheriff github repo](https://github.com/dumplingggg/hackedbeta)