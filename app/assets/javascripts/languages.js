$(function () {
    $('body').popover({
        selector: '[data-toggle="popover"]'
    });

    $('body').tooltip({
        selector: 'a[rel="tooltip"], [data-toggle="tooltip"]'
    });

    function format(language) {
        if (language.text === "Choose a language to study") return language.text;
        return '<img src="/assets/flags/' + language.id + '.png"> ' + language.text;
        // return "<img src='/assets/flags/ad.png'>"
    }

    $("#language-dropdown").select2({
        formatResult: format,
        formatSelection: format,
        escapeMarkup: function(m) { return m; }
    });
    
    $("#page-dropdown").select2();
});

// Allow browsing words without refreshing the page

var paginate = function(id, page, perPage, callback) {
    $.getScript( "/languages/" + id + "/words?page=" + page + "&per_page=" + perPage, callback);
};

var changeBackground = function(){
    // var currentBackground = $("body").css("background-image")
    // currentBackground.fadeOut();
    $("body").css("transition: background 0.5s linear;")

    $("body").css("background-image").fadeOut();
    $("body").css("background-image", "url(/assets/background/china_" + Math.floor(Math.random() * 5 + 1) + ".jpg)");
    $("body").fadeIn();
}

var bindNextAndPreviousLinks = function(){
    $('body').on('click', '.next-link', function(e){
        e.stopPropagation();
        e.preventDefault();
        paginate(languageID, page + 1, perPage, function(){$('.display-words').html(divString)});
        changeBackground();
    })
    $('body').on('click', '.previous-link', function(e){
        e.stopPropagation();
        e.preventDefault();
        paginate(languageID, page - 1, perPage, function(){$('.display-words').html(divString)});
        changeBackground();
    })
};

$(document).ready(function(){
    bindNextAndPreviousLinks();
});