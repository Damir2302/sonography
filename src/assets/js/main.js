$(document).ready(function() {

    $('.action-button-search').on('click', function() {
        $('.header__search').addClass('opened')
    })

    $('.close-search').on('click', function() {
        $('.header__search').removeClass('opened')
    })

});