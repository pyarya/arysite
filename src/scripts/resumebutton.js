// This script uses https://github.com/NeverBehave/compile-overleaf to get the updated pdf from overleaf and open it in a new tab.

document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('resume')) {
        const url = "https://compile-overleaf.vercel.app/api/read?token=jtfnyyspfxxz";
        console.log('clicked button');
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('pdf fetch fail');
            }
            const jsonResponse = await response.json();
            const pdfLink = jsonResponse.link.pdf;
            window.open(pdfLink);
        } catch (error) {
            console.error('could not fetch pdf from overleaf, opening local', error);
            window.open('/public/Aryan Aryal Resume.pdf', "_blank"); 
        }
    }
});