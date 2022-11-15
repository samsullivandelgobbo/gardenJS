<script>
  import { onMount } from "svelte";
  import Header from "$lib/Header.svelte";

  let titles;
  onMount(async () => {
    fetch("/")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        titles = data;
      });
  });

  let title = "My Digital Garden";
</script>

<div class="drawer drawer-mobile">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          >
        </label>
      </div>
      <div class="flex-1" />
      <div class="flex-1 px-2 mx-2 lg:hidden justify-end">{title}</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Other Social</a></li>
          <li><a>Github</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    <slot />
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay" />

    <ul class="menu w-80 bg-base-100">
      <li>
        <div class="hidden lg:flex w-full bg-base-300 min-h-16 sticky">
          <a class="w-full px-4" href="/">{title}</a>
        </div>
      </li>
      <div class="p-4">
        {#if titles}
          {#each titles as title}
            <ul>
              <li><a href="/{title}">{title}</a></li>
            </ul>
          {/each}
        {/if}
      </div>
    </ul>
  </div>
</div>
