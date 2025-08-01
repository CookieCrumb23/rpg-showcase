<script>
	export let data;
</script>

<div class="min-h-screen flex flex-col items-center justify-center bg-base-100 p-8">
	<h1 class="text-4xl font-bold mb-8 text-center">Choose Your Adventure</h1>
	<div class="grid lg:grid-cols-4 gap-6 w-full max-w-6xl">
		{#each data.tiles as tile}
			<a href={tile.path}>
				<div class="card bg-base-100 image-full shadow-sm h-full">
					<figure class="h-48 overflow-hidden">
						<img src={tile.imageUrl} alt="" class="object-cover w-full h-full" />
					</figure>
					<div class="card-body">
						<h2 class="card-title text-lg">{tile.title}</h2>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
