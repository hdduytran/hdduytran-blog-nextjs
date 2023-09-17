export function convertTimeToMonthYear(time: string | Date) {
    const date = time instanceof Date ? time : new Date(time)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export function findItemMatch(object, key, match) {
    return object.find((item) => item[key] === match)
  }