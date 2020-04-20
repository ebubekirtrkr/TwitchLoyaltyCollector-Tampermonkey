// ==UserScript==
// @name         TwitchLoyaltyCollector
// @namespace    Twitch Get Loyalty Point Bot
// @version      0.1
// @description  Twitch Get Loyalty Point Bot | Collects Loyalties automoticaly
// @author       ebubekirtrkr
// @match        http://www.twitch.tv/*
// @match        https://www.twitch.tv/*
// @match        http://twitch.tv/*
// @match        https://twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     window.onload=function(){
        const main = () => {
            var getB = document.getElementsByClassName("tw-button tw-button--success tw-interactive");
            if(getB.length >0){
                getB[0].click();
            }
        };
        setInterval(main,500);
    }
})();
