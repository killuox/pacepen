<script>
	import Header from '../../components/layout/Header.svelte';
	import Sidebar from './Sidebar/Sidebar.svelte';
</script>

<div class="h-screen w-full grid grid-cols-[80px,1fr] gap-6 bg-gradient-to-tl from-slate-950 via-slate-900 to-slate-950 text-gray-100 transition-colors duration-200">
	<aside class="col-span-1">
		<Sidebar />
	</aside>
	<div class="grid grid-rows-[1fr] overflow-hidden">
		<slot />
	</div>
</div>
