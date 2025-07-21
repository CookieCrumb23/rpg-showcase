<script lang="ts">
	import '../app.css';
	import Menu from '$lib/Menu.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Menu />
	<slot />
</div>