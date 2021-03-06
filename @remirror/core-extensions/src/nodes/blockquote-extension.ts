import { wrappingInputRule } from 'prosemirror-inputrules';

import {
  CommandNodeTypeParams,
  EDITOR_CLASS_SELECTOR,
  ExtensionManagerNodeTypeParams,
  KeyBindings,
  NodeExtension,
  NodeExtensionSpec,
  NodeGroup,
  convertCommand,
  toggleWrap,
} from '@remirror/core';

export class BlockquoteExtension extends NodeExtension {
  get name() {
    return 'blockquote' as const;
  }

  get schema(): NodeExtensionSpec {
    return {
      attrs: this.extraAttrs(),
      content: 'block*',
      group: NodeGroup.Block,
      defining: true,
      draggable: false,
      parseDOM: [{ tag: 'blockquote' }],
      toDOM: () => ['blockquote', 0],
    };
  }

  public commands({ type }: CommandNodeTypeParams) {
    return {
      /**
       * Toggle the blockquote at the current selection.
       *
       * If none exists one will be created or the existing blockquote content will be
       * lifted out of the blockquote node.
       *
       * ```ts
       * actions.blockquote();
       * ```
       */
      blockquote: () => toggleWrap(type),
    };
  }

  public styles() {
    return `${EDITOR_CLASS_SELECTOR} blockquote {
      border-left: 2px solid #ddd;
      margin-left: 0;
      margin-right: 0;
      padding-left: 10px;
      font-style: italic;
    }
    ${EDITOR_CLASS_SELECTOR} blockquote p {
      color: #888;
    }
    `;
  }

  public keys({ type }: ExtensionManagerNodeTypeParams): KeyBindings {
    return {
      'Ctrl->': convertCommand(toggleWrap(type)),
    };
  }

  public inputRules({ type }: ExtensionManagerNodeTypeParams) {
    return [wrappingInputRule(/^\s*>\s$/, type)];
  }
}
