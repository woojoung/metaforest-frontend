
'use strict'



const getParam = function (name, defaultValue) {
    const queryString = window.location.search.substring(1)
    if (queryString === '') {
        return defaultValue
    }

    const pairs = queryString.split('&')
    let index = -1
    for (let i = 0; i < pairs.length; ++i) {
        index = pairs[i].indexOf('=')
        if (index === -1) {
            continue
        }

        const pair = []
        pair.push(pairs[i].substring(0, index))
        pair.push(pairs[i].substring(index + 1))

        if (name === decodeURIComponent(pair[0])) {
            return decodeURIComponent(pair[1])
        }
    }

    return defaultValue
}


const Time = function (d) {
    const date = (typeof d == 'undefined') ? new Date() : new Date(d)

    function _toDateTimeStr() {
        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const dayOfMonth = date.getDate().toString().padStart(2, '0')
        const hour = date.getHours().toString().padStart(2, '0')
        const minute = date.getMinutes().toString().padStart(2, '0')
        const second = date.getSeconds().toString().padStart(2, '0')

        return [year, month, dayOfMonth].join('-') + ' ' + [hour, minute, second].join(':')
    }

    function _toDateStr() {
        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const dayOfMonth = date.getDate().toString().padStart(2, '0')

        return [year, month, dayOfMonth].join('-')
    }

    function _toUTCStr() {
        return date.toUTCString()
    }

    return {
        toDateTimeStr: function () {
            return _toDateTimeStr()
        },
        toDateStr: function () {
            return _toDateStr()
        },
        toUTCStr: function () {
            return _toUTCStr()
        }
    }
}

const storageGet = function (key, defaultValue) {
    const value = localStorage.getItem(key)
    return value === null ? defaultValue : value
}

const storageSet = function (key, value) {
    localStorage.setItem(key, value)
}

const storageRemove = function (key) {
    localStorage.removeItem(key)
}

const storageClear = function () {
    localStorage.clear()
}

const emailCheck = function (email) {
    let regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    return (email !== '' && typeof email !== 'undefined' && regex.test(email));
}

const undefinedToString = function (undefinedOrString) {
    return (typeof undefinedOrString === 'undefined' ? '' : undefinedOrString)
}