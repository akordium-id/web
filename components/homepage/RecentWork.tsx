import { translate } from "@/utils/i18n.ts";

const projectImages = [
  "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];

export default function RecentWork({ lang }: { lang: string }) {
  const projects = [
    {
      title: translate("project1_title", lang),
      description: translate("project1_desc", lang),
      image: projectImages[0],
    },
    {
      title: translate("project2_title", lang),
      description: translate("project2_desc", lang),
      image: projectImages[1],
    },
    {
      title: translate("project3_title", lang),
      description: translate("project3_desc", lang),
      image: projectImages[2],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-base via-primary/5 to-base">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {translate("recent_work_title", lang)}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {translate("recent_work_desc", lang)}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
            href={`/${lang}/projects`}
            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 py-3 font-medium transition-colors"
          >
            {translate("view_more_projects", lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
