function round2Fixed(value) {
    value = +value;

    if (isNaN(value))
    return NaN;

    // Shift
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + 2) : 2)));

    // Shift back
    value = value.toString().split('e');
    return (+(value[0] + 'e' + (value[1] ? (+value[1] - 2) : -2))).toFixed(2);
}


function formatDateString() {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    let day = d.getDate();

    monthString = month < 10 ? "0"+month : month;
    let dateString = year + "-" + monthString + "-" + day;
    return dateString;
}

function encodeNumber(num) {
    return +(num.replace(",", "."));
}

function decodeNumber(num) {
    return +(num.replace(".", ","));
}
