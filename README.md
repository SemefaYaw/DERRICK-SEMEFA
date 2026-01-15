
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Begin Jekyll SEO tag v2.8.0 -->
<title>WebDesign</title>
<meta name="generator" content="Jekyll v3.10.0" />
<meta property="og:title" content="WebDesign" />
<meta property="og:locale" content="en_US" />
<link rel="canonical" href="https://semefayaw.github.io/WebDesign/" />
<meta property="og:url" content="https://semefayaw.github.io/WebDesign/" />
<meta property="og:site_name" content="WebDesign" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary" />
<meta property="twitter:title" content="WebDesign" />
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebSite","headline":"WebDesign","name":"WebDesign","url":"https://semefayaw.github.io/WebDesign/"}</script>
<!-- End Jekyll SEO tag -->

    <link rel="stylesheet" href="/WebDesign/assets/css/style.css?v=b24b2f9e7abd8d80c6d8e9ddccdc1a8a37382e90">
    <!-- start custom head snippets, customize with your own _includes/head-custom.html file -->

<!-- Setup Google Analytics -->



<!-- You can set your favicon here -->
<!-- link rel="shortcut icon" type="image/x-icon" href="/WebDesign/favicon.ico" -->

<!-- end custom head snippets -->

  </head>
  <body>
    <div class="container-lg px-3 my-5 markdown-body">
      
      <h1><a href="https://semefayaw.github.io/WebDesign/">WebDesign</a></h1>
      

      
<p>&lt;!DOCTYPE html&gt;</p>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Health &amp; Wellness Hub - Your complete guide to healthy living" />
    <title>Health &amp; Wellness Hub | Complete Website</title>
    <style>
        /* ===== RESET & BASE STYLES ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-color: #2E8B57;
            --primary-dark: #1E6B47;
            --primary-light: #3CB371;
            --secondary-color: #4A90E2;
            --accent-color: #FF6B6B;
            --light-color: #F8F9FA;
            --dark-color: #343A40;
            --gray-color: #6C757D;
            --light-gray: #E9ECEF;
            --border-radius: 8px;
            --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--dark-color);
            background-color: var(--light-color);
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* ===== TYPOGRAPHY ===== */
        h1, h2, h3, h4, h5, h6 {
            margin-bottom: 1rem;
            color: var(--primary-dark);
            line-height: 1.3;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 700;
        }

        h2 {
            font-size: 2rem;
            font-weight: 600;
            margin-top: 2rem;
        }

        h3 {
            font-size: 1.5rem;
            font-weight: 600;
        }

        p {
            margin-bottom: 1rem;
            color: var(--gray-color);
        }

        a {
            color: var(--primary-color);
            text-decoration: none;
            transition: var(--transition);
        }

        a:hover {
            color: var(--primary-dark);
        }

        /* ===== HEADER & NAVIGATION ===== */
        header {
            background-color: white;
            box-shadow: var(--box-shadow);
            position: sticky;
            top: 0;
            z-index: 1000;
            margin-bottom: 2rem;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }

        .logo h1 {
            font-size: 1.8rem;
            color: var(--primary-color);
            margin-bottom: 0.2rem;
        }

        .logo p {
            font-size: 0.9rem;
            color: var(--gray-color);
            margin-bottom: 0;
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-menu li a {
            padding: 0.5rem 1rem;
            border-radius: var(--border-radius);
            font-weight: 500;
        }

        .nav-menu li a:hover,
        .nav-menu li a.active {
            background-color: var(--primary-light);
            color: white;
        }

        .mobile-menu {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 4px;
        }

        .mobile-menu span {
            width: 25px;
            height: 3px;
            background-color: var(--primary-color);
            border-radius: 2px;
        }

        /* ===== HERO SECTIONS ===== */
        .hero {
            display: flex;
            align-items: center;
            gap: 3rem;
            margin: 3rem 0;
            padding: 2rem;
            background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary-color) 100%);
            border-radius: var(--border-radius);
            color: white;
        }

        .hero-content h1,
        .hero-content p {
            color: white;
        }

        .hero-content h1 {
            font-size: 2.8rem;
            margin-bottom: 1.5rem;
        }

        .hero-image img {
            width: 100%;
            height: auto;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
        }

        .cta-button {
            display: inline-block;
            padding: 0.8rem 2rem;
            background-color: white;
            color: var(--primary-color);
            border-radius: var(--border-radius);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 1rem;
        }

        .cta-button:hover {
            background-color: var(--light-gray);
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .page-hero {
            text-align: center;
            padding: 3rem 0;
            margin-bottom: 2rem;
            background-color: var(--light-gray);
            border-radius: var(--border-radius);
        }

        /* ===== FEATURES & CARDS ===== */
        .features {
            margin: 4rem 0;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .feature-card {
            background-color: white;
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            text-align: center;
            transition: var(--transition);
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .feature-link {
            display: inline-block;
            margin-top: 1rem;
            font-weight: 600;
        }

        /* ===== TABS FOR MULTIPLE PAGES ===== */
        .page-tabs {
            display: none;
        }

        .page-tabs.active {
            display: block;
        }

        .tabs-nav {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin: 2rem 0;
            flex-wrap: wrap;
        }

        .tab-btn {
            padding: 0.8rem 1.5rem;
            background-color: white;
            border: 2px solid var(--primary-light);
            border-radius: var(--border-radius);
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
        }

        .tab-btn:hover,
        .tab-btn.active {
            background-color: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }

        /* ===== TABLES ===== */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
            background-color: white;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--box-shadow);
        }

        th, td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid var(--light-gray);
        }

        th {
            background-color: var(--primary-color);
            color: white;
            font-weight: 600;
        }

        tr:hover {
            background-color: var(--light-gray);
        }

        tfoot {
            background-color: var(--light-gray);
            font-weight: 600;
        }

        /* ===== FORMS ===== */
        .form-group {
            margin-bottom: 1.5rem;
        }

        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--dark-color);
        }

        input, select, textarea {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid var(--light-gray);
            border-radius: var(--border-radius);
            font-family: inherit;
            font-size: 1rem;
            transition: var(--transition);
        }

        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
        }

        textarea {
            resize: vertical;
            min-height: 120px;
        }

        .checkbox-label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }

        .submit-btn {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: var(--border-radius);
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            width: 100%;
        }

        .submit-btn:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
        }

        /* ===== AUDIO PLAYER ===== */
        .audio-player {
            background-color: white;
            padding: 1.5rem;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            margin: 2rem 0;
        }

        audio {
            width: 100%;
            margin-bottom: 1rem;
        }

        .audio-controls {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }

        .audio-btn {
            padding: 0.5rem 1rem;
            background-color: var(--primary-light);
            color: white;
            border: none;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: var(--transition);
        }

        .audio-btn:hover {
            background-color: var(--primary-color);
        }

        /* ===== CALCULATORS ===== */
        .calculator {
            background-color: white;
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            margin: 3rem 0;
        }

        .calc-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-top: 1rem;
        }

        .calc-input {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .calc-result {
            background-color: var(--light-gray);
            padding: 2rem;
            border-radius: var(--border-radius);
        }

        /* ===== PROGRAM CARDS ===== */
        .program-card {
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            margin: 2rem 0;
            overflow: hidden;
        }

        .program-header {
            background-color: var(--primary-color);
            color: white;
            padding: 1.5rem;
        }

        .program-level {
            display: inline-block;
            background-color: white;
            color: var(--primary-color);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .program-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            padding: 2rem;
        }

        .schedule {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin: 1rem 0;
        }

        .day {
            background-color: var(--light-gray);
            padding: 1rem;
            border-radius: var(--border-radius);
            text-align: center;
        }

        /* ===== MENTAL HEALTH ASSESSMENT ===== */
        .assessment-question {
            background-color: white;
            padding: 1.5rem;
            border-radius: var(--border-radius);
            margin-bottom: 1rem;
            box-shadow: var(--box-shadow);
        }

        .rating {
            display: flex;
            gap: 1rem;
            margin-top: 0.5rem;
        }

        .result-box {
            background-color: var(--light-gray);
            padding: 2rem;
            border-radius: var(--border-radius);
            margin-top: 2rem;
            text-align: center;
        }

        /* ===== CONTACT PAGE ===== */
        .contact-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin: 3rem 0;
        }

        .info-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
            margin-bottom: 2rem;
        }

        .info-icon {
            font-size: 1.5rem;
            background-color: var(--primary-light);
            color: white;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }

        .map-container {
            position: relative;
            margin: 2rem 0;
        }

        .map-container img {
            width: 100%;
            height: auto;
            border-radius: var(--border-radius);
        }

        .map-overlay {
            position: absolute;
            bottom: 20px;
            left: 20px;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 1rem;
            border-radius: var(--border-radius);
        }

        .emergency-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }

        .emergency-card {
            background-color: #FFF3CD;
            padding: 1.5rem;
            border-radius: var(--border-radius);
            border-left: 4px solid #FFC107;
        }

        /* ===== FAQ SECTION ===== */
        .faq-container {
            margin-top: 2rem;
        }

        .faq-item {
            background-color: white;
            padding: 1.5rem;
            border-radius: var(--border-radius);
            margin-bottom: 1rem;
            box-shadow: var(--box-shadow);
        }

        /* ===== HEALTH TIPS ===== */
        .health-tips {
            margin: 4rem 0;
        }

        .tips-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .tip {
            background-color: white;
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
        }

        /* ===== FOOTER ===== */
        footer {
            background-color: var(--dark-color);
            color: white;
            padding: 3rem 0 1rem;
            margin-top: 4rem;
            border-radius: var(--border-radius) var(--border-radius) 0 0;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-bottom: 2rem;
        }

        .footer-section h3 {
            color: white;
            margin-bottom: 1.5rem;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section ul li {
            margin-bottom: 0.5rem;
        }

        .footer-section a {
            color: #ADB5BD;
        }

        .footer-section a:hover {
            color: white;
        }

        .social-links {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid #495057;
            color: #ADB5BD;
            font-size: 0.9rem;
        }

        /* ===== RESPONSIVE DESIGN ===== */
        @media (max-width: 768px) {
            body {
                padding: 0 10px;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            h2 {
                font-size: 1.5rem;
            }
            
            .nav-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: white;
                flex-direction: column;
                padding: 1rem;
                box-shadow: var(--box-shadow);
                z-index: 1000;
            }
            
            .nav-menu.show {
                display: flex;
            }
            
            .mobile-menu {
                display: flex;
            }
            
            .hero {
                flex-direction: column;
                text-align: center;
            }
            
            .calc-container,
            .program-content,
            .contact-container {
                grid-template-columns: 1fr;
            }
            
            .schedule {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .features-grid,
            .tips-container {
                grid-template-columns: 1fr;
            }
            
            .tabs-nav {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation Header -->
    <header>
        <nav>
            <div class="logo">
                <h1>HEALTH HUB.</h1>
                <p>Your Wellness Partner.</p>
            </div>
            <ul class="nav-menu" id="mainNav">
                <li><a href="#home" class="active" onclick="showPage('home')">Home</a></li>
                <li><a href="#nutrition" onclick="showPage('nutrition')">Nutrition Guide</a></li>
                <li><a href="#fitness" onclick="showPage('fitness')">Fitness Plans</a></li>
                <li><a href="#mental" onclick="showPage('mental')">Mental Wellness</a></li>
                <li><a href="#contact" onclick="showPage('contact')">Contact Us</a></li>
            </ul>
            <div class="mobile-menu" id="mobileMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>

    <!-- Tabs Navigation -->
    <div class="tabs-nav">
        <button class="tab-btn active" onclick="showPage('home')">🏠 Home</button>
        <button class="tab-btn" onclick="showPage('nutrition')">🥗 Nutrition</button>
        <button class="tab-btn" onclick="showPage('fitness')">💪 Fitness</button>
        <button class="tab-btn" onclick="showPage('mental')">🧠 Mental Health</button>
        <button class="tab-btn" onclick="showPage('contact')">📞 Contact</button>
    </div>

    <!-- HOME PAGE -->
    <main id="home" class="page-tabs active">
        <section class="hero">
            <div class="hero-content">
                <h1>Your Journey to Better Health Starts Here</h1>
                <p>Evidence-based health information, personalized wellness plans, and expert guidance for your holistic well-being</p>
                <a href="#features" class="cta-button" onclick="showPage('nutrition')">Explore Programs</a>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&amp;h=500&amp;fit=crop" alt="Diverse group of people exercising" width="800" height="500" />
            </div>
        </section>

        <section id="features" class="features">
            <h2>Our Health Programs</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🥗</div>
                    <h3>Nutrition Plans</h3>
                    <p>Personalized diet recommendations based on your body type and goals</p>
                    <a href="#nutrition" class="feature-link" onclick="showPage('nutrition')">Learn More →</a>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💪</div>
                    <h3>Workout Routines</h3>
                    <p>Customized exercise programs for home &amp; gym with video guides</p>
                    <a href="#fitness" class="feature-link" onclick="showPage('fitness')">Get Started →</a>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🧠</div>
                    <h3>Mental Wellness</h3>
                    <p>Stress management techniques and mindfulness practices</p>
                    <a href="#mental" class="feature-link" onclick="showPage('mental')">Explore Now →</a>
                </div>
            </div>
        </section>

        <section class="health-tips">
            <h2>Daily Health Tips</h2>
            <div class="tips-container">
                <div class="tip">
                    <h3>💧 Stay Hydrated</h3>
                    <p>Drink at least 8 glasses of water daily. Proper hydration improves digestion, skin health, and energy levels.</p>
                </div>
                <div class="tip">
                    <h3>🏃‍♂️ Regular Exercise</h3>
                    <p>30 minutes of moderate exercise daily can reduce the risk of chronic diseases by 40%.</p>
                </div>
                <div class="tip">
                    <h3>🍎 Balanced Diet</h3>
                    <p>Include all food groups: proteins, carbs, healthy fats, vitamins, and minerals in every meal.</p>
                </div>
            </div>
        </section>
    </main>

    <!-- NUTRITION PAGE -->
    <main id="nutrition" class="page-tabs">
        <section class="page-hero">
            <h1>Nutrition &amp; Diet Guide</h1>
            <p>Fuel your body with the right nutrients for optimal health</p>
        </section>

        <section class="nutrition-content">
            <div class="content-row">
                <div class="content-text">
                    <h2>Balanced Diet Essentials</h2>
                    <p>A healthy, balanced diet includes a variety of foods from all food groups to ensure you get all essential nutrients.</p>
                    
                    <div class="food-groups" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
                        <div class="food-group">
                            <h3>🥩 Proteins</h3>
                            <p>Essential for muscle repair and growth</p>
                            <ul>
                                <li>Lean meats (chicken, turkey)</li>
                                <li>Fish (salmon, tuna)</li>
                                <li>Legumes (beans, lentils)</li>
                                <li>Dairy products</li>
                            </ul>
                        </div>
                        <div class="food-group">
                            <h3>🌾 Carbohydrates</h3>
                            <p>Primary energy source for the body</p>
                            <ul>
                                <li>Whole grains (oats, brown rice)</li>
                                <li>Fruits and vegetables</li>
                                <li>Sweet potatoes</li>
                                <li>Quinoa</li>
                            </ul>
                        </div>
                        <div class="food-group">
                            <h3>🥑 Healthy Fats</h3>
                            <p>Essential for brain function and hormone production</p>
                            <ul>
                                <li>Avocados</li>
                                <li>Nuts and seeds</li>
                                <li>Olive oil</li>
                                <li>Fatty fish</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section class="meal-plan">
                <h2>Sample Daily Meal Plan</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Meal</th>
                            <th>Time</th>
                            <th>Food Items</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Breakfast</td>
                            <td>7:00 - 8:00 AM</td>
                            <td>Oatmeal with fruits &amp; nuts</td>
                            <td>350 kcal</td>
                        </tr>
                        <tr>
                            <td>Mid-Morning</td>
                            <td>10:30 - 11:00 AM</td>
                            <td>Apple with peanut butter</td>
                            <td>200 kcal</td>
                        </tr>
                        <tr>
                            <td>Lunch</td>
                            <td>1:00 - 2:00 PM</td>
                            <td>Grilled chicken salad with quinoa</td>
                            <td>450 kcal</td>
                        </tr>
                        <tr>
                            <td>Evening Snack</td>
                            <td>4:30 - 5:00 PM</td>
                            <td>Greek yogurt with berries</td>
                            <td>150 kcal</td>
                        </tr>
                        <tr>
                            <td>Dinner</td>
                            <td>7:00 - 8:00 PM</td>
                            <td>Fish with steamed vegetables</td>
                            <td>400 kcal</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3"><strong>Total Daily Calories</strong></td>
                            <td><strong>1550 kcal</strong></td>
                        </tr>
                    </tfoot>
                </table>
            </section>

            <section class="audio-section">
                <h2>Listen to Nutrition Tips</h2>
                <div class="audio-player">
                    <audio id="nutritionAudio" controls="">
                        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <div class="audio-controls">
                        <button onclick="playAudio('nutritionAudio')" class="audio-btn">▶️ Play</button>
                        <button onclick="pauseAudio('nutritionAudio')" class="audio-btn">⏸️ Pause</button>
                        <button onclick="restartAudio('nutritionAudio')" class="audio-btn">🔄 Restart</button>
                    </div>
                </div>
            </section>

            <section class="calculator">
                <h2>Hydration Calculator</h2>
                <div class="calc-container">
                    <div class="calc-input">
                        <label for="weight">Your Weight (kg):</label>
                        <input type="number" id="weight" placeholder="Enter weight" min="30" max="200" />
                        <button onclick="calculateWater()" class="submit-btn">Calculate</button>
                    </div>
                    <div class="calc-result">
                        <h3 id="water-result">Recommended Daily Water: -- liters</h3>
                        <p>Based on your weight, drink 30-35 ml of water per kg of body weight.</p>
                    </div>
                </div>
            </section>
        </section>
    </main>

    <!-- FITNESS PAGE -->
    <main id="fitness" class="page-tabs">
        <section class="page-hero">
            <h1>Fitness &amp; Exercise Plans</h1>
            <p>Transform your body with science-backed workout programs</p>
        </section>

        <section class="fitness-programs">
            <h2>Choose Your Fitness Level</h2>
            
            <div class="program-card beginner">
                <div class="program-header">
                    <span class="program-level">Level 1</span>
                    <h3>Beginner Program</h3>
                    <p class="program-duration">4-Week Starter Plan</p>
                </div>
                <div class="program-content">
                    <div class="program-details">
                        <h4>Workout Schedule</h4>
                        <div class="schedule">
                            <div class="day">
                                <h5>Monday</h5>
                                <p>Full Body Workout</p>
                            </div>
                            <div class="day">
                                <h5>Tuesday</h5>
                                <p>Cardio &amp; Core</p>
                            </div>
                            <div class="day">
                                <h5>Wednesday</h5>
                                <p>Rest or Yoga</p>
                            </div>
                            <div class="day">
                                <h5>Thursday</h5>
                                <p>Full Body Workout</p>
                            </div>
                            <div class="day">
                                <h5>Friday</h5>
                                <p>Cardio &amp; Core</p>
                            </div>
                            <div class="day">
                                <h5>Weekend</h5>
                                <p>Active Recovery</p>
                            </div>
                        </div>
                        
                        <div class="exercises">
                            <h4>Key Exercises:</h4>
                            <ul>
                                <li>Bodyweight Squats - 3 sets of 12 reps</li>
                                <li>Push-ups (knee) - 3 sets of 10 reps</li>
                                <li>Plank - 3 sets of 30 seconds</li>
                                <li>Walking Lunges - 3 sets of 10 each leg</li>
                                <li>Brisk Walking - 20 minutes daily</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section class="calculator">
                <h2>Calorie Burn Calculator</h2>
                <div class="calc-container">
                    <div class="calc-input">
                        <label for="activity">Select Activity:</label>
                        <select id="activity">
                            <option value="walking">Walking (4 mph)</option>
                            <option value="running">Running (6 mph)</option>
                            <option value="cycling">Cycling (12-14 mph)</option>
                            <option value="swimming">Swimming</option>
                            <option value="weight">Weight Training</option>
                        </select>
                        
                        <label for="duration">Duration (minutes):</label>
                        <input type="number" id="duration" placeholder="30" min="10" max="180" />
                        
                        <label for="user-weight">Your Weight (kg):</label>
                        <input type="number" id="user-weight" placeholder="70" min="40" max="150" />
                        
                        <button onclick="calculateCalories()" class="submit-btn">Calculate Burn</button>
                    </div>
                    <div class="calc-result">
                        <h3 id="calorie-result">Estimated Calories Burned: --</h3>
                        <div class="calorie-info">
                            <p>MET values used for calculation:</p>
                            <ul>
                                <li>Walking: 3.5 MET</li>
                                <li>Running: 10 MET</li>
                                <li>Cycling: 8 MET</li>
                                <li>Swimming: 6 MET</li>
                                <li>Weight Training: 5 MET</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </main>

    <!-- MENTAL HEALTH PAGE -->
    <main id="mental" class="page-tabs">
        <section class="page-hero">
            <h1>Mental Wellness Resources</h1>
            <p>Nurture your mind, heal your soul, embrace peace</p>
        </section>

        <section class="meditation-section">
            <h2>Guided Meditation &amp; Mindfulness</h2>
            
            <div class="meditation-content">
                <div class="meditation-audio">
                    <h3>Calming Meditation</h3>
                    <div class="audio-player">
                        <audio id="meditationAudio" controls="" loop="">
                            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        <div class="audio-controls">
                            <button onclick="playAudio('meditationAudio')" class="audio-btn">▶️ Play</button>
                            <button onclick="pauseAudio('meditationAudio')" class="audio-btn">⏸️ Pause</button>
                            <button onclick="restartAudio('meditationAudio')" class="audio-btn">🔄 Restart</button>
                        </div>
                    </div>
                    
                    <div class="meditation-guide">
                        <h4>Meditation Instructions:</h4>
                        <ol>
                            <li>Find a quiet, comfortable space</li>
                            <li>Sit or lie down in a relaxed position</li>
                            <li>Close your eyes and take deep breaths</li>
                            <li>Focus on the audio guidance</li>
                            <li>If your mind wanders, gently bring it back</li>
                            <li>Practice for 5-10 minutes daily</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <section class="stress-management">
            <h2>Stress Management Techniques</h2>
            
            <div class="techniques-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin: 2rem 0;">
                <div class="technique">
                    <h3>1. Deep Breathing</h3>
                    <p>4-7-8 Breathing Method:</p>
                    <ul>
                        <li>Inhale for 4 seconds</li>
                        <li>Hold for 7 seconds</li>
                        <li>Exhale for 8 seconds</li>
                    </ul>
                    <p><strong>Repeat 5 times</strong></p>
                </div>
                
                <div class="technique">
                    <h3>2. Progressive Muscle Relaxation</h3>
                    <p>Tense and relax each muscle group:</p>
                    <ol>
                        <li>Start from toes</li>
                        <li>Move upward to calves</li>
                        <li>Continue to thighs, abdomen</li>
                        <li>Finish with face muscles</li>
                    </ol>
                </div>
                
                <div class="technique">
                    <h3>3. Mindful Walking</h3>
                    <p>Practice during daily walks:</p>
                    <ul>
                        <li>Focus on each step</li>
                        <li>Notice your surroundings</li>
                        <li>Feel the ground beneath you</li>
                        <li>Breathe rhythmically</li>
                    </ul>
                </div>
                
                <div class="technique">
                    <h3>4. Journaling</h3>
                    <p>Write daily for mental clarity:</p>
                    <ul>
                        <li>Morning pages (3 pages)</li>
                        <li>Gratitude journal</li>
                        <li>Emotion tracking</li>
                        <li>Problem-solving writing</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="self-assessment">
            <h2>Mental Well-being Check</h2>
            <p>Rate how often you've experienced these in the last week (1=Rarely, 5=Very Often)</p>
            
            <form id="assessment-form">
                <div class="assessment-question">
                    <label>I felt anxious or worried:</label>
                    <div class="rating">
                        <input type="radio" name="anxiety" value="1" id="anxiety1" /> <label for="anxiety1">1</label>
                        <input type="radio" name="anxiety" value="2" id="anxiety2" /> <label for="anxiety2">2</label>
                        <input type="radio" name="anxiety" value="3" id="anxiety3" /> <label for="anxiety3">3</label>
                        <input type="radio" name="anxiety" value="4" id="anxiety4" /> <label for="anxiety4">4</label>
                        <input type="radio" name="anxiety" value="5" id="anxiety5" /> <label for="anxiety5">5</label>
                    </div>
                </div>
                
                <div class="assessment-question">
                    <label>I had trouble sleeping:</label>
                    <div class="rating">
                        <input type="radio" name="sleep" value="1" id="sleep1" /> <label for="sleep1">1</label>
                        <input type="radio" name="sleep" value="2" id="sleep2" /> <label for="sleep2">2</label>
                        <input type="radio" name="sleep" value="3" id="sleep3" /> <label for="sleep3">3</label>
                        <input type="radio" name="sleep" value="4" id="sleep4" /> <label for="sleep4">4</label>
                        <input type="radio" name="sleep" value="5" id="sleep5" /> <label for="sleep5">5</label>
                    </div>
                </div>
                
                <div class="assessment-question">
                    <label>I felt energetic and motivated:</label>
                    <div class="rating">
                        <input type="radio" name="energy" value="1" id="energy1" /> <label for="energy1">1</label>
                        <input type="radio" name="energy" value="2" id="energy2" /> <label for="energy2">2</label>
                        <input type="radio" name="energy" value="3" id="energy3" /> <label for="energy3">3</label>
                        <input type="radio" name="energy" value="4" id="energy4" /> <label for="energy4">4</label>
                        <input type="radio" name="energy" value="5" id="energy5" /> <label for="energy5">5</label>
                    </div>
                </div>
                
                <button type="button" onclick="calculateAssessment()" class="submit-btn">Get Assessment</button>
                
                <div id="assessment-result" class="result-box">
                    <h3>Your Mental Well-being Score: <span id="score">--</span></h3>
                    <p id="score-message">Complete the assessment to see your results</p>
                </div>
            </form>
        </section>
    </main>

    <!-- CONTACT PAGE -->
    <main id="contact" class="page-tabs">
        <section class="page-hero">
            <h1>Contact HealthHub</h1>
            <p>We're here to help you on your wellness journey</p>
        </section>
        
        <div class="contact-container">
            <section class="contact-form-section">
                <h2>Send Us a Message</h2>
                <form id="contact-form">
                    <div class="form-group">
                        <label for="contact-name">Full Name *</label>
                        <input type="text" id="contact-name" name="name" required="" placeholder="Enter your full name" />
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-email">Email Address *</label>
                        <input type="email" id="contact-email" name="email" required="" placeholder="your.email@example.com" />
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-phone">Phone Number</label>
                        <input type="tel" id="contact-phone" name="phone" placeholder="+91 9876543210" />
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-subject">Subject *</label>
                        <select id="contact-subject" name="subject" required="">
                            <option value="">Select a topic</option>
                            <option value="nutrition">Nutrition &amp; Diet Query</option>
                            <option value="fitness">Fitness &amp; Exercise</option>
                            <option value="mental">Mental Health Support</option>
                            <option value="general">General Inquiry</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-message">Your Message *</label>
                        <textarea id="contact-message" name="message" rows="6" required="" placeholder="Please describe your inquiry in detail..."></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="newsletter" checked="" />
                            Subscribe to our wellness newsletter
                        </label>
                    </div>
                    
                    <button type="button" onclick="submitContactForm()" class="submit-btn">Send Message →</button>
                    
                    <div id="form-message" class="message-box" style="display: none; padding: 1rem; margin-top: 1rem; border-radius: var(--border-radius);"></div>
                </form>
            </section>
            
            <section class="contact-info-section">
                <h2>Get in Touch</h2>
                
                <div class="contact-info">
                    <div class="info-item">
                        <div class="info-icon">📧</div>
                        <div class="info-content">
                            <h3>Email Us</h3>
                            <p>info@healthhub.com</p>
                            <p>support@healthhub.com</p>
                            <p class="response-time">Response time: 24-48 hours</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">📱</div>
                        <div class="info-content">
                            <h3>Call Us On</h3>
                            <p>+233 53 760 1628</p>
                            <p>+233 53 534 6411</p>
                            <p class="timing">Mon-Fri: 9 AM - 6 PM GMT</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">📍</div>
                        <div class="info-content">
                            <h3>Visit Us</h3>
                            <p>HealthHub Wellness Center</p>
                            <p>123 Wellness Street</p>
                            <p>Greater Accra, WestHills Mall 110001</p>
                            <p>Ghana</p>
                        </div>
                    </div>
                </div>
                
                <div class="emergency-contacts">
                    <h3>Emergency Health Contacts (India)</h3>
                    <div class="emergency-grid">
                        <div class="emergency-card">
                            <h4>🚑 Ambulance</h4>
                            <p>National: 102</p>
                            <p>Delhi: 102 or 1099</p>
                        </div>
                        <div class="emergency-card">
                            <h4>🧠 Mental Health</h4>
                            <p>Vandrevala: 1860-266-2345</p>
                            <p>iCall: 9152987821</p>
                        </div>
                        <div class="emergency-card">
                            <h4>🏥 COVID Helpline</h4>
                            <p>National: 1075</p>
                            <p>Delhi: 1031</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        <section class="faq-section">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-container">
                <div class="faq-item">
                    <h3>Q: Is HealthHub free to use?</h3>
                    <p>A: Yes! All the information and resources on our website are completely free. We believe wellness education should be accessible to everyone.</p>
                </div>
                
                <div class="faq-item">
                    <h3>Q: Do you provide personalized diet plans?</h3>
                    <p>A: We provide general nutrition guidelines. For personalized diet plans, we recommend consulting with a registered dietitian or nutritionist.</p>
                </div>
                
                <div class="faq-item">
                    <h3>Q: Are your fitness programs suitable for beginners?</h3>
                    <p>A: Absolutely! We have specific beginner programs with detailed instructions and modifications for all fitness levels.</p>
                </div>
                
                <div class="faq-item">
                    <h3>Q: How can I book an appointment with a wellness expert?</h3>
                    <p>A: Please use the contact form above, and our team will connect you with certified wellness experts based on your needs.</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>HealthHub</h3>
                <p>Promoting holistic wellness through evidence-based practices</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home" onclick="showPage('home')">Home</a></li>
                    <li><a href="#nutrition" onclick="showPage('nutrition')">Nutrition</a></li>
                    <li><a href="#fitness" onclick="showPage('fitness')">Fitness</a></li>
                    <li><a href="#mental" onclick="showPage('mental')">Mental Health</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Follow Us</h3>
                <div class="social-links">
                    <a href="#">📘 Facebook</a>
                    <a href="#">📷 Instagram</a>
                    <a href="#">🐦 Twitter</a>
                    <a href="#">🎬 YouTube</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Health &amp; Wellness Hub. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Page Navigation
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-tabs');
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.classList.add('active');
            }
            
            // Update navigation active state
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${pageId}`) {
                    link.classList.add('active');
                }
            });
            
            // Update tab buttons
            const tabBtns = document.querySelectorAll('.tab-btn');
            tabBtns.forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent.includes(pageId.charAt(0).toUpperCase() + pageId.slice(1))) {
                    btn.classList.add('active');
                }
            });
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Mobile Menu Toggle
        document.getElementById('mobileMenu').addEventListener('click', function() {
            const navMenu = document.getElementById('mainNav');
            navMenu.classList.toggle('show');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const navMenu = document.getElementById('mainNav');
            const mobileMenu = document.getElementById('mobileMenu');
            
            if (!navMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
                navMenu.classList.remove('show');
            }
        });

        // Audio Controls
        function playAudio(audioId) {
            const audio = document.getElementById(audioId);
            audio.play().catch(e => console.log("Audio play failed:", e));
        }

        function pauseAudio(audioId) {
            const audio = document.getElementById(audioId);
            audio.pause();
        }

        function restartAudio(audioId) {
            const audio = document.getElementById(audioId);
            audio.currentTime = 0;
            audio.play().catch(e => console.log("Audio play failed:", e));
        }

        // Hydration Calculator
        function calculateWater() {
            const weightInput = document.getElementById('weight');
            const weight = parseFloat(weightInput.value);
            
            if (!weight || weight < 30 || weight > 200) {
                alert('Please enter a valid weight between 30 and 200 kg');
                return;
            }
            
            const waterNeeded = (weight * 0.035).toFixed(2);
            document.getElementById('water-result').textContent = 
                `Recommended Daily Water: ${waterNeeded} liters`;
        }

        // Calorie Burn Calculator
        function calculateCalories() {
            const activity = document.getElementById('activity').value;
            const duration = parseFloat(document.getElementById('duration').value);
            const weight = parseFloat(document.getElementById('user-weight').value);
            
            if (!duration || !weight) {
                alert('Please enter duration and weight');
                return;
            }
            
            const metValues = {
                'walking': 3.5,
                'running': 10,
                'cycling': 8,
                'swimming': 6,
                'weight': 5
            };
            
            const met = metValues[activity] || 5;
            const calories = (met * weight * duration / 60).toFixed(0);
            
            document.getElementById('calorie-result').textContent = 
                `Estimated Calories Burned: ${calories} kcal`;
        }

        // Mental Health Assessment
        function calculateAssessment() {
            const anxiety = getSelectedValue('anxiety');
            const sleep = getSelectedValue('sleep');
            const energy = getSelectedValue('energy');
            
            if (!anxiety || !sleep || !energy) {
                alert('Please answer all questions');
                return;
            }
            
            const energyPositive = 6 - parseInt(energy);
            const total = parseInt(anxiety) + parseInt(sleep) + energyPositive;
            const average = (total / 3).toFixed(1);
            
            document.getElementById('score').textContent = average + '/5';
            
            let message = '';
            let color = '';
            
            if (average <= 2) {
                message = 'Excellent! You seem to be managing your mental well-being effectively.';
                color = '#4CAF50';
            } else if (average <= 3) {
                message = 'Good! You\'re doing well, but consider incorporating more self-care practices.';
                color = '#8BC34A';
            } else if (average <= 4) {
                message = 'Moderate. Consider practicing stress management techniques more regularly.';
                color = '#FFC107';
            } else {
                message = 'High. It might be beneficial to seek professional support or increase self-care activities.';
                color = '#F44336';
            }
            
            const messageElement = document.getElementById('score-message');
            messageElement.textContent = message;
            messageElement.style.color = color;
        }

        function getSelectedValue(name) {
            const selected = document.querySelector(`input[name="${name}"]:checked`);
            return selected ? selected.value : null;
        }

        // Contact Form Submission
        function submitContactForm() {
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const message = document.getElementById('contact-message').value.trim();
            
            if (!name || !email || !message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showMessage('Message sent successfully! We will get back to you soon.', 'success');
            
            // Clear form
            document.getElementById('contact-form').reset();
        }

        function showMessage(text, type) {
            const messageBox = document.getElementById('form-message');
            messageBox.textContent = text;
            messageBox.style.backgroundColor = type === 'error' ? '#f8d7da' : '#d4edda';
            messageBox.style.color = type === 'error' ? '#721c24' : '#155724';
            messageBox.style.display = 'block';
            
            setTimeout(() => {
                messageBox.style.display = 'none';
            }, 5000);
        }

        function isValidEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        // Initialize with Home page
        document.addEventListener('DOMContentLoaded', function() {
            showPage('home');
        });
    </script>
</body>
</html>


      
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.1.0/anchor.min.js" integrity="sha256-lZaRhKri35AyJSypXXs4o6OPFTbTmUoltBbDCbdzegg=" crossorigin="anonymous"></script>
    <script>anchors.add();</script>
  </body>
</html>

