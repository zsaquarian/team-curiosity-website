<script lang="ts">
	import { ProgressRadial } from "@skeletonlabs/skeleton";

  let loading = true;
</script>
 
{#if loading}
  <ProgressRadial class="mx-auto w-8" />
{/if}
<iframe src="https://editor.p5js.org/zsaquarian/full/HwMyEBwC5" title="Simulation" class="mx-auto w-full h-[40rem]" class:hidden={loading} on:load={() => loading = false}></iframe>
