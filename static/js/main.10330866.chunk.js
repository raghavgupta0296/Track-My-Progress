(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},38:function(e,t,a){e.exports=a(68)},43:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(35),o=a.n(s),l=(a(43),a(10)),c=a(11),u=a(13),i=a(12),p=a(14),m=a(16),d=a(7),h=a(6),g=a(8),E=a.n(g),b=(a(20),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).login=a.login.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){E.a.load("username")&&(document.getElementById("username").value=E.a.load("username"))}},{key:"login",value:function(){""!==document.getElementById("username").value&&(console.log("i gonna log you in a sec, ",document.getElementById("username").value),E.a.save("username",document.getElementById("username").value),this.props.history.push("/progress"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Username",r.a.createElement("input",{placeholder:"Enter your username",id:"username"}),r.a.createElement("br",null),r.a.createElement("u",null,r.a.createElement("a",{className:"App-link",onClick:this.login,rel:"noopener noreferrer",style:{cursor:"pointer"}},"Login"))))}}]),t}(n.Component)),y=Object(d.f)(b),f=a(23),v=a.n(f),k=a(24),j=a.n(k),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).state={progress:{}},e.get_data=e.get_data.bind(Object(h.a)(e)),e.update_data=e.update_data.bind(Object(h.a)(e)),e.graph_data=e.graph_data.bind(Object(h.a)(e)),e.graph2_data=e.graph2_data.bind(Object(h.a)(e)),e.get_data(),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"get_data",value:function(){var e=this;v.a.post("http://trackmyprogress.pythonanywhere.com/loadProgress",{username:E.a.load("username")}).then(function(t){"success"===t.data.message&&(console.log(t.data.progress_data),e.setState({progress:t.data.progress_data}))}).catch(function(e){console.log(e),e.response||e.request})}},{key:"update_data",value:function(){var e=this;v.a.post("http://trackmyprogress.pythonanywhere.com/updateProgress",{username:E.a.load("username"),points:document.getElementById("points").value,info:document.getElementById("info").value}).then(function(t){"update successful"===t.data.message&&(console.log(t.data.message),e.get_data(),document.getElementById("points").value="",document.getElementById("info").value="")}).catch(function(e){console.log(e),e.response||e.request})}},{key:"graph_data",value:function(){var e=this,t=[],a=[],n=[],r=0;return Object.keys(this.state.progress).map(function(s,o){r+=e.state.progress[s].points,t.push(r),a.push(e.state.progress[s].points+": "+e.state.progress[s].info),n.push(s)}),[{x:n,y:t,text:a,type:"scatter",mode:"lines+points"}]}},{key:"graph2_data",value:function(){var e=this,t=[],a=[],n=[];return Object.keys(this.state.progress).map(function(r,s){t.push(e.state.progress[r].points),a.push(e.state.progress[r].points+": "+e.state.progress[r].info),n.push(r)}),[{x:n,y:t,text:a,type:"bar",mode:"lines+points"}]}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("br",null),"Today's Progress",r.a.createElement("br",null),r.a.createElement("input",{type:"number",placeholder:"Enter points",id:"points"}),r.a.createElement("input",{placeholder:"Enter progress info",id:"info"}),r.a.createElement("u",null,r.a.createElement("a",{className:"App-link",onClick:this.update_data,rel:"noopener noreferrer",style:{cursor:"pointer"}},"Update Progress")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j.a,{data:this.graph_data(),layout:{autosize:!0},useResizeHandler:!0,style:{width:"80%"}}),r.a.createElement("br",null),r.a.createElement(j.a,{data:this.graph2_data(),layout:{autosize:!0},useResizeHandler:!0,style:{width:"80%"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),"History: ",r.a.createElement("br",null),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Date"),r.a.createElement("td",null,"Points"),r.a.createElement("td",null,"Info")),Object.keys(this.state.progress).map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t),r.a.createElement("td",null,e.state.progress[t].points," "),r.a.createElement("td",null,e.state.progress[t].info))})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("a",{style:{color:"black"},rel:"noopener noreferrer",target:"_blank",href:"https://github.com/raghavgupta0296/Track-My-Progress"},r.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png",width:"15px"}),"Github"))}}]),t}(n.Component),_=Object(d.f)(O),w=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(d.a,{component:this.analyticsTracking})," ",r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/login",component:y}),r.a.createElement(d.a,{path:"/progress",component:_}),r.a.createElement(d.a,{path:"/",component:y})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.10330866.chunk.js.map