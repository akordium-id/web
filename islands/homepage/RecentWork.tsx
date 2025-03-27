import { languageSignal } from "@/utils/languageState.ts";

const content = {
  en: {
    title: "Our Recent Work",
    description:
      "Check out some of the cool projects we've worked on. From sleek websites to powerful apps, we build digital experiences that make an impact.",
    projects: [
      {
        title: "Customize Marketing Platform",
        description:
          "Custom marketing platform with advanced filtering and customer personalization",
        image:
          "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Business Process Automation",
        description:
          "Desktop robotic automation for streamlined and efficient business processes",
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Comprehensive analytics dashboard with customizable charts and reports",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      },
    ],
  },
  id: {
    title: "Karya Terbaru Kami",
    description:
      "Lihat beberapa proyek keren yang telah kami kerjakan. Dari website elegan hingga aplikasi powerful, kami membangun pengalaman digital yang berdampak.",
    projects: [
      {
        title: "Platform Marketing Kustom",
        description:
          "Platform marketing khusus dengan filter canggih dan personalisasi pelanggan",
        image:
          "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      },
      {
        title: "Otomasi Proses Bisnis",
        description:
          "Otomasi robotik desktop untuk proses bisnis yang efisien dan terstruktur",
        image:
          "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      },
      {
        title: "Dashboard Analitik",
        description:
          "Dashboard analitik komprehensif dengan grafik dan laporan yang dapat disesuaikan",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
  title: "Garapan Anyar Awak Dewe",
    description:
      "Deloken proyek-proyek jos seng wes tak gawe. Teko website seng apik sampek aplikasi seng canggih, awak dewe nggawe pengalaman digital seng nggawe dampak.",
    projects: [
      {
        title: "Platform Marketing Kustom",
        description:
          "Platform marketing khusus ambek filter canggih lan personalisasi pelanggan",
        image:
          "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      },
      {
        title: "Otomasi Proses Bisnis",
        description:
          "Otomasi robotik desktop gawe proses bisnis ben luwih efisien lan teratur",
        image:
          "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      },
      {
        title: "Dashboard Analitik",
        description:
          "Dashboard analitik lengkap ambek grafik lan laporan seng iso disesuekno",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
};

export default function RecentWork() {
  const currentContent = content[languageSignal.value];

  return (
    <section className="py-16 bg-gradient-to-br from-base via-primary/5 to-base">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {currentContent.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {currentContent.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentContent.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#projects"
            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 py-3 font-medium transition-colors"
          >
            View more projects →
          </a>
        </div>
      </div>
    </section>
  );
}
