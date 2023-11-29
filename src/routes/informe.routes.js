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

router.get('/informes_form', async (req, res) => {
    try {

        const [numerosInformePool] = await pool.query('call ObtenerSiguienteNumInforme(@siguienteNumInforme)');

        const [output] = await pool.query('select @siguienteNumInforme AS siguienteNumInforme');
        const numeroInforme = output[0].siguienteNumInforme;

        console.log(output);

        res.render('informes/informes_form', {numeroInforme: numeroInforme});

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/informes_form', async (req, res) => {
    try {
        const {
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
            TotPatPas
        } = req.body;

        await pool.query('call IngresarInformeFinanciero(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
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
            TotPatPas
        ]);
        res.redirect('informes_list')
    } catch (err) {
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
            TotPatPas
        } = req.body;


        await pool.query('call ActualizarInformeFinanciero(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
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
            TotPatPas
        ]);

        //await pool.query('')
        res.redirect('/informes_list');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default router;