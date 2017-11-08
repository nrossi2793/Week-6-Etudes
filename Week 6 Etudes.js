class myTime {

    constructor(hours, minutes, seconds, amOrPm){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds
        this.amOrPm = amOrPm;
    }

    toString(){
        return ${this.hours}:${this.minutes}:${this.seconds}${this.amOrPm}
    }

    compareTo(timeInstance){
        if(this.amOrPm == "AM" && timeInstance.amOrPm == "PM")
            return 1;
        else if(this.amOrPm == timeInstance.amOrPm)
        {
            if(this.hours < timeInstance.hours)
                //Current instance is earlier than the passed in time
                return -1;
            else if(this.hours > timeInstance.hours )
                //Passed in time is earlier than the current instance
                return 1;
            else
                //Times are the same
                return 0;
        }
        else
            return 1;
    }

    sort(a, b){
        let comparisonInstance = new myTime(a.hours, a.minutes, a.seconds, a.amOrPm)
        if(comparisonInstance.compareTo(b) == 1)
            return 1;

        if(comparisonInstance.compareTo(b) == -1)
            return -1;
        else
            return 0;
    }

    //Checks if the given instance's time is between two times passed into the method.
    isBetween(timeInstance1, timeInstance2){
        if(this.compareTo(timeInstance1) == -1 && this.compareTo(timeInstance2) ==1 || this.compareTo(timeInstance1) == 1 && this.compareTo(timeInstance2) == -1  )
            return true;
        return false;
    }
}
