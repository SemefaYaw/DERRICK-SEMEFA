// Main Application State
const HealthHubApp = {
    currentPage: 'home',
    assessmentScore: null,
    userData: {
        name: '',
        email: '',
        preferences: {}
    },
    tips: [
        "💧 Stay Hydrated: Drink at least 8 glasses of water daily. Proper hydration improves digestion, skin health, and energy levels.",
        "🏃‍♂️ Regular Exercise: 30 minutes of moderate exercise daily can reduce the risk of chronic diseases by 40%.",
        "🍎 Balanced Diet: Include all food groups: proteins, carbs, healthy fats, vitamins, and minerals in every meal.",
        "😴 Sleep Well: Aim for 7-9 hours of quality sleep each night for optimal physical and mental recovery.",
        "🧘‍♀️ Stress Management: Practice mindfulness or meditation for 10 minutes daily to reduce stress levels.",
        "🚶‍♂️ Move Regularly: Take short breaks to walk or stretch every hour if you have a sedentary job.",
        "🥦 Eat Vegetables: Include at least 5 servings of vegetables in your daily diet for essential nutrients."
    ],
    
    init: function() {
        this.setupEventListeners();
        this.loadUserPreferences();
        this.setCurrentYear();
        this.initializePage();
        this.updateDailyTip();
    },
    
    setupEventListeners: function() {
        // Mobile menu toggle
        document.getElementById('mobileMenu').addEventListener('click', () => this.toggleMobileMenu());
        
        // Navigation links
        document.querySelectorAll('[data-page]').forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                const page = element.getAttribute('data-page');
                this.showPage(page);
            });
        });
        
        // Audio controls
        document.querySelectorAll('[data-audio]').forEach(button => {
            button.addEventListener('click', () => {
                const audioId = button.getAttribute('data-audio');
                const action = button.getAttribute('data-action');
                this.controlAudio(audioId, action);
            });
        });
        
        // Calculator buttons
        document.getElementById('calculateWater')?.addEventListener('click', () => this.calculateWater());
        document.getElementById('calculateCalories')?.addEventListener('click', () => this.calculateCalories());
        document.getElementById('calculateAssessment')?.addEventListener('click', () => this.calculateAssessment());
        document.getElementById('submitContact')?.addEventListener('click', () => this.submitContactForm());
        
        // Form validation
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('input', (e) => this.validateNumberInput(e));
        });
        
        // Feature cards click
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('click', () => {
                const page = card.getAttribute('data-page');
                if (page) this.showPage(page);
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const navMenu = document.getElementById('mainNav');
            const mobileMenu = document.getElementById('mobileMenu');
            
            if (!navMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
                navMenu.classList.remove('show');
            }
        });
        
        // Browser back/forward buttons
        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.page) {
                this.showPage(event.state.page);
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#' || href === '#home') {
                    e.preventDefault();
                    this.showPage('home');
                } else if (href.startsWith('#') && href.length > 1) {
                    const pageId = href.substring(1);
                    if (['nutrition', 'fitness', 'mental', 'contact'].includes(pageId)) {
                        e.preventDefault();
                        this.showPage(pageId);
                    }
                }
            });
        });
    },
    
    toggleMobileMenu: function() {
        const navMenu = document.getElementById('mainNav');
        navMenu.classList.toggle('show');
    },
    
    validateNumberInput: function(e) {
        const input = e.target;
        const value = parseFloat(input.value);
        const min = parseFloat(input.min) || 0;
        const max = parseFloat(input.max) || Infinity;
        
        if (isNaN(value)) return;
        
        if (value < min) {
            input.value = min;
            this.showMessage(`Minimum value is ${min}`, 'error');
        }
        if (value > max) {
            input.value = max;
            this.showMessage(`Maximum value is ${max}`, 'error');
        }
    },
    
    setCurrentYear: function() {
        document.getElementById('currentYear').textContent = new Date().getFullYear();
    },
    
    loadUserPreferences: function() {
        try {
            const saved = localStorage.getItem('healthhub_preferences');
            if (saved) {
                this.userData.preferences = JSON.parse(saved);
                
                // Load saved weight if exists
                if (this.userData.preferences.weight) {
                    const weightInput = document.getElementById('weight');
                    if (weightInput) {
                        weightInput.value = this.userData.preferences.weight;
                    }
                }
            }
        } catch (error) {
            console.error('Error loading preferences:', error);
        }
    },
    
    saveUserPreferences: function() {
        try {
            localStorage.setItem('healthhub_preferences', JSON.stringify(this.userData.preferences));
        } catch (error) {
            console.error('Error saving preferences:', error);
        }
    },
    
    updateDailyTip: function() {
        // This could be expanded to fetch tips from an API
        const randomTip = this.tips[Math.floor(Math.random() * this.tips.length)];
        
        // Display tip in console or could be shown in a notification
        console.log('💡 Daily Health Tip:', randomTip);
    },
    
    initializePage: function() {
        // Check URL hash on page load
        const hash = window.location.hash.substring(1);
        const validPages = ['home', 'nutrition', 'fitness', 'mental', 'contact'];
        
        if (hash && validPages.includes(hash)) {
            this.showPage(hash);
        } else {
            this.showPage('home');
        }
    },
    
    showPage: function(pageId) {
        // Update current page state
        this.currentPage = pageId;
        
        // Hide all pages with animation
        const pages = document.querySelectorAll('.page-tabs');
        pages.forEach(page => {
            if (page.classList.contains('active')) {
                page.style.opacity = '0';
                page.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    page.classList.remove('active');
                    page.style.opacity = '';
                    page.style.transform = '';
                }, 300);
            }
        });
        
        // Show selected page with animation
        setTimeout(() => {
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.classList.add('active');
                selectedPage.style.opacity = '0';
                selectedPage.style.transform = 'translateY(10px)';
                
                // Trigger reflow for animation
                selectedPage.offsetHeight;
                
                selectedPage.style.opacity = '1';
                selectedPage.style.transform = 'translateY(0)';
                selectedPage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }
            
            // Update navigation state
            this.updateNavigation(pageId);
            this.updateTabButtons(pageId);
            
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Update browser history
            history.pushState({ page: pageId }, '', `#${pageId}`);
        }, 300);
    },
    
    updateNavigation: function(pageId) {
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
    },
    
    updateTabButtons: function(pageId) {
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-page') === pageId) {
                btn.classList.add('active');
            }
        });
    },
    
    controlAudio: function(audioId, action) {
        const audio = document.getElementById(audioId);
        if (!audio) return;
        
        switch(action) {
            case 'play':
                audio.play().catch(e => {
                    console.error("Audio play failed:", e);
                    this.showMessage('Could not play audio. Please try again.', 'error');
                });
                break;
            case 'pause':
                audio.pause();
                break;
            case 'restart':
                audio.currentTime = 0;
                audio.play().catch(e => {
                    console.error("Audio play failed:", e);
                    this.showMessage('Could not play audio. Please try again.', 'error');
                });
                break;
        }
    },
    
    calculateWater: function() {
        const weightInput = document.getElementById('weight');
        const weight = parseFloat(weightInput.value);
        
        if (!weight || isNaN(weight) || weight < 30 || weight > 200) {
            this.showMessage('Please enter a valid weight between 30 and 200 kg', 'error');
            weightInput.focus();
            return;
        }
        
        // Calculate water needed: 35ml per kg of body weight
        const waterNeeded = (weight * 0.035).toFixed(2);
        
        // Update display with animation
        const resultElement = document.getElementById('water-result');
        this.animateResult(resultElement, `Recommended Daily Water: ${waterNeeded} liters`);
        
        // Save to user preferences
        this.userData.preferences.weight = weight;
        this.userData.preferences.waterNeeded = waterNeeded;
        this.saveUserPreferences();
        
        this.showMessage(`Great! Drink ${waterNeeded} liters of water daily for optimal health.`, 'success');
    },
    
    calculateCalories: function() {
        const activity = document.getElementById('activity').value;
        const duration = parseFloat(document.getElementById('duration').value);
        const weight = parseFloat(document.getElementById('user-weight').value);
        
        if (!duration || isNaN(duration) || duration < 10 || duration > 180) {
            this.showMessage('Please enter duration between 10 and 180 minutes', 'error');
            document.getElementById('duration').focus();
            return;
        }
        
        if (!weight || isNaN(weight) || weight < 40 || weight > 150) {
            this.showMessage('Please enter weight between 40 and 150 kg', 'error');
            document.getElementById('user-weight').focus();
            return;
        }
        
        // MET values for different activities
        const metValues = {
            'walking': 3.5,
            'running': 10,
            'cycling': 8,
            'swimming': 6,
            'weight': 5
        };
        
        const met = metValues[activity] || 5;
        
        // Formula: Calories = MET × weight(kg) × time(hours)
        const calories = (met * weight * duration / 60).toFixed(0);
        
        // Update display with animation
        const resultElement = document.getElementById('calorie-result');
        this.animateResult(resultElement, `Estimated Calories Burned: ${calories} kcal`);
        
        // Save to user preferences
        this.userData.preferences.lastActivity = {
            type: activity,
            duration: duration,
            weight: weight,
            caloriesBurned: calories
        };
        this.saveUserPreferences();
        
        this.showMessage(`Great workout! You burned approximately ${calories} calories.`, 'success');
    },
    
    calculateAssessment: function() {
        const anxiety = this.getSelectedValue('anxiety');
        const sleep = this.getSelectedValue('sleep');
        const energy = this.getSelectedValue('energy');
        
        if (!anxiety || !sleep || !energy) {
            this.showMessage('Please answer all questions', 'error');
            return;
        }
        
        // Energy is reverse scored (higher score means less energy)
        const energyScore = 6 - parseInt(energy);
        const totalScore = parseInt(anxiety) + parseInt(sleep) + energyScore;
        const averageScore = (totalScore / 3).toFixed(1);
        
        // Update score with animation
        const scoreElement = document.getElementById('score');
        this.animateResult(scoreElement, averageScore + '/5');
        
        // Determine assessment message
        let message = '';
        let color = '';
        
        if (averageScore <= 2) {
            message = 'Excellent! You seem to be managing your mental well-being effectively.';
            color = '#4CAF50';
        } else if (averageScore <= 3) {
            message = 'Good! You\'re doing well, but consider incorporating more self-care practices.';
            color = '#8BC34A';
        } else if (averageScore <= 4) {
            message = 'Moderate. Consider practicing stress management techniques more regularly.';
            color = '#FFC107';
        } else {
            message = 'High. It might be beneficial to seek professional support or increase self-care activities.';
            color = '#F44336';
        }
        
        // Update message
        const messageElement = document.getElementById('score-message');
        messageElement.textContent = message;
        messageElement.style.color = color;
        
        // Save assessment result
        this.assessmentScore = averageScore;
        this.userData.preferences.lastAssessment = {
            score: averageScore,
            date: new Date().toISOString(),
            message: message
        };
        this.saveUserPreferences();
        
        this.showMessage('Assessment completed! Check your results above.', 'success');
    },
    
    getSelectedValue: function(name) {
        const selected = document.querySelector(`input[name="${name}"]:checked`);
        return selected ? selected.value : null;
    },
    
    submitContactForm: function() {
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value.trim();
        const newsletter = document.getElementById('newsletter').checked;
        
        // Validation
        if (!name || !email || !subject || !message) {
            this.showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!this.isValidEmail(email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        if (message.length < 10) {
            this.showMessage('Please provide a more detailed message (at least 10 characters).', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = document.getElementById('submitContact');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call with timeout
        setTimeout(() => {
            // In a real application, this would be an API call
            const formData = {
                name,
                email,
                subject,
                message,
                newsletter,
                timestamp: new Date().toISOString()
            };
            
            // Save to localStorage for demo purposes
            try {
                const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
                submissions.push(formData);
                localStorage.setItem('contact_submissions', JSON.stringify(submissions));
            } catch (error) {
                console.error('Error saving contact form:', error);
            }
            
            // Show success message
            this.showMessage('Message sent successfully! We will get back to you within 24-48 hours.', 'success');
            
            // Reset form
            document.getElementById('contact-form').reset();
            document.getElementById('newsletter').checked = true;
            
            // Restore button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Save user preferences
            this.userData.name = name;
            this.userData.email = email;
            this.userData.preferences.newsletter = newsletter;
            this.saveUserPreferences();
            
        }, 1500);
    },
    
    animateResult: function(element, text) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            element.textContent = text;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        }, 200);
    },
    
    showMessage: function(text, type) {
        const messageBox = document.getElementById('form-message');
        if (!messageBox) return;
        
        messageBox.textContent = text;
        messageBox.className = `message-box ${type}`;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            messageBox.style.opacity = '0';
            messageBox.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                messageBox.className = 'message-box';
                messageBox.style.opacity = '';
            }, 500);
        }, 5000);
    },
    
    isValidEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    HealthHubApp.init();
});

// Export for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HealthHubApp;
}