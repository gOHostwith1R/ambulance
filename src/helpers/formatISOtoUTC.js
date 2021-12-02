import dayjs from 'dayjs';

const formatISOtoUTC = (time) => {
  const timeVisit = dayjs(time).format('ddd MMM D, YYYY h:mm A');
  const endTimeVisit = Number(timeVisit.slice(-8, -6)) + 1;
  const partOfDay = timeVisit.slice(-2);
  return `${timeVisit} - ${endTimeVisit} ${partOfDay}`;
};

export default formatISOtoUTC;
