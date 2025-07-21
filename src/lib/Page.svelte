<script lang="ts">
	import { marked } from 'marked';
	export let data: Metadata;
</script>

	<div class="hero lg:h-84" style={`background-image: url('${data.imageUrl}')`}>
		<div class="hero-overlay"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">{data.title}</h1>
			</div>
		</div>
	</div>
	<div class="pt-5 px-4 prose">
		<div class="max-w-2xl mx-auto text-center space-y-4">
			<h2>Pitch</h2>
			{#each data.pitch as paragraph}
				<p>{@html marked(paragraph)}</p>
			{/each}
			<div class="divider"></div>
			<h2>Setting & Stimmung</h2>
			{#each data.atmosphere as paragraph}
				<p>{@html marked(paragraph)}</p>
			{/each}
			<div class="divider"></div>
			<h2>Was macht es besonders?</h2>
			{#each data.usps as paragraph}
				<p>{@html marked(paragraph)}</p>
			{/each}
			<div class="divider"></div>
			<h2>Womit kann man es vergleichen?</h2>
			{#each data.comparisons as paragraph}
				<p>{@html marked(paragraph)}</p>
			{/each}
			<div class="divider"></div>
			<h2>Für wen?</h2>
			{#each data.audience as paragraph}
				<p>{@html marked(paragraph)}</p>
			{/each}
		</div>
	</div>
