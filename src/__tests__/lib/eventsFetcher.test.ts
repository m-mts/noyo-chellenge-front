import type { Address } from '../../models/address';
import { fetchEvents } from '../../lib/eventsFetcher';
import fetchMock from "jest-fetch-mock";

describe.only('Address Events fetcher tests', () => {
    fetchMock.enableMocks();
    beforeEach(() => {
        fetchMock.resetMocks();
    });
    test("should return fetched events", async () => {
        fetchMock.mockResponseOnce(JSON.stringify([{"id": 2},{"id": 8}]));
        const events = await fetchEvents({ id: 'eddress-id' } as Address);

        expect(events.length).toBe(2);
        expect(events[0].id).toBe(2);
        expect(events[1].id).toBe(8);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
    test("should return empty array of events if address not specified", async () => {
        fetchMock.mockResponseOnce(JSON.stringify([{"id": 2},{"id": 8}]));
        const events = await fetchEvents(null);

        expect(events.length).toBe(0);
        expect(fetch).not.toHaveBeenCalled();
    });
    test("should return no events if error", async () => {
        fetchMock.mockReject(()=>Promise.reject("Error"));
        const events = await fetchEvents({ id: 'eddress-id' } as Address);

        expect(events.length).toBe(0);
        expect(fetch).toHaveBeenCalled();
    });
});