/**
 * --> https://developer.helpscout.com/seed/packs/seed-color-scheme/#configurations
 * Enable to determine which is which
 */


/**
 * TODO
 * pop-up pour activer/désactiver l'extension
 * refresh au changement de page
 * dropdown pour changer de thème --> récupérer CSS différente en fonction du choix
 */

// body --> color (and background-color?)
// .c-app-layout --> background-color
// #redactor_modal_overlay --> background-color
// #header --> background-color
// c-app-layout__content --> background-color
// .c-convo-toolbar --> background-color
	// .convo-actions --> background-color
		// .convo-actions > li a > i --> color:
		// .convo-actions > li .caret --> border-color:
		// .convo-actions > li a:hover i --> color:
// #tktInfo h1, #tktSubject > #subject --> color:
// .messageBody --> color:
//#tkHeading
// .chzn-drop, .dropdown-menu, .redactor_dropdown --> background-color, border-color, color
// .sidebar-heading --> color
// .nav-stacked i --> color
// .nav-stacked > li > a --> color

// Separate CSS style-sheet
// .nav-stacked > li > a:hover --> background-color

// const layoutBackgroundDark = `#header`;

const layoutBackground = `
						body,
						#redactor_modal_overlay,
						.c-app-layout__content,
						.c-convo-toolbar,
						.convo-actions,
						.chzn-drop,
						.dropdown-menu,
						.redactor_dropdown,
						.dnZWQz,
						.c-profile__card,
						.apps-history .sidebar-app.open,
						.js-copyEmail hide,
						article.singleLine
						`;

const layoutBackgroundLighter = `
								.c-app-layout,
								.header,
								.apps-history #properties ul.c-sb-list.c-sb-list--two-line li
								`;

const layoutColor = `
					body,
					.convo-actions > li a > i,
					.convo-actions > li a:hover i,
					#tktInfo h1,
					#tktSubject > #subject,
					.messageBody,
					.chzn-drop,
					.dropdown-menu,
					.redactor_dropdown,
					.sidebar-heading,
					.nav-stacked i,
					.nav-stacked > li > a,
					#sidebarProfile .c-profile__card a:not(.detail):not(.show-more):not(.custom-property-url),
					.diTRlJ,
					#sidebarProfile .c-profile__name,
					.apps-history h1,
					.apps-history #properties ul.c-sb-list.c-sb-list--two-line li,
					.apps-history .inner
					`;

const layoutBorderLight = `.convo-actions > li .caret,
					.chzn-drop, 
					.dropdown-menu, 
					.redactor_dropdown`;

const layoutBorderDark = `
					.c-convo-toolbar,
					#tkContent > article
					`;

let layoutElements = [layoutBackground, layoutBackgroundLighter, layoutColor, layoutBorderLight, layoutBorderDark];
 
/**
 * Color constants
 */
const charcoal800 = "#1d2b36;";
const charcoal500 = "#394956;"
const basicDarkColor = "#D9D9D9;";
const basicDarkBorder = "white;";

/**
 * Layout elements object

const layouts = {
	layoutBackground : 
	{
		elements:`
			body,
			#redactor_modal_overlay,
			.c-app-layout__content,
			.c-convo-toolbar,
			.convo-actions,
			.chzn-drop,
			.dropdown-menu,
			.redactor_dropdown,
			.dnZWQz,
			.c-profile__card
			`,
		attribute: "background-color",
		color: "charcoal800"
	},
	layoutBackgroundLighter : 
	{
		elements:`
			.c-app-layout,
			.header
			`,
		attribute: "background-color",
		color: "charcoal500"
	},
	layoutColor : 
	{
		elements:`
			body,
			.convo-actions > li a > i,
			.convo-actions > li a:hover i,
			#tktInfo h1,
			#tktSubject > #subject,
			.messageBody,
			.chzn-drop,
			.dropdown-menu,
			.redactor_dropdown,
			.sidebar-heading,
			.nav-stacked i,
			.nav-stacked > li > a,
			#sidebarProfile .c-profile__card a:not(.detail):not(.show-more):not(.custom-property-url),
			.diTRlJ
			`,
		attribute: "color",
		color: "basicDarkColor"
	},
	layoutBorderLight :
	{
		elements:`
			.convo-actions > li .caret,
			.chzn-drop,
			.dropdown-menu,
			.redactor_dropdown`,
		attribute: "border-color",
		color: "basicDarkBorder"
	}
}

for (let layout in layouts) {
	let layoutObj  = layouts[layout];
	for (let object in layoutObj) {
		console.log(object);
		let 
	}
}

*/

/**
 * iterate over objects
 * --> https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/
 * --> https://dev.to/ddrummer3993/nested-object-iteration-using-multiple-forin-loops-4k6l
 */

function addElementColor(elements) {
	let attribute;
	let value;
	switch (elements) {
		// case layoutBackgroundDark:
		// 	attribute = "background-color";
		// 	value = "black";
		// 	break;
		case layoutBackground:
			attribute = "background-color";
			value = charcoal500;
			break;
		case layoutBackgroundLighter:
			attribute = "background-color";
			value = charcoal800;
			break;
		case layoutColor:
			attribute = "color";
			value = basicDarkColor;
			break;
		case layoutBorderLight:
			attribute = "border-color";
			value = basicDarkBorder;
			break;
		case layoutBorderDark:
			attribute = "border-bottom";
			value = `1px solid ${charcoal800}`;
			break;
		default:
			console.log("no such element");
	}

	document.querySelectorAll(elements).forEach( element => {
		element.style.cssText += `${attribute}: ${value};`;
		console.log(`${element.className}: ${element.style.cssText}`);
	});
}

document.onload = layoutElements.forEach(element => {
	addElementColor(element);
});

// const elementsBackground = document.querySelectorAll(layoutBackground);
// console.log(elementsBackground)
// const elementsBackgroundLighter = document.querySelectorAll(layoutBackgroundLighter);
// const elementsColor = document.querySelectorAll(layoutColor);
// const elementsBorder = document.querySelectorAll(layoutBorderLight);




// elementsBackground.forEach( element => {
// 	element.style.cssText += basicDarkBackground;
// 	console.log(element.style.cssText);
// });

// elementsBackgroundLighter.forEach( element => {
// 	element.style.cssText += basicDarkBackgroundLighter;
// })

// elementsColor.forEach(element => {
// 	element.style.cssText += basicDarkColor;
// });

// elementsBorder.forEach(element => {
// 	element.style.cssText += basicDarkBorder;
// });


/**
 * Won't work, needs to add a class --> need to add it to an external CSS stylesheet
 **/
// const layoutBackgroundHover = `
// 						.nav-stacked > li > a:hover
// 						`;

// const elementsBackgroundHover = document.querySelectorAll(layoutBackgroundHover);

// const basicDarkBackgroundHover = "background-color: #394956;";

// elementsBackgroundHover.forEach( element => {
// 	element.style.cssText += basicDarkBackgroundHover;
// });

// select stylesheet
// 