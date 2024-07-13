// router.js

document.addEventListener('DOMContentLoaded', function() {
    // Get the current path from the URL
    const path = window.location.pathname;

    // Normalize the path by removing leading and trailing slashes
    const cleanPath = path.replace(/^\/|\/$/g, '');

    // Handle root URL
    if (cleanPath === '' || cleanPath === 'website') {
        // Redirect to index.html
        if (!window.location.href.endsWith('index.html')) {
            window.location.href = '/website/index.html';
        }
        return;
    }

    // Handle URL that ends with a slash (e.g., /content/ or /achievements/)
    if (cleanPath.endsWith('/')) {
        const newPath = cleanPath.slice(0, -1); // Remove trailing slash
        const fileName = newPath.split('/').pop() + '.html';
        
        // Check if the file exists by sending a request
        fetch(fileName)
            .then(response => {
                if (response.ok) {
                    window.location.href = fileName;
                } else {
                    console.error('File not found:', fileName);
                }
            })
            .catch(error => console.error('Error:', error));
    } else {
        // Handle URLs without trailing slashes
        const fileName = cleanPath + '.html';
        
        // Check if the file exists by sending a request
        fetch(fileName)
            .then(response => {
                if (response.ok) {
                    window.location.href = fileName;
                } else {
                    console.error('File not found:', fileName);
                }
            })
            .catch(error => console.error('Error:', error));
    }
});
