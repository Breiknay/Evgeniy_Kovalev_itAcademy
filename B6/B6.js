function buildWrapper(tg) {
    return function (text, object = {}) {
        let attribute = Object.entries(object).map(([key, value]) => `${key}='${value}'`).join(' ');

        return `<${tg}${attribute ? ' ' : ''}${HtmlEncode(attribute)}>${HtmlEncode(text)}</${tg}>`
    }
}

var wrapP = buildWrapper("P");
console.log(wrapP("Однажды в студёную зимнюю пору"));

console.log(wrapP("Однажды в студёную зимнюю пору", {lang: "ru"}));


console.log(wrapP("Однажды в <студёную> зимнюю пору"));

var wrapH1 = buildWrapper("H1");
console.log(wrapH1("СТИХИ", {align: "center", title: "M&M's"}));


function HtmlEncode(s) {
    let el = document.createElement("div");
    el.innerText = el.textContent = s;
    s = el.innerHTML;
    return s;
}