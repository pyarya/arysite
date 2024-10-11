const resumebuttons = document.getElementsByClassName('resume');

for (let i = 0; i < resumebuttons.length; i++) {
    resumebuttons[i].addEventListener('click', async () => {
        const url = "https://compile-overleaf.vercel.app/api/read?token=jtfnyyspfxxz";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('fetch fail');
            }
            const jsonResponse = await response.json();
            const pdfLink = jsonResponse.link.pdf;
            window.open(pdfLink, "_blank");
        } catch (error) {
            console.error('could not fetch pdf from overleaf, opening local', error);
            window.open('/public/Aryan Aryal Resume.pdf', "_blank"); 
        }
    });
}
