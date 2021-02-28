function rev(str) {
    let reversedStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str.substr(i, 1)
    }
    return (reversedStr)
}

console.log('result1', rev('abcdefg'));


// recursive -- Better? Is it less lines of code!! 
// but it's a little more complex !?
function reverse(str) {  
    if (str.length === 0) return ''     
    return str[str.length - 1] + 
        reverse(str.substr(0, str.length - 1))
}

console.log('result2', reverse('abcdefg'));