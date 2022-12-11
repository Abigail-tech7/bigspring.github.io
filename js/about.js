"use strict";
const spendCounter = document.querySelector(".spend-counter");
const attrCounter = document.querySelector(".attr-counter");
const agencyCounter = document.querySelector(".agency-counter");
const hireCounter = document.querySelector(".hire-counter");

let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      let spend = setInterval(spendDone, 3);
      let attr = setInterval(attrDone, 3);
      let agency = setInterval(agencyDone, 3);
      let hire = setInterval(hireDone, 3);

      function spendDone() {
        count1++;
        spendCounter.innerHTML = count1;
        // to stop
        if (count1 == 80) {
          clearInterval(spend);
        }
      }

      function attrDone() {
        count2++;
        attrCounter.innerHTML = count2;
        // to stop
        if (count2 == 40) {
          clearInterval(attr);
        }
      }

      function agencyDone() {
        count3++;
        agencyCounter.innerHTML = count3;
        // to stop
        if (count3 == 83) {
          clearInterval(agency);
        }
      }

      function hireDone() {
        count4++;
        hireCounter.innerHTML = count4;
        // to stop
        if (count4 == 40) {
          clearInterval(hire);
        }
      }
    }
    else{
         count1 = 1;
 count2 = 1;
 count3 = 1;
 count4 = 1;
    }
  });
});

const factsContainer = document.querySelector(".factsContaner");
// console.log(factsContainer);
observer.observe(factsContainer);

// lazy loading
var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});