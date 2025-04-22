/* js/script.js */
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    location.href = "investigate.html";
  });
  
  document.getElementById("registerForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    location.href = "index.html";
  });
  
  document.getElementById("dataForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    // Simulação de dados para exibição na dashboard
    localStorage.setItem("dieta", JSON.stringify({
      calorias: 2200,
      proteinas: 150,
      carboidratos: 250,
      gorduras: 70,
      refeicoes: [
        "Café da manhã: ovos mexidos + pão integral",
        "Almoço: frango grelhado + arroz integral + salada",
        "Lanche: iogurte + castanhas",
        "Jantar: omelete + legumes"
      ]
    }));
    location.href = "dashboard.html";
  });
  
  if (window.location.pathname.includes("dashboard.html")) {
    const dieta = JSON.parse(localStorage.getItem("dieta"));
    const container = document.getElementById("dietInfo");
    if (dieta) {
      container.innerHTML = `
        <p><strong>Calorias diárias:</strong> ${dieta.calorias} kcal</p>
        <p><strong>Proteínas:</strong> ${dieta.proteinas}g</p>
        <p><strong>Carboidratos:</strong> ${dieta.carboidratos}g</p>
        <p><strong>Gorduras:</strong> ${dieta.gorduras}g</p>
        <h2>Refeições:</h2>
        <ul>${dieta.refeicoes.map(r => `<li>${r}</li>`).join('')}</ul>
      `;
    }
  }
  