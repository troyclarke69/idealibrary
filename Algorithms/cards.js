function solution(A, B) {

    var cards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    // let a_char = ''
    // let b_char  = ''
    let a_wins = 0

    for (var i = 0; i < 6; i++) {

        let a_char = A.substring(i,i+1)
        let b_char = B.substring(i,i+1)
        console.log('a: ' + a_char + " b: " + b_char)

        let a_idx = cards.indexOf(a_char)
        let b_idx = cards.indexOf(b_char)
        console.log(a_idx)
        console.log(b_idx)

        if (a_idx > b_idx) {
            a_wins++
        }

    }

    return a_wins
}


console.log(solution('23A84Q', 'K2Q25J'))