const timeConverter = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);

  return {
    minutes,
    seconds,
  };
};

export default timeConverter;
