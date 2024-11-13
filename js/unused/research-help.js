//The page watches the hours div for changes that happen when LibCal widgets load.
const targetNode = document.getElementById('libchat');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// This the function that runs when the hours load.
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            $('#libchat').after(`<div id="libchat-wrapper"><div id="libchat_89869b0c11c3b20ddcf044f4db5e59e2"></div></div>`)
            /*
            $('tr.dep14722').append('<td class="link"><a href="mailto:atrinbox@bc.edu"><span class="link-text">Email ATR</span></a></td><td class="link"></td>'); //email ATR and appointment calendar
            $('tr.dep14722').append('<td class="link"><div id="libchat_89869b0c11c3b20ddcf044f4db5e59e2"></div><a href="https://lawguides.bc.edu/educationandreference"><span class="link-text">Get Research Help</span></a><a href="https://www.bc.edu/content/bc-web/schools/law/sites/students/library/research-services/research-training.html"><span class="link-text">Research Trainings</span></a></td>')
            //Only run the function once and disconnect the observer once it has run
            */
            observer.disconnect();
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);


// Start observing the target node for configured mutations
observer.observe(targetNode, config);
// the observer only runs once - the command to stop the observer is inside the function
