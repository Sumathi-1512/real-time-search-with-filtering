document.getElementById("searchBox").addEventListener("keyup", function () {
    let searchValue = this.value.toLowerCase();
    let items = document.querySelectorAll("#itemList li");

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(searchValue)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});