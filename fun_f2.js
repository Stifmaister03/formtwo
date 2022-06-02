function tercs() {
    var mensaje="Sin igualdad"
    var nombre = document.getElementById("nomb").value;
    var x1 = Math.trunc( Math.random()*20 ) + 1;
    var x2 = Math.trunc( Math.random()*20 ) + 1;
    var x3 = Math.trunc( Math.random()*20 ) + 1;

    switch (x1) {
        case 1:
        document.getElementById("box1").innerHTML="<img src='dib/f01.png'>";
        break;
        case 2:
        document.getElementById("box1").innerHTML="<img src='dib/f02.png'>";
        break;
        case 3:
        document.getElementById("box1").innerHTML="<img src='dib/f03.png'>";
        break;
        case 4:
        document.getElementById("box1").innerHTML="<img src='dib/f04.png'>";
        break;
        case 5:
        document.getElementById("box1").innerHTML="<img src='dib/f05.png'>";
        break;
        case 6:
        document.getElementById("box1").innerHTML="<img src='dib/f06.jpg'>";
        break;
        case 7:
        document.getElementById("box1").innerHTML="<img src='dib/f07.jpg'>";
        break;
        case 8:
        document.getElementById("box1").innerHTML="<img src='dib/f08.jpg'>";
        break;
        case 9:
        document.getElementById("box1").innerHTML="<img src='dib/f09.jpg'>";
        break;
        case 10:
        document.getElementById("box1").innerHTML="<img src='dib/f10.jpg'>";
        break;
//Repetir hasta cumplir para box1 con el x1, la cantidad de fotos correspondientes.-
    }

    switch (x2) {
        case 1:
        document.getElementById("box2").innerHTML="<img src='dib/f01.png'>";
        break;
        case 2:
        document.getElementById("box2").innerHTML="<img src='dib/f02.png'>";
        break;
        case 3:
        document.getElementById("box2").innerHTML="<img src='dib/f03.png'>";
        break;
        case 4:
        document.getElementById("box2").innerHTML="<img src='dib/f04.png'>";
        break;
        case 5:
        document.getElementById("box2").innerHTML="<img src='dib/f05.png'>";
        break;
        case 6:
        document.getElementById("box2").innerHTML="<img src='dib/f06.jpg'>";
        break;
        case 7:
        document.getElementById("box2").innerHTML="<img src='dib/f07.jpg'>";
        break;
        case 8:
        document.getElementById("box2").innerHTML="<img src='dib/f08.jpg'>";
        break;
        case 9:
        document.getElementById("box2").innerHTML="<img src='dib/f09.jpg'>";
        break;
        case 10:
        document.getElementById("box2").innerHTML="<img src='dib/f10.jpg'>";
        break;
//Repetir hasta cumplir para box2 con el x2, la cantidad de fotos correspondientes.-
        }

        switch (x3) {
            case 1:
            document.getElementById("box3").innerHTML="<img src='dib/f01.png'>";
            break;
            case 2:
            document.getElementById("box3").innerHTML="<img src='dib/f02.png'>";
            break;
            case 3:
            document.getElementById("box3").innerHTML="<img src='dib/f03.png'>";
            break;
            case 4:
            document.getElementById("box3").innerHTML="<img src='dib/f04.png'>";
            break;
            case 5:
            document.getElementById("box3").innerHTML="<img src='dib/f05.png'>";
            break;
            case 6:
            document.getElementById("box3").innerHTML="<img src='dib/f06.jpg'>";
            break;
            case 7:
            document.getElementById("box3").innerHTML="<img src='dib/f07.jpg'>";
            break;
            case 8:
            document.getElementById("box3").innerHTML="<img src='dib/f08.jpg'>";
            break;
            case 9:
            document.getElementById("box3").innerHTML="<img src='dib/f09.jpg'>";
            break;
            case 10:
            document.getElementById("box3").innerHTML="<img src='dib/f10.jpg'>";
            break;
    //Repeti hasta cumplir para box3 con el x3, la cantidad de fotos correspondientes.-
        }

    if  ((x1==x2)&&(x1==x3))
        mensaje="Tercias!!";
    else if  ((x1==x2)||(x1==x3)||(x3==x2))
             mensaje="Pares!";
         else
             mensaje="Sin igualdad";

document.getElementById("Sal01").innerHTML="Hola "+ nombre + " tu resultado es: ";
document.getElementById("resu1").innerHTML= mensaje;
}