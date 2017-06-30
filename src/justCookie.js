;(function () {
  var justCookie, object
  justCookie = function (name, value, ttl, path, domain, secure) {
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

  object = typeof exports !== 'undefined' ? exports : this
  object.cookie = justCookie
  module.exports = justCookie
}())
