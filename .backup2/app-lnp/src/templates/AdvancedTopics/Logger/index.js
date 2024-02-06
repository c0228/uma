
const formatTimestamp = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const timezone = 'IST'; // You may need to adjust this based on your actual timezone
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${timezone}`;
};

// Save the original console.log function
const originalConsoleLog = console.log;

// Override console.log to include a timestamp
console.log = function (...args) {
  originalConsoleLog(`[${formatTimestamp()}]`, ...args);
};

export default console;