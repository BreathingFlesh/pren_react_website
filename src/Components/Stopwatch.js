import {useState, useEffect} from 'react';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';
import { statusData } from "./Data/StatusData";

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const startTime = statusData[1]["value"].split(":")

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    
    const start = new Date(2022, 2, 25, startTime[0], startTime[1], startTime[2]).valueOf()

    useEffect(() => {

            const intervalId = setInterval(() => {  
                updateRemainingTime(countdownTimestampMs);
            }, 1000);
            return () => clearInterval(intervalId);

    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(start));
    }
    

    return(
            <td className="text-end">
                {(() => {
                    if (statusData[2]["value"] == "00:00:00") {
                        return(
                            <div>
                                <span className="two-numbers">{remainingTime.minutes * -1}</span>
                                <span>:</span>
                                <span className="two-numbers">{remainingTime.seconds * -1}</span>
                            </div>
                        )
                    } else {
                        const endTime = statusData[2]["value"].split(":")
                        const end = new Date(2022, 2, 25, endTime[0], endTime[1], endTime[2]).valueOf()
                        const diffSeconds = (end - start) / 1000
                        return(
                            <div>
                                <span className="two-numbers">{Math.floor(diffSeconds / 60)}</span>
                                <span>:</span>
                                <span className="two-numbers">{diffSeconds % 60}</span>
                            </div>
                        )
                    }
                })()}
            </td>
    );
}

export default CountdownTimer;