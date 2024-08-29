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
const NotFoundError = buildErrorClass('NotFoundError')

const errors = {
    SystemError,
    ClientError,
    ServerError,
    NotFoundError
}

export {
    SystemError, ClientError, ServerError, NotFoundError
}

export default errors