function buildWrapper(tagName) {
    return function (text, attrs) {
        var html = "<" + tagName;

        for (var attr in attrs) {
            html += " " + attr + "='" + htmlEscape(attrs[attr]) + "'";
        }

        html += ">" + htmlEscape(text) + "</" + tagName + ">";
        return html;
    }
}

function htmlEscape(text) {
    return text.replace(/['"&<>]/g, function (match) {
        switch (match) {
            case "'":
                return "&apos;";
            case "\"":
                return "&quot;";
            case "&":
                return "&amp;";
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
        }
    });
}

var wrapP = buildWrapper("P");
console.log(wrapP("Однажды в студёную зимнюю пору"));
console.log(wrapP("Однажды в студёную зимнюю пору", {lang: "ru"}));
console.log(wrapP("Однажды в <студёную> зимнюю пору"));

var wrapH1 = buildWrapper("H1");
console.log(wrapH1("СТИХИ", {align: "center", title: "M&M's"}));