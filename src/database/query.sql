CREATE DATABASE if_db;
USE if_db;

CREATE TABLE Informe_financiero(
	Num_inf CHAR(11),
	EfeEquiDeEfe INT(10),
	InvFin INT(10),
	CueCobCom INT(10),
	CueCobAso INT(10),
	CueCobRel INT(10),
	CueCobTer INT(10),
	EstCtaDud INT(10),
	Mer INT(10),
	ProTer INT(10),
	SubDeseDes INT(10),
	ProdEnPro INT(10),
	MatPri INT(10),
	MatAuxSumRep INT(10),
	EnvEmb INT(10),
	InvPorRec INT(10),
	DesDeInv INT(10),
	ActNoCtes INT(10),
	OtrActCor INT(10),
	InvMob INT(10),
	ProInv INT(10),
	GasVen INT(10),
	ActDerdeUso INT(10),
	ProPlaEqui INT(10),
	DepPee INT(10),
	Inta INT(10),
	ActBio INT(10),
	DepActBioAmoAcu INT(10),
	ActDif INT(10),
	DesActInm INT(10),
	OtrActNoCor INT(10),
	TotActNet INT(10),
	SobBan INT(10),
	TriApoSisPenSalPorPagar INT(10),
	RemPatPorPag INT(10),
	CuePagComTerc INT(10),
	CuePagComRel INT(10),
	CuePagAccDir INT(10),
	CuePagDivRel INT(10),
	CuePagDivTer INT(10),
	OblFin INT(10),
	PagDif INT(10),
	Pro INT(10),
	Cap INT(10),
	TotPas INT(10),
	AccInv INT(10),
	CapAdiPos INT(10),
	CapAdiNeg INT(10),
	ResNoRea INT(10),
	ExcDeEva INT(10),
	ResBruDeUti INT(10),
	GasAdm INT(10),
	Res INT(10),
	ResAcuPos INT(10),
	ResAcuNeg INT(10),
	UtilEjer INT(10),
	PerEje INT(10),
	TotPat INT(10),
	TotPatPas INT(10),
	PRIMARY KEY(Num_inf)
);

CREATE TABLE Registro_Comprobantes(
	Num_com CHAR(11),
	Tip_Doc ENUM('Boleta','Factura'),
	Ori ENUM('Venta','Compra'),
	Fec DATE,
	Mon_Tot DECIMAL(10,2),
	Num_Inf CHAR(11),
	FOREIGN KEY (Num_inf) REFERENCES Informe_financiero(Num_inf),
	PRIMARY KEY (Num_com)
);

INSERT INTO Informe_Financiero
VALUES
("IF000000001", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
("IF000000002", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

INSERT INTO Registro_Comprobantes (Num_com, Tip_Doc, Ori, Fec, Mon_Tot, Num_Inf)
VALUES
    ('NC000000001', 'Boleta', 'Venta', '2023-09-01', 1000.50, 'IF000000001'),
    ('NC000000002', 'Factura', 'Compra', '2023-09-02', 2500.75, 'IF000000001'),
    ('NC000000003', 'Factura', 'Venta', '2023-09-03', 800.20, 'IF000000001'),
    ('NC000000004', 'Boleta', 'Compra', '2023-09-04', 4500.30, 'IF000000001'),
    ('NC000000005', 'Boleta', 'Venta', '2023-09-05', 1200.90, 'IF000000001'),
    ('NC000000006', 'Factura', 'Compra', '2023-09-06', 3000.60, 'IF000000001'),
    ('NC000000007', 'Boleta', 'Venta', '2023-09-07', 1500.40, 'IF000000001'),
    ('NC000000008', 'Factura', 'Compra', '2023-09-08', 2200.10, 'IF000000001'),
    ('NC000000009', 'Boleta', 'Venta', '2023-09-09', 2800.75, 'IF000000001'),
    ('NC000000010', 'Factura', 'Compra', '2023-09-10', 4000.25, 'IF000000001'),

    ('NC000000011', 'Boleta', 'Venta', '2023-11-01', 1800.30, 'IF000000002'),
    ('NC000000012', 'Boleta', 'Compra', '2023-11-02', 3500.90, 'IF000000002'),
    ('NC000000013', 'Boleta', 'Venta', '2023-11-03', 1200.60, 'IF000000002'),
    ('NC000000014', 'Factura', 'Compra', '2023-11-04', 4800.40, 'IF000000002'),
    ('NC000000015', 'Boleta', 'Venta', '2023-11-05', 2500.20, 'IF000000002'),
    ('NC000000016', 'Factura', 'Compra', '2023-11-06', 3000.10, 'IF000000002'),
    ('NC000000017', 'Boleta', 'Venta', '2023-11-07', 4200.75, 'IF000000002'),
    ('NC000000018', 'Factura', 'Compra', '2023-11-08', 1900.60, 'IF000000002'),
    ('NC000000019', 'Factura', 'Venta', '2023-11-09', 2800.30, 'IF000000002'),
    ('NC000000020', 'Factura', 'Compra', '2023-11-10', 5000.50, 'IF000000002');
    
DELIMITER // 
CREATE TRIGGER monto_negativo 
BEFORE INSERT ON Registro_Comprobantes
FOR EACH ROW 
BEGIN 
    IF NEW.Mon_Tot < 0 THEN 
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'No se permite la inserción de un monto total negativo'; 
    END IF; 
END; 
// 
DELIMITER ; 

  

DELIMITER // 
CREATE TRIGGER fecha_pasada 
BEFORE INSERT ON Registro_Comprobantes
FOR EACH ROW 
BEGIN 
    IF DATEDIFF(NOW(), NEW.Fec) > 60 THEN 
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'No se permite la inserción de comprobantes con más de dos meses de antigüedad'; 
    END IF; 
END; 
// 
DELIMITER ; 

   

DELIMITER // 
CREATE TRIGGER fecha_futura 
BEFORE INSERT ON Registro_Comprobantes
FOR EACH ROW 
BEGIN 
    IF NEW.Fec > CURDATE() THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'No se permite la inserción de comprobantes con fecha futura'; 
    END IF; 
END; 
// 
DELIMITER ; 
DELIMITER // 
CREATE PROCEDURE CalcularTotalMontoPorMes() 
BEGIN 
    SELECT MONTH(Fec) AS Mes, SUM(Mon_Tot) AS Total_Monto 
    FROM Registro_Comprobantes 
    GROUP BY Mes; 
END // 
DELIMITER ; 
  
DELIMITER // 
CREATE PROCEDURE CalcularPromedioMontoPorTipoDocumento() 
BEGIN 
    SELECT MONTH(Fec) AS Mes, Tip_Doc, AVG(Mon_Tot) AS Promedio_Monto 
    FROM Registro_Comprobantes 
    GROUP BY Mes, Tip_Doc; 
END // 
DELIMITER ; 

DELIMITER // 
CREATE PROCEDURE ContarComprobantesPorInforme() 
BEGIN 
    SELECT IFN.Num_inf, COUNT(RC.Num_com) AS Num_Comprobantes 
    FROM Informe_financiero IFN 
    LEFT JOIN Registro_Comprobantes RC ON IFN.Num_inf = RC.Num_Inf 
    GROUP BY IFN.Num_inf; 
END // 
DELIMITER ; 

DELIMITER // 
CREATE PROCEDURE CalcularTotalActivosPorInforme(IN informe_numero CHAR(11)) 
BEGIN 
    SELECT 
        Num_inf, 
        EfeEquiDeEfe + InvFin + CueCobCom + CueCobAso + CueCobRel + 
        CueCobTer + EstCtaDud + Mer + ProTer + SubDeseDes + 
        ProdEnPro + MatPri + MatAuxSumRep + EnvEmb + InvPorRec + 
        DesDeInv + ActNoCtes + OtrActCor + InvMob + ProInv + 
        GasVen + ActDerdeUso + ProPlaEqui + DepPee + Inta + 
        ActBio + DepActBioAmoAcu + ActDif + DesActInm + 
        OtrActNoCor AS 'Total Activos' 
    FROM Informe_financiero 
    WHERE Num_inf = informe_numero; 
END // 
DELIMITER ; 
  
DELIMITER // 
CREATE PROCEDURE CalcularTotalPasivoPorInforme(IN informe_numero CHAR(11)) 
BEGIN 
    SELECT 
        Num_inf, SobBan + TriApoSisPenSalPorPagar + RemPatPorPag + 
        CuePagComTerc + CuePagComRel + CuePagAccDir + CuePagDivRel +  
        CuePagDivTer + OblFin + PagDif + Pro + Cap AS 'Total Pasivo' 
    FROM Informe_financiero 
    WHERE Num_inf = informe_numero; 
END // 
DELIMITER ; 

DELIMITER // 
CREATE PROCEDURE CalcularTotalPatrimonioPorInforme(IN informe_numero CHAR(11)) 
BEGIN 
    SELECT 
        Num_inf, Cap + TotPas + AccInv + CapAdiPos + 
        CapAdiNeg + ResNoRea + ExcDeEva + ResBruDeUti + 
        GasAdm + Res + ResAcuPos + ResAcuNeg + UtilEjer + PerEje AS 'Total Patrimonio' 
    FROM Informe_financiero 
    WHERE Num_inf = informe_numero; 
END // 
DELIMITER ; 

DELIMITER // 
CREATE PROCEDURE CalcularTotalPatrimonioPasivoPorInforme(IN informe_numero CHAR(11)) 
BEGIN 
    SELECT 
        Num_inf, TotPas + TotPat AS 'Total patrimonio y pasivo' 
    FROM Informe_financiero 
    WHERE Num_inf = informe_numero; 
END // 
DELIMITER ; 

DELIMITER // 
CREATE PROCEDURE ObtenerComprobantesInformePorMes(IN mes_consulta INT) 
BEGIN 
    SELECT RC.*, IFN.* 
    FROM Registro_Comprobantes RC 
    INNER JOIN Informe_financiero IFN ON RC.Num_Inf = IFN.Num_inf 
    WHERE MONTH(RC.Fec) = mes_consulta; 
END // 
DELIMITER ; 

  

DELIMITER // 
CREATE PROCEDURE ObtenerComprobantesPorMes(IN mes_consulta INT) 
BEGIN 
    SELECT * 
    FROM Registro_Comprobantes 
    WHERE MONTH(Fec) = mes_consulta; 
END // 
DELIMITER ; 
  
DELIMITER // 
CREATE PROCEDURE ContarComprobantesPorTipoDocumentoEnMes(IN mes_consulta INT) 
BEGIN 
    SELECT Tip_Doc, COUNT(Num_com) AS Num_Comprobantes 
    FROM Registro_Comprobantes 
    WHERE MONTH(Fec) = mes_consulta 
    GROUP BY Tip_Doc; 
END // 
DELIMITER ; 

DELIMITER // 
CREATE PROCEDURE CalcularTotalGeneralInformeFinanciero() 
BEGIN 
    SELECT Num_inf, 
           TotActNet, 
           TotPas, 
           TotPat, 
           TotPatPas, 
           TotActNet + TotPas + TotPat AS Total_General 
    FROM Informe_financiero; 
END // 
DELIMITER ; 

DELIMITER // 
CREATE PROCEDURE CalcularUtilidadEjercicio() 
BEGIN 
    SELECT Num_inf, TotActNet - (GasAdm + GasVen) AS Utilidad_Ejercicio 
    FROM Informe_financiero; 
END // 
DELIMITER ; 

DELIMITER // 
CREATE PROCEDURE ObtenerComprobantes() 
BEGIN 
    SELECT * 
    FROM Registro_Comprobantes;  
END // 
DELIMITER ; 

DELIMITER // 
CREATE PROCEDURE ObtenerComprobantePorID(IN p_comprobante_id CHAR(11))
BEGIN 
    SELECT * 
    FROM Registro_Comprobantes
    WHERE Num_com = p_comprobante_id;
END // 
DELIMITER ;

DELIMITER // 
CREATE PROCEDURE ObtenerInformeCompleto() 
BEGIN 
    SELECT * 
    FROM informe_financiero;  
END // 
DELIMITER ; 

DELIMITER // 
CREATE PROCEDURE ObtenerInformeParcial() 
BEGIN 
    SELECT num_inf, TotActNet, TotPas, TotPat, TotPatPas
    FROM informe_financiero;  
END // 
DELIMITER ; 

DELIMITER // 
CREATE PROCEDURE ObtenerNumerosInformes() 
BEGIN 
    SELECT num_inf
    FROM informe_financiero;  
END // 
DELIMITER ; 

DELIMITER // 
CREATE PROCEDURE ObtenerNumeroUltimoInforme() 
BEGIN
    SELECT *
    FROM Informe_financiero
    ORDER BY Num_inf DESC
    LIMIT 1;
END // 
DELIMITER ; 

DELIMITER //
CREATE PROCEDURE InsertarRegistroComprobante(
    IN num_com CHAR(11),
    IN tip_doc ENUM('Boleta', 'Factura'),
    IN ori ENUM('Venta', 'Compra'),
    IN fec DATE,
    IN mon_tot DECIMAL(10, 2),
    IN num_inf CHAR(11)
)
BEGIN
    INSERT INTO Registro_Comprobantes (Num_com, Tip_Doc, Ori, Fec, Mon_Tot, Num_Inf)
    VALUES (num_com, tip_doc, ori, fec, mon_tot, num_inf);
END //
DELIMITER ;

DELIMITER // 
CREATE PROCEDURE ActualizarComprobante(
    IN p_Num_com CHAR(11),
    IN p_Tip_Doc ENUM('Boleta','Factura'),
    IN p_Ori ENUM('Venta','Compra'),
    IN p_Fec DATE,
    IN p_Mon_Tot DECIMAL(10,2),
    IN p_Num_Inf CHAR(11)
)
BEGIN 
    UPDATE Registro_Comprobantes
    SET 
        Tip_Doc = p_Tip_Doc,
        Ori = p_Ori,
        Fec = p_Fec,
        Mon_Tot = p_Mon_Tot,
        Num_Inf = p_Num_Inf
    WHERE Num_com = p_Num_com;
END // 
DELIMITER ;