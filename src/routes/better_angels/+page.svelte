<script lang="ts">
	export let data;
	import Hero from '$lib/Hero.svelte';

	const { image, title, text } = data;
</script>

<Hero {image} {title} {text} />