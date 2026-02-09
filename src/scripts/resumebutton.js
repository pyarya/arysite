// This script uses https://github.com/NeverBehave/compile-overleaf to get the updated pdf from overleaf and open it in a new tab.
let preloadedPdfLink = null;
const url = "https://compile-overleaf.vercel.app/api/read?token=jtfnyyspfxxz";

// Preload the PDF link on page load
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch(url, { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            if (jsonResponse && jsonResponse.link && jsonResponse.link.pdf) {
                preloadedPdfLink = jsonResponse.link.pdf;
                console.log('PDF preloaded successfully');
            } else {
                console.warn('Invalid response format from Overleaf API');
            }
        } else {
            console.error('Prefetch failed with status:', response.status);
        }
    } catch (error) {
        console.error('Error prefetching PDF link:', error);
    }
});

// Handle resume button clicks
document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('resume')) {
        event.preventDefault(); // Prevent any default behavior
        
        const btn = event.target;
        btn.classList.add('loading');
        
        try {
            let pdfLink = preloadedPdfLink;
            
            // If no preloaded link, try to fetch it now
            if (!pdfLink) {
                console.log('No preloaded link, fetching now...');
                
                // Create abort controller for timeout (fallback for older browsers)
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000);
                
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                        },
                        signal: controller.signal
                    });
                    
                    clearTimeout(timeoutId);
                    
                    if (!response.ok) {
                        throw new Error(`PDF fetch failed with status: ${response.status}`);
                    }
                    
                    const jsonResponse = await response.json();
                    if (jsonResponse && jsonResponse.link && jsonResponse.link.pdf) {
                        pdfLink = jsonResponse.link.pdf;
                    } else {
                        throw new Error('Invalid response format from API');
                    }
                } catch (fetchError) {
                    clearTimeout(timeoutId);
                    throw fetchError;
                }
            }
            
            // Validate the PDF link before opening
            if (pdfLink && typeof pdfLink === 'string' && pdfLink.startsWith('http')) {
                console.log('Opening PDF from Overleaf:', pdfLink);
                window.open(pdfLink, '_blank', 'noopener,noreferrer');
            } else {
                throw new Error('Invalid PDF link received');
            }
            
        } catch (error) {
            console.error('Overleaf fetch failed, opening local PDF:', error);
            // Fallback to local PDF
            window.open('/Aryan_Aryal_Resume.pdf', '_blank', 'noopener,noreferrer');
        } finally {
            btn.classList.remove('loading');
        }
    }
});
