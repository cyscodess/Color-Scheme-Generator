const generateBtn = document.getElementById("generate-btn")
const colorPalette = document.getElementById("color-palette")
const container = document.getElementById("container")

generateBtn.addEventListener("click", generateScheme)
colorPalette.addEventListener("click", copyToClipboard)

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

function copyToClipboard(e) {
    if (e.target.tagName === "H3") {
        navigator.clipboard.writeText(e.target.textContent)
        
        let popup = document.createElement("span")
        popup.classList.add("copied")
        popup.innerHTML = `${e.target.textContent} copied to clipboard!`
        container.appendChild(popup)
        setTimeout(() => container.removeChild(popup), 2000)
    }
}