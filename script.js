// Runs inside whichever frame includes it (top.html or bottom.html)
//
// Note: an earlier version of this script used fetch(href, {method:'HEAD'})
// to check the resume file existed before downloading. That check only
// works when the page is served over http/https — browsers block fetch()
// on file:// pages (which is how you open this locally), so it always
// failed and showed a false "not found" alert even when the file was
// right there. Removed — the <a download> tag handles the download on
// its own, no JS needed for that part.
document.addEventListener('DOMContentLoaded', function() {
    var resumeBtn = document.getElementById('resumeBtn');

    if (resumeBtn) {
        resumeBtn.addEventListener('click', function() {
            // Download proceeds normally via the href/download attributes.
            // Add any click-tracking or animation here if you want it later.
        });
    }
})