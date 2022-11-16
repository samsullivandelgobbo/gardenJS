<script>
  import { afterUpdate } from "svelte";
  export let data;

  afterUpdate(async () => {
    console.log("nested client", data);
  });
</script>

<div class="container mx-auto">
  <div class="flex flex-row justify-start p-4">
    <h1>{data.data}</h1>
  </div>
  <div class="flex p-4 ">
    <p>{data.data}</p>
  </div>
</div>
