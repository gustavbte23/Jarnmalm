document.addEventListener('DOMContentLoaded', () => {
    const mineralDivs = document.querySelectorAll('main div');

    mineralDivs.forEach((div, index) => {
        const img = div.querySelector('img');
        const header = div.querySelector('header');
        const description = div.querySelector('p');

        // Hide the header and description initially
        header.style.display = 'none';
        description.style.display = 'none';

        // Detect 5th column for right-side behavior
        const columns = 5;
        if ((index + 1) % columns === 0) {
            div.classList.add('right-edge');
        }

        // Toggle expansion on click
        img.addEventListener('click', () => {
            if (div.classList.contains('expanded')) {
                // Collapse the div
                div.classList.remove('expanded');
                header.style.display = 'none';
                description.style.display = 'none';
            } else {
                // Collapse any other expanded divs
                document.querySelectorAll('main div.expanded').forEach(expandedDiv => {
                    expandedDiv.classList.remove('expanded');
                    expandedDiv.querySelector('header').style.display = 'none';
                    expandedDiv.querySelector('p').style.display = 'none';
                });

                // Expand the clicked div
                div.classList.add('expanded');
                header.style.display = 'block';
                description.style.display = 'block';
            }
        });
    });

    // Handle layout changes on smaller screens
    const handleResize = () => {
        const isSmallScreen = window.matchMedia('(max-width: 700px)').matches;

        // If the screen is smaller than 700px, remove right-edge behavior
        if (isSmallScreen) {
            mineralDivs.forEach((div) => {
                div.classList.remove('right-edge');
            });
        } else {
            // When screen width is larger than 700px, reapply right-edge to the 5th column divs
            mineralDivs.forEach((div, index) => {
                const columns = 5;
                if ((index + 1) % columns === 0) {
                    div.classList.add('right-edge');
                }
            });
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
});
