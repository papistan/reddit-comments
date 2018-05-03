export const timeConversion = millisec => {
  var seconds = (millisec / 1000).toFixed(0);

  var minutes = (millisec / (1000 * 60)).toFixed(0);

  var hours = (millisec / (1000 * 60 * 60)).toFixed(0);

  var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(0);

  if (seconds < 60) {
    return seconds + " Sec";
  } else if (minutes < 60) {
    return minutes + " Min";
  } else if (hours < 24) {
    return hours + " Hrs";
  } else {
    return days + " Days";
  }
};
