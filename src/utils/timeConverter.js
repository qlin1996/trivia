const timeConverter = (secs) => {
  const minutes = Math.floor(secs / 60).toString();
  let seconds = (secs % 60).toString();
  if (seconds.length === 1) seconds = '0' + seconds;
  return `${minutes}:${seconds}`;
};

const timeConverterSentences = (secs) => {
  const minutes = Math.floor(secs / 60).toString();
  let seconds = (secs % 60).toString();
  if (minutes === '0') return `${seconds} seconds`;
  if (minutes === '1') return `${minutes} minute and ${seconds} seconds`;
  else return `${minutes} minutes and ${seconds} seconds`;
};

export { timeConverter, timeConverterSentences };
