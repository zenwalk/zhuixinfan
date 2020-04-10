var Crawler = require('crawler')

const log = function (d) {
  process.stdout.write(d + '\n')
}

const build = () => {
  var c = new Crawler({
    maxConnections: 10,
    callback: function (error, res, done) {
      if (error) {
        log(error)
      } else {
        var $ = res.$
        var el = $('#emule_url')
        if (el && el.length > 0) {
          // var title = $('#pdtname').text()
          log(el.text())
        } else {
          var aList = $('td.td2 > a')
          aList.each((idx, a) => {
            var url = 'http://www.zhuixinfan.com/' + $(a).attr('href')
            c.queue(url)
          })
        }
      }
      done()
    },
  })
  return c
}

const fetch = pid => {
  const c = build()
  c.queue(`http://www.zhuixinfan.com/main.php?mod=viewtvplay&pid=${pid}&extra=`)
}

module.exports = {fetch}
