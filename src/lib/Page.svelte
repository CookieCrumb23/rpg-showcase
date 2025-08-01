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
	<div class="pt-5 px-4">
		<div class="max-w-3xl mx-auto text-center space-y-4 prose">
			<h2 class="text-3xl">Pitch</h2>
			{#each data.pitch as paragraph}
				<p class="text-lg">{@html marked(paragraph)}</p>
			{/each}
			<div class="divider"></div>
			<h2 class="text-3xl">Setting & Stimmung</h2>
			{#each data.atmosphere as paragraph}
				<p class="text-lg">{@html marked(paragraph)}</p>
			{/each}
			<div class="divider"></div>
			<h2 class="text-3xl">Was macht es besonders?</h2>
			{#each data.usps as paragraph}
				<p class="text-lg">{@html marked(paragraph)}</p>
			{/each}
			<div class="divider"></div>
			<h2 class="text-3xl">Womit kann man es vergleichen?</h2>
			{#each data.comparisons as paragraph}
				<p class="text-lg">{@html marked(paragraph)}</p>
			{/each}
			<div class="divider"></div>
			<h2 class="text-3xl">Für wen?</h2>
			{#each data.audience as paragraph}
				<p class="text-lg">{@html marked(paragraph)}</p>
			{/each}
		</div>
	</div>
