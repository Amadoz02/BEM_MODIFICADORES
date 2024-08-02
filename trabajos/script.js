document.addEventListener('DOMContentLoaded', function() {
    function setupDropdown(dropdownClass) {
        var dropdown = document.querySelector(dropdownClass);
        var trigger = dropdown.querySelector('.dropdown-trigger-' + dropdownClass.split('-')[1] + ' .button-' + dropdownClass.split('-')[1]);
        var menu = dropdown.querySelector('.dropdown-menu-' + dropdownClass.split('-')[1]);

        trigger.addEventListener('click', function(event) {
            event.stopPropagation();
            menu.classList.toggle('is-active');
        });

        document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                menu.classList.remove('is-active');
            }
        });
    }

    setupDropdown('.dropdown-1');
    setupDropdown('.dropdown-2');
    setupDropdown('.dropdown');

});