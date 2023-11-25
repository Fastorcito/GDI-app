import { Router } from 'express'
import pool from '../database.js'

const router = Router();

router.get('/informes_list', async (req, res) => {
    try {
        const [results, fields] = await pool.query('call ObtenerInformeParcial()');
        res.render('informes/informes_list', { informes: results });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get('/informes_edit/:Num_inf', async (req, res) => {
    try {
        const { Num_inf } = req.params;
        const [informe] = await pool.query('CALL ObtenerInformeCompletoPorID(?)', [Num_inf]);
        if (informe && informe.length > 0) {
            res.render('informes/informes_edit', { informe: informe[0][0] });
        } else {
            res.status(404).json({ message: 'Informe no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/informes_edit/:Num_inf', async (req, res) => {
    try {
        const { Num_inf } = req.params;
        const {
            EfeEquiDeEfe,
            InvFin,
            CueCobCom,
            CueCobAso,
            CueCobRel,
            CueCobTer,
            EstCtaDud,
            Mer,
            ProTer,
            SubDeseDes,
            ProdEnPro,
            MatPri,
            MatAuxSumRep,
            EnvEmb,
            InvPorRec,
            DesDeInv,
            ActNoCtes,
            OtrActCor,
            InvMob,
            ProInv,
            GasVen,
            ActDerdeUso,
            ProPlaEqui,
            DepPee,
            Inta,
            ActBio,
            DepActBioAmoAcu,
            ActDif,
            DesActInm,
            OtrActNoCor,
            TotActNet,
            SobBan,
            TriApoSisPenSalPorPagar,
            RemPatPorPag,
            CuePagComTerc,
            CuePagComRel,
            CuePagAccDir,
            CuePagDivRel,
            CuePagDivTer,
            OblFin,
            PagDif,
            Pro,
            Cap,
            TotPas,
            AccInv,
            CapAdiPos,
            CapAdiNeg,
            ResNoRea,
            ExcDeEva,
            ResBruDeUti,
            GasAdm,
            Res,
            ResAcuPos,
            ResAcuNeg,
            UtilEjer,
            PerEje,
            TotPat,
            TotPatPas,
        } = req.body;

        const updatedInforme = {
            Num_inf,
            EfeEquiDeEfe,
            InvFin,
            CueCobCom,
            CueCobAso,
            CueCobRel,
            CueCobTer,
            EstCtaDud,
            Mer,
            ProTer,
            SubDeseDes,
            ProdEnPro,
            MatPri,
            MatAuxSumRep,
            EnvEmb,
            InvPorRec,
            DesDeInv,
            ActNoCtes,
            OtrActCor,
            InvMob,
            ProInv,
            GasVen,
            ActDerdeUso,
            ProPlaEqui,
            DepPee,
            Inta,
            ActBio,
            DepActBioAmoAcu,
            ActDif,
            DesActInm,
            OtrActNoCor,
            TotActNet,
            SobBan,
            TriApoSisPenSalPorPagar,
            RemPatPorPag,
            CuePagComTerc,
            CuePagComRel,
            CuePagAccDir,
            CuePagDivRel,
            CuePagDivTer,
            OblFin,
            PagDif,
            Pro,
            Cap,
            TotPas,
            AccInv,
            CapAdiPos,
            CapAdiNeg,
            ResNoRea,
            ExcDeEva,
            ResBruDeUti,
            GasAdm,
            Res,
            ResAcuPos,
            ResAcuNeg,
            UtilEjer,
            PerEje,
            TotPat,
            TotPatPas,
        };

        await pool.query('call ActualizarInformeFinanciero(?)', [
            updatedInforme
        ]);

        console.log(updatedInforme);
        res.redirect('/informes/informes_list');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default router;