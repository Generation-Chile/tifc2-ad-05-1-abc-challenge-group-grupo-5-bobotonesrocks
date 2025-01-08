
function aplicarColor(e){
    const colores = ["green", "blue", "red"];
    let color = colores[Math.floor(Math.random() * 3)];
    e.target.style.color = color;
}
