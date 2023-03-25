<script lang="ts">
	import type { CollectionEntry } from "astro:content";

	export let docs: Record<string, CollectionEntry<"docs">>;
	export let url: string;

	type Entry = CollectionEntry<"docs"> | undefined;

	let last: Entry, next: Entry;
	let docsArray = Object.values(docs);
	for (let i = 0; i < docsArray.length; i++) {
		const article = docsArray[i];

		if (article.slug === url) {
			last = docsArray[i - 1];
			next = docsArray[i + 1];
			break;
		}
	}
</script>

<dl
	class="flex pt-6 mt-6 border-t border-slate-200 max-w-[1400px] mx-auto w-full"
>
	{#if last}
		<div class="mr-auto text-left">
			<dt class="text-sm font-normal tracking-tight text-slate-600">
				Zurück
			</dt>
			<dd class="mt-1">
				<a
					href={"/" + last.slug}
					class="text-base font-semibold text-slate-900 hover:underline"
				>
					{last.data.section || ""}/{last.data.title}
				</a>
			</dd>
		</div>
	{/if}

	{#if next}
		<div class="ml-auto text-right">
			<dt class="text-sm font-normal tracking-tight text-slate-600">
				Weiter
			</dt>
			<dd class="mt-1">
				<a
					href={"/" + next.slug}
					class="text-base font-semibold text-slate-900 hover:underline"
				>
					{next.data.section || ""}/{next.data.title}
				</a>
			</dd>
		</div>
	{/if}
</dl>
