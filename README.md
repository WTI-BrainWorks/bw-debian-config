Debian config for BrainWorks machine resources.

Assumes use of xfce, pulseaudio, lightdm, firefox-esr, vscode...

Things to handle (essentially all the configs & helpers in autoinstall project):
 - backgrounds (& script to customize for given hostname)
 - go_fast, go_slow, other root management things in /usr/sbin/
 - PTB config files
 - gamemode.ini
 - xfce kioskrc
 - lightdm gtk greeter settings
 - conf file to run go_fast/slow in /etc/lightdm/lightdm.conf.d/
 - Helper to set color profile for a given display
 - Helper to mount/unmount S@Y drive (but check if we can get it done natively first)
 - Helper to set the xorg.conf such that we can be robust against DisplayPort remapping?
 - Disable module-suspend-on-idle in /etc/pulse/default.pa, or set to large timeout value.
   According to the docs https://www.freedesktop.org/wiki/Software/PulseAudio/Documentation/User/Modules/#module-suspend-on-idle, only good for power savings
 - script to set background of secondary xscreen
 - Firefox-esr settings
 - vscode settings
 - Mallory-Light font

links:
 - https://wiki.debian.org/ConfigPackages.
 - https://bugs.launchpad.net/ubuntu/+source/linux/+bug/2051342
 - https://ubuntu.com/blog/industrial-embedded-systems-ii
 


# (original readme) debian-live-config

![](https://gitlab.com/nodiscc/debian-live-config/badges/master/pipeline.svg)

[Debian GNU/Linux](https://www.debian.org/) desktop operating system for personal computers & workstations.

![](https://gitlab.com/nodiscc/toolbox/-/raw/master/DOC/SCREENSHOTS/debian-live-config-4.0.0-main.png)

## Features

- Ready-to-use operating system for personal computers/workstations
- Preinstalled, preconfigured software for common tasks (office, multimedia, network...)
- Good out-of-the-box experience with a focus on usability
- Installation time < 10 minutes, without Internet access
- Able to run [live](https://en.wikipedia.org/wiki/Live_USB) from USB drive (no installation required)
- Fits on a 2GB USB drive
- Only uses official Debian [stable](https://wiki.debian.org/DebianStable) + [backports](https://wiki.debian.org/Backports) packages and as few third-party components as possible
- Reliable, low maintenance
- Lightweight/low resource usage, good performance on low-end or recycled hardware
- Proprietary drivers/firmware for good compatibility with recent hardware

This repository contains the `live-build` configuration and scripts used to build a custom Debian ISO image. See [Building a custom Debian ISO image](doc/md/custom.md).


## Download

**[![](doc/md/download.png) Download .ISO image](https://github.com/nodiscc/debian-live-config/releases/download/4.1.0/debian-live-config-4.1.0-debian-bookworm-amd64.iso)** (64-bit)


## Documentation

- [Download and installation](doc/md/download-and-installation.md)
- [Usage](doc/md/usage.md)
- [Software: Utility](doc/md/packages/utility.md)
- [Software: Internet and network](doc/md/packages/network.md)
- [Software: Audio and video](doc/md/packages/audio-video.md)
- [Software: Office](doc/md/packages/office.md)
- [Software: Graphics](doc/md/packages/graphics.md)
- [Software: System](doc/md/packages/system.md)
- [Software: Development](doc/md/packages/development.md)
- [Software: Games](doc/md/packages/games.md)
- [Software: Extras](doc/md/packages/extras.md)
- [Changelog](CHANGELOG.md)


## Screenshots

![](https://gitlab.com/nodiscc/toolbox/-/raw/master/DOC/SCREENSHOTS/debian-live-config-4.0.0-main.png)

![](https://gitlab.com/nodiscc/toolbox/-/raw/master/DOC/SCREENSHOTS/debian-live-config-4.0.0-windows.png)


## Source code

- [Gitlab](https://gitlab.com/nodiscc/debian-live-config) (mirror)
- [Github](https://github.com/nodiscc/debian-live-config) (mirror)


## License

[LICENSE](LICENSE)

