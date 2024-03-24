---
layout: ../../layouts/MDPostLayout.astro
title: udev rules!
description: 'Run-through on how to make things happen using udev rules and bash scripts.'
author: aryan
image:
    url: 
    alt: ''
pubDate: 2024-03-24
tags: ["tutorial","linux"]
---

### pre-reqs and sysinfo:
Before we get started, this should be replicable on any system using Arch Linux but just in case here is
**my system:**
- Lenovo Slim 7 Pro X 14ARH7
- EndeavourOS
- Sway Window Manager

In my case, I made a udev rules file which checks if my laptop is connected to AC power and runs a script.

## Step 1. Check the conditions for your udev rule
First we start off in a terminal to find out what the computer sees when we plug and unplug the AC power adapter.
We can use the command:
```bash
sudo udevadm monitor --environment
``` 
Now if you plug in your power adapter, you should see some values change. Make sure to look at the **non-kernel values** as those are what udev looks at. 

## Step 2. Create a udev rule
We want to create a file in the `/udev` directory called `onpower.rules`(or whatever you want it to be!). This is where we will define the conditions that need to be met.
For my example of running a script to control refresh rate I had the following lines in my `onpower.rules` file:
```
SUSBSYSTEM=="power_supply", ENV{POWER_SUPPLY_ONLINE}=="1", RUN+="/usr/bin/sudo --user=ary /usr/local/bin/refresh1.sh connected"
SUSBSYSTEM=="power_supply", ENV{POWER_SUPPLY_ONLINE}=="0", RUN+="/usr/bin/sudo --user=ary /usr/local/bin/refresh1.sh disconnected"
```
The first line executes a script called refresh1.sh with the argument ***connected*** when a power supply is detected online, we want to run this with elevated privelges as the user in the case of refresh rate, you might need to change the permissions for your use case.

 The second line executes the same script with the argument ***disconnected*** when the power supply goes offline.

## Step 3: Write your script!


## Final Step: Reload the udev rules.
```bash
sudo udevadm control --reload-rules && sudo udevadm trigger
```

#### links
1. [udev on ArchWiki](https://wiki.archlinux.org/title/udev)
2. [superuser post](https://superuser.com/a/1426287)



--