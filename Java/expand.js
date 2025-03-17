document.addEventListener('DOMContentLoaded', () => {
    const mineralDivs = document.querySelectorAll('main div');

    mineralDivs.forEach(div => {
        const img = div.querySelector('img');
        const text = div.querySelector('p');

        // Hide the text initially
        text.style.display = 'none';

        img.addEventListener('click', () => {
            if (div.classList.contains('expanded')) {
                // Collapse the div
                div.classList.remove('expanded');
                text.style.display = 'none';
            } else {
                // Expand the div
                div.classList.add('expanded');
                text.style.display = 'block';
            }
        });
    });
});
