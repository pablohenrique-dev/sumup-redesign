(()=>{"use strict";!function(){var t=document.querySelector("header"),e=document.querySelector("#nav button");function r(e){"touchstart"===e.type&&e.preventDefault(),t.classList.toggle("ativo");var r=t.classList.contains("ativo");e.currentTarget.setAttribute("aria-expanded",r),r&&e.currentTarget.setAttribute("aria-label","Fechar Menu")}e&&["click","touchstart"].forEach((function(t){e.addEventListener(t,r)}))}(),function(){var t=document.querySelectorAll(".faq button"),e=document.querySelectorAll(".faq div");function r(t){var r=t.currentTarget.parentElement.parentElement;e.forEach((function(t){t.classList.remove("ativo"),r.classList.add("ativo")}))}t.forEach((function(t){t.addEventListener("click",r)}))}()})();