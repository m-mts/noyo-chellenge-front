<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
    import {selectedEvents} from '../stores/stores';
    import {Config} from '../config';
    import { get } from 'svelte/store';
    import type { Address } from '../models/address';
    import { readableAddressFields } from '../models/address';

	export const load: Load = async ({ fetch }) => {
        const responces = await Promise.all(Array.from(get(selectedEvents).values()).map(evnt => fetch(`${Config.apiBaseURL}${evnt.url}`)));
		
		if (responces.every(responce => responce.ok)) {
			const addresses = await Promise.all(responces.map(async responce => await responce.json()));
            const addressesData:Map<keyof Address, Set<unknown>> = new Map();
                addresses.forEach(addr => Object.entries(addr).forEach(entry => {
                        const propName = entry?.[0] as keyof Address;
                        const data:Set<any> = addressesData.has(propName)? addressesData.get(propName):new Set();
                        data.add(entry?.[1]);
                        addressesData.set(propName, data)
                    }));
			return {
				props: { addressesData }
			};
		}

		const messages = await Promise.all(responces.map(async responce => await responce.json()));

		return {
			error: new Error(messages.join(' '))
		}; 
	};
</script>

<script lang="ts">
    export let addressesData: Map<keyof Address, Set<unknown>> = new Map();
</script>

<div class="page">
    <div class="links"><a href="/">Go Back</a></div>
    {#if addressesData.size>0}
        <dl>

            {#each Array.from(readableAddressFields.keys()) as key, r}
            {#if addressesData.has(key)}
                <dt class="col-start-1" class:bg="{r % 2 == 0}">{readableAddressFields.get(key)}:</dt>
                {#each Array.from(addressesData.get(key)?.values()) as value} 
                    <dd class:bg="{r % 2 == 0}" 
                        class:same-value="{addressesData.get(key).size == 1}"
                        class:col-span-1="{addressesData.get(key).size == 2}"
                    >{value}</dd>
                {/each}
            {/if}
            {/each}
        </dl>
    {:else}
        <p>Error: events not selected</p>
    {/if}
</div>

<style lang="postcss">
    .page {
        @apply m-9 p-4 h-96 overflow-hidden;
        height: calc(100% - 104px);
    }
    div.links{
        @apply mb-4;
    }
    a {
        @apply bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-sm text-white rounded-3xl px-4 py-2;
    }
    dl{
        @apply p-0 rounded-md shadow-md mb-3 border text-sm grid grid-cols-3;
    }
    dt{
        @apply font-normal p-0.5 pl-2 bg-blue-100;
    }
    dd{
        @apply p-0.5 font-extralight text-center;
    }
    .same-value{
        @apply text-gray-400 col-span-2;
    }
    dt.bg{
        @apply bg-blue-300 bg-opacity-50;
    }
    dd.bg{
        @apply bg-gray-100 bg-opacity-50;
    }
</style>