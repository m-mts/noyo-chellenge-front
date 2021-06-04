import { Config } from "../config";
import type { Address } from "../models/address";
import type { AddressEvent } from "../models/addressEvent";
import { EventType } from "../models/eventType";

export async function fetchEvents(addr: Address): Promise<AddressEvent[]> {
    if (!addr) return Promise.resolve([]);
    try {
        const res = await fetch(`${Config.apiBaseURL}/addresses/${addr.id}/events`);

        return Promise.resolve((await res.json()).map(
            (e) => ({ ...e, type: EventType[e.type as keyof typeof EventType] } as AddressEvent)
        ));
    }
    catch {
        return Promise.resolve([]);
    }
}