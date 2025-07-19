<script lang="ts">
	export let image: string;
	export let title: string;
	export let text: string;
</script>

<div class="h-screen">
	<div class="hero h-1/3" style={`background-image: url('${image}')`}>
		<div class="hero-overlay"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">{title}</h1>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-7 pt-5">
		<div class="col-span-5 col-start-2">
			<p class="text-center">
				{text}
			</p>
		</div>
	</div>
</div>
