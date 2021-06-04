import { render, fireEvent, waitFor } from "@testing-library/svelte";
import index from "../../../components/UserSelector/index.svelte";
import type { User } from '../../../models/user';
import { currentUserId } from '../../../stores/stores';

describe.only('User Selector component tests', () => {
    let component;
    beforeEach(() => {
        component = render(index, { 
            props: { 
                users: [
                    {user_id:"user-id-1"} as User,
                    {user_id:"user-id-2"} as User
                ] } });
    });

    test("should render", () => {
        expect(() => component.getByText("user-id-1")).not.toThrow();
    });

    test("should write user_id after it selected", async () => {
        const currentUserIdSetSpy = spyOn(currentUserId, 'set');
        fireEvent.change(component.getByTestId("user-id-select"), { target: { value: 'user-id-2' } })
        await waitFor(() => expect(currentUserIdSetSpy).toBeCalledWith("user-id-2"));
    });
});