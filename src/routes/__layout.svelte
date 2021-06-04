<script lang="ts">
    import "../app.postcss";
    import { currentUserId } from '../stores/stores';

    function handleKeydown(event) {
		if(event.key == "R"){
            window.location.href = "/";
            currentUserId.set(null);
        }
	}
</script>
<header>
    <img src="//images.ctfassets.net/0c15lmv0zrz0/29dlBRjD0kKK69rfOlvrj4/f15b80836de56fa10b982cd7fcf8f587/Noyo-logo.png?w=240&amp;q=100" alt="Noyo">
    <h1>
        Front-End Coding Challenge
    </h1>
</header>

<main>
    <slot />
</main>
<svelte:window on:keydown={handleKeydown}/>
<style  lang="postcss">
    header{
        @apply px-10 pt-3 fixed top-0 bg-gray-50 w-screen shadow-md z-50
    }
    main{
        @apply relative top-14 z-0 h-full;
    }
    header>img{
        @apply w-32;
    }
    header>h1{
        @apply text-sm uppercase relative bottom-2 ml-1 left-24 rounded inline-block px-1 bg-gradient-to-r from-blue-100
    }
</style>