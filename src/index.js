import express from 'express'
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'
import comprobanteRoutes from './routes/comprobante.routes.js'
import { registerHandlebarsHelpers } from './handlebars-helpers.js';


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
registerHandlebarsHelpers();

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas
app.get('/', (req, res) => {
    res.render('index')
})
app.use(comprobanteRoutes); 

//public
app.use(express.static(join(__dirname, 'public')));

//correr
app.listen(app.get('port'), () => {
    console.log('listening on port', app.get('port'));
});