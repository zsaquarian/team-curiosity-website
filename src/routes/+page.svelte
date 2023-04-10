<script lang="ts">
  import Bibliography from '$lib/Bibliography.svelte';
	import Hardware from '$lib/Hardware.svelte';
  import Introduction from '$lib/Introduction.svelte';
	import Software from '$lib/Software.svelte';
  import { AppBar, AppShell, Drawer, Tab, TabGroup, drawerStore } from '@skeletonlabs/skeleton'

  let tabSet = 0;
</script>

<svelte:head>
  <title>Team Curiosity - TechRadiance IIT Hyderabad</title>
</svelte:head>
  
<Drawer>
    <TabGroup class="m-2"  justify="justify-center flex-col text-orange-300">
      <Tab bind:group={tabSet} name="intro" value={0}>Introduction</Tab>
      <Tab bind:group={tabSet} name="hardware" value={1}>Hardware</Tab>
      <Tab bind:group={tabSet} name="software" value={2}>Software</Tab>
      <Tab bind:group={tabSet} name="simulation" value={3}>Simulation</Tab>
      <Tab bind:group={tabSet} name="bibliography" value={4}>Bibliography</Tab>
    </TabGroup>
    <div class="absolute bottom-4 left-4">
      <p class="text-orange-300">By Team Curiosity</p>
      <a href="https://github.com/zsaquarian/">Github</a>
    </div>
</Drawer>
<AppShell slotPageHeader="hidden lg:block lg:w-1/2 lg:mx-auto">
  <svelte:fragment slot="header">
    <AppBar>
    <svelte:fragment slot="default">
      <h1 class="text-center bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone m-2">Team Curiosity</h1>
    </svelte:fragment>
    <svelte:fragment slot="lead">
    <div class="flex items-center">
        <button class="lg:hidden btn btn-sm mr-4" on:click={() => {
            drawerStore.open({
              width: 'w-72 p-4'
            });
            }}>
            <span>
                <svg viewBox="0 0 100 80" class="w-4 h-4 fill-orange-300">
                    <rect width="100" height="20" />
                    <rect y="30" width="100" height="20" />
                    <rect y="60" width="100" height="20" />
                </svg>
            </span>
        </button>
    </div>
</svelte:fragment>
        </AppBar>
  </svelte:fragment>
  <svelte:fragment slot="pageHeader">
    <TabGroup class="m-2"  justify="justify-center text-orange-300">
      <Tab bind:group={tabSet} name="intro" value={0}>Introduction</Tab>
      <Tab bind:group={tabSet} name="hardware" value={1}>Hardware</Tab>
      <Tab bind:group={tabSet} name="software" value={2}>Software</Tab>
      <Tab bind:group={tabSet} name="simulation" value={3}>Simulation</Tab>
      <Tab bind:group={tabSet} name="bibliography" value={4}>Bibliography</Tab>
    </TabGroup>
  </svelte:fragment>
    <slot>
    <div class="lg:w-1/2 m-10 lg:mx-auto text-blue-300">
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
        <div>
    </slot>
</AppShell>
<div class="absolute bottom-4 right-4 hidden lg:block">
  <p class="text-orange-300">By Team Curiosity</p>
  <a href="https://github.com/zsaquarian/">Github</a>
</div>
