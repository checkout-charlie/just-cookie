;(function () {
  var object = typeof exports !== 'undefined' ? exports : this

  var cookie = function (name, value, ttl, path, domain, secure) {
    if (arguments.length > 1) {
      document.cookie = name + '=' + encodeURIComponent(value) +
                (ttl ? '; expires=' + new Date(+new Date() + (ttl * 1000)).toUTCString() : '') +
                (path ? '; path=' + path : '') +
                (domain ? '; domain=' + domain : '') +
                (secure ? '; secure' : '')
      return document.cookie
    }
    return decodeURIComponent((('; ' + document.cookie).split('; ' + name + '=')[1] || '').split(';')[0])
  }

  object = cookie
  module.exports = cookie
}())
