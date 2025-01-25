export const calculateTimeDifference = (time) => {
    const now = new Date();
    const arrivalTime = new Date(time);
    const diffInMs = arrivalTime - now;
    return diffInMs > 0 ? Math.floor(diffInMs / 60000) : null;
  };
  