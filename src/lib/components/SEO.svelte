<script lang="ts">
    interface Props {
        title: string;
        description?: string;
        ogDescription?: string;
        useTemplate?: boolean;
        ogType?: string;
    }

    const { title, description, ogDescription, ogType, useTemplate = true }: Props = $props();

    const resolvedTitle = useTemplate ? `${title} • Anthony Li` : title;
    const resolvedOgDescription = description || ogDescription;
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
</svelte:head>