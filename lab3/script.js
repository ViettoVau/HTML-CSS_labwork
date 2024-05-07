let TMP_TABLE = table;
let isSortPrint = false;
let correspond = {
    "sight": "Великая Китайская Стена",
    "country": "Китай",
    "city": "Пекин",
    "year": 1987,
    "minT": 10000000,
    "maxT": 10000000,
    "minR": 9.5,
    "maxR": 9.5
}

let createTable = (data, idTable) => {
    let table = document.getElementById(idTable);
    table.innerHTML = ""

    // Создание заголовков столбцов
    let tr = document.createElement('tr');
    for (let key in data[0]) {
        let th = document.createElement('th');
        th.innerHTML = key;
        tr.appendChild(th);
    }
    table.appendChild(tr);

    data.map((item) => {
        let tr1 = document.createElement('tr');
        for (let key1 in item) {
            let td1 = document.createElement('td');
            td1.innerHTML = item[key1];
            tr1.appendChild(td1);
        }
        table.appendChild(tr1);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    createTable(data, 'list');
});


let dataFilter = (dataForm) => {
    let dictFilter = {};

    for (let j = 0; j < dataForm.elements.length; j++) {
        let item = dataForm.elements[j];
        let valInput = item.value;

        if (item.type == "text") {
            valInput = valInput.toLowerCase();
        }

        if (item.type == "number") {
            // Если значение числовое, преобразуем его в число
            valInput = parseFloat(valInput);
        } else if (valInput === "" && item.id.includes("minR")) {
            // Если поле пустое и его id включает "From", заносим "-Infinity"
            valInput = "-Infinity";
        } else if (valInput === "" && item.id.includes("maxR")) {
            // Если поле пустое и его id включает "To", заносим "+Infinity"
            valInput = "+Infinity";
        }
        else if (valInput === "" && item.id.includes("minT")) {
            // Если поле пустое и его id включает "From", заносим "-Infinity"
            valInput = "-Infinity";
        } else if (valInput === "" && item.id.includes("maxT")) {
            // Если поле пустое и его id включает "To", заносим "+Infinity"
            valInput = "+Infinity";
        }

        dictFilter[item.id] = valInput;
    }
    return dictFilter;
}

let filterTable = (data, idTable, dataForm) => {
    data = convertStringToNumbersInArray(data);
    let datafilter = dataFilter(dataForm);
    let tableFilter = data.filter(item => {
        let result = true;
        for (let key in item) {
            let val = item[key];
            if (typeof val === 'string') {
                val = item[key].toLowerCase();
                if ((datafilter[key]))
                    result = result && val.indexOf((datafilter[key]).toLowerCase()) !== -1;
            }
            else if (typeof val === "number") {
                if (key === "rating") {
                    if ((!isNaN(datafilter.minR) && val < datafilter.minR) || (!isNaN(datafilter.maxR) && val > datafilter.maxR)) {
                        console.log("year is", val)
                        result = false;
                    }

                }
                if (key === "tourists") {
                    if ((!isNaN(datafilter.minT) && val < datafilter.minT) || (!isNaN(datafilter.maxT) && val > datafilter.maxT)) {
                        console.log("tourists is", val)
                        result = false;
                    }

                }
                else if ((key !== "tourists" || key !== "rating") && key in datafilter && !isNaN(datafilter[key])) {
                    result &&= val === parseFloat(datafilter[key]);
                }
            }
        }
        return result;
    });
    TMP_TABLE = tableFilter;
    createTable(tableFilter, idTable);
}



function handleFilter() {
    let dataForm = document.getElementById("filterForm");
    filterTable(data, "list", dataForm);
}

// формирование полей элемента списка с заданным текстом и значением 
let createOption = (str, val) => {
    let item = document.createElement('option');
    item.text = str; item.value = val;
    return item;
}
// формирование полей со списком из заголовков таблицы 
// параметры – массив из заголовков таблицы и элемент select 7 8 
let setSortSelect = (head, sortSelect) => {
    if (!isSortPrint) {
        // создаем OPTION Нет и добавляем ее в SELECT
        sortSelect.append(createOption('Нет', 0));
        // перебираем все ключи переданного элемента массива данных  

        for (let i in head) {
            // создаем OPTION из очередного ключа и добавляем в SELECT        
            // значение атрибута VAL увеличиваем на 1, так как значение 0 имеет опция Нет         
            sortSelect.append(createOption(head[i], Number(i) + 1));
            isSortPrint = true;
        }
    }
    console.log(sortSelect.length)
}
//  формируем поля со списком для многоуровневой сортировки 
let setSortSelects = (data, dataForm) => {
    let head = Object.keys(data[0]);
    let allSelect = dataForm.getElementsByTagName('select');
    let isFirstSelect = true; // Флаг для определения, что это первый select
    for (let j = 0; j < allSelect.length; j++) {
        if (isFirstSelect) {
            setSortSelect(head, allSelect[j]);
            isFirstSelect = false;
        } else {
            setSortSelect(head.slice(1), allSelect[j]); // Исключаем первый элемент для последующих select
        }
    }

}



let disableNextSelects = (curSelect) => {
    let nextSelect = curSelect.nextElementSibling; // Получаем следующий элемент
    while (nextSelect && nextSelect.tagName === 'SELECT') {
        console.log("es")
        nextSelect.disabled = true; // Делаем его недоступным
        nextSelect = nextSelect.nextElementSibling; // Переходим к следующему элементу
    }
}

let changeNextSelect = (nextSelectId, curSelect) => {
    let nextSelect = document.getElementById(nextSelectId);
    nextSelect.disabled = false;

    // Очищаем текущие опции в следующем select
    nextSelect.innerHTML = "";

    // Копируем опции из текущего select в следующий select
    for (let option of curSelect.options) {
        nextSelect.add(new Option(option.text, option.value));
    }

    // Получаем индекс выбранной опции
    let selectedIndex = curSelect.selectedIndex;

    // Удаляем выбранную опцию из следующего select, если текущая опция не "Нет"
    if (selectedIndex != 0) {
        nextSelect.remove(selectedIndex);
    } else {
        nextSelect.disabled = true;
        disableNextSelects(curSelect); // Делаем все следующие поля недоступными
    }
}




let createSortArr = (data) => {
    let sortArr = [];
    let sortSelects = document.getElementsByTagName('select');
    for (let i = 0; i < sortSelects.length; i++) {
        let keySort = sortSelects[i].value;
        if (keySort == 0) {
            break;
        }
        let desc = document.getElementById(sortSelects[i].id + 'Desc').checked; // Получаем значение флажка "по убыванию"
        sortArr.push({ column: keySort - 1, order: desc }); // Добавляем значение флажка в массив
    }
    return sortArr;
};


let sortTable = (idTable, data) => {
    let sortArr = createSortArr(data);
    if (sortArr.length === 0) { return false; }

    let table = document.getElementById(idTable);
    let rowData = Array.from(table.rows);
    rowData.shift();

    rowData.sort((first, second) => {
        for (let i = 0; i < sortArr.length; i++) {
            let key = sortArr[i].column;
            let firstValue = isNaN(first.cells[key].textContent) ? first.cells[key].textContent : Number(first.cells[key].textContent);
            let secondValue = isNaN(second.cells[key].textContent) ? second.cells[key].textContent : Number(second.cells[key].textContent);
            if (sortArr[i].order && key) {
                if (firstValue > secondValue) {
                    return -1;
                } else if (firstValue < secondValue) {
                    return 1;
                }
            } else {
                if (firstValue > secondValue) {
                    return 1;
                } else if (firstValue < secondValue) {
                    return -1;
                }
            }
        }
        return 0;
    });

    table.innerHTML = table.rows[0].outerHTML;
    rowData.forEach(item => {
        table.append(item);
    });
}



document.addEventListener('DOMContentLoaded', function () {
    // Получаем форму с id "sort" и данные, которые вы хотите использовать для создания полей выбора
    let dataForm = document.getElementById('sort');

    // Вызываем функцию setSortSelects для создания полей выбора сортировки
    setSortSelects(data, dataForm);
});

document.addEventListener('DOMContentLoaded', function () {
    let dataForm = document.getElementById('sort');

    setSortSelects(data, dataForm);

    // Получаем первое поле сортировки
    let fieldsFirstSelect = document.getElementById('fieldsFirst');
    let fieldsSecondSelect = document.getElementById('fieldsSecond');
    let fieldsThirdSelect = document.getElementById('fieldsThird');


    // Добавляем обработчик события изменения для первого поля сортировки
    fieldsFirstSelect.addEventListener('change', function () {
        // Получаем ID следующего поля сортировки
        let nextSelectId = 'fieldsSecond';

        // Вызываем функцию changeNextSelect, передавая ID следующего поля и текущий элемент SELECT
        changeNextSelect(nextSelectId, this);
        fieldsThirdSelect.disabled = true;
    });

    fieldsSecondSelect.addEventListener('change', function () {
        // Получаем ID следующего поля сортировки
        let nextSelectId = 'fieldsThird';

        // Вызываем функцию changeNextSelect, передавая ID следующего поля и текущий элемент SELECT
        changeNextSelect(nextSelectId, this);
    });

    fieldsThirdSelect.addEventListener('change', function () {
        // Получаем ID следующего поля сортировки
        let nextSelectId = 'secondThird';

        // Вызываем функцию changeNextSelect, передавая ID следующего поля и текущий элемент SELECT
        changeNextSelect(nextSelectId, this);
    });



});

document.addEventListener('DOMContentLoaded', function () {
    let dataForm = document.getElementById('sort');
    setSortSelects(data, dataForm);

    // Получаем кнопку "Сортировать"
    let sortButton = document.querySelector('input[type="button"][value="Сортировать"]');

    // Добавляем обработчик события клика на кнопку "Сортировать"
    sortButton.addEventListener('click', function () {
        // Вызываем функцию sortTable(), передавая ID таблицы и данные из формы с настройками сортировки
        //createTable(data, 'list')
        sortTable("list", data);
    });
});


document.getElementById('restart').addEventListener('click', function () {
    // Вызываем функцию sortTable(), передавая ID таблицы и данные из формы с настройками сортировки
    createTable(data, 'list')
});