$(function () {

    //header button
    $(".header_section .btn_head").on("click", function () {
        $(".side_btn_head").slideToggle();
    });
    //Search button
    $(".item_input1").on("click", function () {
        $(".side_btn_search1").slideToggle();
    });
    $(".item_input2").on("click", function () {
                $(".side_btn_search2").slideToggle();
    });
});