// ==UserScript==
// @name         去除B站无用内容
// @description  如题
// @namespace    http://tampermonkey.net/
// @updateURL    https://raw.githubusercontent.com/Vanadiry/Userscript/main/Fxxk.Bilibili.ADs.user.js
// @downloadURL  https://raw.githubusercontent.com/Vanadiry/Userscript/main/Fxxk.Bilibili.ADs.user.js
// @version      0.1.1
// @author       Vanadiry
// @match        *.bilibili.com/*
// @match        https://t.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
	const url = window.location.href.match('[a-zA-z]+://(.*)/')[1];
	if (url == 'www.bilibili.com') {
		console.log('首页');
		homePage();
	} else if (url == 't.bilibili.com') {
		console.log('动态');
		dynamicPage();
	} else if (url.match('www.bilibili.com/(.*)')) {
		if (url.split('/')[1] == 'video') {
			console.log('视频播放页');
			videoPage();
		} else if (url.match('www.bilibili.com/(.*)')[1] == 'read') {
			console.log('专栏页');
			readPage();
		}
	} else if (url.includes('space.bilibili.com')) {
		console.log('个人空间');
		spacePage();
	} else if (url.includes('member.bilibili.com')) {
		console.log('创作中心');
		memberPage();
	}

    hideDom([
            '.download-entry.download-client-trigger',
            '.v-popover-wrap.left-loc-entry',
            '.right-entry__outside.right-entry--vip',
        ]);

    function homePage() {
        hideDom([
            '.adblock-tips',
        ]);
        var hmpggray = document.getElementsByTagName("html")[0];
        hmpggray.setAttribute("class","none");
    }

    function memberPage() {
        hideDom([
            'div[style="display: flex;"]',
            '.material-wrp',
        ]);;
    }

	function dynamicPage() {
		hideDom([
            'aside.right .bili-dyn-banner',
            'aside.right .bili-dyn-ads',
            //'aside.right .sticky',
		]);
        console.log('喵喵喵');
	}

	function spacePage() {
    hideDom([
            '.section.i-m',
		]);
    }

    function videoPage() {
        hideDom([
            '#activity_vote',
            '.ad-report.ad-floor-exp',
        ]);
    }

    function readPage() {
        hideDom([
            '#readRecommendInfo',
		]);
		// 专栏去除复制小尾巴
		window.onload = () => {
			document.getElementById('article-content').parentNode.innerHTML += '';
		};
	}

	function hideDom(element) {
		let style = '';
		element.forEach(function (e) {
			style += `${e}{display:none !important;}`;
		});
		GM_addStyle(style);
	}

})();