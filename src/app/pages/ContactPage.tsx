import { PageHeader } from "../components/PageHeader";
import { ShuffleButton } from "../components/badtz/ShuffleButton";
import { SiteContainer } from "../components/SiteContainer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const briefingPoints = [
  {
    title: "Le processus",
    copy: "Décrivez la tâche ou le workflow qui paraît aujourd'hui trop manuel, trop lent ou trop fragmenté.",
  },
  {
    title: "Les outils",
    copy: "Partagez les systèmes, tableurs ou outils internes actuellement impliqués dans le processus.",
  },
  {
    title: "Le coût temps",
    copy: "Estimez le temps pris aujourd'hui par la tâche et l'endroit où la friction principale apparaît.",
  },
];

export function ContactPage() {
  useDocumentMeta(
    "Contact | Processium",
    "Contactez Processium pour discuter d'un processus métier répétitif, des outils actuels et des opportunités de système technique sur mesure."
  );

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Commencer par un seul processus à accélérer."
        copy="La première conversation la plus utile est spécifique. Partagez le workflow, les outils actuels, le temps consommé et ce qui le rendrait nettement meilleur."
        actions={<ShuffleButton href="mailto:hello@processium.com">hello@processium.com</ShuffleButton>}
      />

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-6 border border-[#dfe5ee] bg-white p-6 shadow-[0_26px_80px_rgba(17,24,39,0.06)] md:p-8 lg:grid-cols-[0.48fr_0.52fr] lg:p-10">
            <div>
              <p className="border-l-2 border-[#1473e6] pl-3 text-[0.78rem] font-semibold uppercase text-[#667085]">
                Premier échange
              </p>
              <h2 className="mt-6 max-w-[12ch] text-[2rem] font-[650] leading-[1.04] text-[#111318] md:text-[3rem]">
                Un brief sérieux est souvent simple.
              </h2>
            </div>

            <div className="grid gap-5">
              <p className="max-w-2xl text-[1rem] leading-8 text-[#526073]">
                Processium n'a pas besoin d'un deck de transformation pour commencer. Une description claire du processus suffit pour évaluer si un système technique sur mesure peut réduire le temps et améliorer l'exécution.
              </p>
              <p className="text-[0.96rem] font-semibold text-[#1473e6]">Contact privilégié: hello@processium.com</p>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-[#f7f8fb] py-8 md:py-12 lg:py-16">
        <SiteContainer>
          <div className="grid gap-5 md:grid-cols-3">
            {briefingPoints.map((item) => (
              <article key={item.title} className="border border-[#dfe5ee] bg-white p-6 shadow-[0_22px_60px_rgba(17,24,39,0.05)] md:p-8">
                <h2 className="text-[1.7rem] font-[650] leading-[1.04] text-[#111318]">{item.title}</h2>
                <p className="mt-4 text-[1rem] leading-8 text-[#526073]">{item.copy}</p>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
