import moment from 'moment'
export const formatDate = (timestamp = Date.now()) => moment(timestamp).format('LLL')
export const required = (value) => value ? undefined : 'Required'
export const minLength = (min) => (value) => value && value.length < min ? `Must be at least ${min}` : undefined
export const minLength5 = minLength(5)