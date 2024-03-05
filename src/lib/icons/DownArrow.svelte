<script lang="ts">
  export let height: string = "32";
  export let width: string = "32";
  export let classname: string = "";
</script>

<svg 
  class={classname}
  xmlns="http://www.w3.org/2000/svg"
  width={width} 
  height={height} 
  viewBox="0 0 24 24"  
  fill="none" 
>
  <path
    clip-rule="evenodd"
    d="M6.92893 10.3431L12 15.4142L17.0711 10.3431L18.4853 11.7573L12 18.2426L5.51472 11.7573L6.92893 10.3431Z"
    fill="currentColor"
    fill-rule="evenodd"
  />
</svg>

<style>
  svg {
    border-radius: 50%;
    padding-bottom: 4px;
  }
  svg:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
</style>
