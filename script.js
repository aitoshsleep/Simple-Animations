// document.getElementById('text').innerHTML = 'GG'


let myMove = () => {
    let id = null;
    const elem = document.getElementById('animated')
    let pos = 0;

    clearInterval(id)
    id = setInterval(id);
    id = setInterval(frame, 9)

    function frame() {
        if (pos == 350) {
            clearInterval(id)
        } else {
            pos++;
            elem.style.top = pos + 'px'
            elem.style.left = pos + 'px'
        }
    }
}

