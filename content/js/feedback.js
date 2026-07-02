//
// ======================================================
// Fogata Feedback
// ======================================================
//
// Construye el contexto mostrado al usuario
// y genera automáticamente la URL del Google Form
// con los campos pre-rellenados.
//
// ======================================================
//

window.addEventListener("DOMContentLoaded", () => {

    //--------------------------------------------------
    // Leer parámetros
    //--------------------------------------------------

    const params = new URLSearchParams(window.location.search);

    const type  = params.get("type")  || "";
    const title = params.get("title") || "";
    const url   = params.get("url")   || "";

    const badge = params.get("badge") || "";
    const code  = params.get("code")  || "";
    const ods   = params.get("ods")   || "";



    //--------------------------------------------------
    // Mostrar contexto
    //--------------------------------------------------

    const context = document.getElementById("feedback-context");

    if (context) {

        let html = "";

        switch (type.toLowerCase()) {

            case "activity":

                html = `
                    <div class="feedback-context-card">

                        <div class="feedback-context-icon">
                            🌲
                        </div>

                        <div class="feedback-context-text">

                            <strong>
                                Estás enviando comentarios sobre esta actividad
                            </strong>

                            <div>
                                ${title}
                            </div>

                        </div>

                    </div>
                `;

                break;



            case "badge":

                html = `
                    <div class="feedback-context-card">

                        <div class="feedback-context-icon">
                            🏅
                        </div>

                        <div class="feedback-context-text">

                            <strong>
                                Estás enviando comentarios sobre esta insignia
                            </strong>

                            <div>
                                ${title}
                            </div>

                        </div>

                    </div>
                `;

                break;



            case "ods":

                html = `
                    <div class="feedback-context-card">

                        <div class="feedback-context-icon">
                            🌍
                        </div>

                        <div class="feedback-context-text">

                            <strong>
                                Estás enviando comentarios sobre este ODS
                            </strong>

                            <div>
                                ${title}
                            </div>

                        </div>

                    </div>
                `;

                break;



            default:

                html = `
                    <p>

                        Gracias por ayudarnos a mejorar
                        <strong>Fogata de Recursos</strong>.

                    </p>
                `;

        }

        context.innerHTML = html;

    }



    //--------------------------------------------------
    // Construir URL del Google Form
    //--------------------------------------------------

    const baseFormUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSdr40wWTdG0Sfg7zW-I3Fnm1Ee9NGMcTJfEIUgwh3PwWHVdiA/viewform";



    //--------------------------------------------------
    // IDs de Google Forms
    //--------------------------------------------------

    const fields = {

        title:
            "entry.1234096209",

        url:
            "entry.883203267",

        type:
            "entry.1111111111",

        badge:
            "entry.2222222222",

        code:
            "entry.3333333333",

        ods:
            "entry.4444444444",

        browser:
            "entry.5555555555"

    };



    //--------------------------------------------------
    // Parámetros
    //--------------------------------------------------

    const formParams = new URLSearchParams();

    formParams.set("embedded", "true");

    if (title)
        formParams.set(fields.title, title);

    if (url)
        formParams.set(fields.url, url);

    if (type)
        formParams.set(fields.type, type);

    if (badge)
        formParams.set(fields.badge, badge);

    if (code)
        formParams.set(fields.code, code);

    if (ods)
        formParams.set(fields.ods, ods);

    formParams.set(
        fields.browser,
        navigator.userAgent
    );



    //--------------------------------------------------
    // Cargar iframe
    //--------------------------------------------------

    const iframe =
        document.getElementById("google-form-iframe");

    if (iframe) {

        iframe.src =
            `${baseFormUrl}?${formParams.toString()}`;

    }

});


