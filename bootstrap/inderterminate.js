const parent = document.getElementById("parentCheck");
const children = document.querySelectorAll(".child-check");

function updateParent() {
    const checked = [...children].filter(c => c.checked).length;

    if (checked === 0){
        parent.checked = false;
        parent.indeterminate = false;
    } else if (checked === children.length) {
        parent.checked = true;
        parent.indeterminate = true;
    } else {
        parent.checked = false;
        parent.indeterminate = true;
    }
}

children.forEach(c => c.addEventListener("change", updateParent))

parent.addEventListener("change", () => {
    children.forEach(c=> c.checked = parent.checked)
    parent.indeterminate = false
})
