<script lang="ts">
	import { page } from "$app/state";

    interface Props {
        title: string;
        description?: string;
        ogDescription?: string;
        useTemplate?: boolean;
        ogType?: string;
        jsonLD?: Record<string, any>;
    }

    const { title, description, ogDescription, ogType, useTemplate = true, jsonLD }: Props = $props();

    const resolvedTitle = $derived(useTemplate ? `${title} • Anthony Li` : title);
    const resolvedOgDescription = $derived(description || ogDescription);
    
    const canonical = $derived(`https://anli.dev${page.url.pathname}`);

    const jsonLDData = $derived.by(() => {
        if (!jsonLD) return;

        return JSON.stringify({
            "url": canonical,
            ...jsonLD,
            "@context": "https://schema.org",
        }).replace(/<\/script>/g, '<\\/script>');
    });
</script>

<svelte:head>
    <title>{resolvedTitle}</title>
    <meta name="og:title" content={title}>

    {#if description}
    <meta name="description" content={description}>
    {/if}

    {#if resolvedOgDescription}
    <meta name="og:description" content={resolvedOgDescription}>
    {/if}

    <meta name="og:locale" content="en_US">
    <meta name="og:type" content={ogType || "website"}>
    <meta name="og:site_name" content="Anthony Li">
    <meta name="og:url" content={canonical}>

    {#if jsonLDData}
    {@html `<script type="application/ld+json">${jsonLDData}</script>`}
    {/if}
</svelte:head>