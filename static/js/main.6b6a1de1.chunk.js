(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),A=c(5),a=c.n(A),r=(c(23),c(24),c(4)),i=c.n(r),d=c(6),j=c(7),o=c(8),l=c(10),h=c(9),g=(c(26),c(2)),b=c.n(g),x=c(17),u=c.n(x),m=c(18),p=c.n(m),O=c(0),v=function(e){Object(l.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(j.a)(this,c);for(var n=arguments.length,s=new Array(n),A=0;A<n;A++)s[A]=arguments[A];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,CountriesData:[],CountriesNames:[]},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t,c,n,s,A,a,r,d,j,o,l,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid19.mathdro.id/api/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:for(c=e.sent,n=[],s=[],A=0;A<c.countries.length;A++)n.push(c.countries[A].name);a=0;case 10:if(!(a<n.length)){e.next=25;break}return e.next=13,fetch("https://covid19.mathdro.id/api/countries/".concat(n[a]));case 13:return r=e.sent,e.next=16,r.json();case 16:d=e.sent,j=n[a],o=void 0===d.confirmed?0:b()(d.confirmed.value),l=void 0===d.recovered?0:b()(d.recovered.value),h=void 0===d.deaths?0:b()(d.deaths.value),s.push({index:a+1,name:j,confirmed:o,recovered:l,deaths:h});case 22:a++,e.next=10;break;case 25:this.setState({loading:!1,CountriesData:s,CountriesNames:n});case 26:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return e=!0===this.state.loading?Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"1"}),Object(O.jsx)("td",{children:"loading"}),Object(O.jsx)("td",{children:"loading"}),Object(O.jsx)("td",{children:"loading"}),Object(O.jsx)("td",{children:"loading"})]}):this.state.CountriesData.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.index}),Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.confirmed}),Object(O.jsx)("td",{children:e.recovered}),Object(O.jsx)("td",{children:e.deaths})]},e.index)})),Object(O.jsx)(u.a,{active:this.state.loading,spinner:!0,text:"Loading...",children:Object(O.jsx)(p.a,{height:"100vh",children:Object(O.jsxs)("table",{id:"data-table",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{id:"Country-th",children:"Country"}),Object(O.jsx)("th",{id:"Cases-th",children:"Total Cases"}),Object(O.jsx)("th",{id:"Recovered-th",children:"Total Recovered"}),Object(O.jsx)("th",{id:"Deaths-th",children:"Total Deaths"})]})}),Object(O.jsx)("tbody",{children:e})]})})})}}]),c}(s.a.Component),Q=(c(45),c(46),function(e){Object(l.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(j.a)(this,c);for(var n=arguments.length,s=new Array(n),A=0;A<n;A++)s[A]=arguments[A];return(e=t.call.apply(t,[this].concat(s))).state={confirmed:0,recovered:0,deaths:0},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://covid19.mathdro.id/api",e.next=3,fetch("https://covid19.mathdro.id/api");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,this.setState({confirmed:b()(c.confirmed.value),recovered:b()(c.recovered.value),deaths:b()(c.deaths.value)});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("div",{id:"GlobalData",children:[Object(O.jsxs)("div",{id:"global-span",children:[Object(O.jsx)("img",{src:"data:image/png;base64,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",className:"icon",alt:"global"}),Object(O.jsx)("span",{className:"global",children:"Global"})]}),Object(O.jsxs)("div",{id:"cases",children:[Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAwCAYAAABqkJjhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATvSURBVHgBzVnbVdtAEF2Z91fcQUQFcSqIUkGcCkIqCB2gVACpAFKBSQU2FQAVWKkAf8AB8XLulWfJZFlJK1vgzDl79NrHzOw87qwi0yLd3d0l0+n0E255jXHtyqcsiqIM12O0k/X19TMzJ0WmBQKje4+Pj7vmL4OkibSu856UrayspKurqz/NaxI1muf5GG3Kdnt7O7y+vt6Bdl0GDd4nNzc333R/3t/f338xr0Fgbt9hNA4dS+bRjjTjZeNpWlSC/R5kEso2qTlucw/Pidx/3djYODZzEATlPAPcxgUzUTQyMzsnxfjWt99A37FOWjkhpaL2lCamSqunTbRas86OYyq6Xcg1LYSqmCTudDpDSkjJHx4e6CCZmUkcb21tpaZloqlgrXcFY1H0G9FkBMUc4rEPp/6INUelgyHRISXDJKlZElFp1sYrO9K2gjq+IAmzYzG/6khCe2FHhKFdswTSzIKHg9oB6DgQc0jMK1Mdsx3fIBh8EfiRjSbm9SkxM0c/2tzcfLbDXobhkTGvi+T8eQmRKZbbE9/3Vd9LSMdBXu0y7cIJEgjFXcighTP0b20nMP8E8xmZ3wQxLDTRTCLb0VP7ZJbvoIniG57ZRrg9Rqw+r4yVDRhWmg5m2DL0DS01Cipi0l/UKk0HE3+QNJ1QCDgLFzzDuxN8HzXdAfgNx/L2je+7N9PRQ3GxCydFRzgBs51PgzZDgeE++veMAydlngy352gUIFtbW8t8gkiGZfw/A3Z4X8mwgG5qdawXA6OfwWhmAskKgJaYWSrvlXS1SpkIwOfu/caVgCiD038UHrJ/GL68vOxB4kN3Ygz+4QstTYk+gJjaE5ywDQ2+E8zcC5wiEyyRRRrkmNl2TcQMMmzJtnlhssKAhy7u3+LVNnigg3cFbhrLDzT+3kK7qaCigpaNIyDAWPzIPh9YqADBOglfCnysJQzst4GDqVnOFdLXapqm9JTpygK1JqI4XAb0Yu7IPIxLTN8Txx7InJWE9Z6iSQcTFOkXFWztQKZqOqIsvEPb5+K+orOKUSgn5Ttcv4ekf+x+T/qf260pShGrsTobltLpVJUxad2iFrLa8qpKSG3DGr097SirCl3BVjHMglTXeaEVs6c+LC3xLcO6zntW+dAD3ULQ1YKcQ2hGE9OQOMY5y3Bjf9ctQmsLCXQ68gF4iZkHbQB7hlMfQGfkcMNs0GQi3SB0DIXhODlgofcP2bjtTaKJLX5r6zh3cTkPuKiLAMqmL0rOFQpbDIkkIVVyWYnEuMfwRbC+W8UoQs3QIjqGPDx/RdtmQx+iLZ7kkJEdU0MIk3uy/sg0JaXlqd5S19vrnC/UJrV2586kEjmKuMlngnm19WOfU0qfPZfhulhtHX3howWlzdKY6MZmHRKtE11dXVXiBmqVTmsWJWJl7Tx8rmCUWk+15q2gZU5ni4ZWSLb41JdOQ5KID7pqsubS2qG21Z4v94ckEYUBvH3EsQd61+YmIqs8AKiUkdLuUL8XE0vnmbN2sUVCjKtdMa995biJaYs0YrPptcl4JfCpnGsMG4GZhovFuf8XwX7oHLn/+J94u11TsCRAhnExFpsbh26jtX1JMIO20F0jEgxba9OyO8/S+VLIltrC0Ng2XYzm/8F/kScSMzkqg48qI46Xrt0qyuX3gjWFRsB7GaRhaL7E06JGpOJu0EnOIvQHG0wqSjMPGicAAAAASUVORK5CYII=",className:"icon",alt:"cases"}),Object(O.jsx)("span",{className:"text-span",children:"Cases"}),Object(O.jsx)("span",{className:"text-span-2",children:this.state.confirmed})]}),Object(O.jsxs)("div",{id:"recovered",children:[Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAkCAYAAADPRbkKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEuSURBVHgB7ZjfDYIwEIcP3njSEVjFSdQN2EA3cAR1EtgAN3AEfSP892rgBQsUbHtt0i9pNJo2v89ciz0Ay8iy7FAUxbWqqj3YRlmWpzzP236gyAVsYRi+Gy8fLICFb5rmzPnq7YHhTIQH/HwHJjNSNt/BNjOYjAtPhQtPhQtPhQtPhQtPhQs/BCeGeDGIcZEnu+m0bbsFBSj75XGBdHDLSWVLKC0b3qIyJZTXfFc+SiS0bFi2B1j9y5bQetrIliA5KmVJkJ7z/0oY8ZBaK2HUE3aphJF/D0QlqMN7cxK+78f4NvyZ6HkPfElQJOLNxabTMQiCGyhmtjM3JTGGrvAModbiEgmd4RnCvVERCd3hFzO1sY2/jPTwJCjDr2qvMwk8hSIsqU1d13csmwSI+AB2xcMAtt+nygAAAABJRU5ErkJggg==",style:{height:"35.25px"},className:"icon",alt:"recovered"}),Object(O.jsx)("span",{className:"recovered-text-span",children:"recovered"}),Object(O.jsx)("span",{className:"recovered-text-span-2",children:this.state.recovered})]}),Object(O.jsxs)("div",{id:"deaths",children:[Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALzSURBVHgB7ZnpbdswFMcffcH+lk4QbVBngjgTNBvUmaDZoOkERSaIM0HSCepMYHeCcAO7gAHfdv/PoFRG0EWRsiXAP0CQZPN4B9/jIUGO2O/3F4vF4rZer1/jtYt3D/cL9fdUCCFxH9dqteF6vX7rdDqSHCDIEgjT2+123/DYo/8Cp3csxGC73f6wVSS3AmxxCP8d9/uYIjL07kUVslUklwKz2azbbDZfQkJNocwzrtd2uz2GYFO9jhpiXTz2MYyuQ3UlvHjjalglwsIvl8sJrr26JvP5/IEFzNoGyntcR2vj0M5qtepSkYSFR4cjFoZywnXRzvtRlAh3hveBidXj4DbQ3oumxLuNUWJBw0+65ckhSomR1v5vcgks0i/aQsrDE83DPXKFPnRgna9UELqhnHmBJyrd+lQwLLiJF2ppBZCfA4sjtz9QwaC/X/4zliW3ZIseXC6yThoqoDN7XKQ1BpdODgWFGLZarZu4cmqWNUHGzbxsNNwO7aHPT+FZXadBCWw2m0AouPZvVBml5AjLA4/MkKh7FSPcH1IKIAY93MZxjaTGgA86Gif87ZE5XsJ/0n/AQi9x2CZ6AFZPHfNsQWSLuxweGCcNjaykKgDBKA2M5QGdiMxDqKw0yAE8g6qtZGZ4a9loNJ7JEmsFVBZ6wt2oHoKzjzpvaq+cG1dDSJI50lZ4xtoDnEk4n2MiM5qlse20zkCMkxhQ6dCJQKacsxDDS2AMo55JnaS1lQnWHuCdlKnwDNdRp3dWWHuAV5QI4Efk9c8m9XjdX4osxCCj3NOJqHwQnxU4NWcFTs2HTX2eCenY8NYWE+CV/x54gA+wyi48Axm7+gQYNw9MUzbxR0cJ7YV/j1QAwr/CTXdUInBWNKAIBaq/GlVH5T1cl9rv/AmoTyUCo+LS37YiXr9APj5oGwp1/uhRNZGsgNluvGQEQcxZBycFj1QBsHT/Sf5H9cK+SxUI9h/BF6PqLyVCMSCpGnj+Q+WDuIbcWonAjYJl/wepp1sVzDF5vgAAAABJRU5ErkJggg==",className:"icon",alt:"deaths"}),Object(O.jsx)("span",{className:"text-span",children:"deaths"}),Object(O.jsx)("span",{className:"text-span-2",children:this.state.deaths})]})]})}}]),c}(s.a.Component));function C(){return Object(O.jsx)("div",{id:"sidebar",children:Object(O.jsx)(Q,{})})}var f=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(C,{}),Object(O.jsx)(v,{})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,A=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),A(e),a(e)}))};a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root")),k()}},[[47,1,2]]]);
//# sourceMappingURL=main.6b6a1de1.chunk.js.map