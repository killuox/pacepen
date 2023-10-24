<script lang="ts">
      import { Button } from "$lib/components/ui/button";
    import * as Tabs from "$lib/components/ui/tabs";

</script>

<div class="border-b p-2 px-6 flex items-center justify-between">
    <Tabs.Root value="account" class="w-[400px]">
        <Tabs.List class="grid w-full grid-cols-2">
          <Tabs.Trigger value="account">Default</Tabs.Trigger>
          <Tabs.Trigger value="password">Mood</Tabs.Trigger>
        </Tabs.List>
    </Tabs.Root>    
      
    <Button href="/app/templates">Templates</Button>
</div>