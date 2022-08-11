<script type="ts">
  export let name;
  export let count;
  import LayoutList from "tabler-icons-svelte/icons/LayoutList.svelte";
</script>

<section class="list-section">
  <h2><slot name="icon"><LayoutList /></slot>{name}{#if count}<small>{ count }</small>{/if}</h2>
  <slot />
</section>