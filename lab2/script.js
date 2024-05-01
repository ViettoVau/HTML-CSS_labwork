function showInputs() {
  let typeRadios = document.getElementsByName('type');
  let type;
  for (let i = 0; i < typeRadios.length; i++) {
    if (typeRadios[i].checked) {
      type = typeRadios[i].value;
      statusValidate(true, "input_buttom", "");
      break;
    } else {
      statusValidate(false, "input_buttom", "Нажимите 'Показать'");
    }
  }
  var inputs = document.getElementById('inputs');
  inputs.innerHTML = '';
  if (type == 'type1') {
    inputs.innerHTML = '<img src="./Трапеция 1.png"  width="550px"/><br><input type="number" id="base" placeholder="Основание" min="0.01" step="0.01"><input type="number" id="side1" placeholder="Боковая сторона 1" min="0.01" step="0.01"><input type="number" id="side2" placeholder="Боковая сторона 2" min="0.01" step="0.01"><input type="number" id="height" placeholder="Высота" min="0.01" step="0.01">';
  } else if (type == 'type2') {
    inputs.innerHTML = '<img src="./Трапеция 2.png"  width="550px"/><br><input type="number" id="base" placeholder="Основание" min="0.01" step="0.01"><input type="number" id="angle1" placeholder="Угол 1" min="0.01" step="0.01"><input type="number" id="angle2" placeholder="Угол 2" min="0.01" step="0.01"><input type="number" id="height" placeholder="Высота" min="0.01" step="0.01">';
  }

  let input_1 = document.getElementById("base");
  let input_2 = document.getElementById("height");
  let input_3 = document.getElementById("size1");
  let input_4 = document.getElementById("size2");
  let input_5 = document.getElementById("article1");
  let input_6 = document.getElementById("article2");

  [input_1, input_2, input_3, input_4, input_5, input_6].forEach((input) => {
    input.addEventListener("focus", function () {
      input.className = 'input';
      error_massage.innerText = ""
    });
  });


}

function statusValidate(val, input, textSpan) {
  if (val) {
    document.getElementById(input).classList.remove("error");
    document.getElementById("error_massage").innerText = "";
  }
  else {
    document.getElementById(input).classList.add("error");
    document.getElementById("error_massage").innerText = textSpan.toString();
    return;
  }
}

function calculate() {
  let typeRadios = document.getElementsByName('type');
  let type;
  for (let i = 0; i < typeRadios.length; i++) {
    if (typeRadios[i].checked) {
      type = typeRadios[i].value;
      statusValidate(true, "input_buttom", "");
      break;
    } else {
      statusValidate(false, "input_buttom", "Нажимите 'Показать'");
    }

  }

  let base = parseFloat(document.getElementById('base').value);
  let height = parseFloat(document.getElementById('height').value);
  let side1, side2, angle1, angle2, base2;

  if (isNaN(base)) {
    statusValidate(false, "base", "Поле пусто");
    return;
  } else {
    statusValidate(true, "base", "");
  }

  if (isNaN(height)) {
    statusValidate(false, "height", "Поле пусто");
    return;
  } else {
    statusValidate(true, "height", "");
  }

  if (base <= 0) {
    statusValidate(false, "base", "Основание должно быть больше нуля");
    return;
  } else {
    statusValidate(true, "base", "");
  }


  if (height <= 0) {
    statusValidate(false, "height", "Высота должна быть больше нуля");
    return;
  } else {
    statusValidate(true, "height", "");
  }

  if (type == 'type1') {
    side1 = parseFloat(document.getElementById('side1').value);
    side2 = parseFloat(document.getElementById('side2').value);

    if (isNaN(side1) || isNaN(side2)) {

      statusValidate(false, "side1", "Поле пусто");
      statusValidate(false, "side2", "Поле пусто");
      return;
    } else {
      statusValidate(true, "side1", "");
      statusValidate(true, "side2", "");
    }


    if (side1 <= 0 || side2 <= 0) {
      statusValidate(false, "side1", "Боковые стороны должны быть больше нуля");
      statusValidate(false, "side2", "Боковые стороны должны быть больше нуля");
      return;
    } else {
      statusValidate(true, "side1", "");
      statusValidate(true, "side2", "");
    }

    if (height > side1 || height > side2) {
      statusValidate(false, "height", "Высота не должна быть больше боковых сторон");
      return;
    } else {
      statusValidate(true, "height", "");
    }
    angle1 = Math.atan(height / side1);
    angle2 = Math.atan(height / side2);
  } else if (type == 'type2') {
    angle1 = parseFloat(document.getElementById('angle1').value);
    angle2 = parseFloat(document.getElementById('angle2').value);

    if (isNaN(angle1) || isNaN(angle2)) {
      statusValidate(false, "angle1", "Поле пусто");
      statusValidate(false, "angle2", "Поле пусто");
      return;
    } else {
      statusValidate(true, "angle1", "");
      statusValidate(true, "angle2", "");
    }

    if (angle1 <= 0 || angle2 <= 0 || angle1 > 90 || angle2 > 90) {
      statusValidate(false, "angle1", "Углы должны быть числами от 1 до 90");
      statusValidate(false, "angle2", "Углы должны быть числами от 1 до 90");
      return;
    } else {
      statusValidate(true, "angle1", "");
      statusValidate(true, "angle2", "");
    }

    angle1 = angle1 * Math.PI / 180;
    angle2 = angle2 * Math.PI / 180;
    side1 = height / Math.tan(angle1);
    side2 = height / Math.tan(angle2);
  }


  base2 = base - (Math.sqrt(side1 * side1 - height * height) + Math.sqrt(side2 * side2 - height * height));

  let characteristics = [...document.getElementById('characteristics').selectedOptions].map(option => option.value);
  let result = '';
  
  if (characteristics.length == 0) {
    statusValidate(false, "characteristics", "Выбирите, что будем вычислять");
    return;
  }
  if (characteristics.includes('perimeter')) {
    let perimeter = base + base2 + side1 + side2;
    if (perimeter <= 0) {
      document.getElementById("error_massage").innerText = "Входные данные не корректны. Такой трапеции не существует";
      return;
    }
    result += 'Периметр: ' + perimeter.toFixed(2) + '<br>'
  }

  if (characteristics.includes('diagonals')) {
    let diagonal = Math.sqrt(base * base + side1 * side1 - 2 * side1 * base * Math.cos(Math.abs(angle1)));

    if (angle1 == Math.PI / 2) {
      diagonal = Math.sqrt(base * base + side2 * side2 - 2 * side2 * base * Math.cos(Math.abs(angle2)));
    }

    if (angle1 == Math.PI / 2 && angle2 == Math.PI / 2) {
      diagonal = Math.sqrt(base * base + side2 * side2);
    }
    if (diagonal <= 0) {
      document.getElementById("error_massage").innerText = "Входные данные не корректны. Такой трапеции не существует";
      return;
    }
    result += 'Диагональ: ' + diagonal.toFixed(2) + '<br>';
  }

  if (characteristics.includes('area')) {
    let area = (base + base2) / 2 * height;
    if (area <= 0) {
      document.getElementById("error_massage").innerText = "Входные данные не корректны. Такой трапеции не существует";
      return;
    }
    result += 'Площадь: ' + area.toFixed(2);
  }

  document.getElementById('result').innerHTML = result;
}





function clearInputs() {
  document.getElementById('inputs').innerHTML = '';
  document.getElementById('result').innerHTML = '';
  document.getElementById("error_massage").innerText = "";
  document.getElementById("characteristics").classList.remove("error");
}