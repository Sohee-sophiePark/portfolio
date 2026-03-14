import { Download } from "lucide-react";

const RESUME_FILES = [
  { label: "Download Resume", file: "/resume.pdf" },
  { label: "Download Resume (alt)", file: "/resume-alt.pdf" },
];

export default function Resume() {
  return (
    <section id="resume" className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-2xl text-text-primary mb-6">Resume</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          {RESUME_FILES.map(({ label, file }) => (
            <a
              key={file}
              href={file}
              download
              className="inline-flex items-center justify-center gap-2 border border-border rounded-lg px-6 py-3 text-sm text-text-primary hover:border-accent hover:text-accent transition-colors"
            >
              <Download size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
