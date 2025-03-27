import { Head } from "$fresh/runtime.ts";
import Header from "@/components/homepage/Header.tsx";
import Footer from "@/components/homepage/Footer.tsx";
import ContactForm from "@/islands/contact/ContactForm.tsx";
import { languageSignal } from "@/utils/languageState.ts";

const content = {
  en: {
    title: "Contact Us",
    subtitle: "Get in touch with us",
    description:
      "Have a question or want to work together? We'd love to hear from you.",
    businessInfo: {
      name: "Akordium Lab",
      address: "Jl. Veteran No. 142-144, Malang, East Java",
      phone: "+62 812-3456-7890",
      email: "hello@akordium.id",
    },
  },
  id: {
    title: "Hubungi Kami",
    subtitle: "Mari Terhubung",
    description:
      "Punya pertanyaan atau ingin bekerja sama? Kami senang mendengar dari Anda.",
    businessInfo: {
      name: "Akordium Lab",
      address: "Jl. Veteran No. 142-144, Malang, Jawa Timur",
      phone: "+62 812-3456-7890",
      email: "hello@akordium.id",
    },
  },
  jv: {
    title: "Hubungi Kita",
    subtitle: "Ayo Sambung",
    description:
      "Nduwe pitakonan utowo pengen kerjo bareng? Kita seneng ngrungokno sampean.",
    businessInfo: {
      name: "Akordium Lab",
      address: "Jl. Veteran No. 142-144, Malang, Jowo Timur",
      phone: "+62 812-3456-7890",
      email: "hello@akordium.id",
    },
  },
};

export default function Contact() {
  const currentContent = content[languageSignal.value];

  return (
    <>
      <Head>
        <title>{currentContent.title} - Akordium</title>
      </Head>
      <Header />
      <main class="bg-base min-h-screen">
        <section class="py-16 md:py-24">
          <div class="container mx-auto px-4">
            <div class="text-center mb-12">
              <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">
                {currentContent.title}
              </h1>
              <p class="text-xl text-gray-600 mb-2">
                {currentContent.subtitle}
              </p>
              <p class="text-gray-600 max-w-2xl mx-auto">
                {currentContent.description}
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div class="md:col-span-2">
                <ContactForm />
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg h-fit">
                <h3 class="font-bold text-xl text-primary mb-4">
                  {currentContent.businessInfo.name}
                </h3>
                <div class="space-y-4">
                  <p class="flex items-start gap-3">
                    <svg
                      class="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{currentContent.businessInfo.address}</span>
                  </p>
                  <p class="flex items-center gap-3">
                    <svg
                      class="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>{currentContent.businessInfo.phone}</span>
                  </p>
                  <p class="flex items-center gap-3">
                    <svg
                      class="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{currentContent.businessInfo.email}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
