<script lang="ts">
    import type { User } from '../../models/user';
    import { currentUserId } from '../../stores/stores';
    import { get } from 'svelte/store';
    import { afterUpdate } from 'svelte';

    export let users: User[] = [];

    const userSelected = (event) => {
        currentUserId.set(event.target.value);
    }

    afterUpdate(() => {
        if(!get(currentUserId)) currentUserId.set(users?.[0]?.user_id);
    });
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select on:change="{userSelected}" data-testid="user-id-select">
    {#each users as user}
        <option value="{user.user_id}" selected="{user.user_id == get(currentUserId)}">{user.user_id}</option>
    {/each}
</select>