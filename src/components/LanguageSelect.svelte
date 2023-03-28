<script lang="ts">
	import { languageMap } from "../lib/i18n/languageMap";

	let language: string = localStorage.getItem("language") || "";

	function switchLanguage() {
		localStorage.setItem("language", language)

		let match = window.location.pathname.match(/\/(.*?)\//);
		if (match && match[1] in languageMap) {
			window.location.href = window.location.pathname.replace(/\/.*?\//, `/${language}/`);
		} else {
			window.location.href = `/${language}${window.location.pathname}`;
		}
	}
</script>

<select bind:value={language} on:change={switchLanguage} class="rounded-lg border px-2 py-1">
	{#each Object.entries(languageMap) as [i18n, name]}
		<option value={i18n} selected={i18n == language}>{name}</option>
	{/each}
</select>