// This script uses https://github.com/NeverBehave/compile-overleaf to get the updated pdf from overleaf and open it in a new tab.
let preloadedPdfLink = null;
const url = "https://compile-overleaf.vercel.app/api/read?token=jtfnyyspfxxz";
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            preloadedPdfLink = jsonResponse.link.pdf;
        } else {
            console.error('prefetch fail');
        }
    } catch (error) {
        console.error('Error prefetching link:', error);
    }
});

document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('resume')) {
        const btn = event.target;
        btn.classList.add('loading');
        try {
            let pdfLink = preloadedPdfLink;
            if (!pdfLink) {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('PDF fetch failed');
                }
                const jsonResponse = await response.json();
                pdfLink = jsonResponse.link.pdf;
            }
        window.open(pdfLink, '_blank');
        } catch (error) {
            console.error('overleaf fetch failed, opening local:', error);
            window.open('/Aryan Aryal Resume.pdf', '_blank');
        } finally {
            btn.classList.remove('loading');
        }
    }
});