<script lang="ts">
	import type { AddressEvent } from '../../models/addressEvent';

	import { currentAddress, selectedEvents } from '../../stores/stores';
	import { Config } from '../../config';

	import EventView from './event.svelte';
	import { fetchEvents } from '../../lib/eventsFetcher';

	let events: AddressEvent[] = [];
	let showCompareBtn: Boolean = false;
	selectedEvents.subscribe(
		(evntMap) => showCompareBtn = evntMap.size >= Config.compareEventsAmount
	);
	currentAddress.subscribe(async (addr) => (events = await fetchEvents(addr)));
</script>

<h2>Events <a sveltekit:prefetch href="/compare" class:hidden={!showCompareBtn}>Compare</a></h2>
{#each events as event}
	<EventView addressEvent={event} />
{/each}

<style lang="postcss">
	a {
		@apply bg-blue-400 text-sm text-white rounded-3xl px-4 py-2 float-right
            hover:bg-blue-700 
            focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50;
	}
	a.hidden {
		@apply hidden;
	}
	h2 {
		@apply sticky top-0 bg-white m-0 p-3;
	}
</style>
