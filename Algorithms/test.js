const secret = () => {
    var private = 'secret';
    return () => {
        return private;
    }
}
var getPrivate = secret();
console.log(getPrivate());