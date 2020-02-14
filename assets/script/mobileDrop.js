$(function() {
    $('.mobileDropButton, .drop').click(function() {
        $('.dropFrame').toggleClass("open");
        $('.mobileDropButton').toggleClass('dropActive');
    })
})