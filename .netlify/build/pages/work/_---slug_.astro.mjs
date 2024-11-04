import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_y7JOpsdn.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_FcEIfZhm.mjs';
import { a as $$BaseLayout, b as $$Icon, $ as $$Hero } from '../../chunks/BaseLayout_BywokBVB.mjs';
import { $ as $$ContactCTA } from '../../chunks/ContactCTA_C0T7MBv_.mjs';
import { $ as $$Pill } from '../../chunks/Pill_DeXMDY8m.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const work = await getCollection("work");
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "data-astro-cid-qwekciqp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-qwekciqp> <div class="stack gap-15" data-astro-cid-qwekciqp> <header data-astro-cid-qwekciqp> <div class="wrapper stack gap-2" data-astro-cid-qwekciqp> <a class="back-link" href="/work/" data-astro-cid-qwekciqp>${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "data-astro-cid-qwekciqp": true })} Work</a> ${renderComponent($$result2, "Hero", $$Hero, { "title": entry.data.title, "align": "start", "data-astro-cid-qwekciqp": true }, { "default": ($$result3) => renderTemplate` <div class="details" data-astro-cid-qwekciqp> <div class="tags" data-astro-cid-qwekciqp> ${entry.data.tags.map((t) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-qwekciqp": true }, { "default": ($$result4) => renderTemplate`${t}` })}`)} </div> <p class="description" data-astro-cid-qwekciqp>${entry.data.description}</p> </div> ` })} </div> </header> <main class="wrapper" data-astro-cid-qwekciqp> <div class="stack gap-10 content" data-astro-cid-qwekciqp> ${entry.data.img && renderTemplate`<img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.img_alt || "", "alt")} data-astro-cid-qwekciqp>`} <div class="content" data-astro-cid-qwekciqp> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-qwekciqp": true })} </div> </div> </main> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-qwekciqp": true })} </div> ` })} `;
}, "C:/Users/veron/portfolio/src/pages/work/[...slug].astro", void 0);

const $$file = "C:/Users/veron/portfolio/src/pages/work/[...slug].astro";
const $$url = "/work/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
