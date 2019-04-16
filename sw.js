/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/WXingSong/WXingSong.github.io/2019/04/10/test/index.html","f87dd90b04ed02cc6a632ca76a8e9e65"],["/WXingSong/WXingSong.github.io/archives/2019/04/index.html","10c8dbc2d76bb5b0d363eb1401fbc638"],["/WXingSong/WXingSong.github.io/archives/2019/index.html","0e5816f8480a394ab115e17e7d223667"],["/WXingSong/WXingSong.github.io/archives/index.html","7a0d24ae3a0724e2934b13974345ac12"],["/WXingSong/WXingSong.github.io/categories/index.html","f12bd75798123b9dea30efc0e85e0d8d"],["/WXingSong/WXingSong.github.io/categories/技术/index.html","9ce4cccc79f0833fbd8fa1f2699d3000"],["/WXingSong/WXingSong.github.io/css/main.css","36b699c58be1d5b66af6e7d3cfc84cc8"],["/WXingSong/WXingSong.github.io/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/WXingSong/WXingSong.github.io/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/WXingSong/WXingSong.github.io/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/WXingSong/WXingSong.github.io/images/background.jpg","bd74f4139bd6f9adab9d1970b311676b"],["/WXingSong/WXingSong.github.io/images/cc-by-nc-nd.svg","cdcf1add295728fc4cba4c10c6101ca5"],["/WXingSong/WXingSong.github.io/images/cc-by-nc-sa.svg","f8c9026ccd762736bac31eaf2001e4dc"],["/WXingSong/WXingSong.github.io/images/cc-by-nc.svg","3a042a8767c6765ae3638348e3ad1f2c"],["/WXingSong/WXingSong.github.io/images/cc-by-nd.svg","dfee190f250598c4ecb6a156612921bb"],["/WXingSong/WXingSong.github.io/images/cc-by-sa.svg","8a606f0f00f2e34d9612b39d34d88324"],["/WXingSong/WXingSong.github.io/images/cc-by.svg","69a519d7ba0fd913478425360ee4e392"],["/WXingSong/WXingSong.github.io/images/cc-zero.svg","5b18d8238a93966486c7b16cea08901c"],["/WXingSong/WXingSong.github.io/images/favicon-16x16-next.png","0e27bcdb18bfaede679a8a181c136a37"],["/WXingSong/WXingSong.github.io/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/WXingSong/WXingSong.github.io/images/favicon.png","0fb156d55ae1c95fdb34b431d9c25f2c"],["/WXingSong/WXingSong.github.io/images/header.jpg","7e2f99aca97aba1cdf63572e8208287f"],["/WXingSong/WXingSong.github.io/images/loading.gif","8f8244c83aed8614d3933d435b01ba6e"],["/WXingSong/WXingSong.github.io/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/WXingSong/WXingSong.github.io/images/placeholder.gif","8f8244c83aed8614d3933d435b01ba6e"],["/WXingSong/WXingSong.github.io/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/WXingSong/WXingSong.github.io/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/WXingSong/WXingSong.github.io/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/WXingSong/WXingSong.github.io/images/tree.jpg","a21ad7148e1e06af258986f16cd815fc"],["/WXingSong/WXingSong.github.io/index.html","9da0fcca3d446158774f52c9ce33ca29"],["/WXingSong/WXingSong.github.io/js/src/affix.js","3c633feb6db78aa4db83001271c1be4a"],["/WXingSong/WXingSong.github.io/js/src/algolia-search.js","cdd5224a2a0c32f7871bde444732e915"],["/WXingSong/WXingSong.github.io/js/src/bootstrap.js","c7a8d9a21ced05bc9857f3fb8fdf4c28"],["/WXingSong/WXingSong.github.io/js/src/exturl.js","96506da622e6ce9d83b35eb8ff0495c6"],["/WXingSong/WXingSong.github.io/js/src/hook-duoshuo.js","cb2f6a043f354d3f29145d42d2e6fedb"],["/WXingSong/WXingSong.github.io/js/src/js.cookie.js","a68fc5982b78b14a7abffad3a0c878a4"],["/WXingSong/WXingSong.github.io/js/src/motion.js","b2831b7e61ba95ce4e60888b1c361ad9"],["/WXingSong/WXingSong.github.io/js/src/post-details.js","2b9e89cb2fd59696e4a11899b2ba16a0"],["/WXingSong/WXingSong.github.io/js/src/schemes/pisces.js","47b80800e3ff36250b01dfd8d6af0c8d"],["/WXingSong/WXingSong.github.io/js/src/scroll-cookie.js","666440fe3a0df48d81e969edb92d5faf"],["/WXingSong/WXingSong.github.io/js/src/scrollspy.js","62c778e339add76d675a194ff3887e1f"],["/WXingSong/WXingSong.github.io/js/src/utils.js","df5dceda6f402b97a7021ec88ba64a22"],["/WXingSong/WXingSong.github.io/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/WXingSong/WXingSong.github.io/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/WXingSong/WXingSong.github.io/lib/Han/dist/han.css","29037d3376c61f45e236188b3a22951e"],["/WXingSong/WXingSong.github.io/lib/Han/dist/han.js","498d3b752d4a38921ee5170da6345d4a"],["/WXingSong/WXingSong.github.io/lib/Han/dist/han.min.css","d9170052b1ba300050febe5cd351ff89"],["/WXingSong/WXingSong.github.io/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/WXingSong/WXingSong.github.io/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/WXingSong/WXingSong.github.io/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/WXingSong/WXingSong.github.io/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/WXingSong/WXingSong.github.io/lib/canvas-ribbon/canvas-ribbon.js","f5ad960d34ee38890070268e0aacd4d4"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c0498cb6ea83adb9275d32017b4e73ce"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","2734e6b38ca4cd2a091e75c043f346aa"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/helpers/jquery.fancybox-media.js","aae07e9b8a0f963107f87fe1d860912b"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","575eb6bedd0974a5f7ec20208eafffd1"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/jquery.fancybox.css","f3ccdd9fba4009cdf29fd04e6304af36"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/jquery.fancybox.js","7c62f7b6bbac5780c8eb72988b0c0d34"],["/WXingSong/WXingSong.github.io/lib/fancybox/source/jquery.fancybox.pack.js","c2c701dcfe6b81f04fd6a4242352ec2f"],["/WXingSong/WXingSong.github.io/lib/fastclick/README.html","bfc5a1db025f2b2baf3a7c09920d6a0f"],["/WXingSong/WXingSong.github.io/lib/fastclick/lib/fastclick.js","3343fe5114157212316f14533e3b552e"],["/WXingSong/WXingSong.github.io/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/WXingSong/WXingSong.github.io/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/WXingSong/WXingSong.github.io/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/WXingSong/WXingSong.github.io/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/WXingSong/WXingSong.github.io/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/WXingSong/WXingSong.github.io/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/WXingSong/WXingSong.github.io/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/WXingSong/WXingSong.github.io/lib/jquery/index.js","0477dcf000b5481dec0294ecc6ba8b90"],["/WXingSong/WXingSong.github.io/lib/jquery_lazyload/CONTRIBUTING.html","b9b8c9422da2bce88de4cedabb1f5661"],["/WXingSong/WXingSong.github.io/lib/jquery_lazyload/README.html","f86e54c5f8260c130fc69e9689d4f827"],["/WXingSong/WXingSong.github.io/lib/jquery_lazyload/jquery.lazyload.js","58b4f141ec996ae57083ff5dda5c3abf"],["/WXingSong/WXingSong.github.io/lib/jquery_lazyload/jquery.scrollstop.js","463e4d7048ed521fc0373ca1d24cd62a"],["/WXingSong/WXingSong.github.io/lib/needsharebutton/font-embedded.css","6418907739b9a9fbfc9ed6fd5c3c4910"],["/WXingSong/WXingSong.github.io/lib/needsharebutton/needsharebutton.css","26981ed4922912ae2936b173e11e043b"],["/WXingSong/WXingSong.github.io/lib/needsharebutton/needsharebutton.js","61709c5f123e9d95e1d229327753b06b"],["/WXingSong/WXingSong.github.io/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/WXingSong/WXingSong.github.io/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/WXingSong/WXingSong.github.io/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/WXingSong/WXingSong.github.io/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/WXingSong/WXingSong.github.io/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/WXingSong/WXingSong.github.io/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/WXingSong/WXingSong.github.io/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/WXingSong/WXingSong.github.io/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/WXingSong/WXingSong.github.io/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/WXingSong/WXingSong.github.io/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/WXingSong/WXingSong.github.io/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/WXingSong/WXingSong.github.io/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/WXingSong/WXingSong.github.io/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/WXingSong/WXingSong.github.io/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/WXingSong/WXingSong.github.io/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/WXingSong/WXingSong.github.io/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/WXingSong/WXingSong.github.io/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/WXingSong/WXingSong.github.io/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/WXingSong/WXingSong.github.io/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/WXingSong/WXingSong.github.io/lib/ua-parser-js/dist/ua-parser.pack.js","3b6e9b905dc01bb7f00f4eb816556d54"],["/WXingSong/WXingSong.github.io/lib/velocity/velocity.js","7c18d1254e1f2ea007126e95cc40cf3e"],["/WXingSong/WXingSong.github.io/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/WXingSong/WXingSong.github.io/lib/velocity/velocity.ui.js","7da0e9c866bd9a30af6352cdec3de8ae"],["/WXingSong/WXingSong.github.io/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/WXingSong/WXingSong.github.io/sw-register.js","35bfe577b8fa15482714df928959a336"],["/WXingSong/WXingSong.github.io/tags/index.html","17e7cbf1865f220bcf61c2ac9e67a87a"],["/WXingSong/WXingSong.github.io/tags/前端/index.html","396d58439ae75fba3e9c38663fe3a0f2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
