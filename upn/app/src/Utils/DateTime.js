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

const format = (value)=>{
 return value>9?(''+value):('0'+value);
};
export const GetWeekOfDays = ()=>{
   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   
   const today = new Date();
   const todayDayIndex = today.getDay();
   const todayDay = daysOfWeek[todayDayIndex];
   const todayDate = today.getDate();
   const todayMonthIndex = today.getMonth();
   const todayMonth = monthsOfYear[todayMonthIndex];
   const todayYear = today.getFullYear();

   const currentDay = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
   const startDate = new Date(today);
   startDate.setDate(today.getDate() - currentDay); // Set start date to Sunday of the current week
   
   let dates = [];
   for (let i = 0; i < 7; i++) {
     const date = new Date(startDate);
     date.setDate(startDate.getDate() + i);
     const dayIndex = date.getDay();
     const monthIndex = date.getMonth();
     const day = daysOfWeek[dayIndex];
     const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit' });
     dates.push({
       dayIndex: format(dayIndex+1),
       day: day,
       date: format(date.getDate()),
       monthIndex: format(monthIndex+1),
       month: monthsOfYear[monthIndex],
       year: date.getFullYear(),
       formattedDate: formattedDate
     });
   }

   return { 
     weekDates: dates, 
     today:{
       dayIndex: format(todayDayIndex+1),
       day: todayDay,
       date: format(todayDate),
       monthIndex:format(todayMonthIndex+1),
       month: todayMonth,
       year: todayYear
     }
   }
 };
