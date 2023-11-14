import { fail } from "@sveltejs/kit";
import nodemailer from "nodemailer";

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
    title: "Notes",
    description: "A simple note taking app.",
    url: "https://github.com/matteac/notes",
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

const transporter = nodemailer.createTransport({
  host: import.meta.env.VITE_EMAIL_HOST,
  port: Number(import.meta.env.VITE_EMAIL_PORT),
  auth: {
    user: import.meta.env.VITE_EMAIL_SENDER,
    pass: import.meta.env.VITE_EMAIL_PASS,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

export async function load() {
  return { projects: projects };
}

export const actions = {
  send_email: async ({ request }: { request: Request }) => {
    console.log("sending email");
    try {
      const data = await request.formData();
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const message = data.get("message") as string;
      if (!name || !email || !message) {
        return fail(400, { error: "Missing required fields" });
      }
      let msg_body = `Name: ${name}\nEmail: ${email}\n${message}`;
      transporter.sendMail(
        {
          from: email,
          to: import.meta.env.VITE_EMAIL_ADDRESSE,
          subject: "[PORTFOLIO] Message from " + name,
          text: msg_body,
        },
        // @ts-ignore
        (err, info) => {
          if (err) {
            console.error(err);
            return fail(400, { error: err });
          }
          console.log(info);
          return { success: true };
        },
      );
    } catch (error) {
      console.log(error);
      return fail(400, { error });
    }
  },
};
