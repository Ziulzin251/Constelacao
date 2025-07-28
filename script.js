let x = 1

let prox = document.getElementById("prox")

let imgPrin = document.querySelector("[--prin]")
let imgSec = document.querySelector("[--sec]")

let body = document.body

prox.onclick = e => {
    if (x < 6) {
        x++
    } else {
        x = 1
    }

    img(x)
}

function img(number) {
    switch (number) {
        case 1:
            imgPrin.style.animation = "none"
            imgPrin.style.opacity = '0'
            imgSec.style.opacity = '0'
            body.style.backgroundSize = '33.5%'

            setTimeout(() => {
                imgPrin.src = "imgs/Terra.png"
                imgPrin.style.opacity = '1'

                imgSec.src = "imgs/Lua.png"
                imgSec.style.opacity = '1'
                imgSec.style.width = "20%"

            }, 500)
            break
        case 2:
            imgPrin.style.opacity = '0'
            imgSec.style.opacity = '0'

            body.style.backgroundSize = "30%"

            setTimeout(() => {
                imgPrin.src = "imgs/Jupiter.png"
                imgPrin.style.opacity = '1'

                imgSec.src = "imgs/Terra.png"
                imgSec.style.opacity = '1'
                imgSec.style.width = "15%"

            }, 500)

            break
        case 3:
            imgPrin.style.opacity = '0'
            imgSec.style.opacity = '0'
            body.style.backgroundSize = "25%"

            setTimeout(() => {
                imgPrin.src = "imgs/Sol.png"
                imgPrin.style.opacity = '1'

                imgSec.src = "imgs/Jupiter.png"
                imgSec.style.opacity = '1'
                imgSec.style.width = "12%"

            }, 300)
            break
        case 4:
            imgPrin.style.opacity = '0'
            imgSec.style.opacity = '0'
            body.style.backgroundSize = "15%"

            setTimeout(() => {
                imgPrin.src = "imgs/Galaxia.png"
                imgPrin.style.opacity = '1'

                imgSec.src = "imgs/sol.png"
                imgSec.style.opacity = '1'
                imgSec.style.width = "10%"

            }, 300)
            break
        case 5:
            imgPrin.style.opacity = '0'
            imgSec.style.opacity = '0'
            body.style.backgroundSize = "10%"

            setTimeout(() => {
                imgPrin.src = "imgs/BlackWhole.png"
                imgPrin.style.opacity = '1'

                imgSec.src = "imgs/Galaxia.png"
                imgSec.style.opacity = '1'
                imgSec.style.width = "8%"

            }, 300)
            break
        case 6:
            imgPrin.style.opacity = '0'
            imgSec.style.opacity = '0'
            body.style.backgroundSize = "8%"

            setTimeout(() => {
                imgPrin.src = "imgs/Amor.png"
                imgPrin.style.opacity = '1'

                imgSec.src = "imgs/BlackWhole.png"
                imgSec.style.opacity = '1'
                imgSec.style.width = "8%"

            }, 300)

            imgPrin.style.animation = "heart 1s infinite alternate ease"
            break
    }
}

img()