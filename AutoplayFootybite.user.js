// ==UserScript==
// @version     15.0.2
// @author      Write
// @name        AutoplayFootybite
// @namespace   Autoplay Block Ads Footybite
// @description AutoPlay and Block ads on Reddit Soccerstream's streams
//
// @downloadURL https://github.com/Write/AutoPlaySoccerStreams/raw/main/AutoplayFootybite.user.js
// @homepageURL https://github.com/Write/AutoPlaySoccerStreams
//
// @icon        https://icons.duckduckgo.com/ip2/footybite.to.ico
// @run-at      document-start
//
// @include     *://*soccerlive.app/*
// @match       *://*.footybite.to/*
// @match       *://footybite.to/*
// @match       *://footybite.cc/*
// @match       *://*.footybite.cc/*
// @include     *://*livetv.unblckd.pw/*
// @include     *://*livetv.sx/*
//
// @match       *://tinyurl.is/*
// @match       *://tinyurl.so/*
// @match       *://cutin.it/*
// @match       *://hockeyweb.site/*
// @match       *://hockeyweb.live/*
// @match       *://sportson.site/*
// @match       *://givemenbastreams.com/*
// @match       *://uhdstreams.club/*
// @match       *://mygoodstream.pw/*
// @match       *://1stream.top/*
// @match       *://1stream.soccer/*
// @match       *://redditsport.live/*
// @match       *://uhdstreams.club/*
// @match       *://bdnewszh.com/*
// @match       *://*.bdnewszh.com/*
// @match       *://www.bdnewszh.com/*
// @match       *://thecyclingentertainment.com/*
// @match       *://motornews.live/*
// @match       *://scoresunday.com/*
// @match       *://sportinglive.co/*
// @match       *://rsoccerstreams.com*/
// @match       *://*.rsoccerstreams.com/*
// @match       *://techoreels.com/*
// @match       *://techclips.net/*
// @match       *://myoplay.club/*
// @match       *://www.tutele.sx/*
// @match       *://*.tutele.sx/*
// @match       *://www.tutele.nl/*
// @match       *://*.tutele.nl/*
// @match       *://fabtech.work/*
// @match       *://techstribes.com/*
// @match       *://elixx.xyz/*
// @match       *://sportsnest.co/*
// @match       *://papahd.club/*
// @match       *://3papahd3.icu/*
// @match       *://papafoot.click/*
// @match       *://hinhnenhd.info/*
// @match       *://gamerarcades.com/*
// @match       *://poscitech.com/*
// @match       *://*.poscitech.com/*
// @match       *://*poscitech.org/*
// @match       *://*poscitech.click/*
// @match       *://*specialgame.xyz/*
// @match       *://nizarstream.com/*
// @match       *://*.nizarstream.com/*
// @match       *://www.techstips.live/*
// @match       *://techstips.live/*
// @match       *://player.licenses4.me/*
// @match       *://bestnhl.com/*
// @match       *://jmutech.xyz/*
// @match       *://theanh.tech/*
// @match       *://sportsonline.to/*
// @match       *://*.sportsonline.to/*
// @match       *://npstream.net/*
// @match       *://*.npstream.net/*
// @match       *://wigistream.to/embed/*
// @match       *://swarm.video/*
// @match       *://*.streamservice443.net/*
// @match       *://streamservice443.net/*
// @match       *://ragnaru.net/*
// @match       *://nowlive.pro/*
// @match       *://timesports.cc/*
// @match       *://blacktiesports.net/*
// @match       *://blacktiesports.to/*
// @match       *://torridplay.com/*
// @match       *://assia4.com/*
// @match       *://foxgame.xyz/*
// @match       *://sportslandnews.com/*
// @match       *://nflscoop.net/*
// @match       *://aas.works/*
// @match       *://matchtime.co/*
// @match       *://www.pawastreams.live/*
// @match       *://tezgoal.com/*
// @match       *://dzeko11.net/*
// @match       *://streamsoccers.com/*
// @match       *://streamhd247.online/*
// @match       *://stakes100.xyz/*
// @match       *://youpit.xyz/*
// @match       *://youpits.xyz/*
// @match       *://60fps.xyz/*
// @match       *://silverspoon.site/*
// @match       *://p2pstreams.live/*
// @match       *://xestreams.com/*
// @match       *://nflsportz.com/*
// @match       *://tvtoss.club/*
// @match       *://bingsport.xyz/*
// @match       *://soccer4u.club/*
// @match       *://player.bizzstreams2u.xyz/*
// @match       *://worldsport.me/*
// @match       *://*.worldsport.me/*
// @match       *://nowlive.pro/*
// @match       *://bhliga.com/*
// @match       *://*.bhliga.com/*
// @match       *://*.gameavenue.co/*
// @match       *://gameavenue.co/*
// @match       *://nflbite.to/*
// @match       *://*.nflbite.to/*
// @match       *://*.catchystream.com/*
// @match       *://catchystream.com/*
// @match       *://*.fordems.live/*
// @match       *://fordems.live/*
// @match       *://*.sportsgala.xyz/*
// @match       *://sportsgala.xyz/*
// @match       *://dynamicrevival.net/*
// @match       *://*.dynamicrevival.net/*
// @match       *://sportsonline.sx/*
// @match       *://*.sportsonline.sx/*
// @match       *://supercast2.com/*
// @match       *://s1os.icu/*
// @match       *://wikisport.click/*
// @match       *://b4ucast.com/*
// @match       *://www.nolive.me/*
// @match       *://enjoy4hd.site/*
// @match       *://enjoyhd.club/*
// @match       *://em.bedsport.live/*
// @match       *://*.bedsport.live/*
// @match       *://*footballstreams.top/*
// @match       *://*f1streams.pro/*
// @match       *://*nfllivestream.top/*
// @match       *://*yehfullhd.live/*
// @match       *://*nbabite.to/*
// @match       *://*olahdplay.xyz/*
// @match       *://*bhqwplay.xyz/*
// @match       *://*totalsportek.soccer/*
// @match       *://*sportschamp.fun/*
// @match       *://*alexsportz.online/*
// @match       *://*gamerarcades.com/*
// @match       *://*bestreamsports.org/*
// @match       *://*sportsonline.sx/*
// @match       *://*nbalivestream.top/*
// @match       *://*embed4u.xyz/*
// @match       *://*f1livestream.top/*
// @match       *://*bigeventz.xyz/*
// @match       *://*hdfungames.site/*
// @match       *://*p2pstreams.tv/*
// @match       *://*stsgmrs.com/*
// @match       *://*hdfungames/*
// @match       *://*wecast.to/*
// @match       *://*voodc.com/*
// @match       *://*sports-stream.click/*
// @match       *://*hugecasting.com/*
// @match       *://*sharecast.ws/*
// @match       *://*brelif.net/*
// @match       *://*playstream.site/*
// @match       *://*lovesomecommunity.com/*
// @match       *://*hxekha.cucxt.live/*
// @match       *://*soccermlbstream.xyz/*
// @match       *://*hdfungames.site/*
// @match       *://*nowagoal2.xyz/*
// @match       *://*superwebplay.xyz/*
// @match       *://superwebplay.xyz/*
// @include     *://*techydeals.us/*
// @include     *://*wevgames.com/*
// @include     *://*daddylivehd.sx/*
// @include     *://*qwebplay.xyz/*
// @include     *://*tonnestreamz.xyz/*
// @include     *://*bein-sports.online/*
// @include     *://cr7soccer.club/*
// @include     *://adisports.xyz/*
// @include     *://*sjumbotvs.me/*
// @include     *://*hesgoals.top/*
// @include     *://*dubznetwork.com/*
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
// @include     *://*apl265.me/*
// @include     *://*livetvstream.pro/*
// @include     *://*abolishstand.net/*
// @include     *://*sportea.online/*
// @include     *://*sportcast.fun/*
// ==/UserScript==

(function () {
  'use strict';

  const current = window.location.href;

  /* ----------------------- */
  /* Functions / Utils       */
  /* ----------------------- */
  const isDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? true : false;

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
  var trash = [ 'iframe[src*=chatango]', 'iframe[src*=live_chat]',
                  '#micast_ads', 'iframe[src*=ads\\.php]',
                  '#\\30', '#ni-overlay', 'polygon',
                  'iframe[src*=ads\\.livetv695\\.me]'
              ];

  removeGarbage(trash);

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
      var trash = [""];
      // removeGarbage(trash);

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
      @media (prefers-color-scheme: darl) {
        body, html, .bg-gray-200, .inside-article {
          background: ${backgDark};
          background-color: ${backgDark}
        }
      }
      `;
      pasteStyle(style);
  }

  /* ------------------------- */
  /* Skeleton to re-use        */
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
      @media (prefers-color-scheme: darl) {
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
  if (match(current, "*://*apl265.me*") || match(current, "*://*livetvstream.pro*")) {

      log("=== "+ current + " ===");
      var trash = [
                    "#ads", "#adbtm", "div[onclick*=\\(\\)", "#stpd",
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
      @media (prefers-color-scheme: darl) {
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
      @media (prefers-color-scheme: darl) {
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
  if (match(current, "*://*livetv695.me/*") || match(current, "*://*livetv6*.me/*")) {

      log("=== "+ current + " ===");
      var trash = [ "#localpp", "td[background*=h_bg_p]"];
      removeGarbage(trash);

      var style = `
      #playerblock {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%
      }
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
      @media (prefers-color-scheme: darl) {
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
      var trash = [ "#footylight_dubzstream_one", "iframe[src^=\\/sticky\\.html]", ".aoa_overlay", ".single-related-posts", ".dp-social-media-share-wrap"];
      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article,
      .site-inner, .wrap, .body-background-2, .site-container {
        border: none;
        box-shadow: none;
        background: ${backg};
        margin: 0;
        padding: 0;
      }
      video {
        top: 145px;
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
                   "nav.navigation.post-navigation", ".navigation.post-navigation"];
      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article,
      center, .mg-blog-post-box .small.single, article {
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
  /* yehfullhd                 */
  /* ------------------------- */
  if (match(current, "*://*yehfullhd.live*")) {

      log("=== "+ current + " ===");
      var trash = ["header", "#masthead", "div.col-lg-3", "div.nav-links",
                   ".entry-footer", "nav", ".navigation.post-navigation",
                   "#comments", "#colophon"];
      removeGarbage(trash);

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
  /* daddylivehd.sx            */
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
      var trash = ["div.bg-light-gray.my-2.py-4", "header", "#footer", ".elementor-column-gap-custom",".elementor-column-gap-custom", ".second-iframe", "div.elementor-column:nth-child(2) > div:nth-child(1)", "div.elementor-column:nth-child(2)",
                       '.site-below-footer-wrap[data-section="section-below-footer-builder"]', ".elementor-location-header", ".site-footer"];
      removeGarbage(trash);

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
      var trash = ['#ga-overlay', 'ins', '#dismiss-btn', '.entry-header', '.adsbymahimeta', '.top-header', 'nav', '.adsbyvli', '.masthead', 'h1', '.inside-header', '.sidebar', '.inside-right-sidebar'];
      removeGarbage(trash);

      var style = `
      body, html, .bg-gray-200, .inside-article {
        background: ${backg};
        margin: 0;
        padding: 0;
      }
      .rounded { border-radius: 0; border: 0; }
      .shadow-md { box-shadow: none; }
      .shadow-lg, img, a, br, td, .top-bar, .side-menu-wrap, .top-header { display: none; }
      iframe {
        display: block;
        height: 75vh;
        width: 100%;
        margin: auto;
      }
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
  if (match(current, "*://youpit.xyz/*") || match(current, "*://youpits.xyz/*") || match(current, '*://60fps.xyz/*'))  {


      log("=== "+ current + " ===");
      var trash = ['h1', '.inside-header', '.sidebar', '.inside-right-sidebar', '.site-footer'];
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
          'a[onclick^=closeSmartLink]', 'a div[onclick^=closeSmartLink]'
      ];
      removeGarbage(trash);
      var style = `
      a[onclick^=closeSmartLink],
      a div[onclick^=closeSmartLink] {
        display: none;
      }
      `;

      pasteStyle(style);

  }

  /* ----------------------- */
  /* soccerstreams.com/     */
  /* ----------------------- */

  if (match(current, "*://*footybite.to*") || match(current, "*://footybite.to*") || match(current, "*://*footybite.cc*")) {

      log("=== Main footybite page ===");

      var trash = [
          '.ad-banner', '.second-iframe', '.teams', '.news-right-sec-div', '.news-right-sec', '.mt-3.mb-3.text-center', '.alert-warning.alert',
          '.alert-dismissible', '#event-sticky-info', '.col-md-4',
          'footer', '#event-tags-h', '#event-tags',
          'a[href^=\\/dcma]'
      ];
      removeGarbage(trash);

      checkElement('.col-md-9').then((selector) => {
          document.querySelectorAll('.col-md-9').forEach(el => { el.classList.remove('col-md-9'); el.classList.add('col-md-12'); });
      });

      /*
       * Inject and replace with real <a href> tags
       * in lieu of onclick event, which "mask" website url
       * */
      checkElement('tr input[id^=linkk]').then((selector) => {
          document.querySelectorAll('tr input[id^=linkk]').forEach((e) => {
               console.log("URL Handler : id | " + e.id + " | value | " + e.value);
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
            .text-dark-l {
              color: #282828;
              font-weight: 800;
            }
            #timer.text-white {
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
  /* nflscoop . com           */
  /* ------------------------------ */
  if (match(current, "*://gameavenue.co*") || match(current, "*://*.gameavenue.co*")) {

      log("=== gameavenue.co ===");
      var trash = ['#ast-desktop-header', '.secondary.widget-area', 'table', '.site-footer', '.left_bottom.floating.style-1.wp-dark-mode-ignore.wp-dark-mode-switcher',
                       '.cky-btn-revisit', '.cky-revisit-bottom-left.cky-btn-revisit-wrapper'];
      removeGarbage(trash);
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
  if (match(current, "*://*poscitech.click*") || match(current, "*://*poscitech.com*") || match(current, "*://*poscitech.org*") || match(current, "*://*specialgame.xyz*")) {

      log("=== poscitech ===");
      var unwantedElements = ['.col-md-3', '#sidebar', '.site-header', '.postmeta', '.footer-wrapper', 'h3', 'h1', 'footer', '.footer', '.navbar', '.brand', '.entry_meta', '.entry-header', '.site-info', '#secondary', '#comments', '#colophon', 'nav'];
      removeGarbage(unwantedElements);

      var style = `
      .entry-title {
        display: none;
      }
      a {
        display: none;
      }
      .entry-title {
        color: white;
      }
      body, html,article, .content-area {
        background: ${backg};
      }
      #primary, .post-inner-content, .entry-content {
        margin: 0;
        padding: 0;
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
  if (match(current, "*://papahd.club*") || match(current, "*://3papahd3.icu/*") || match(current, "*://papafoot.click/*") ) {
      log("=== papahd page ===");
      var trash = ['.skip-link', '#header', '#credit', '#footer', '.sidebar.s1', '.sidebar.s2', 'a[href*=total]', 'a[href*=discord]'];
      removeGarbage(trash);

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
          !match(current, '*tutele.nl*'))) {
          log('Clappr Autoplay on ' + current);
            document.querySelector('video').muted = false;
            document.querySelector('.player-poster').click();
            var promise = document.querySelector('video').play();
            if (promise !== undefined) {
                promise.then(function () {

                    log('Clappr Auto play allowed');
                    //document.querySelector('video').muted = false;
                    //player.unmute();
                }).catch(error => {
                    log('Clappr Autoplay with sound not allowed');
                    document.querySelector('video').play();
                    player.setVolume(0);
                    player.mute();
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
      else if (Hls.isSupported()) {
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
      else { log("No player found to autoplay"); }
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
      var jsBlacklist = [ 'pop.js', 'player-bundle.min.js', 'aoa-functions', 'greeter.me', 'footylight\-dubzstream-one.js', 'chatango', 'ads.min.js',
                         'deblocker.min.js', 'themoneytizer.com', 'console-ban', 'relationsquiver.com', 'amung.us',
                         'grandclemencydirt.com', 'showads.js', 'ltv_popup.php',
                         'showads.php', 'adblock.php', 'frustration.js', 'initiallydoze', 'invoke.js', 'disable-devtool',
                         'histats', 'blast.js', 'deb.js', 'cdn4ads.js', 'suv4.js', 'quant', 'tag.js', 'mahimeta'];

      /* Remove whole <script> tag if one of these strings are in its code */
      var jsScriptBlacklist = [ 's3ii[129303]', 'sandblaster.detect\(\)', 'return\\x20\(function\(\)\\x20', 'var _0xb64c=', 'disableselect','ConsoleBan', 'mdp_deblocker', 'currentReferer', 'runPageBugger',
                               '@3C@69@66@72@61@6D@65@20@73@61@6', 'killPageConsoleOpen', 'devtools\-detector',
                               'WAU_classic', 'debuggerChecker', 'killPageConsoleOpen', 'isConsoleOpen',
                               'gtag', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                               'allowedDomains\.indexOf' ]

      mutations.forEach(function(mutation) {

          var node, nodeType, src, href;

          if (mutation.addedNodes.length > 0) {

            node = mutation.addedNodes[0];
            nodeType = node.nodeName.toLowerCase();

            if (nodeType == 'noscript') {
                log("\<noscript> tag removed.")
                node.remove();
            }
            else if (nodeType == 'script') {

                /*
                 * After this commment
                 * Every <script> tag that match jsBlacklist get its whole <script> tag removed.
                 * */
                if (node.src) {
                    src = node.src;
                    /* Removing js files based on href uri */
                    jsBlacklist.forEach(e => {
                         if (src.match(e)) {
                            log("jsBlacklist (" + e + ") | Removed: " + src)
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
                            log("jsScriptBlacklist | Keyword Found > " + e + " | Removed whole <script>.")
                            node.remove();
                            return;
                         }
                    });

                    /* inline js that requires multiple match to be removed */
                    if (node.innerHTML.match('debu') && node.innerHTML.match('trace') && node.innerHTML.match('navig')) {
                        // Not instant, need to wait a little for the js to be removed and then open the console
                        log("Sketchy js found and removed | js that burns the CPU when console is open.");
                        node.remove();
                    }
                    else if (node.innerHTML.match('maxTouchPoints') && node.innerHTML.match('parseInt') && node.innerHTML.match('userAgent') && node.innerHTML.match('click')) {
                        log("Sketchy js found and removed | maxTouchPoints & more...");
                        node.remove();
                    }
                    else if (node.innerHTML.match('popads.php') && node.innerHTML.match('userAgent') && node.innerHTML.match('setTimeout') && node.innerHTML.match('parseInt')) {
                        // Not instant, need to wait a little for the js to be removed and then open the console
                        log("Sketchy js found and removed | popads.php, userAgent, setTimeout, parseInt");
                        node.remove();
                    }
                    else if (node.innerHTML.match('console.log') && node.innerHTML.match('setTimeout') && node.innerHTML.match('LOG_LEVEL_ERROR') && node.innerHTML.match('parseInt')) {
                        // Not instant, need to wait a little for the js to be removed and then open the console
                        log("Sketchy js found and removed | console.log, setTimeout, LOG_LEVEL_ERROR, parseInt");
                        node.remove();
                    }
                    else if (node.innerHTML.match('toString') && node.innerHTML.match('setTimeout') && node.innerHTML.match('replace') && node.innerHTML.match('split')
                             && node.innerHTML.match('eval') && node.innerHTML.match('constructor') && node.innerHTML.search('ignoreCrowdBypass') <= 0) {
                        // Not instant, need to wait a little for the js to be removed and then open the console
                        log("Sketchy js found and removed | toString, setTimeout, replace, split, eval, constructor");
                        node.remove();
                    }

                }

                /*
                 * After this commment
                 * Every <script> tag that match get partially replaced
                 * because these usually can only be removed partially
                 * */
                if (node.innerHTML.match('data:application/pdf;base64')) {
                    /* Removing yet another sketchy obfuscated js */
                    var currentScript = node.innerHTML;
                    currentScript = currentScript.replace(/var _0x.*function\(.*application\/pdf.*?;}\)\);/gm, "");
                    node.remove()
                    log('Sketchy js found and removed | data:application/pdf;base64')
                    addScript(currentScript);
                }
                else if ((node.textContent.search('window.location') >= 0 || node.textContent.search('document.location') >= 0) &&
                          node.textContent.search('window.location.reload') <= 0 &&
                          node.textContent.search('window.location.href') <= 0 &&
                          node.textContent.search('darkreader') == -1 && node.textContent.search('universal-bypass') == -1) {

                    var currentScript = node.innerHTML;
                    currentScript = currentScript.replace(/eval\(function \(p, a, c, k, e, d\) {.*}/gm, '');
                    currentScript = currentScript.replace(/window.location.replace\(".*?"\)/g, 'log("snif snif")');
                    currentScript = currentScript.replace(/if\(window==window.top\) {window.location.replace\(".*"\);}/g, "");
                    currentScript = currentScript.replace(/if\ \(document\.referrer\.indexOf\(b\)\!=-1\){\n.*\n}/g, "");
                    currentScript = currentScript.replace(/if\(window==window.top\){\n.*\n}/g, "");
                    currentScript = currentScript.replace(/setInterval\(function\(\){\n.*\n}, .*\)/g, "");
                    currentScript = currentScript.replace(/if\(window==window.top\) document.location="\/"/g, "");
                    currentScript = currentScript.replace(/function RedirectTo\(\){\n.*}/m, "");
                    currentScript = currentScript.replace(/if\(!isDomain\){\n.*}/gm, "");
                    currentScript = currentScript.replace(/if \(window == window.top\) document.location = "\/"/gm, "");
                    currentScript = currentScript.replace(/if\(self==top\) { .* }/g, "");
                    currentScript = currentScript.replace(/location.href = ".*"+.*;/g, "");

                    node.remove()

                    /* log(currentScript) */
                    //addScript(currentScript);
                    log("Mutation observer: window.location removed");
                }
                // prevent scripts from clearing console.
                else if ((node.textContent.search('console.clear()') >= 0) &&
                     node.textContent.search('darkreader') == -1 && node.textContent.search('universal-bypass') == -1) {

                    /* because I actually don't know how to code */
                    countClear++;
                    if (countClear >= 10) {
                      return;
                    }

                    var currentScript = node.innerHTML;
                    currentScript = currentScript.replace(/console.clear();/g, '');
                    currentScript = currentScript.replace(/setInterval\(function\(\){console.clear\(\)},\( |\)[0-9]*\);/g, '');

                    node.remove();

                    /* log(currentScript) */
                    addScript(currentScript);
                    log("MutationObserver: console.clear() removed");
                }

            } // end | if (nodeType == 'script')
          }
      });

  }).observe(document.documentElement, { childList: true, subtree: true });

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