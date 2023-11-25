import handlebars from 'handlebars';

export function registerHandlebarsHelpers() {
    handlebars.registerHelper('formatDate', function (date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('es-PE', options);
    });
}

// Llama a esta función para registrar el helper
registerHandlebarsHelpers();
