<script lang="ts">
  import DownArrow from "$lib/icons/DownArrow.svelte";
  import GitHub from "$lib/icons/GitHub.svelte";
  import Twitter from "$lib/icons/Twitter.svelte";
  import {style} from "svelte-body"

  export let data: any;
</script>

<svelte:head>
  <title>Mateo Acuña</title>
</svelte:head>

<svelte:body use:style={{backgroundColor:"#040616"}} />

<div
  class="container h-full w-screen mx-auto flex flex-col justify-center items-center"
>
  <nav
    class="z-20 w-screen h-11 space-x-3 p-3 flex items-center sticky mr-0 top-0 bg-secondary-600"
  >
    <a
      title="Go to GitHub"
      href="https://github.com/matteac"
      referrerpolicy="no-referrer"
      target="_blank"
      class="text-2xl font-extrabold text-gray-600 hover:text-gray-50"
    >
      <GitHub height="32" width="32" />
    </a>
    <a
      title="Go to Twitter"
      href="https://twitter.com/matteac_mem"
      referrerpolicy="no-referrer"
      target="_blank"
      class="text-2xl font-extrabold text-gray-600 hover:text-gray-50"
    >
      <Twitter height="32" width="32" />
    </a>
  </nav>

  <header class="w-full h-screen flex flex-col justify-center items-center">
    <h1 class="text-5xl">
      Hi! I'm <a
        title="Go to GitHub"
        href="https://github.com/matteac"
        referrerpolicy="no-referrer"
        target="_blank"
        class="font-extrabold text-secondary-500">Mateo Acuña</a
      >
    </h1>
    <a title="Scroll to about" href="#about" class="absolute bottom-0">
      <DownArrow
        classname="text-tertiary-800 hover:text-tertiary-400"
        height="64"
        width="64"
      />
    </a>
  </header>

  <main
    id="about"
    class="h-screen space-y-10 w-10/12 flex flex-col justify-center items-center relative"
  >
    <h2 class="text-5xl">About me</h2>
    <p class="text-xl">
      I'm a high school student with a passion for programming, but I'll be the
      first to admit that I'm not much of a frontend enthusiast. My true
      interests lie in languages like Rust and Go, although I wouldn't call
      myself an expert just yet. I've also dabbled in Svelte and web
      development, but my heart is more in the backend and systems programming.
    </p>
    <a title="Scroll to projects" href="#projects" class="absolute bottom-0 self-center justify-self-end">
      <DownArrow
        classname="text-tertiary-800 hover:text-tertiary-400"
        height="64"
        width="64"
      />
    </a>
  </main>

  <section 
    class="min-h-screen pt-24 flex flex-col items-center space-y-10 relative" id="projects">
    <h2 class="text-5xl">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {#each data.projects as project}
        <article
          class="card rounded-none m-2 pb-3 pt-2 justify-center items-center space-y-2 flex flex-col"
        >
          <h3 class="text-2xl font-bold">{project.title}</h3>
          <p>{project.description}</p>
          <p>
            Tech:{#each project.technologies as tech}<span class="pl-1"
                >{tech}</span
              >{/each}
          </p>
          <img
            loading="lazy"
            class="w-5/6 "
            src={project.image}
            alt={project.title}
          />
          <a
            title="See project"
            class="font-bold text-lg py-2 w-4/6 h-auto rounded-none btn variant-filled-secondary flex justify-center"
            target="_blank"
            referrerpolicy="no-referrer"
            href={project.url}>See Project</a
          >
        </article>
      {/each}
    </div>
  </section>



  <section
    id="contact"
    class="h-screen w-full pt-24 flex flex-col items-center space-y-10 z-20">
    <h2 class="text-5xl">Contact</h2>
    <form action="?/send_email" method="POST" class="flex flex-col text-lg font-bold md:w-2/3 lg:w-2/3 xl:w-1/3 space-y-2 justify-center text-gray-900">
      <input class="p-2" type="text" name="name" placeholder="Your name" />
      <input class="p-2" type="email" name="email" placeholder="Your email" />
      <textarea class="p-2" name="message" placeholder="Your message" rows="5" />
      <button type="submit" class="btn variant-filled-secondary rounded-none">Send</button>
    </form>
    <p> or send me an  
      <a href="mailto:matteac.rs.dev@outlook.com" class="underline text-tertiary-400">email</a>
    </p>
  </section>
</div>

<style>
  header {
    margin-top: -2.75rem;
  }
</style>
