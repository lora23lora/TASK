let n = 6
let star = ''


for (let i = n; i >= 0; i--) {

    for (let j = 0; j < n; j++) {
        if (j > i)

            star += ' *'

        else {

            star += ' '
        }


    }
    star += '\n'

}
console.log(star);