import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_y7JOpsdn.mjs';
import 'kleur/colors';
import { $ as $$Hero, a as $$BaseLayout } from '../chunks/BaseLayout_BywokBVB.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_C0T7MBv_.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "A propos | Lucas Hattry", "description": "A propos de Lucas Hattry", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-kh7btl4r> <main class="wrapper about" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "A propos", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <img width="1553" height="873" src="/assets/imgcode.jpg" alt="Codage sur un pc" data-astro-cid-kh7btl4r> ` })} <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Background</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Je suis actuellement en 2ème année d'un BTS SIO(service aux organisation) option SLAM. Je suis donc débutant dans le cadre de la programmation mais, néanmoins très 
					motivé et curieux. En effet, chaque jours j'aspire a apprenddre d'avantages de méthodes pour faire de meilleurs projets.
</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Diplômes</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>BAC+2 BTS Service aux Organisation option Solutions Logicielles et Applications Métiers.</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Skills</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>Curieux, Autonome, Dynamique, Travail d'équipe</p> </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} </div> ` })} `;
}, "C:/Users/veron/portfolio/src/pages/about.astro", void 0);

const $$file = "C:/Users/veron/portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
