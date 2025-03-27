import { languageSignal } from "@/utils/languageState.ts";

const content = {
  en: {
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    subject: "Subject",
    message: "Message",
    submit: "Send Message",
    placeholders: {
      name: "Enter your full name",
      email: "Enter your email address",
      phone: "Enter your phone number",
      subject: "What is this about?",
      message: "Write your message here..."
    }
  },
  id: {
    name: "Nama Lengkap",
    email: "Alamat Email",
    phone: "Nomor Telepon",
    subject: "Subjek",
    message: "Pesan",
    submit: "Kirim Pesan",
    placeholders: {
      name: "Masukkan nama lengkap Anda",
      email: "Masukkan alamat email Anda",
      phone: "Masukkan nomor telepon Anda",
      subject: "Apa yang ingin dibicarakan?",
      message: "Tulis pesan Anda di sini..."
    }
  },
  jv: {
    name: "Jeneng Lengkap",
    email: "Alamat Email",
    phone: "Nomor Telpon",
    subject: "Subjek",
    message: "Pesen",
    submit: "Kirim Pesen",
    placeholders: {
      name: "Lebokno jeneng lengkap sampean",
      email: "Lebokno alamat email sampean",
      phone: "Lebokno nomor telpon sampean",
      subject: "Opo sing arep dirembug?",
      message: "Tulis pesen sampean nang kene..."
    }
  }
};

export default function ContactForm() {
  const currentContent = content[languageSignal.value];

  return (
    <form class="bg-white p-6 rounded-lg shadow-lg">
      <div class="grid gap-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              {currentContent.name}
            </label>
            <input
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder={currentContent.placeholders.name}
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              {currentContent.email}
            </label>
            <input
              type="email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder={currentContent.placeholders.email}
            />
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              {currentContent.phone}
            </label>
            <input
              type="tel"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder={currentContent.placeholders.phone}
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              {currentContent.subject}
            </label>
            <input
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder={currentContent.placeholders.subject}
            />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            {currentContent.message}
          </label>
          <textarea
            required
            rows={6}
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
            placeholder={currentContent.placeholders.message}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors"
          >
            {currentContent.submit}
          </button>
        </div>
      </div>
    </form>
  );
}