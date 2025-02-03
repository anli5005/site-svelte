<script lang="ts">
	import SplitLayout from '$lib/components/SplitLayout.svelte';
	import SplitLayoutBackground from '$lib/components/SplitLayoutBackground.svelte';
	import SplitLayoutContent from '$lib/components/SplitLayoutContent.svelte';
	import SplitLayoutHeader from '$lib/components/SplitLayoutHeader.svelte';
	import { parseDate } from 'chrono-node';

	function getDate(input: string): Date | undefined {
		return parseDate(input);
	}

	let input = $state('now');

	const date = $derived(getDate(input));
</script>

<SplitLayout>
	<SplitLayoutHeader>
		<h1 class="font-sans text-4xl font-bold break-words">UNIX Timestamper</h1>
        <p class="text-lg italic mt-2">A small utility</p>
        <SplitLayoutBackground class="bg-amber-600" />
	</SplitLayoutHeader>
	<SplitLayoutContent>
        <noscript>
            <div class="bg-red-800 text-white rounded-xl p-4 mb-8">
                <strong>This tool requires JavaScript.</strong> Please enable JavaScript to use UNIX Timestamper.
            </div>
        </noscript>

		<form onsubmit={e => e.preventDefault()}>
			<label for="timestamper-input">
				<h5 class="font-bold">Enter a date:</h5>
				<div class="mb-1 text-sm opacity-70 italic">Examples: now, tomorrow, july 31, 8pm</div>
			</label>
			<input
				name="date"
				type="text"
				id="timestamper-input"
				class="bg-ocean-100 dark:bg-ocean-900 border-0 block rounded w-full px-3 py-2"
				bind:value={input}
			/>
			<p class="mt-1 leading-[1]">
				<small>{date ? date.toString() : 'Unable to parse'}</small>
			</p>
		</form>

		<div class="mt-6">
			<div>Timestamp:</div>
			{#if date}
				<code class="text-lg px-1 rounded bg-ocean-100 dark:bg-ocean-900" id="timestamp">
					{Math.floor(date.getTime() / 1000)}
				</code>
			{:else}
				<span class="text-lg">???</span>
			{/if}
		</div>

        <p class="mt-4 text-sm italic opacity-70">
            Powered by <a class="link" href="https://www.npmjs.com/package/chrono-node">chrono-node</a>
        </p>

        <p class="mt-12 bg-ocean-50 dark:bg-ocean-900/50 p-4 rounded-xl">
            Have an Apple Vision Pro? Download the <a class="link" href="https://apps.apple.com/us/app/unix-timestamper/id6476967048">visionOS version</a> from the App Store!
        </p>
	</SplitLayoutContent>
</SplitLayout>
