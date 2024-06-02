import moment from 'moment';

export const TIMESTAMP_TZ_FORMAT = "DD-MM-YYYY HH:mm:ss";

export const GetCurrentTimeStamp = ()=>{
 const dateObj = new Date();
 let date = dateObj.getDate();
    if(date<10) { date = '0'+date; }
 let month = dateObj.getMonth() + 1;
    if(month<10) { month = '0'+month; }
 const year = dateObj.getFullYear();
 let hour = dateObj.getHours();
    if(hour<10) { hour = '0'+hour; }
 let minutes = dateObj.getMinutes();
    if(minutes<10) { minutes = '0'+minutes; }
 let seconds = dateObj.getSeconds();
    if(seconds<10) { seconds = '0'+seconds; }
 return (date+"-"+month+"-"+year+" "+hour+":"+minutes+":"+seconds);
};

export const getDiffTimeFromNow = (targetDateString, format) => {
  const targetDate = moment(targetDateString, format);
  const currentDate = moment();
  const timeDifference = targetDate.diff(currentDate); // Calculate the time difference using the diff() function
  const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  return { remainingHours, remainingMinutes, remainingSeconds };
};
