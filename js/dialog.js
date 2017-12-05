$(function() {
    if (!sessionStorage.getItem("notify")) {
        $('#myModal').modal({
            show: true,
            backdrop: true
        })
    }
});

function onModalBtnClick1() {
    sessionStorage.setItem("notify", "have_read");
}

function onModalBtnClick2() {
    sessionStorage.setItem("notify", "have_read");
    location.href = "/purchase/?from-Notify"
}
