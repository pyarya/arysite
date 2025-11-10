---
title: encryption adventure!
description: my notes while on an *attempted* fool's errand
author: aryan        
image:
  url: ""
  alt: ""
pubDate: 2025-11-09T12:00:00-07:00
draft: false
highlight: true
tags:
  - project
  - tutorial
---
# encryption problem

My friend is making a little personal project and he was practicing some encryption stuff for fun, he's using a raspberry pi zero 2w and he asked me to try to find a way onto it. It sounds like a fun challenge so I took him up, lol.

## filesystem
First thing I did was take the sd card out and plug into my laptop, duhh~!

Scouring through and skimming the filesystem I found some funny stuff:
1. He has a gocryptfs_pass.sh in `/rootfs/usr/local/bin/`
	- This looks like something for encrypting/decrypting the filesystem? Looks like he is using a "SALT" idk what that is, combined with the info from `/proc/cpuinfo`.
	- He uses this to generate a sha-256 hash that i assume is the key for decrypting the filesystem

I looked through the filesystem some more, I was able to check journalctl logs, note for bro... you should probably encrypt literally everything.

I couldn't see much from logs on hints for encryption but it did have some details on what was happening before, not really useful for me.

There is a directory named, "encrypted" right away in `/rootfs`... clever ...
The tree looks like this:
```sh
/rootfs
	...
	encrypted/
		pi.gocryptfs/
			...
			(lots of files, can assume this is all of the data)
	...
```

## gocryptfs
First thing I did was look up "gocryptfs", because surely the tool he used to encrypt the directory wouldnt be the same right? wrong... might wanna change that in future. I spent some time messing around with gocryptfs and how it works, it's pretty cool.

In the `pi.gocryptfs/` directory, there's a gocryptfs.conf file for decrypting the password for the directory, without it you'd need a master password. This was in the encrypted files as well, I would have deleted this so you could only use the master password to unlock the files.

Going back to gocryptfs_pass.sh, looks like the password is definitely here.. mostly guessing because the word "pass" is in the title LOL. Just need to get the pi to boot and then write the cpuinfo shit to a text file. ezpz, systemd service on boot im thinking.

## rc.local leftovers
I also looked at `/etc/rc.local` and I found some remnants...

```sh
# Print the IP address
_IP=$(hostname -I) || true
if [ "$_IP" ]; then
  printf "My IP address is %s\n" "$_IP"
fi

/usr/bin/bluetoothctl power on
python3 /home/pi/cputemp/cputemp.py &
exit 0
```

big guy's doing the same thing, definitely on the right track now!

Wait... is he doing the same thing? is cputemp the temperature or temporary info! its running on boot so I'm guessing it's decrypting with the temp info on boot.

nevertheless, I will add a cheeky line:

`cat /proc/cpuinfo > /boot/cpuinfo.txt`

this wouldve been harder if I couldnt read the rootfs directory

not sure how long this thing takes to boot, so gonna give it a bit

i think im on the right track. Kinda stuck because it doesnt look like my neat trick worked, so I am going to verify it actually boots.

Once I write/access a copy of `/proc/cpuinfo` then I should be able to access the encrypted directory using the `gocryptfs_pass.sh` script that was kindly avialable in `usr/bin/local/` for me ;)

If this does not work, I have access to the entire filesystem so I can always add a systemd service that waits until the decryption runs to copy the directory once the pi boots. Or a python script, really anything works.

Some stuff you can do is probably just to compile the main program into a binary since encryption doesnt really work if the attacker (me) has the key.

### open source!
We talked about my process after and the options are really to either epoxy the whole pi or just compile a binary... It seems security is an uphill battle and the best thing to do is make your software open source!

#### links
1. [gocryptfs](https://github.com/rfjakob/gocryptfs)
