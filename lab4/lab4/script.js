let width = 664;
let height = 604;
let centerX = width / 2;
let centerY = height / 2;
let svg = d3.select("span")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

let duration, rotation, rotationSpeed, frequency;

function startAnimation() {
    updateParameters();
    clear();
    let sinePath = drawPath();
    let ladybag = drawLadybug();
    animatePict(ladybag, sinePath);
}

function updateParameters() {
    duration = 1000000 / d3.select("#speed").node().value;
    rotation = d3.select("#rotation").node().checked;
    rotationSpeed = d3.select("#rotationSpeed").node().value;
    frequency = d3.select("#frequency").node().value;
    frequency = 1 / frequency * 100;
}

function drawLadybug() {
    svg.select("#ladybug").remove();

    let ladybug = svg.append("g").attr("id", "ladybug");

    // Тело божьей коровки
    ladybug.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 40)
        .style("fill", "red")
        .style("stroke", "black")
        .style("stroke-width", 3);

    // Черная полоска посередине тела
    ladybug.append("rect")
        .attr("x", -4)
        .attr("y", -40)
        .attr("width", 6)
        .attr("height", 80)
        .style("fill", "black");

    // Голова божьей коровки
    ladybug.append("path")
        .attr("d", "M" + (-20) + " " + (-35) + " A " + (20) + " " + (20) + " 0 0 1 " + (20) + " " + (-35))
        .style("fill", "black");

    // Глаза божьей коровки
    ladybug.append("circle").attr("cx", -7).attr("cy", -50).attr("r", 5).style("fill", "white");
    ladybug.append("circle").attr("cx", 7).attr("cy", -50).attr("r", 5).style("fill", "white");

    // Пятна на теле божьей коровки
    let spots = [{ x: -15, y: -18 }, { x: -27, y: 0 }, { x: -15, y: 18 }, { x: 15, y: -18 }, { x: 27, y: 0 }, { x: 15, y: 18 }];
    spots.forEach(function (spot) {
        ladybug.append("circle")
            .attr("cx", spot.x)
            .attr("cy", spot.y)
            .attr("r", 9)
            .style("fill", "black");
    });

    // Усики божьей коровки
    ladybug.append("line").attr("x1", -10).attr("y1", -40).attr("x2", -20).attr("y2", -60).style("stroke", "black").style("stroke-width", 2);
    ladybug.append("line").attr("x1", 10).attr("y1", -40).attr("x2", 20).attr("y2", -60).style("stroke", "black").style("stroke-width", 2);

    return ladybug
}

function createPathSin() {
    let data = [];
    for (let y = -Math.PI*100; y <= Math.PI*100; y += 0.1) {
        data.push(
            {
                x: centerX + 100 * Math.sin(y / frequency),
                y: centerY - y
            }
        );
    }
    return data
}

let drawPath = () => {
    const dataPoints = createPathSin();
    const line = d3.line()
        .x((d) => d.x)
        .y((d) => d.y);

    const path = svg.append('path')
        .attr('d', line(dataPoints))
        .attr('stroke', 'black')
        .attr('fill', 'none');

    return path;
}

function animatePict(pict, path) {
    pict.transition()
        .ease(d3.easeLinear)
        .duration(duration)
        .attrTween("transform", translateAlong(path.node()))
}

function translateAlong(path) {
    const length = path.getTotalLength();
    return function () {
        return function (t) {
            const { x, y } = path.getPointAtLength(t * length);
            let rotate = 0;
                if (rotation) {
                    switch (rotationSpeed) {
                        case "slow":                                                                                                                
                            rotate = t * 200;
                            break;
                        case "medium":
                            rotate = t * 500;
                            break;
                        case "fast":
                            rotate = t * 800;
                            break;
                    }
                }
            return `translate(${x},${y}) rotate(${rotate},0,0)` ;
        }
    }
}

function clear() {
    d3.select("svg").html(null)
}

function toggleRotationSpeed() {
    let rotationCheckbox = document.getElementById("rotation");
    let rotationSpeedSelect = document.getElementById("rotationSpeed");

    if (rotationCheckbox.checked) {
        rotationSpeedSelect.disabled = false;
    } else {
        rotationSpeedSelect.disabled = true;
    }
}
toggleRotationSpeed();

document.getElementById("startButton").addEventListener("click", startAnimation);
document.getElementById("clear").addEventListener("click", clear);
