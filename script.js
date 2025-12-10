document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            navLinks.classList.toggle('active');

            // Update ARIA attribute
            const expanded = mobileBtn.getAttribute('aria-expanded') === 'true' || false;
            mobileBtn.setAttribute('aria-expanded', !expanded);
        });

        // Close menu when link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                navLinks.classList.remove('active');
                mobileBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // --- Translation Logic ---
    const i18n = {
        pt: {
            nav_services: "Serviços",
            nav_clients: "Clientes",
            nav_diff: "Diferenciais",
            nav_contact: "Fale Conosco",
            hero_title_1: "Tecnologia que gravita",
            hero_title_2: "em torno do seu sucesso",
            hero_subtitle: "Automatize processos, escale vendas e blinde seus dados com nossas soluções digitais completas.",
            hero_cta: "Fale com a Orbita",
            scroll_explore: "Explore",
            sec_services: "O que construímos",
            service_1_title: "Desenvolvimento Web",
            service_1_desc: "Sites de alta performance, landing pages que convertem e aplicações web progressivas.",
            service_2_title: "SaaS & Ferramentas",
            service_2_desc: "Sistemas sob medida para escalar seu negócio e automatizar operações complexas.",
            service_3_title: "Gestão de Redes Sociais",
            service_3_desc: "Estratégia de conteúdo e design para engajar sua audiência nas principais plataformas.",
            service_4_title: "Suporte em TI",
            service_4_desc: "Manutenção preventiva e suporte técnico ágil para manter sua empresa rodando.",
            service_5_title: "Cibersegurança",
            service_5_desc: "Proteção de dados e sistemas contra ameaças digitais com monitoramento constante.",
            why_title: "Por que Orbita?",
            benefit_1_title: "Ferramentas Customizadas",
            benefit_1_desc: "Não entregamos templates prontos. Desenvolvemos o que seu negócio realmente precisa.",
            benefit_2_title: "Design Futurista",
            benefit_2_desc: "Interface moderna, dark mode nativo e foco na experiência do usuário (UX).",
            benefit_3_title: "Foco em Automação",
            benefit_3_desc: "Reduza trabalho manual e aumente a eficiência com nossos sistemas inteligentes.",
            benefit_4_title: "Onboarding 1:1",
            benefit_4_desc: "Acompanhamento humano e próximo para garantir o sucesso da implementação.",
            testimonials_title: "Quem já está em órbita",
            plans_title: "Planos que cabem no bolso",
            plan_start_period: "/único",
            plan_start_audience: "✅ Para autônomos e negócios locais",
            plan_start_cta: "Contratar Agora",
            plan_start_micro: "Sem mensalidade",
            plan_pro_period: "/único",
            plan_pro_audience: "✅ Para coaches, consultórios, freelancers",
            plan_pro_cta: "Quero Automatizar",
            plan_pro_micro: "Parcelamento disponível",
            plan_full_period: "/proj",
            plan_full_audience: "✅ Para empresas em crescimento",
            plan_full_cta: "Fale com um Especialista",
            plan_full_micro: "Orçamento personalizado",
            contact_title: "Receba uma análise gratuita",
            contact_subtitle: "Descubra pontos cegos no seu site ou operação digital. Preencha e receba um diagnóstico do nosso time.",
            contact_name_ph: "Seu Nome",
            contact_email_ph: "E-mail Corporativo",
            contact_site_ph: "Seu Site (https://...)",
            contact_submit: "Solicitar Análise Gratuita",
            contact_or: "Ou fale agora mesmo",
            contact_direct_sub: "Prefere agilidade? Nosso time está online no WhatsApp.",
            btn_whatsapp: "Fale com a Orbita no WhatsApp",
            btn_instagram: "Siga no Instagram"
        },
        en: {
            nav_services: "Services",
            nav_clients: "Clients",
            nav_diff: "Why Us",
            nav_contact: "Contact Us",
            hero_title_1: "Technology that gravitates",
            hero_title_2: "around your success",
            hero_subtitle: "Automate processes, scale sales, and protect your data with our complete digital solutions.",
            hero_cta: "Talk to Orbita",
            scroll_explore: "Explore",
            sec_services: "What We Build",
            service_1_title: "Web Development",
            service_1_desc: "High-performance websites, high-converting landing pages, and progressive web apps.",
            service_2_title: "SaaS & Tools",
            service_2_desc: "Custom-built systems to scale your business and automate complex operations.",
            service_3_title: "Social Media Management",
            service_3_desc: "Content strategy and design to engage your audience on major platforms.",
            service_4_title: "IT Support",
            service_4_desc: "Preventive maintenance and agile technical support to keep your company running.",
            service_5_title: "Cybersecurity",
            service_5_desc: "Data and system protection against digital threats with constant monitoring.",
            why_title: "Why Orbita?",
            benefit_1_title: "Custom Tools",
            benefit_1_desc: "We don't deliver generic templates. We build exactly what your business needs.",
            benefit_2_title: "Futuristic Design",
            benefit_2_desc: "Modern interface, native dark mode, and focus on User Experience (UX).",
            benefit_3_title: "Focus on Automation",
            benefit_3_desc: "Reduce manual work and increase efficiency with our intelligent systems.",
            benefit_4_title: "1:1 Onboarding",
            benefit_4_desc: "Close, human support to ensure successful implementation.",
            testimonials_title: "Who is already in orbit",
            plans_title: "Pocket-friendly Plans",
            plan_start_period: "/one-time",
            plan_start_audience: "✅ For freelancers & local businesses",
            plan_start_cta: "Hire Now",
            plan_start_micro: "No monthly fees",
            plan_pro_period: "/one-time",
            plan_pro_audience: "✅ For coaches, clinics, freelancers",
            plan_pro_cta: "Automate Now",
            plan_pro_micro: "Installments available",
            plan_full_period: "/proj",
            plan_full_audience: "✅ For growing companies",
            plan_full_cta: "Talk to an Expert",
            plan_full_micro: "Custom quote",
            contact_title: "Get a Free Analysis",
            contact_subtitle: "Discover blind spots in your site or digital ops. Fill this out for a diagnosis.",
            contact_name_ph: "Your Name",
            contact_email_ph: "Business Email",
            contact_site_ph: "Your Website (https://...)",
            contact_submit: "Request Free Analysis",
            contact_or: "Or talk right now",
            contact_direct_sub: "Prefer speed? Our team is online on WhatsApp.",
            btn_whatsapp: "Chat on WhatsApp",
            btn_instagram: "Follow on Instagram"
        }
    };

    let currentLang = 'pt';
    const langBtn = document.getElementById('lang-toggle');
    const langText = langBtn ? langBtn.querySelector('.lang-text') : null;

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';

            // Update Button Text
            if (langText) langText.textContent = currentLang === 'pt' ? 'EN' : 'PT';

            // Update Content
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (i18n[currentLang][key]) {
                    // Start of special handling for inputs
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = i18n[currentLang][key];
                    } else {
                        // Check if we need to preserve HTML like spans inside links?
                        // For this page, simple textContent replacement usually works, 
                        // but let's be careful with nested tags.
                        // Ideally, we'd replace only text nodes, but specific keys target mostly headers/paragraphs
                        el.innerText = i18n[currentLang][key];
                    }
                }
            });

            // Track Language Switch
            trackEvent('language_switch', { lang: currentLang });
        });
    }

    // --- Analytics Tracking ---
    function trackEvent(eventName, params = {}) {
        console.log(`[Analytics] Event: ${eventName}`, params);
        // Replace with real GA/Pixel call:
        // if(window.gtag) gtag('event', eventName, params);
    }

    // click tracking for CTA buttons
    document.querySelectorAll('.custom-track').forEach(el => {
        el.addEventListener('click', () => {
            const trackId = el.getAttribute('data-track-id');
            trackEvent(trackId, {
                url: el.href,
                text: el.innerText
            });
        });
    });

    // --- Lead Form Logic ---
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = leadForm.querySelector('button');
            const feedback = document.getElementById('form-feedback');

            // Loading State
            const originalText = btn.innerText;
            btn.innerText = 'Enviando...';
            btn.disabled = true;

            // Simulate API Call (would be fetch to backend)
            setTimeout(() => {
                // Success
                btn.innerText = 'Enviado!';
                feedback.innerText = 'Recebemos seus dados! Entraremos em contato em breve.';
                feedback.className = 'form-feedback success';

                // Track conversion
                trackEvent('lead_form_success');

                leadForm.reset();
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // --- Hero Animations ---
    const heroTimeline = gsap.timeline();

    heroTimeline
        .from('.nav-brand, .nav-links a', {
            y: -20,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        })
        .from('.central-logo', {
            scale: 0,
            opacity: 0,
            duration: 1.5,
            ease: 'elastic.out(1, 0.5)'
        }, "-=0.5")
        .from('.reveal-text', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        }, "-=1")
        .from('.btn-hero', {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: 'back.out(1.7)'
        }, "-=0.5");

    // --- Scroll Animations ---

    // Services Reveal
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power2.out'
        });
    });

    // Benefits Reveal
    gsap.utils.toArray('.benefit-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power2.out'
        });
    });

    // Testimonials Reveal
    gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'back.out(1.5)'
        });
    });

    // Pricing Reveal
    gsap.utils.toArray('.pricing-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out'
        });
    });

    // Contact Parallax/Reveal
    gsap.from('.contact-center', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

    // --- Particle System (Canvas) ---
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2;
            this.color = Math.random() > 0.5 ? 'rgba(47, 128, 237, ' : 'rgba(255, 107, 53, '; // Blue or Orange basis
            this.alpha = Math.random() * 0.5;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color + this.alpha + ')';
            ctx.fill();
        }
    }

    // Create Particles
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }

    // Cursor interaction
    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.update();
            p.draw();

            // Draw line to mouse if close
            if (mouse.x) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = p.color + (1 - distance / 150) * 0.2 + ')';
                    ctx.lineWidth = 1;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    // --- Tilt Effect for Cards ---
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
        });
    });

});
