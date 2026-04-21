const services = [
  {
    title: "Automatisations de tâches",
    copy: "Remplacer les actions répétitives par des flux fiables : saisie, relances, contrôles, notifications, mises à jour.",
  },
  {
    title: "Micro-logiciels internes",
    copy: "Créer des outils simples, adaptés aux méthodes de travail de l’entreprise, sans ajouter une plateforme générique.",
  },
  {
    title: "Reporting et données",
    copy: "Consolider, transformer et présenter les informations utiles pour réduire les manipulations manuelles.",
  },
];

const domains = [
  "Comptabilité",
  "Finance",
  "Opérations",
  "Management",
  "Workflows internes",
  "Reporting",
];

export function Services() {
  return (
    <section id="services" className="bg-[#f7f8fb] px-5 pb-16 pt-18 md:px-8 md:pb-20 md:pt-24 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.46fr_0.54fr] lg:items-end">
          <div>
            <p className="mb-6 border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
              Ce que nous faisons
            </p>
            <h2 className="max-w-4xl text-[2.5rem] font-[650] leading-[1.02] text-[#111318] md:text-[4.1rem]">
              Des systèmes sur mesure pour réduire le travail manuel.
            </h2>
          </div>
          <p className="max-w-2xl text-[1.05rem] leading-8 text-[#4f5b6b]">
            Processium identifie les tâches chronophages dans vos processus internes, puis développe des micro-logiciels adaptés à votre organisation. L’objectif est simple : gagner du temps, réduire les manipulations et améliorer l’efficacité opérationnelle.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="bg-white p-6 shadow-[0_24px_70px_rgba(17,24,39,0.06)] md:p-8">
              <p className="text-[0.78rem] font-semibold text-[#1473e6]">0{index + 1}</p>
              <h3 className="mt-12 max-w-sm text-[2rem] font-[650] leading-tight text-[#111318]">{service.title}</h3>
              <p className="mt-5 max-w-md text-[1rem] leading-7 text-[#586374]">{service.copy}</p>
            </article>
          ))}
        </div>

        <div id="domains" className="mt-10 grid gap-0 bg-white/78 shadow-[0_24px_70px_rgba(17,24,39,0.05)] md:grid-cols-[0.34fr_1fr]">
          <div className="p-6 md:p-8">
            <p className="text-[0.78rem] font-semibold uppercase text-[#667085]">Domaines d’intervention</p>
            <p className="mt-4 max-w-sm text-[1.15rem] font-semibold leading-7 text-[#111318]">
              Des systèmes conçus pour les fonctions qui manipulent beaucoup d’informations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => (
              <div key={domain} className="p-6 md:p-8">
                <p className="text-[1.08rem] font-semibold text-[#111318]">{domain}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
