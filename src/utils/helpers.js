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

export const dataNormalizer = (data, object = {}) => {
  let newData = object;

  for (let i = 0; i < data.length; i++) {
    let comment = data[i];
    newData[comment.id] = {
      id: comment.id,
      points: comment.points,
      createdAt: comment.createdAt,
      text: comment.text,
      user: comment.user,
      comments: []
    };
    if (comment.comments.length > 0) {
      let childComments = comment.comments;

      for (let z = 0; z < childComments.length; z++) {
        newData[comment.id].comments.push(parseInt(childComments[z].id));
      }
      newData = dataNormalizer(comment.comments, newData);
    }
  }
  return newData;
};

export const topNodes = data => {
  let topNodes = [];
  data.forEach(node => {
    topNodes.push(node.id);
  });
  return topNodes;
};
