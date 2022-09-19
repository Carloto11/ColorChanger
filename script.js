let colors = ["red", "orange", "green", "purple", "yellow", "darkgreen", "aqua", "aquamarine", "black", "blue", "brown", "blueviolet", "darkblue"]

function Color (){
    const i = Math.floor(Math.random() * 5)
    document.body.style.backgroundColor = colors[i]
}