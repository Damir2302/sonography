$(document).ready(function() {

    $('.action-button-search').on('click', function() {
        $('.header__search').addClass('opened')
    })

    $('.close-search').on('click', function() {
        $('.header__search').removeClass('opened')
    })

    $(".filterSlider").slider({
        animate: "slow",
        range: true,
        values: [ 0, 100 ],
        slide : function(event, ui) {
            // Меняем значение ползунка при вводе поля MIN
            $('.filter__slider').parent().find(".input-min").val(ui.values[ 0 ])
            // Меняем значение ползунка при вводе поля MIN
            $('.filter__slider').parent().find(".input-max").val(ui.values[ 1 ])
        }
    })

    // При вводе значения MIN, перемещаем ползунок
    $('.filter__slider').parent().find( ".input-min" ).on( "input", function() {
        $('.filterSlider').slider( "values", [ $(this).val(),  $(this).parent().find(".input-max").val() ] )
        $(this).parent().parent().find(".value-min").text($(".filterSlider").slider("values", 0))
    })

    // При вводе значения MAX, перемещаем ползунок
    $('.filter__slider').parent().find( ".input-max" ).on( "input", function() {
        $('.filterSlider').slider( "values", [ $(this).parent().find(".input-min").val(), $(this).val() ] )
        $(this).parent().parent().find(".value-max").text($(".filterSlider").slider("values", 1))
    })

    // Устанавливаем начальное значение ползунка MIN
    $(".input-min").val($(".filterSlider").slider("values", 0))
    // Устанавливаем начальное значение ползунка MAX
    $(".input-max").val($(".filterSlider").slider("values", 1))



});