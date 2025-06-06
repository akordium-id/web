import { languageSignal } from "@/utils/languageState.ts";
import { useState } from "preact/hooks";

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
      message: "Write your message here...",
    },
    errors: {
      name: "Name is required",
      email: "Please enter a valid email address",
      phone: "Please enter a valid phone number",
      subject: "Subject is required",
      message: "Message is required",
    },
    success: "Message sent successfully!",
    error: "Failed to send message. Please try again.",
    required: "Required field",
    maxLength: {
      name: "Maximum 50 characters",
      subject: "Maximum 100 characters",
      message: "Maximum 500 characters",
    },
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
      message: "Tulis pesan Anda di sini...",
    },
    errors: {
      name: "Nama harus diisi",
      email: "Masukkan alamat email yang valid",
      phone: "Masukkan nomor telepon yang valid",
      subject: "Subjek harus diisi",
      message: "Pesan harus diisi",
    },
    success: "Pesan berhasil dikirim!",
    error: "Gagal mengirim pesan. Silakan coba lagi.",
    required: "Wajib diisi",
    maxLength: {
      name: "Maksimal 50 karakter",
      subject: "Maksimal 100 karakter",
      message: "Maksimal 500 karakter",
    },
  },
  jv: {
    name: "Jeneng Lengkap",
    email: "Alamat Email",
    phone: "Nomor Telpon",
    subject: "Subjek",
    message: "Pesen",
    submit: "Kirim Pesen",
    placeholders: {
      name: "Isien jeneng lengkap sampean",
      email: "Isien alamat email sampean",
      phone: "Isien nomor telpon sampean",
      subject: "Opo sing arep dirembug?",
      message: "Tulis pesen sampean nang kene...",
    },
    errors: {
      name: "Jeneng kudu diisi",
      email: "Isien alamat email sing bener",
      phone: "Isien nomor telpon sing bener",
      subject: "Subjek kudu diisi",
      message: "Pesen kudu diisi",
    },
    success: "Pesen wis dikirim!",
    error: "Gagal ngirim pesen. Monggo dicoba maneh.",
    required: "Kudu diisi",
    maxLength: {
      name: "Maksimal 50 karakter",
      subject: "Maksimal 100 karakter",
      message: "Maksimal 500 karakter",
    },
  },
};

export default function ContactForm() {
  const currentContent = content[languageSignal.value];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      (newErrors as { [key: string]: string }).name =
        currentContent.errors.name;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      (newErrors as { [key: string]: string }).email =
        currentContent.errors.email;
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone) {
      const phoneRegex =
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(formData.phone)) {
        (newErrors as { [key: string]: string }).phone =
          currentContent.errors.phone;
      }
    }

    // Subject validation
    if (!formData.subject.trim()) {
      (newErrors as { [key: string]: string }).subject =
        currentContent.errors.subject;
    }

    // Message validation
    if (!formData.message.trim() && formData.message.length < 6) {
      (newErrors as { [key: string]: string }).message =
        currentContent.errors.message;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (name in errors && errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: currentContent.success,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.message || currentContent.error);
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : currentContent.error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      {status.message && (
        <div
          className={`mb-6 p-4 rounded-md ${
            status.type === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}
      <p className="text-sm text-gray-500 mb-4">
        <span className="text-red-500">*</span> {currentContent.required}
      </p>

      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {currentContent.name} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={50}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                (errors as { [key: string]: string }).name
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder={currentContent.placeholders.name}
            />
            <div className="flex justify-between">
              {(errors as { [key: string]: string }).name && (
                <p className="mt-1 text-sm text-red-600">
                  {(errors as { [key: string]: string }).name}
                </p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                {formData.name.length}/50
              </p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {currentContent.email} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                (errors as { [key: string]: string }).email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder={currentContent.placeholders.email}
            />
            {(errors as { [key: string]: string }).email && (
              <p className="mt-1 text-sm text-red-600">
                {(errors as { [key: string]: string }).email}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {currentContent.phone}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                (errors as { [key: string]: string }).phone
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder={currentContent.placeholders.phone}
            />
            {(errors as { [key: string]: string }).phone && (
              <p className="mt-1 text-sm text-red-600">
                {(errors as { [key: string]: string }).phone}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {currentContent.subject} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              maxLength={100}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary ${
                (errors as { [key: string]: string }).subject
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder={currentContent.placeholders.subject}
            />
            <div className="flex justify-between">
              {(errors as { [key: string]: string }).subject && (
                <p className="mt-1 text-sm text-red-600">
                  {(errors as { [key: string]: string }).subject}
                </p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                {formData.subject.length}/100
              </p>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {currentContent.message} <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={500}
            rows={6}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none ${
              (errors as { [key: string]: string }).message
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder={currentContent.placeholders.message}
          >
          </textarea>
          <div className="flex justify-between">
            {(errors as { [key: string]: string }).message && (
              <p className="mt-1 text-sm text-red-600">
                {(errors as { [key: string]: string }).message}
              </p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              {formData.message.length}/500
            </p>
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-primary text-white py-3 px-6 rounded-md transition-colors ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-primary/90"
            }`}
          >
            {isSubmitting ? "Sending..." : currentContent.submit}
          </button>
        </div>
      </div>
    </form>
  );
}
