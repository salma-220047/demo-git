$(document).ready(function() {
    console.log("jQuery is ready!");

    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled shadow');
        } else {
            $('.navbar').removeClass('scrolled shadow');
        }
    });

    // Form Validation Logic
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault(); // Prevent actual submission for demo
                alert("Thank you! Your message has been sent (simulated).");
                form.reset();
                form.classList.remove('was-validated');
            }
            form.classList.add('was-validated');
        }, false);
    });

    // jQuery Event Handling
    $('.btn-outline-info').hover(
        function() { $(this).addClass('shadow-sm'); },
        function() { $(this).removeClass('shadow-sm'); }
    );

    // Dynamic Modal Content (Optional jQuery example)
    $('#projectModal1').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); 
        var projectTitle = button.closest('.card').find('.card-title').text();
        var modal = $(this);
        modal.find('.modal-title').text('Project: ' + projectTitle);
    });

    // Toggle Visibility with jQuery
    $('.hero-section h1').fadeOut(500).fadeIn(1000);

    // Initialize Tooltips and Popovers
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
});
