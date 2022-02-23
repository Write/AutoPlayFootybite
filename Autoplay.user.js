// ==UserScript==
// @name        Autoplay
// @namespace   Autoplay Block Ads Soccerstreams
// @description AutoPlay and Block ads on Reddit Soccerstream's streams
// @downloadURL https://github.com/Write/AutoPlaySoccerStreams/raw/main/Autoplay.user.js
// @homepageURL https://github.com/Write/AutoPlaySoccerStreams
// @match       *://tinyurl.is/*
// @match       *://hockeyweb.site/*
// @match       *://hockeyweb.live/*
// @match       *://sportson.site/*
// @match       *://weakstreams.com/*
// @match       *://givemenbastreams.com/*
// @match       *://uhdstreams.club/*
// @match       *://mygoodstream.pw/*
// @match       *://1stream.top/*
// @match       *://redditsport.live/*
// @match       *://uhdstreams.club/*
// @match       *://bdnewszh.com/*
// @match       *://thecyclingentertainment.com/*
// @match       *://scoresunday.com/*
// @match       *://sportinglive.co/*
// @match       *://cr7soccer.club/*
// @match       *://rsoccerstreams.com/*
// @match       *://*.rsoccerstreams.com/*
// @match       *://footybite.cc/*
// @match       *://*.footybite.cc/*
// @match       *://soccerstreams.net/*
// @match       *://*.soccerstreams.net/*
// @match       *://*techoreels.com/*
// @match       *://myoplay.club/*
// @match       *://fabtech.work/*
// @match       *://techstribes.com/*
// @match       *://elixx.xyz/*
// @match       *://sportsnest.co/*
// @match       *://papahd.club/*
// @match       *://hinhnenhd.info/*
// @match       *://gamerarcades.com/*
// @match       *://poscitech.com/*
// @match       *://bestnhl.com/*
// @match       *://jmutech.xyz/*
// @match       *://sportsonline.to/*
// @match       *://wigistream.to/embed/*
// @match       *://ragnaru.net/*
// @match       *://nowlive.pro/*
// @match       *://www.tutele.sx/*
// @match       *://*.tutele.sx/*
// @match       *://blacktiesports.net/*
// @grant       none
// @version     8.4
// @author      -
// ==/UserScript==

(function() {
    'use strict';

    const current = window.location.href


  /* ----------------------- */
  /* Functions / Utils       */
  /* ----------------------- */
    function match(str, rule) {
        var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
    }

    function addScript(text) {
        // Same as, document.head.appendChild(document.createElement('script')).innerHTML = e.target.innerHTML;
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
          document.documentElement.appendChild(node);
        }
    }

    const checkElement = async selector => {
      while ( document.querySelector(selector) === null) {
        await new Promise( resolve => requestAnimationFrame(resolve) )
      }
      return document.querySelector(selector);
    };

    function pasteStyle(str) {
        var node = document.createElement('style');
        node.type = 'text/css';
        node.appendChild(document.createTextNode(str.replace(/;/g, ' !important;')));
        if (document.head !== null) {
            document.head.appendChild(node);
        } 
        else {
          // No head yet, stick it whereever
          document.documentElement.appendChild(node);
        }
    }

  console.dir ("= Autplay Script Loaded on : "+ current +" =")
  
  /* ------------------------------ */
  /* TinyURL's Bypass               */
  /* ------------------------------ */
  if ( match(current, "*://tinyurl.is/*" ))  {

    // set countdown variable 
    window.count = -1;
    function resetCountDown() {
        setTimeout(function() {
          window.count = -1;
          console.log(window.count)
          resetCountDown();
        }, 10);
    }
    resetCountDown();
  
    const checkElement = async selector => {
      while ( document.querySelector(selector) === null) {
        await new Promise( resolve => requestAnimationFrame(resolve) )
      }
      return document.querySelector(selector); 
    };

    checkElement('splash').then((selector) => {
        console.log("Removing all Splash");
        document.querySelectorAll('splash').forEach(el => el.remove())
    });
  
    checkElement('section').then((selector) => {
        console.log("Removing all section");
        selector.remove();
    });
  
    checkElement('a[dont=""]').then((selector) => {
        console.log("Removing top Annoying weird HF with 'DON\'T'");
        selector.remove();
    });
  
    checkElement('a[class*="btn"]').then((selector) => {
        console.log("Button detected");
        console.log(selector.href)
        document.querySelectorAll('a[class*="btn"]').forEach(el => console.log(el.href))
        whileCheck();
    });
  
    function whileCheck() {
        setTimeout(function() {
           if (document.querySelector('a[class*="btn"]').href.startsWith('https://tinyurl')) {
             whileCheck();
           }
          else {
            var url = document.querySelector('a[class*="btn"]').href
            console.log("LINK FOUND : " + url);
            window.location = url;
          }
        }, 10);
    }
    
  }
 
  /* ----------------------- */
  /* Every site              */
  /* ----------------------- */
  checkElement('#\\30').then((selector) => {
      console.log("Removing hot garbage");
      selector.remove()
  });
  checkElement('#ni-overlay').then((selector) => {
      console.log("Removing hot garbage");
      selector.remove()
  });

  /* ------------------------------ */
  /* hockeyweb.live, sportson.site
   * Website doesn't work on Firefox
  /* ------------------------------ */

  if ( match(current, "*://hockeyweb.live*" ) || match(current, "*://hockeyweb.site*" ) || match(current, "*://sportson.site*" ) ) {
    console.dir("=== hockeyweb / sportson ===")

    var hotgarbage = [  '#div-gpt-ad-8176806-7', '#mt_hockeyweb.live_970x90_1', 'h6', '.masthead-banner', '.entry-title', '.header-after1.widget-title', '.site-info', '.trail-items','.aft-sticky-sidebar.widget-area', '.primary-footer'];
  
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var styleHockeyweb = `
    div#primary {
      width: 100%;
    }
    `
    pasteStyle(styleHockeyweb)
  }
  
  
  /* ------------------------------ */
  /* blacktiesports . net  */
  /* ------------------------------ */

  if ( match(current, "*://blacktiesports.net*" ) ) {
    console.dir("=== Blacktiesports.net ===")

    var hotgarbage = [  '#controls > div', '.navbar-transparent.navbar-expand-lg.navbar', 'h3', '.col-md', '.bookmark.card.p-4'];
  
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var uhdstream = ``
    pasteStyle(uhdstream)
  }
  
  /* ------------------------------ */
  /* techoreels . com  */
  /* ------------------------------ */

  if ( match(current, "*://techoreels.com*" ) ) {
    console.dir("=== techoreels.com ===")

    var hotgarbage = [  '.shadow-lg.p-5.bg-primary.flex-wrap.justify-between.items-center.flex' ];
  
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var uhdstream = ``
    pasteStyle(uhdstream)
  }
  
  /* ----------------------- */
  /* *://uhdstreams.club/hd*  (mntlive13) */
  /* ----------------------- */

  if ( match(current, "*://uhdstreams.com/hd*" ) || match(current, '*://uhdstreams.club/hd/*') ) {
    console.dir("=== uhdstreams page (mntlive13) ===")

    console.dir("Removing all links & target = blank attributes on : " + current)
    document.querySelectorAll('a').forEach(el => { el.removeAttribute('target'); el.removeAttribute('href'); })
    
    var uhdstream = ``
    pasteStyle(uhdstream)
  }
  
  
  /* ---------------------------------- */
  /* *://jmutech.xyz/* (AZULITO)        */
  /* ---------------------------------- */
  if ( match(current, "*://jmutech.xyz/*" ))  {
    console.dir("=== jmutech (Azulito) page ===")
    var hotgarbage = [ '.g1-hb-shadow-off.g1-hb-sticky-off.g1-hb-boxed.g1-hb-row-2.g1-hb-row-b.g1-hb-row-normal.g1-hb-row.g1-row-layout-page.g1-row', 
                      '.g1-column-1of3.g1-column.g1-sidebar-padded.g1-sidebar', '.g1-row-layout-page.g1-row.g1-footer > .g1-row-background', '.g1-footer', 'h1.g1-mega', 'div.g1-row:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var jmutechstyle = `
    .g1-content-narrow > .twitter-tweet, .g1-content-narrow > aside, .g1-content-narrow > audio, .g1-content-narrow > blockquote, .g1-content-narrow > canvas, .g1-content-narrow > code, .g1-content-narrow > div, .g1-content-narrow > dl, .g1-content-narrow > figure, .g1-content-narrow > form, .g1-content-narrow > h1, .g1-content-narrow > h2, .g1-content-narrow > h3, .g1-content-narrow > h4, .g1-content-narrow > h5, .g1-content-narrow > h6, .g1-content-narrow > hr, .g1-content-narrow > iframe, .g1-content-narrow > ol, .g1-content-narrow > p, .g1-content-narrow > pre, .g1-content-narrow > section, .g1-content-narrow > table, .g1-content-narrow > ul, .g1-content-narrow > video 
    { max-width : 100% }
    
    .g1-column-2of3 {
      width: 100%
    }
    `
    pasteStyle(jmutechstyle)
  }
  
  
  /* ------------------------------------------------- */
  /* http://sportinglive.co */
  /* ------------------------------------------------- */
  if ( match(current, "*://sportinglive.co*" ))  {
    console.dir("=== sportinglive.co page ===")
    var hotgarbage = [ '.nv-header-menu-block-wrap > .cv-container', '.widget-area', '.site-footer', '#id-custom_banner', '.site-header', '.nv-top-header-wrap', '.adsbyvli', '.entry-title' ];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var sportingliveStyle = `#primary, .home.blog #primary { float: none; width: 100%; }`
    pasteStyle(sportingliveStyle)
  }

  
  /* ------------------------------------------------- */
  /* *://thecyclingentertainment.com (CyclingStreams)  */
  /* This website seems to only work in Chrome         */
  /* ------------------------------------------------- */
  if ( match(current, "*://thecyclingentertainment.com*" ))  {
    console.dir("=== thecyclingentertainment page ===")
    var hotgarbage = [ '.aft-sticky-sidebar.widget-area', '.masthead-banner', '.font-family-1.em-breadcrumbs', '.entry-title', '.primary-footer', '.site-info' ];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var cyclingStyle = `#wrapper { margin : 0 }`
    pasteStyle(cyclingStyle)
  }

  /* ----------------------- */
  /* *://bestnhl.com/*       */
  /* ----------------------- */
  if ( match(current, "*://bestnhl.com*" ))  {
    console.dir("=== BestNHL page ===")
    var hotgarbage = [ '.bbevent.container', '.site-nav-outer' ];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    
    document.querySelectorAll('.col-sm-8').forEach(el => { el.classList.remove('col-sm-8'); el.classList.add('col-8') })
    document.querySelectorAll('.col-sm-4').forEach(el => { el.classList.remove('col-sm-4'); el.classList.add('col-4') })
                                               
    var bestnhlStyle = `
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
    `
    pasteStyle(bestnhlStyle)
  }
  
  /* ----------------------- */
  /* *://poscitech.club/*       */
  /* ----------------------- */
  if ( match(current, "*://poscitech.com*") )  {
    console.dir("=== poscitech page ===")
    var hotgarbage = [ '#secondary', '#colophon', 'nav'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var poscitechstyle = `
    body, html,article {
      background: #141414;
    }
    .post-inner-content {
      padding: 0;
    }
    body.archive .post-inner-content, body.blog .post-inner-content, .post-inner-content:first-child {
      border: none;
    }`
    pasteStyle(poscitechstyle)
  }

  
  /* ----------------------- */
  /* *://papahd.club/*       */
  /* ----------------------- */
  if ( match(current, "*://papahd.club*") )  {
    console.dir("=== Papahd page ===")
    var hotgarbage = [ '#credit', '#footer', '.sidebar.s1', '.sidebar.s2', 'a[href*=total]', 'a[href*=discord]'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var papastyle = `#wrapper { margin : 0 }`
    pasteStyle(papastyle)
  }
  
    /* ----------------------- */
    /* papahd's sub-iframe site    */
    /* ----------------------- */
    if ( match(current, "*://sportsonline.to/*") )  {
      console.dir("=== Papahd page ===")
      var hotgarbage = [ ];
      hotgarbage.forEach(e => {
        checkElement(e).then((selector) => {
            console.log('Removing hot garbage -- ' + e);
            selector.remove()
        });
      })

      var sportsonlinestyle = ``
      pasteStyle(sportsonlinestyle)
    }

  /* ----------------------- */
  /* rsoccerstreams.com/     */
  /* ----------------------- */
  if ( match(current, "*://*rsoccerstreams.com*") || match(current, "*://*soccerstreams.net*") || match(current, "*://*footybite.cc*") )  {
    console.dir("=== Main soccerstreams page ===")
    var hotgarbage = [ '.mt-3.mb-3.text-center', '.alert-warning.alert', '.alert-dismissible'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
  }
  
  /* ----------------------- */
  /* bdnewszh.com            */
  /* ----------------------- */
  if (match(current, "*://bdnewszh.com*"))  {
    var hotgarbage = [ '.abblock-msg', '.capitalize', '.billboard-banner', '.footer', '.footer-sticky-banner', '.right-sticky-banner', '.left-sticky-banner', '.container.powerdby'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
  }

  /* ----------------------- */
  /* weakstreams.com         */
  /* Liveonscore             */
  /* ----------------------- */
  if (match(current, "*://weakstreams.com*"))  {
  
    var hotgarbage = [ 'div [class*=styles__MatchInfo]', '.content-sidebar', 'div.discord', '#gamecard', '#footer-sidebar', 'h3', '#colophon', '.ads-placment', '.ads-placment','.ads-placment', '.site-info', 'div.adsbyvli', '.adsbyvli', 'a[style*=z-index\\:\\ 2147483647]',
                     'a[style*=width\\:\\ 2287]', 'a[style*=width\\:\\ 2287]', 'div[class*=row\\ ml-1\\ mr-1\\ pt-2\\ mt-4]'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    window.addEventListener("load", function() {
        var injectBeforeThis = document.querySelector('.entry-content')
        var newBtn = document.createElement('a')
        newBtn.className = 'button'
        newBtn.style = 'cursor: pointer;display:block; float:left;margin-bottom: 5px;margin-left:30px'
        newBtn.text = 'PLEIN ECRAN'
        newBtn.addEventListener('click', function(){ player.core.mediaControl.toggleFullscreen(); player.unmute(); player.play(); });
        injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis)
      
        var injectBeforeThis = document.querySelector('.entry-content')
        var newBtn = document.createElement('a')
        newBtn.className = 'button'
        newBtn.style = 'cursor: pointer; margin-left: 10px !important; display:block;float:right;margin-bottom: 5px;margin-right:30px'
        newBtn.text = 'RECHARGER PAGE'
        newBtn.addEventListener('click', function(){ document.location.reload(); });
        injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis)
    })
    
    var stylingWeakstreams = `
    html, body, #page, #content, .entry-content, .entry-header {
        background: #18191c;
    }
    #primary {
        padding-top: 15px;
    }
    .entry-header, .entry-title, .content-area, span, .site-name, .smtitle { color: rgb(205, 200, 194); }
    `
    
    pasteStyle(stylingWeakstreams);
  }

  /* ----------------------- */
  /* fabtech.work            */
  /* ----------------------- */
  if (match(current, "*://fabtech.work*"))  {
    var hotgarbage = [ '#secondary', '.g1-row-layout-page.g1-row.g1-footer > .g1-row-background', '.g1-column', '.g1-hb-shadow-off.g1-hb-sticky-off.g1-hb-boxed.g1-hb-row-2.g1-hb-row-b.g1-hb-row-normal.g1-hb-row.g1-row-layout-page.g1-row > .g1-row-background',
                     '.g1-hb-shadow-off.g1-hb-sticky-off.g1-hb-boxed.g1-hb-row-2.g1-hb-row-b.g1-hb-row-normal.g1-hb-row.g1-row-layout-page.g1-row > .g1-row-inner > .g1-dropable.g1-column'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    window.addEventListener("load", function() {
        var injectBeforeThis = document.querySelector('.g1-content-narrow.g1-typography-xl.entry-content')
        var newBtn = document.createElement('a')
        newBtn.className = 'button'
        newBtn.style = 'cursor: pointer;display:block; float:left;z-index:9999;position:fixed; padding:3px; font-weight: bold;box-shadow: 0px 0px 4px #cccccc6e;border-radius: 4px;'
        newBtn.text = 'PLEIN ECRAN'
        newBtn.addEventListener('click', function(){ player.requestFullscreen(); player.muted(false); player.play(); });
        injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis)
      
        var injectBeforeThis = document.querySelector('.entry-content')
        var newBtn = document.createElement('a')
        newBtn.className = 'button'
        newBtn.style = 'cursor: pointer; display:block;float:right;z-index:9999;position:sticky; padding:3px; font-weight: bold;box-shadow: 0px 0px 4px #cccccc6e;border-radius: 4px;'
        newBtn.text = 'RECHARGER PAGE'
        newBtn.addEventListener('click', function(){ document.location.reload(); });
        injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis)
    })
  }
  
  /* --------------------------- */
  /* http://givemenbastreams.com */
  /* --------------------------- */
  if (match(current, "*://givemenbastreams.com*"))  {
    var hotgarbage = [ '#secondary', 'nav.flex' ];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    window.addEventListener("load", function() {
        var injectBeforeThis = document.querySelector('.w-full.rounded.overflow-hidden.shadow-md.bg-white')
        var newBtn = document.createElement('a')
        newBtn.className = 'button'
        newBtn.style = 'cursor: pointer; display:block;float:right;z-index:9999;position:sticky; padding:3px; font-weight: bold;box-shadow: 0px 0px 4px #cccccc6e;border-radius: 4px;background: #ffffff26; margin-bottom: 5px;'
        newBtn.text = 'RECHARGER PAGE'
        newBtn.addEventListener('click', function(){ document.location.reload(); });
        injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis)
    })
    
    var styleGivemenbastreams = `
    nav.flex {
        display: none;
    }
    `
    
    pasteStyle(styleGivemenbastreams);

  }
  
  /* ----------------------- */
  /* techstribes.com         */
  /* ----------------------- */
  if (match(current, "*://techstribes.com*"))  {
    var hotgarbage = [ '#live-chat-iframe', '#dismiss-btn' ];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    checkElement('div[data-player]').then((selector) => {
      selector.style = "width: 100%";
    });
  }
  
  /* ----------------------- */
  /* techstribes.com         */
  /* ----------------------- */
  if (match(current, "*://sportsnest.co*"))  {
    var hotgarbage = [ '#close', 'tr', 'td', 'td', 'h4', '#ad', '.nv-top-header-wrap', '.nv-header-menu-block-wrap', '.nv-logo-section-wrapper', '.site-footer'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    checkElement('div[data-player]').then((selector) => {
      selector.style = "width: 100%";
    });
    
    var styleTechstribes = `
    #primary, #main, .cv-container, .entry-content, article, #player, .container {
      width: 100%;
    }
    `
    
    pasteStyle(styleTechstribes);
  }

  /* ----------------------- */
  /* myoplay.club (Dvaix)    */
  /* ----------------------- */
  if (match(current, "*://myoplay.club*"))  {
    var hotgarbage = [ '.elementor-element-5eec605e.elementor-element.elementor-top-column.elementor-col-33.elementor-column.has_eae_slider',
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
                      '.main-header.normal-header','.footer-widget-area', '.sub-footer', 'iframe[src^="https://video.ibm.com"]', '.letters.type.eae-at-animation', '.elementor-button-wrapper', '.eae-particle-21d35dd', '.elementor-shape-top', '.elementor-widget', '.elementor-top-section', '.elementor-widget-container', 'div[style^="position: fixed; display: block"]'];
    hotgarbage.forEach(e => {
      checkElement(e).then((selector) => {
          console.log('Removing hot garbage -- ' + e);
          selector.remove()
      });
    })
    
    var styleMyoplay = `
    .eae-particle-wrapper {
      display: none;
    }
    .has_eae_slider.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-1bbce7a6 {
      width: 100%;
    }
    `
    pasteStyle(styleMyoplay);
    
  /* ----------------------- */
  /* Myoplay anti-anti-rightclick */
  /* ----------------------- */
    window.addEventListener('contextmenu', function contextmenu(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        var handler = new eventHandler(event);
        window.removeEventListener(event.type, contextmenu, true);
        var eventsCallBack = new eventsCall(function() {});
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
            function(event) {
                document.addEventListener(event, function(e) { e.stopPropagation(); }, true);
            }
        );

        [].forEach.call(
            ['click', 'contextmenu', 'copy', 'cut', 'paste', 'mouseup', 'mousedown', 'keyup', 'keydown', 'drag', 'dragstart', 'select', 'selectstart'],
            function(event) {
                document.addEventListener(event, function(e) { e.stopPropagation(); }, true);
            }
        );

        window.addEventListener('devtoolschange', function contextmenu(event) {
            event.stopPropagation();
            event.stopImmediatePropagation();
            var handler = new eventHandler(event);
            window.removeEventListener(event.type, contextmenu, true);
            var eventsCallBack = new eventsCall(function() {});
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
            var eventsCallBack = new eventsCall(function() {});
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

    eventsCall.prototype.bind = function() {
        this.events.forEach(function (event) {
            document.addEventListener(event, this, true);
        }.bind(this));
    };

    eventsCall.prototype.handleEvent = function() {
        this.isCalled = true;
    };

    eventsCall.prototype.unbind = function() {
        this.events.forEach(function (event) {}.bind(this));
    };

    function eventHandler(event) {
        this.event = event;
        this.contextmenuEvent = this.createEvent(this.event.type);
    }

    eventHandler.prototype.createEvent = function(type) {
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

    eventHandler.prototype.fire = function() {
        var target = this.event.target;
        var contextmenuHandler = function(event) {
            event.preventDefault();
        }.bind(this);
        target.dispatchEvent(this.contextmenuEvent);
        this.isCanceled = this.contextmenuEvent.defaultPrevented;
    };
    /* -------------------------------- */
    /* END Myoplay anti-anti-rightclick */
    /* -------------------------------- */
    
    
  } // End Myoplay
  

  /* ----------------------- */
  /* 1stream.top             */
  /* ----------------------- */
  if (match(current, "*://1stream.top*"))  {
    checkElement('#main-header-right').then((selector) => {
        console.log("Removing garbage");
        selector.remove()
    });
  }

  /* ----------------------- */
  /* Redditsport.live        */
  /* ----------------------- */
  if (match(current, "*://redditsport.live/*"))  {
    checkElement('.col-sm-4').then((selector) => {
        console.log("Removing garbage");
        selector.remove()
    });
    checkElement('.col-sm-3').then((selector) => {
        console.log("Removing garbage");
        selector.remove()
    });
    checkElement('.col h2').then((selector) => {
        console.log("Removing garbage");
        selector.remove()
    });
   // debugger;
  }

    /* ------------ */
    /* Autoplay     */
    /* ------------ */

    /* Removing other iframe on bestnhl to allow autoplay to work correctly */
    if (match(current, "*://bestnhl.com/soccer/stream/*")) {  
      setTimeout(function(){
          console.dir("=== Removing other iframes ===" + current);
                      // Select correct player, because all players seems to be loaded at the same time but with display: none;
                      // This check the if #ipopp's parent div contains display: none. If not, it's the correct div.
                      var playersFrame = null;
                      document.querySelectorAll('iframe#ipopp').forEach(el => { 
                        var displayState = el.parentNode.style.display;
                        console.log(displayState); 
                        if (displayState == "") {
                          console.dir("==== Visible player found ====")
                          playersFrame = el;
                        }
                        else {
                          el.parentNode.remove()
                          console.dir("==== Removing other iframe... ===")
                        }
                      })
      }, 2000);
    }
    /* end bestnhl exception */

      /* Autoplay feature */
      /* Bitmovin autoplay*/
      setTimeout(function(){
            var bitmovinType = typeof bitmovin
            console.log = console.dir
        
              // BITMOVIN START
              if (bitmovinType === 'object') {
              console.dir("=== Bitmovin Autoplay on " + current)
              
                /* Special case for best NHL */
                if (match(current, "*://bestnhl.com*")) {
                  console.dir("=== BESTNHL Handle AutoPlay with Bitmovin ===")
                  /* Delaying bitmovin player detection to 2s */
                  setTimeout(function(){
                    if (bitmovin.player('my-player') !== "null") {
                      /* Trying to unmute player and play it */
                      bitmovin.player('my-player').unmute()
                      bitmovin.player('my-player').play()
                      setTimeout(function(){
                        /* Player is in pause, mute and play. */
                        console.dir("=== BESTNHL / Bitmovin : setTimeout")
                        if (!bitmovin.player('my-player').isPlaying()) {
                          console.dir("=== BESTNHL / Bitmovin : Player is paused. Trying to mute & play ===")
                          bitmovin.player('my-player').mute()
                          bitmovin.player('my-player').play()
                        }
                      }, 50);
                    }
                  }, 2000);
                } 
                // End Bitmovin BestNHL Special Case

                // Bitmovin (real) START
                else if (typeof player == 'object') { 
                  /* Trying to unmute player and play it */
                  player.unmute()
                  player.play()
                  setTimeout(function(){
                    /* Player is in pause, mute and play. */
                    if (!player.isPlaying()) {
                      player.mute()
                      player.play()
                    }
                  }, 100);
                }
                else {
                  /* Player undefined, fallback to querySelector */
                  document.querySelector('video').muted = false
                  document.querySelector('video').play()
                  setTimeout(function(){
                    /* Player is in pause, mute and play. */
                    if (document.querySelector('video').paused) {
                      console.log("=== Player is paused, mute and play. ===")
                      document.querySelector('video').muted = true
                      document.querySelector('video').play()
                    }

                  }, 100);
                }
            } // BITMOVIN END
            else if (typeof Clappr === 'object') {
            console.dir('Clappr Autoplay on ' + current)
                    document.querySelector('video').muted = false
                    /* simulate a click on player-poster */
                    document.querySelector('.player-poster').click()
                    var promise = document.querySelector('video').play()
                    if (promise !== undefined) {
                        promise.then(function() {
                            console.log('Clappr Auto play allowed')
                            // Autoplay started
                            document.querySelector('video').muted = false

                            player.unmute();
                        }).catch(error => {
                            console.log('Clappr Autoplay with sound not allowed')
                            // Autoplay not allowed!
                            document.querySelector('video').muted = true
                            document.querySelector('video').play()
                            player.setVolume(0)
                            player.mute();
                            document.querySelector('.player-poster').click()
                        });
                    }
                    else {
                        console.log('Clappr Autoplay not set')
                        player.mute();
                        document.querySelector('video').play()
                    }
            } //end Clappr
            else if (typeof videojs === 'function') {
            console.dir('Videojs Autoplay on ' + current)
                    document.querySelector('video').muted = false
                    var promise = document.querySelector('video').play()
                    if (promise !== undefined) {
                        promise.then(function() {
                            console.log('Videojs Auto play allowed')
                            // Autoplay started
                            document.querySelector('video').muted = false
                        }).catch(error => {
                            console.log('Videojs Autoplay with sound not allowed')
                            // Autoplay not allowed!
                            document.querySelector('video').muted = true
                            document.querySelector('video').play()
                        });
                    }
                    else {
                        console.log('Videojs Autoplay not set')
                        document.querySelector('video').play()
                    }
          } // end videojs
          else if (Hls.isSupported()) {
          console.dir('HLS.js Autoplay on ' + current)
              document.querySelector('video').muted = false
              var promise = document.querySelector('video').play()
              if (promise !== undefined) {
                promise.then(function() {
                console.log('HLS.js Auto play allowed')
                // Autoplay started
                document.querySelector('video').muted = false
                }).catch(error => {
                  console.log('HLS.js Autoplay with sound not allowed')
                  // Autoplay not allowed!
                  document.querySelector('video').muted = true
                  document.querySelector('video').play()
                });
              }
              else {
                console.log('HLS.js Autoplay not set')
                document.querySelector('video').play()
              }
          } // end HLS.js
        else { console.dir("No player found to autoplay")}
      }, 500);

      /* Destroy js scripts */
      /* Also destroy js redirect */
      new MutationObserver((_, observer) => {
          var scripts = document.querySelectorAll('script');
          var currentScript
          scripts.forEach(function(e) {
              var ua = navigator.userAgent
              if (e.src.search('cdn4ads') >= 0) {
                  e.innerHTML = ''
                  e.remove()
              }
              if (e.src.search('suv4') >= 0) {
                  e.innerHTML = ''
                  e.remove()
              }
              if (e.src.search('v1.0.js') >= 0) {
                  e.innerHTML = ''
                  e.remove()
              }
              if (e.src.search('mahimeta') >= 0) {
                  e.innerHTML = ''
                  e.remove()
              }
              if (e.src.search('quant') >= 0) {
                  e.innerHTML = ''
                  e.remove()
              }
              if (e.src.search('ads') >= 0) {
                  e.innerHTML = ""
                  e.remove()
              }
              if (e.src.search('tag.js') >= 0) {
                  e.innerHTML = ''
                  e.remove()
              }
              if (e.src.search('tag.min.js') >= 0) {
                  e.innerHTML = ""
                  e.remove()
              }
              /* Whitelisting */
              if (match(current, '*techoreels.com*') || (match(current, '*https://bestnhl.com/*'))) {
                  return
              }
              if (e.textContent.search('window.location') >= 0 && e.textContent.search('darkreader') == -1 && e.textContent.search('universal-bypass') == -1) {
                  console.log("Mutation observer: window.location detected")
                  observer.disconnect()
                  currentScript = e.innerHTML;
                  currentScript = currentScript.replace(/eval\(function \(p, a, c, k, e, d\) {.*}/gm, '')

                  currentScript = currentScript.replace(/window.location.replace\(".*?"\)/g, 'console.log("snif snif")')
                  currentScript = currentScript.replace(/if\(window==window.top\) {window.location.replace\(".*"\);}/g, "")
                  currentScript = currentScript.replace(/if\ \(document\.referrer\.indexOf\(b\)\!=-1\){\n.*\n}/g, "")
                  currentScript = currentScript.replace(/if\(window==window.top\){\n.*\n}/g, "")
                  currentScript = currentScript.replace(/setInterval\(function\(\){\n.*\n}, .*\)/g, "")
              
                  /* for tutele.sex (myoplay's subframe) */
                  currentScript = currentScript.replace(/function RedirectTo\(\){\n.*}/m, "")
                  currentScript = currentScript.replace(/if\(!isDomain\){\n.*}/gm, "")
                  currentScript = currentScript.replace(/if \(window == window.top\) document.location = "\/"/gm, "")
                  currentScript = currentScript.replace(/if\(self==top\) { .* }/g, "")
                  currentScript = currentScript.replace(/location.href = ".*"+.*;/g, "")
                
                
                  e.innerHTML = ""
                  e.remove()
                  //console.log(currentScript)
                  addScript(currentScript)
                  }
              })
      }).observe(document.documentElement, { childList: true, subtree: true });
})();