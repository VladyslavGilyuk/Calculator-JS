const display = document.getElementById("display")
let buttons = Array.from(document.getElementsByClassName('button'));
 
buttons.map (button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case "AC" :
                display.innerText = "";
                break;
            case "←" :
                if (display.innerText) {
                display.innerText = display.innerText.slice(0, -1)
             } 
             break;
             case "=" :
                try {
                   if (display.innerText == "") {
                    display.innerText = "Empty!"
                    setTimeout (() => (display.innerText = ""), 1000)
                  } else {
                      display.innerText = eval(display.innerText);
                    }
                }
                catch {
                    display.innerText = "Error"
                    setTimeout (() => (display.innerText = ""), 1000)
                }
            break;
        default :
            display.innerText +=e.target.innerText
            }      
    });
})
