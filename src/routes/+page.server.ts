import fs from "node:fs/promises";

type Project = {
  title: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
};

const projects: Project[] = await fs
  .readFile("/static/projects.json", "utf8")
  .then((data) => JSON.parse(data));

projects.map((project) => {
  if (!project.image) {
    project.image = "/default.jpg";
  }
  if (!project.technologies) {
    project.technologies = [];
  }
  if (!project.description) {
    project.description = "";
  }
  if (!project.title) {
    project.title = "Placeholder";
  }
});

export async function load() {
  return { projects: projects };
}
