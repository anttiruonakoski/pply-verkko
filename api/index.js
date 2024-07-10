const fetch = require('node-fetch')

module.exports = (req, res) => {
    const html = (
        await(await fetch('ists.oulu.fi/pipermail/pply' + req.url)).text()
            .replace(
                '</head>',
                '<link media="all" href="/custom.css" rel="stylesheet" /></head>'
            )
        )
      // 1 year
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=31536000')

    res.send(html)
    res.end()
}