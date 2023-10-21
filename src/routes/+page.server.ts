type Project = {
  title: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Portfolio",
    description: "My personal portfolio website.",
    url: "https://github.com/matteac/portfolio",
    image: "https://portfolio-matteac.vercel.app/default.jpg",
    technologies: ["Tailwind", "TypeScript", "Svelte"],
  },
  {
    title: "ProtOrbit",
    description: "An HTTP parser written in Rust.",
    url: "https://github.com/matteac/protorbit",
    image: "https://portfolio-matteac.vercel.app/default.jpg",
    technologies: ["Rust"],
  },
  {
    title: "Breakout clone",
    description: "A clone of the classic game Breakout.",
    url: "https://github.com/matteac/breakout",
    image: "https://portfolio-matteac.vercel.app/default.jpg",
    technologies: ["Rust", "Macroquad"],
  },
];

export async function load() {
  return { projects: projects };
}
