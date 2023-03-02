// Functions used in the browser, not requiring any server-side modules

// Assumes dateString is in format "YYYY-MM-DD"
export function formatDate (dateString) {
  const dateParts = dateString.split('-')
  const year = dateParts[0]
  const month = parseInt(dateParts[1])
  const day = dateParts[2]
  // Add extra element at beginning so months are 1-indexed
  const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return `${months[month]} ${day}, ${year}`
}
