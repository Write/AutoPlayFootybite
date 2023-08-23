# AutoPlayFootybite Project

# 📙 Introduction

AutoPlayFootybite.user.js is an Userscript (read below to know how to install, I promise, it's not hard !) which makes soccers streaming sites usable again.

- [🌟 Features](https://github.com/Write/AutoPlayFootybite#-features)  
- [⚙️ Usage and Installation](https://github.com/Write/AutoPlayFootybite#%EF%B8%8F-usage-and-installation)  
- [👍 Recommended aditionnal Addons & Userscripts](https://github.com/Write/AutoPlayFootybite#-recommended-aditionnal-addons--userscripts)  
- [👁️‍🗨️ How to Inspect Websites Myself ?](https://github.com/Write/AutoPlayFootybite#%EF%B8%8F%EF%B8%8F-how-to-inspect-websites-myself-)  

# 🌟 Features
- AutoPlay Feature
    - Autoplay - Without sound (Browser limitation), just have to set the volume up on load.
    - Works for Bitmovin, Clappr, VideoJS, HLS.js and Native HTML5 players.
- Footybite
    - (✨ new !) Now has a Dark & Light Mode which respect your host's current color-scheme.
    - No sidebar, and schedule list takes now full page's width.
    - All subsequents streaming sites are decluttered to remove popups and ads.
    - All subsequents streaming sites got all elements removed except the video for a clutter-free experience
- (✨ new !) Now support Live(.)sx
    - no design change on the main website.
    - No more 30 seconds ads.
    - Remove the (3x !) popups.
    - Popup takes full page width.
    - Majority of Streaming Links got their websites decluttered to remove popups and ads.
- (✨ new !) Now support Buffstreams that is sportshub(.)stream
    - no design change on the main website
    - All streaming links got their websites decluttered to remove popups and ads.
- AntiAntiRightClick
    - On some website that block right-clicks, the script AntiAntiRightClick is Enabled
- (✨ new !) Block shady javascript
    - Because they don't want to inspect their websites, they run obfuscated that that simply burns your CPU when you open the console or clear it.
        - *For now this work way better on Firefox though. Chrome MutationObserver API doesn't seems to intercept fast enough, unless one's do Ctrl+Shift+R*
    - Some example are blast.js, and some other obfuscated tools.
- (✨ new !) Block Tracking Websites
    - Block Histats and gtag by default, and many more. Those are usually already blocked if you use uBlock Origin though.
- Declutter every streaming websites added. This basically removes every useless sections around the video, including sidebar, comment section, etc.


# ⚙️ Usage and Installation
Install **one** Userscript Manager such as ViolentMonkey, TamperMonkey or [Userscripts for Safari](https://apps.apple.com/us/app/userscripts/id1463298887) (macOS and iOS support) (*Links below*)  
Then, simply click this link : [AutoplayFootybite.user.js](https://github.com/Write/AutoPlaySoccerStreams/blob/main/AutoplayFootybite.user.js)  
Your Userscript Manager will simply open a new windows, and you'll simply have to click on Install.  

## Userscripts Manager

### Platforms

##### Chrome
- [Download ViolentMonkey for Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)  
- [Download TamperMonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

##### Firefox
- [Download ViolentMonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)  
- [Download TamperMonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) 

#### Safari
- [Download Userscripts for Safari (iOS and macOS)](https://apps.apple.com/us/app/userscripts/id1463298887) (Free) ([Github link](https://github.com/quoid/userscripts))  

# 👍 Recommended aditionnal Addons & Userscripts

## Adblocker ([uBlock Origin](https://ublockorigin.com/))
The best adblock of them all, I named uBlock Origin.  
The only good AdBlocker out there, which preserve your privacy the most and doesn't even accept donations to avoid "corruption with money".  
Thanks you very much Raymond Hill !  

- [uBlock Origin for Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)  
- [uBlock Origin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)  

## Avoiding Popup (AdGuard's PopupBlocker)

This script is really far from perfect, to prevent most of the annoying popup when clicking anywhere  
I'd recommmend PopUpBlocker ([Github](https://github.com/AdguardTeam/PopupBlocker)) - ([Direct Link](https://popupblocker.adguard.com/popupblocker.user.js)), an amazing Userscript By AdGuard's Team.

## Bypass Page With a Wait Time ([FastForward](https://fastforward.team))
While this scripts contains a working solution to bypass some links, [FastForward](https://fastforward.team/install) is the recommended solution to bypass such link  fast and reliably.  
Unfortunately, FastForward was both removed from Chrome Store and Firefox Store, but they provide a .xpi files which doesn't requires you to download the developement version of Firefox ! Feel free to try it out here : https://fastforward.team/install  
~~[FastForward for Chrome](https://chrome.google.com/webstore/detail/fastforward/icallnadddjmdinamnolclfjanhfoafe)~~
~~[FastForward for Firefox](https://addons.mozilla.org/en-US/firefox/addon/fastforwardteam/)~~


# 👁️‍🗨️ How to Inspect Websites Myself ? 

## Iframe
- Firefox can easily bypass website's right-click limitations by pressing Shift while right-clicking on a player.  
- If the player is indeed in an iframe you can right-click, press This frame > Open in a new tab or inspect it to get it's real link.  
  - I'd recommend clicking first 'Inspect source code of this frame', because if you open it directly, **almost every time** it contains some js code to put you on an other URL, or makes your Browser freeze.   
