<script lang="ts">
  import DownArrow from "$lib/icons/DownArrow.svelte";

  export let data: any;
</script>

<svelte:head>
  <title>Mateo Acuña</title>
  <meta name="description" content="Mateo Acuña Portfolio" />
  <meta name="keywords" content="Mateo Acuña, Portfolio, Software Engineer" />
</svelte:head>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
  <main class="w-full h-screen flex flex-col justify-center items-center">
    <h1 class="text-5xl">
      Hi! I'm <a
        href="https://github.com/matteac"
        referrerpolicy="no-referrer"
        target="_blank"
        class="font-extrabold text-secondary-500">Mateo Acuña</a
      >
    </h1>
    <a href="#about" class="absolute bottom-0">
      <DownArrow
        classname="text-tertiary-800 hover:text-tertiary-400"
        height="64"
        width="64"
      />
    </a>
  </main>

  <article
    id="about"
    class="h-screen w-10/12 flex flex-col justify-center items-center relative"
  >
    <p class="text-xl">
      I'm a high school student with a passion for programming, but I'll be the
      first to admit that I'm not much of a frontend enthusiast. My true
      interests lie in languages like Rust and Go, although I wouldn't call
      myself an expert just yet. I've also dabbled in Svelte and web
      development, but my heart is more in the backend and systems programming.
    </p>
    <a href="#projects" class="absolute bottom-0 self-center justify-self-end">
      <DownArrow
        classname="text-tertiary-800 hover:text-tertiary-400"
        height="64"
        width="64"
      />
    </a>
  </article>

  <section class="h-screen">
    <div
      id="projects"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {#each data.projects as project}
        <div
          class="card m-2 pb-3 pt-2 justify-center items-center space-y-2 flex flex-col"
        >
          <h2 class="text-2xl font-bold">{project.title}</h2>
          <p>{project.description}</p>
          <p>
            Tech:{#each project.technologies as tech}<span class="pl-1"
                >{tech}</span
              >{/each}
          </p>
          <img
            class="w-5/6 rounded-lg"
            src={project.image}
            alt={project.title}
          />
          <a
            class="font-bold text-lg py-2 w-4/6 h-auto rounded-lg bg-primary-700 hover:bg-primary-500 flex justify-center"
            target="_blank"
            referrerpolicy="no-referrer"
            href={project.url}>See Project</a
          >
        </div>
      {/each}
    </div>
  </section>
</div>
