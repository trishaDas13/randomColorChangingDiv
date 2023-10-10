let container = document.querySelector('.container');

//todo --------- Create Random Color ---------
let randomColors = function(){
    let string = "#";
    let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    for(let i = 0; i < 6; i++){
        string += arr[Math.floor(Math.random() * arr.length)];
    }
    return string;
}

//todo --------- Create Element ---------
for(let i = 0; i < 30; i++){
    let div = document.createElement('div');
    div.classList.add('colorBox');
    container.appendChild(div);
    let bgColor = randomColors();
    div.style.backgroundColor = bgColor;
    div.innerText = bgColor;
}
