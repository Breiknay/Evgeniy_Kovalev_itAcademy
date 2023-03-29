function buildWrapper(tagName) {
    return function (text, attrs) {
        let html = "<" + tagName;
        for (let attr in attrs) {
            html += " " + attr + "='" + attrs[attr].replace(/'/g, "&apos;").replace(/"/g, "&quot;") + "'";
        }
        html += ">" + text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;") + "</" + tagName + ">";
        return html;
    }
}

var wrapP = buildWrapper("P");
console.log(wrapP("Однажды в студёную зимнюю пору"));

console.log(wrapP("Однажды в студёную зимнюю пору", {lang: "ru"}));


console.log(wrapP("Однажды в <студёную> зимнюю пору"));

var wrapH1 = buildWrapper("H1");
console.log(wrapH1("СТИХИ", {align: "center", title: "M&M's"}));

