// Xunlei-Lixian by LeaskH.com

var domLinks = document.querySelectorAll('a');
var intLinks = domLinks.length;
for (var i = 0; i < intLinks; i++) {
    if (domLinks[i].href.match(/^(ed2k|thunder|magnet)\:.*$/)) {
        domLinks[i].href = 'http://lixian.vip.xunlei.com/lixian_login.html'
                         + '?&furl=' + encodeURIComponent(domLinks[i].href);
    }
}
