# AutoPlaySoccerStreams
AutoPlay, Remove Ads &amp; Annoying Stuff on the majority of Reddit SoccerStream's Streams.
Now included : TinyURL bypass !   
  
The script try to detect and Autoplay Players such as : Bitmovin, Clappr, VideoJS, HLS.js and Native HTML5.  
It autoplay & unmute (require additional steps as shown below) the video.  

It also tries to remove automatically the redirection when you open the Stream's iframe in a new window by using MutationObserver's API and replacing the website JS code. Firefox can easily bypass website's right-click limitations by pressing Shift while right-clicking on the player.
If the player is indeed in an iframe you can right-click, press This frame > Open in a new tab.


# How to install / use
Install an userscript manager such as ViolentMonkey, TamperMonkey or Macaque (iOS)  
Click on [Autoplay.user.js](https://github.com/Write/AutoPlaySoccerStreams/blob/main/Autoplay.user.js) > [Raw](https://github.com/Write/AutoPlaySoccerStreams/raw/main/Autoplay.user.js) and it'll be detected as a script by your userscript manager, then click install.  

# Userscripts Manager Links

### ViolentMonkey Download  
[Download ViolentMonkey for Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)  
[Download ViolentMonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)  
  
### TamperMonkey Download  
[Download TamperMonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
[Download TamperMonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)  
[Download TamperMonkey for Safari (Paid)](https://apps.apple.com/app/apple-store/id1482490089)  

### Macaque
[Download Macaque for Safari (iOS and macOS) (Free and Open Source)](https://apps.apple.com/us/app/userscripts/id1463298887)   
([Github link](https://github.com/quoid/userscripts))  
[Download Macaque for Safari (iOS) (Paid)](https://macaque.app/)    
  
# Activate AutoPlay with Sound
By default, Web browser doesn't allow to Autoplay with Sound.
You'll have to allow each website's to AutoPlay with sound otherwise the script will mute the video and play it.

### Enable AutoPlay with Sound In Firefox
Once on a website with a video, you have to manually allow Sound & Video for AutoPlay as shown in the picture below. You can revert it at any time.  
![image](https://user-images.githubusercontent.com/541722/154857139-a88799ad-b37c-48fe-8da6-ebead0935a26.png)

# Recommended aditionnal userscripts
This script is really far from perfect, to prevent most of the annoying popup when clicking anywhere  
I'd recommmend PopUpBlocker ([Github](https://github.com/AdguardTeam/PopupBlocker)) - ([Direct Link](https://popupblocker.adguard.com/popupblocker.user.js)), an amazing Userscript By AdGuard's Team.

# Recommended aditionnal Addons
While this scripts contains a working solution to bypass TinyURL, [FastForward](https://fastforward.team/install) is the recommended solution to bypass such link  fast and reliably.  
  
[FastForward for Chrome](https://chrome.google.com/webstore/detail/fastforward/icallnadddjmdinamnolclfjanhfoafe)  
[FastForward for Firefox](https://addons.mozilla.org/en-US/firefox/addon/fastforwardteam/)  


And of course use uBlock Origin, the only good AdBlocker out there, which preserve your privacy the most.  
[uBlock Origin for Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
[uBlock Origin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
