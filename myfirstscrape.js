import {
    j as i,
    F as t,
    f as d,
    a as m,
    b as h,
    d as f,
    r as p,
    c as u,
    R as g,
    e as y
} from "./vendor.5a6881a2.js";
const b = function () {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) l(r);
    new MutationObserver(r => {
        for (const n of r)
            if (n.type === "childList")
                for (const s of n.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && l(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function c(r) {
        const n = {};
        return r.integrity && (n.integrity = r.integrity), r.referrerpolicy && (n.referrerPolicy = r.referrerpolicy), r.crossorigin === "use-credentials" ? n.credentials = "include" : r.crossorigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }

    function l(r) {
        if (r.ep) return;
        r.ep = !0;
        const n = c(r);
        fetch(r.href, n)
    }
};
b();
const e = i.exports.jsx,
    a = i.exports.jsxs,
    w = i.exports.Fragment,
    v = e(t, {
        icon: d
    }),
    N = e(t, {
        icon: m
    }),
    k = e(t, {
        icon: h
    });
let A = new Date().getFullYear();
const x = () => a("footer", {
    className: "adam-foot",
    children: [a("p", {
        children: ["Made With ", e("a", {
            className: "IBLove",
            href: "https://innovatebham.com",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Love"
        }), " by", e("a", {
            href: "https://www.linkedin.com/in/adam-m-vaughn/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: e("span", {
                className: "brandName",
                children: "Adam Mathew Vaughn"
            })
        }), "Embedded Systems | Birmingham, AL \xA9 ", A]
    }), "\xA0", a("span", {
        className: "footer-icons",
        children: [a("a", {
            href: "https://github.com/adammathewvaughn",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [" ", e("i", {
                className: "fas fa-github",
                children: k
            })]
        }), " ", a("a", {
            href: "https://twitter.com/adammathewv",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [" ", e("i", {
                className: "fas fa-twittersquare",
                children: N
            })]
        }), " ", a("a", {
            href: "https://discord.gg/QDX6SpZe",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [" ", e("i", {
                className: "fas fa-discord",
                children: v
            })]
        })]
    })]
});
var j = "/assets/logo.ae8c87ea.png";
const I = () => e("header", {
    className: "head",
    children: e("img", {
        src: j,
        className: "App-logo",
        alt: "logo"
    })
});
const F = e(t, {
        icon: u
    }),
    L = {
        gtmId: "GTM-MW7CTZK"
    };
f.initialize(L);

function M() {
    return p.exports.useState(0), e(w, {
        children: a("div", {
            className: "container fluid",
            children: [a("div", {
                className: "App justify-content-center row md-4 d-flex ",
                children: [e(I, {
                    className: "col-sm-6"
                }), e("div", {
                    className: "row-sm-6",
                    children: e("div", {
                        className: "container-fluid",
                        children: e("div", {
                            className: "App-body col-sm-4",
                            children: e("div", {
                                className: "row justify-content-between",
                                children: a("div", {
                                    className: "justify-content-left row-sm-4 d-flex ",
                                    children: [e("h1", {
                                        className: "slogan row-sm-6",
                                        children: "\u2014\u2014 Automating a better tomorrow \u2014\u2014"
                                    }), e("p", {
                                        className: "bodyp",
                                        children: " \xA0 \xA0 Hi, my name is Adam M. Vaughn and I'm a Birmingham-area Embedded Systems engineer with an emphasis on incorporating Full-Stack Development and REST APIs into microcontrolled systems. My goal as an embedded systems engineer is to combine my Full-Stack Web-Development education with my background in construction and my life-long infatuation with technology and hardware. With the prevalence of the IoT and micro-controlled/automated embedded systems via Raspberry Pi and Arduino, the juxtaposition of hardware and software has never been more at the forefront of our lives. Embedded systems is the natural arris of the myriad technologies that comprise our modern world, and I'm excited to begin my path in the field. I'm grateful for the opportunity to contribute to a better world through coding and embedded systems, and I'm eagerly working to do more every day. I would love to speak with like-minded people, companies, and organizations who are interested in achieving similar goals, and I hope we can work together soon."
                                    }), a("div", {
                                        className: "LinksDiv col-4 justify-content-between",
                                        children: [a("a", {
                                            className: "App-link",
                                            href: "https://www.linkedin.com/in/vaughn-embedded-systems",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: ["Let's Connect ", a("i", {
                                                className: "fas fa-coffee",
                                                children: [" ", F]
                                            })]
                                        }), e("a", {
                                            className: "App-link",
                                            href: "mailto:adam@adammathewvaughn.com",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "Email"
                                        }), e("a", {
                                            className: "App-link",
                                            href: "sms:+12052596791",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "Text"
                                        }), e("a", {
                                            className: "App-link",
                                            href: "tel:+12052596791",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "Call"
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })]
            }), e(x, {
                className: "row-sm-4 d-flex"
            })]
        })
    })
}
g.render(e(y.StrictMode, {
    children: e(M, {})
}), document.getElementById("root"));
