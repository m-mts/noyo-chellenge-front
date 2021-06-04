<script lang="ts">
    import { currentAddress, currentUserId } from '../../stores/stores';
    import { get } from 'svelte/store';
    import {Config} from '../../config';
    import type {Address} from '../../models/address';
    import AddressView from './address.svelte';

    let addresses: Address[] = [];
    let selectedAddressId: string = get(currentAddress)?.id;

    currentUserId.subscribe(async (val) => {
        if(val){
            const res = await fetch(`${Config.apiBaseURL}/users/${val}/addresses`);
            if(res.ok){
                const _addresses = await res.json();
                addresses = _addresses as Address[];
            }
            else addresses = [];
        }
        else addresses = [];
    } );
    
    const addressSelected:any = (address: Address) => {
        currentAddress.set(address);
        selectedAddressId = address.id;
    }
</script>

<h2> Address Information </h2>
{#each addresses as address}
    <div class:active="{address.id == selectedAddressId}" on:click="{addressSelected(address)}">
        <AddressView address="{address}"></AddressView>
    </div>
{/each}
<style  lang="postcss">
    div.active > :global(dl){
        @apply border border-solid border-purple-500 shadow-none;
    }
    h2{
        @apply sticky top-0 bg-white m-0 p-3;
    }
    div{
        @apply mx-4
    }
</style>