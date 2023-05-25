<template>
    <popover ref="popover" placement="bottom-end" @closed="popoverClosed" :clickaway="true">
        <template #trigger>
            <button
                class="bard-toolbar-button"
                :class="{ active: attributesAreSet }"
                v-tooltip="button.text"
                :aria-label="button.text"
                @click="toggleGlossaryToolbar"
            >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="16" height="16" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            </button>
        </template>
        <template #default>
            <glossary-tooltips-toolbar
                class="w-80"
                ref="toolbar"
                v-if="showingToolbar"
                :glossary-attrs="glossaryAttrs"
                @updated="setDefinition"
                @canceled="close"
            />
        </template>
    </popover>
</template>

<script>
    import GlossaryTooltipsToolbar from './GlossaryTooltipsToolbar.vue';

    export default {

        mixins: [BardToolbarButton],

        components: {
            GlossaryTooltipsToolbar,
        },

        data() {
            return {
                glossaryAttrs: null,
                showingToolbar: false,
            }
        },

        computed: {
            attributesAreSet() {
                return this.editor.getAttributes('glossaryTooltips').type ? true : false;
            },
        },

        methods: {
            toggleGlossaryToolbar() {
                this.showingToolbar = ! this.showingToolbar;
                if (this.showingToolbar) {
                    this.glossaryAttrs = this.editor.getAttributes('glossaryTooltips');
                } else {
                    this.editor.view.dom.focus();
                }
            },

            close() {
                this.showingToolbar = false;
                this.$refs.popover.close();
            },

            popoverClosed() {
                this.showingToolbar = false;
            },

            setDefinition(attributes) {
                this.editor.commands.setDefinition(attributes);
                this.glossaryAttrs = null;
                this.close();
                this.editor.view.dom.focus();
            }
        }
    }
</script>
