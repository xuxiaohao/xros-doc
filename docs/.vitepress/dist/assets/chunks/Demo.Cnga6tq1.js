import{s as p,y as _,z as h,d as g,o as R,c as x,j as i,_ as L}from"./framework.2gWjYe7W.js";function u(d={}){const t=p(null),n=Object.assign({width:60,height:60,color:"#ff4132",blur:30},d);function a(){var e;(e=t.value)==null||e.classList.add("light")}function l(e){const{clientX:o,clientY:r}=e,s=t.value;if(s){const{x:f,y:v}=s.getBoundingClientRect();s.style.setProperty("--x",o-f-n.width/2+"px"),s.style.setProperty("--y",r-v-n.height/2+"px"),s.style.setProperty("--color",n.color),s.style.setProperty("--blur",n.blur+"px");const m=(o-f-100)/100*2,y=(r-v-100)/100*2;s.style.transform=`perspective(1000px) rotateX(${m}deg) rotateY(${y}deg)`}}function c(){var o;const e=t.value;e&&(e.style.removeProperty("--x"),e.style.removeProperty("--y"),e.style.removeProperty("--color"),e.style.removeProperty("--blur"),e.style.removeProperty("transform"),e.getAttribute("style")===""&&e.removeAttribute("style")),(o=t.value)==null||o.classList.remove("light")}return _(()=>{var e,o,r;(e=t.value)==null||e.addEventListener("mouseenter",a),(o=t.value)==null||o.addEventListener("mousemove",l),(r=t.value)==null||r.addEventListener("mouseleave",c)}),h(()=>{var e,o,r;(e=t.value)==null||e.removeEventListener("mouseenter",a),(o=t.value)==null||o.removeEventListener("mousemove",l),(r=t.value)==null||r.removeEventListener("mouseleave",c)}),{cardRef:t}}const P={class:"container"},b=g({__name:"Demo",setup(d){const{cardRef:t}=u(),{cardRef:n}=u({color:"#ffffff",blur:80}),{cardRef:a}=u({color:"yellow",width:100});return(l,c)=>(R(),x("div",P,[i("div",{class:"item",ref_key:"cardRef1",ref:t},null,512),i("div",{class:"item",ref_key:"cardRef2",ref:n},null,512),i("div",{class:"item",ref_key:"cardRef3",ref:a},null,512)]))}}),k=L(b,[["__scopeId","data-v-01374710"]]);export{k as default};
