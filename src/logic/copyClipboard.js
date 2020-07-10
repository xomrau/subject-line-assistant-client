// copy text to clipboard
const copyClipboard = () => {
    const copyText = document.getElementById('encode');
    copyText.select();
    copyText.setSelectionRange(0, 9999); // for mobile
    document.execCommand('copy');
    console.log(`Copied the text: ${copyText.value}`);
}

export default copyClipboard;