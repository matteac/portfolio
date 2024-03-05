<script lang="ts">
  export let title: string;
  export let description: string;
  export let repo_link: string;
  export let tags: string[];
  export let image: string;
</script>


<article
  class="card rounded-none m-2 pb-3 justify-center items-center space-y-2 flex flex-col"
>
  <div class="p-2 flex flex-col gap-2 justify-center items-center">
    <h3 class="font-bold h3">
      {title}
    </h3>
    <p>
      {description}
    </p>
    <div class="flex flex-wrap gap-2">
      {#each tags as tag}
        <span class="rounded-md border border-gray-200 px-2 py-0.5 text-sm bg-gray-100 dark:bg-gray-800 dark:border-gray-800 border-gray-200">
          {tag}
        </span>
      {/each}
    </div>
    <img
      loading="lazy"
      class="w-5/6 "
      src={image}
      alt={title}
    />
  </div>
  <a
    class="font-bold text-lg py-2 w-4/6 h-auto rounded-none btn variant-filled-secondary flex justify-center"
    target="_blank"
    referrerpolicy="no-referrer"
    href={repo_link}>View on GitHub</a
  >
</article>





