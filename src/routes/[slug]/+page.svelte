<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  let content;
  onMount(async () => {
    // get the slug from the URL
    const slug = $page.params.slug;
    console.log(slug);
    fetch(`/${slug}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        content = data;
      });
  });
</script>

<h1>{content}</h1>
