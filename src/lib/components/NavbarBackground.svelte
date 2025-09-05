<script lang="ts">
	interface Props {
		tabs: number;
		currentTab: number;
	}

	const { tabs, currentTab } = $props();

	const r = 16;

	const backgroundClass = 'bg-white dark:bg-ocean-1000 dark:contrast-more:bg-black';
	const textClass = 'text-white dark:text-ocean-1000 dark:contrast-more:text-black';
</script>

<div class={`flex items-stretch h-full ${textClass} relative`}>
	{#each Array.from({ length: tabs }, (_, i) => i) as tab}
		{#if tab !== 0}
			{#if tab === currentTab}
				<svg
					viewBox={`0 0 ${r + 2} ${r}`}
					class="mx-[-1px] mb-auto"
					style={`width: ${r + 2}px; height: ${r}px;`}
				>
					<path d={`M 0 ${r} L 2 ${r} A ${r} ${r} 0 0 1 ${r + 2} 0 L 0 0 Z`} fill="currentColor" />
				</svg>
			{:else}
				<div class="mx-[-1px] flex flex-col items-stretch" style={`width: ${r + 2}px;`}>
					<svg viewBox="0 0 1 1" class="h-full" preserveAspectRatio="none">
						<rect x="0" y="0" width="1" height="1" fill="currentColor" />
					</svg>
					{#if tab === currentTab + 1}
						<svg
							viewBox={`0 0 ${r + 2} ${r + 1}`}
							class="mt-[-1px] flex-shrink-0"
							style={`width: ${r + 2}px; height: ${r + 1}px;`}
						>
							<path
								d={`M ${r} ${r + 1} A ${r} ${r} 0 0 1 0 1 L 0 0 L ${r + 2} 0 L ${r + 2} ${r + 1} Z`}
								fill="currentColor"
							/>
						</svg>
					{/if}
				</div>
			{/if}
		{:else if currentTab === 0}
			<div style={`width: ${r}px;`}></div>
		{:else}
			<div class={`mr-[-1px] ${backgroundClass}`} style={`width: ${r + 1}px;`}></div>
		{/if}
		<div
			class={`flex-grow ${backgroundClass} ${tab === currentTab ? 'opacity-0' : 'opacity-100'}`}
		></div>
		{#if tab !== tabs - 1}
			{#if tab === currentTab}
				<svg
					viewBox={`0 0 ${r + 2} ${r}`}
					class="mx-[-1px] mb-auto"
					style={`width: ${r + 2}px; height: ${r}px;`}
				>
					<path
						d={`M 0 0 A ${r} ${r} 0 0 1 ${r} ${r} L ${r + 2} ${r} L ${r + 2} 0 Z`}
						fill="currentColor"
					/>
				</svg>
			{:else}
				<div class="mx-[-1px] flex flex-col items-stretch" style={`width: ${r + 2}px;`}>
					<svg viewBox="0 0 1 1" class="h-full" preserveAspectRatio="none">
						<rect x="0" y="0" width="1" height="1" fill="currentColor" />
					</svg>
					{#if tab === currentTab - 1}
						<svg
							viewBox={`0 0 ${r + 2} ${r + 1}`}
							class="mt-[-1px] flex-shrink-0"
							style={`width: ${r + 2}px; height: ${r + 1}px;`}
						>
							<path
								d={`M 0 ${r + 1} L 2 ${r + 1} A ${r} ${r} 0 0 0 ${r + 2} 1 L ${r + 2} 0 L 0 0 Z`}
								fill="currentColor"
							/>
						</svg>
					{/if}
				</div>
			{/if}
		{:else if currentTab === tabs - 1}
			<div style={`width: ${r}px;`}></div>
		{:else}
			<div class={`ml-[-1px] ${backgroundClass}`} style={`width: ${r + 1}px;`}></div>
		{/if}
	{/each}
	{#if currentTab !== 0}
		<svg viewBox={`0 0 ${r} ${r}`} class="w-4 h-4 absolute left-0 -bottom-4">
			<path d={`M 0 ${r} A ${r} ${r} 0 0 1 ${r} 0 L 0 0 Z`} fill="currentColor" />
		</svg>
	{/if}
	{#if currentTab !== tabs - 1}
		<svg viewBox={`0 0 ${r} ${r}`} class="w-4 h-4 absolute right-0 -bottom-4">
			<path d={`M 0 0 A ${r} ${r} 0 0 1 ${r} ${r} L ${r} 0 Z`} fill="currentColor" />
		</svg>
	{/if}
</div>
