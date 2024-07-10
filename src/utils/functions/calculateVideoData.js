export const extractMinuteSec = (duration) => {
  // console.log(duration);
  // console.log(duration);
  // it should return two array on contains minutes another one contains second
  let durationArray = duration.split("M");
  // console.log(durationArray);

  // now we'll use regx to extract the value of number from string
  // console.log("This is duraiton from calculate video container");
  // console.log(durationArray);
  let minutes, second;
  if (durationArray.length === 2) {
    // console.log(durationArray[1]);
    minutes = durationArray[0].match(/(\d+)/)[0];
    // console.log(durationArray[1]);

    second = durationArray[1].slice(0, 2);

    const hourMinute = calculateMinute(minutes);
    return `${hourMinute}: ${second}`;
  }
};

// This function calcuclate the minutes
export function calculateMinute(minutes) {
  if (minutes > 59) {
    // it contains total hours including decimal
    const totalHours = minutes / 60;
    // it does not contain decimal
    const roundedHours = Math.floor(totalHours);
    // the below variable contains minutes
    const totalMinutes = Math.round((totalHours - roundedHours) * 60);

    return `${roundedHours}:${totalMinutes}`;
  }
  return `${minutes}`;
}
// get hour month and date from iso, as youtube give the data on ison format
export const getDateFromIso = (date) => {
  const year = date.substring(0, 4);

  const month = date.substring(5, 7);

  const day = date.substring(8, 10);

  const hour = date.substring(11, 13);

  //   const second = date.substring(14, 16);

  return [Number(year), Number(month), Number(day), Number(hour)];
};

// Function to calcualte the date uploaded
export const getUploadedTime = (dateArray) => {
  /* 
   - You Cannot use this funciton directly at first use the above getDateFromIso function please
  */
  // Changing current date to iso format
  const currentDate = new Date().toISOString();
  const currentDateArray = getDateFromIso(currentDate);

  //   Check year difference
  if (dateArray[0] < currentDateArray[0]) {
    return `${currentDateArray[0] - dateArray[0]} year ago`;
  }

  // Check month difference
  if (
    dateArray[0] === currentDateArray[0] &&
    dateArray[1] < currentDateArray[1]
  ) {
    return `${currentDateArray[1] - dateArray[1]} month ago`;
  }

  // Check day difference
  if (
    dateArray[0] === currentDateArray[0] &&
    dateArray[1] === currentDateArray[1] &&
    dateArray[2] < currentDateArray[2]
  ) {
    return `${currentDateArray[2] - dateArray[2]} day ago`;
  }
  if (dateArray[2] === currentDateArray[2]) {
    return "Today";
  }

  // If none of the conditions are met, return undefined
  return undefined;
};

// this is used to claculate not only the views but also the suscribers and all the things
export const viewsCalculate = (data) => {
  let viewsCalculate;
  if (data >= 1000000000) {
    viewsCalculate = data / 1000000000;
    return `${~~viewsCalculate}B`;
  } else if (data >= 1000000) {
    viewsCalculate = data / 1000000;

    return `${~~viewsCalculate}M`;
  } else if (data >= 1000) {
    viewsCalculate = data / 1000;
    // You can also use bitwise operators to truncate the decimal.

    return `${~~viewsCalculate}K`;
  }
  return data;
};

// get smaller video
export const trimSentence = (text, startingCharacter, lastCharacter) => {
  const subString = text.substring(startingCharacter, lastCharacter);

  return `${subString} ...`;
};
