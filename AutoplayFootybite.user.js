// ==UserScript==
// @version     15.3.1
// @author      Write
// @name        AutoplayFootybite
// @namespace   Autoplay Block Ads Footybite
// @description AutoPlay and Block ads on Reddit Soccerstream's streams
//
// @updateURL   https://github.com/Write/AutoPlaySoccerStreams/raw/main/AutoplayFootybite.user.js
// @downloadURL https://github.com/Write/AutoPlaySoccerStreams/raw/main/AutoplayFootybite.user.js
// @homepageURL https://github.com/Write/AutoPlaySoccerStreams
//
// @icon        data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAACgZAAAoGQAJKBgASicXAKMoFwDdKBgA+CgYAPgnFwDdJxcAoygYAEooGQAJKBkAAAAAAAAAAAAAAAAAACgZAAAoGQAaKBgAkCgaA+stLRz/M0E4/zVHQP81R0D/NEQ8/y0tHP8oGgPrKBgAkCgZABooGQAAAAAAACgZAAAoGQAbKBgAriojD/05WFn/QG12/zI8Mf8uLh7/Li8f/z9sdP9Hh5r/OVhY/ysjD/0oGACuKBkAGygZAAAoGQAIKBgAkCsjD/4+a3L/TJq0/zxiZ/8oGAH/KBgA/ycXAP8zQzz/S5Wu/0qTqv88ZWr/KyQP/igYAJAoGQAIKBgASigbA+o4U1H/RoSW/0aFl/85WVn/KBoE/ygXAP8nGAD/NEdB/zpbXP8zPzb/NUhC/zZLRv8pGwTqKBgASicXAKIuLh3/N1FO/y0qGP8sKBX/NUhB/zdQTf81Rj//OFVU/zhVVP8pHgj/JxcA/ygbBP82Tkr/Li8e/ycXAKIoFwDcM0E4/zE5Lv8nFwD/KBgA/yogC/9CeIT/TJiy/0yZtP87YGT/KBoB/ygZAP8nFwD/MTku/zNBOP8oFwDcKBgA+DVHQP8uLh7/KBcA/ygXAP8sJxX/RoOV/0yatf9MmrX/RoWX/y4wIP8oGQD/Kh8J/zpZWv84U1H/JxcA+ScXAPg4UE7/Oltc/ywpFv8sJxP/Nk9M/0iLoP9MmrX/TJq0/0aFl/86WFj/NkxI/z5ob/9Llq//OlhY/ycXAPknFwDcNUdA/0uVrf9Ff4//Olla/zE7MP8yPjX/RHuJ/0aDlP8xOSz/Kh8I/y8zJP9CeIX/TJix/zVHQP8nFwDcJxcAoi0tG/9HiJr/R4qe/y4vIP8oFwD/JxcA/zA2Kf84UU7/KBkB/ygZAP8nFwD/M0I6/0WAkP8uLRz/JxcAoigYAEooGgLqOlla/z9veP8pHQb/KBkA/ygYAP8sKRn/N09M/ygaAv8oGAD/KBgA/zI8Mf83UEz/KBsD6igYAEooGQAIKBgAkCskEP44VVP/MTou/ykbBP8oGQL/NUlD/0R/j/80R0D/KiEK/zE5Lf83Uk//KyQQ/igYAJAoGQAIKBkAACgZABooFwCtKyQQ/TZMR/82TEj/OFJP/0mNo/9Nm7b/SY6k/z1kav82Skb/KyQR/SgYAK0oGQAaKBkAAAAAAAAoGQAAKBkAGigYAJAoHAXrLi4d/zVHQf86WFj/OVdX/zVHQf8uLx//KRsE6ygYAJAoGQAaKBkAAAAAAAAAAAAAAAAAACgZAAAoGQAJKBgASSgXAKInFwDdJxcA+CcXAPgnFwDdJxcAoygYAEkoGQAJKBkAAAAAAAAAAAAA4AcAAMADAACAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAADAAwAA4AcAAA==
// @run-at      document-start
//
// @include     *://*soccerlive.app/*
// @include     *://*.footybite.to/*
// @include     *://footybite.to/*
// @include     *://footybite.cc/*
// @include     *://*.footybite.cc/*
// @include     *://*livetv.sx/*
// @include     *://tinyurl.is/*
// @include     *://tinyurl.so/*
// @include     *://cutin.it/*
// @include     *://hockeyweb.site/*
// @include     *://hockeyweb.live/*
// @include     *://sportson.site/*
// @include     *://givemenbastreams.com/*
// @include     *://uhdstreams.club/*
// @include     *://mygoodstream.pw/*
// @include     *://1stream.top/*
// @include     *://1stream.soccer/*
// @include     *://redditsport.live/*
// @include     *://uhdstreams.club/*
// @include     *://bdnewszh.com/*
// @include     *://*.bdnewszh.com/*
// @include     *://www.bdnewszh.com/*
// @include     *://thecyclingentertainment.com/*
// @include     *://motornews.live/*
// @include     *://scoresunday.com/*
// @include     *://sportinglive.co/*
// @include     *://rsoccerstreams.com*/
// @include     *://*.rsoccerstreams.com/*
// @include     *://techoreels.com/*
// @include     *://techclips.net/*
// @include     *://myoplay.club/*
// @include     *://www.tutele.sx/*
// @include     *://*.tutele.sx/*
// @include     *://www.tutele.nl/*
// @include     *://*.tutele.nl/*
// @include     *://fabtech.work/*
// @include     *://techstribes.com/*
// @include     *://elixx.xyz/*
// @include     *://sportsnest.co/*
// @include     *://papahd.club/*
// @include     *://3papahd3.icu/*
// @include     *://papahd.co/*
// @include     *://papa4k.online/*
// @include     *://papafoot.click/*
// @include     *://f1gplive.xyz/*
// @include     *://hinhnenhd.info/*
// @include     *://gamerarcades.com/*
// @include     *://poscitech.com/*
// @include     *://*.poscitech.com/*
// @include     *://*poscitech.org/*
// @include     *://*poscitech.click/*
// @include     *://*poscitechs.org/*
// @include     *://*poscihd.com/*
// @include     *://*specialgame.xyz/*
// @include     *://nizarstream.com/*
// @include     *://*.nizarstream.com/*
// @include     *://www.techstips.live/*
// @include     *://techstips.live/*
// @include     *://player.licenses4.me/*
// @include     *://bestnhl.com/*
// @include     *://jmutech.xyz/*
// @include     *://theanh.tech/*
// @include     *://sportsonline.to/*
// @include     *://*.sportsonline.to/*
// @include     *://npstream.net/*
// @include     *://*.npstream.net/*
// @include     *://wigistream.to/embed/*
// @include     *://swarm.video/*
// @include     *://*.streamservice443.net/*
// @include     *://streamservice443.net/*
// @include     *://ragnaru.net/*
// @include     *://nowlive.pro/*
// @include     *://timesports.cc/*
// @include     *://blacktiesports.net/*
// @include     *://blacktiesports.to/*
// @include     *://torridplay.com/*
// @include     *://assia4.com/*
// @include     *://foxgame.xyz/*
// @include     *://sportslandnews.com/*
// @include     *://nflscoop.net/*
// @include     *://aas.works/*
// @include     *://includetime.co/*
// @include     *://www.pawastreams.live/*
// @include     *://tezgoal.com/*
// @include     *://dzeko11.net/*
// @include     *://streamsoccers.com/*
// @include     *://streamhd247.online/*
// @include     *://streamhd247.info/*
// @include     *://stakes100.xyz/*
// @include     *://youpit.xyz/*
// @include     *://youpits.xyz/*
// @include     *://60fps.xyz/*
// @include     *://*buzter.xyz/*
// @include     *://silverspoon.site/*
// @include     *://p2pstreams.live/*
// @include     *://xestreams.com/*
// @include     *://nflsportz.com/*
// @include     *://tvtoss.club/*
// @include     *://bingsport.xyz/*
// @include     *://soccer4u.club/*
// @include     *://player.bizzstreams2u.xyz/*
// @include     *://worldsport.me/*
// @include     *://*.worldsport.me/*
// @include     *://nowlive.pro/*
// @include     *://bhliga.com/*
// @include     *://*.bhliga.com/*
// @include     *://*.gameavenue.co/*
// @include     *://gameavenue.co/*
// @include     *://nflbite.to/*
// @include     *://*.nflbite.to/*
// @include     *://*.catchystream.com/*
// @include     *://catchystream.com/*
// @include     *://*.fordems.live/*
// @include     *://fordems.live/*
// @include     *://*.sportsgala.xyz/*
// @include     *://sportsgala.xyz/*
// @include     *://dynamicrevival.net/*
// @include     *://*.dynamicrevival.net/*
// @include     *://sportsonline.sx/*
// @include     *://*.sportsonline.sx/*
// @include     *://supercast2.com/*
// @include     *://s1os.icu/*
// @include     *://wikisport.click/*
// @include     *://b4ucast.com/*
// @include     *://www.nolive.me/*
// @include     *://enjoy4hd.site/*
// @include     *://enjoyhd.club/*
// @include     *://em.bedsport.live/*
// @include     *://*.bedsport.live/*
// @include     *://*footballstreams.top/*
// @include     *://*f1streams.pro/*
// @include     *://*nfllivestream.top/*
// @include     *://*yehfullhd.live/*
// @include     *://*nbabite.to/*
// @include     *://*olahdplay.xyz/*
// @include     *://*bhqwplay.xyz/*
// @include     *://*totalsportek.soccer/*
// @include     *://*sportschamp.fun/*
// @include     *://*alexsportz.online/*
// @include     *://*gamerarcades.com/*
// @include     *://*bestreamsports.org/*
// @include     *://*sportsonline.sx/*
// @include     *://*nbalivestream.top/*
// @include     *://*embed4u.xyz/*
// @include     *://*f1livestream.top/*
// @include     *://*bigeventz.xyz/*
// @include     *://*hdfungames.site/*
// @include     *://*p2pstreams.tv/*
// @include     *://*stsgmrs.com/*
// @include     *://*hdfungames/*
// @include     *://*wecast.to/*
// @include     *://*voodc.com/*
// @include     *://*sports-stream.click/*
// @include     *://*hugecasting.com/*
// @include     *://*sharecast.ws/*
// @include     *://*brelif.net/*
// @include     *://*playstream.site/*
// @include     *://*lovesomecommunity.com/*
// @include     *://*hxekha.cucxt.live/*
// @include     *://*soccermlbstream.xyz/*
// @include     *://*hdfungames.site/*
// @include     *://*nowagoal2.xyz/*
// @include     *://*superwebplay.xyz/*
// @include     *://superwebplay.xyz/*
// @include     *://*techydeals.us/*
// @include     *://*wevgames.com/*
// @include     *://*daddylivehd.sx/*
// @include     *://*daddylivehd.click/*
// @include     *://*daddylivehd.online/*
// @include     *://*qwebplay.xyz/*
// @include     *://*tonnestreamz.xyz/*
// @include     *://*bein-sports.online/*
// @include     *://cr7soccer.club/*
// @include     *://*sjumbotvs.me/*
// @include     *://*hesgoals.top/*
// @include     *://*dubznetwork.com/*
// @include     *://*sportsleading.online/*
// @include     *://*sportsbearer.top/*
// @include     *://*freesport.info/*
// @include     *://*games47.xyz/*
// @include     *://*olympicology.com/*
// @include     *://*bikesports.live/*
// @include     *://*sportswatcher.buzz/*
// @include     *://*realbitsport.com/*
// @include     *://*livetv695.me/*
// @include     *://*livetv696.me/*
// @include     *://*livetv6*.me/*
// @include     *://*voodc.com/*
// @include     *://*primasport.one/*
// @include     *://*wecast.to/*
// @include     *://*ustream.pro/*
// @include     *://*maxiplay.xyz/*
// @include     *://*lato.sx/*
// @include     *://*futbolandres.xyz/*
// @include     *://*livetvstream.pro/*
// @include     *://*abolishstand.net/*
// @include     *://*sportea.online/*
// @include     *://*sportcast.fun/*
// @include     *://*embedstream.me/*
// @include     *://*wecast4k.xyz/*
// @include     *://*rivofutboltv.club/*
// @include     *://*dviraly.uk/*
// @include     *://*livesportstream.club/*
// @include     *://*backfirstwo.site/*
// @include     *://*freehdgames.xyz/*
// @include     *://*ddolahdplay.xyz/*
// @include     *://*bestsolaris.com/*
// @include     *://*1stream.eu/*
// @include     *://*chelsealivestream.com/*
// @include     *://*reddit-soccerstreams.com/*
// @include     *://*groundedtechs.com/*
// @include     *://*thegentleclass.com/*
// @include     *://*onloop.pro/*
// @include     *://*givemevibes.top/*
// @include     *://*buddylive.xyz/*
// @include     *://*backfirstwo.com/*
// @include     *://*buzter.xyz/*
// @include     *://*hufoot.com/*
// @include     *://*weblivehdplay.ru/*
// @include     *://*freesportstime.com/*
// @include     *://*streamocean.online/*
// @include     *://*ronaldo7.pro/*
// @include     *://*hdfungamezz.xyz/*
// @include     *://*hitsports.pro/*
// @include     *://*fastreams.com/*
// @include     *://*vladrustov.sx/*
// @include     *://*epllive.net/*
// @include     *://*adisports.xyz/*
// @include     *://dlhd.sx/*
// @include     *://masterpro.club/*
// @include     *://*xsportbox.com/*
// @include     *://*apl284.me/*
// @include     *://*apl272.me/*
// @include     *://*apl*.me/*
// @include     *://*wwwstream.pro/*
// @include     *://*aliezstream1.pro/*
// @include     *://*elgoles.pro/*
// @include     *://*gameshdlive.net/*
// @include     *://*liveon.sx/*
// @include     *://*soccerstream100.co/*
// @include     *://*kingstreamz.lol/*
// @include     *://*extremosports.club/*
// @include     *://*freetvsports.com/*
// @include     *://*sjumbotvs1.me/*
// @include     *://*s.cdn2.link/*
// @include     *://*buffstreamz.fun/*
// @include     *://*buffsports.stream/*
// @include     *://*sportshub.stream*
// @include     *://*sportshub.fan*
// @include     *://*streambtw.com*
// @include     *://*livetv.unblckd.pw/*
// @include     *://*givemereddit.eu/*
// @include     *://*weakspell.org/*
// @include     *://*score808.football/*
// @include     *://*worldcupglory.com/*
// @include     *://*sportsnest.co/*
// @include     *://*weakstreams.online/*
// @include     *://*cdn.livetv*.me/*
//
// ==/UserScript==

(function () {
  'use strict';

  const current = window.location.href;

  /* ----------------------- */
  /* Functions / Utils       */
  /* ----------------------- */
  const isDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? true : false;
  const platform = window.navigator.platform

  /*
   * Adapt background of all websites
   * based on current system color-scheme
   * */
  let backgLight = "#e3e3e3"
  let backgDark  = "#141414"
  let backg = backgLight;
  if (isDark) {
    backg = backgDark;
  }

  function log(input, type = "info", title = "Autoplay", color = "#00314C") {
      console[type](
          `%c${title}%c`,
          `background-color: ${color}; color: white; border-radius: 4px; padding: 0px 6px 0px 6px; font-weight: bold`,
          "",
          input,
      );
  }

  function match(str, rule) {
      var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
      return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
  }

  function addScript(text) {
      var newScript = document.createElement('script');
      newScript.type = "application/javascript";
      newScript.textContent = text;
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(newScript);
  }

  function pasteStyle(str) {
      var node = document.createElement('style');
      node.type = 'text/css';
      node.appendChild(document.createTextNode(str.replace(/;/g, ' !important;')));
      if (document.head !== null) {
          document.head.appendChild(node);
      }
      else {
          /* No head yet, stick it whereever */
          document.documentElement.appendChild(node);
      }
  }

  const checkElement = async selector => {
      while (document.querySelector(selector) === null) {
          await new Promise(resolve => requestAnimationFrame(resolve));
      }
      return document.querySelector(selector);
  };

  function removeGarbage(arr) {
    arr.forEach(e => {
            checkElement(e).then((selector) => {
            log('Deleting element -- ' + e);
            selector.remove();
        });
    });
  }

  function clearEventListener(element) {
      const clonedElement = element.cloneNode(true);
      element.replaceWith(clonedElement);
      return clonedElement;
  }

  function injectFullscreenBeforeElement(element) {
      checkElement(element).then((selector) => {
          log('Fullscreen button injected before ' + element)
          var injectBeforeThis = selector
          var newBtn = document.createElement('a');
          newBtn.className = 'button';
          newBtn.style = 'cursor: pointer;display:block; float:left;z-index:9999;position:fixed; padding:3px; font-weight: bold;box-shadow: 0px 0px 4px #cccccc6e;border-radius: 4px;';
          newBtn.text = 'FULLSCREEN';
          newBtn.addEventListener('click', function () { player.requestFullscreen(); player.muted(false); player.play(); });
          injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis);
      });
  }

  function injectReloadBeforeElement(element) {
      checkElement(element).then((selector) => {
          log('Reload button injected before ' + element)
          var injectBeforeThis = selector;
          var newBtn = document.createElement('a');
          newBtn.className = 'button';
          newBtn.style = 'cursor: pointer; display:block;float:right;z-index:9999;position:sticky; padding:3px; font-weight: bold;box-shadow: 0px 0px 4px #cccccc6e;border-radius: 4px;background: #ffffff26; margin-bottom: 5px;';
          newBtn.text = 'RECHARGER PAGE';
          newBtn.addEventListener('click', function () { document.location.reload(); });
          injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis);
      });
  }

  if (window.top === window.self) {
      log("= [MAIN] Autplay Script Loaded on : " + current + " =");
  }
  else {
      log("= [IFRAME] Autplay Script Loaded on : " + current + " =");
  }


 /* ------------------------------------ */

 /* -----------------------
  * Every website
  * -----------------------
  * */
  var trash = [   '#ad', 'div[id^=vliadb]', 'iframe[src*=chatango]', 'iframe[src*=live_chat]',
                  '#micast_ads', 'iframe[src*=ads\\.php]',
                  '#\\30', '#ni-overlay', 'polygon',
                  'iframe[src*=ads\\.livetv695\\.me]',
                  'iframe[src*=ads\\.livetv696\\.me]',
                  'div[style*=z-index\\:\\ 300000\\;]',
                  'script[src*=\\/a\\.js]',
                  'script[src*=\\/a\\.js]'
                 // 'iframe[src^=about\\:blank]' <- can't be used globally, breaks gameavenue.co
              ];

  removeGarbage(trash);

  checkElement('.text-light').then((selector) => {
      selector.parentElement.remove()
  });

  var allSiteStyle = `
      embed[type="application/pdf"] {
        filter: unset;
        contrast: unset;
        display: none;
      }
      .media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {
        background-color: red;
      }
      .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume].fill {
        box-shadow: inset 2px 0 0 #fff;
        opacity: 1;
      }
      .media-control[data-media-control] .media-control-background[data-background] {
        background-color: rgba(0, 0, 0, 0);
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
        height: 10%;
      }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg path,
      .darkmysite_inverted_inline_svg.darkmysite_style_txt_border.darkmysite_processed {
        filter: unset;
      }
  `
  pasteStyle(allSiteStyle);

  /* Detect if a popup() is attached to an element,
   * and then rename the function called to an non existing one,
   * which prevent sites from breaking. */
  checkElement('*[onclick^=popup\\(\\)]').then((selector) => {
      log("This element contained a onclick=popup() function, it was removed. : ")
      selector.setAttribute('onclick','')
      console.log(selector);
  });

  /* Detect if a javascript:window.open is attached to an element,
   * if so, remove the node entierly.
   * 2x times because some websites inject two popup.
   * */
  checkElement('#localpp[onclick^="javascript\\:window\\.open"]').then((selector) => {
      log("This element contained a onclick=javascript:window.open() function, it was removed. : ")
      selector.remove();
      console.log(selector);
  });

  checkElement('#localpp[onclick^="javascript\\:window\\.open"]').then((selector) => {
      log("This element contained a onclick=javascript:window.open() function, it was removed. : ")
      selector.remove();
      console.log(selector);
  });

  /* Detect if an useless iframe exist.
   * and removes the node entierly.
   */
  checkElement('iframe[src^=js\\/onion\\.html]').then((selector) => {
      log("This element contained an useless iframe, it was removed : ")
      selector.remove();
      console.log(selector);
  });

  /* ------------------------- */
  /* Skeleton to re-use        */
  /* ------------------------- */
  if (match(current, "*://*somewebsite.xyz*")) {

      log("=== "+ current + " ===");
      var trash = [ "header#masthead", ".comments-area", ".entry-title", ".entry-meta", ".site-info", "header", "footer"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      html body, body, html, .bg-gray-200, .inside-article, article {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      br, hr {
        display: none;
      }

      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* sportsnest                */
  /* ------------------------- */
  if (match(current, "*://*sportsnest.co*")) {

      log("=== "+ current + " ===");
      var trash = [ "strong", "strong", "p", "p", ".yuki-sidebar", "header#masthead", ".comments-area", ".entry-title", ".entry-meta", ".site-info", "header", "footer"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      html body, body, html, .bg-gray-200, .inside-article, article {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      br, hr {
        display: none;
      }

      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* score808                  */
  /* ------------------------- */
  if (match(current, "*://*score808.football*") || match(current, "*://*worldcupglory.com*")) {

      log("=== "+ current + " ===");
      var trash = [ "header#masthead", ".comments-area", ".entry-title", ".entry-meta", ".site-info", "header", "footer"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      html body, body, html, .bg-gray-200, .inside-article, article {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      br, hr {
        display: none;
      }

      @media (prefers-color-scheme: light) {
        html body, body, html, .bg-gray-200, .inside-article, article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        html body, body, html, .bg-gray-200, .inside-article, article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* freetvsports              */
  /* ------------------------- */
  if (match(current, "*://*freetvsports.com*")) {

      log("=== "+ current + " ===");
      var trash = [ "h2", "header#masthead", "nav.site-navigation", ".site-credits", ".comments-area", ".entry-title", ".entry-meta", ".site-info", "header", "footer"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, .inside-article, article, .site-content.site-singular {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }

      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* elgoles.pro               */
  /* ------------------------- */
  if (match(current, "*://*elgoles.pro*")) {

      log("=== "+ current + " ===");
      var trash = [ ".hm-related-posts", ".hm-authorbox", ".skip-link", "#secondary", "#site-navigation", ".site-footer", "nav.navigation.post-navigation", "#site-navigation", "header#masthead", ".comments-area", ".entry-title", ".entry-meta", ".site-info", "header", "footer"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });
      checkElement('.text-dark').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `

      #page.hitmag-wrapper {
        margin-top: 0;
      }
      body, html, .bg-gray-200, .inside-article, article, .blog-post-item, .entry-content, .single-post-wrap, .site-content {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }

      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }


  /* ------------------------- */
  /* extremosports.club        */
  /* ------------------------- */
  if (match(current, "*://*extremosports.club*") || match(current, "*://*hdfungamezz.xyz")) {

      log("=== "+ current + " ===");
      var trash = [ "div[style^=pointer-events]","iframe[style^=position\\:\\ absolute]",
                    "iframe[src^=about\\:blank]",
                    "#secondary", "#site-navigation", ".site-footer", "nav.navigation.post-navigation",
                    "#site-navigation", "header#masthead", ".comments-area", ".entry-title", ".entry-meta",
                    ".site-info", "header", "footer"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });
      checkElement('.text-dark').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, .inside-article, article, .blog-post-item, .entry-content, .single-post-wrap {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }

      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }


  /* ------------------------- */
  /* masterpro.clu             */
  /* ------------------------- */
  if (match(current, "*://*masterpro.club/*")) {

      log("=== "+ current + " ===");
      var trash = [ "header#masthead", ".comments-area", ".entry-title", ".entry-meta", ".site-info", "header", "footer",
                    ".tag-list", "h1.capitalize", ".nav-teams__inner"];
      removeGarbage(trash);

      checkElement('.adblock_title').then((selector) => {
          document.querySelector('.adblock_title').parentElement.parentElement.parentElement.parentElement.parentElement.remove()
      });

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, .inside-article, article, .container, .entry-content {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      .vpn-wrapper, h1.capitalize, .nav-teams__inner, header, div.tag-list, footer.footer, aside {
        display: none;
      }
      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }



  /* ------------------------- */
  /* masterpro.clu             */
  /* ------------------------- */
  if (match(current, "*://*masterpro.club/*")) {

      log("=== "+ current + " ===");
      var trash = [ "header#masthead", ".comments-area", ".entry-title", ".entry-meta", ".site-info", "header", "footer",
                    ".tag-list", "h1.capitalize", ".nav-teams__inner"];
      removeGarbage(trash);

      checkElement('.adblock_title').then((selector) => {
          document.querySelector('.adblock_title').parentElement.parentElement.parentElement.parentElement.parentElement.remove()
      });

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, .inside-article, article, .container, .entry-content {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      .vpn-wrapper, h1.capitalize, .nav-teams__inner, header, div.tag-list, footer.footer, aside {
        display: none;
      }
      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* epllive.net               */
  /* by RainoStream            */
  /* ------------------------- */
  if (match(current, "*://*epllive.net/*")) {

      log("=== "+ current + " ===");
      var trash = [ ".community-backLink", "header#masthead", ".comments-area", ".entry-title", ".entry-meta", ".site-info", "header", "footer",
                    ".tag-list", "h1.capitalize", ".nav-teams__inner", ".abblock-msg"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      })

      setTimeout(function() {
        checkElement('.text-light').then((selector) => {
              selector.parentElement.remove()
        })
      , 1000});

      var style = `
      body, html, .bg-gray-200, .inside-article, article, .container {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      .vpn-wrapper, h1.capitalize, .nav-teams__inner, header, div.tag-list, footer.footer, aside {
        display: none;
      }
      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* fastreams.com             */
  /* ------------------------- */
  if (match(current, "*://*fastreams.com*")) {

      log("=== "+ current + " ===");
      var trash = [ "header#masthead", ".comments-area", ".entry-title", ".entry-meta", ".site-info", "header", "footer"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, .inside-article, article, .content-area.primary {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }

      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, article, .content-area.primary {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, article, .content-area.primary {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* hitsports.pro             */
  /* ------------------------- */
  if (match(current, "*://*hitsports.pro*")) {

      log("=== "+ current + " ===");
      var trash = [ "header#masthead", ".comments-area", ".entry-title",
                    ".entry-meta", ".site-info", "header", "div.footer", ".clearfix h4", "footer",
                    "div#navbar-collapse-1", "nav.navbar.navbar-default", "hr", "h2", "#display1327"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, .inside-article {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }

      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* ronaldo7.pro              */
  /* ------------------------- */
  if (match(current, "*://*ronaldo7.pro/*")) {

      log("=== "+ current + " ===");
      var trash = [ "nav.navbar.navbar-default", ".clearfix", "div.footer.container", "hr", "#display1327", "footer", "div.inside-navigation.grid-container", ".entry-title", ".site-info", ".entry-meta", "div.inside-right-sidebar", "header#masthead", ".comments-area"];
      removeGarbage(trash);

      checkElement('.text-dark').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, .inside-article, div.body, .sv-box {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }

      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, div.body, .sv-box, body.dark {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, div.body, .sv-box, body.dark {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* hufoot.com                */
  /* ------------------------- */
  if (match(current, "*://*hufoot.com*")) {

      log("=== "+ current + " ===");
      var trash = ["footer", "div.sv-box.undefined.no-radius", "header", "ul.nav-pills"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, .inside-article, div.body, .sv-box {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }

      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, div.body, .sv-box, body.dark {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, div.body, .sv-box, body.dark {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* buddylive.xyz             */
  /* ------------------------- */
  if (match(current, "*://*buddylive.xyz*")) {

      log("=== "+ current + " ===");
      var trash = ["#lightify-pro-header-wrapper", "#footer-about-section",
                  ".entry-header.blog-entry-header", "h4", ".footer-widgets-wrap"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, .inside-article, .post-body,
      #content-wrapper {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }

      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* backfirstwo.site      */
  /* ------------------------- */
  if (match(current, "*://*backfirstwo.site*") || match(current, "*://*backfirstwo.com*")) {

      log("=== "+ current + " ===");
      var trash = [""];
      // removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, .inside-article {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* chelsealivestream.com     */
  /* ------------------------- */
  if (match(current, "*://*chelsealivestream.com*")) {

      log("=== "+ current + " ===");
      var trash = ["header#header", "#footer", "#id-custom_banner"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, .inside-article, div.wraper, {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, html body.bg-white  {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, html body.bg-white  {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }


  /* ------------------------- */
  /* Buffstreams mains website */
  /* ------------------------- */
  if (match(current, "*://*sportshub.stream*") || match(current, "*://*sportshub.fan*") || match(current, "*//*buffsports.stream*") || match(current,"*://*livetv.unblckd.pw*") ) {

      log("=== "+ current + " ===");

      var trash = ["iframe[src^=about\\:blank]", "iframe[style^=position\\:\\ absolute]", "iframe[style^=position\\:\\ absolute]"];
      removeGarbage(trash);

      // Add platform-specific redirect to acestream proxy
      // Require IINA player installed on macOS
      log("Platform: " + platform)

      checkElement('a[href^=acestream]').then((selector) => {

              selector.parentElement.parentElement.parentElement.parentElement.width = "100%"
              selector.parentElement.parentElement.parentElement.parentElement.style = "display: block"

              var tBodyParent = selector.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;


              document.querySelectorAll('a[href^=acestream]').forEach(function(selector) {

                  var tdParent = selector.parentElement.parentElement.parentElement.parentElement.parentElement;
                  var tdTableParent = selector.parentElement.parentElement.parentElement.parentElement;
                  console.log(tdParent)
                  tdParent.width = 250;
                  tdTableParent.width = 250;

                  /* check if adjacent <td> exist, if so, move it */
                  //if (selector.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling != null) {
                  //    var elTD = selector.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling;
                  //    tBodyParent.appendChild(elTD)
                  //}

                  var elTD = document.createElement("td")
                      elTD.align="center";
                      elTD.width="85";
                      elTD.style="cursor: pointer";

                  var elA = document.createElement("a")
                      elA.innerHTML=""
                      elA.style="cursor: pointer;";
                      elA.ariaLabel="acelink2";
                      elA.innerText = "Player [2]";

                  var player2 = selector.parentElement.parentElement.appendChild(elTD);
                      player2.appendChild(elA)

                  selector.innerText = "Player [1]";
                  selector.parentElement.width = "85";
                  selector.parentElement.align = "center";
                  selector.parentElement.previousElementSibling.remove();

                  var aceID = selector.toString().match("acestream:\/\/([a-zA-Z0-9]+)")[1];
                  var proxy1 = "http://acestreamproxy.duckdns.org/1/ace/getstream?id=" + aceID
                  var proxy2 = "http://acestreamproxy.duckdns.org/2/ace/getstream?id=" + aceID

                  if (platform.includes('MacIntel')) {
                      log("MacOS detected")

                      selector.href = "iina://weblink?url=" + proxy1
                      elA.href      = "iina://weblink?url=" + proxy2

                      log("Acestream's links replaced for macOS")
                  }
                  else if (platform.includes('iPhone') || platform.includes('iPad')) {
                      log("iOS detected")

                      selector.href = "vlc://" + proxy1
                      elA.href      = "vlc://" + proxy2

                      log("Acestream's links replaced for iOS")
                  }
                  else if (platform.includes('win32')) {
                      log("Windows detected")

                      selector.href = "vlc://" + proxy1
                      elA.href      = "vlc://" + proxy2

                      log("Acestream's links replaced for Windows")
                  }
                  else {
                      log("Unknown platform detected");

                      selector.href = "vlc://" + proxy1
                      elA.href      = "vlc://" + proxy2

                      log("Acestream's links replaced for Unknown platform -- generic replacement")
                  }

            });
      });

      // checkElement('.fluid.search .menu .item').then((selector) => {
      //     var searchEventsElement = document.querySelector('#search-events');
      //     function isLeagueMatchSoon(leaguename) {
      //       allEvents = document.querySelectorAll('.list-events .event-desc')
      //       for (var i=0, item; item = allEvents[i]; i++) {
      //           var leaguename = leaguename.replace(/\s*|\t|\r|\n/gm, '');
      //           var eventName = item.innerText.trim().replace(/\s*|\t|\r|\n/gm, '');
      //           //console.log(item.innerHTML)
      //           //console.log(item.innerHTML)
      //           //console.log("Comparing event: " + eventName + " to league: " + leaguename)
      //           if (eventName.includes(leaguename)) {
      //             console.log("match")
      //             break;
      //             return true;
      //           }
      //       }
      //       return false
      //     }
      //   document.querySelectorAll('.fluid.search .menu .item').forEach(function(e) {
      //       var searchEventsElement = document.querySelector('#search-events');
      //       var inputEl = document.querySelector('input[name^=search-events]')
      //       var leaguename = e.innerText.trim()
      //     //if (!isLeagueMatchSoon(leaguename)) {
      //       //console.log("League not present : " + leaguename)
      //       //return;
      //      // }
      //       var el = document.createElement("a")
      //           el.innerHTML=leaguename;
      //           el.style="cursor: pointer;";
      //           el.ariaLabel="fastlink";
      //       searchEventsElement.parentElement.appendChild(el)
      //       el.addEventListener("click", function(ev) {
      //       inputEl.value = "";
      //       inputEl.focus();
      //       document.execCommand('insertText', false, ev.target.innerText);
      //       console.log(ev.target.innerText);
      //     });
      //   })
      // });


      style =`

      .lnktbj { background: none; }
      #news_, .bitrate, img[src*=rate0] { display: none; }
      #top-events { height: 100%; }
      a[href^=acestream], a[href^=vlc], a[href^=iina], a[aria-label^=fastlink] {
        border: 1px solid #ccc;
        margin: 0px;
        padding: 5px;
        background: #505050;
        color: #fff;
        border-radius: 3px;
        cursor: pointer;
      }
      a[href^=acestream]:hover, a[href^=vlc]:hover, a[href^=iina]:hover, a[aria-label^=fastlink]:hover {
        font-weight: bold;
      }
      `

      pasteStyle(style);
  }


  /* ------------------------- */
  /* cdn2.link                 */
  /* ------------------------- */
  if (match(current, "*://*cdn2.link*") || match(current, "*://*daddylivehd.online/*")) {

      log("=== "+ current + " ===");
      var trash = [ '.overlay_video', 'div.ad', '#dontfoid', "#adholder", "iframe[src^=about\\:blank]","iframe[src^=about\\:blank]", "div[style^=pointer-events]", "div[style^=pointer-events]"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

  }


  /* ------------------------- */
  /* buffstreamz's embed       */
  /* ------------------------- */
  if (match(current, "*://*buffstreamz.fun/embed*")
      || match(current, "*://*buffstreamz.fun/webplayer*")
      || match(current, "*://*xsportbox.com/webplayer*")
      || match(current, "*://*xsportbox.com/embed*"))
  {

      // bypass links
      checkElement('a#third-party-source').then((selector) => {
          var url = selector.href;
          window.location = url;
      });

      log("=== "+ current + " ===");
      var trash = ["iframe[src^=about\\:blank]", "iframe[style^=position\\:\\ absolute]", "iframe[style^=position\\:\\ absolute]"];
      removeGarbage(trash);

      checkElement('div[style^=margin-bottom\\:\\ 20px\\;]').then((selector) => {
            selector.setAttribute('style', '');
      });

      checkElement('div[style^=margin\\:\\ 20px\\ auto]').then((selector) => {
            selector.setAttribute('style', 'margin:auto;text-align: center;max-width: 100%');
      });

      checkElement('div[style^=max-width\\:\\ 1000px]').then((selector) => {
            selector.remove();
      });

      checkElement('div[style^=margin-bottom\\:\\ 20px]').then((selector) => {
            selector.remove();
      });

      checkElement('body').then((selector) => {
            selector.setAttribute('style', 'display: flex;padding: 0px;max-width: 100%;');
      });

      var style = `
      body, html {
        margin: 0;
        margin-bottom: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }

      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, iframe, .responsive {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, iframe, .responsive  {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* freehdgames.xyz           */
  /* ------------------------- */
  if (match(current, "*://*freehdgames.xyz*")) {
      log("=== "+ current + " ===");

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });
  }

  /* ------------------------- */
  /* livesportstream           */
  /* ------------------------- */
  if (match(current, "*://*livesportstream.club*")) {
      log("=== "+ current + " ===");
      var trash = ["#ad"];
      removeGarbage(trash);
  }

  /* ------------------------- */
  /* streamhd247.online        */
  /* ------------------------- */
  if (match(current, "*://*streamhd247.online*") || match(current, "*://*streamhd247.info*")) {

      log("=== "+ current + " ===");
      var trash = [".red.col-lg-12"];
      removeGarbage(trash);

      var style = `
      html.body, body, html, .bg-gray-200, .inside-article, well, div.well, table, td,
      .text-center.col-md-12, tr, tbody, div.row, .container {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      div[style^=padding-bottom\\:15px\\;] {
        display: none;
      }
      div.row.text-center {
        display: none;
      }
      iframe {
        border: none;
      }
      td[width="300"] {
        display: none;
      }
      textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* sportcast.fun             */
  /* ------------------------- */
  if (match(current, "*://*sportcast.fun*")) {

      log("=== "+ current + " ===");
      var trash = [""];
      // removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      body div {
        max-width: 100%;
        margin: auto;
      }
      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* soccerlive.app            */
  /* ------------------------- */
  if (match(current, "*://*soccerlive.app*")) {

      log("=== "+ current + " ===");
      var trash = [".col-md-4", ".col-md-3", "#wp_chat", ".wpsoccerchat"];
      removeGarbage(trash);

      checkElement('a.navbar-brand').then((s) => {
          s.setAttribute('href', '//soccerlive.app/');
      });

      checkElement('tr td a[href*=http]').then((selector) => {
          document.querySelectorAll('tr td a[href*=http]').forEach((e) => {
              e.removeAttribute('href')
          });
      });

      checkElement('.col-md-8').then((s) => {
          document.querySelectorAll('.col-md-8').forEach(el => { el.classList.remove('col-md-8'); el.classList.add('col-md-12'); });
      });
      checkElement('.col-md-9').then((s) => {
          document.querySelectorAll('.col-md-9').forEach(el => { el.classList.remove('col-md-9'); el.classList.add('col-md-12'); });
      });

      /*
       * Force instant redirection
       * to the streaming location
       * */
      checkElement('button#redirect').then((s) => {
          console.log("euh?")
          if (s.innerText.includes('Please Wait') || s.innerText.includes('Click Here to Watch') ) {
              setTimeout(function() {
                s.focus()
                s.dispatchEvent(new Event('click', { bubbles: true }));
              }, 100);
          }
      });

      var style = `
      .box-responsive {
        width: unset;
      }
      #wp_chat, .wpsoccerchat {
        display: none;
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* apl265.me                 */
  /* ------------------------- */
  if (match(current, "*://*apl284.me*") || match(current, "*://*apl265.me*") || match(current, "*://*apl*.me*") || match(current, "*://*livetvstream.pro*")) {

      log("=== "+ current + " ===");
      var trash = [
                    "#ads", "#ban1", "#adbtm", "div[onclick*=\\(\\)", "#stpd",
                    "iframe[src*=getbanner\\.php]", "iframe[src*=getbanner\\.php]", "iframe[src*=getbanner\\.php]"
                  ];

      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* futbolandres.xyz          */
  /* ------------------------- */
  if (match(current, "*://*futbolandres.xyz*")) {

      log("=== "+ current + " ===");
      var trash = [
                    "header", "#navbar-iframe", "#navbar", ".widget-content", "#header-inner",
                    "#b-navbar", ".footer-outer", "div.fauxborder-left",
                    ".fauxcolumn-inner", ".post-footer", ".post-header"
                  ];

      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article,
      .post-outer, .main-inner .columns, .region-inner.main-inner,
      .content-inner, .column-center-outer, .section, .main-outer,
      .content-outer, #Blog1, .main-inner .fauxcolumn-right-outer,
      .body-fauxcolumns {
        background: ${backg};
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      html {
        height: unset;
        margin-top: -30px;
      }
      .content-outer {
        min-width: unset;
        max-width: unset;
      }
      iframe {
        border: none;
      }
      #navbar, .fauxcolumn-inner, textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      .content-outer, .content-fauxcolumn-outer, .region-inner {
        max-width: unset;
        width: 100%;
      }
      iframe {
        width: 100%;
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* ustream.pro               */
  /* ------------------------- */
  if (match(current, "*://*ustream.pro*") || match(current, "*://*lato.sx*")) {

      log("=== "+ current + " ===");

      var style = `
      iframe, body, html, .bg-gray-200, .inside-article {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        width: 100%;
        height: 100%;
      }
      .container {
        width: 100%;
        height: 100%;
        max-width: unset;
      }
      .embed-responsive.embed-responsive-16by9 {
        width: 100%;
        height: 100%;
        min-width: unset;
        min-height: unset;
        max-height: unset;
        max-width: unset;
      }
      @media (prefers-color-scheme: light) {
        iframe, body, html, .bg-gray-200, .inside-article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        iframe, body, html, .bg-gray-200, .inside-article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* livetv695.me              */
  /* ------------------------- */
  if (match(current, "*://*livetv695.me/*") || match(current, "*://*livetv6*.me/*") || match(current, "*://*livetv*.me/*")) {

      log("=== "+ current + " ===");
      var trash = [ "#localpp", "td[background*=h_bg_p]"];
      removeGarbage(trash);

      var style = `

      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
      table {
        width: 100%;
        height: 100%;
      }
      `;
      pasteStyle(style);
  }


  /* ------------------------- */
  /* bigeventz.xyz             */
  /* ------------------------- */
  if (match(current, "*://*bigeventz.xyz*")) {

      log("=== "+ current + " ===");
      var trash = [ "#masthead", "#right-sidebar", ".entry-header",
                    ".comments-area", ".inside-site-info", ".entry-meta"];
      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article {
        background: ${backg};
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      h1 {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* sportswatcher.buz         */
  /* ------------------------- */
  if (match(current, "*://*sportswatcher.buzz*")) {

      log("=== "+ current + " ===");
      var trash = [ ".navbar-wp", "div.overlay", "aside", "footer", ".overlay", "#vidorev_post_extensions-2", "div#vidorev_post_extensions-2"];
      removeGarbage(trash);

      checkElement('iframe[src*=http]').then((selector) => {
          document.querySelector('body').appendChild(selector)
      });

      var style = `
      body, html, .bg-gray-200, .inside-article, .article, article, aside,
      .col-md-9, .containertje {
        background: ${backg};
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      div.banner_ad, div.widget.ad, div.widget.carbonads-widget, div ins.adsbygoogle, {
        display: block;
      }
      center {
        display: none;
      }
      iframe {
        border: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* olympicology.com          */
  /* ------------------------- */
  if (match(current, "*://*olympicology.com*")) {

      log("=== "+ current + " ===");
      var trash = ["footer"];
      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article,
      .site-container-wrap {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article,
        .site-container-wrap {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article,
        .site-container-wrap {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* games47.xyz               */
  /* ------------------------- */
  if (match(current, "*://*games47.xyz*")) {

      log("=== "+ current + " ===");
      var trash = ["aside", ".mg-header", "header", ".mg-headwidget.center",
                   ".mg-info-author-block", "footer", ".mg-featured-slider",
                  ".missed-inner", "#comments", "nav.navigation.post-navigation"];
      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article,
      main#content, aside, .page-content-single, center, article,
      .mg-blog-post-box {
        background: ${backg};
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* freesport.info            */
  /* ------------------------- */
  if (match(current, "*://*freesport.info*")) {

      log("=== "+ current + " ===");
      var trash = [""];
      // removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, .inside-article {
        background: ${backg};
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* dubznetwork.com           */
  /* ------------------------- */
  if (match(current, "*://*dubznetwork.com*")) {

      log("=== "+ current + " ===");
      var trash = [ "#footylight_dubzstream_one", "iframe[src^=\\/sticky\\.html]", ".aoa_overlay",
                    ".single-related-posts", ".dp-social-media-share-wrap",
                    "div.tdc-header-wrap", ".adsbyvli", ".td-ss-main-sidebar" ];

      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article,
      .site-inner, .wrap, .body-background-2, .site-container,
      .td-main-content-wrap {
        border: none;
        box-shadow: none;
        background: ${backg};
        margin: 0;
        padding: 0;
      }
      .tdc-header-wrap, .entry-thumb, .entry-title, .td_module_wrap, .tdc-row.stretch_row {
        display: none;
      }
      video {
        top: 145px;
      }
      iframe {
        border: none;
      }

      `;

      pasteStyle(style);
  }


  /* ------------------------- */
  /* hesgoals.top              */
  /* ------------------------- */
  if (match(current, "*://*hesgoals.top*")) {

      log("=== "+ current + " ===");
      var trash = [ "header.py-2", "footer", "header", "div.bg-light-gray.my-2.py-4"];
      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article,
      div.bg-light-gray.p-4.rounded {
        background: ${backg};
        margin: 0;
        padding: 0;
      }
      iframe {
        border: none;
      }
      textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* bestreamsports            */
  /* ------------------------- */
  if (match(current, "*://bestreamsports.org*")) {

      log("=== "+ current + " ===");
      var trash = ["#dismiss-btn", "#colophon", ".navigation.post-navigation", ".logo-bar", "#masthead"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, #content, .inside-article,
      .boxed-layout #page {
        background: ${backg};
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      .adsbygoogle, textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* http://adisports.xyz      */
  /* ------------------------- */
  if (match(current, "*://adisports.xyz/*")) {

      log("=== "+ current + " ===");
      var trash = ["header, footer", "aside", "div.media.mg-info-author-block",
                   "div.mg-featured-slider", "div.overlay", "div.missed-inner",
                   ".mg-info-author-block", "#comments", ".mg-header",
                   "nav.navigation.post-navigation", ".navigation.post-navigation",
                  "div.post-share"];

      checkElement('a.text-dark').then((selector) => {
            selector.parentElement.remove()
      });

      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article,
      center, .mg-blog-post-box .small.single, article,
      main#content, p, .mg-blog-post-box {
        background: ${backg};
        margin: 0;
        padding: 0;
        box-shadow: unset;
      }
      iframe {
        border: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* yehfullhd                 */
  /* ------------------------- */
  if (match(current, "*://*yehfullhd.live*")) {

      log("=== "+ current + " ===");
      var trash = ["header", "#masthead", "div.col-lg-3", "div.nav-links",
                   ".entry-footer", "nav", ".navigation.post-navigation",
                   "#comments", "#colophon"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      .img-content, .post-navigation, .comments-area,
      .text-content, #main .card-view .text-content,
      .hentry, #content, body, html, .bg-gray-200,
      .inside-article, .entry-content, .grid-item article, .content-area {
        background: ${backg};
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
        textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* yehfullhd's iframe        */
  /* ------------------------- */
  if (match(current, "*://*hdfungames.site*")) {
      checkElement('script[src*=a\\.js').then((selector) => {
            log("Removed script[src*=a.js]")
            selector.remove();
      });
      checkElement('script[src^=\\/\\/ehpvvxyp]').then((selector) => {
            log("Removed script[src^=//ehpvvxyp]")
            selector.remove();
      });
  }

  /* ------------------------- */
  /* tonnestreamz              */
  /* ------------------------- */
  if (match(current, "*://tonnestreamz.xyz*")) {

      log("=== "+ current + " ===");
      var trash = ["table"];
      // removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article {
        background: ${backg};
        margin: 0;
        padding: 0;
      }
      iframe {
        border: none;
        width: 80vw;
        height: 80vh;
      }
      table, textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* bein-sports.online       */
  /* ------------------------- */
  if (match(current, "*://bein-sports.online*")) {

      log("=== "+ current + " ===");
      var trash = ["table"];
      removeGarbage(trash);

      injectReloadBeforeElement('iframe');

      var style = `
      body, html, .bg-gray-200, .inside-article {
        background: ${backg};
        margin: 0;
        padding: 0;
      }
      iframe {
        border: none;
        width: 80vw;
        height: 80vh;
      }
      table, textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* daddylivehd.click         */
  /* ------------------------- */
  if (match(current, "*://*daddylivehd.click*")) {

      log("=== "+ current + " ===");
      var trash = [""];
      // removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article {
        background: ${backg};
        margin: 0;
        padding: 0;
      }
      iframe {
        border: none;
      }
      textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      `;

      pasteStyle(style);
  }


  /* ------------------------- */
  /* bein-sports.online        */
  /* ------------------------- */
  if (match(current, "*://*bein-sports.online*")) {

      log("=== "+ current + " ===");
      var trash = [""];
      // removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article {
        background: ${backg};
        margin: 0;
        padding: 0;
      }
      iframe {
        border: none;
        width: 80vw;
        height: 80vh;
      }
      textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* techydeals                */
  /* ------------------------- */
  if (match(current, "*://techydeals.us*")) {

      log("=== "+ current + " ===");

      var trash = [".code-block", "header", "footer", ".page-header", '.wp-dark-mode-switcher', '#top-bar-wrap', '.post-tags.clr', '#related-posts'];
      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article {
        background: ${backg};
        margin: 0;
        padding: 0;
      }
      #main #content-wrap {
        padding: 0;
      }
      .content-area {
        border: none;
        max-width: unset;
        width: unset;
      }
      iframe {
        border: none;
        width: 80vw;
        height: 80vh;
      }
        textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* soccermlbstream           */
  /* ------------------------- */
  if (match(current, "*://soccermlbstream.xyz*")) {

      log("=== "+ current + " ===");

      var trash = ["#masthead", ".entry-meta"];
      removeGarbage(trash);

      var style = `

      div#primary {
        width: 80vw;
        margin: auto;
      }
      .ast-container {
        display: block;
        max-width: unset;
        padding: 0;
        margin: 0;
      }
      nav.navigation.post-navigation, #primary, .single .entry-header, .code-block, article, body, html, .bg-gray-200, .inside-article {
        background: ${backg};
        border: none;
        margin: 0;
        padding: 0;
      }
      .iframe-class {
        width: 100%;
      }
      iframe {
        border: none;

      }
      label, textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* p2pstreams.tv             */
  /* ------------------------- */
  if (match(current, "*://*p2pstreams.tv/*")) {
      log("=== "+ current + " ===");

      var trash = [".lg\\:w-3\\/12"];
      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article {
        background: ${backg};
      }
      center {
        display: none;
      }
      .chatbox, textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      #str {
        padding-top: unset;
        position: static;
      }

      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* alexsportz  */
  /* ------------------------- */
  if (match(current, "*://alexsportz.online/*")) {

      log("=== "+ current + " ===");

      var trash = ["#app nav", "#app nav", "center", ".lg\\:w-3\\/12"];
      removeGarbage(trash);

      var style = `
      body, html, .bg-white, .bg-gray-200, .inside-article {
        background: ${backg};
        margin: 0;
        padding: 0;
      }
      body {
        min-height: unset;
        max-width: unset;
        width: unset;
      }
      #str {
        position: static;
        overflow: visible;
      }
      #app nav {
        display: none;
      }
      textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      .video.responsive {
        height: 80vh;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------------------- */
  /* footballstreams.top, f1streams.pro    */
  /* ------------------------------------- */
  if (match(current, "*://*footballstreams.top*") || match(current, "*://*f1streams.pro*") ||
      match(current, "*://*nfllivestream.top*") ||
      match(current, '*://*nflbite.to*') ||
      match(current, '*//*nbabite.to/*') ||
      match(current, '*//*totalsportek.soccer/*') ||
      match(current, '*//*nbalivestream.top/*') ||
      match(current, '*//*f1livestream.top/*')
     ) {

      log("=== "+ current + " ===");
      var trash = [
                    "#ad",
                    "div.bg-light-gray.my-2.py-4", "header", "#footer", ".elementor-column-gap-custom",".elementor-column-gap-custom",
                    ".second-iframe", "div.elementor-column:nth-child(2) > div:nth-child(1)", "div.elementor-column:nth-child(2)",
                    '.site-below-footer-wrap[data-section="section-below-footer-builder"]', ".elementor-location-header", ".site-footer"
                  ];

      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      div.bg-light-gray, body.bg-white, body, html, .bg-gray-200, .inside-article, .elementor-161 .elementor-element.elementor-element-1ecbf82:not(.elementor-motion-effects-element-type-background), .elementor-161 .elementor-element.elementor-element-1ecbf82 > .elementor-motion-effects-container > .elementor-motion-effects-layer {
        background: ${backg};
        background-color: ${backg};
        margin: 0;
        padding: 0;
      }
      .first-iframe {
        width: unset;
        height: unset;
        float: unset;
      }
      iframe {
        width: 80vw;
        height: 80vh;
      }
      textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      .ast-container {
        margin: auto;
      }
      .elementor-location-header, .site-footer, .teams {
        display: none;
      }
      .elementor-col-50 {
        width: 100%;
      }
      .elementor-161 .elementor-element.elementor-element-1ecbf82,
      .elementor-161 .elementor-element.elementor-element-bac3d03 .elementor-column-gap-custom .elementor-column > .elementor-element-populated,
      .elementor-161 .elementor-element.elementor-element-1ecbf82,
      div.p-4
      {
        padding: 0;
        margin: 0;
        box-shadow: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* enjoy4hd.site             */
  /* ------------------------- */
  if (match(current, "*://enjoy4hd.site/*")) {

      log("=== "+ current + " ===");

      var trash = ["#bottom-bar", "#header", "#sidebar-right"];
      removeGarbage(trash);

      var style = `
      body, html, #main, .content, .bg-gray-200, .inside-article, .single-view {
        background: ${backg};

        --fbc-borders: unset;
      }
      .col-cs #content {
        width: 100%;
        height: 100%;
      }
      #container, .blog-view, .single-view, .author-info, .archive-info, .form-404 {
      border: none;
      margin: auto;
      padding: 0;
      box-shadow: unset;
      }

      .navbar, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      .responsive {
        max-width: 100%;
        position: fixed;


      }
      .box-responsive {
        width: 65vw;
        height: 90vh;
        padding: 0;
        margin: auto;
        max-width: unset;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* sportsgala.xyz            */
  /* ------------------------- */
  if (match(current, "*://sportsgala.xyz*")) {

      log("=== "+ current + " ===");
      var style = `
        body, html, .bg-gray-200, .inside-article {
          background: ${backg};
          margin: 0;
          padding: 0;
        }
        iframe {
          width: 100%;
        }
        a, br, hr, img {
          display: none;
        }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* s1os.icu                  */
  /* ------------------------- */
  if (match(current, "*://s1os.icu*")) {

      log("=== "+ current + " ===");

      var trash = ["footer#footer", "header.entry-header.group", "#bottom-bar", "#header", "#sidebar-right"];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      checkElement('p').then((selector) => {
        document.querySelectorAll('p').forEach(e => {
            if (e.innerHTML.match('&nbsp;&nbsp;')) {
              log("\<p> empty tag removed")
              e.remove();
            }
        })
      });

      var style = `
        #wrapper-bg, .entry p, #page, body, html, .bg-gray-200, .inside-article {
          background: ${backg};
          margin: 0;
          padding: 0;
        }
        iframe {
          max-width: unset;

        }
        a, br, hr, img {
          display: none;
        }
        .main-inner, .col-2cl .main-inner, .entry-content, .container-inner {
          max-width: unset;
          padding: 0;
          min-height: unset;
        }
      `;

      pasteStyle(style);
  }


  /* ------------------------- */
  /* worldsport.me             */
  /* ------------------------- */
  if (match(current, "*://www.worldsport.me/*")) {

      log("=== "+ current + " ===");

      var style = `
        body, html, .bg-gray-200, .inside-article {
          background: ${backg};
          margin: 0;
          padding: 0;
        }
        table, tbody, td  {
          width: 100%;
        }
        a, br, hr, img {
          display: none;
        }
      `;

      pasteStyle(style);
  }


  /* ------------------------- */
  /* http://stakes100.xyz.  */
  /* ------------------------- */
  if (match(current, "*://stakes100.xyz*")) {

      log("=== "+ current + " ===");

      var trash = [".link", ".sport-body", ".entry-header", "#site-header",
          ".footer-nav-widgets-wrapper", "#site-footer",
          "footer", "header"];
      removeGarbage(trash);

      var style = `
      .container-inner {
        max-width: unset;
        margin: auto;
      }
      div.entry-content {
        margin: auto;
      }
      div.entry-content > :not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide) {
        max-width: unset;
      }
      #wrapper-bg, body, html, .bg-gray-200, .inside-article, iframe {
        background: ${backg};
        background-color: ${backg};
        margin: 0;
        padding: 0;
      }
      #page, .entry-content, .post-inner, p {
        margin: 0;
        padding: 0;
      }
      a, br, hr, img {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* http://p2pstreams.live  */
  /* ------------------------- */
  if (match(current, "*://p2pstreams.live*") || match(current, "*://xestreams.com*")) {
      checkElement('video').then((selector) => {
          selector.click();
      });

      log("=== "+ current + " ===");
      var trash = ["script[spintro]", '.sharethis-inline-share-buttons', ".clearfix", "#app > main > div > div.w-full.rounded.lg\\:w-3\\/12", ".mobileHide", ".chat-box", "#txtarea", '#ga-overlay', 'ins', '#dismiss-btn', '.entry-header', '.adsbymahimeta', '.top-header', 'nav', '.adsbyvli', '.masthead', 'h1', '.inside-header', '.sidebar', '.inside-right-sidebar'];
      removeGarbage(trash);

      var style = `
      .media-control[data-media-control] .media-control-background[data-background] {
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
        background-color: initial;
      }
      .media-control[data-media-control] .media-control-background[data-background] {
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
        background-color: initial;
      }
      .media-control[data-media-control] .media-control-background[data-background] {
        position: absolute;
        height: 40%;
        width: 100%;
        bottom: 0;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
        will-change: transform, opacity;
        transition: opacity 0.1s ease-out;
      }
      body, html, .bg-gray-200, .inside-article {
        background: ${backg};
        margin: 0;
        padding: 0;
      }
      .rounded { border-radius: 0; border: 0; }
      .shadow-md { box-shadow: none; }
      .shadow-lg, img, a, br, td { display: none; }
      .responsive-iframe, iframe, player, #player {
        display: block;
        height: 75vh;
        width: 100%;
        margin: auto;
        padding: 0;
        margin: 0;
        position: fixed;
      }
      #str, .mb-5 {
        background: ${backg};
        padding: 0;
        margin: 0;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------- */
  /* https://silverspoon.site  */
  /* ------------------------- */
  if (match(current, "*://silverspoon.site*")) {
      checkElement('video').then((selector) => {
          selector.click();
      });

      log("=== "+ current + " ===");
    // "div[id^=darkmysite_switch_]",
      var trash = [ "aside#secondary", ".jp-relatedposts", "footer#colophon", '#ga-overlay', 'ins', '#dismiss-btn', '.entry-header', '.adsbymahimeta', '.top-header', 'nav', '.adsbyvli', '.masthead', 'h1', '.inside-header', '.sidebar', '.inside-right-sidebar'];
      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `

      .media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {
        background-color: red;
      }
      .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume].fill {
        box-shadow: inset 2px 0 0 #fff;
        opacity: 1;
      }
      .media-control[data-media-control] .media-control-background[data-background] {
        background-color: rgba(0, 0, 0, 0);
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
        height: 10%;
      }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg path,
      .darkmysite_inverted_inline_svg.darkmysite_style_txt_border.darkmysite_processed {
        filter: unset;
      }

      body, html, .bg-gray-200, .inside-article, html body.darkmysite_style_all.darkmysite_processed {
        background-color: ${backg};
        background: ${backg};
        margin: 0;
        padding: 0;
      }
      .rounded { border-radius: 0; border: 0; }
      .shadow-md { box-shadow: none; }
      .shadow-lg, img, a, br, td, .top-bar, .side-menu-wrap, .top-header { display: none; }

      .site-content .content-area {
        width: 100%;
      }
      .grid-container {
        max-width: unset;
      }
      .jconfirm, .adsbymahimeta {
        display: none;
      }
      #content, .entry-content {
        padding: 0;
        margin: 0;
      }
      .wrap, #player {
        width: 100%;
        max-width: unset;
      }
      `;

      pasteStyle(style);
  }

  /* ---------------------------------- */
  /* https://youpit.xyz & 60fps.xyz     */
  /* Sub-iframe domain: wikisport.click */
  /* ---------------------------------- */
  if (match(current, "*://youpit.xyz/*") || match(current, "*://youpits.xyz/*") || match(current, '*://60fps.xyz/*')|| match(current, '*://buzter.xyz/*'))  {


      log("=== "+ current + " ===");
      var trash = [ 'hr', 'h1', '.inside-header', '.sidebar', '.inside-right-sidebar', '.site-footer', '.adblock_title', '.adblock_subtitle'];
      removeGarbage(trash);

      checkElement('video').then((selector) => {
          selector.click();
      });

      checkElement('button[onclick*=changeDomain\\(\\)').then((selector) => {
            selector.remove()
      });

      checkElement('.text-strong').then((selector) => {
            selector.parentElement.remove()
      });

      checkElement('p').then((selector) => {
        document.querySelectorAll('p').forEach(e => {
            if (e.innerHTML.match('&nbsp;&nbsp;')) {
              log("\<p> empty tag removed")
              e.remove();
            }
        })
      });

      var style = `
      html {
        height: 100%;
      }
      body, html, .bg-gray-200, .inside-article,
      p, iframe, body, html, .bg-gray-200, iframe, .aievfbmsyu.idc0_338 {
        background: ${backg};
        margin: 0;
        padding: 0;
      }
      .entry-content:not(:first-child), .entry-summary:not(:first-child), .page-content:not(:first-child),
      .separate-containers .site-main {
        margin: 0;
      }
      .site-content .content-area {
        width: 100%;
      }
      .rounded { border-radius: 0; border: 0; }
      .shadow-md { box-shadow: none; }
      .shadow-lg, img, a, br { display: none; }
      `;

      pasteStyle(style);
  }


  /* ----------------------- */
  /* https://cr7soccer.club  */
  /* ----------------------- */
  if (match(current, "*://cr7soccer.club/*") || match(current, "*://sportsonline.to/*")
      || match(current, "*://*.sportsonline.to/*")
      || match(current, "*streamservice443.net/*")) {

      checkElement('video').then((selector) => {
          selector.click();
      });

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      log("=== "+ current + " ===");
      var trash = [
          'div[onclick*=this]',
          'div[onclick*=this\\)\\.remove\\(\\)]', '#html1', '#button1',
          'span[onmouseup^=document\\.getElementById]',
          'span[onmouseup^=document\\.getElementById]',
          '.navbar', '.page-content.p-4.bg-white.shadow-md.overflow-hidden.rounded.w-full',
          '#app > main > div > div.w-full.rounded.overflow-hidden'];

      removeGarbage(trash);

      var style = `
      div[onclick*=this] { display: none; }
      body, html, .bg-gray-200, iframe, .aievfbmsyu.idc0_338 {
      background: ${backg};
      margin: 0;
      padding: 0;
      }
      .rounded { border-radius: 0; border: 0; }
      .shadow-md { box-shadow: none; }
      .shadow-lg, img, a, br { display: none; }
      iframe {
      display: block;
      margin: auto;
      }
      `;

      pasteStyle(style);
  }

  /* ----------------------- */
  /* https://tezgoal.com     */
  /* ----------------------- */
  if (match(current, "*://tezgoal.com/*") || match(current, "*://dzeko11.net/*")) {

      checkElement('video').then((selector) => {
          selector.click();
      });

      log("=== "+ current + " ===");
      var trash = [
        'script[src^=\\/\\/eehuzaih]', 'script[src^=\\/\\/eehuzaih]',
        'iframe[src^=\\/\\/eehuzaih]',
       'iframe[src^=about]', 'iframe[src^=about]', 'iframe[src^=about]',,
        '.navbar', '.page-content.p-4.bg-white.shadow-md.overflow-hidden.rounded.w-full',
        '#app > main > div > div.w-full.rounded.overflow-hidden'];

      removeGarbage(trash);

      var style = `
      iframe[src^=about] {
        display: none;
      }
      body, html, .bg-gray-200, .aievfbmsyu.idc0_338 {
        background: ${backg};
      }
      .rounded { border-radius: 0; border: 0; }
      .shadow-md { box-shadow: none; }
      .shadow-lg { display: none; }
      `;

      pasteStyle(style);
  }

  /* ----------------------- */
  /* embed4u.xyz/     */
  /* ----------------------- */

  if (match(current, "*://*embed4u.xyz*")) {

      log("=== "+ current + " ===");

      var trash = [
          'a[onclick^=closeSmartLink]', 'a div[onclick^=closeSmartLink]',
          'a[href]'
      ];
      removeGarbage(trash);
      var style = `
      a[onclick^=closeSmartLink],
      a div[onclick^=closeSmartLink] {
        display: none;
      }
      body { margin: 0; }
      `;

      pasteStyle(style);

  }

  /* ----------------------- */
  /* soccerstreams.com/     */
  /* ----------------------- */

  if (match(current, "*://*footybite.to*") || match(current, "*://footybite.to*") || match(current, "*://*footybite.cc*") ||
      match(current, "*://*reddit-soccerstreams.com*")) {

      log("=== Main footybite page ===");

      var trash = [
          '.ad-banner', '.second-iframe', '.teams', '.news-right-sec-div', '.news-right-sec',
          '.mt-3.mb-3.text-center', '.alert-warning.alert', '.alert-dismissible', '#event-sticky-info',
          '.col-md-4', 'footer', '#event-tags-h', '#event-tags', 'a[href^=\\/dcma]'
      ];

      removeGarbage(trash);

      checkElement('.col-md-9').then((selector) => {
          document.querySelectorAll('.col-md-9').forEach(el => { el.classList.remove('col-md-9'); el.classList.add('col-md-12'); });
      });

      /*
      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });
      */

      checkElement('table.table.text-center').then((selector) => {
          checkElement('#cboxmain[src*=youtube\\.com]').then((selector) => {
              log("Removing youtube embed");
              document.querySelector('#cboxmain[src*=youtube\\.com]').remove();
          });
      });

      /*
      checkElement('.bg-light-gray .d-flex .w-25').then((selector) => {
          selector.parentElement.parentElement.remove()
      });
      */

      /*
       * Inject and replace with real <a href> tags
       * in lieu of onclick event, which "mask" website url
       * */
      checkElement('tr input[id^=linkk]').then((selector) => {
          document.querySelectorAll('tr input[id^=linkk]').forEach((e) => {
               //console.log("URL Handler : id | " + e.id + " | value | " + e.value);
               var uri = e.value;
               if (uri !== undefined) {
                   [...e.parentElement.children].map(child => {
                      if (child.classList.contains('display-bg') || child.classList.contains('display-small')) {
                          child.innerHTML = '<a href="' + uri + '" target="_blank">' + child.innerHTML + '</a>';
                          child.removeAttribute('onclick');
                      }
                      if (child.firstChild !== null) {
                          if (child.firstChild.nodeName == "A") {
                              if (child.firstChild.nextSibling !== null) {
                                  child.firstChild.nextSibling.setAttribute('href', uri);
                                  child.firstChild.nextSibling.setAttribute('target', '_blank');
                              }
                          }
                          else if (child.firstChild.nodeName == "#text") {
                          }
                          else if (child.firstChild.nodeName == "SPAN") {
                          }
                          else {
                          }
                      }
                  });
              }
          });
      });



      var style = `
        a[onclick^=closeSmartLink] {
          display: none;
        }
        a .font-weight-bold {
          color: white;
        }
        .display-bg a {
          color: #47a0ff;
        }
        .display-bg a[target*=blank]:hover {
          color: #a1ceff;
        }
        .display-bg a.rounded-pill {
          color: #fff;
        }
        .display-bg a.rounded-pill[target*=blank]:hover {
          color: #fff;
        }
        .row {
          margin-right: 0px;
        }
        iframe[src^=about] {
          display: none;
        }
        .first-iframe {
          width: 100%;
          height: calc(100vh);
        }
        h2, h3, h3, h4, h5, h6, p, br {
          display:none;
        }
        .table td, .table th {
          border-top: 1px solid #4b4b4b;
        }
        .text-dark-l {
          color: #dedede;
          font-weight: 800;
        }
        #cboxmain { width: 100%; }

        @media (prefers-color-scheme: light) {
            body, html, .bg-gray-200, .aievfbmsyu.idc0_338 {
                background: #e3e3e3;
            }
            .bg-light-gray.my-2.py-4.px-3.rounded-lg {
              border-bottom: 4px solid #c2c2c2;
            }
            .table td, .table th {
              border-top: 1px solid #dadada;
            }
            div.bg-white-light {
              background-color: rgb(249, 249, 249);
            }
            .text-dark-l {
              color: #282828;
              font-weight: 800;
            }
            #timer.text-white, .txt-team, .time-txt .text-dark-l span {
              color: #4e4d4d;
            }
            div a.text-light {
              color: #6a6a6a;
            }
            div a.text-light:focus, div a.text-light:hover {
              color: #000;
            }
            div.bg-dark-gray {
              background-color: #fbfbfb;
            }
            div.bg-dark-gray:hover {
              background-color: #e7e7e7;
            }
            div.div-child-box {
              color: #2f2f2f;
            }
            div.bg-light-gray,
            #tr-round {
              background-color: #fbfbfb;
            }
            .btn-primary {
              color: #fff;
              background-color: #0057b3;
            }
            .btn-primary:hover {
              color: #fff;
              background-color: #0069d9;
              border-color: #0062cc;
            }
            .btn-danger {
              color: #fff;
              background-color: #e04a4a;
            }
            .btn-danger:hover {
              color: #fff;
              background-color: #c82333;
              border-color: #bd2130;
            }
            .btn-warning {
              color: #fff;
              background-color: #ffc107;
              border-color: #ffc107;
            }
            .btn-warning:hover {
              color: #fff;
              background-color: #e0a800;
            }
            .btn-secondary {
              color: #fff;
              background-color: #6c757d;
              border-color: #6c757d;
            }
            .btn-secondary:hover {
              color: #fff;
              background-color: #5a6268;
            }
            .btn-outline-success:hover {
              color: #fff;
              background-color: #28a745;
              border-color: #28a745;
            }

            tbody tr td a {
              color: #0042aa;
            }
            tbody tr td a:hover {
              color: #438cff;
            }
            body .text-dark-light {
              color: black;
            }
        }
        `;


      pasteStyle(style);

  }

  /* ------------------------------ */
  /* gameavenue.co                  */
  /* ------------------------------ */
  if (match(current, "*://gameavenue.co*") || match(current, "*://*.gameavenue.co*")) {

      log("=== gameavenue.co ===");

      var trash = [ '.entry-header', '#masthead', '.cky-modal',
                    '#ast-desktop-header', '.secondary.widget-area', 'table', '.site-footer',
                    '.left_bottom.floating.style-1.wp-dark-mode-ignore.wp-dark-mode-switcher',
                    '.cky-btn-revisit', '.cky-revisit-bottom-left.cky-btn-revisit-wrapper'
                  ];

      removeGarbage(trash);

      checkElement('.text-light').then((selector) => {
          selector.parentElement.remove()
      });

      checkElement('p strong').then((selector) => {
          if (selector.innerText.search('FOR ALL SPORTING') == 0)
              selector.parentElement.remove()
      });

      var style = `
      body, html, .bg-gray-200, .inside-article, article, #main, main#main,
      #primary, #content, #masthead {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      textarea, a, br, hr, img, li, ul, h1, h2, h3, h4, h5, h6 {
        display: none;
      }
      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }


  /* ------------------------------ */
  /* nflscoop . com           */
  /* ------------------------------ */
  if (match(current, "*://nflscoop.net*")) {

      log("=== nflscoop.net ===");
      var trash = ['#content-pages', 'yt-live-chat-app', '#exp_182eb771-00c1-4401-84ed-a5859b5e4704', '#chat-messages',
          'section.elementor-section:nth-child(2)'];
      removeGarbage(trash);
  }

  /* ------------------------------ */
  /* nizarstream . com           */
  /* ------------------------------ */
  if (match(current, "*://nizarstream.com*")) {

      log("=== nizarstream.xcomyz ===");
      var trash = ['noscript', '.navbar', 'p', 'center', 'center', '.alert', 'div[style^=position\\:\\ fixed]', 'div[style^=\\ background]', 'h6', 'a[href*=totalsportek]', 'a[href*=totalsportek]'];
      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article, .jumbotron {
        background: ${backg};
        margin: 0;
        padding: 0;
      }

      .container {
        margin-top: 0;
      }
      .jumbotron {
        border: none;
      }
      textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ------------------------------ */
  /* elixx . xyz           */
  /* ------------------------------ */
  if (match(current, "*://elixx.xyz*")) {

      log("=== elixx.xyz ===");
      var trash = ['h4', 'iframe[src^=\\/schedule\\.html', 'p', 'p', 'p', 'h3', 'span', 'span'];
      removeGarbage(trash);

      var style = `
      h3, h4, p, img, br, hr {
        display: none;
      }
      #iframe-wrapper > iframe {
        width: 100%;
        height: 75vh;
      }
      #iframe-wrapper {
        vertical-align: unset;
      }
      body {
        margin: 0;
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------------ */
  /* blacktiesports . net           */
  /* Doesn't seems to work for now  */
  /* ------------------------------ */
  if (match(current, "*://blacktiesports.net*") || match(current, "*://blacktiesports.to*")) {

      log("=== Blacktiesports.net ===");
      var trash = ['#controls', 'div[style^=padding-top\\:\\ 8px]', '.navbar', 'p', '.bmc-btn-container', 'footer.container', '.bookmark.card.p-4'];
      removeGarbage(trash);

      var style = `
      img, a, #overlayer, p, br, hr, span, h1, h2, h3, h4, h5, h6 {
        display: none;
      }
      .row, .content, .video, .main-panel, body, html, #streamBox, #stream {
        padding: 0;
        border: none;
        height: unset;
        width: unset;
        margin: 0;
        border-color: unset;
      }
      .wrapper {
        position: unset;
      }
      html, body, .main-panel {
        width: unset;
        height: unset;
        min-height: unset;
        min-height: unset;
        float: unset;
        border: none;
        background: ${backg};
      }
      .video {
        border-radius: none;
      }
      .content {
        padding-right: 0;
      }
      #stream {
        width: 100%;
        min-height: 75vh;
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------------ */
  /* techoreels . com               */
  /* ------------------------------ */
  if (match(current, "*://*techclips.net*"),
      match(current, "*://*techoreels.com*"),
      match(current, "*://givemenbastreams.com*"),
      match(current, "https://techoreels.com/*")) {

      log("=== techoreels.com ===");
      var trash = ['#app > main > div > div > div > div.w-full.mt-5', 'span', 'span', 'span', 'span', 'span', 'span', 'span', 'span', 'tbody', '#app > main > div > div.w-full.rounded.overflow-hidden',
          '.dark-mode-toggle', 'div[id^=waldo]',
          '.shadow-lg.p-5.bg-primary.flex-wrap.justify-between.items-center.flex'];
      removeGarbage(trash);

      var style = `
      body, html, .p-5, .w-full {
        background: ${backg};
        padding: 0;
        margin: 0;
        max-width: unset;
      }
      .p-5.bg-gray-200 {
        margin:auto;
      }
      .rounded {
        border-radius: 0;
      }
      div[id^=waldo], p, .text-sm {
        display: none;
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------------------ */
  /* *://uhdstreams.club/hd*  (mntlive13) */
  /* ------------------------------------ */
  if (match(current, "*://uhdstreams.com/hd*") || match(current, '*://uhdstreams.club/hd/*')) {

      log("=== uhdstreams page (mntlive13) ===");
      log("Removing all links & target = blank attributes on : " + current);

      window.addEventListener("DOMContentLoaded", function () {
          document.querySelectorAll('a').forEach(el => { el.removeAttribute('target'); el.removeAttribute('href'); });
      });

      var style = `
      html, body {
        background: ${backg};
        margin: 0;
      }
      img {
       display: none;
      }`;

      pasteStyle(style);
  }


  /* ---------------------------------- */
  /* *://jmutech.xyz/* (AZULITO)        */
  /* ---------------------------------- */
  if (match(current, "*://jmutech.xyz*") || match(current, '*://theanh.tech*') || match(current, '*://aas.works/*')) {

      log("=== jmutech (Azulito) page ===");
      var trash = ['#page > div.g1-row.g1-row-layout-page.g1-hb-row.g1-hb-row-mobile.g1-hb-row-b.g1-hb-row-2.g1-hb-boxed.g1-hb-sticky-off.g1-hb-shadow-off > div.g1-row-inner', '.g1-row.g1-row-layout-page.g1-socials-section.g1-dark', '.g1-hb-shadow-off.g1-hb-sticky-off.g1-hb-boxed.g1-hb-row-2.g1-hb-row-b.g1-hb-row-normal.g1-hb-row.g1-row-layout-page.g1-row',
          '.g1-column-1of3.g1-column.g1-sidebar-padded.g1-sidebar', '.g1-row-layout-page.g1-row.g1-footer > .g1-row-background', '.g1-footer', 'h1.g1-mega', 'div.g1-row:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)'];
      removeGarbage(trash);

      var style = `
      .g1-typography-xl {
        line-height: 0;
      }
      .g1-row-padding-m {
        padding: 0;
      }
      .g1-content-narrow > .twitter-tweet, .g1-content-narrow > aside, .g1-content-narrow > audio, .g1-content-narrow > blockquote, .g1-content-narrow > canvas, .g1-content-narrow > code, .g1-content-narrow > div, .g1-content-narrow > dl, .g1-content-narrow > figure, .g1-content-narrow > form, .g1-content-narrow > h1, .g1-content-narrow > h2, .g1-content-narrow > h3, .g1-content-narrow > h4, .g1-content-narrow > h5, .g1-content-narrow > h6, .g1-content-narrow > hr, .g1-content-narrow > iframe, .g1-content-narrow > ol, .g1-content-narrow > p, .g1-content-narrow > pre, .g1-content-narrow > section, .g1-content-narrow > table, .g1-content-narrow > ul, .g1-content-narrow > video
      {
        max-width : 100%;
      }
      .g1-column-2of3 {
        width: 100%;
      }
      .vidmain {
        width: 100%;
        min-width: 100%;
      }
      `;
      pasteStyle(style);
  }


  /* ------------------------------------------- */
  /* http://sportinglive.co                      */
  /* ------------------------------------------- */
  if (match(current, "*://sportinglive.co*")) {

      log("=== sportinglive.co page ===");
      var trash = ['.nv-header-menu-block-wrap > .cv-container', '.widget-area', '.site-footer', '#id-custom_banner', '.site-header', '.nv-top-header-wrap', '.adsbyvli', '.entry-title'];
      removeGarbage(trash);

      var style = `
      #primary, .home.blog #primary { float: none; width: 100%; }
      #content { margin-top: 0; }
      .boxed_layout #page { box-shadow: none; }
        body, html, .boxed_layout #page {
        background: ${backg};
      }
      img, hr, br, p {
       display: none;
      }
      `;
      pasteStyle(style);
  }


  /* ------------------------------------------------- */
  /* *://thecyclingentertainment.com (CyclingStreams)  */
  /* motornews.live                                    */
  /* hockeyweb.live, sportson.site, bikesports.live    */
  /* ------------------------------------------------- */
  if (match(current, "*://thecyclingentertainment.com*") || match(current, "*://motornews.live*") ||
      match(current, "*://*thecyclingtv.live*")          || match(current, "*://hockeyweb.live*") ||
      match(current, "*://hockeyweb.site*")              || match(current, "*://sportson.site*")  ||
      match(current, "*://*bikesports.live*")) {

      log("=== hockeyweb / sportson / thecyclingentertainment / motornews / sportson ===");

      var trash = [
          'aside',
          '#site-header',
          '.af-breadcrumbs',
          '#site-footer',
          '.col-12.col-md-12.col-lg-4.col-xl-4.col-xxl-3',
          '.qc-cmp2-container', '#post-5855 > div > div > div > div > section > div > div > div > div > div > div > div > div > div > div:nth-child(3)',
          '#post-5855 > div > div > div > div > section > div > div > div > div > div > div > div > div > div > div:nth-child(1)', '.aoa_overlay', '.elementor-col-33', '.gen-bottom-header', '#qc-cmp2-persistent-link', 'footer', '#fixedban', '[href^="https://redi1.soccerstreams.net/"]', '.aft-sticky-sidebar.widget-area', '.masthead-banner', '.font-family-1.em-breadcrumbs', '.entry-title', '.primary-footer', '.site-info',
          '#id-custom_banner', '#div-gpt-ad-8176806-7', '#mt_hockeyweb.live_970x90_1', 'h6', '.masthead-banner', '.entry-title', '.gen-header',
          '.header-after1.widget-title', '.site-info', '.trail-items', '.aft-sticky-sidebar.widget-area', '.primary-footer'];

      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article, #content {
        background: ${backg};
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }
      textarea, a, br, hr, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
        display: none;
      }

      .entry-content, p, .hentry, .entry-content-wrap {
        padding: 0;
        margin: 0;
      }
      body.single #content > .row {
        margin-top: 0;
      }
      .container {
        max-width: 100%;
        min-width: 100%;
      }
      .container-wide {
        max-width: 100%;
      }
      header, a, .skip-link {
        display: none;
      }
      .col-xxl-9 {
        width: 100%;
      }
      #site-main .mt-4, #site-main .mb-4 {
        margin-top: 0;
        margin-bottom: 0;
      }
      .container, .shadow-sm {
        padding: 0;
      }
      .elementor-5855 .elementor-element.elementor-element-b712e0e {
        margin: 0;
      }
      .elementor-container, .elementor-row {
        display: block;
      }
      .elementor-col-66 {
        width: 100%;
      }
      div#player {
        height: 80vh;
      }
      .gen-blog-post {
        background: none;
        display: block;
        margin: 0;
        min-height: 0;
      }
      center {
        display:none;
      }
      .entry-content, body.dark .site-footer, html,
      body.dark input[type="search"], body.dark .comment-form input[type="text"], body.dark .comment-form input[type="email"], body.dark .comment-form input[type="url"], body.dark .comment-form textarea, body.dark.custom-background, body.dark,
      body.dark .af-search-form, body.dark .exclusive-posts, body.dark blockquote::before, body.dark .archive-layout-list, body.dark .slide-icon::before, body.dark .sp-next-arrow::before, body.dark .sp-previous-arrow::before, body.dark #secondary .posts-author-wrapper, body.dark .latest-posts-full .header-details-wrapper, body.dark #secondary .widget ul.article-tabbed-list, body.dark #secondary .widget ul:not(.cat-links), body.dark #secondary .widget ol, body.dark #primary ul.article-item.article-list-item.article-tabbed-list.article-item-left li.full-item.clearfix, body.dark .trending-posts-vertical-carousel .slick-slide .carousel-image, body.dark .trending-posts-carousel .slick-slide .carousel-image, body.dark .spotlight-post, body.dark .single-column-posts, body.dark article .entry-content-wrap, body.dark article .comments-area, body.dark article .em-posts-promotions .widget
      {
        background-color: transparent;
        background: ${backg};
      }
      div#primary {
        width: 100%;
      }
      .content-area .site-main {
        padding: 0;
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------ */
  /* bdnewszh.com             */
  /*                          */
  /* ------------------------ */
  if (match(current, "*://bdnewszh.com*") || match(current, "*://www.bdnewszh.com*")|| match(current, "*://*.bdnewszh.com*")) {

      var trash = [".ds_content", ".ds_content", "div[style^=position]", "script[src^=\\/\\/onpsapul]", 'next-route-announcer', '#__next > div > div:nth-child(5) > a', 'header', 'footer', '.footer', '.header', '.nav-teams', '.nav-teams__inner', '.player-view', '#div.container:nth-of-type(6)', '.abblock-msg', '.capitalize', '.billboard-banner', '.footer', '.footer-sticky-banner', '.right-sticky-banner', '.left-sticky-banner', '.container.powerdby'];
      removeGarbage(trash);

      var style = `
      html, body, .content, .contentarea {
        background: ${backg};
      }
      .content {
        border: none;
      }
      .contentarea {
        margin: 0;
        padding: 0;
      }
      .iframe {
        width: 80vw;
        height: 80vh;
      }
      .container, .player-size {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        padding: 0;
      }
      .player-view {
        width: 100%;
      }
      .event-item {
        display: none;
      }

      #__next > div > div:nth-child(2), .event-item, .nav-teams__inner, br, .left-sticky-banner, .right-sticky-banner, .footer-sticky-banner, a, h1 {
        display: none;
      }
      header, footer, .header, .footer, li, ul, center {
        display: none;
      }

      `;
      pasteStyle(style);
  }

  /* ----------------------- */
  /* *://bestnhl.com/*       */
  /* ----------------------- */
  if (match(current, "*://bestnhl.com*")) {

      log("=== BestNHL page ===");
      var trash = ['.bbevent.container', '.site-nav-outer'];
      removeGarbage(trash);

      document.querySelectorAll('.col-sm-8').forEach(el => { el.classList.remove('col-sm-8'); el.classList.add('col-8'); });
      document.querySelectorAll('.col-sm-4').forEach(el => { el.classList.remove('col-sm-4'); el.classList.add('col-4'); });

      var style = `
      html {
        background: #b3b3b3;
      }
      br { display: none; }
      body { height: 100%; background: unset; }
      .imagehome, .imageaway {
        width: unset;
        height: 30px;
      }
      .col-md-12 {
        background-color: #000;
        background-image: none;
        margin: 2px 0px;
        color: white;
        border-radius: 0px;
      }
      .col-md-12 button.btn {
        color: white;
      }
      .bbevent {
        box-shadow: none;
        border: none;
        height: 80px;
        margin-bottom: 1px;
        border-radius: 0px;
        transition: none;
      }
      .bbevent .watch-li {
        margin: 25px 20px 0px 0px;
        font-size: 14px;
        transition: none;
      }
      .bbevent h4 {
        font-size: 14px;
      }
      .bbevent h5 {
        font-size: 12px;
      }
      .bbevent h4, .bbevent h5 {
        margin-bottom: 0px;
      }
      .bbevent .watch-li a {
        transition: none;
        padding: 0px 10px 0px 10px;
      }
      /* target player's outer div, this is ugly */
      div[style*="float: left\"] {
        margin: auto;
        width: 100%;
        float: none;
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------------- */
  /* *://poscitech.club              */
  /* Inner Iframe Domain: olahdplay  */
  /* ------------------------------- */
  if (match(current, "*://*poscihd.com*") || match(current, "*://*poscitech.click*") || match(current, "*://*poscitechs.org*") || match(current, "*://*poscitech.com*") ||
      match(current, "*://*poscitech.org*") || match(current, "*://*specialgame.xyz*")) {

      log("=== poscitech ===");
      var unwantedElements = ['.col-md-3', '#sidebar', '.site-header', '.postmeta', '.footer-wrapper',
                              'footer', '.footer', '.navbar', '.brand', '.entry_meta',
                              '.entry-header', '.site-info', '#secondary', '#comments', '#colophon',
                              'nav', 'section', "header#masthead", "footer.footer-area"];

      removeGarbage(unwantedElements);

      checkElement('.text-red').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `

      body, html, .bg-gray-200, .inside-article, .post-content, article {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      iframe {
        border: none;
      }

      @media (prefers-color-scheme: light) {
        body, html, .bg-gray-200, .inside-article, .post-content, article {
          background: ${backgLight};
          background-color: ${backgLight}
        }
      }
      @media (prefers-color-scheme: dark) {
        body, html, .bg-gray-200, .inside-article, .post-content, article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      body.archive .post-inner-content, body.blog .post-inner-content, .post-inner-content:first-child {
        border: none;
      }
      #primary {
        width: 100%;
      }
      #main {
        height: 90vh;
      }
      .col-md-9 {
        width: 100%;
      }
      iframe {
        height: 75vh;
      }
      article.hentry {
        box-shadow: none;
        padding: 0;
        margin: 0;
      }
      `;
      pasteStyle(style);
  }

  /* ----------------------- */
  /* *://papahd.club/*       */
  /* ----------------------- */
  if (match(current, "*://papahd.club*") || match(current, "*://3papahd3.icu/*") || match(current, "*://papahd.co*") || match(current, "*://papafoot.click/*") || match(current, "*://papa4k.online/*")
     || match(current, "*://f1gplive.xyz/*") ) {
      log("=== papahd page ===");
      var trash = ['.skip-link', '#header', '#credit', '#footer', '.sidebar.s1', '.sidebar.s2', 'a[href*=total]', 'a[href*=discord]'];
      removeGarbage(trash);

      checkElement('.adblock_title').then((selector) => {
          document.querySelector('.adblock_title').parentElement.parentElement.parentElement.parentElement.parentElement.remove()
      });

      checkElement('center button[style^=background-color\\:]').then((selector) => {
            selector.parentElement.remove()
      });

      checkElement('.text-light').then((selector) => {
            selector.parentElement.remove()
      });

      var style = `
      .main, body, html, div.main, .col-2cl .main-inner, #wrapper, p {
        background: ${backg};
        background-color: ${backg};
      }
      .main-inner:before {
        background: none;
      }
      #wrapper, p {
        padding: 0;
        margin: 0;
      }
      #wrapper {
        margin : 0
      }
      .pad, .col-2cl .main-inner, .entry p, .entry dd, .main {
        padding: 0; margin: 0;
      }
      #page > .container-inner {
        box-shadow: none;
      }
      #page > .container-inner {
        border: 0;
        border-radius: 0;
      }
      h1, h2, h3, h4, h5, h6, br, .page-title {
        display: none;
      }
      iframe {
        width: 100%;
        height: 75vh;
      }
      `;
      pasteStyle(style);
  }

  /* ----------------------- */
  /* fabtech.work            */
  /* ----------------------- */
  if (match(current, "*://fabtech.work*")) {

      var trash = ['#secondary', '.g1-row-layout-page.g1-row.g1-footer > .g1-row-background', '.g1-column', '.g1-hb-shadow-off.g1-hb-sticky-off.g1-hb-boxed.g1-hb-row-2.g1-hb-row-b.g1-hb-row-normal.g1-hb-row.g1-row-layout-page.g1-row > .g1-row-background',
          '.g1-hb-shadow-off.g1-hb-sticky-off.g1-hb-boxed.g1-hb-row-2.g1-hb-row-b.g1-hb-row-normal.g1-hb-row.g1-row-layout-page.g1-row > .g1-row-inner > .g1-dropable.g1-column'];
      removeGarbage(trash);

      window.addEventListener("load", function () {
          injectFullscreenBeforeElement('.g1-content-narrow.g1-typography-xl.entry-content')
          injectReloadBeforeElement('.entry-content');
      });
  }

  /* --------------------------- */
  /* http://givemenbastreams.com */
  /* --------------------------- */
  if (match(current, "*://givemenbastreams.com*")) {

      var trash = ['#secondary', 'nav.flex'];
      removeGarbage(trash);

      window.addEventListener("load", function () {
          injectBeforeElement('.w-full.rounded.overflow-hidden.shadow-md.bg-white')
      });

      var style = `
      nav.flex {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ----------------------- */
  /* techstribes.com         */
  /* ----------------------- */
  if (match(current, "*://techstribes.com*")) {
      var trash = ['#live-chat-iframe', '#dismiss-btn'];
      removeGarbage(trash);
  }

  /* ----------------------- */
  /* sportsnest.co           */
  /* ----------------------- */
  if (match(current, "*://sportsnest.co*")) {

      var trash = [ 'div[id^=chp_ads_block_modal]', 'table', 'aside', 'img', 'header', '.entry-title', '.wp-dark-mode-wobble.wp-dark-mode-ignore', '#close', 'tr', 'td', 'td', 'h4', '#ad', '.nv-top-header-wrap', '.nv-header-menu-block-wrap', '.nv-logo-section-wrapper', '.site-footer'];
      removeGarbage(trash);

      checkElement('div[data-player]').then((selector) => {
          selector.style = "width: 100%";
      });

      var style = `
      hentry, #content, #masthead, #primary {
        margin: 0;
        padding: 0;
      }
      img, a, br, hr, table, h1, h2,h3,h4,h5,h6, div[id^=chp_ads_block_modal] {
        display: none;
      }
      #primary {
        width: unset;
        float: unset;
      }
      .cv-container, .entry-content, .hentry {
        margin: 0;
        padding: 0;
        border: 0;
      }
      .cv-container {
        margin: auto;
      }
      `;

      pasteStyle(style);
  }

  /* ----------------------- */
  /* myoplay.club (Dvaix)    */
  /* ----------------------- */
  if (match(current, "*://myoplay.club*") || match(current, "*://*tutele.sx*") || match(current, "*://*tutele.nl*")) {

      var trash = [
          '#overlayer',
          '.elementor-shape', '.elementor-shape', '.elementor-shape', '.elementor-shape-bottom',
          '.elementor-section-height-default.elementor-section-boxed.elementor-element-a652f79.elementor-element.elementor-top-section.elementor-section.has_eae_slider',
          '.elementor-section-height-default.elementor-section-boxed.eae-particle-yes.elementor-element-56a2f97.elementor-element.elementor-top-section.elementor-section.has_eae_slider',
          '.elementor-col-33',
          '.elementor-element-5eec605e.elementor-element.elementor-top-column.elementor-col-33.elementor-column.has_eae_slider',
          '.elementor-element-5cc92362.elementor-element.elementor-top-column.elementor-col-33.elementor-column.has_eae_slider',
          '.fadeIn.animated.elementor-section-height-default.elementor-section-boxed.eae-particle-yes.animated-slow.elementor-element-4e9f2566.elementor-element.elementor-top-section.elementor-section.has_eae_slider',
          '.elementor-section-height-default.elementor-section-boxed.eae-particle-yes.elementor-element-3d57dc49.elementor-element.elementor-top-section.elementor-section.has_eae_slider > .elementor-column-gap-default.elementor-container',
          '.elementor-section-height-default.elementor-section-boxed.elementor-hidden-phone.eae-particle-yes.elementor-element-21d35dd.elementor-element.elementor-top-section.elementor-section.has_eae_slider',
          '.elementor-section-height-default.elementor-section-boxed.elementor-hidden-phone.elementor-element-c83da38.elementor-element.elementor-top-section.elementor-section.has_eae_slider',
          '.elementor-element-53397b8.elementor-element.elementor-top-column.elementor-col-100.elementor-column.has_eae_slider > .elementor-element-populated.elementor-column-wrap > .elementor-widget-wrap',
          '.elementor-section-height-default.elementor-section-boxed.eae-particle-yes.elementor-element-8bb1600.elementor-element.elementor-top-section.elementor-section.has_eae_slider',
          '.elementor-element-55a2a14.elementor-element.elementor-top-column.elementor-col-100.elementor-column.has_eae_slider > .elementor-element-populated.elementor-column-wrap > .elementor-widget-wrap',
          '.elementor-shape-top.elementor-shape > svg',
          '.elementor-section-height-default.elementor-section-boxed.eae-particle-yes.elementor-element-3d57dc49.elementor-element.elementor-top-section.elementor-section.has_eae_slider',
          '.main-header.normal-header', '.footer-widget-area', '.sub-footer', 'iframe[src^="https://video.ibm.com"]', '.letters.type.eae-at-animation', '.elementor-button-wrapper', '.eae-particle-21d35dd', '.elementor-shape-top', '.elementor-widget', '.elementor-top-section', '.elementor-widget-container', 'div[style^="position: fixed; display: block"]'
      ];
      removeGarbage(trash);

      var style = `
      #overlayer {
        display: none;
      }
      html, body {
        background: ${backg};
      }
      .page-inner, .row {
        padding: 0;
        margin: 0;
      }
      a {
        display: none;
      }
      .elementor-column.elementor-col-66 {
        width: 100%;
      }
      .elementor-widget-text-editor {
        display: none;
      }
      .eae-particle-wrapper {
        display: none;
      }
      .has_eae_slider.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-1bbce7a6 {
        width: 100%;
      }
      `;

      pasteStyle(style);
  } /* End Myoplay */

  /* ----------------------- */
  /* 1stream.top             */
  /* ----------------------- */
  if (match(current, "*://1stream.top*")) {

      var trash = ['in-page-message', "div[id^='note-']", "div[id^='note-']", "div[id^='note-']",
          "div[id^='note-']", "div[id^='note-']", "div[id^='note-']", "div[id^='note-']",
          '.navbar', '#main-header-right', '.top-head-player', '#hide-chat-btn',
          '.col-md-3', '.col-md-12'];
      removeGarbage(trash);

      var style = `
      img, a, #overlayer {
        display: none;
      }
      .row {
        margin: 0;
      }
      html, body {
        background: ${backg};
      }
      .col-md-9.p-0.m-0.pr-0 {
        width: 100%;
      }
      div[id^='note-'] {
        display: none;
      }
      `;

      pasteStyle(style);
  }

  /* ----------------------- */
  /* Redditsport.live        */
  /* ----------------------- */
  if (match(current, "*://redditsport.live/*")) {
      checkElement('.col-sm-4').then((selector) => {
          log("Removing garbage");
          selector.remove();
      });
      checkElement('.col-sm-3').then((selector) => {
          log("Removing garbage");
          selector.remove();
      });
      checkElement('.col h2').then((selector) => {
          log("Removing garbage");
          selector.remove();
      });

  }

  /* ------------------------------------ */

  /*
   *
   *
   *
   *  Autoplay block
   *
   *
   *
   *
   * * * * /

  /* Removing other iframe on bestnhl to allow autoplay to work correctly */
  if (match(current, "*://bestnhl.com/soccer/stream/*")) {

      setTimeout(function () {
          log("=== Removing other iframes ===" + current);
          /* Select correct player, because all players seems to be loaded at the same time but with display: none; */
          /* This check the if #ipopp's parent div contains display: none. If not, it's the correct div. */
          var playersFrame = null;
          document.querySelectorAll('iframe#ipopp').forEach(el => {
              var displayState = el.parentNode.style.display;
              log(displayState);
              if (displayState == "") {
                  log("==== Visible player found ====");
                  playersFrame = el;
              }
              else {
                  el.parentNode.remove();
                  log("==== Removing other iframe... ===");
              }
          });
      }, 2000);
  }
  /* end bestnhl exception */

  /* Bitmovin autoplay*/
  setTimeout(function () {
      var bitmovinType = typeof bitmovin;
      console.log = console.dir;

      /* BITMOVIN START */
      if (bitmovinType === 'object') {
          log("=== Bitmovin Autoplay on " + current);

          /* Special case for best NHL */
          if (match(current, "*://bestnhl.com*")) {
              log("=== BESTNHL Handle AutoPlay with Bitmovin ===");
              /* Delaying bitmovin player detection to 2s */
              setTimeout(function () {
                  if (bitmovin.player('my-player') !== "null") {
                      /* Trying to unmute player and play it */
                      bitmovin.player('my-player').unmute();
                      bitmovin.player('my-player').play();
                      setTimeout(function () {
                          /* Player is in pause, mute and play. */
                          log("=== BESTNHL / Bitmovin : setTimeout");
                          if (!bitmovin.player('my-player').isPlaying()) {
                              log("=== BESTNHL / Bitmovin : Player is paused. Trying to mute & play ===");
                              bitmovin.player('my-player').mute();
                              bitmovin.player('my-player').play();
                          }
                      }, 50);
                  }
              }, 2000);
          }
          /* End Bitmovin BestNHL Special Case */

          /* Bitmovin (real) START */
          else if (typeof player == 'object') {
              /* Trying to unmute player and play it */
              player.unmute();
              player.play();
              setTimeout(function () {
                  /* Player is in pause, mute and play. */
                  if (!player.isPlaying()) {
                      player.mute();
                      player.play();
                  }
              }, 100);
          }
          else {
              /* Player undefined, fallback to querySelector */
              document.querySelector('video').muted = false;
              document.querySelector('video').play();
              setTimeout(function () {
                  /* Player is in pause, mute and play. */
                  if (document.querySelector('video').paused) {
                      log("=== Player is paused, mute and play. ===");
                      document.querySelector('video').muted = true;
                      document.querySelector('video').play();
                  }

              }, 100);
          }
      } /* BITMOVIN END */
      else if (typeof Clappr === 'object' &&

          // Disable on all sites having autoplay already enabled
          (!match(current, '*://uhdstreams.club*') &&
          !match(current, '*://givemenbastreams.com*') &&
          !match(current, '*sportinglive.co*') &&
          !match(current, '*tutele.sx*') &&
          !match(current, '*maxiplay.xyz*') &&
          !match(current, '*olahdplay.xyz*') &&
          !match(current, '*wecast.to*') &&
          !match(current, '*sports-stream.click*') &&
          !match(current, '*lovesomecommunity.com*') &&
          !match(current, '*stsgmrs.com*') &&
          !match(current, '*qwebplay.xyz*') &&
          !match(current, '*1stream.soccer*') &&
          !match(current, '*cucxt.live*') &&
          !match(current, '*abolishstand.net*') &
          !match(current, '*gameavenue.co*') &&
          !match(current, '*tutele.nl*'))) {
          log('Clappr Autoplay on ' + current);

            var promise = document.querySelector('video').play();
            if (promise !== undefined) {
                promise.then(function () {
                    log('Clappr Auto play allowed');
                    //document.querySelector('video').muted = false;
                    //player.unmute();
                }).catch(error => {
                    log('Clappr Autoplay with sound not allowed');

                    document.querySelector('video').play();

                    if (typeof (player) !== "undefined") {
                      // Check if player.setVolume function exist
                      if (typeof player.setVolume === 'function') {
                          log("[player Object] Set volume to 0 and play")
                          player.setVolume(0);
                          player.mute();
                      }
                      else {
                          document.querySelector('video').volume = 0
                      }
                    }
                    else {
                          log("[querySelector] Set volume to 0 and play")
                          document.querySelector('video').volume = 0;
                    }

                    document.querySelector('.player-poster').click();

                });
            }
            else {
                log('Clappr Autoplay not set');
                player.mute();
                document.querySelector('video').play();
            }

      } /* end Clappr */
      else if (typeof videojs === 'function') {
          log('Videojs Autoplay on ' + current);
          document.querySelector('video').muted = false;
          var promise = document.querySelector('video').play();
          if (promise !== undefined) {
              promise.then(function () {
                  log('Videojs Auto play allowed');
                  /* Autoplay started */
                  document.querySelector('video').muted = false;
              }).catch(error => {
                  log('Videojs Autoplay with sound not allowed');
                  /* Autoplay not allowed! */
                  document.querySelector('video').muted = true;
                  document.querySelector('video').play();
              });
          }
          else {
              log('Videojs Autoplay not set');
              document.querySelector('video').play();
          }
      } // end videojs */


      else if (typeof Hls !== "undefined") {
          if (Hls.isSupported()) {
            log('HLS.js Autoplay on ' + current);
            document.querySelector('video').muted = false;
            var promise = document.querySelector('video').play();
            if (promise !== undefined) {
                promise.then(function () {
                    log('HLS.js Auto play allowed');
                    /* Autoplay started */
                    document.querySelector('video').muted = false;
                }).catch(error => {
                    log('HLS.js Autoplay with sound not allowed');
                    /* Autoplay not allowed! */
                    document.querySelector('video').muted = true;
                    document.querySelector('video').play();
                });
            }
            else {
                log('HLS.js Autoplay not set');
                document.querySelector('video').play();
            }
        } // end HLS.js
      }
      else { log("No player found to run autoplay on, or autoplay script disabled for this website"); }
  }, 500);

  /* ------------------------------------ */


  /*
   *
   *
   * MutationObserver API
   * Used to catch malicious script and remove them
   *
   *
   * */
  let countClear = 0;
  new MutationObserver((mutations, observer) => {

      /* Whitelisting */
      /* Instantly disconnect observer on these sites, as it cause the site to not work at all */
      if (match(current, '*cutin.it*') || (match(current, '*https://bestnhl.com/*'))) {
          log('MutationObserver Whitelisted on this website : Observer Disconnected');
          observer.disconnect()
          return;
      }

      /* name of js files (href) to remove */
      var jsBlacklist = [ '\/scripts\/ads.js', 'ut.js', 'chulhawakened.com', 'oongouha.xyz', 'doruffleton', 'mo.min.js', 'migimsas.net', 'pvtypsgueyqey.com', '2734478852',
                         'pop.js', 'player-bundle.min.js', 'aoa-functions', 'greeter.me', 'footylight\-dubzstream-one.js', 'chatango', 'ads.min.js',
                         'deblocker.min.js', 'themoneytizer.com', 'console-ban', 'relationsquiver.com', 'amung.us',
                         'grandclemencydirt.com', 'showads.js', 'ltv_popup.php', 'cpxinteractive', 'tag.min.js',
                         'showads.php', 'adblock.php', 'frustration.js', 'initiallydoze', 'invoke.js', 'disable-devtool',
                         'histats', 'blast.js', 'deb.js', 'cdn4ads.js', 'suv4.js', 'quant', 'tag.js', 'mahimeta'];

      /* Remove whole <script> tag if one of these strings are in its code */
      var jsScriptBlacklist = [ 'popundersPerIP', 's3ii[129303]', 'return\\x20\(function\(\)\\x20', 'var _0xb64c=', 'disableselect','ConsoleBan', 'mdp_deblocker', 'currentReferer', 'runPageBugger',
                               '@3C@69@66@72@61@6D@65@20@73@61@6', 'killPageConsoleOpen', 'devtools\-detector', 'tag.min.js', '\/\?oo=1&aab=1',
                               'WAU_classic', 'debuggerChecker', 'killPageConsoleOpen', 'isConsoleOpen',
                               'gtag', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                               'allowedDomains\.indexOf' ]

      mutations.forEach(function(mutation) {

          var node, nodeType, src, href, injectedwithTag, wasRemoved;
          wasRemoved = false;

          if (mutation.addedNodes.length > 0) {

            node = mutation.addedNodes[0];
            nodeType = node.nodeName.toLowerCase();
            injectedwithTag = "\n//injectedWithAutoplay\n";

            if (nodeType == 'noscript') {
                log("\<noscript> tag removed.")
                node.remove();
            }
            else if (nodeType == 'script') {

                if (node.innerHTML.search('ignoreCrowdBypass') >= 1   || node.innerHTML.search('function injectProxy') >= 1 ||
                    node.innerHTML.search('universal-bypass') >= 1    || node.innerHTML.search('darkreader') >= 1           ||
                    node.textContent.search('//injectedWithAutoplay') >= 0) {
                    return;
                }

                /*
                 * After this commment
                 * Every <script> tag that match jsBlacklist get its whole <script> tag removed.
                 * */
                if (node.src) {
                    src = node.src;
                    /* Removing js files based on href uri */
                    jsBlacklist.forEach(e => {
                         if (src.match(e)) {
                            wasRemoved = true;
                            log("jsBlacklist (" + e + ") | Removed: " + src + " | Page: " +  current)
                            node.remove();
                            return;
                         }
                    });
                }
                else {

                    /* Removing inline js */
                    var innerHTML = node.innerHTML;
                    jsScriptBlacklist.forEach(e => {
                         if (innerHTML.includes(e)) {
                            wasRemoved = true;
                            log("jsScriptBlacklist | Keyword Found > " + e + " | Removed whole <script>. | Page: " +  current)
                            node.remove();
                            return;
                         }
                    });

                    /* inline js that requires multiple match to be removed */
                    if (node.innerHTML.match('debu') && node.innerHTML.match('trace') && node.innerHTML.match('navig')) {
                        wasRemoved = true;
                        log("Sketchy js found and removed | js that burns the CPU when console is open.");
                        node.remove();
                        return;
                    }
                    if (node.innerHTML.match('maxTouchPoints') && node.innerHTML.match('parseInt') &&
                        node.innerHTML.match('userAgent')      && node.innerHTML.match('click')) {
                            wasRemoved = true;
                            log("Sketchy js found and removed | maxTouchPoints & more...");
                            node.remove();
                            return;
                    }
                    if (node.innerHTML.match('popads.php') && node.innerHTML.match('userAgent') &&
                        node.innerHTML.match('setTimeout') && node.innerHTML.match('parseInt')) {
                            wasRemoved = true;
                            log("Sketchy js found and removed | popads.php, userAgent, setTimeout, parseInt");
                            node.remove();
                            return;
                    }
                    if (node.innerHTML.match('console.log')     && node.innerHTML.match('setTimeout') &&
                        node.innerHTML.match('LOG_LEVEL_ERROR') && node.innerHTML.match('parseInt')) {
                            wasRemoved = true;
                            log("Sketchy js found and removed | console.log, setTimeout, LOG_LEVEL_ERROR, parseInt");
                            node.remove();
                        return;
                    }
                    if (node.innerHTML.match('toString') && node.innerHTML.match('setTimeout')  && node.innerHTML.match('replace') &&
                        node.innerHTML.match('split')    && node.innerHTML.match('eval')        && node.innerHTML.match('constructor')) {
                            wasRemoved = true;
                            log("Sketchy js found and removed | toString, setTimeout, replace, split, eval, constructor");
                            node.remove();
                        return;
                    }
                    if (node.innerHTML.match('ABCDEFGHI') && node.innerHTML.match('split') && node.innerHTML.match('void') &&
                        node.innerHTML.match('eval')      && node.innerHTML.match('new Error')) {
                            wasRemoved = true;
                            log("Sketchy js found and removed | ABCDEFGHI, split, void, eval, new Error");
                            node.remove();
                        return;
                    }
                    if (node.innerHTML.match('createElement')    && node.innerHTML.match('XMLHttpRequest') &&
                        node.innerHTML.match('documentElement')  && node.innerHTML.match('parse')) {
                            wasRemoved = true;
                            log("Sketchy js found and removed | createElement, XMLHttpRequest, documentElement, parse");
                            node.remove();
                        return;
                    }
                    if (node.innerHTML.match('bodyMsg')  && node.innerHTML.match('siteConfig') &&
                        node.innerHTML.match('parseInt') && node.innerHTML.match('defineProperty')) {
                            wasRemoved = true;
                            log("Sketchy js found and removed | bodyMsg, siteConfig, parseInt, defineProperty");
                            node.remove();
                        return;
                    }
                    if (node.innerHTML.includes('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') &&
                        node.innerHTML.includes('slice') && node.innerHTML.includes('indexOf') && node.innerHTML.includes('pow') && node.innerHTML.includes('reduce')) {
                            wasRemoved = true;
                            log("Sketchy js found and removed | 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ, fromCharCode, Math, pow");
                            node.remove();
                        return;
                    }
                    if (node.innerHTML.includes('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') &&
                        node.innerHTML.includes('fromCharCode') && node.innerHTML.includes('Math') && node.innerHTML.includes('pow')) {
                            wasRemoved = true;
                            log("Sketchy js found and removed | 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ, fromCharCode, Math, pow");
                            node.remove();
                        return;
                    }
                    if (node.innerHTML.includes('pOpened') && node.innerHTML.includes('perSite') && node.innerHTML.includes('posred') && node.innerHTML.includes('removeEventListener')) {
                            wasRemoved = true;
                            log("Sketchy js found and removed | pOpened, perSite, posred, removeEventListener");
                            node.remove();
                        return;
                    }

                    if (node.innerHTML.includes('eval') && node.innerHTML.includes('function') && node.innerHTML.includes('debugger') && node.innerHTML.includes('constructor')) {
                            wasRemoved = true;
                            log("Sketchy js found and removed | eval,  function,  debugger, constructor");
                            node.remove();
                        return;
                    }

                    if (node.innerHTML.match('\{\}\.constructor') && node.innerHTML.includes('decodeURIComponent') &&
                        node.innerHTML.includes('charCodeAt')     && node.innerHTML.includes('fromCharCode')) {
                            wasRemoved = true;
                            log("Sketchy js found and removed | {}.constructor, decodeURIComponent, charCodeAt, fromCharCode");
                            node.remove();
                        return;
                    }

                    /*
                     * Debugging purpose
                     * */


                    /*
                    if (node.innerHTML.includes('')) {
                        console.log("Debug == " + node.innerHTML);
                        node.remove();
                        return;
                    }
                    */

                }

                /*
                 * After this commment
                 * Every <script> tag that match get partially replaced
                 * because these usually can only be removed partially
                 * */
                if (!wasRemoved) {
                    if (node.innerHTML.match('data:application/pdf;base64')) {
                        var currentScript = node.innerHTML;
                        currentScript = currentScript.replace(/var _0x.*function\(.*application\/pdf.*?;}\)\);/gm, `${injectedwithTag}`);
                        node.remove()
                        addScript(currentScript);
                        log('Sketchy js found and removed | data:application/pdf;base64')
                    }
                    else if ((node.textContent.search('window.location') >= 0 || node.textContent.search('document.location') >= 0) && node.textContent.search('document.location.protocol') <= 0 &&
                              node.textContent.search('window.location.reload') <= 0 &&
                              node.textContent.search('window.location.href') <= 0) {

                        var currentScript = node.innerHTML;
                        currentScript = currentScript.replace(/eval\(function \(p, a, c, k, e, d\) {.*}/gm, `${injectedwithTag}`);
                        currentScript = currentScript.replace(/window.location.replace\(".*?"\)/g, `console.log('no');${injectedwithTag}`);
                        currentScript = currentScript.replace(/if\(window==window.top\) {window.location.replace\(".*"\);}/g, `${injectedwithTag}`);
                        currentScript = currentScript.replace(/if\ \(document\.referrer\.indexOf\(b\)\!=-1\){\n.*\n}/g, `${injectedwithTag}`);
                        currentScript = currentScript.replace(/if\(window==window.top\){\n.*\n}/g, `${injectedwithTag}`);
                        currentScript = currentScript.replace(/setInterval\(function\(\){\n.*\n}, .*\)/g, `${injectedwithTag}`);
                        currentScript = currentScript.replace(/if\(window==window.top\) document.location="\/"/g, `${injectedwithTag}`);
                        currentScript = currentScript.replace(/function RedirectTo\(\){\n.*}/m, `${injectedwithTag}`);
                        currentScript = currentScript.replace(/if\(!isDomain\){\n.*}/gm, `${injectedwithTag}`);
                        currentScript = currentScript.replace(/if \(window == window.top\) document.location = "\/"/gm, `${injectedwithTag}`);
                        currentScript = currentScript.replace(/if\(self==top\) { .* }/g, `${injectedwithTag}`);
                        currentScript = currentScript.replace(/location.href = ".*"+.*;/g, `${injectedwithTag}`);
                        currentScript += injectedwithTag

                        node.remove()

                        log("Mutation observer: window.location removed");
                    }
                    // prevent scripts from clearing console.
                    else if (node.textContent.search('console.clear()') >= 0) {

                        /* because I actually don't know how to code */
                        countClear++;
                        if (countClear >= 10) {
                          return;
                        }

                        var currentScript = node.innerHTML;
                        currentScript = currentScript.replace(/console.clear();/g, `${injectedwithTag}`);
                        currentScript = currentScript.replace(/setInterval\(function\(\){console.clear\(\)},\( |\)[0-9]*\);/g, `${injectedwithTag}`);
                        currentScript += injectedwithTag
                        node.remove();

                        /* log(currentScript) */
                        addScript(currentScript);
                        log("MutationObserver: console.clear() removed");
                    }
                    else if (node.textContent.search('sandblaster.detect()') >= 0) {

                        const fakeJsObject = ` {
                          sandboxed: false,
                          sandboxed_test: function() { return false }
                        };`

                        var currentScript = node.innerHTML;
                        currentScript = currentScript.replace(/sandblaster.detect\(\);/g, `${fakeJsObject}${injectedwithTag}`);
                        node.remove();

                        setTimeout( function() { addScript(currentScript) } , 500)

                        log("MutationObserver: sandblaster.detect() replaced with fake const");
                    }
                }
            } // end | if (nodeType == 'script')
          }
      });

  }).observe(document.documentElement, { childList: true, subtree: true, attributes: true, characterData: true });

  /*
   *
   *
   *
   * Anti-Anti-RightClick Function
   * Loaded and run only on whitelisted url listed
   * at the end of the script
   *
   *
   *
   * */

  function loadAntiAntiRightClick() {
      window.addEventListener('contextmenu', function contextmenu(event) {
          event.stopPropagation();
          event.stopImmediatePropagation();
          var handler = new eventHandler(event);
          window.removeEventListener(event.type, contextmenu, true);
          var eventsCallBack = new eventsCall(function () { });
          handler.fire();
          window.addEventListener(event.type, contextmenu, true);
          if (handler.isCanceled && (eventsCallBack.isCalled)) {
              event.preventDefault();
          }
      }, true);

      if (window && typeof window != undefined) {

          var doc = document;
          var body = document.body;

          var docEvents = [
              doc.oncontextmenu = null,
              doc.onselectstart = null,
              doc.ondragstart = null,
              doc.onmousedown = null
          ];

          var bodyEvents = [
              body.oncontextmenu = null,
              body.onselectstart = null,
              body.ondragstart = null,
              body.onmousedown = null,
              body.oncut = null,
              body.oncopy = null,
              body.onpaste = null
          ];

          [].forEach.call(
              ['copy', 'cut', 'paste', 'select', 'selectstart'],
              function (event) {
                  document.addEventListener(event, function (e) { e.stopPropagation(); }, true);
              }
          );

          [].forEach.call(
              ['click', 'contextmenu', 'copy', 'cut', 'paste', 'mouseup', 'mousedown', 'keyup', 'keydown', 'drag', 'dragstart', 'select', 'selectstart'],
              function (event) {
                  document.addEventListener(event, function (e) { e.stopPropagation(); }, true);
              }
          );

          window.addEventListener('devtoolschange', function contextmenu(event) {
              event.stopPropagation();
              event.stopImmediatePropagation();
              var handler = new eventHandler(event);
              window.removeEventListener(event.type, contextmenu, true);
              var eventsCallBack = new eventsCall(function () { });
              handler.fire();
              window.addEventListener(event.type, contextmenu, true);
              if (handler.isCanceled && (eventsCallBack.isCalled)) {
                  event.preventDefault();
              }
          }, true);

          window.addEventListener('contextmenu', function contextmenu(event) {
              event.stopPropagation();
              event.stopImmediatePropagation();
              var handler = new eventHandler(event);
              window.removeEventListener(event.type, contextmenu, true);
              var eventsCallBack = new eventsCall(function () { });
              handler.fire();
              window.addEventListener(event.type, contextmenu, true);
              if (handler.isCanceled && (eventsCallBack.isCalled)) {
                  event.preventDefault();
              }
          }, true);
      }

      function eventsCall() {
          this.events = ['DOMAttrModified', 'DOMNodeInserted', 'DOMNodeRemoved', 'DOMCharacterDataModified', 'DOMSubtreeModified'];
          this.bind();
      }

      eventsCall.prototype.bind = function () {
          this.events.forEach(function (event) {
              document.addEventListener(event, this, true);
          }.bind(this));
      };

      eventsCall.prototype.handleEvent = function () {
          this.isCalled = true;
      };

      eventsCall.prototype.unbind = function () {
          this.events.forEach(function (event) { }.bind(this));
      };

      function eventHandler(event) {
          this.event = event;
          this.contextmenuEvent = this.createEvent(this.event.type);
      }

      eventHandler.prototype.createEvent = function (type) {
          var target = this.event.target;
          var event = target.ownerDocument.createEvent('MouseEvents');
          event.initMouseEvent(
              type, this.event.bubbles, this.event.cancelable,
              target.ownerDocument.defaultView, this.event.detail,
              this.event.screenX, this.event.screenY, this.event.clientX, this.event.clientY,
              this.event.ctrlKey, this.event.altKey, this.event.shiftKey, this.event.metaKey,
              this.event.button, this.event.relatedTarget
          );
          return event;
      };

      eventHandler.prototype.fire = function () {
          var target = this.event.target;
          var contextmenuHandler = function (event) {
              event.preventDefault();
          }.bind(this);
          target.dispatchEvent(this.contextmenuEvent);
          this.isCanceled = this.contextmenuEvent.defaultPrevented;
      };
  }

  if (match(current, "*://qwebplay.xyz/*") || match(current, "*://p2pstreams.tv/*")     || match(current, "*://bhqwplay.xyz/*")       ||
      match(current, "*://olahdplay.xyz*") || match(current, "*://uhdstreams.com/hd*")  || match(current, '*://uhdstreams.club/hd/*') ||
      match(current, "*://tezgoal.com/*")  || match(current, "*://bhliga.com/*")        || match(current, "*://dzeko11.net/*")        ||
      match(current, '*://wigistream.to/embed/*') || match(current, '*://streamservice443.net/*') ||
      match(current, '*://player.licenses4.me/*') || match(current, "*://myoplay.club*")) {
      log("==== Antiantirightclick loaded ====");
      loadAntiAntiRightClick();
  }

})();