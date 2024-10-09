document.getElementsByClassName('resume')[0].addEventListener('click', async () => {
    const url = "https://compile-overleaf.vercel.app/api/read?token=jtfnyyspfxxz";
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const pdfLink = jsonResponse.link.pdf;
    window.open(pdfLink, "_blank");
});