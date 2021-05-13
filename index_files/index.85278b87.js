import {
	p as a,
	a as e,
	o as l,
	c as s,
	b as t,
	F as i,
	r as o,
	d as n,
	t as u,
	w as d,
	e as c,
	f as r,
	_ as m,
	g as h,
	h as p,
	i as f,
	j as v,
	k as g,
	l as y,
	m as w
} from "./vendor.ab80fe49.js";
const E = {
		data: () => ({
			audioElm: "",
			stopFlag: !1,
			switchItems: [{
				name: "关",
				class: "switch_0",
				
				value: 0
			}, {
				name: "1",
				class: "switch_1 switch_3",
				value: 1
			}, {
				name: "2",
				class: "switch_2",
				value: 2
			}, {
				name: "3",
				class: "switch_3",
				value: 3
			}],
			leafs: "leafs",
			radio: 0,
			count: 0
		}),
		beforeMount() {
			this.initAudioElm()
		},
		methods: {
			initAudioElm() {
				let a = new Audio;
				a.preload = "metadata", a.src = "/audio/fan.wav", a.load(), this.audioElm = a
			},
			radioChange(a) {
				switch (this.leafs = "leafs-" + a, this.count += 1, a) {
					case 0:
						this.playSwitchAudio();
						break;
					default:
						this.stopFlag = !1, 0 === this.audioElm.currentTime || this.audioElm.currentTime === this
							.audioElm.duration ? this.playFanAudio(0) : this.playFanAudio()
				}
			},
			playSwitchAudio() {
				this.audioElm.ended || this.stopAudio()
			},
			playFanAudio(a = 3.5) {
				if (!this.stopFlag) {
					this.audioElm.currentTime = a, this.audioElm.play();
					let e = this,
						l = this.audioElm.duration - this.audioElm.currentTime - 1;
					setTimeout((function() {
						e.playFanAudio()
					}), 1e3 * l)
				}
			},
			stopAudio() {
				this.audioElm.currentTime = 6, this.stopFlag = !0
			}
		}
	},
	b = d();
a("data-v-5df064f6");
const A = {
		id: "fan"
	},
	F = {
		class: "header"
	},
	_ = t("div", {
		class: "circle"
	}, null, -1),
	k = t("div", {
		class: "leaf-1"
	}, null, -1),
	T = t("div", {
		class: "leaf-2"
	}, null, -1),
	V = t("div", {
		class: "leaf-3"
	}, null, -1),
	j = t("div", {
		class: "neck"
	}, null, -1),
	I = t("div", {
		class: "footer"
	}, null, -1),
	C = {
		class: "switch-btn-group"
	};
e();
const M = b(((a, e, d, r, m, h) => {
	const p = c("el-radio-button"),
		f = c("el-radio-group");
	return l(), s("div", A, [t("div", F, [(l(), s("div", {
		key: m.count,
		class: m.leafs
	}, [_, k, T, V], 2))]), j, I, t("div", C, [t(f, {
		modelValue: m.radio,
		"onUpdate:modelValue": e[1] || (e[1] = a => m.radio = a),
		onChange: h.radioChange
	}, {
		default: b((() => [(l(!0), s(i, null, o(m.switchItems, ((a, e) => (l(), s(
		p, {
			key: e,
			class: a.class,
			modelValue: a.value,
			"onUpdate:modelValue": e => a
				.value = e,
			label: a.value
		}, {
			default: b((() => [n(u(a.name),
				1)])),
			_: 2
		}, 1032, ["class", "modelValue",
			"onUpdate:modelValue", "label"
		])))), 128))])),
		_: 1
	}, 8, ["modelValue", "onChange"])])])
}));
E.render = M, E.__scopeId = "data-v-5df064f6";
const U = "https://mp.weixin.qq.com/s/b2a84dhnAUQxSku_CuRFFA";
var W = r({
	name: "app",
	data: () => ({
		title: "小刘专属夏日清凉小风扇",
		description: "除了没有风，什么都好！",
		copyright: {
			name: "Electric Fan",
			repo: "electric-fan",
			author: "YunYouJun",
			logo: "emojione:watermelon",
			link: U
		},
		adText: "🍉",
		adImageLink: U
	}),
	components: {
		Fan: E,
		VueAboutMe: m
	}
});
const x = {
		id: "app"
	},
	L = t("br", null, null, -1),
	S = {
		class: "footer"
	},
	Y = {
		style: {
			margin: "1rem"
		}
	},
	q = {
		class: "animate-logo"
	};
W.render = function(a, e, i, o, d, r) {
	const m = c("fan"),
		p = c("el-button"),
		f = c("vue-about-me");
	return l(), s("div", x, [t("h3", {
		title: a.description
	}, [n(u(a.title) + " ", 1), L, t("small", null, u(a.description), 1)], 8, ["title"]), t(m), t("div",
		S, [t("div", Y, [t(p, null, {
			default: h((() => [t("a", {
				href: a.adImageLink,
				target: "_blank"
			}, [t("span", q, u(a.adText), 1)], 8, ["href"])])),
			_: 1
		})]), t(f, {
			copyright: a.copyright
		}, null, 8, ["copyright"])])])
};
const D = p(W);
D.use(f, {
	config: {
		id: "G-FMH4WDW53W"
	}
}), D.use(v), D.use(g), D.use(y), D.use(w), D.mount("#app");
