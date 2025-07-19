<script lang="ts">
	import { navRoutes } from '$lib/navRoutes';
	import { base } from '$app/paths';
</script>

<div class="absolute top-0 left-0 drawer z-auto">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="p-3 drawer-content">
		<!-- Page content here -->
		<label for="my-drawer" class=" drawer-button">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		</label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
			{#each navRoutes as {href, label}}
			<li><a href="{base}/{href}">{label}</a></li>
				{/each}
		</ul>
	</div>
</div>