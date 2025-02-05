<script lang="ts">
	import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
        specifier: string;
    }

    const { children, specifier }: Props = $props();
</script>

{#if specifier === "ANLI"}
<blockquote class="max-w-3xl sm:min-h-22 mt-32 sm:mt-6 mx-auto rounded-xl items-stretch px-0 py-0 relative flex flex-col sm:flex-row contain-layout not-italic bg-ocean-100 dark:bg-ocean-900 bg-gradient-to-tr from-grape-300/30 dark:from-grape-600/30 via-ocean-300/0 dark:via-ocean-700/0 to-sage-400/30 dark:to-sage-600/30 border-l-0">
    <div class="relative sm:w-28 not-prose sm:ml-8 flex-shrink-0">
        <div class="absolute sm:h-full sm:min-h-28 left-0 right-0 bottom-0 flex items-center justify-center">
            <div class="w-24 h-24 sm:w-28 sm:h-28 relative">
                <div class="w-32 h-[1px] bg-gradient-to-r from-white/0 via-white/50 to-white/0 absolute bottom-0 left-1/2 -translate-x-1/2 right-0"></div>
                <img src="/pfp-transp.webp" class="ltr:-scale-x-100 w-full absolute inset-0 z-10" alt="">
            </div>
        </div>
    </div>
    <div class="flex-grow mx-6 sm:ml-4 sm:mr-8 flex items-center">
        <div>
            {@render children()}
        </div>
    </div>
</blockquote>
{:else}
<blockquote>
    {@render children()}
</blockquote>
{/if}