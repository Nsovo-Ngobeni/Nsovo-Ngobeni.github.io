(this["webpackJsonpapp-template"]=this["webpackJsonpapp-template"]||[]).push([[0],[,,,function(e,t,c){e.exports={scoreBoard:"ScoreBoard_scoreBoard__15P7J",header:"ScoreBoard_header__1i-hg",score:"ScoreBoard_score__30RV3"}},,function(e,t,c){e.exports={tile:"Tile_tile__1BPPU",text:"Tile_text__1hSWV"}},function(e,t,c){e.exports={grid:"Grid_grid__3OKnt",row:"Grid_row__3epDA",tile:"Grid_tile__X0Ky_"}},function(e,t,c){e.exports={container:"Footer_container__oxrd4",btn:"Footer_btn__3LRVo"}},,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),o=c(8),a=c.n(o),i=(c(13),c(2)),s=c(5),l=c.n(s),d=c(0),u=function(e){return Object(d.jsx)("div",{id:"r".concat(e.rowIdx,"c").concat(e.colIdx),className:l.a.tile,onClick:function(){return e.onTileClick(e.rowIdx,e.colIdx)},children:Object(d.jsx)("h3",{className:l.a.text,style:{color:"var(--".concat(e.tileState,"-colour)")},children:e.tileState})})},j=c(6),x=c.n(j),b=function(e){return Object(d.jsx)("div",{className:x.a.grid,children:e.gridState.map((function(t,c){return Object(d.jsx)("div",{id:"".concat(c),className:x.a.row,children:t.map((function(t,n){return Object(d.jsx)(u,{tileState:t,rowIdx:c,colIdx:n,onTileClick:e.onTileClick},n)}))},c)}))})},_=c(3),f=c.n(_),h=function(e){return Object(d.jsx)("div",{className:f.a.scoreBoard,children:Object.keys(e.score).map((function(t,c){return Object(d.jsxs)("div",{style:{color:"var(--".concat(t,"-colour)")},children:[Object(d.jsx)("h1",{className:f.a.header,children:t}),Object(d.jsx)("h5",{className:f.a.score,children:"".concat(e.score[t]," ").concat("="===t?"draws":"wins")})]},c)}))})},O=c.p+"static/media/reset.ede1a9b7.svg",p=c(7),m=c.n(p),v=function(e){return Object(d.jsx)("div",{className:m.a.container,children:Object(d.jsx)("img",{className:m.a.btn,onClick:e.resetGame,src:O,alt:"resetBtn"})})},S=(c(15),{checkWin:function(e){for(var t=0;t<3;t++){if(e[t][0]===e[t][1]&&e[t][1]===e[t][2]&&e[t][0])return!0;if(e[0][t]===e[1][t]&&e[1][t]===e[2][t]&&e[0][t])return!0}return!!(e[1][1]&&e[0][0]===e[1][1]&&e[1][1]===e[2][2]||e[1][1]&&e[0][2]===e[1][1]&&e[1][1]===e[2][0])},checkDraw:function(e){return!!(e[0][0]&&e[0][1]&&e[0][2]&&e[1][0]&&e[1][1]&&e[1][2]&&e[2][0]&&e[2][1]&&e[2][2])}});var g=function(){var e=Object(n.useState)([["","",""],["","",""],["","",""]]),t=Object(i.a)(e,2),c=t[0],r=t[1],o=Object(n.useState)({o:0,"=":0,x:0}),a=Object(i.a)(o,2),s=a[0],l=a[1],u=Object(n.useState)("x"),j=Object(i.a)(u,2),x=j[0],_=j[1],f=Object(n.useState)(!0),O=Object(i.a)(f,2),p=O[0],m=O[1],g=function(e,t){var n=c;n[e][t]=x,r(n)},k=function(e){var t=s;t[e]+=1,l(t),m(!1)},w=function(){_("x"===x?"o":"x")};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{score:s}),Object(d.jsx)(b,{gridState:c,onTileClick:function(e,t){!c[e][t]&&p&&(g(e,t),w(),S.checkWin(c)?k("".concat(x)):S.checkDraw(c)&&k("="))}}),Object(d.jsx)(v,{resetGame:function(){r([["","",""],["","",""],["","",""]]),_("x"),m(!0)}})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),k()}],[[16,1,2]]]);
//# sourceMappingURL=main.65c16cb4.chunk.js.map