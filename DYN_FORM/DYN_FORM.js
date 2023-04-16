"use script";

var formDef1 =
    [
        {label: 'Название сайта:', kind: 'longtext', name: 'sitename'},
        {label: 'URL сайта:', kind: 'longtext', name: 'siteurl'},
        {label: 'Посетителей в сутки:', kind: 'number', name: 'visitors'},
        {label: 'E-mail для связи:', kind: 'shorttext', name: 'email'},
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'division',
            variants: [{text: 'здоровье', value: 1}, {text: 'домашний уют', value: 2}, {
                text: 'бытовая техника',
                value: 3
            }]
        },
        {
            label: 'Размещение:', kind: 'radio', name: 'payment',
            variants: [{text: 'бесплатное', value: 1}, {text: 'платное', value: 2}, {text: 'VIP', value: 3}]
        },
        {label: 'Разрешить отзывы:', kind: 'check', name: 'votes'},
        {label: 'Описание сайта:', kind: 'memo', name: 'description'},
        {caption: 'Опубликовать', kind: 'submit'},
    ];

var formDef2 =
    [
        {label: 'Фамилия:', kind: 'longtext', name: 'lastname'},
        {label: 'Имя:', kind: 'longtext', name: 'firstname'},
        {label: 'Отчество:', kind: 'longtext', name: 'secondname'},
        {label: 'Возраст:', kind: 'number', name: 'age'},
        {caption: 'Зарегистрироваться', kind: 'submit'},
    ];

function addFormElements(formDef, form) {
    let br
    let hr = document.createElement('hr')
    hr.style.cssText = 'margin: 15px 0 15px 0';
    form.appendChild(hr)
    for (let i = 0; i < formDef.length; i++) {
        let label = document.createElement("label");
        if (formDef[i].label) {
            label.appendChild(document.createTextNode(formDef[i].label));
            form.appendChild(label)
        }

        let input;
        switch (formDef[i].kind) {
            case "longtext":
            case "shorttext":
            case "number":
                input = document.createElement("input");
                input.type = formDef[i].kind;
                input.name = formDef[i].name;
                form.appendChild(input)
                br = document.createElement('br');
                form.appendChild(br);
                break;
            case "memo":
                input = document.createElement("textarea");
                input.style.cssText = 'width: 400px; height: 50px';
                input.name = formDef[i].name;
                form.appendChild(input)
                br = document.createElement('br');
                form.appendChild(br);
                break;
            case "combo":
                input = document.createElement("select");
                for (let j = 0; j < formDef[i].variants.length; j++) {
                    let option = document.createElement("option");
                    option.text = formDef[i].variants[j].text;
                    option.value = formDef[i].variants[j].value;
                    input.appendChild(option);
                    form.appendChild(input)
                }
                br = document.createElement('br');
                form.appendChild(br);
                break;
            case "radio":
                for (let j = 0; j < formDef[i].variants.length; j++) {
                    let radio = document.createElement("input");
                    radio.type = "radio";
                    radio.name = formDef[i].name;
                    radio.value = formDef[i].variants[j].value;
                    let radioLabel = document.createElement("label");
                    radioLabel.appendChild(radio);
                    radioLabel.appendChild(document.createTextNode(formDef[i].variants[j].text));
                    form.appendChild(radioLabel);
                }
                br = document.createElement('br');
                form.appendChild(br);
                break;
            case "check":
                input = document.createElement("input");
                input.type = "checkbox";
                input.name = formDef[i].name
                form.appendChild(input);
                br = document.createElement('br');
                form.appendChild(br);
                break;
            case "submit":
                let caption = document.createElement('caption')
                form.appendChild(caption)
                input = document.createElement("input");
                input.type = "submit";
                input.value = formDef[i].caption
                form.appendChild(input);
                break;
            default:
                break;

        }
    }
    document.getElementsByTagName("body")[0]
        .appendChild(form);
}

const formOne = document.forms['formOne'];
const formTwo = document.forms['formTwo'];
addFormElements(formDef1, formOne)
addFormElements(formDef2, formTwo)
