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
Now we can write the script that will be run. In my case, I am calling a `swaymsg output eDP-1 mode 3072x1920@120.002Hz` inside of a case statement to change my refresh rate
whenever my power supply is plugged in. When we were figuring this out, I was having an issue where the script was working for basic shell commands like writing ot a file but not executing bianries, this was because we were not caling the proper environment variables. You will need to find out what these are for different usecases.

```bash
#!/bin/bash

# This script is called by the udev rule /etc/udev/onpower.rules

export SWAYSOCK="/run/user/1000/$(/bin/ls /run/user/1000 | grep sway)"
export DISPLAY=:0

case $1 in 
    "connected")
    echo "connected :) @ $(date)" > /dev/shm/acstatus # write to a file letting us know if its connected for debugging.
    /usr/bin/swaymsg output eDP-1 mode 3072x1920@120.002Hz &>> /dev/shm/acstatus
    ;;
    "disconnected")
    echo "disconnected :( @ $(date)" > /dev/shm/acstatus # write to a file letting us know if its connected for debugging.
    /usr/bin/swaymsg output eDP-1 mode 3072x1920@60.000Hz &>> /dev/shm/acstatus
    ;;
    *)
    echo "unknown" > /dev/shm/acstatus
    /usr/bin/swaymsg output eDP-1 mode 3072x1920@60.000Hz &>> /dev/shm/acstatus
    ;;
esac

exit 0
```

With this script written, we can make it executable with `chmod 777 script.sh` or `chmod +x script.sh` and test it. If it works when running manually, we can test it using the udev rules. If not, we should go back and check for any errors in the script.

## Final Step: Reload the udev rules.
We can now finish up by reloading the udev rules with:
```bash
sudo udevadm control --reload-rules && sudo udevadm trigger
```
and finally plugging in the ac adapter!

With this, you should have a functioning udev rule that runs a shell script on AC power.
#### links
1. [udev on ArchWiki](https://wiki.archlinux.org/title/udev)
2. [superuser post](https://superuser.com/a/1426287)



--