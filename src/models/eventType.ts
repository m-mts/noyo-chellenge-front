export enum EventType{
    ADDRESS_CREATED,
    ADDRESS_UPDATED,
    ADDRESS_DELETED,
    ADDRESS_RESTORED
};

export const readableEventType = Object.freeze(new Map([
    [EventType.ADDRESS_CREATED, "Created"],
    [EventType.ADDRESS_UPDATED, "Updated"],
    [EventType.ADDRESS_DELETED, "Deleted"],
    [EventType.ADDRESS_RESTORED, "Restored"]
    ]));