document.addEventListener('DOMContentLoaded', () => {
    const mineralDivs = document.querySelectorAll('main div');

    mineralDivs.forEach((div, index) => {
        const img = div.querySelector('img');
        const header = div.querySelector('header');
        const description = div.querySelector('p');

        // Hide the header and description initially
        header.style.display = 'none';
        description.style.display = 'none';

        // Add tabindex for accessibility
        div.setAttribute('tabindex', '0');
        div.setAttribute('role', 'region');
        div.setAttribute('aria-label', `Mineral: ${header.textContent}`);

        // Detect 5th column for right-side behavior
        const columns = 5;
        if ((index + 1) % columns === 0) {
            div.classList.add('right-edge');
        }

        // Toggle expansion on click or Enter key
        const toggleExpand = () => {
            if (div.classList.contains('expanded')) {
                div.classList.remove('expanded');
                header.style.display = 'none';
                description.style.display = 'none';
                div.setAttribute('aria-expanded', 'false');
            } else {
                // Collapse any other expanded divs
                document.querySelectorAll('main div.expanded').forEach(expandedDiv => {
                    expandedDiv.classList.remove('expanded');
                    expandedDiv.querySelector('header').style.display = 'none';
                    expandedDiv.querySelector('p').style.display = 'none';
                    expandedDiv.setAttribute('aria-expanded', 'false');
                });

                // Expand the clicked div
                div.classList.add('expanded');
                header.style.display = 'block';
                description.style.display = 'block';
                div.setAttribute('aria-expanded', 'true');
            }
        };

        img.addEventListener('click', toggleExpand);
        div.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleExpand();
            }
        });

        // Add focus styling
        div.addEventListener('focus', () => div.classList.add('focused'));
        div.addEventListener('blur', () => div.classList.remove('focused'));
    });

    // Handle layout changes on smaller screens
    const handleResize = () => {
        const isSmallScreen = window.matchMedia('(max-width: 700px)').matches;

        // If the screen is smaller than 700px, remove right-edge behavior
        if (isSmallScreen) {
            mineralDivs.forEach((div) => div.classList.remove('right-edge'));
        } else {
            // Reapply right-edge to the 5th column divs on larger screens
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
