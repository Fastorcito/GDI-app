import handlebars from 'handlebars';

export function registerHandlebarsHelpers() {
    handlebars.registerHelper('formatDate', function (date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('es-ES', options);
    });
}


registerHandlebarsHelpers();
