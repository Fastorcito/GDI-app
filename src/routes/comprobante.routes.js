import {Router} from 'express'
import pool from '../database.js'

const router = Router();

router.get('/comprobantes_form', (req, res) => {
    res.render('comprobantes/comprobantes_form');
})

router.post('/comprobantes_form', async (req, res) => {
    try {
        const {Num_com, Tip_Doc, Ori, Fec, Mon_Tot, Num_Inf} = req.body;
        const newComprobante = {
            Num_com, Tip_Doc, Ori, Fec, Mon_Tot, Num_Inf
        }
        await pool.query('call InsertarComprobante(?)', [newComprobante]);
        res.redirect('comprobantes/comprobantes_list')
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
})

router.get('/comprobantes_list', async (req, res) => {
    try {
        const [results, fields] = await pool.query('call ObtenerComprobantes()');
        res.render('comprobantes/comprobantes_list', {comprobantes: results});
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
})

router.get('/comprobantes_edit/:Num_com', async (req, res) => {
    try {
        const {Num_com} = req.params;
        const [comprobante] = await pool.query('call ObtenerComprobantePorID(?)', [Num_com]);
        const comprobanteEdit = comprobante[0];
        res.render('comprobantes/comprobantes_edit', {comprobante: comprobanteEdit});
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
})

router.post('/comprobantes_edit/:Num_com', async (req, res) => {
    try {
        const {Num_com, Tip_Doc, Ori, Fec, Mon_Tot, Num_Inf} = req.body;
        const editComprobante = {
            Num_com, Tip_Doc, Ori, Fec, Mon_Tot, Num_Inf
        }
        await pool.query('call ActualizarComprobante(?)', [editComprobante])
        res.redirect('comprobantes/comprobantes_list');
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
})

export default router;