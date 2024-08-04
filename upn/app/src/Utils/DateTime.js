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

export const TimeAgo = (dateString) => { // dateString : YYYY-MM-dd H:i:s
   const now = new Date();
   const date = new Date(dateString.replace(" ", "T"));
   const seconds = Math.floor((now - date) / 1000);

   const intervals = {
       year: 31536000,
       month: 2592000,
       week: 604800,
       day: 86400,
       hour: 3600,
       minute: 60,
       second: 1
   };

   for (const interval in intervals) {
       const timeInterval = Math.floor(seconds / intervals[interval]);
       if (timeInterval >= 1) {
           return `${timeInterval} ${interval}${timeInterval > 1 ? 's' : ''} ago`;
       }
   }
   return 'Just now';
}


