---
layout: post
title: "Late September and Beyond"
categories: [programming]
tags: [blogging, sd, card, reformat, disk, volume]
excerpt_separator: <!--more-->
---

Yesterday I learned how to reformat an SD card via command line.
This was out of necessity and the terminal commands are a little scary.
I'll not be doing this again anytime soon, but it's worth talking about as I had to use guides to infer how to actually do it.

<!--more-->

## Background

So yesterday on the bus, my Nintendo 3DS (commute toy) flew out of my hands from a crazy braking job by the bus driver and the impact and torsion of spinning in the air was great enough to unmount my game catridge holding my copy of Dragon Quest 4. This worried me as the game froze up. It was saving fine and looked like the cardtridge (a solid state chip that saves on the disk itself).

I noticed on the home screen most of my preferences (backgrounds and folder structure) was not being loaded properly.
I attempted to reset the device and nothing. Once I got home I attempted to troubleshoot with the usual steps, reinsert the drive, soft repair the drive, look on an analysis in the osx disk utilities application. I used the SD Card Formatter app to attempt to reformat it (data being backed up of course). This is when I learned of the true issue.

## How I fixed it

Finally I learned that the problem with with the MBR (master boot record). This was not informative in the Disk Utility tool, but the error was visible in the SD Card Formatter app. To put it simply the MBR had be corrupted and needed to be reformatted. I scanned online for a dangerous and powerful tool to use to reformat or attempt to repair it and came across documentation for `diskutil`.

## Diskutil command structure

There is no help for diskutil, but there is a descriptive man page is you'd like to know more information about it.

`man diskutil`

Here I'm adding a code chunk in bash with comments interspersed as using markdown and new lines is a bit tedious. Just for references I've added the tag `<path>` to designate where the paths to the disk should be inserted. These paths are visible with the `diskutil list` command. They are the headerline of the disk section and in OSX have this format: `/dev/diskX`, X being replaced with a respective number. `NEW_NAME` is a placeholder for what you are calling it, just be sure to use the escape character for spaces. `FORMAT` comes in three flavors `APM[Format]`, `MBR[Format]`, `GPT[Format]`, If your looking for the OSX journaled format it is: `JHFS+`.


```bash
# man pages, a great explanatory resource
man diskutil

# lists all disks and their respective volumes.
diskutil list

# first line of defense
# reformat: attempts to use the same settings as prior, doesn't work in MBR is damaged
diskutil reformat <path>

# repairDisk: assumes you want a OSX compatible disk. So don't use this unless your using an EFI or OSX Journaled format
diskutil repairDisk <path>

# verifyVolume: happens under the hood on most other commands, but allows you to check if the format is correct
diskutil verifyVolume <path>

# eraseDisk and eraseVolume both require a working format but this is probably the commands to start with
diskutil eraseDisk NEW_NAME FORMAT <path>
diskutil eraseVolume FORMAT NEW_NAME <path>

# zeroDisk essentially writes zeros into the medium, the disk needs to be reformatted again with the format
diskutil zeroDisk [force] <path>

# like zeroDisk, but writes random code, enter a the number of passes on the drive to randomly write
diskutil randomDisk <number of passes> <path>

# secureErase, again you'll need to reformat the disk with the format desired
diskutil secureErase <0-4 a security level, 0 being least secure> <path>

```

Ultimately I just used `diskutil zeroDisk` to clear the disk and reformat it. It however doesn't affect the BIOS of the card and also it seems like even though the tool said that it zero'd everything, the BIOS seems irreparably damaged and the changes although accepted did not write properly. Going to look to see about another fix today. The BIOS doesn't seem like it's a problem I can resolve, the damage isn't repairable via the command line or the GUI tools. I don't know enough about the silicone to actually know if it's a fixable solution.


## Sources

- [most helpful one](https://www.amsys.co.uk/disk-utility-tip-fix-couldnt-unmount-disk-errors/)
- [the post that got me thinking](http://learningthings.info/index.php/2016/06/24/learning-to-format-a-sd-card-as-fat32-using-mac-command-line/)
- [short and simple start](https://www.michaelcrump.net/the-magical-command-to-get-sdcard-formatted-for-fat32/)