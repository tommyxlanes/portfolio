export default (src) => {
    const num = Math.floor((Math.random() * `${src}`) + 1)
    if( num < 3) {
        return 1
    } else {
        return 0
    }
}