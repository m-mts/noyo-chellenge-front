<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
    import {Config} from '../config';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch(`${Config.apiBaseURL}/user_ids`);

		if (res.ok) {
			const users = await res.json();

			return {
				props: { users: users.map((uid) => ({user_id: uid} as User)) }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>
<script  lang="ts">
    import Events from "../components/Events/index.svelte";
    import AddressInformation from "../components/AddressInformation/index.svelte";
    import UserSelector from "../components/UserSelector/index.svelte";
    import type { User } from '../models/user';
    export let users: User[] = [];
</script>
<div class="page">
    <div class="w-2/3">
        <UserSelector users={users}></UserSelector>
        <div class="section -addresses">
            <AddressInformation></AddressInformation>
        </div>
    </div>
    <div class="section -events w-1/3">
        <Events></Events>
    </div>
</div>

<style lang="postcss">
    .page {
        @apply m-8 p-4 h-96 flex overflow-hidden;
        height: calc(100% - 104px);
    }
    .section{
        @apply border border-l-8 border-gray-200 bg-white py-2 rounded-md overflow-hidden
    }
    .-events{
        @apply fixed right-4 max-h-96 overflow-y-auto p-0;
    }
    .-addresses{
        @apply mt-3 mr-3 overflow-y-auto p-0;
        height: calc(100% - 20px);
    }
</style>