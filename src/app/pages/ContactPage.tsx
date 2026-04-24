import { useState, type FormEvent } from "react";
import { SiteContainer } from "../components/SiteContainer";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

type ContactFormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  requestType: string;
  subject: string;
  message: string;
};

const initialFormState: ContactFormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  requestType: "",
  subject: "",
  message: "",
};

export function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(initialFormState);

  useDocumentMeta(
    "Contact | Processium",
    "Contactez Processium via un formulaire simple pour toute demande, projet, question ou prise de contact."
  );

  const handleFieldChange = (field: keyof ContactFormState, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = form.subject.trim() || `Contact Processium - ${form.fullName || form.company || "Demande"}`;
    const body = [
      `Nom: ${form.fullName || "Non précisé"}`,
      `Entreprise: ${form.company || "Non précisée"}`,
      `Email: ${form.email || "Non précisé"}`,
      `Téléphone: ${form.phone || "Non précisé"}`,
      `Type de demande: ${form.requestType || "Non précisé"}`,
      "",
      form.message || "Aucun message",
    ].join("\n");

    window.location.href = `mailto:hello@processium.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="bg-[#f7f8fb] pb-12 pt-[118px] md:pb-16 md:pt-[132px] lg:pb-20">
      <SiteContainer>
        <form onSubmit={handleSubmit} className="mx-auto max-w-[860px] border-t border-[#dfe5ee] pt-7 md:pt-8">
          <p className="mb-6 text-[0.84rem] text-[#667085]">Les champs marqués d’un `*` sont obligatoires.</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="contact-full-name" className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                Nom *
              </label>
              <Input
                id="contact-full-name"
                value={form.fullName}
                onChange={(event) => handleFieldChange("fullName", event.target.value)}
                placeholder="Votre nom"
                className="h-12 border-[#d9e2ee] bg-white px-4"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-company" className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                Entreprise
              </label>
              <Input
                id="contact-company"
                value={form.company}
                onChange={(event) => handleFieldChange("company", event.target.value)}
                placeholder="Votre entreprise"
                className="h-12 border-[#d9e2ee] bg-white px-4"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                Email *
              </label>
              <Input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(event) => handleFieldChange("email", event.target.value)}
                placeholder="vous@entreprise.com"
                className="h-12 border-[#d9e2ee] bg-white px-4"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-phone" className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                Téléphone
              </label>
              <Input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={(event) => handleFieldChange("phone", event.target.value)}
                placeholder="+33 ..."
                className="h-12 border-[#d9e2ee] bg-white px-4"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-request-type" className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                Type de demande *
              </label>
              <select
                id="contact-request-type"
                value={form.requestType}
                onChange={(event) => handleFieldChange("requestType", event.target.value)}
                className="h-12 w-full border border-[#d9e2ee] bg-white px-4 text-[0.96rem] text-[#111318] outline-none transition-[box-shadow,border-color] focus:border-[#1473e6] focus:ring-4 focus:ring-[#1473e6]/10"
                required
              >
                <option value="">Sélectionner</option>
                <option value="Contact général">Contact général</option>
                <option value="Projet">Projet</option>
                <option value="Partenariat">Partenariat</option>
                <option value="Question">Question</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-subject" className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                Objet *
              </label>
              <Input
                id="contact-subject"
                value={form.subject}
                onChange={(event) => handleFieldChange("subject", event.target.value)}
                placeholder="Objet de votre message"
                className="h-12 border-[#d9e2ee] bg-white px-4"
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="contact-message" className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                Message *
              </label>
              <Textarea
                id="contact-message"
                value={form.message}
                onChange={(event) => handleFieldChange("message", event.target.value)}
                placeholder="Votre demande"
                className="min-h-[220px] border-[#d9e2ee] bg-white px-4 py-3"
                required
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center border border-[#111318] bg-[#111318] px-6 text-[0.95rem] font-semibold text-white transition-colors duration-300 hover:border-[#1473e6] hover:bg-[#1473e6]"
            >
              Envoyer
            </button>
          </div>
        </form>
      </SiteContainer>
    </section>
  );
}
