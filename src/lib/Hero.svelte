<script lang="ts">
	export let metadata: Metadata;
</script>

<div class="h-screen">
	<div class="hero h-1/3" style={`background-image: url('${metadata.imageUrl}')`}>
		<div class="hero-overlay"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">{metadata.title}</h1>
			</div>
		</div>
	</div>
	<div class="pt-5 px-4">
		<div class="max-w-2xl mx-auto text-center space-y-4">
			<p>Pitch</p>
			{#each metadata.pitch as paragraph}
				<p>{@html paragraph}</p>
			{/each}
			<div class="divider"></div>
			<p>Setting & Stimmung</p>
			{#each metadata.atmosphere as paragraph}
				<p>{@html paragraph}</p>
			{/each}
			<div class="divider"></div>
			<p>Was macht es besonders?</p>
			{#each metadata.usps as paragraph}
				<p>{@html paragraph}</p>
			{/each}
			<div class="divider"></div>
			<p>Womit kann man es vergleichen?</p>
			{#each metadata.comparisons as paragraph}
				<p>{@html paragraph}</p>
			{/each}
			<div class="divider"></div>
			<p>Für wen?</p>
			{#each metadata.audience as paragraph}
				<p>{@html paragraph}</p>
			{/each}
		</div>
	</div>
</div>
