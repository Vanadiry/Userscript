// ==UserScript==
// @name         去除Bing首页资讯等无用内容
// @description  如题
// @namespace    http://tampermonkey.net/
// @updateURL    https://raw.githubusercontent.com/Vanadiry/Userscript/main/bingcn.user.js
// @downloadURL  https://raw.githubusercontent.com/Vanadiry/Userscript/main/bingcn.user.js
// @version      0.1.3
// @author       Vanadiry
// @match        *://cn.bing.com/*
// @icon         https://icon.vanadiry.com/svg/bing.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var cnbing_c = document.querySelector('.bottom_row.widget.msnpeek.nomvs');
    var cnbing_g = document.querySelector('.bottom_row.widget.msnpeek_notob.nomvs');
    var cnbing_r = document.querySelector('.below_sbox');
    if (cnbing_c) {
        cnbing_c.style.display = 'none';
    }
    if (cnbing_g) {
        cnbing_g.style.display = 'none';
    }
    if (cnbing_r) {
        cnbing_r.style.display = 'none';
    }
})();
