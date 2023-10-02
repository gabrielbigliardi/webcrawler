function normalizeURL(urlStr) {
    const urlObj = new URL(urlStr)
    let fullPath = `${urlObj.host}${urlObj.pathname}`
    if (fullPath.length > 0 && fullPath.slice(-1) === '/'){
        fullPath = fullPath.slice(0, -1)
    }
    console.log(fullPath)
    return fullPath
}

normalizeURL('https://blog.boot.dev/path/')

module.exports = {
    normalizeURL
}