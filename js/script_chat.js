document.addEventListener("DOMContentLoaded", () => {
  // Animation du titre
  const titles = ["Data Analyst", "BI Specialist"];
  let index = 0;
  const titleEl = document.getElementById("animated-title");
  if (titleEl) {
    function rotateTitle() {
      titleEl.textContent = titles[index];
      index = (index + 1) % titles.length;
      setTimeout(rotateTitle, 2500);
    }
    rotateTitle();
  }

  // Mode sombre amélioré
  const themeToggle = document.getElementById("themeToggle");
  function setThemeIcon() {
    themeToggle.innerHTML = document.body.classList.contains("dark-mode")
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  }
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      setThemeIcon();
    });
    setThemeIcon();
  }

// Traduction instantanée (FR/EN)
const translations = {
  fr: {
    name: "Karelle",
    home: "Accueil",
    profile: "Profil",
    projects: "Mes Projets",
    contact: "Me contacter",
    skills: "Compétences",
    send: "Envoyer",
    all: "Tous",
    analysis: "Analyses",
    dashboard: "Dashboards",
    prediction: "Prédictions",
    profile_text: "Les données ont une valeur immense, à condition de savoir les exploiter efficacement. À travers une analyse rigoureuse et une structuration pertinente, je transforme l’information brute en solutions exploitables et adaptées aux enjeux. Mon approche structurée me permet de traduire des données en insights concrets pour les équipes stratégiques, marketing ou commerciales, afin de les aider à prendre des décisions éclairées et performantes. Si vous souhaitez échanger autour de projets data ou explorer de nouvelles opportunités, je serais ravie de discuter et de construire ensemble des solutions adaptées.",
    python: "Python",
    r: "R",
    sql: "SQL",
    powerbi: "Power BI",
    excel: "Excel",
    looker: "Looker Studio",
    github: "GitHub",
    bigquery: "Google BigQuery",
    powerquery: "Power Query",
    dax: "DAX",
    data_analysis: "Analyse de données",
    data_analysis_desc: "📊 Nettoyage, structuration, exploration",
    modeling: "Modélisation",
    modeling_desc: "🤖 ML supervisé, prédiction, scoring",
    visualization: "Visualisation",
    visualization_desc: "📈 Dashboards, KPIs, automatisation",
    analytical_mind: "Esprit analytique",
    teamwork: "Travail d'équipe",
    organization: "Organisation",
    autonomy: "Autonomie",
    proactivity: "Proactivité",
    contact_placeholder_name: "Nom",
    contact_placeholder_email: "Email",
    contact_placeholder_subject: "Objet du message",
    contact_placeholder_message: "Message",
    contact_success: "Merci ! Votre message a été envoyé.",
    no_project: "Aucun projet disponible dans cette catégorie."
  },
  en: {
    name: "Karelle",
    home: "Home",
    profile: "Profile",
    projects: "My Projects",
    contact: "Contact me",
    skills: "Skills",
    send: "Send",
    all: "All",
    analysis: "Analysis",
    dashboard: "Dashboards",
    prediction: "Predictions",
    profile_text: "Data has immense value, provided it is used effectively. Through rigorous analysis and relevant structuring, I turn raw information into actionable solutions tailored to your challenges. My structured approach allows me to translate data into concrete insights for strategic, marketing, or sales teams, helping them make informed and effective decisions. If you would like to discuss data projects or explore new opportunities, I would be happy to talk and build tailored solutions together.",
    python: "Python",
    r: "R",
    sql: "SQL",
    powerbi: "Power BI",
    excel: "Excel",
    looker: "Looker Studio",
    github: "GitHub",
    bigquery: "Google BigQuery",
    powerquery: "Power Query",
    dax: "DAX",
    data_analysis: "Data Analysis",
    data_analysis_desc: "📊 Cleaning, structuring, exploration",
    modeling: "Modeling",
    modeling_desc: "🤖 Supervised ML, prediction, scoring",
    visualization: "Visualization",
    visualization_desc: "📈 Dashboards, KPIs, automation",
    analytical_mind: "Analytical mind",
    teamwork: "Teamwork",
    organization: "Organization",
    autonomy: "Autonomy",
    proactivity: "Proactivity",
    contact_placeholder_name: "Name",
    contact_placeholder_email: "Email",
    contact_placeholder_subject: "Subject",
    contact_placeholder_message: "Message",
    contact_success: "Thank you! Your message has been sent.",
    no_project: "No project available in this category."
  }
};

  let currentLang = "fr";
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("change", () => {
      currentLang = langToggle.value;
      updateLanguage();
    });
  }

  function updateLanguage() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });
    // Placeholders du formulaire de contact
    const form = document.getElementById("contactForm");
    if (form) {
      const inputs = form.querySelectorAll("input, textarea");
      if (inputs[0]) inputs[0].placeholder = translations[currentLang].contact_placeholder_name;
      if (inputs[1]) inputs[1].placeholder = translations[currentLang].contact_placeholder_email;
      if (inputs[2]) inputs[2].placeholder = translations[currentLang].contact_placeholder_subject;
      if (inputs[3]) inputs[3].placeholder = translations[currentLang].contact_placeholder_message;
      form.querySelector("button[type=submit]").textContent = translations[currentLang].send;
    }
    // Filtres projets
    document.querySelectorAll(".filter-btn").forEach(btn => {
      const key = btn.getAttribute("data-i18n");
      if (translations[currentLang][key]) btn.textContent = translations[currentLang][key];
    });
    // Soft refresh des projets
    renderProjects(currentFilter);
  }

  // 📁 Projets (exemple, adapte selon tes projets)
const projects = [
  {
    title: "Analyse RH",
    title_en: "HR Analysis",
    category: "analyse",
    description: "Cette analyse vise à identifier et comprendre les différences de performance entre les départements afin d’orienter des décisions RH plus justes et efficaces.",
    description_en: "This analysis aims to identify and understand performance differences between departments in order to guide fairer and more effective HR decisions.",
    image: "images/projets/hr_analysis.jpg",
    links: [
      { text: "Accéder au projet", text_en: "View project", url: "https://github.com/chapgangkarelle/Commercial_Perf_Analysis" },
      { text: "Consulter le rapport", text_en: "View report", url: "https://analyse-des-performances-yk8u1go.gamma.site/" }
    ]
  },
  {
    title: "Analyse des données de Ventes",
    title_en: "Sales Forecast",
    category: "analyse",
    description: "Ce projet a pour objectif d'analyser les données de ventes afin d'identifier des tendances, des opportunités et des points d'amélioration pour les stratégies commerciales.",
    description_en: "This project aims to analyze sales data to identify trends, opportunities, and areas for improvement in commercial strategies.",
    image: "images/projets/sales_analysis.jpg",
    links: [
      { text: "Accéder au projet", text_en: "View project", url: "https://github.com/chapgangkarelle/sales_analysis" },
      { text: "Consulter le rapport", text_en: "View report", url: "https://analyse-des-donnees-de-v-39lcxvv.gamma.site/" }
    ]
  },
  {
    title: "Dashboard SP95",
    title_en: "SP95 Dashboard",
    category: "dashboard",
    description: "Création d’un tableau de bord interactif offrant une vue rapide et intuitive des stations-service à proximité proposant du SP95 au prix le plus bas.",
    description_en: "Creation of an interactive dashboard providing a quick and intuitive view of nearby gas stations offering SP95 at the lowest price.",
    image: "images/projets/projet_sp95.png",
    links: [
      { text: "Voir le dashboard", text_en: "View dashboard", url: "https://lookerstudio.google.com/reporting/9f85fb62-49d1-4a9d-a35a-4980fe52f572" }
    ]
  }
];

  const container = document.getElementById("project-list");
  let currentFilter = "all";

  function renderProjects(filter = "all") {
    currentFilter = filter;
    if (!container) return;
    container.innerHTML = "";
    const filtered = projects.filter(p => filter === "all" || p.category === filter);
    if (filtered.length === 0) {
      container.innerHTML = `<p class="text-muted text-center">${translations[currentLang].no_project}</p>`;
    }
    filtered.forEach(p => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";
      col.innerHTML = `
        <div class="card h-100">
          <img src="${p.image}" class="card-img-top" alt="${currentLang === "fr" ? p.title : p.title_en}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${currentLang === "fr" ? p.title : p.title_en}</h5>
            <p class="card-text">${currentLang === "fr" ? p.description : p.description_en}</p>
            <div class="mt-auto">
              ${p.links.map(link => `<a href="${link.url}" target="_blank" class="btn btn-outline-primary btn-sm me-2 mb-2">${currentLang === "fr" ? link.text : link.text_en}</a>`).join('')}
            </div>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
  }

  renderProjects();

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category");
      renderProjects(cat);
    });
  });

  // 📬 Formulaire de contact
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(translations[currentLang].contact_success);
      form.reset();
    });
  }

  // Initialisation langue
  updateLanguage();
});

