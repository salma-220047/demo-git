/**
 * JqueryLab Core Script
 * Comprehensive demonstration of jQuery methods and features.
 */

$(document).ready(function() {
    console.log("JqueryLab initialized!");

    // --- UTILITIES ---
    function showMessage(text, color = "var(--primary)") {
        $("#message-box").text(text).css("background", color).fadeIn().delay(1500).fadeOut();
    }

    // --- INDEX PAGE NAVIGATION HOVER ---
    $('.card').hover(function() {
        $(this).find('i').animate({fontSize: '2.8rem'}, 200);
    }, function() {
        $(this).find('i').animate({fontSize: '2.5rem'}, 200);
    });

    // --- SELECTORS LAB (selectors.html) ---
    $('#btn-id-selector').click(function() {
        $('#target-id').addClass('highlight');
        showMessage("Selected by #id");
    });

    $('#btn-class-selector').click(function() {
        $('.target-class').addClass('highlight');
        showMessage("Selected by .class");
    });

    $('#btn-element-selector').click(function() {
        $('article h4').addClass('highlight');
        showMessage("Selected by element type");
    });

    $('#btn-filter-even').click(function() {
        $('.list-item:even').addClass('highlight');
        showMessage("Selected :even elements");
    });

    $('#btn-filter-odd').click(function() {
        $('.list-item:odd').addClass('highlight');
        showMessage("Selected :odd elements");
    });

    $('#btn-filter-first').click(function() {
        $('.list-item:first').addClass('highlight');
        showMessage("Selected :first element");
    });

    $('#btn-reset-selectors').click(function() {
        $('*').removeClass('highlight');
        showMessage("All highlights cleared");
    });

    // --- ATTRIBUTE METHODS LAB (attributes.html) ---
    $('#btn-get-attr').click(function() {
        let altText = $('#demo-img').attr('alt');
        $('#attr-output').text("Image Alt: " + altText);
        showMessage("Attribute retrieved");
    });

    $('#btn-set-attr').click(function() {
        $('#demo-img').attr('src', 'https://picsum.photos/300/201');
        showMessage("New image set!");
    });

    $('#btn-remove-attr').click(function() {
        $('#demo-img').removeAttr('title');
        showMessage("Title attribute removed");
    });

    $('#btn-get-val').click(function() {
        let val = $('#name-input').val();
        $('#val-output').text("Input Value: " + val);
        showMessage("Value retrieved: " + val);
    });

    // --- EVENTS LAB (events.html) ---
    let eventLogger = $('#event-log');
    
    function logEvent(type, target) {
        let time = new Date().toLocaleTimeString();
        eventLogger.prepend(`<div>[${time}] Event: <b>${type}</b> on ${target}</div>`);
    }

    $('#event-target').on('click dblclick mouseenter mouseleave', function(e) {
        logEvent(e.type, "main target");
        $(this).css('background-color', e.type === 'mouseenter' ? 'var(--secondary)' : 'var(--card-bg)');
    });

    $('#event-target').on('mousedown', function() {
        $(this).text("Released!");
    }).on('mouseup', function() {
        $(this).text("Pressed!");
    });

    // Combined Keyboard Event
    $('#key-input').on('keydown keyup keypress', function(e) {
        $('#key-display').text(`Key: ${e.key} | Type: ${e.type}`);
        logEvent(e.type, "input field");
    });

    // Form Events
    $('#demo-form').on('submit', function(e) {
        e.preventDefault();
        showMessage("Form Submitted Successfully!", "var(--accent)");
        logEvent("submit", "form");
    });

    $('#form-select').on('change', function() {
        showMessage("Value changed to: " + $(this).val());
        logEvent("change", "select");
    });

    $('#form-input').on('focus', function() {
        $(this).css('border-color', 'var(--primary)');
        logEvent("focus", "input");
    }).on('blur', function() {
        $(this).css('border-color', 'var(--border-color)');
        logEvent("blur", "input");
    });

    // On/Off Demo
    $('#btn-toggle-event').click(function() {
        let btn = $(this);
        if (btn.text().includes("Enable")) {
            $('#test-btn').on('click', function() { showMessage("Event Fired!"); });
            btn.text("Disable Click Event");
            showMessage("Event listener ON");
        } else {
            $('#test-btn').off('click');
            btn.text("Enable Click Event");
            showMessage("Event listener OFF", "var(--secondary)");
        }
    });

    // --- STYLE MANIPULATION (style.html) ---
    $('#btn-add-class').click(function() {
        $('.style-box').addClass('highlight');
        showMessage("Added .highlight class");
    });

    $('#btn-remove-class').click(function() {
        $('.style-box').removeClass('highlight');
        showMessage("Removed .highlight class");
    });

    $('#btn-toggle-class').click(function() {
        $('.style-box').toggleClass('highlight');
        showMessage("Toggled class");
    });

    $('#btn-check-class').click(function() {
        let has = $('.style-box').hasClass('highlight');
        showMessage("Has highight? " + has);
    });

    $('#btn-set-css').click(function() {
        $('.style-box').css({
            'background': 'linear-gradient(45deg, #10b981, #3b82f6)',
            'border-radius': '50%',
            'transform': 'rotate(45deg)'
        });
        showMessage("Custom CSS Applied");
    });

    $('#btn-toggle-theme').click(function() {
        $('body').toggleClass('light-theme');
        let mode = $('body').hasClass('light-theme') ? 'Light' : 'Dark';
        showMessage(mode + " Mode Activated");
        $(this).text(mode === 'Light' ? "Switch to Dark" : "Switch to Light");
    });

    // --- TRAVERSING LAB (traversing.html) ---
    $('.node').click(function(e) {
        e.stopPropagation();
        $('*').removeClass('highlight');
        $(this).addClass('highlight');
        showMessage("Selected current node");
    });

    $('#btn-get-parent').click(function() {
        $('.highlight').parent().addClass('highlight');
        showMessage("Selected parent");
    });

    $('#btn-get-children').click(function() {
        $('.highlight').children().addClass('highlight');
        showMessage("Selected children");
    });

    $('#btn-find-inner').click(function() {
        $('.highlight').find('.inner-target').addClass('highlight');
        showMessage("Found inner targets");
    });

    $('#btn-siblings').click(function() {
        $('.highlight').siblings().addClass('highlight');
        showMessage("Selected siblings");
    });

    $('#btn-next').click(function() {
        $('.highlight').next().addClass('highlight');
    });

    $('#btn-prev').click(function() {
        $('.highlight').prev().addClass('highlight');
    });

    $('#btn-filter-nodes').click(function() {
        $('.node').filter(':even').addClass('highlight');
        showMessage("Filtered: even nodes");
    });

    // --- EFFECTS LAB (effects.html) ---
    $('#btn-show').click(function() { $('#effect-box').show(); });
    $('#btn-hide').click(function() { $('#effect-box').hide(); });
    $('#btn-toggle-effect').click(function() { $('#effect-box').toggle(); });

    $('#btn-fade-in').click(function() { $('#effect-box').fadeIn(500); });
    $('#btn-fade-out').click(function() { $('#effect-box').fadeOut(500); });
    $('#btn-fade-toggle').click(function() { $('#effect-box').fadeToggle(500); });

    $('#btn-slide-down').click(function() { $('#effect-box').slideDown(); });
    $('#btn-slide-up').click(function() { $('#effect-box').slideUp(); });
    $('#btn-slide-toggle').click(function() { $('#effect-box').slideToggle(); });

    $('#btn-animate').click(function() {
        $('#effect-box').animate({
            width: '200px',
            height: '200px',
            opacity: 0.5,
            marginLeft: '100px'
        }, 1000).animate({
            width: '100px',
            height: '100px',
            opacity: 1,
            marginLeft: '0px'
        }, 1000);
        showMessage("Complex animation queued!");
    });

    $('#btn-stop').click(function() {
        $('#effect-box').stop();
        showMessage("Animation Stopped", "var(--secondary)");
    });

    $('#btn-delay').click(function() {
        $('#effect-box')
            .fadeOut(500)
            .delay(2000)
            .fadeIn(500);
        showMessage("Delayed 2 seconds...");
    });

    $('#btn-queue-demo').click(function() {
        let box = $('#effect-box');
        box.animate({left: '+=100px'}, 500);
        box.queue(function(next) {
            $(this).css('background', 'var(--secondary)');
            showMessage("Queue Checkpoint!");
            next();
        });
        box.animate({left: '-=100px'}, 500);
    });

});
