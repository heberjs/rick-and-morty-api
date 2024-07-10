function buildErrorClass(name) {

    return class extends Error {
        constructor(message) {
            super(message)

            this.name = name
        }

        static get name() {
            return name
        }
    }
}

const SystemError = buildErrorClass('SystemError')
const ClientError = buildErrorClass('ClientError')
const ServerError = buildErrorClass('ServerError')

const errors = {
    SystemError,
    ClientError,
    ServerError,
}

export {
    SystemError, ClientError, ServerError
}

export default errors