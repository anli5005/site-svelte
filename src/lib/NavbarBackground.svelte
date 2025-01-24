<script lang="ts">
	interface Props {
		tabs: number;
		currentTab: number;
	}

	const { tabs, currentTab } = $props();

	const borderRadius = 16;

	const backgroundClass = 'bg-white dark:bg-ocean-1000 dark:contrast-more:bg-black';
	const textClass = 'text-white dark:text-ocean-1000 dark:contrast-more:text-black';
</script>

<div class={`flex items-stretch h-full ${textClass} relative`}>
	{#each Array.from({ length: tabs }, (_, i) => i) as tab}
		{#if tab !== 0}
			{#if tab === currentTab}
				<svg viewBox={`0 0 ${borderRadius} ${borderRadius}`} class="w-4 h-4 mb-auto">
					<path
						d={`M 0 ${borderRadius} A ${borderRadius} ${borderRadius} 0 0 1 ${borderRadius} 0 L 0 0 Z`}
						fill="currentColor"
					/>
				</svg>
			{:else}
				<div class="w-4 flex flex-col items-stretch">
					<div class={`flex-grow ${backgroundClass}`}></div>
					{#if tab === currentTab + 1}
						<svg viewBox={`0 0 ${borderRadius} ${borderRadius}`} class="w-4 h-4">
							<path
								d={`M ${borderRadius} ${borderRadius} A ${borderRadius} ${borderRadius} 0 0 1 0 0 L ${borderRadius} 0 Z`}
								fill="currentColor"
							/>
						</svg>
					{/if}
				</div>
			{/if}
		{/if}
		<div
			class={`flex-grow ${backgroundClass} ${tab === currentTab ? 'opacity-0' : 'opacity-100'}`}
		></div>
		{#if tab !== tabs - 1}
			{#if tab === currentTab}
				<svg viewBox={`0 0 ${borderRadius} ${borderRadius}`} class="w-4 h-4 mb-auto">
					<path
						d={`M 0 0 A ${borderRadius} ${borderRadius} 0 0 1 ${borderRadius} ${borderRadius} L ${borderRadius} 0 Z`}
						fill="currentColor"
					/>
				</svg>
			{:else}
				<div class="w-4 flex flex-col items-stretch">
					<div class={`flex-grow ${backgroundClass}`}></div>
					{#if tab === currentTab - 1}
						<svg viewBox={`0 0 ${borderRadius} ${borderRadius}`} class="w-4 h-4">
							<path
								d={`M 0 ${borderRadius} A ${borderRadius} ${borderRadius} 0 0 0 ${borderRadius} 0 L 0 0 Z`}
								fill="currentColor"
							/>
						</svg>
					{/if}
				</div>
			{/if}
		{/if}
	{/each}
	{#if currentTab !== 0}
		<svg viewBox={`0 0 ${borderRadius} ${borderRadius}`} class="w-4 h-4 absolute left-0 -bottom-4">
			<path
				d={`M 0 ${borderRadius} A ${borderRadius} ${borderRadius} 0 0 1 ${borderRadius} 0 L 0 0 Z`}
				fill="currentColor"
			/>
		</svg>
	{/if}
	{#if currentTab !== tabs - 1}
		<svg viewBox={`0 0 ${borderRadius} ${borderRadius}`} class="w-4 h-4 absolute right-0 -bottom-4">
			<path
				d={`M 0 0 A ${borderRadius} ${borderRadius} 0 0 1 ${borderRadius} ${borderRadius} L ${borderRadius} 0 Z`}
				fill="currentColor"
			/>
		</svg>
	{/if}
</div>
