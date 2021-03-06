window.YIUtils = {
    params: function() {
        var t = {};
        return window.location.search.substring(1).split("&").forEach(function(n) {
            var e = n.split("=");
            2 === e.length && (t[e[0]] = e[1])
        }), t
    },
    clipboard: function(t, n) {
        var e = $("<input>");
        $("body").append(e), e.val(t).select(), document.execCommand("copy"), e.remove(), "function" == typeof n && n()
    },
	
    ga: {
        yaser: "UA-87337945-1",
		pageview_yaser:function(e,t,n,o,i,r){return this.pageview("yaser",e,t,n,o,i,r)},
	
	 ga_4: function() {
            window.dataLayer = window.dataLayer || []; function gtag() { window.dataLayer.push(arguments); } gtag('js', new Date());gtag('config', '321766079');
        },
	
        pageview: function(t, n, e, i, o) {
            var a, r, c, s, u, l;
            t in this && (a = window, r = document, c = "script", s = "http" + ("https:" === location.protocol ? "s" : "") + "://www.googletagmanager.com/gtag/js?id=321766079", "ga", a.GoogleAnalyticsObject = "ga", a.ga = a.ga || function() {
                (a.ga.q = a.ga.q || []).push(arguments)
            }, a.ga.l = 1 * new Date, u = r.createElement(c), l = r.getElementsByTagName(c)[0], u.async = 1, u.src = s, l.parentNode.insertBefore(u, l), ga("create", this[t], "auto"), ga("set", "dimension1", "anonymous"), n && "" != n && ga("set", "dimension2", n), e && "" != e && ga("set", "dimension3", e), i && "" != i && ga("set", "dimension4", i), o && "" != o && ga("set", "dimension5", o), ga("send", "pageview"))
        },
        click: function(t, n, e, i) {
            return this.event(t, n, "click", e, i, !0)
        },
        swipe: function(t, n, e, i) {
            return this.event(t, n, "swipe", e, i, !0)
        },
        keyboard: function(t, n, e, i) {
            return this.event(t, n, "keyboard", e, i, !0)
        },
        load: function(t, n, e, i) {
            return this.event(t, n, "load", e, i, !0)
        },
        external: function(t, n, e) {
            return this.event(t, "external links", "click", n, e)
        },
        video_play: function(t, n, e) {
            return this.event(t, "videos", "play", n, e, !0)
        },
        video_pause: function(t, n, e) {
            return this.event(t, "videos", "pause", n, e, !0)
        },
        video_stop: function(t, n, e) {
            return this.event(t, "videos", "stop", n, e, !0)
        },
        event: function(t, n, e, i, o, a) {
            if (t in this && n && "" != n && e && "" != e) {
                ga || (c = window, s = document, 
				u = "http" + ("https:" === location.protocol ? "s" : "") + "://www.google-analytics.com/analytics.js", 
				c.GoogleAnalyticsObject = "ga", 
				c.ga = c.ga || function() {
                    (c.ga.q = c.ga.q || []).push(arguments)
                }, c.ga.l = 1 * new Date, l = s.createElement("script"), 
				d = s.getElementsByTagName("script")[0], 
				l.async = 1, 
				l.src = u, d.parentNode.insertBefore(l, d)), 
				ga("create", this[t], "auto");
				
                var r = {
                    hitType: "event"
                };
                n && "" != n && (r.eventCategory = n), 
				e && "" != e && (r.eventAction = e), 
				i && "" != i && (r.eventLabel = i), 
				o && "" != o && (r.eventValue = o), 
				a && (r.nonInteraction = !0), 
				ga("send", r)
            }
            var c, s, u, l, d
        }
    },
    YIsecure: function() {
        "https:" != location.protocol && (location.href = "https:" + window.location.href.substring(window.location.protocol.length))
    },
    browser: {
        safari: function() {
            return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString()
        },
        opera: function() {
            return !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.match(/ Opr/i)
        },
        firefox: function() {
            return "undefined" != typeof InstallTrigger
        },
        ie: function() {
            return !!document.documentMode
        },
        edge: function() {
            return !this.IE() && !!window.StyleMedia
        },
        chrome: function() {
            return !!window.chrome && !!window.chrome.webstore
        },
        blink: function() {
            return (this.Chrome() || this.Opera()) && !!window.CSS
        }
    },
    mobile: {
        android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        blackberry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        ios: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        windows: function() {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return this.android() || this.blackberry() || this.ios() || this.opera() || this.windows()
        }
    },
    os: {
        mac: function() {
            return navigator.platform.match(/Mac/i)
        },
        windows: function() {
            return navigator.platform.match(/Win/i)
        },
        linux: function() {
            return navigator.platform.match(/Linux/i)
        }
    }
};
