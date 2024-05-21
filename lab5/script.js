const marginX = 50;
const marginY = 50;
const height = 500;
const width = 1000;
let svg = d3.select("svg")
    .attr("height", height)
    .attr("width", width);

d3.select("#showTable")
    .on('click', function () {
        let buttonValue = d3.select(this);

        if (buttonValue.property("value") === "Показать таблицу") {
            buttonValue.attr("value", "Скрыть таблицу");

            // создание таблицы
            let table = d3.select("div.table").select("table");

            // создание шапки таблицы
            let head = table.select("thead")
                .selectAll("th")
                .data(Object.keys(data[0]))
                .enter()
                .append("th")
                .text(d => d);

            // создание строк таблицы (столько, сколько элементов в массиве data)
            let rows = table.select("tbody")
                .selectAll("tr")
                .data(data)
                .enter()
                .append('tr')
                .style("display", "");

            // создание ячеек каждой строки на основе каждого элемента массива data
            let cells = rows.selectAll("td")
                .data(d => Object.values(d))
                .enter()
                .append("td")
                .text(d => d);

        } else {
            buttonValue.attr("value", "Показать таблицу");

            // удалить все строки таблицы
            d3.select("div.table").select("table").select("tbody").selectAll("tr").remove();
            d3.select("div.table").select("table").select("thead").selectAll("th").remove();
        }
    });

function createArrGraph(key, oyVal) {
    
    groupObj = d3.group(data, d => d[key]);
    let arrGraph = [];
    for (let entry of groupObj) {
        let minMax = d3.extent(entry[1].map(d => d[oyVal]));
        arrGraph.push({ labelX: entry[0], values: minMax });
    }
    return arrGraph;
}

function createAxis(arrGraph, isFirst, isSecond) {
    // в зависимости от выбранных пользователем данных по OY
    // находим интервал значений по оси OY
    let firstRange = d3.extent(arrGraph.map(d => d.values[0]));
    let secondRange = d3.extent(arrGraph.map(d => d.values[1]));
    let min = firstRange[0];
    let max = secondRange[1];
    // функция интерполяции значений на оси
    let scaleX = d3.scaleBand()
        .domain(arrGraph.map(d => d.labelX))
        .range([0, width - 2 * marginX]);

    let scaleY = d3.scaleLinear()
        .domain([min * 0.85, max * 1.1])
        .range([height - 2 * marginY, 0]);

    // создание осей
    let axisX = d3.axisBottom(scaleX); // горизонтальная
    let axisY = d3.axisLeft(scaleY); // вертикальная
    // отрисовка осей в SVG-элементе
    svg.append("g")
        .attr("transform", `translate(${marginX}, ${height - marginY})`)
        .call(axisX)
        .selectAll("text") // подписи на оси - наклонные
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", d => "rotate(-45)");

    svg.append("g")
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .call(axisY);

    return [scaleX, scaleY]
}

function drawGraph(form) {
    // тип графика
    const chartType = form.chartType.value;

    // значения по оси ОХ
    const keyX = form.ox.value;

    // значения по оси ОУ
    const oyVal = form.oy.value;
    const isMin = form.oyValue[0].checked;
    const isMax = form.oyValue[1].checked;
    // создаем массив для построения графика
    const arrGraph = createArrGraph(keyX, oyVal);

    svg.selectAll('*').remove();

    // создаем шкалы преобразования и выводим оси
    const [scX, scY] = createAxis(arrGraph, isMin, isMax);

    // рисуем графики
    if (chartType === 'dot') {
        if (isMin) {
            createDotChart(arrGraph, scX, scY, 1, "blue")
        }
        if (isMax) {
            createDotChart(arrGraph, scX, scY, 0, "red")
        }
    } else if (chartType === 'bar') {
        if (isMin) {
            createBarChart(arrGraph, scX, scY, 1, "blue")
        }
        if (isMax) {
            createBarChart(arrGraph, scX, scY, 0, "red")
        }
    }
}

function createDotChart(arrGraph, scaleX, scaleY, index, color) {
    const r = 4
    let ident = (index == 1) ? -r / 2 : r / 2;

    svg.selectAll(".dot")
        .data(arrGraph)
        .enter()
        .append("circle")
        .attr("r", r)
        .attr("cx", d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
        .attr("cy", d => scaleY(d.values[index]) + ident)
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .style("fill", color)
}

function createBarChart(arrGraph, scaleX, scaleY, index, color) {
    const r = 2
    let ident = (index == 1) ? -r / 2 : r / 2;

    svg.selectAll(".bar")
        .data(arrGraph)
        .enter()
        .append("rect")
        .attr("x", d => scaleX(d.labelX) + 7.5)
        .attr("y", d => scaleY(d.values[index]) + ident)
        .attr("width", scaleX.bandwidth() - 15)
        .attr("height", d => height - 2 * marginY - scaleY(d.values[index]))
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .style("fill", color)
}