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

function create_fragment(ctx) {
	let h2;
	let t1;
	let p;
	let t3;
	let ul;
	let t7;
	let notes;
	let current;

	notes = new Notes({
			props: {
				note: "\n- when pkg a imports pkg b, need to understand how resolution works, use magicry to make sure that the pkg b you are importing is the one within the monorepo\n- run scripts across packages, that understands dependency relationship\n"
			}
		});

	return {
		c() {
			h2 = element("h2");
			h2.textContent = "🏯 Monorepo";
			t1 = space();
			p = element("p");
			p.textContent = "We need tools to help us:";
			t3 = space();
			ul = element("ul");

			ul.innerHTML = `<li>maintain dependencies</li> 
<li>package management</li>`;

			t7 = space();
			create_component(notes.$$.fragment);
		},
		m(target, anchor) {
			insert(target, h2, anchor);
			insert(target, t1, anchor);
			insert(target, p, anchor);
			insert(target, t3, anchor);
			insert(target, ul, anchor);
			insert(target, t7, anchor);
			mount_component(notes, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(notes.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(notes.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h2);
			if (detaching) detach(t1);
			if (detaching) detach(p);
			if (detaching) detach(t3);
			if (detaching) detach(ul);
			if (detaching) detach(t7);
			destroy_component(notes, detaching);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;