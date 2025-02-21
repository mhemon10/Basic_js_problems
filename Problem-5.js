

function calculateWatchTime(watchTimes) {
   
    if (!Array.isArray(watchTimes)) {
        return "Invalid";
    }

    let totalSeconds = 0;

    
    for (let time of watchTimes) 
        {
        if (typeof time !== 'number') 
            
        {
            return "Invalid";
        }
        totalSeconds += time;
    }


    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    
    return { hour: hours, minute: minutes, second: seconds };
}

// Example usage
console.log(calculateWatchTime([3600, 1800, 300])); 
console.log(calculateWatchTime([7200, 3600, 180])); 
console.log(calculateWatchTime([150, 75, 30])); 

// Invalid cases
console.log(calculateWatchTime([3600, "not a number", 300]));
console.log(calculateWatchTime([3600, null, 300])); 
console.log(calculateWatchTime("not an array"));

