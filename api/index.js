const fetch = require('node-fetch')

module.exports = async (req, res) => {
    const html = (
        await (await fetch('http://lists.oulu.fi/pipermail/pply/' + req.url)).text()
        )
        .replace(
            '</HEAD>',
            `<meta name="viewport" content="width=device-width, initial-scale=1" />
            <link media="all" href="/custom.css" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet"></link>    
            </head >`
        )
    // 1 year
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=360')
    res.send(html)
    res.end()
}