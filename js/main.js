document.addEventListener("DOMContentLoaded", ()=>{
  Engine.load();
  UI.init();
  Pay.handleReturn().then(r=>{ if(r) UI.showPayResult(r); });

  document.querySelector(".brand").addEventListener("click", (e)=>{
    if(e.target.closest("#btn-theme")) return;
    UI.showHome();
  });

  document.getElementById("btn-theme").addEventListener("click", ()=>{
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try{ localStorage.setItem("dojo-theme", next); }catch(e){}
  });

  // Enter = Verificar / Siguiente (si no hay un botón enfocado)
  document.addEventListener("keydown", (e)=>{
    if(e.key !== "Enter" || e.target.closest("button")) return;
    const b = document.querySelector("#action-row #btn-check, #action-row .btn-next");
    if(b){ e.preventDefault(); b.click(); }
  });
});
