/* generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "/svelte/internal.js";

import Notes from "/components/Notes.js";
import Folder from "/components/Folder.js";
import toFolder from "/components/toFolder.js";

function create_fragment(ctx) {
	let h2;
	let t1;
	let folder_1;
	let current;
	folder_1 = new Folder({ props: { folder: /*folder*/ ctx[0] } });

	return {
		c() {
			h2 = element("h2");
			h2.textContent = "🔗 Symlink";
			t1 = space();
			create_component(folder_1.$$.fragment);
		},
		m(target, anchor) {
			insert(target, h2, anchor);
			insert(target, t1, anchor);
			mount_component(folder_1, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(folder_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(folder_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h2);
			if (detaching) detach(t1);
			destroy_component(folder_1, detaching);
		}
	};
}

function instance($$self) {
	const folder = toFolder`
+ root
  + packages
    + pkg-a
      + node_modules
        - pkg-b --> ../../pkg-b
      - index.js # import('pkg-b')
    + pkg-b
    + pkg-c
      + node_modules
        - pkg-a --> ../../pkg-a
      - index.js # import('pkg-a')
      - package.json # { "pkg-a": "1.0.0" }
    + pkg-d
      + node_modules
        - pkg-a # v0.5.0
      - index.js # import('pkg-a')
      - package.json # { "pkg-a": "0.5.0" }
`;

	return [folder];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;