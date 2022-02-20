# AutoPlaySoccerStreams
AutoPlay, Remove Ads &amp; Annoying Stuff on the majority of Reddit SoccerStream's Streams.

This script also tries to remove the automatic redirection when you open the Stream's iframe in a new window by using MutationObserver's API and replacing the website JS code.

Firefox can easily bypass website's right-click limitations by pressing Shift while right-clicking on the player.
If the player is indeed in an iframe you can right-click, press This frame > Open in a new tab.

# How to install / use
Install an userscript manager such as ViolentMonkey or TamperMonkey  
  
Click on [Autoplay.user.js](https://github.com/Write/AutoPlaySoccerStreams/blob/main/Autoplay.user.js) > [Raw](https://github.com/Write/AutoPlaySoccerStreams/raw/main/Autoplay.user.js) and it'll be detected as a script by your userscript manager, then click install.  

# Userscripts Manager Links

### ViolentMonkey Download
[Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
[Firefox](https://addons.mozilla.org/fr/firefox/addon/violentmonkey/)

### TamperMonkey Download
[Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
[Firefox](https://addons.mozilla.org/us/firefox/addon/tampermonkey/)

# Activate AutoPlay with Sound
By default, Web browser doesn't allow to Autoplay with Sound.
You'll have to allow each website's to AutoPlay with sound otherwise the script will mute the video and play it.

### Enable AutoPlay with Sound In Firefox
Once on a website with a video, you have to manually allow Sound & Video for AutoPlay as shown in the picture below. You can revert it at any time.  
![image](https://user-images.githubusercontent.com/541722/154857139-a88799ad-b37c-48fe-8da6-ebead0935a26.png)

### Recommended aditionnal userscripts
This script is really far from perfect, to prevent most of the annoying popup when clicking anywhere  
I'd recommmend PopUpBlocker ([Github](https://github.com/AdguardTeam/PopupBlocker)) - ([Direct Link](https://popupblocker.adguard.com/popupblocker.user.js)), an amazing Userscript By AdGuard's Team.
