/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let len = arr.length
    //(soon to be) 2D array for storing every possible subsequence 
    const subsequences = []
    /*entry - for accessing each subsequence array
    arrSlider - to loop through input array
    max - to find longest subsequence array
    sequencePicker - to jump between values that fit in the sequence
    innerSlider - to loop through current location to end of input array
    */
    let entry = 0, arrSlider = 0, max = 0, sequencePicker = 0, innerSlider = 0
    let currentLength
    let match = false //reflects whether last comparison fit into subsequence
    if (len === 0){
        return "Input array is empty";
    } //else if (len >= 100) {
    //     return "Item limit reached"
    // }
    else {
        // arrSlider loops till penultimate value
        for (;arrSlider < (len - 1); arrSlider++) {
            //sequence picker returns to arrSlider loop flow once it hits penultimate
            if (sequencePicker >= (len - 1)){ 
                sequencePicker = arrSlider
                match = false
            }
            //innerSlider loops from sequencePicker to end of array
            for (innerSlider = sequencePicker + 1; innerSlider < len;
            innerSlider++) {
                //matching condition
                if ((arr[innerSlider] - arr[sequencePicker]) === difference) {
                    match = true
                    //creates storage for detected sequence
                    if (!subsequences[entry]){ 
                        subsequences[entry] = []
                        //pushes first item of sequence
                        subsequences[entry].push(arr[sequencePicker])
                    }
                    //pushes other items of sequence via matching loop
                    subsequences[entry].push(arr[innerSlider])
                    //sequencePicker jumps to next value of sequence
                    sequencePicker = innerSlider
                    if (sequencePicker < (len - 1)) {
                        arrSlider--    //negates array increment until end of sequence
                    }// else {
                    //     entry++     //allows for new sequence storage at end of sequence
                    // }
                    break           //breaks loop once sequence value is found
                }
            }
            // sets sequencePicker to terminal innerSlider to return loop flow to arrSlider after first loop begins
            if (subsequences[entry]) currentLength = subsequences[entry].length
            if (max < currentLength) max = currentLength
            if ((arr[innerSlider] - arr[sequencePicker]) !== difference) sequencePicker = innerSlider
            if (match && innerSlider >= (len - 1)) entry++
        }
        //longest subsequence is any single element since no pattern was found
        if (subsequences.length === 0){
            return 1
        } else {
            //find longest subsequence
            // let sub_len = subsequences.length
            // max = subsequences[0].length
            // for (let i = 0; i < (sub_len - 1); i++) {
                
            //     if (max < subsequences[i+1].length) {
            //         max = subsequences[i+1].length
            //     }
            // }
            return max
        }
    }
}; //~xerosine