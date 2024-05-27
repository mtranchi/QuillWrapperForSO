var quill;

function initQuill(el) {
    quill = new Quill(el, {
        theme: 'snow'
    });

    el.onblur = function () {
        editorBlurred();
    }
}

// InputRichTextEditorDotnet notices the div losing focus and calls this method
function getHtml() {
    return quill.getSemanticHTML();
}


//Quill will bubble up the blur event to dotnet
var GLOBAL = {};
GLOBAL.DotNetReference = null;

function setDotnetReference(pDotNetReference) {
    GLOBAL.DotNetReference = pDotNetReference;
}

function editorBlurred() {
    const html = quill.getSemanticHTML();
    console.log('HTML FROM JS editorBlurred(): ' + html);
    GLOBAL.DotNetReference.invokeMethodAsync('QuillCalled', html);
}
