const febHolidays = [
    "dear chameleon,",
    "firstly tume mysterious banne ki koi zarurat nhi because",
  "tumari aankhe sab bta deti hai",
    "aur hann vo perspective glass hamesha lagagaya karo ",
  "usse aankhe protect rhti hai...",
    "sorry tumne mna kiya tha lekin fir bhi tumari aankhe jada aachi hai usse jiski aankho ki tarif tumkar rhi thi ",
    "pta nhi but.. perspective glass+chameleon=you💝",
  "filhaal tum muje DM kkrke bta skti hoo tume kaise pta  ",
    "BADTE BADTE DARD DAWA kaise ban jata hai ,",
    "marzi hai tumari.",
    "btw..tum aiise act kyuu karti ho ki tume kuch pta hii nhi jabki tume sab pta hota hai ",
    "like=muje kya pta maine kab kha ",
    "aur monn moonset ke time yellow hii dikta ha ",
    "moon=you(your name)",
    "AI tum hoo because ",
    "but ",
    "EMOTIONS bhi hai tum mai pi ki value jitna ",
    "tume mudate ka matlab tou pta hai na ",
    "mudate feel ho rhi hai",
    "jabse school bannd hue hai ",
    "btw...",
    "tum EID ke baad school aaogi,",
    "27 june ko eid hai ",
    "aur fir tum",
    "1july ko  aaogi,",
    "mudate lag jayengi fir tume aane mai ",
    "btw..jaiko kon hai ",
    "dm pe bta skti hoo marzi hai apki ",
    "4am pe utne ki addad tou ho gyi hogi tum ko abtak ",
    "tou YOGA kar rhi hoo tum `,",
    "THATS ALL IG...TO LAL CHAMAELEON ASSAMI PAHADAN WITH RED PURE HEART♡ "
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
