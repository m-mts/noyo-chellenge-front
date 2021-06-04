<script lang="ts">
    import type {Address} from '../../models/address';
    import { readableAddressFields } from '../../models/address';
    
    export let address: Address;
</script>

<dl>
    {#each Array.from(readableAddressFields.keys()) as key,r}
        <dt class:bg="{r % 2 == 0}">{readableAddressFields.get(key)}:</dt>
        <dd class:bg="{r % 2 == 0}">{address[key]}</dd>
    {/each}
</dl>

<style  lang="postcss">
    dl{
        @apply grid grid-cols-4 p-0 rounded-md shadow-md mb-3 hover:border-indigo-300 hover:shadow border border-dotted text-sm;
    }
    dt{
        @apply font-normal p-0.5 pl-2 bg-blue-100;
    }
    dd{
        @apply col-span-3 p-0.5 font-extralight;
    }
    dt.bg{
        @apply bg-blue-300 bg-opacity-50;
    }
    dd.bg{
        @apply bg-gray-100 bg-opacity-50;
    }
</style>