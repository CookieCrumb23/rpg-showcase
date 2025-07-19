<script lang="ts">
	import '../app.css';
	import Menu from '$lib/Menu.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Menu />
	<slot />
	<footer
		class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mt-auto"
	>
		<aside>
			<p class="text-">Contains AI generated content</p>
		</aside>
	</footer>
</div>
