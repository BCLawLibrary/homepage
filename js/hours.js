const thLibraryHours = document.querySelector("tr.hours-library > th");
const thTechSupport = document.querySelector("tr.dep14722 > th");
const thResearchHelp = document.querySelector("tr.dep5014 > th");
if (thLibraryHours) {
  thLibraryHours.innerHTML = `<a href="https://www.bc.edu/bc-web/schools/law/sites/students/library/using/hours.html" target="_blank">Library Building Hours</a>`;
}

if (thLibraryHours) {
  thTechSupport.innerHTML = `<a href="https://www.bc.edu/bc-web/schools/law/sites/students/library/technology.html" target="_blank">Tech Support</a>`;
}

if (thLibraryHours) {
  thResearchHelp.innerHTML = `<a href="https://lawguides.bc.edu/teachingandresearch/" target="_blank">Research Help</a>`;
}
