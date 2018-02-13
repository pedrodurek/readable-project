import moment from 'moment'
export const formatDate = (timestamp = Date.now()) =>
    moment(timestamp).format('LLL')
export const required = (value) => (value ? undefined : 'Required')
export const minLength = (min) => (value) =>
    value && value.length < min ? `Must be at least ${min}` : undefined
export const minLength5 = minLength(5)
export const getNumPages = (items, perPage) =>
    Math.trunc(items / perPage) + (items % perPage ? 1 : 0)
export const getIndexesPage = (length, active) => {
    let first = (active - 1) * 5
    let last = active * 5
    last = last > length ? length : last
    return { first, last }
}
