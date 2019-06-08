export function yyyymmdd() {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    return y +'-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
}