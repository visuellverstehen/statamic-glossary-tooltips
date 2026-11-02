<template>
    <Stack
        :title="__('Glossary')"
        size="narrow"
        inset
        :wrap-slot="false"
        v-model:open="showingToolbar"
    >
        <template #trigger>
            <Button
                class="px-2!"
                :class="{ active, group: variant === 'floating' }"
                :variant="variant === 'floating' ? 'subtle' : 'ghost'"
                size="sm"
                :aria-label="button.text"
                v-tooltip="button.text"
                @mousedown.prevent
            >
                <div class="flex items-center" v-html="button.html" />
            </Button>
        </template>

        <glossary-tooltips-toolbar
            v-if="glossaryAttrs !== null"
            :glossary-attrs="glossaryAttrs"
            @updated="setDefinition"
            @canceled="close"
        />
    </Stack>
</template>

<script>
import { Button, Stack } from '@statamic/cms/ui';
import GlossaryTooltipsToolbar from './GlossaryTooltipsToolbar.vue';

export default {
    components: {
        Button,
        GlossaryTooltipsToolbar,
        Stack,
    },

    props: {
        button: Object,
        active: Boolean,
        variant: String,
        config: Object,
        bard: {},
        editor: {},
    },

    data() {
        return {
            glossaryAttrs: null,
            showingToolbar: false,
        };
    },

    watch: {
        showingToolbar(showingToolbar) {
            if (showingToolbar) {
                this.glossaryAttrs = this.editor.getAttributes('glossaryTooltips');
            } else {
                this.glossaryAttrs = null;
                this.editor.commands.focus();
            }
        },
    },

    methods: {
        close() {
            this.showingToolbar = false;
        },

        setDefinition(attributes) {
            this.editor.chain().focus().setDefinition(attributes).run();
            this.close();
        },
    },
};
</script>