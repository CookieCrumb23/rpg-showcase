<script lang="ts">
	import { marked } from 'marked';
	export let data: Metadata;
</script>

<div class="h-screen">
	<div class="hero h-1/3" style={`background-image: url('${data.imageUrl}')`}>
		<div class="hero-overlay"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">{data.title}</h1>
			</div>
		</div>
	</div>
	<div class="pt-5 pb-25 px-4">
		<div class="max-w-2xl mx-auto text-center space-y-4">
			<p>Pitch</p>
			{#each data.pitch as paragraph}
				<p>{@html marked(paragraph)}</p>
			{/each}
			<div class="divider"></div>
			<p>Setting & Stimmung</p>
			{#each data.atmosphere as paragraph}
				<p>{@html marked(paragraph)}</p>
			{/each}
			<div class="divider"></div>
			<p>Was macht es besonders?</p>
			{#each data.usps as paragraph}
				<p>{@html marked(paragraph)}</p>
			{/each}
			<div class="divider"></div>
			<p>Womit kann man es vergleichen?</p>
			{#each data.comparisons as paragraph}
				<p>{@html marked(paragraph)}</p>
			{/each}
			<div class="divider"></div>
			<p>Für wen?</p>
			{#each data.audience as paragraph}
				<p>{@html marked(paragraph)}</p>
			{/each}
		</div>
	</div>
</div>
