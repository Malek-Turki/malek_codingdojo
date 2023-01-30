function remove(id) {
    document.getElementById(id).remove();
}


function setName() {
    document.querySelector(".value").innerText = (() * 9/5) + 32;
    return setName;
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * temp - 32);
}

function change(element) {
    for(var i=1; i<9; i++) {
    
        if(element.value == "°C") {
            document.querySelector("#temp" + i).innerText = f2c(parseInt(document.querySelector("#temp" + i).innerText));
        } else {
            document.querySelector("#temp" + i).innerText = c2f(parseInt(document.querySelector("#temp" + i).innerText));
        }
    }
}



