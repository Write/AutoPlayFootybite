// ==UserScript==
// @version     14.5
// @author      Write
// @name        Autoplay
// @namespace   Autoplay Block Ads Footybite
// @description AutoPlay and Block ads on Reddit Soccerstream's streams
//
// @downloadURL https://github.com/Write/AutoPlaySoccerStreams/raw/main/Autoplay.user.js
// @updateURL   https://github.com/Write/AutoPlaySoccerStreams/raw/main/Autoplay.user.js
// @homepageURL https://github.com/Write/AutoPlaySoccerStreams
//
// @icon        https://icons.duckduckgo.com/ip2/footybite.to.ico
// @run-at      document-start
//
//
// @match       *://*.footybite.to/*
// @match       *://footybite.to/*
// @match       *://tinyurl.is/*
// @match       *://tinyurl.so/*
// @match       *://cutin.it/*
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
// @match       *://*.bdnewszh.com/*
// @match       *://www.bdnewszh.com/*
// @match       *://thecyclingentertainment.com/*
// @match       *://motornews.live/*
// @match       *://scoresunday.com/*
// @match       *://sportinglive.co/*
// @match       *://cr7soccer.club*/
// @match       *://rsoccerstreams.com*/
// @match       *://*.rsoccerstreams.com/*
// @match       *://footybite.cc/*
// @match       *://*.footybite.cc/*
// @match       *://techoreels.com/*
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
// @match       *://*totalsportek.soccer/*
// @match       *://*sportschamp.fun/*
// @match       *://*alexsportz.online/*
// @match       *://*gamerarcades.com/*
// @match       *://*bestreamsports.org/*
// @match       *://*sportsonline.sx/*
// @match       *://*nbalivestream.top/*
// @match       *://*embed4u.xyz/*
// ==/UserScript==

var rawHTML;

(function () {
    'use strict';

    const current = window.location.href;

    /* ----------------------- */
    /* Functions / Utils       */
    /* ----------------------- */

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
        /* Same as, document.head.appendChild(document.createElement('script')).innerHTML = e.target.innerHTML; */
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

    function clearEventListener(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }

    log("= Autplay Script Loaded on : " + current + " =");

    /* ----------------------- *
    * Every site              *
    * ----------------------- */
    var garbage = ['#\\30', '#ni-overlay', 'polygon'];
    garbage.forEach(e => {
        checkElement(e).then((selector) => {
            log('Removing hot garbage -- ' + e);
            selector.remove();
        });
    });

    /* ------------------------- */
    /* Skeleton to re-use        */
    /* ------------------------- */
    if (match(current, "*://somewebsite.xyz*")) {

        log("=== "+ current + " ===");
        // var hotgarbage = [""];

        // hotgarbage.forEach(e => {
        //     checkElement(e).then((selector) => {
        //         log('Deleting garbage -- ' + e);
        //         selector.remove();
        //     });
        // });

        var style = `
        body, html, .bg-gray-200, .inside-article {
          background: #141414;
          margin: 0;
          padding: 0;
        }
        iframe {
          width: 80vw;
          height: 80vh;
        }
          textarea, a, br, hr, svg, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
          display: none;
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
        match(current, '*//*nbalivestream.top/*')
       ) {

        log("=== "+ current + " ===");
        var hotgarbage = ["header", "#footer", ".elementor-column-gap-custom",".elementor-column-gap-custom", ".second-iframe", "div.elementor-column:nth-child(2) > div:nth-child(1)", "div.elementor-column:nth-child(2)",
                         '.site-below-footer-wrap[data-section="section-below-footer-builder"]', ".elementor-location-header", ".site-footer"];

        hotgarbage.forEach(e => {
             checkElement(e).then((selector) => {
                 log('Deleting garbage -- ' + e);
                 selector.remove();
             });
         });

        var style = `
        div.bg-light-gray, body.bg-white, body, html, .bg-gray-200, .inside-article, .elementor-161 .elementor-element.elementor-element-1ecbf82:not(.elementor-motion-effects-element-type-background), .elementor-161 .elementor-element.elementor-element-1ecbf82 > .elementor-motion-effects-container > .elementor-motion-effects-layer {
          background: #141414;
          background-color: #141414;
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
        textarea, a, br, hr, svg, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
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

    /* ------------------------------ */
    /* cutin.it's Bypass               */
    /* ------------------------------ */
    if (match(current, "*://cutin.it/*")) {

        function decode(s) {
            var s1=unescape(s.substr(0,s.length-1));
            var t='';
            for(i=0;i<s1.length;i++)t+=String.fromCharCode(s1.charCodeAt(i)-s.substr(s.length-1,1));
                var unescappedHTML = unescape(t);
            window.rawHTML = unescappedHTML;
            return unescappedHTML;
        }

        new MutationObserver((_, observer) => {

            var scripts = document.querySelectorAll('script');
            var currentScript;
            scripts.forEach(function (e) {

                var regex = /dF\('(.*)'\)/
                var decodedJS, encodedJS
                if (e.innerText.match(regex)) {

                    var encodedJS = e.innerText.match(regex)[1]
                    decodedJS = decode(encodedJS)

                    var url = decodedJS.match(/.attr\(.*href.*,\"(.*)\"\)\.html/);
                    if (url) {
                      log("URL FOUND : " + url[1]);
                      location.assign(url[1]);
                    }


                    log("Mutation observer: match found, stored in rawHTML var");
                    observer.disconnect();
                }
            });
        }).observe(document.documentElement, { childList: true, subtree: true });

        /* Second method, in case the fast one doesn't work*/
        checkElement('a[class*="btn"][class*=sadsad]:not([href^=\\#])').then((selector) => {
            var url = selector.href;
            log("LINK FOUND : " + url);
            location.assign(url);
        });
        setTimeout(function () {
            log("resetting count")
            window.count = -1;
        }, 100);

    }

    /* ------------------------------ */
    /* sportsonline.sx's Bypass               */
    /* ------------------------------ */
    if (match(current, "*://sportsonline.sx/*") || match(current, "*://*.sportsonline.sx/*") | match(current, "*://*.dynamicrevival.net/*") ) {
        new MutationObserver((_, observer) => {

            var scripts = document.querySelectorAll('script');
            var currentScript;
            scripts.forEach(function (e) {
                if (e.src == "" && e.textContent.search('Histats') == 1) {
                  e.remove();
                }
                else if (e.src.match('frustration.js') || e.src.match('deb.js') ) {
                  e.remove();
                }
                else if (e.src == "" && e.textContent.search('crowdEnabled') == -1) {
                 // alert(e.innerHTML)
                }

                if (e.textContent.search('window.location') >= 0 && e.textContent.search('darkreader') == -1 && e.textContent.search('universal-bypass') == -1) {

                    console.log("Removed window.location redirection")
                    currentScript = e.innerHTML;
                    currentScript = currentScript.replace(/eval\(function \(p, a, c, k, e, d\) {.*}/gm, '');

                    currentScript = currentScript.replace(/window.location.replace\(".*?"\)/g, 'log("snif snif")');
                    currentScript = currentScript.replace(/if\(window==window.top\) {window.location.replace\(".*"\);}/g, "");
                    currentScript = currentScript.replace(/if\ \(document\.referrer\.indexOf\(b\)\!=-1\){\n.*\n}/g, "");
                    currentScript = currentScript.replace(/if\(window==window.top\){\n.*\n}/g, "");
                    currentScript = currentScript.replace(/setInterval\(function\(\){\n.*\n}, .*\)/g, "");
                    currentScript = currentScript.replace(/if\(window==window.top\) document.location="\/"/g, "");

                     //           <script>if(window==window.top) document.location="/"</script>
                    e.innerHTML = "";
                    e.remove();

                    addScript(currentScript);
                }
                if (e.textContent.search('document.location') >= 0 && e.textContent.search('darkreader') == -1 && e.textContent.search('universal-bypass') == -1) {

                    console.log("Removed document.location redirection")
                    currentScript = e.innerHTML;
                    currentScript = currentScript.replace(/if\(window==window.top\) document.location="\/"/g, "");

                     //           <script>if(window==window.top) document.location="/"</script>
                    e.innerHTML = "";
                    e.remove();

                    addScript(currentScript);
                }
            });

        }).observe(document.documentElement, { childList: true, subtree: true });

    }

    /* ------------------------------ */
    /* TinyURL's Bypass               */
    /* ------------------------------ */
    if (match(current, "*://tinyurl.is/*") || match(current, "*://tinyurl.so/*")) {

        checkElement('a[class*="btn"]:not([href^=http\\:\\/\\/tinyurl])').then((selector) => {
            var url = selector.href;
            console.log("LINK FOUND : " + url);
            setTimeout((function(){console.log("Trying redir..."); window.location = url;}, 1));
            setInterval(function(){console.log("Trying redir..."); window.location = url;}, 100);
        });

        checkElement('section').then((selector) => {
            selector.remove();
        });

        var styleTinyurl = `
            body, html {
                  background: #141414;
            }
            a[style^=top] {
                display: none;
            }
        `;

        pasteStyle(styleTinyurl);
    }


    /* ------------------------- */
    /* enjoy4hd.site             */
    /* ------------------------- */
    if (match(current, "*://enjoy4hd.site/*")) {

        log("=== "+ current + " ===");

        var hotgarbage = ["#bottom-bar", "#header", "#sidebar-right"];

        hotgarbage.forEach(e => {
             checkElement(e).then((selector) => {
                 log('Deleting garbage -- ' + e);
                 selector.remove();
             });
        });

        var styleSomewebsite = `
        body, html, #main, .content, .bg-gray-200, .inside-article, .single-view {
          background: #141414;

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

        .navbar, a, br, hr, svg, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
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

        pasteStyle(styleSomewebsite);
    }

    /* ------------------------- */
    /* sportsgala.xyz            */
    /* ------------------------- */
    if (match(current, "*://sportsgala.xyz*")) {

        log("=== "+ current + " ===");
        // var hotgarbage = [""];

        // hotgarbage.forEach(e => {
        //     checkElement(e).then((selector) => {
        //         log('Deleting garbage -- ' + e);
        //         selector.remove();
        //     });
        // });

        var styleSomewebsite = `
          body, html, .bg-gray-200, .inside-article {
            background: #141414;
            margin: 0;
            padding: 0;
          }
          iframe {
            width: 100%;
          }
          a, br, hr, svg, img {
            display: none;
          }
        `;

        pasteStyle(styleSomewebsite);
    }

    /* ------------------------- */
    /* s1os.icu                  */
    /* ------------------------- */
    if (match(current, "*://s1os.icu*")) {

        log("=== "+ current + " ===");
        // var hotgarbage = [""];

        // hotgarbage.forEach(e => {
        //     checkElement(e).then((selector) => {
        //         log('Deleting garbage -- ' + e);
        //         selector.remove();
        //     });
        // });

        var styleSomewebsite = `
          body, html, .bg-gray-200, .inside-article {
          background: #141414;
          margin: 0;
          padding: 0;
          }
          iframe {
          width: 100%;
          }
          a, br, hr, svg, img {
          display: none;
          }
        `;

        pasteStyle(styleSomewebsite);
    }


    /* ------------------------- */
    /* worldsport.me             */
    /* ------------------------- */
    if (match(current, "*://www.worldsport.me/*")) {

        log("=== "+ current + " ===");
        // var hotgarbage = [""];

        // hotgarbage.forEach(e => {
        //     checkElement(e).then((selector) => {
        //         log('Deleting garbage -- ' + e);
        //         selector.remove();
        //     });
        // });

        var styleWorldsport = `
          body, html, .bg-gray-200, .inside-article {
          background: #141414;
          margin: 0;
          padding: 0;
          }
          table, tbody, td  { width: 100%; }
          a, br, hr, svg, img {
          display: none;
          }
        `;

        pasteStyle(styleWorldsport);
    }


    /* ------------------------- */
    /* http://stakes100.xyz.  */
    /* ------------------------- */
    if (match(current, "*://stakes100.xyz*")) {

        log("=== "+ current + " ===");
        var hotgarbage = [".sport-body", ".entry-header", "#site-header",
            ".footer-nav-widgets-wrapper", "#site-footer",
            "footer", "header"];

        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleStakes100 = `
        body, html, .bg-gray-200, .inside-article, iframe {
        background: #141414;
        margin: 0;
        padding: 0;
        }
        .entry-content, .post-inner, p {
        margin: 0;
        padding: 0;
        }
        iframe {
        width: 100%;
        }
        a, br, hr, svg, img {
        display: none;
        }
        `;

        pasteStyle(styleStakes100);
    }

    /* ------------------------- */
    /* http://stakes100.xyz.  */
    /* ------------------------- */
    if (match(current, "*://stakes100.xyz*")) {

        log("=== "+ current + " ===");
        var hotgarbage = [".sport-body", ".entry-header", "#site-header", ".footer-nav-widgets-wrapper", "#site-footer"];

        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleStakes100 = `
        body, html, .bg-gray-200, .inside-article {
        background: #141414;
        margin: 0;
        padding: 0;
        }
        .entry-content > :not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide) {
        max-width: 100vh;
        width: 100%;
        }
        .post-inner {
        padding: 0;
        margin: 0;
        }
        iframe {
        width: 100%;
        }
        a, br, hr, svg, img {
        display: none;
        }
        `;

        pasteStyle(styleStakes100);
    }

    /* ------------------------- */
    /* http://p2pstreams.live  */
    /* ------------------------- */
    if (match(current, "*://p2pstreams.live*") || match(current, "*://xestreams.com*")) {
        checkElement('video').then((selector) => {
            selector.click();
        });

        log("=== "+ current + " ===");
        var hotgarbage = ["script[spintro]", '.sharethis-inline-share-buttons', ".clearfix", "#app > main > div > div.w-full.rounded.lg\\:w-3\\/12", ".mobileHide", ".chat-box", "#txtarea", '#ga-overlay', 'ins', '#dismiss-btn', '.entry-header', '.adsbymahimeta', '.top-header', 'nav', '.adsbyvli', '.masthead', 'h1', '.inside-header', '.sidebar', '.inside-right-sidebar'];

        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleP2pstreams = `
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
        background: #141414;
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
        background: #141414;
        padding: 0;
        margin: 0;
        }
        `;

        pasteStyle(styleP2pstreams);
    }

    /* ------------------------- */
    /* https://silverspoon.site  */
    /* ------------------------- */
    if (match(current, "*://silverspoon.site*")) {
        checkElement('video').then((selector) => {
            selector.click();
        });

        log("=== "+ current + " ===");
        var hotgarbage = ['#ga-overlay', 'ins', '#dismiss-btn', '.entry-header', '.adsbymahimeta', '.top-header', 'nav', '.adsbyvli', '.masthead', 'h1', '.inside-header', '.sidebar', '.inside-right-sidebar'];

        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleSilverspoon = `
        body, html, .bg-gray-200, .inside-article {
        background: #141414;
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
        .wrap, #player { width: 100%; max-width: unset; }
        `;

        pasteStyle(styleSilverspoon);
    }


    /* ----------------------- */
    /* https://youpit.xyz  */
    /* ----------------------- */
    if (match(current, "*://youpit.xyz/*") || match(current, "*://youpits.xyz/*") || match(current, '*://60fps.xyz/*'))  {
        checkElement('video').then((selector) => {
            selector.click();
        });

        log("=== "+ current + " ===");
        var hotgarbage = ['h1', '.inside-header', '.sidebar', '.inside-right-sidebar', '.site-footer'];

        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleYoupit = `
        body, html, .bg-gray-200, .inside-article,
        body, html, .bg-gray-200, iframe, .aievfbmsyu.idc0_338 {
        background: #141414;
        margin: 0;
        padding: 0;
        }
        .entry-content:not(:first-child), .entry-summary:not(:first-child), .page-content:not(:first-child),
        .separate-containers .site-main {
        margin: 0;
        }
        .rounded { border-radius: 0; border: 0; }
        .shadow-md { box-shadow: none; }
        .shadow-lg, img, a, br { display: none; }
        iframe {
        display: block;
        height: 75vh;
        width: 100%;
        margin: auto;
        }
        .site-content .content-area {
        width: 100%;
        }
        video {
        width: 100%;
        }
        .grid-container {
        max-width: unset;
        }
        `;

        pasteStyle(styleYoupit);
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

        log("=== "+ current + " ===");
        var hotgarbage = [
            'div[onclick*=this]',
            'div[onclick*=this\\)\\.remove\\(\\)]', '#html1', '#button1',
            'span[onmouseup^=document\\.getElementById]',
            'span[onmouseup^=document\\.getElementById]',
            '.navbar', '.page-content.p-4.bg-white.shadow-md.overflow-hidden.rounded.w-full',
            '#app > main > div > div.w-full.rounded.overflow-hidden'];

        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleCr7soccerclub = `
        div[onclick*=this] { display: none; }
        body, html, .bg-gray-200, iframe, .aievfbmsyu.idc0_338 {
        background: #141414;
        margin: 0;
        padding: 0;
        }
        .rounded { border-radius: 0; border: 0; }
        .shadow-md { box-shadow: none; }
        .shadow-lg, img, a, br { display: none; }
        iframe {
        display: block;
        height: 75vh;
        width: 100%;
        margin: auto;
        }
        `;

        pasteStyle(styleCr7soccerclub);
    }

    /* ----------------------- */
    /* https://tezgoal.com     */
    /* ----------------------- */
    if (match(current, "*://tezgoal.com/*") || match(current, "*://dzeko11.net/*")) {

        checkElement('video').then((selector) => {
            selector.click();
        });

        log("=== "+ current + " ===");
        var hotgarbage = [
          'script[src^=\\/\\/eehuzaih]', 'script[src^=\\/\\/eehuzaih]',
          'iframe[src^=\\/\\/eehuzaih]',
         'iframe[src^=about]', 'iframe[src^=about]', 'iframe[src^=about]',,
          '.navbar', '.page-content.p-4.bg-white.shadow-md.overflow-hidden.rounded.w-full',
          '#app > main > div > div.w-full.rounded.overflow-hidden'];

        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleTezgoal = `
        iframe[src^=about] {
          display: none;
        }
        body, html, .bg-gray-200, .aievfbmsyu.idc0_338 {
        background: #141414;
        }
        .rounded { border-radius: 0; border: 0; }
        .shadow-md { box-shadow: none; }
        .shadow-lg { display: none; }
        `;

        pasteStyle(styleTezgoal);
    }

    /* ----------------------- */
    /* embed4u.xyz/     */
    /* ----------------------- */

    if (match(current, "*://*embed4u.xyz*")) {

        log("=== "+ current + " ===");

        var hotgarbage = [
            'a[onclick^=closeSmartLink]'
        ];

        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var style = `
        a[onclick^=closeSmartLink] {
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

        var hotgarbage = [
            '.ad-banner', '.second-iframe', '.teams', '.news-right-sec-div', '.news-right-sec', '.mt-3.mb-3.text-center', '.alert-warning.alert',
            '.alert-dismissible', '#event-sticky-info', '.col-md-4',
            'footer', '#event-tags-h', '#event-tags',
            'a[href^=\\/dcma]'
        ];

        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        checkElement('.col-md-9').then((selector) => {
            document.querySelectorAll('.col-md-9').forEach(el => { el.classList.remove('col-md-9'); el.classList.add('col-md-12'); });
        });

        var styleSoccerstreams = `
        a[onclick^=closeSmartLink] {
          display: none;
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
        h2, h3, h3, h4, h5, h6, p {
          display:none;
        }
        .header {
          display: none;
        }
        .rsbc-switch-button {
        margin-top: 0;
        }
        .table {
        margin-bottom: unset;
        }
        .no-radius {
        margin-top: 10px;
        }
        #basic-navbar-nav {
        margin-top: -42px;
        }
        .ml-auto.navbar-nav {
        width: 720px;
        }
        .container {
        margin-top: 5px;
        }
        br {
        display: none;
        }
        body {
        color: #fff;
        }
        .calendar-matches li {
        transition: none;
        background-color: #484848;
        }
        .table-responsive .streams-table-new td, .streams-table-new th {
        padding: 0;
        }
        .dash {
        display: none;
        }
        .match-view-head-side1, .match-view-head-side2 {
          padding-top: unset;
        }
        .avatar {
          left: -5px;
        }
        .event-team h5, .sv-box .header .title {
          color: #00bcff;
        }
        .streams-table-new tbody tr td {
          background-color: #404040;
          border-bottom: 1px solid #000;
          border-top: 1px solid #4f4f4f;
        }
        .votes-count {
        color: #f7f7f7;
        }
        .username {
        color: #fff;
        }
        .card-body {
        padding: 0;
        }
        .sv-box.undefined {
        border-radius: 15px;
        }
        .card {
        border: 0;
        }
        .streams-table-new th {
        color: #cecece;
        }

        #event-tags li a {
        color: #4b91ff;
        }

        .competition-cell-status {
          display: block;
          font-weight: 400;
          font-size: 14px;
          text-align: unset;
          color: #f2f2f2;
          text-transform: uppercase;
          letter-spacing: -.02em;
          margin-top: 6px;
        }
        .competition-cell-side1 {
          text-align: right;
          padding-left: 10px;
          padding-right: 1px;
          padding-bottom: 5px;
        }
        .competition-cell-side2 {
          text-align: left;
          padding-left: 1px;
          padding-bottom: 5px;
        }
        .event-status {

        margin: 0px 0;

        color: #d5a83e;
        }
        .sv-box, .card {
        box-shadow: unset;
        background: #242424;
        }
        .top-tournament a {
        padding: 0;
        }
        .top-tournament {
        padding: 0;
        }
        .top-tournament .league-name {
          vertical-align: sub !important;
          color: white;
          padding-left: 3px;
          font-size: 18px;
        }
        .competitions li:first-child .competition {
        border-top: 0 dashed #eee;
        }
        .competitions .competition {
          transition: none;
          padding: 0;
          border-top: 1px dashed #8f8f8f;
        }
        .navbar-brand {
          width: 320px;
          margin: 0;
          padding: 0;
          padding-left: 7px;
          margin-bottom: 5px;
        }
        .navbar-brand .img-fluid {
          z-index: 9999;
          width: 320px;
        }
        small span {
        color: rgb(242, 242, 242);
        }
        .navbar {
        padding-bottom: 2px;
        }

        .nav-link {
        padding-top: 0;
        padding-bottom: 0;
        }
        .navbar-description {
        font-size: 10px;
        display: none;
        }
        .competitions li {
        background-color: #484848;
        }
        .competition-cell-table, .competition-cell-score {
        color: #e1f7ff;
        }

        .competition-cell-table {
        padding: 0;
        }

        .competition .competition-cell-status-name {
        top: 17%;
        }
        .competition-cell-status {
        margin-top: 3px;
        font-size: 13px;
        }
        body .top-tournament a {
          padding: 1px 0;
        }
        .competition-cell-score {
          width: 120px;
          color: #00222e;
          font-size: unset;
          letter-spacing: -1px;
          margin: 0 10px;
        }
        .competition:hover {
          background-color: #3a3a3a;
        }
        .competition-cell-score {
          color: #d5a83e;
        }
        .calendar-matches li {
          padding: 0;
          margin: 0;
          margin-left: 3px;
          margin-top: 6px;
        }
        `;

        pasteStyle(styleSoccerstreams);

    }

    /* ------------------------------ */
    /* nflscoop . com           */
    /* ------------------------------ */
    if (match(current, "*://gameavenue.co*") || match(current, "*://*.gameavenue.co*")) {

        log("=== gameavenue.co ===");
        var hotgarbage = ['#ast-desktop-header', '.secondary.widget-area', 'table', '.site-footer', '.left_bottom.floating.style-1.wp-dark-mode-ignore.wp-dark-mode-switcher',
                         '.cky-btn-revisit', '.cky-revisit-bottom-left.cky-btn-revisit-wrapper'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleNflscoop = ``;
        pasteStyle(styleNflscoop);
    }


    /* ------------------------------ */
    /* nflscoop . com           */
    /* ------------------------------ */
    if (match(current, "*://nflscoop.net*")) {

        log("=== nflscoop.net ===");
        var hotgarbage = ['#content-pages', 'yt-live-chat-app', '#exp_182eb771-00c1-4401-84ed-a5859b5e4704', '#chat-messages',
            'section.elementor-section:nth-child(2)'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleNflscoop = ``;
        pasteStyle(styleNflscoop);
    }

    /* ------------------------------ */
    /* nizarstream . com           */
    /* ------------------------------ */
    if (match(current, "*://nizarstream.com*")) {

        log("=== nizarstream.xcomyz ===");
        var hotgarbage = ['noscript', '.navbar', 'p', 'center', 'center', '.alert', 'div[style^=position\\:\\ fixed]', 'div[style^=\\ background]', 'h6', 'a[href*=totalsportek]', 'a[href*=totalsportek]'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var style = `
        body, html, .bg-gray-200, .inside-article, .jumbotron {
          background: #141414;
          margin: 0;
          padding: 0;
        }

        .jumbotron {
          border: none;
        }
        textarea, a, br, hr, svg, img, p, li, ul, h1, h2, h3, h4, h5, h6, span {
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
        var hotgarbage = ['h4', 'iframe[src^=\\/schedule\\.html', 'p', 'p', 'p', 'h3', 'span', 'span'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleElixx = `
        h3, h4, p, img, br, hr { display: none; }
        #iframe-wrapper > iframe {
        width: 100%;
        height: 75vh;
        }
        #iframe-wrapper {
        vertical-align: unset;
        }
        body { margin: 0; }
        `;
        pasteStyle(styleElixx);
    }

    /* ------------------------------ */
    /* blacktiesports . net           */
    /* Doesn't seems to work for now  */
    /* ------------------------------ */
    if (match(current, "*://blacktiesports.net*") || match(current, "*://blacktiesports.to*")) {

        log("=== Blacktiesports.net ===");
        var hotgarbage = ['#controls', 'div[style^=padding-top\\:\\ 8px]', '.navbar', 'p', '.bmc-btn-container', 'footer.container', '.bookmark.card.p-4'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleBlacktiesports = `
        img, a, #overlayer, p, br, hr, span, h1,h2,h3,h4,h5,h6 {
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
        background: #141414;
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
        pasteStyle(styleBlacktiesports);
    }

    /* ------------------------------ */
    /* techoreels . com               */
    /* ------------------------------ */
    if (match(current, "*://techoreels.com*"), match(current, "*://givemenbastreams.com*"),
        match(current, "https://techoreels.com/*")) {

        log("=== techoreels.com ===");
        var hotgarbage = ['#app > main > div > div > div > div.w-full.mt-5', 'span', 'span', 'span', 'span', 'span', 'span', 'span', 'span', 'tbody', '#app > main > div > div.w-full.rounded.overflow-hidden',
            '.dark-mode-toggle', 'div[id^=waldo]',
            '.shadow-lg.p-5.bg-primary.flex-wrap.justify-between.items-center.flex'];

        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleTechoreels = `
        body, html, .p-5, .w-full {
        background: #141414;
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
        pasteStyle(styleTechoreels);
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

        var uhdstreamsStyle = `
        html, body {
        background: #141414;
        margin: 0;
        }
        img {
        display: none;
        }`;

        pasteStyle(uhdstreamsStyle);
    }


    /* ---------------------------------- */
    /* *://jmutech.xyz/* (AZULITO)        */
    /* ---------------------------------- */
    if (match(current, "*://jmutech.xyz*") || match(current, '*://theanh.tech*') || match(current, '*://aas.works/*')) {

        log("=== jmutech (Azulito) page ===");
        var hotgarbage = ['#page > div.g1-row.g1-row-layout-page.g1-hb-row.g1-hb-row-mobile.g1-hb-row-b.g1-hb-row-2.g1-hb-boxed.g1-hb-sticky-off.g1-hb-shadow-off > div.g1-row-inner', '.g1-row.g1-row-layout-page.g1-socials-section.g1-dark', '.g1-hb-shadow-off.g1-hb-sticky-off.g1-hb-boxed.g1-hb-row-2.g1-hb-row-b.g1-hb-row-normal.g1-hb-row.g1-row-layout-page.g1-row',
            '.g1-column-1of3.g1-column.g1-sidebar-padded.g1-sidebar', '.g1-row-layout-page.g1-row.g1-footer > .g1-row-background', '.g1-footer', 'h1.g1-mega', 'div.g1-row:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var jmutechstyle = `
        .g1-typography-xl {
        line-height: 0;
        }
        .g1-row-padding-m {
        padding: 0;
        }
        .g1-content-narrow > .twitter-tweet, .g1-content-narrow > aside, .g1-content-narrow > audio, .g1-content-narrow > blockquote, .g1-content-narrow > canvas, .g1-content-narrow > code, .g1-content-narrow > div, .g1-content-narrow > dl, .g1-content-narrow > figure, .g1-content-narrow > form, .g1-content-narrow > h1, .g1-content-narrow > h2, .g1-content-narrow > h3, .g1-content-narrow > h4, .g1-content-narrow > h5, .g1-content-narrow > h6, .g1-content-narrow > hr, .g1-content-narrow > iframe, .g1-content-narrow > ol, .g1-content-narrow > p, .g1-content-narrow > pre, .g1-content-narrow > section, .g1-content-narrow > table, .g1-content-narrow > ul, .g1-content-narrow > video
        { max-width : 100%;
        }

        .g1-column-2of3 {
        width: 100%;
        }
        .vidmain {
        width: 100%;
        min-width: 100%;
        }
        `;
        pasteStyle(jmutechstyle);
    }


    /* ------------------------------------------- */
    /* http://sportinglive.co                      */
    /* ------------------------------------------- */
    if (match(current, "*://sportinglive.co*")) {

        log("=== sportinglive.co page ===");
        var hotgarbage = ['.nv-header-menu-block-wrap > .cv-container', '.widget-area', '.site-footer', '#id-custom_banner', '.site-header', '.nv-top-header-wrap', '.adsbyvli', '.entry-title'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });


        var sportingliveStyle = `
        #primary, .home.blog #primary { float: none; width: 100%; }
        #content { margin-top: 0; }
        .boxed_layout #page { box-shadow: none; }
        body, html, .boxed_layout #page {
        background: #141414;
        }
        img, hr, br, p, svg {
        display: none;
        }
        `;
        pasteStyle(sportingliveStyle);
    }


    /* ------------------------------------------------- */
    /* *://thecyclingentertainment.com (CyclingStreams)  */
    /* motornews.live                                    */
    /* hockeyweb.live, sportson.site                     */
    /*                                                   */
    /* Theses websites seems to only work in Chrome      */
    /* ------------------------------------------------- */
    if (match(current, "*://thecyclingentertainment.com*") || match(current, "*://motornews.live*") || match(current, "*://hockeyweb.live*") || match(current, "*://hockeyweb.site*") || match(current, "*://sportson.site*")) {

        log("=== hockeyweb / sportson /cyclingentairtenement / motornews / sportson ===");

        var hotgarbage = [
            '#site-header',
            '#site-footer',
            '.col-12.col-md-12.col-lg-4.col-xl-4.col-xxl-3',
            '.qc-cmp2-container', '#post-5855 > div > div > div > div > section > div > div > div > div > div > div > div > div > div > div:nth-child(3)',
            '#post-5855 > div > div > div > div > section > div > div > div > div > div > div > div > div > div > div:nth-child(1)', '.aoa_overlay', '.elementor-col-33', '.gen-bottom-header', '#qc-cmp2-persistent-link', 'footer', '#fixedban', '[href^="https://redi1.soccerstreams.net/"]', '.aft-sticky-sidebar.widget-area', '.masthead-banner', '.font-family-1.em-breadcrumbs', '.entry-title', '.primary-footer', '.site-info',
            '#id-custom_banner', '#div-gpt-ad-8176806-7', '#mt_hockeyweb.live_970x90_1', 'h6', '.masthead-banner', '.entry-title', '.gen-header',
            '.header-after1.widget-title', '.site-info', '.trail-items', '.aft-sticky-sidebar.widget-area', '.primary-footer'];

        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleHockeyweb = `
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
        background: #141414;
        }
        div#primary {
        width: 100%;
        }
        .content-area .site-main {
        padding: 0;
        }
        `;
        pasteStyle(styleHockeyweb);
    }

    /* ------------------------ */
    /* bdnewszh.com             */
    /*                          */
    /* Also work only in Chrome */
    /* ------------------------ */
    if (match(current, "*://bdnewszh.com*") || match(current, "*://www.bdnewszh.com*")|| match(current, "*://*.bdnewszh.com*")) {

        /*
        if (document.querySelector('html'))
        clearEventListener(document.querySelector('#__next'));
        */

        var hotgarbage = [".ds_content", ".ds_content", "div[style^=position]", "script[src^=\\/\\/onpsapul]", 'next-route-announcer', '#__next > div > div:nth-child(5) > a', 'header', 'footer', '.footer', '.header', '.nav-teams', '.nav-teams__inner', '.player-view', '#div.container:nth-of-type(6)', '.abblock-msg', '.capitalize', '.billboard-banner', '.footer', '.footer-sticky-banner', '.right-sticky-banner', '.left-sticky-banner', '.container.powerdby'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });
        var styleBdnewszh = `
        html, body, .content, .contentarea {
          background: #141414;
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
        pasteStyle(styleBdnewszh);
    }

    /* ----------------------- */
    /* *://bestnhl.com/*       */
    /* ----------------------- */
    if (match(current, "*://bestnhl.com*")) {

        log("=== BestNHL page ===");
        var hotgarbage = ['.bbevent.container', '.site-nav-outer'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        document.querySelectorAll('.col-sm-8').forEach(el => { el.classList.remove('col-sm-8'); el.classList.add('col-8'); });
        document.querySelectorAll('.col-sm-4').forEach(el => { el.classList.remove('col-sm-4'); el.classList.add('col-4'); });

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
        `;
        pasteStyle(bestnhlStyle);
    }

    /* ----------------------- */
    /* *://poscitech.club/*       */
    /* ----------------------- */
    if (match(current, "*://*poscitech.com*") || match(current, "*://*poscitech.org*") || match(current, "*://*specialgame.xyz*")) {

        log("=== poscitech page ===");
        var hotgarbage = ['.col-md-3', '#sidebar', '.site-header', '.postmeta', '.footer-wrapper', 'h3', 'h1', 'footer', '.footer', '.navbar', '.brand', '.entry_meta', '.entry-header', '.site-info', '#secondary', '#comments', '#colophon', 'nav'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var poscitechstyle = `
        a {
        display: none;
        }
        body, html,article, .content-area {
        background: #141414;
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
        article.hentry {
        box-shadow: none;
        padding: 0;
        margin: 0;
        }
        `;
        pasteStyle(poscitechstyle);
    }

    /* ----------------------- */
    /* *://papahd.club/*       */
    /* ----------------------- */
    if (match(current, "*://papahd.club*") || match(current, "*://3papahd3.icu/*") || match(current, "*://papafoot.click/*") ) {
        log("=== papahd page ===");
        var hotgarbage = ['.skip-link', 'button', 'button', '#header', '#credit', '#footer', '.sidebar.s1', '.sidebar.s2', 'a[href*=total]', 'a[href*=discord]'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var papastyle = `
        #wrapper { margin : 0 }
        .pad, .col-2cl .main-inner, .entry p, .entry dd, .main { padding: 0; margin: 0; }
        .page-title { display: none; }
        #page > .container-inner {
        box-shadow: none;
        }
        #page > .container-inner {
        border: 0;
        border-radius: 0;
        }
        .main-inner:before { background: none; }
        body, html, .col-2cl .main-inner {
        background: #141414;
        }
        #wrapper {
        padding: 0;
        margin: 0;
        }
        svg {
        display: none;
        }
        iframe {
        width: 100%;
        }

        `;
        pasteStyle(papastyle);
    }

    /* ----------------------- */
    /* papahd's sub-iframe site    */
    /* ----------------------- */
    if (match(current, "*://sportsonline.to/*")) {

        log("=== papahd's iframe / cr7soccer.club > sportsonline page ===")
        var hotgarbage = [];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var sportsonlinestyle = ``;
        pasteStyle(sportsonlinestyle);
    }

    /* ----------------------- */
    /* weakstreams.com         */
    /* Liveonscore             */
    /* ----------------------- */
    if (match(current, "*://weakstreams.com*")) {

        var hotgarbage = ['body > div.wp-dark-mode-switcher.wp-dark-mode-ignore.style-3.floating.right_bottom.active', '.entry-header', '#masthead', '.header-main', 'div [class*=styles__MatchInfo]', '.content-sidebar', 'div.discord', '#gamecard', '#footer-sidebar', 'h3', '#colophon', '.ads-placment', '.ads-placment', '.ads-placment', '.site-info', 'div.adsbyvli', '.adsbyvli', 'a[style*=z-index\\:\\ 2147483647]',
            'a[style*=width\\:\\ 2287]', 'a[style*=width\\:\\ 2287]', 'div[class*=row\\ ml-1\\ mr-1\\ pt-2\\ mt-4]'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        window.addEventListener("load", function () {
            var injectBeforeThis = document.querySelector('.entry-content');
            var newBtn = document.createElement('a');
            newBtn.className = 'button';
            newBtn.style = 'cursor: pointer;display:block; float:left;margin-bottom: 5px;margin-left:30px;position: absolute;z-index: 999;';
            newBtn.text = 'FULLSCREEN';
            newBtn.addEventListener('click', function () { player.core.mediaControl.toggleFullscreen(); player.unmute(); player.play(); });
            injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis);

            var injectBeforeThis = document.querySelector('.entry-content');
            var newBtn = document.createElement('a');
            newBtn.className = 'button';
            newBtn.style = 'cursor: pointer; margin-left: 10px !important; display:block;float:right;margin-bottom: 5px;margin-right: 30px;right: 0px; position: absolute;z-index: 999;';
            newBtn.text = 'RELOAD';
            newBtn.addEventListener('click', function () { document.location.reload(); });
            injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis);
        });

        var stylingWeakstreams = `
        #primary {
            padding-top: 7px;
        }
        #video-player {
            top: 45px;
            position: absolute;
        }
        .hentry {
            position: relative;
        }
        .site-content .entry-content, .site-content .entry-summary, .page-content {
            padding: 0;
        }
        #main, .site-content, .site-main .widecolumn {
            margin: 0;
        }
        .site {
            max-width: 100%;
            margin: unset;
        }

        #content {
            width: 100%;
        }

        html, html[class], body, #page, #content, .entry-content, .entry-header {
            background: #18191c;
            background-color: #18191c;
        }

        .entry-header, .entry-title, .content-area, span, .site-name, .smtitle {
            color: rgb(205, 200, 194);
        }

        p {
            display: none;
        }
        `;

        pasteStyle(stylingWeakstreams);
    }

    /* ----------------------- */
    /* fabtech.work            */
    /* ----------------------- */
    if (match(current, "*://fabtech.work*")) {

        var hotgarbage = ['#secondary', '.g1-row-layout-page.g1-row.g1-footer > .g1-row-background', '.g1-column', '.g1-hb-shadow-off.g1-hb-sticky-off.g1-hb-boxed.g1-hb-row-2.g1-hb-row-b.g1-hb-row-normal.g1-hb-row.g1-row-layout-page.g1-row > .g1-row-background',
            '.g1-hb-shadow-off.g1-hb-sticky-off.g1-hb-boxed.g1-hb-row-2.g1-hb-row-b.g1-hb-row-normal.g1-hb-row.g1-row-layout-page.g1-row > .g1-row-inner > .g1-dropable.g1-column'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        window.addEventListener("load", function () {
            var injectBeforeThis = document.querySelector('.g1-content-narrow.g1-typography-xl.entry-content');
            var newBtn = document.createElement('a');
            newBtn.className = 'button';
            newBtn.style = 'cursor: pointer;display:block; float:left;z-index:9999;position:fixed; padding:3px; font-weight: bold;box-shadow: 0px 0px 4px #cccccc6e;border-radius: 4px;';
            newBtn.text = 'FULLSCREEN';
            newBtn.addEventListener('click', function () { player.requestFullscreen(); player.muted(false); player.play(); });
            injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis);

            var injectBeforeThis = document.querySelector('.entry-content');
            var newBtn = document.createElement('a');
            newBtn.className = 'button';
            newBtn.style = 'cursor: pointer; display:block;float:right;z-index:9999;position:sticky; padding:3px; font-weight: bold;box-shadow: 0px 0px 4px #cccccc6e;border-radius: 4px;';
            newBtn.text = 'RELOAD';
            newBtn.addEventListener('click', function () { document.location.reload(); });
            injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis);
        });
    }

    /* --------------------------- */
    /* http://givemenbastreams.com */
    /* --------------------------- */
    if (match(current, "*://givemenbastreams.com*")) {

        var hotgarbage = ['#secondary', 'nav.flex'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        window.addEventListener("load", function () {
            var injectBeforeThis = document.querySelector('.w-full.rounded.overflow-hidden.shadow-md.bg-white');
            var newBtn = document.createElement('a');
            newBtn.className = 'button';
            newBtn.style = 'cursor: pointer; display:block;float:right;z-index:9999;position:sticky; padding:3px; font-weight: bold;box-shadow: 0px 0px 4px #cccccc6e;border-radius: 4px;background: #ffffff26; margin-bottom: 5px;';
            newBtn.text = 'RECHARGER PAGE';
            newBtn.addEventListener('click', function () { document.location.reload(); });
            injectBeforeThis.parentElement.insertBefore(newBtn, injectBeforeThis);
        });

        var styleGivemenbastreams = `
        nav.flex {
        display: none;
        }
        `;

        pasteStyle(styleGivemenbastreams);
    }

    /* ----------------------- */
    /* techstribes.com         */
    /* ----------------------- */
    if (match(current, "*://techstribes.com*")) {

        var hotgarbage = ['#live-chat-iframe', '#dismiss-btn'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        /*
        checkElement('div[data-player]').then((selector) => {
            selector.style = "width: 100%";
        });
        */
    }

    /* ----------------------- */
    /* sportsnest.co           */
    /* ----------------------- */
    if (match(current, "*://sportsnest.co*")) {

        var hotgarbage = [ 'div[id^=chp_ads_block_modal]', 'table', 'aside', 'img', 'header', '.entry-title', '.wp-dark-mode-wobble.wp-dark-mode-ignore', '#close', 'tr', 'td', 'td', 'h4', '#ad', '.nv-top-header-wrap', '.nv-header-menu-block-wrap', '.nv-logo-section-wrapper', '.site-footer'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        checkElement('div[data-player]').then((selector) => {
            selector.style = "width: 100%";
        });

        var styleSportsnet = `
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
        .cv-container, .entry-content, .hentry { margin: 0; padding: 0; border: 0; }
        .cv-container { margin: auto; }
        `;

        pasteStyle(styleSportsnet);
    }

    /* ----------------------- */
    /* myoplay.club (Dvaix)    */
    /* ----------------------- */
    if (match(current, "*://myoplay.club*") || match(current, "*://*tutele.sx*") || match(current, "*://*tutele.nl*")) {

        var hotgarbage = [
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

        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var styleMyoplay = `
        #overlayer {
        display: none;
        }
        html, body {
        background: #141414;
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

        pasteStyle(styleMyoplay);
    } /* End Myoplay */

    /* ----------------------- */
    /* 1stream.top             */
    /* ----------------------- */
    if (match(current, "*://1stream.top*")) {

        var hotgarbage = ['in-page-message', "div[id^='note-']", "div[id^='note-']", "div[id^='note-']",
            "div[id^='note-']", "div[id^='note-']", "div[id^='note-']", "div[id^='note-']",
            '.navbar', '#main-header-right', '.top-head-player', '#hide-chat-btn',
            '.col-md-3', '.col-md-12'];
        hotgarbage.forEach(e => {
            checkElement(e).then((selector) => {
                log('Removing hot garbage -- ' + e);
                selector.remove();
            });
        });

        var style1stream = `
        img, a, #overlayer {
        display: none;
        }
        .row {
        margin: 0;
        }
        html, body {
        background: #141414;
        }
        .col-md-9.p-0.m-0.pr-0 {
        width: 100%;
        }
        div[id^='note-'] {
        display: none;
        }
        `;

        pasteStyle(style1stream);
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

    /* ------------ */
    /* Autoplay     */
    /* ------------ */

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

    /* Autoplay feature */
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
        else if (typeof Clappr === 'object' && (!match(current, '*://uhdstreams.club*') &&
            !match(current, '*://givemenbastreams.com*') &&
            !match(current, '*sportinglive.co*') &&
            !match(current, '*tutele.sx*') &&
            !match(current, '*tutele.nl*'))) {
            log('Clappr Autoplay on ' + current);
            document.querySelector('video').muted = false;
            /* simulate a click on player-poster */
            document.querySelector('.player-poster').click();
            var promise = document.querySelector('video').play();
            if (promise !== undefined) {
                promise.then(function () {
                    /* Autoplay started */
                    log('Clappr Auto play allowed');
                    document.querySelector('video').muted = false;

                    player.unmute();
                }).catch(error => {
                    /* Autoplay not allowed! */
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

    /* Destroy js scripts */
    /* Also destroy js redirect */
    new MutationObserver((_, observer) => {
        var scripts = document.querySelectorAll('script');
        var currentScript;
        scripts.forEach(function (e) {
            var ua = navigator.userAgent;

            if (e.src.search('deb.js') >= 0) {
              // Script used by wgstream to clear console.
                e.innerHTML = "";
                e.remove();
            }
            if (e.src.search('cdn4ads') >= 0) {
                e.innerHTML = '';
                e.remove();
            }
            if (e.src.search('suv4') >= 0) {
                e.innerHTML = '';
                e.remove();
            }
            if (e.src.search('v1.0.js') >= 0) {
                e.innerHTML = '';
                e.remove();
            }
            if (e.src.search('mahimeta') >= 0) {
                e.innerHTML = '';
                e.remove();
            }
            if (e.src.search('quant') >= 0) {
                e.innerHTML = '';
                e.remove();
            }
            if (e.src.search('ads') >= 0) {
                e.innerHTML = "";
                e.remove();
            }
            if (e.src.search('tag.js') >= 0) {
                e.innerHTML = '';
                e.remove();
            }
            if (e.src.search('tag.min.js') >= 0) {
                e.innerHTML = "";
                e.remove();
            }
            /* Whitelisting */
            if (match(current, '*cutin.it*') || match(current, '*techoreels.com*') || (match(current, '*https://bestnhl.com/*'))) {
                return;
            }
            if (e.textContent.search('window.location') >= 0 && e.textContent.search('darkreader') == -1 && e.textContent.search('universal-bypass') == -1) {

                currentScript = e.innerHTML;
                currentScript = currentScript.replace(/eval\(function \(p, a, c, k, e, d\) {.*}/gm, '');

                currentScript = currentScript.replace(/window.location.replace\(".*?"\)/g, 'log("snif snif")');
                currentScript = currentScript.replace(/if\(window==window.top\) {window.location.replace\(".*"\);}/g, "");
                currentScript = currentScript.replace(/if\ \(document\.referrer\.indexOf\(b\)\!=-1\){\n.*\n}/g, "");
                currentScript = currentScript.replace(/if\(window==window.top\){\n.*\n}/g, "");
                currentScript = currentScript.replace(/setInterval\(function\(\){\n.*\n}, .*\)/g, "");

                /* for tutele.sx (myoplay's subframe) */
                currentScript = currentScript.replace(/function RedirectTo\(\){\n.*}/m, "");
                currentScript = currentScript.replace(/if\(!isDomain\){\n.*}/gm, "");
                currentScript = currentScript.replace(/if \(window == window.top\) document.location = "\/"/gm, "");
                currentScript = currentScript.replace(/if\(self==top\) { .* }/g, "");
                currentScript = currentScript.replace(/location.href = ".*"+.*;/g, "");


                e.innerHTML = "";
                e.remove();
                /* log(currentScript) */
                addScript(currentScript);

                log("Mutation observer: window.location detected");
                observer.disconnect();
            }
        });
    }).observe(document.documentElement, { childList: true, subtree: true });

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


    /* ------------------------------------- *
    * Wigistream and most annoying websites *
    * blocking rightclicking                *
    * ------------------------------------- */

    if (match(current, "*://uhdstreams.com/hd*") || match(current, '*://uhdstreams.club/hd/*') ||
        match(current, "*://tezgoal.com/*") || match(current, "*://bhliga.com/*") || match(current, "*://dzeko11.net/*") ||
        match(current, '*://wigistream.to/embed/*') || match(current, '*://streamservice443.net/*') ||
        match(current, '*://player.licenses4.me/*') || match(current, "*://myoplay.club*")) {
        log("==== Antiantirightclick loaded ====");
        loadAntiAntiRightClick();
    }

})();