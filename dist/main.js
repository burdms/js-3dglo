(()=>{"use strict";const e=function(e){const t=document.getElementById(e),o=document.createElement("div");o.style.cssText="font-size: 2rem; color: #fff;",t.appendChild(o),t.addEventListener("submit",(e=>{e.preventDefault();let n=!0;if(t.querySelectorAll('input:not([placeholder="Ваше сообщение"])').forEach((e=>{e.value||(n=!1)})),n){o.innerHTML="\n          <div class='sk-three-bounce'>\n          <div class='sk-bounce-1 sk-child'></div>\n          <div class='sk-bounce-2 sk-child'></div>\n          <div class='sk-bounce-3 sk-child'></div>\n          </div>\n          ";const e=new FormData(t),n={};e.forEach(((e,t)=>{n[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(n).then((e=>{if(200!==e.status)throw new Error("Network status is not 200");t.reset(),o.textContent="Спасибо! Мы скоро с вами свяжемся",setTimeout((()=>{t.closest(".popup")?(o.textContent="",t.closest(".popup").style.display="none"):o.textContent=""}),3e3)})).catch((e=>{o.textContent="Что-то пошло не так...",console.error(e),setTimeout((()=>{o.textContent=""}),3e3)}))}else o.textContent="Необходимо заполнить все поля!",setTimeout((()=>{o.textContent=""}),3e3)}))};var t;(function(e){const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");r();const c=setInterval(r,1e3);function r(){const r=function(){const t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60);return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:n,seconds:o}}();r.hours<10?t.textContent="0"+r.hours:t.textContent=r.hours,r.minutes<10?o.textContent="0"+r.minutes:o.textContent=r.minutes,r.seconds<10?n.textContent="0"+r.seconds:n.textContent=r.seconds,r.timeRemaining<=0&&(t.textContent="00",o.textContent="00",n.textContent="00",clearInterval(c))}})("22 april 2021"),function(){const e=document.querySelector("menu"),t=e.querySelectorAll("ul>li");function o(){e.classList.toggle("active-menu")}document.addEventListener("click",(n=>{const c=n.target;c.closest(".menu")?o():c.closest("menu")?(c.classList.contains("close-btn")&&o(),t.forEach((e=>{if(e=e.querySelector("a"),c===e){n.preventDefault();const t=e.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"}),o()}}))):e.classList.remove("active-menu")}))}(),function(){const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn");let o,n=0;function c(){o=requestAnimationFrame(c),n+=.1,n<=1?e.style.opacity=n:cancelAnimationFrame(c)}function r(){e.style.display="none",n=0,cancelAnimationFrame(o),e.querySelector("form").reset()}t.forEach((t=>{t.addEventListener("click",(()=>{screen.availWidth>768?(e.style.opacity="0",e.style.display="block",o=requestAnimationFrame(c)):e.style.display="block"}))})),e.addEventListener("click",(e=>{const t=e.target;t.classList.contains("popup-close")?r():t.closest(".popup-content")||r()}))}(),function(){const e=document.querySelector("main>a");e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))}(),function(){const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{const n=e.target.closest(".service-header-tab");n&&t.forEach(((e,c)=>{e===n&&function(e){o.forEach(((o,n)=>{n===e?(t[n].classList.add("active"),o.classList.remove("d-none")):(t[n].classList.remove("active"),o.classList.add("d-none"))}))}(c)}))}))}(),function(e=7e3){const t=document.querySelector(".portfolio-content"),o=document.querySelectorAll(".portfolio-item"),n=document.querySelector(".portfolio-dots"),c=[];let r,s=0;function l(e,t,o){e[t].classList.remove(o)}function a(e,t,o){e[t].classList.add(o)}function i(){l(o,s,"portfolio-item-active"),l(c,s,"dot-active"),s++,s>=o.length&&(s=0),a(o,s,"portfolio-item-active"),a(c,s,"dot-active")}function u(){r=setInterval(i,e)}t.addEventListener("click",(e=>{e.preventDefault();const t=e.target;t.matches(".portfolio-btn, .dot")&&(l(o,s,"portfolio-item-active"),l(c,s,"dot-active"),t.matches("#arrow-right")?s++:t.matches("#arrow-left")?s--:t.matches(".dot")&&c.forEach(((e,o)=>{e===t&&(s=o)})),s>=o.length&&(s=0),s<0&&(s=o.length-1),a(o,s,"portfolio-item-active"),a(c,s,"dot-active"))})),t.addEventListener("mouseover",(()=>{clearInterval(r)})),t.addEventListener("mouseout",(()=>{u()})),function(){for(let e=0;e<o.length;e++){const t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add("dot-active"),c.push(t),n.append(t)}}(),u()}(),function(){const e=document.getElementById("command");let t;e.addEventListener("mouseover",(e=>{const o=e.target;o.classList.contains("command__photo")&&(t=o.src,o.src=o.dataset.img)})),e.addEventListener("mouseout",(e=>{const o=e.target;o.classList.contains("command__photo")&&t&&(o.src=t)}))}(),document.querySelectorAll(".calc-block input").forEach((e=>{e.addEventListener("input",(e=>{const t=e.target;t.value=t.value.replace(/[^\d]/,"")}))})),document.querySelectorAll('input[placeholder="Ваше имя"]').forEach((e=>{e.addEventListener("input",(e=>{const t=e.target;t.value=t.value.replace(/[^А-ЯЁ\- ]/gi,"")}))})),document.querySelectorAll('input[type="email"]').forEach((e=>{e.addEventListener("input",(e=>{const t=e.target;t.value=t.value.replace(/[^A-Z@-_.!~*']/gi,"")}))})),document.querySelectorAll('input[type="tel"]').forEach((e=>{e.addEventListener("input",(e=>{const t=e.target;t.value=t.value.replace(/[^0-9+]/gi,"")}))})),document.querySelectorAll('input[placeholder="Ваше сообщение"]').forEach((e=>{e.addEventListener("input",(e=>{const t=e.target;t.value=t.value.replace(/[^А-ЯЁ0-9,.?!:;\- ]/gi,"")}))})),document.querySelectorAll("input").forEach((e=>{e.addEventListener("blur",(()=>{e.value=e.value.replace(/-+/g,"-"),e.value=e.value.replace(/ +/g," "),e.value=e.value.replace(/^(-| )+/g,""),e.value=e.value.replace(/(-| )$/g,""),"email"!==e.type?(e.value=e.value.replace(/^./g,(e=>e.toUpperCase())),e.value=e.value.replace(/(?!^).*/,(e=>e.toLowerCase()))):e.value=e.value.replace(/.*/,(e=>e.toLowerCase()))}))})),t=100,document.querySelector(".calc-block").addEventListener("input",(e=>{const o=e.target;(o.matches("select")||o.matches("input"))&&function(e){const t=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),n=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),r=document.getElementById("total"),s=t.options[t.selectedIndex].value,l=+o.value;let a=0,i=1,u=1;n.value>1&&(i+=(n.value-1)/10),c.value&&c.value<5?u*=2:c.value&&c.value<10&&(u*=1.5),s&&l&&(a=Math.floor(e*s*l*i*u)),r.textContent=a}(t)})),e("form1"),e("form2"),e("form3"),new class{constructor({main:e,wrap:t,prev:o,next:n,position:c=0}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.prev=document.querySelector(o),this.next=document.querySelector(n),this.options={position:c}}init(){this.addGloClass(),this.addStyles()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyles(){const e=document.createElement("style");e.id="sliderCarousel-styles",e.textContent="\n      .glo-slider {\n        overflow: hidden !important;\n      }\n\n      .glo-slider__wrap {\n        display: flex !important;\n        transition: transform 0.5s !important;\n      }\n\n      .glo-slider__item {\n        flex: 0 0 25% !important;\n        margin: auto 0 !important;\n      }\n    ",document.head.appendChild(e)}controlSlider(){}addArrows(){}}({main:".companies-wrapper",wrap:".companies-hor"}).init()})();