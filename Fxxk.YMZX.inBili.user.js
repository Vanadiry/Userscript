// ==UserScript==
// @name         RNM元梦之星
// @description  如题
// @namespace    http://tampermonkey.net/
// @updateURL    https://raw.githubusercontent.com/Vanadiry/Userscript/main/Fxxk.YMZX.inBili.user.js
// @downloadURL  https://raw.githubusercontent.com/Vanadiry/Userscript/main/Fxxk.YMZX.inBili.user.js
// @version      0.1.1
// @author       Vanadiry
// @match        *.bilibili.com/*
// @icon         https://icon.vanadiry.com/svg/access.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const tagPanel = document.querySelector('.tag-panel');
    if (tagPanel) {
        const tagPanelText = tagPanel.innerText;
        if (tagPanelText.includes('元梦之星') || tagPanelText.includes('圆梦之星')) {
            const video = document.querySelector('video');
            if (video) {
                video.pause();
                alert('我超！元！\n快跑，这是个元梦之星推广视频！');
            }
        }
    }
})();
