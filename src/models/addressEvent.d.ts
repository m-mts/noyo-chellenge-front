import type { Address } from "./address";
import type { EventType } from "./eventType";

export interface AddressEvent{
    id: number;
    type: EventType;
    meta_data: Record<string, unknown>; //????
    payload: Address;
    created_at: Date;
    url: string;
}