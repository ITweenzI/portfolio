import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_y7JOpsdn.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"le-projet\">Le projet</h2>\n<p>Il a été réalisé durant ma formation. C’est un site regroupant plusieurs pages visant à gérer diverses informations en rapport avec des visiteurs médicaux. Chacun ont des caractéristiques bien précise par exemple une spécialité, une région, un nom etc…\nToutes ces infos sont bien sur regroupé dans une base de données que j’ai du exploité avec un colllégue afin de mettre en marche toutes les fonctions du site.</p>\n<h2 id=\"les-développements\">Les développements</h2>\n<p>Une touche de mise en page était a réalisé mais, le plus gros du travail ce trouvé dans la création de pages visant afficher des résultats de requêtes SQL complexe afin de faire le lien entre les différentes tables et d’afficher les informations voulus. C’est ici, que les différentes compétences dans le développement et la gestion de base de données ont étés misent a contribution afin de pouvoir créer ces fonctionalitées.</p>";

				const frontmatter = {"title":"GSB","publishDate":"2025-03-02T00:00:00.000Z","img":"/assets/GSB.png","img_alt":"Iridescent ripples of a bright blue and pink liquid","description":"We designed a whodunnit-style game to introduce Markdown formatting. Suspense — suspicion — syntax!\n","tags":["Design","Dev","User Testing"]};
				const file = "C:/Users/veron/portfolio/src/content/work/GSB.md";
				const url = undefined;
				function rawContent() {
					return "\n## Le projet\n\nIl a été réalisé durant ma formation. C'est un site regroupant plusieurs pages visant à gérer diverses informations en rapport avec des visiteurs médicaux. Chacun ont des caractéristiques bien précise par exemple une spécialité, une région, un nom etc...\nToutes ces infos sont bien sur regroupé dans une base de données que j'ai du exploité avec un colllégue afin de mettre en marche toutes les fonctions du site.\n\n## Les développements\n\nUne touche de mise en page était a réalisé mais, le plus gros du travail ce trouvé dans la création de pages visant afficher des résultats de requêtes SQL complexe afin de faire le lien entre les différentes tables et d'afficher les informations voulus. C'est ici, que les différentes compétences dans le développement et la gestion de base de données ont étés misent a contribution afin de pouvoir créer ces fonctionalitées.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"le-projet","text":"Le projet"},{"depth":2,"slug":"les-développements","text":"Les développements"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
