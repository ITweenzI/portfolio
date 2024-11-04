import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_y7JOpsdn.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_FcEIfZhm.mjs';
import { $ as $$Hero, a as $$BaseLayout } from '../chunks/BaseLayout_BywokBVB.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_C0T7MBv_.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from '../chunks/Grid_DsYyZO1k.mjs';
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Mes projets | Lucas Hattry", "description": "D\xE9couvrez mes projets les plus r\xE9cents ci-dessous pour avoir une id\xE9e de mon exp\xE9rience." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Mes projets", "tagline": "D\xE9couvrez mes projets les plus r\xE9cents ci-dessous pour avoir une id\xE9e de mon exp\xE9rience.", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "C:/Users/veron/portfolio/src/pages/work.astro", void 0);

const $$file = "C:/Users/veron/portfolio/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Work,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
