const debounce = (callback, wait = 2000) => {

    let timeout

    const debouncedFunction = (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => callback(...args), wait)

    }

    debouncedFunction.cancel = () => {
        clearTimeout(timeout)

    }

    return debouncedFunction

}

export default debounce