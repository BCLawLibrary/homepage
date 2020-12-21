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
            $('tr.loc5008 th.hours-col-loc').text("Today's Library Hours");
            $('tr.dep14722 th.hours-col-loc').text("Technology Help");
            $('tr.dep5014 th.hours-col-loc').text("Research Help");

            //add links to building and ATR hours
            $('tr.loc5008').append('<td class="link"><a href="library/using/hours.html"><span class="link-text">Detailed Hours</span></a></td>');
            //$('tr.dep14722').append('<td class="link"><a href="mailto:atrinbox@bc.edu"><span class="link-text">Email ATR</span></a></td><td class="link"><a href="https://calendar.google.com/calendar/selfsched?sstoken=UU90ckhhSmMyUHJrfGRlZmF1bHR8YmUxYzIzZGM1MjAzMWEyYjE5MWZkYWZmNjM2NTYyZTc"><span class="link-text">Make an Appointment</span></a></td>'); //email ATR and appointment calendar
            $('tr.dep14722').append('<td class="link"><a href="mailto:atrinbox@bc.edu"><span class="link-text">Email ATR</span></a></td>'); //just email, no appointment calendar
            $('tr.dep5014').append('<td class="link"><a href="https://lawguides.bc.edu/educationandreference"><span class="link-text">Get Research Help</span></a></td>')
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
