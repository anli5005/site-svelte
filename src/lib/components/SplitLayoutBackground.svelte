<script lang="ts">
    const { class: className }: { class?: string; style?: string } = $props();
</script>

<div class="absolute -top-28 -bottom-4 left-0 right-0 -z-10 sm:fixed sm:top-0 {className}"></div>