 
        // Smooth scrolling for navigation links
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Animation on scroll
        function handleScrollAnimation() {
            const elements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
            
            // Animate skill bars
            const skillBars = document.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                const barTop = bar.getBoundingClientRect().top;
                if (barTop < window.innerHeight - 100) {
                    bar.classList.add('animate');
                }
            });
        }

        // Parallax effect
        function handleParallax() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        }

        // Modal functions
        function openModal(modalId) {
            document.getElementById(modalId).classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal(modal.id);
                }
            });
        });

        // CV Download functionality
        document.getElementById('download-cv').addEventListener('click', function() {
            // Create a dummy CV content
            const cvContent = `
ENGINEER ABUZAR SHEIKH
Digital Solutions Expert

CONTACT INFORMATION
Email: abuzar.sheikh@email.com
Phone: +1 (555) 123-4567
Website: www.abuzarsheikh.com

PROFESSIONAL SUMMARY
Experienced engineer specializing in web development and digital marketing solutions. 
Expert in WordPress, Shopify, WooCommerce, and custom web development with 5+ years of experience.

TECHNICAL SKILLS
• WordPress Development & Customization
• Shopify & E-commerce Solutions
• WooCommerce Development
• Custom Web Development (HTML, CSS, JavaScript, PHP)
• SEO & Digital Marketing
• Website Builders (Weebly, etc.)
• Database Management (MySQL)
• Responsive Web Design

EXPERIENCE
Freelance Digital Solutions Expert (2019 - Present)
• Developed 50+ websites and e-commerce stores
• Specialized in WordPress, Shopify, and custom development
• Implemented SEO strategies resulting in improved search rankings
• Provided ongoing maintenance and support services

EDUCATION
Bachelor of Engineering
Computer Science & Engineering

CERTIFICATIONS
• WordPress Certified Developer
• Shopify Partner Certification
• Google Analytics Certified
• SEO Specialist Certification

PORTFOLIO HIGHLIGHTS
• TechMart E-commerce Store - Complete Shopify solution
• HealthCare Plus Website - WordPress with booking system
• RealEstate Pro Platform - Custom development project
• Multiple successful SEO campaigns with 200%+ traffic growth
            `;
            
            const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Abuzar_Sheikh_CV.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            // Show success message
            alert('CV downloaded successfully! 📄✨');
        });

        // Contact form submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const service = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = 'Sending... ⏳';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.innerHTML = 'Message Sent! ✅';
                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    this.reset();
                    alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you within 24 hours! 🚀`);
                }, 2000);
            }, 1500);
        });

        // Navigation link clicks
        document.querySelectorAll('nav a[href^="#"], .nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId);
                
                // Close mobile menu if open
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });

        // Initialize animations on page load
        window.addEventListener('load', function() {
            handleScrollAnimation();
            
            // Add typing animation restart
            setTimeout(() => {
                const typingElement = document.querySelector('.typing-animation');
                if (typingElement) {
                    typingElement.style.animation = 'none';
                    setTimeout(() => {
                        typingElement.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
                    }, 100);
                }
            }, 1000);
        });

        window.addEventListener('scroll', function() {
            handleScrollAnimation();
            handleParallax();
            
            // Update navigation background on scroll
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.classList.add('bg-white/95');
                nav.classList.remove('bg-white/90');
            } else {
                nav.classList.add('bg-white/90');
                nav.classList.remove('bg-white/95');
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });

        // Add some interactive hover effects
        document.querySelectorAll('.service-card, .project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = this.classList.contains('service-card') ? 
                    'translateY(-10px) scale(1.02)' : 'scale(1.05) rotateY(5deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1) rotateY(0)';
            });
        });