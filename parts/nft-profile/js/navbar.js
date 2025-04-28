document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggleProfile = document.getElementById('dropdownToggleProfile');
    var dropdownToggleLang = document.getElementById('dropdownToggleLang');
    var dropdownContentProfile = document.querySelector('.dropdown-content-profile');
    var dropdownContentLang = document.querySelector('.dropdown-content-lang');

    // Toggle dropdown
    dropdownToggleLang.onclick = function(event) {
        event.stopPropagation(); // Stop the event from propagating to the document
        dropdownContentLang.style.display = (dropdownContentLang.style.display == 'block') ? 'none' : 'block';
        dropdownContentProfile.style.display = 'none';
    };

    dropdownToggleProfile.onclick = function(event) {
        event.stopPropagation(); // Stop the event from propagating to the document
        dropdownContentProfile.style.display = (dropdownContentProfile.style.display == 'block') ? 'none' : 'block';
        dropdownContentLang.style.display = 'none';
    };

    // Clicking anywhere outside the dropdown should close it
    document.addEventListener('click', function(event) {
        if (event.target != dropdownToggleProfile) {
            dropdownContentProfile.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target != dropdownToggleLang) {
            dropdownContentLang.style.display = 'none';
        }
    });
});