export function yyyymmdd(date) {
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    return y +'-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
}

export function HoraEmString(date) {
    let hora = date.getHours()
    let minuto = date.getMinutes()
    return (hora < 10 ? '0': '') + hora + ':' + (minuto < 10 ? '0' : '') + minuto
} 