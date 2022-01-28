(function () {
    var options = { "id": 11077, "hash": "89869b0c11c3b20ddcf044f4db5e59e2", "siteUrl": "https:\/\/lawanswers.bc.edu", "iid": 729, "onlinerules": [{ "u": 0, "d": [3538], "c": "" }], "width": 400, "height": 340, "color_backg": "#f9f9f9", "color_head": "#286090", "color_btn": "#FFFFFF", "offline_url": "https:\/\/lawanswers.bc.edu\/form.php?queue_id=2930", "autoload_head": "Do you need help?", "autoload_text": "A librarian is online ready to help.", "autoload_yes": "Chat Now", "autoload_no": "No Thanks", "autoload_time": 0, "cal_url": "", "cal_text": "Schedule a Meeting", "cal_autoload": false, "slidebutton_url": "http:\/\/www.bc.edu\/content\/dam\/bc1\/schools\/law\/js\/library\/chat\/chat_available-1.png", "slidebutton_url_off": "http:\/\/www.bc.edu\/content\/dam\/bc1\/schools\/law\/js\/library\/chat\/chat_unavailable-1.png", "slidebutton_text": "Ask Us", "slidebutton_text_off": "Offline", "slidebutton_width": "auto", "slidebutton_height": "80px", "slidebutton_bcolor_off": "#286090", "slidebutton_color_off": "#FFFFFF", "slidebutton_bcolor": "#286090", "slidebutton_color": "#FFFFFF" }; var cascadeServer = "https:\/\/chat-us.libanswers.com"; var referer = ""; var refererTitle = ""; const removeCoverageFromRule = function (rule) { return { u: rule.u, d: rule.d, c: rule.c, fallbackSeconds: rule.fallbackSeconds || 0 } }, isCoverageInRange = function (hour, minute, ranges) { if (0 === ranges.length) return !1; for (let i = 0; i <= ranges.length; i++) { const range = ranges[i]; if (!Array.isArray(range) || 2 !== range.length) continue; const start = range[0].split(":").map(el => parseInt(el, 10)), end = range[1].split(":").map(el => parseInt(el, 10)); if (!(start[0] > hour || end[0] < hour)) { if (start[0] < hour && end[0] > hour) return !0; if (start[0] !== hour) { if (end[0] !== hour); else if (end[1] > minute) return !0 } else if (start[1] < minute) return !0 } } return !1 }; var adjustStatusRequestForCoverage = function (onlineRules) { const finalRules = [], now = new Date, day = now.getUTCDay(), hour = now.getUTCHours(), minute = now.getUTCMinutes(); return onlineRules.forEach(rule => { if (!rule.c || 1 === rule.coverageType) return void finalRules.push(removeCoverageFromRule(rule)); if (0 === rule.coverageType) return; const times = rule.coverageHours; if (!times || !times[day] || 0 === times[day].length) return; const ranges = times[day]; isCoverageInRange(hour, minute, ranges) && finalRules.push(removeCoverageFromRule(rule)) }), finalRules };;
    const buttonWidget = { config: {}, online: !1, loaded: !1, autoload: !1, chatContainer: null, button: null, image: null, chatTimer: null, modal: null, allydialog: null, referer: "", refererTitle: "", deleteAutoPopDeny: function () { try { localStorage.removeItem("libchat_auto") } catch (e) { } }, saveAutoPopDeny: function () { const obj = { date: Math.floor(Date.now() / 1e3) }; try { localStorage.setItem("libchat_auto", JSON.stringify(obj)) } catch (e) { } }, autoPopDenied: function () { try { let obj = localStorage.getItem("libchat_auto"); if ("" === obj) return !1; obj = JSON.parse(obj); return !(Math.floor(Date.now() / 1e3) - obj.date > 3600) || (this.deleteAutoPopDeny(), !1) } catch (e) { this.deleteAutoPopDeny() } return !1 }, openChat: function () { "" === this.referer && (this.referer = window.location.href), "" === this.refererTitle && window.document.title && (this.refererTitle = window.document.title); let authId = 0; window.springSpace && window.springSpace.la && window.springSpace.la.Page && window.springSpace.la.Page.auth_id && (authId = window.springSpace.la.Page.auth_id); const widgetUrl = `${this.config.siteUrl}/chat/widget/${this.config.hash}?referer=${encodeURIComponent(this.referer)}&referer_title=${encodeURIComponent(this.refererTitle)}&auth_id=${authId}`; window.open(widgetUrl, "libchat", `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=${this.config.width}, height=${this.config.height}`) }, handleAutoPopAccept: function () { this.openChat(), this.allydialog.hide(), this.modal.parentNode.removeChild(this.modal), this.saveAutoPopDeny() }, handleAutoPopDeny: function () { this.saveAutoPopDeny(), this.modal && this.modal.parentNode && this.modal.parentNode.removeChild(this.modal) }, handleLibCalLink: function () { window.open(this.config.cal_url) }, showModal: function () { if (this.autoload = !0, "undefined" == typeof A11yDialog) return; const modalId = "libchat_modal_" + this.config.id; if (null !== document.getElementById(modalId)) return; this.modal = document.createElement("div"), this.modal.id = modalId, this.modal.setAttribute("aria-labelledby", "libchat_modal_title"), this.modal.setAttribute("aria-hidden", !0), this.modal.style.zIndex = 10; const overlay = document.createElement("div"); overlay.setAttribute("data-a11y-dialog-hide", "true"); const dialog = document.createElement("div"); dialog.setAttribute("role", "document"), dialog.classList.add("dialog"); const dialog_title = document.createElement("h1"); dialog_title.id = "libchat_modal_title", dialog_title.setAttribute("tabindex", 0), dialog_title.innerHTML = this.config.autoload_head; const dialog_text = document.createElement("div"); dialog_text.id = "autoload_text", dialog_text.innerHTML = this.config.autoload_text; const dialog_btns = document.createElement("div"); dialog_btns.id = "autoload_btn"; const dialog_yes = document.createElement("button"); dialog_yes.setAttribute("type", "button"), dialog_yes.innerHTML = this.config.autoload_yes; let dialog_cal = null; this.config.cal_autoload && this.config.cal_url && "" !== this.config.cal_url && this.config.cal_text && "" !== this.config.cal_text && (dialog_cal = document.createElement("button"), dialog_cal.setAttribute("type", "button"), dialog_cal.innerHTML = this.config.cal_text); const dialog_no = document.createElement("button"); dialog_no.setAttribute("type", "button"), dialog_no.innerHTML = this.config.autoload_no, dialog_no.setAttribute("data-a11y-dialog-hide", "true"), dialog_btns.appendChild(dialog_yes), null !== dialog_cal && dialog_btns.appendChild(dialog_cal), dialog_btns.appendChild(dialog_no), dialog.appendChild(dialog_title), dialog.appendChild(dialog_text), dialog.appendChild(dialog_btns), this.modal.appendChild(overlay), this.modal.appendChild(dialog), document.body.appendChild(this.modal), this.allydialog = new A11yDialog(this.modal, this.chatContainer), dialog_yes.addEventListener("click", this.handleAutoPopAccept.bind(this)), dialog_no.addEventListener("click", this.handleAutoPopDeny.bind(this)), null !== dialog_cal && dialog_cal.addEventListener("click", this.handleLibCalLink.bind(this)), this.allydialog.show() }, setTimer: function (isCoopOnline) { if (this.online) { if (isCoopOnline) return; this.config.autoload_time && parseInt(this.config.autoload_time, 10) > 0 && !this.autoPopDenied() && (this.chatTimer = window.setTimeout(this.showModal.bind(this), 1e3 * parseInt(this.config.autoload_time, 10))) } else this.autoload = !1 }, handleOnlineClick: function (ev) { ev.preventDefault(), clearTimeout(this.chatTimer), this.online || "" === this.config.offline_url ? this.openChat() : window.location.href = this.config.offline_url }, changeButtonStatus: function (online) { online !== this.online && (this.online = online, this.online ? null !== this.image ? (this.image.setAttribute("src", this.config.slidebutton_url), this.image.setAttribute("alt", this.config.slidebutton_text), this.button.setAttribute("href", "#")) : (this.button.innerHTML = this.config.slidebutton_text, this.button.classList.add("libchat_online"), this.button.classList.remove("libchat_offline")) : null !== this.image ? (this.image.setAttribute("src", this.config.slidebutton_url_off), this.image.setAttribute("alt", this.config.slidebutton_text_off), "" !== this.config.offline_url && this.button.setAttribute("href", this.config.offline_url)) : (this.button.innerHTML = this.config.slidebutton_text_off, this.button.classList.add("libchat_offline"), this.button.classList.remove("libchat_online"))) }, buildButton: function () { "" !== this.config.slidebutton_url_off && "" !== this.config.slidebutton_url ? (this.image = document.createElement("img"), this.image.classList.add("libchat_btn_img"), this.image.setAttribute("src", this.config.slidebutton_url_off), this.image.setAttribute("alt", this.config.slidebutton_text_off), this.button = document.createElement("a"), this.button.setAttribute("href", "" !== this.config.offline_url ? this.config.offline_url : "#"), this.button.appendChild(this.image)) : (this.button = document.createElement("button"), this.button.innerHTML = this.config.slidebutton_text_off, this.button.classList.add("libchat_offline")), this.button.addEventListener("click", this.handleOnlineClick.bind(this)), this.chatContainer.appendChild(this.button) }, statusSuccess: function (data) { let online = !1; (data.u || data.d || data.c) && (online = !0), this.changeButtonStatus(online); let isCoopOnline = !1; data.c && data.c.length > 0 && (isCoopOnline = !0), this.setTimer(isCoopOnline) }, checkStatus: function () { const adjustedRules = adjustStatusRequestForCoverage(this.config.onlinerules), xhr = new XMLHttpRequest; xhr.onload = () => { const status = xhr.status; if (status >= 200 && status < 300) try { this.statusSuccess(JSON.parse(xhr.responseText)) } catch (e) { this.changeButtonStatus(!1) } else this.changeButtonStatus(!1) }, xhr.onerror = () => { this.changeButtonStatus(!1) }, xhr.open("GET", `${this.cascadeServer}/widget_status?iid=${this.config.iid}&rules=${encodeURIComponent(JSON.stringify(adjustedRules))}`), xhr.send() }, insertWidgetCSS: function () { const id = "#" + this.chatContainer.id, css = `/* LibChat Widget CSS */\n        ${id} img { width: ${this.config.slidebutton_width}; height: ${this.config.slidebutton_height}; }\n        ${id} button { display: inline-block; padding: 6px 12px; margin-bottom: 0; text-align: center; white-space: nowrap; vertical-align: middle; cursor: pointer; background-image: none; border: 1px solid transparent; border-radius: 4px; background-color: ${this.config.slidebutton_bcolor_off}; color: ${this.config.slidebutton_color_off}; }\n        ${id} button.libchat_online { background-color: ${this.config.slidebutton_bcolor}; color: ${this.config.slidebutton_color}; }\n        /* overlay for modal */\n        div[data-a11y-dialog-hide] { position: fixed; background-color: rgb(0, 0, 0); top: 0; left: 0; bottom: 0; right: 0; opacity: 0.3; z-index: 500; }\n        /* modal */\n        #libchat_modal_${this.config.id}{ position: fixed; top: 0; left: 0; bottom: 0; right: 0; font-size: 100%; }\n        #libchat_modal_${this.config.id}[aria-hidden="true"] { display: none; }\n        #libchat_modal_${this.config.id}[data-a11y-dialog-native] > :first-child { display: none; }\n        #libchat_modal_${this.config.id} div[role=document].dialog { position: relative; z-index: 501; margin: 50px auto; width: 300px; background-color: ${this.config.color_backg}; padding: 1em; border-radius: 5px; }\n        /* modal content */\n        #libchat_modal_${this.config.id} h1 { color: ${this.config.color_head}; font-size: 2em; margin: 0 0 0.5em 0; padding: 0; line-height: 1.2em; }\n        #libchat_modal_${this.config.id} button { color: ${this.config.color_btn}; background-color: ${this.config.color_head}; margin: 1em 1em 0 0; border: none; border-radius: 5px; padding: 0.5em 1em; font-size: 1em; }`, head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style"); style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)), head.appendChild(style) }, start: function () { !0 !== this.loaded && (this.loaded = !0, this.chatContainer = document.querySelector(`#libchat_${this.config.hash}, #libchat_btn_widget, #libchat_d2o_widget`), null !== this.chatContainer && (this.insertWidgetCSS(), this.buildButton(), this.checkStatus(), document.addEventListener("visibilitychange", () => { "visible" === document.visibilityState && this.checkStatus() }))) } }; buttonWidget.config = options, buttonWidget.cascadeServer = cascadeServer, buttonWidget.referer = referer, buttonWidget.refererTitle = refererTitle, "complete" === document.readyState || "interactive" === document.readyState ? buttonWidget.start() : (document.addEventListener("DOMContentLoaded", buttonWidget.start.bind(buttonWidget), !1), window.addEventListener("load", buttonWidget.start.bind(buttonWidget), !1));
})();