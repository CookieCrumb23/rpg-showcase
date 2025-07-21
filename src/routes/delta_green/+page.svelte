<script lang="ts">
	export let data: Metadata;
	import Hero from '$lib/Hero.svelte';

	const metadata: Metadata = data;
</script>

<Hero {metadata} />

