// ==UserScript==
// @name         去除Bing首页资讯等无用内容
// @description  去除cn.bing和www.bing中的资讯、无用图标、无用列表等元素
// @namespace    http://tampermonkey.net/
// @updateURL    https://raw.githubusercontent.com/Vanadiry/Userscript/main/bing.user.js
// @downloadURL  https://raw.githubusercontent.com/Vanadiry/Userscript/main/bing.user.js
// @version      1.0.1
// @author       Vanadiry
// @match        *://*.bing.com/*
// @icon         https://img.vanadiry.com/icon/bing.svg
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  var BingHome = [
    ".bottom_row.widget.msnpeek.nomvs",
    ".bottom_row.widget.msnpeek_notob.nomvs",
    ".bottom_row.widget.msnpeek.mvs",
    ".below_sbox",
    "#id_qrcode",
    "#id_qrcode_popup_positioner",
    "#modern-flyout",
  ];
  BingHome.forEach(function (selector) {
    var element = document.querySelector(selector);
    if (element) {
      element.style.display = "none";
    }
  });

  var BingSearch = [
    ".b_ans",
    ".b_footer",
    "#id_mobile",
    "#b-scopeListItem-video",
    "#b-scopeListItem-dictionary",
    "#b-scopeListItem-local",
    "#b-scopeListItem-menu",
    "#b-scopeListItem-notebook",
    "#b-scopeListItem-bingpages",
  ];
  BingSearch.forEach(function (selector) {
    var element = document.querySelector(selector);
    if (element) {
      element.style.display = "none";
    }
  });
})();
