<script>
  import {onMount} from 'svelte';
  import Header from '$lib/Header.svelte'
  
  let titles
  onMount(async () => {
    const response = await fetch("/", {
    method: "GET",
    
  })

let data = await response.text()
console.log(data)
titles = data.split(",")
console.log(titles[0])


  
  })

  let title = "My Digital Garden"
</script>

<Header {title}>
  <div slot="main">
    <slot/>
  </div>
  <div slot="sidebar">
    {#if titles}
    {#each titles as title}
    <ul>
      <li><a href="/{title}">{title}</a></li>
    </ul>
    {/each}
    {/if}
  </div>
</Header>
