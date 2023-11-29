import {Router} from 'express'
import pool from '../database.js'

const router = Router();

router.get('/consultas', async (req, res) => {
    try {
        res.render('consultas/consultas_menu');
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

router.get('/consultas/PromedioMontoPorTipo', async (req, res) => {
    try {
        const [result] = await pool.query('call CalcularPromedioMontoPorTipoDocumento()')
        res.render('consultas/consultas_PromedioMontoPorTipoDocumento', {result: result[0]});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.get('/consultas/ContarComprobantesPorInforme', async (req, res) => {
    try {
        const [result] = await pool.query('call ContarComprobantesPorInforme()')
        res.render('consultas/consultas_ContarComprobantesPorInforme', {result: result[0]})
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.get('/consultas/ObtenerComprobantesInformePorMes', async (req, res) => {
    try {
        const { mes } = req.query;
        const [result] = await pool.query('call ObtenerComprobantesInformePorMes(?)', [mes])
        
        const totales = result[0];
        console.log(totales);
        res.render('consultas/consultas_ObtenerComprobantesInformePorMes', {result: result[0], totales: totales});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});



export default router;