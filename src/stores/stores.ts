import { writable } from 'svelte/store';
import type {AddressEvent} from '../models/addressEvent';

export const currentUserId = writable( null );
export const currentAddress = writable( null );
export const selectedEvents = writable( new Map<number, AddressEvent>() );
currentUserId.subscribe(() => {
    currentAddress.set(null)
});
currentAddress.subscribe(() => {
    selectedEvents.set(new Map<number, AddressEvent>())
});