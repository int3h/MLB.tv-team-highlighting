// ==UserScript==
// @name           Highlight your team
// @namespace      https://github.com/int3h
// @description    Highlights your favorite team on the MLB.tv Media Center guide
// @include        http://mlb.mlb.com/mediacenter/*
// ==/UserScript==

my_team = "athletics";
highlight_color = "#FDE091";

addGlobalStyle('.myTeam > td {background-color: ' + highlight_color + ' !important; border-color: ' + highlight_color + ' !important; }');

var mgTimes = document.evaluate("//*[@class='mmg_matchup']", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

for (var i = mgTimes.snapshotLength - 1; i >= 0; i--) {
	var elem = mgTimes.snapshotItem(i);
	
	if (elem.innerHTML.toLowerCase().indexOf(my_team.toLowerCase()) != -1) {
		elem.parentNode.className = 'myTeam';
	}
}

function addGlobalStyle(css) {
	try {
		var elmHead, elmStyle;
		elmHead = document.getElementsByTagName('head')[0];
		elmStyle = document.createElement('style');
		elmStyle.type = 'text/css';
		elmHead.appendChild(elmStyle);
		elmStyle.innerHTML = css;
	} catch (e) {
		if (!document.styleSheets.length) {
			document.createStyleSheet();
		}
		document.styleSheets[0].cssText += css;
	}
}