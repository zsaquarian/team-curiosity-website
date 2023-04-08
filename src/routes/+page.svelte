<script lang="ts">
  import Bibliography from '$lib/Bibliography.svelte';
	import Hardware from '$lib/Hardware.svelte';
  import Introduction from '$lib/Introduction.svelte';
	import Software from '$lib/Software.svelte';
  import { Tab, TabGroup } from '@skeletonlabs/skeleton'

  let tabSet = 0;
</script>

<main class="lg:w-1/2 lg:mx-auto">
  <h1 class="text-center bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone m-2">Team Curiosity</h1>
  <TabGroup>
    <Tab bind:group={tabSet} name="intro" value={0}>Introduction</Tab>
    <Tab bind:group={tabSet} name="hardware" value={1}>Hardware</Tab>
    <Tab bind:group={tabSet} name="software" value={2}>Software</Tab>
    <Tab bind:group={tabSet} name="simulation" value={3}>Simulation</Tab>
    <Tab bind:group={tabSet} name="bibliography" value={4}>Bibliography</Tab>
    <svelte:fragment slot="panel">
      {#if tabSet === 0}
        <Introduction />
      {:else if tabSet === 1}
        <Hardware />
      {:else if tabSet === 2}
        <Software />
      {:else if tabSet === 3}
        <iframe src="https://editor.p5js.org/zsaquarian/full/HwMyEBwC5" title="Simulation" class="mx-auto w-full h-[40rem]"></iframe>
      {:else if tabSet === 4}
        <Bibliography />
      {/if}
    </svelte:fragment>
  </TabGroup>
  <div class="absolute bottom-2 right-2">
    <p>By Team Curiosity</p>
    <a href="https://github.com/zsaquarian/">Github</a>
  </div>
</main>
