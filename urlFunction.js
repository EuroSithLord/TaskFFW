parseUrl = (url) => {
    let regexMatch = url.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return regexMatch && {
        href: regexMatch[0],
        protocol: regexMatch[1],
        host: regexMatch[2],
        hostname: regexMatch[3],
        port: regexMatch[4],
        pathname: regexMatch[5],
        search: regexMatch[6],
        hash: regexMatch[7]
    }
}

let parsed = parseUrl('http://ffwagency.com/do/any.php?a=1#foo');
console.log(parsed.hash);
console.log(parsed.hostname);
console.log(parsed.pathname);
console.log(parsed.href);
