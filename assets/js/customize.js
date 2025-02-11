document.addEventListener("DOMContentLoaded", function () {
    // 籌碼彈窗-%滑桿
    const rangeInput = document.querySelector(".chiprangeslider");
    const circles = document.querySelectorAll(".chiprangecircle span");

    function updateRangeUI() {
        let percent = (rangeInput.value / rangeInput.max) * 100;
        rangeInput.style.background = `linear-gradient(to right, rgba(255, 217, 0, 1) ${percent}%, rgba(216, 216, 216, 1) ${percent}%)`;
        circles.forEach((circle, index) => {    // 變更節點顏色
            if (index <= rangeInput.value) {
                circle.style.background = "rgba(255, 217, 0, 1)";
            } else {
                circle.style.background = "rgba(216, 216, 216, 1)";
            }
        });
    }
    rangeInput.addEventListener("input", updateRangeUI);    // 監聽滑桿變化

});