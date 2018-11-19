// ==UserScript==
// @name         Autoplay GIFV
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://i.imgur.com/*.gifv
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var promise = document.getElementsByTagName("video")[0].play();
    if (promise !== undefined) {
        promise.then(_ => {
            // Autoplay started!
        }).catch(error => {
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
            var element = document.createElement("button");
            element.onclick = function () {
                document.getElementsByTagName("video")[0].play();
            };
            element.appendChild(document.createTextNode("Play Video!"));
            var page = document.getElementById("content");
            page.insertBefore(element, page.firstChild);
        });
    }
})();
