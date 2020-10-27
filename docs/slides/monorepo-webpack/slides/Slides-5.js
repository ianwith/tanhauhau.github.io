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

import ResolveExample from "/components/ResolveExample.js";
import toFolder from "/components/toFolder.js";

function create_fragment(ctx) {
	let h2;
	let t1;
	let resolveexample;
	let current;

	resolveexample = new ResolveExample({
			props: {
				folder: /*folder*/ ctx[0],
				examples: /*examples*/ ctx[1]
			}
		});

	return {
		c() {
			h2 = element("h2");
			h2.textContent = "🔎 Module Resolution";
			t1 = space();
			create_component(resolveexample.$$.fragment);
		},
		m(target, anchor) {
			insert(target, h2, anchor);
			insert(target, t1, anchor);
			mount_component(resolveexample, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(resolveexample.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(resolveexample.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h2);
			if (detaching) detach(t1);
			destroy_component(resolveexample, detaching);
		}
	};
}

function instance($$self) {
	const folder = toFolder`
+ parent
  - index.js
  - sibling.js
  + sibling
    - niece.js
- uncle.js
  `;

	const examples = [
		{
			code: "require('./sibling.js')",
			target: "/parent/sibling.js"
		},
		{
			code: "require('../uncle.js')",
			target: "/uncle.js"
		},
		{
			code: "require('./sibling/niece.js')",
			target: "/parent/sibling/niece.js"
		}
	];

	return [folder, examples];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;