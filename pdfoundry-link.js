Hooks.on("renderItemSheet", (app, html, options) => {
            searchPdfLinks(html);
});

Hooks.on("renderJournalSheet", (app, html, options) => {
            searchPdfLinks(html);
});
function searchPdfLinks (html){
    html.find('.pdfoundry_link').click((ev) => {
                    let element = ev.currentTarget;
                    //console.log (element.dataset);
					ui.PDFoundry.openPDFByName(element.dataset.pdf, parseInt(element.dataset.page));					
            });
}
