$(function() {
    if (!sessionStorage.getItem("notice")) {
        $('#myModal').modal({
            show: true,
            backdrop: true
        })
    }
});

function onModalBtnClick1() {
    sessionStorage.setItem("notice", "have_read");
}

function onModalBtnClick2() {
    sessionStorage.setItem("notice", "have_read");
    location.href = "/download/?from-Notice"
}
