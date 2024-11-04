import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_y7JOpsdn.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"la-situation-initiale\">La situation initiale</h2>\n<p>Au départ, l’application était codé entiérement en php. Elle faisait l’état d’un passage en symphony j’ai donc assurer le développement de cette évolution.\nCette application avait pour objectif de montrer les informations présente sur le relevé bancaire d’un compte passé en paramétre  (Nom, identifiant et date)  à une date précise.\nL’affichâge devait lui aussi être rrespectueux des normes du milieu bancaires.\nPlusieurs problèmes et cas spécifiques ont dut être pris en considération afin de pouvoir mettre a disposition des clients une application rapide et sans bugs.</p>\n<h2 id=\"le-déroulement\">Le déroulement</h2>\n<p>C’est avec ce premier projet que j’ai travaillé de façon réellement professionelle avec une gestion de ticketing pour répartir les tâches. J’ai pu\nutilisé pleinement github et son arborescence afin de développer chaque facette de l’application petit a petit. Ainsi, que la structure d’une application à savoir un côté back et un autre front où sont réalisées des tâches bien propres à chacuns. Ce projet à marquer mon entré dans le développement web.</p>";

				const frontmatter = {"title":"Relevé Bancaire","publishDate":"2024-05-07T00:00:00.000Z","img":"/assets/affichCompte.png","img_alt":"Tableau affichant le résultat de la saisi d'un compte","description":"Lors d'un de mes stages j'ai réaliser une application de lecture de relevé bancaire.\n","tags":["Dev"]};
				const file = "C:/Users/veron/portfolio/src/content/work/ReleveBancaire.md";
				const url = undefined;
				function rawContent() {
					return "\n## La situation initiale\n\nAu départ, l'application était codé entiérement en php. Elle faisait l'état d'un passage en symphony j'ai donc assurer le développement de cette évolution. \nCette application avait pour objectif de montrer les informations présente sur le relevé bancaire d'un compte passé en paramétre  (Nom, identifiant et date)  à une date précise.\nL'affichâge devait lui aussi être rrespectueux des normes du milieu bancaires. \nPlusieurs problèmes et cas spécifiques ont dut être pris en considération afin de pouvoir mettre a disposition des clients une application rapide et sans bugs.\n\n## Le déroulement\n\nC'est avec ce premier projet que j'ai travaillé de façon réellement professionelle avec une gestion de ticketing pour répartir les tâches. J'ai pu\nutilisé pleinement github et son arborescence afin de développer chaque facette de l'application petit a petit. Ainsi, que la structure d'une application à savoir un côté back et un autre front où sont réalisées des tâches bien propres à chacuns. Ce projet à marquer mon entré dans le développement web.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"la-situation-initiale","text":"La situation initiale"},{"depth":2,"slug":"le-déroulement","text":"Le déroulement"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
