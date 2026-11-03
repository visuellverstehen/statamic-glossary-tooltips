export default function (tiptap) {
    const { Mark, mergeAttributes } = tiptap.core;

    return Mark.create({
        name: 'glossaryTooltips',

        addAttributes() {
            return {
                type: {
                    default: null,
                },
                locale: {
                    default: null,
                },
                title: {
                    default: null,
                },
                value: {
                    default: null,
                },
                id: {
                    default: null,
                },
            };
        },

        // Defines how the selected text should be marked up in the bard itself
        renderHTML({ HTMLAttributes }) {
            return [
                'span',
                mergeAttributes(HTMLAttributes, {
                    style: 'font-style: italic; text-decoration: underline;',
                }),
            ];
        },

        // Toggle selected text as a mark in tiptap
        addCommands() {
            return {
                setDefinition: (attributes) => ({ chain }) => {
                    if (attributes.title) {
                        return chain().setMark(this.name, attributes).run();
                    }

                    return chain().unsetMark(this.name, { extendEmptyMarkRange: true }).run();
                },
            };
        },
    });
}