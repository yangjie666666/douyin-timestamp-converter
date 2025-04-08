import dayjs from 'dayjs';

export const convertTimestamp = (timestamp: number): string => {
  return dayjs.unix(timestamp).format('YYYY-MM-DD HH:mm:ss');
};

export const convertToTimestamp = (dateTime: string): number => {
  return dayjs(dateTime).unix();
};

export const isValidTimestamp = (timestamp: number): boolean => {
  const date = new Date(timestamp * 1000);
  return date instanceof Date && !isNaN(date.getTime());
};

export const getCurrentTimestamp = (): number => {
  return Math.floor(Date.now() / 1000);
}; 