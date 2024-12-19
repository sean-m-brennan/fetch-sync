export function fetchSync(url: string): string {
    const request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send(null)
    if (request.status !== 200)
        throw new Error(`fetchSync failed with ${request.status}: ${request.statusText}`)
    return request.responseText
}

export function fetchJsonSync(url: string): any {
    const response = fetchSync(url)
    return JSON.parse(response)
}
