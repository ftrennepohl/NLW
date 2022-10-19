document.addEventListener("DOMContentLoaded", function() {  
    const bt1 = document.getElementById("bt1");
    bt1.addEventListener("click", olaMundo)

    const bt2 = document.getElementById("bt2");
    bt2.addEventListener("click", mudarCor)

    const bt3 = document.getElementById("bt3");
    bt3.addEventListener("click", randomColor)

    const bt4 = document.getElementById("bt4")
    bt4.addEventListener("click", showButton)

    const bt5 = document.getElementById("bt5")
    bt5.addEventListener("mouseover", hideSelf)
    bt5.addEventListener("click", shuffleEverything)
    // bt5.addEventListener("mouseleave", showSelf)

    const bt6 = document.getElementById("bt6")
    bt6.addEventListener("click", sequencialColors)

    function olaMundo() {
        window.alert("Olá mundo!")
        document.getElementById("texto").innerHTML = "Olá Mundo!";
    }

    function mudarCor() {
        let cor = window.prompt('Digite uma cor: ')
        document.getElementById("bt2").style.backgroundColor = cor
        document.getElementById("texto").innerHTML = 
        `<p>A cor escolhida foi <strong>${cor}</strong>!</p>`
    }
    function randomColor(){
        value = Math.floor(Math.random()*999999)
        let color = "#" + value.toString()
        document.getElementById("bt3").style.backgroundColor = color
    }

    function showButton(){
        document.getElementById("bt5").style.display = "initial"
        document.getElementById("bt5").style.opacity = 100
    }

    function hideSelf(){
        document.getElementById("bt5").style.opacity = 0
    }

    // function showSelf(){
    //     document.getElementById("bt5").style.visibility = "visible"
    // }
    var posCores = 0 
    function sequencialColors(){
        let colors = ["cyan", "red", "purple", "yellow", "gray", "blue"]
        posCores += 1
        if (posCores > 5){
            posCores = 0
        }
        document.getElementById("bt6").style.backgroundColor = colors[posCores]
    }

    function shuffleEverything(){   
        console.log("FDSAPKOFDAKOP");
        let init = 0
        let numbers = [0, 1, 2, 3, 4, 5];
        let shuffled = numbers.sort(() => Math.random() - 0.5);
        console.log(shuffled)
        const x = document.getElementById("grandona").querySelectorAll(".inside");
        let inners = [x[0].innerHTML, x[1].innerHTML,x[2].innerHTML,x[3].innerHTML,x[4].innerHTML,x[5].innerHTML]
        console.log(inners)
        for (i=0;i<6;i++){
            string = init.toString() + "%"
            x[shuffled[i]].style.left = string
            x[shuffled[i]].innerHTML = inners[i]
            init += 15
        }
    }
})

