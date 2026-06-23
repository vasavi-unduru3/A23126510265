const logger = (message, data = "") => {
  console.log(
    `[${new Date().toLocaleString()}] ${message}`,
    data
  );
};

export default logger;