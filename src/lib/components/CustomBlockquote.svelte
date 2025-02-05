<script lang="ts">
	import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
        specifier: string;
    }

    const { children, specifier }: Props = $props();
</script>

{#if specifier === "ANLI"}
<blockquote class="max-w-3xl mx-auto rounded-xl items-stretch py-0 relative flex contain-layout not-italic bg-ocean-100 dark:bg-ocean-900 bg-gradient-to-tr from-grape-300/30 dark:from-grape-600/30 via-ocean-300/0 dark:via-ocean-700/0 to-sage-400/30 dark:to-sage-600/30 border-l-0">
    <div class="relative w-28 not-prose ml-4 flex-shrink-0">
        <div class="absolute h-full min-h-28 left-0 right-0 bottom-0 flex items-center justify-center">
            <div class="w-28 h-28 relative">
                <div class="w-32 h-[1px] bg-gradient-to-r from-white/0 via-white/50 to-white/0 absolute bottom-0 left-1/2 -translate-x-1/2 right-0"></div>
                <img src="/pfp-transp.webp" class="ltr:-scale-x-100 absolute inset-0 z-10" alt="">
            </div>
        </div>
    </div>
    <div class="flex-grow ml-4 mr-8">
        {@render children()}
    </div>
</blockquote>
{:else}
<blockquote>
    {@render children()}
</blockquote>
{/if}