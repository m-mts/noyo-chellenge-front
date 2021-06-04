<script lang="ts">
    import type {AddressEvent} from '../../models/addressEvent';
    import {readableEventType} from '../../models/eventType';
    import {selectedEvents} from '../../stores/stores';
    import { get } from 'svelte/store';

    export let addressEvent: AddressEvent;
    let evntMap = get(selectedEvents);
    let checked = evntMap.has(addressEvent.id);
    let disabled = evntMap.size>1 && !checked;
    
    selectedEvents.subscribe(evntMap => {
        checked = evntMap.has(addressEvent.id);
        disabled = evntMap.size>1 && !checked;
    });
    
    const addRemoveEvent = (event) =>{
        selectedEvents.update(evntMap => {
            if(event.target.checked){
                evntMap.set(addressEvent.id, addressEvent);
            }
            else{
                evntMap.delete(addressEvent.id);
            }
            checked = event.target.checked;
            return evntMap;
        });
    }
</script>
<div>
    <input type="checkbox" 
            value="{addressEvent.id}" 
            name="event-{addressEvent.id}" 
            id="event-{addressEvent.id}" 
            on:change="{e => addRemoveEvent(e)}" 
            bind:checked="{checked}"
            disabled={disabled}>
    <label for="event-{addressEvent.id}">{readableEventType.get(addressEvent.type)}</label>
    <span>{addressEvent.created_at}</span>
</div>
<style  lang="postcss">
    div{
        @apply shadow-sm grid grid-cols-12 py-1 gap-1;
    }
    input{
        @apply lg:col-span-1 col-span-2 relative top-1 left-2;
    }
    label{
        @apply lg:col-span-5 col-span-4
    }
    span{
        @apply text-sm col-span-6 relative top-1;
    }
    
</style>