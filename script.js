const val = document.getElementById("val")
const cTf = document.getElementById("cTf")
const fTc = document.getElementById("fTc")
const submit = document.getElementById("submit")
const result = document.getElementById("result")

submit.onclick = function () {
    if (cTf.checked) {
        let num = Number(val.value)
        num = (num * 9/5) + 32
        result.innerText = num
    }
    else if(fTc.checked) {
        let num = Number(val.value)
        num = (num - 32) * 5/9
        result.innerText = num
    }
    else {
        result.innerText = `Please select an option`
    }
}