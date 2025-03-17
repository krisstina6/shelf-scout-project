export const getBookId = (path) => {
  return path.split("/works/")[1];
};

export const removeNullItems = (array) => {
  return array.filter((object) => {
    return object != null;
  });
};

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
};

export const handleDateAndTime = (date) => {
  const convertedDate = new Date(date);
  const formattedDate = convertedDate.toLocaleString("en-US", options);
  return formattedDate;
};

export const handleDuplicates = (books) => {
  return books.filter(
    (value, index, self) =>
      index === self.findIndex((book) => book?.key === value?.key)
  );
};
