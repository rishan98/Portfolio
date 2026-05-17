// Initialize Lucide icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you only want it to animate once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));

    // Mouse Glow Effect
    window.addEventListener('mousemove', (e) => {
        document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    });

    initGlobe();

    // Stats Count Up Animation
    const stats = document.querySelectorAll('.stat-num');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'), 10);
        if (isNaN(target)) return;
        
        let startTimestamp = null;
        const duration = 1500; // 1.5 seconds for animation
        
        const step = (timestamp) => { 
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentVal = Math.floor(progress * target);
            stat.innerText = `${currentVal}+`;
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                stat.innerText = `${target}+`;
            }
        };
        
        window.requestAnimationFrame(step);
    });
});

// Initialize 3D Rotating Globe
function initGlobe() {
    const container = document.querySelector('.globe');
    if (!container) return;
    
    const items = [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JAVASCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'FLUTTER', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'LARAVEL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'REACT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'MYSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'FIREBASE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'GIT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GITHUB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'DOCKER', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'PYTHON', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'MONGODB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'NODE.JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'VERCEL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' }
    ];
    
    let radius = container.clientWidth / 2;
    if (radius === 0) radius = 200; // Fallback radius

    items.forEach((item, i) => {
        // Fibonacci sphere point generation
        const phi = Math.acos(-1 + (2 * i) / items.length);
        const theta = Math.sqrt(items.length * Math.PI) * phi;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        const el = document.createElement('div');
        el.className = 'globe-item';
        // Add white background for dark icons to be visible
        if (item.icon.includes('github') || item.icon.includes('vercel') || item.icon.includes('amazonwebservices')) {
            el.style.backgroundColor = '#ffffff';
        }
        el.style.backgroundImage = `url(${item.icon})`;
        
        const label = document.createElement('span');
        label.className = 'globe-item-label';
        label.textContent = item.name;
        el.appendChild(label);
        
        el.dataset.x = x;
        el.dataset.y = y;
        el.dataset.z = z;
        
        container.appendChild(el);
    });

    let angle = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let dragVelocity = 0;
    
    const wireframe = document.querySelector('.globe-wireframe');
    if (container) container.style.cursor = 'grab';

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
        container.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - previousMousePosition.x;
        dragVelocity = deltaX * -0.005; // Negative to drag the front
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
        if (container) container.style.cursor = 'grab';
    });

    // Touch support
    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, {passive: true});

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        dragVelocity = deltaX * -0.005;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, {passive: true});

    document.addEventListener('touchend', () => {
        isDragging = false;
    });

    function animate() {
        if (!isDragging) {
            if (Math.abs(dragVelocity) > 0.002) {
                dragVelocity *= 0.95; // friction
                angle += dragVelocity;
            } else {
                angle += 0.002; // default auto rotation
            }
        } else {
            angle += dragVelocity;
        }
        
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);
        
        const elements = document.querySelectorAll('.globe-item');
        elements.forEach(el => {
            const x = parseFloat(el.dataset.x);
            const y = parseFloat(el.dataset.y);
            const z = parseFloat(el.dataset.z);
            
            // Rotate around Y axis
            const rotX = x * cos - z * sin;
            const rotZ = z * cos + x * sin;
            const rotY = y;
            
            // Apply projection
            const scale = (radius + rotZ) / (2 * radius);
            const opacity = 0.3 + (scale * 0.7);
            
            el.style.transform = `translate3d(${rotX}px, ${rotY}px, ${rotZ}px) scale(${Math.max(scale, 0.4)})`;
            el.style.opacity = Math.max(opacity, 0.1);
            el.style.zIndex = Math.round(rotZ + radius);
        });
        
        if (wireframe) {
            // Apply rotation to wireframe to keep it synced
            const deg = angle * (180 / Math.PI);
            wireframe.style.transform = `rotateX(15deg) rotateY(${deg}deg)`;
        }
        
        requestAnimationFrame(animate);
    }
    animate();
}
