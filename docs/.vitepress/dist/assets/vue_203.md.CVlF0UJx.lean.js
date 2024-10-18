import{_ as t,c as a,o as n,j as e,a as o}from"./chunks/framework.2gWjYe7W.js";const k=JSON.parse('{"title":"项目中如何解决跨域问题","description":"","frontmatter":{},"headers":[],"relativePath":"vue/203.md","filePath":"vue/203.md","lastUpdated":null}'),s={name:"vue/203.md"},l=e("h1",{id:"项目中如何解决跨域问题",tabindex:"-1"},[o("项目中如何解决跨域问题 "),e("a",{class:"header-anchor",href:"#项目中如何解决跨域问题","aria-label":'Permalink to "项目中如何解决跨域问题"'},"​")],-1),r=e("p",null,"跨域是浏览器同源策略导致的，这个是浏览器的行为 （协议、主机名、端口的不同都会导致跨域问题）。服务端和服务端之间进行通信是没有跨域问题的。跨域的实现方案有很多种。不过一般常用的就那么几种。",-1),c=e("ul",null,[e("li",null,"CORS （Cross-Origin Resource Sharing，跨域资源共享） 由服务端设置，允许指定的客户端访问服务器。"),e("li",null,"构建工具中设置反向代理、使用 Nginx 做反向代理。"),e("li",null,"使用 Websocket 进行通信。"),e("li",null,"搭建 BFF(Backend For Frontend) 层解决跨域问题。")],-1),i=[l,r,c];function d(_,u,h,p,m,f){return n(),a("div",null,i)}const v=t(s,[["render",d]]);export{k as __pageData,v as default};
