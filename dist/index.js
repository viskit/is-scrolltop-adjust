document.body.insertAdjacentHTML("afterbegin", `
  <div id="is-scrolltop-aujust" style=" position:absolute;top:0;left:0;pointer-events:none;overflow-x:hidden;width:10px;height:10px;">
    <div class="wrap" style="min-height:120%"></div>
  </div>
`);
let judged = false;
let result = false;
const isScrolltopAdjust = () => {
    if (judged) {
        return result;
    }
    const scroll = document.querySelector("#is-scrolltop-aujust");
    const wrap = scroll.querySelector(".wrap");
    scroll.scrollTop = 50;
    const scrollTop = scroll.scrollTop;
    wrap.insertAdjacentHTML("beforebegin", `<p>Test</p>`);
    result = scroll.scrollTop !== scrollTop;
    scroll.remove();
    judged = true;
    return result;
};
export default isScrolltopAdjust;
//# sourceMappingURL=index.js.map