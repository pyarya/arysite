// This script uses https://github.com/NeverBehave/compile-overleaf to get the updated pdf from overleaf and open it in a new tab.
let preloadedPdfLink = null;

window.addEventListener('DOMContentLoaded', async () => {
    const url = "https://compile-overleaf.vercel.app/api/read?token=jtfnyyspfxxz";
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
        console.log('clicked button');
        if (preloadedPdfLink) {
            window.open(preloadedPdfLink);
        } else {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('PDF fetch failed');
                }
                const jsonResponse = await response.json();
                window.open(jsonResponse.link.pdf);
            } catch (error) {
                console.error('overleaf fetch failed, opening local:', error);
                window.open('/Aryan Aryal Resume.pdf', "_blank");
            }
        }
    }
});
