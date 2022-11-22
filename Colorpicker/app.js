




let pickcolor = () => {
    let form = document.getElementById('myform');
    let color1 = document.getElementById('color1');
    let color2 = document.getElementById('color2');
    let hex = document.getElementById('hex');

    let { r, g, b, mycolor } = form.elements;

    r = parseInt(r.value);
    g = parseInt(g.value);
    b = parseInt(b.value);

    mycolor.value === '1' ? color1.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')' : color2.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'


    hex.innerHTML = `HEX:${rgbToHex(r,g,b)}`
}


const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

