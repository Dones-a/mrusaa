// Funcionalidad del menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
});

// Funcionalidad del menú desplegable
document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown');
    
    dropdownItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
                dropdownMenu.style.transform = 'translateY(0)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
            }
        });
    });
});

// Funcionalidad de la galería
document.addEventListener('DOMContentLoaded', function() {
    // Filtros de galería
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Funcionalidad del modal de imágenes
function openModal(imageSrc, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (modal && modalImg && modalCaption) {
        modal.style.display = 'block';
        modalImg.src = imageSrc;
        modalCaption.textContent = caption;
        
        // Cerrar modal al hacer clic en la X
        const closeBtn = document.querySelector('.close');
        if (closeBtn) {
            closeBtn.onclick = function() {
                modal.style.display = 'none';
            };
        }
        
        // Cerrar modal al hacer clic fuera de la imagen
        modal.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
        
        // Cerrar modal con tecla ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                modal.style.display = 'none';
            }
        });
    }
}

// Funcionalidad simplificada de galería
document.addEventListener('DOMContentLoaded', function() {
    // La funcionalidad de clic se maneja directamente con onclick en el HTML
    // No se necesita JavaScript adicional para la funcionalidad básica
});

// Funcionalidad del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validación básica
            if (!data.nombre || !data.email || !data.mensaje) {
                alert('Por favor, completa todos los campos obligatorios.');
                return;
            }
            
            // Simular envío del formulario
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// Animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('.episode-card, .gallery-item, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Efecto parallax suave en el hero (deshabilitado temporalmente)
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        // Deshabilitar el efecto parallax que está causando problemas
        // window.addEventListener('scroll', function() {
        //     const scrolled = window.pageYOffset;
        //     const heroHeight = heroSection.offsetHeight;
        //     
        //     // Solo aplicar parallax si el hero está visible
        //     if (scrolled < heroHeight) {
        //         const parallax = scrolled * 0.3;
        //         heroSection.style.transform = `translateY(${parallax}px)`;
        //     } else {
        //         // Cuando el hero sale de vista, mantener posición fija
        //         heroSection.style.transform = `translateY(${heroHeight * 0.3}px)`;
        //     }
        // });
    }
});

// Smooth scroll para enlaces internos
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Lazy loading para imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Efecto de typing para el título principal
document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.querySelector('.hero-text h1');
    
    if (titleElement) {
        const text = titleElement.textContent;
        titleElement.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                titleElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Iniciar efecto después de un pequeño delay
        setTimeout(typeWriter, 500);
    }
});

// Contador de visitas (localStorage)
document.addEventListener('DOMContentLoaded', function() {
    const visitCount = localStorage.getItem('visitCount') || 0;
    const newCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', newCount);
    
    // Mostrar contador en consola (opcional)
    console.log(`Visitas al sitio: ${newCount}`);
});

// Preloader (opcional)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Detectar dispositivo y ajustar comportamiento del menú móvil
document.addEventListener('DOMContentLoaded', function() {
    function isMobileView() {
        return window.innerWidth <= 768;
    }
    
    function setupMobileMenu() {
        if (!isMobileView()) return;
        
        document.body.classList.add('mobile-device');
        
        // Ajustar comportamiento del menú desplegable en móviles
        const dropdownItems = document.querySelectorAll('.dropdown');
        
        dropdownItems.forEach(item => {
            const dropdownLink = item.querySelector('.nav-link');
            const dropdownMenu = item.querySelector('.dropdown-menu');
            
            if (dropdownLink && dropdownMenu) {
                // Remover listeners previos clonando el elemento
                const newLink = dropdownLink.cloneNode(true);
                dropdownLink.parentNode.replaceChild(newLink, dropdownLink);
                
                // En móvil, todo el enlace abre el desplegable
                newLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const isOpen = item.classList.contains('open');
                    
                    // Cerrar todos los dropdowns
                    document.querySelectorAll('.dropdown').forEach(d => {
                        d.classList.remove('open');
                        const menu = d.querySelector('.dropdown-menu');
                        if (menu) menu.classList.remove('active');
                    });
                    
                    // Si no estaba abierto, abrirlo
                    if (!isOpen) {
                        item.classList.add('open');
                        dropdownMenu.classList.add('active');
                    }
                });
            }
        });
        
        // Cerrar dropdown y menú hamburguesa al hacer clic en un item
        document.querySelectorAll('.dropdown-menu a').forEach(link => {
            link.addEventListener('click', function() {
                // Cerrar dropdowns
                document.querySelectorAll('.dropdown').forEach(item => {
                    item.classList.remove('open');
                    item.classList.remove('active');
                });
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('active');
                });
                
                // Cerrar menú hamburguesa
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                if (hamburger && navMenu) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    }
    
    // Configurar menú móvil al cargar
    setupMobileMenu();
    
    // Reconfigurar al cambiar tamaño de ventana
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (isMobileView()) {
                document.body.classList.add('mobile-device');
                setupMobileMenu();
            } else {
                document.body.classList.remove('mobile-device');
                // Limpiar estados de dropdown en desktop
                document.querySelectorAll('.dropdown').forEach(item => {
                    item.classList.remove('open');
                    item.classList.remove('active');
                });
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('active');
                    menu.style.display = '';
                });
            }
        }, 250);
    });
});

// Funcionalidad de búsqueda (si se implementa en el futuro)
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            
            if (query.length > 2) {
                // Implementar lógica de búsqueda aquí
                searchResults.style.display = 'block';
            } else {
                searchResults.style.display = 'none';
            }
        });
    }
}

// Inicializar funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    
    // Agregar clase loaded al body para animaciones CSS
    document.body.classList.add('loaded');
    
    // Inicializar tooltips si existen
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});
