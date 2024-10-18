//The page watches the hours div for changes that happen when LibCal widgets load.
const targetNode = document.getElementById('all-hours');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// This the function that runs when the hours load.
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            //update label for each hours row
            $('tr.loc5008').remove();
            $('tr.dep14722').remove();
            $('tr.dep5014 th.hours-col-loc').text("Today's Reference Hours");

           //Only run the function once and disconnect the observer once it has run
            observer.disconnect();
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);


// Start observing the target node for configured mutations
observer.observe(targetNode, config);
// the observer only runs once - the command to stop the observer is inside the function
