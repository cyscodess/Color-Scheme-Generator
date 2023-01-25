const generateBtn = document.getElementById("generate-btn")

generateBtn.addEventListener("click", generateScheme)

function generateScheme() {
    const selectedColor = document.getElementById("color-picker").value.slice(1)
    const schemeValue = document.getElementById("scheme").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${schemeValue}&count=5`)
        .then(response => response.json())
        .then(data => {
            const colorScheme = data.colors
            for (let i = 1; i <= colorScheme.length; i++) {
                document.getElementById(`clr${i}`).style.backgroundColor = colorScheme[i-1].hex.value
                document.getElementById(`code${i}`).innerText = colorScheme[i-1].hex.value
            }
        })
}