export function email(email) {
    // eslint-disable-next-line
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

export function mobile(mobile) {
    const reg = /^\d{10}$/;
    return reg.test(mobile);
}

export function password(password) {
    return password.length > 6;
}

export function match(str1, str2) {
    return str1.localeCompare(str2) === 0 ? true : false;
}

export function empty(str) {
    return str === '';
}