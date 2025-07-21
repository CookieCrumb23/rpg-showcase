<script lang="ts">
	import '../app.css';
	import Menu from '$lib/Menu.svelte';
</script>

<div class="min-h-screen flex flex-col">
	<Menu />
	<slot />
	<footer class="mt-auto pt-10 p-4 text-center">Contains AI generated content</footer>
</div>
