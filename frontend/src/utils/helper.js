import moment from 'moment'
export const formatDate = (timestamp = Date.now()) => moment(timestamp).format('LLL')