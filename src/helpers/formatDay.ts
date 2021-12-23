export const formatDay = (day:Date) => new Date(day.getTime()
  - (day.getTimezoneOffset() * 60000)).toISOString();
