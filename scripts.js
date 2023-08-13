const header = document.querySelector('.headline')
const form = document.querySelector('.form')
const hamburger = document.querySelector('.hamburger')
const hamdiv = document.querySelector('.hamburger div')
const options = form.querySelectorAll('.option')
const answers = document.querySelectorAll('.ans')
const buttons = document.querySelectorAll('button')
const question = document.querySelector('.que')
const alertBox = document.querySelector('.alert__box')
const alertBoxScore = document.querySelector('.alert__box span')
const score = document.querySelector('.score')
const totalScore = document.querySelector(".total__score")
const themeSelector = document.querySelector('.theme_mode')
const installBtn = document.querySelector('.install__btn')
jsonData = {
    "response_code": 0,
    "results": [
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Consejo Rector del Instituto Canario de Seguridad Laboral est� integrado por los\nsiguientes �rganos:\n",
            "correct_answer": " El Pleno y la Secretar�a.",
            "incorrect_answers": [
                " El Pleno y la Comisi�n Permanente.\n",
                " El Pleno y la Comisi�n Asesora.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Las se�ales de advertencia tendr�n forma:\n",
            "correct_answer": " Cuadrada.\n",
            "incorrect_answers": [
                " Triangular.\n",
                " Circular."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Real Decreto 486/1997, por el que se establecen las disposiciones m�nimas de\nseguridad y salud en los lugares de trabajo, es de fecha:\n",
            "correct_answer": " 15 de abril.\n",
            "incorrect_answers": [
                " 14 de marzo.\n",
                " 14 de abril."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con la Constituci�n Espa�ola, la educaci�n tendr� por objeto:\n",
            "correct_answer": " El pleno desarrollo de la personalidad humana en el respeto de los principios democr�ticos\nde convivencia, y a los derechos y libertades fundamentales.\n",
            "incorrect_answers": [
                " El pleno desarrollo de la personalidad humana conforme a los planes educativos aprobados\npor el Consejo Escolar Nacional a instancia de las Asociaciones Nacionales de Padres de\nAlumnos.\n",
                " El pleno desarrollo de la personalidad humana en el respeto de los principios democr�ticos\nmarcados por cada colectivo educativo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Indique cu�l de las siguientes afirmaciones es correcta, siguiendo lo establecido en el\nEstatuto de Autonom�a de Canarias:\n",
            "correct_answer": " En su condici�n de regi�n ultraperif�rica, La Comunidad Aut�noma de Canarias, a trav�s de\nf�rmulas de cooperaci�n y colaboraci�n con el Estado, en materia de comercio exterior con\n�frica y pa�ses de Am�rica con vinculaciones hist�ricas con Canarias.\n",
            "incorrect_answers": [
                " En su condici�n de regi�n atl�ntica, la Comunidad Aut�noma de Canarias, a trav�s de\nf�rmulas de colaboraci�n con el Estado, en materia de pol�tica democr�tica con �frica y\npa�ses de Am�rica con vinculaciones hist�ricas con Canarias.\n",
                " En su condici�n de regi�n ultraperif�rica, La Comunidad Aut�noma de Canarias, a trav�s de\nf�rmulas de cooperaci�n y colaboraci�n con el Estado, en materia de comercio exterior con\nlos pa�ses de la Uni�n Europea y Am�rica."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se considerar�n como �da�os derivados del trabajo�, seg�n la Ley de prevenci�n de\nRiesgos Laborales, 31/1995, de 8 de noviembre:\n",
            "correct_answer": " Cualquier lesi�n que sufra el trabajador en su vida diaria.\n",
            "incorrect_answers": [
                " Enfermedades, patolog�as o lesiones sufridas con motivo u ocasi�n del trabajo.\n",
                " Enfermedades profesionales y riesgos no laborales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Anexo I del Real Decreto 485/1997, el color amarillo o amarillo anaranjado en\nlas se�ales indica:\n",
            "correct_answer": " Se�al de advertencia.",
            "incorrect_answers": [
                " Se�al de salvamento de auxilio.\n",
                " Peligro-alarma.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el Real Decreto 1311/2005, de 4 de noviembre, sobre la protecci�n de\nla salud y la seguridad de los trabajadores frente a los riesgos derivados o que puedan\nderivarse de la exposici�n a vibraciones mec�nicas, para la vibraci�n transmitida al\nsistema mano-brazo el valor de exposici�n diaria normalizado para un per�odo de\nreferencia de ocho horas que da lugar a una acci�n, se fija en:\n",
            "correct_answer": " 2,5m/s2\n",
            "incorrect_answers": [
                " 8m/s2\n",
                " 5m/s2"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El �rgano colegiado adscrito al Ministerio de Trabajo y Asuntos Sociales se denomina\nconforme el art. 30 de la Ley Org�nica 1/2004, de Medidas de Protecci�n Integral contra\nla Violencia de G�nero:\n",
            "correct_answer": " Observatorio Estatal de Violencia sobre la Mujer.",
            "incorrect_answers": [
                " Observatorio Estatal de Igualdad y Violencia de G�nero.\n",
                " Observatorio Estatal de Violencia de G�nero.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 31/1995, de Prevenci�n de Riesgos Laborales, el Servicio de Prevenci�n\ntendr� car�cter:\n",
            "correct_answer": " Sanitario.\n",
            "incorrect_answers": [
                " Interdisciplinario.\n",
                " Administrativo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El �rgano colegiado adscrito al Ministerio de Trabajo y Asuntos Sociales se denomina\nconforme el art. 30 de la Ley Org�nica 1/2004, de Medidas de Protecci�n Integral contra\nla Violencia de G�nero:\n",
            "correct_answer": " Observatorio Estatal de Igualdad y Violencia de G�nero.\n",
            "incorrect_answers": [
                " Observatorio Estatal de Violencia de G�nero.\n",
                " Observatorio Estatal de Violencia sobre la Mujer."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n regula la Constituci�n Espa�ola, las Banderas y ense�as propias de las\nComunidades Aut�nomas, reconocidas en sus Estatutos:\n",
            "correct_answer": " Se utilizar�n junto con la espa�ola s�lo en los actos oficiales de car�cter estatal.\n",
            "incorrect_answers": [
                " Se utilizar�n junto a la espa�ola en sus edificios p�blicos y en sus actos oficiales.\n",
                " La utilizaci�n conjunta de la bandera de Espa�a y la de cada Comunidad Aut�noma es\npotestad de las autoridades de la administraci�n auton�mica."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Real Decreto 374/2001 sobre la protecci�n de la salud y seguridad de los\ntrabajadores contra los riesgos relacionados con los agentes qu�micos durante el trabajo,\nel valor l�mite de la concentraci�n media, medida o calculada de forma ponderada con\nrespecto al tiempo para la jornada laboral real y referida a una jornada est�ndar de ocho\nhoras diarias, se entiende por:\n",
            "correct_answer": " Valor l�mite ambiental para exposiciones de corta duraci�n.",
            "incorrect_answers": [
                " Valor l�mite ambiental para la exposici�n diaria.\n",
                " Valor l�mite ambiental para la exposici�n horaria.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contrato de servicios:\n",
            "correct_answer": " Aquellos cuyo objeto son prestaciones de hacer consistentes en el desarrollo de una\nactividad o dirigidas a la obtenci�n de un resultado distinto de una obra o suministro,\nincluyendo aquellos en que el adjudicatario se obligue a ejecutar el servicio de forma\nsucesiva y por precio unitario.",
            "incorrect_answers": [
                " Aquellos en los que se est� obligado a proyectar, ejecutar, conservar, reponer y reparar\naquellas obras que sean accesorias o est�n vinculadas con la principal y que sean\nnecesarias para que esta cumpla la finalidad determinante de su construcci�n.\n",
                " Aquellos que tienen por objeto la adquisici�n, el arrendamiento financiero, o el\narrendamiento, con o sin opci�n de compra, de productos o bienes muebles.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con 4 del texto refundido de la Ley sobre Infracciones y Sanciones\nen el Orden Social, las infracciones graves en materia de prevenci�n riesgos laborales\nprescriben:\n",
            "correct_answer": " Al a�o.",
            "incorrect_answers": [
                " A los tres a�os.\n",
                " A los seis a�os.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Entre los principios de la acci�n preventiva que recoge la Ley 31/1995, de Prevenci�n\nde Riesgos laborales, figuran:\n",
            "correct_answer": " No evitar los riesgos.",
            "incorrect_answers": [
                " Evaluar los riesgos que no se puedan evitar y combatir los riesgos en su origen.\n",
                " No tener en cuenta la evoluci�n de la t�cnica y no sustituir lo peligroso por lo que entra�e\npoco o ning�n peligro.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En el Plan de actuaci�n de Emergencias deben definirse las acciones a desarrollar\npara el control inicial de las emergencias, garantiz�ndose la alarma, la evacuaci�n y el\nsocorro. El Plan comprender�:\n",
            "correct_answer": " Identificaci�n y clasificaci�n de las emergencias, Procedimientos de actuaci�n ante\nemergencias, e identificaci�n del responsable de la puesta en marcha del Plan de Actuaci�n\nante Emergencias.\n",
            "incorrect_answers": [
                " Identificaci�n y clasificaci�n de las emergencias, procedimientos de actuaci�n ante\nemergencias, identificaci�n y funciones de las personas y equipos que llevar�n a cabo los\nprocedimientos de actuaci�n en emergencias e identificaci�n del responsable de la puesta\nen marcha del Plan de Actuaci�n ante Emergencias.\n",
                " Identificaci�n y clasificaci�n de las emergencias, Procedimientos de actuaci�n ante\nemergencias, Identificaci�n y funciones de las personas y equipos que llevar�n a cabo los\nprocedimientos de actuaci�n en emergencias."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Real Decreto 485/1997, establece las disposiciones m�nimas para:\n",
            "correct_answer": " La se�alizaci�n de seguridad y salud en el �mbito dom�stico.\n",
            "incorrect_answers": [
                " La se�alizaci�n de carreteras y viales.\n",
                " La se�alizaci�n de seguridad y salud en el trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Es una funci�n del Pleno del Consejo Rector del Instituto Canario de Seguridad\nLaboral:\n",
            "correct_answer": " Realizar estudios e informes en relaci�n con la siniestralidad laboral e investigaciones que\ndesarrolle el Instituto.\n",
            "incorrect_answers": [
                " Aprobar el Plan de prevenci�n de riesgos laborales de Canarias.\n",
                " Gestionar de forma integrada los recursos humanos, f�sicos y financieros del Instituto\nCanario de Seguridad Laboral."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Qu� tipo de competencia le corresponde a la Comunidad Aut�noma de Canarias en\nmateria de la ordenaci�n del sector pesquero?\n",
            "correct_answer": " Prioritaria.",
            "incorrect_answers": [
                " Desarrollo legislativo y ejecuci�n.\n",
                " Ejecutiva.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Reglamento de instalaciones de protecci�n contra incendios 513/2017 establece\nque su objeto es:\n",
            "correct_answer": " La determinaci�n de las condiciones y los requisitos exigibles al dise�o,\ninstalaci�n/aplicaci�n, mantenimiento e inspecci�n de los equipos, sistemas y componentes\nque conforman las instalaciones de protecci�n activa contra incendios.\n",
            "incorrect_answers": [
                " La determinaci�n de los requisitos exigibles al dise�o, instalaci�n/aplicaci�n, mantenimiento\ne inspecci�n de los equipos, sistemas y componentes que conforman las instalaciones de\nprotecci�n pasiva contra incendios.\n",
                " La determinaci�n de requisitos exigibles al dise�o, instalaci�n/aplicaci�n, mantenimiento e\ninspecci�n de los equipos, sistemas y componentes que conforman las instalaciones de\nprotecci�n pasiva contra combustiones."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Puede la Administraci�n celebrar contratos administrativos verbalmente?\n",
            "correct_answer": " La Administraci�n no podr� contratar verbalmente, salvo pacto excepcional realizado con la\nempresa y previo informe de la Junta Consultiva de Contrataci�n Administrativa.",
            "incorrect_answers": [
                " La Administraci�n no podr� contratar verbalmente, en ning�n caso.\n",
                " La Administraci�n no podr� contratar verbalmente, salvo que el contrato tenga car�cter de\nemergencia.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A los efectos de aplicaci�n del Reglamento sobre protecci�n de la salud contra los\nriesgos derivados de la exposici�n a las radiaciones ionizantes, se entender� por\nefluentes radiactivos:\n",
            "correct_answer": " Productos radiactivos procedentes del petr�leo.",
            "incorrect_answers": [
                " Productos radiactivos residuales en forma l�quida o gaseosa.\n",
                " Productos radiactivos residuales en forma s�lida.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el\nReglamento de Servicios de Prevenci�n, su Anexo VIII incluye una lista no exhaustiva de\nagentes y condiciones de trabajo a los cuales no podr� haber riesgo de exposici�n por\nparte de trabajadoras embarazadas o en per�odo de lactancia natural, entre las que se\nencuentra:\n",
            "correct_answer": " Radiaciones no ionizantes.\n",
            "incorrect_answers": [
                " Calor suave.\n",
                " Radiaciones ionizantes."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Entre los principios de la acci�n preventiva que recoge la Ley 31/1995, de Prevenci�n\nde Riesgos laborales, figuran:\n",
            "correct_answer": " Evaluar los riesgos que no se puedan evitar y combatir los riesgos en su origen.\n",
            "incorrect_answers": [
                " No tener en cuenta la evoluci�n de la t�cnica y no sustituir lo peligroso por lo que entra�e\npoco o ning�n peligro.\n",
                " No evitar los riesgos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Defensor del Pueblo:\n",
            "correct_answer": " Es designado por el Congreso de los Diputados, dando cuenta de su actividad al Rey.\n",
            "incorrect_answers": [
                " Es designado por las Cortes Generales, a las que dar� cuenta.\n",
                " Es designado por el Gobierno de la Naci�n, al que dar� cuenta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La competencia de la Comunidad Aut�noma en materia de pol�ticas de g�nero viene\nregulada en el Estatuto de Autonom�a de Canarias, en su art�culo:\n",
            "correct_answer": " 145.",
            "incorrect_answers": [
                " 146.\n",
                " 144.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Plan de autoprotecci�n tendr� vigencia:\n\"",
            "correct_answer": " Determinada se mantendr� adecuadamente actualizado, y se revisar�, al menos, con una\"\nperiodicidad no superior a un a�o.",
            "incorrect_answers": [
                " Indeterminada se mantendr� adecuadamente actualizado, y se revisar�, al menos, con una\"\nperiodicidad no superior a tres a�os.\n\"",
                " Indeterminada se mantendr� adecuadamente actualizado, y se revisar�, al menos, con una\"\nperiodicidad no superior a cinco a�os.\n\""
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El conjunto de interrelacionados y ordenados que tienen por objeto percibir un\nfen�meno propio de un incendio y transmitir el aviso de su existencia al lugar afectado o\na otro lugar establecido para este fin, se conoce como:\n",
            "correct_answer": " El sistema de detecci�n y alarma.\n",
            "incorrect_answers": [
                " El sistema de prevenci�n y alarma.\n",
                " El sistema de contenci�n y alarma."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El n�mero, la duraci�n y el momento de realizaci�n de las mediciones, conforme al\nReal Decreto 286/2006, de 10 de marzo:\n",
            "correct_answer": " Tendr�n que elegirse teniendo en cuenta que el objetivo b�sico de �stas es el de posibilitar\nla toma de decisi�n sobre el tipo de actuaci�n preventiva que deber� emprenderse en virtud\nde lo dispuesto en el Real Decreto 286/2006. Por ello, cuando uno de los l�mites o niveles\nestablecidos en el mismo se sit�e dentro del intervalo de incertidumbre del resultado de la\nmedici�n podr� optarse: a) por suponer que no se supera dicho l�mite o nivel, o b) por no\nincrementar (seg�n el instrumental utilizado) el n�mero de las mediciones (tratando\nestad�sticamente los correspondientes resultados) y/o su duraci�n (llegando, en el l�mite, a\nque el tiempo de medici�n coincida con el de exposici�n), hasta conseguir la necesaria\nreducci�n del intervalo de incertidumbre correspondiente.",
            "incorrect_answers": [
                " Tendr�n que elegirse teniendo en cuenta que el objetivo b�sico de �stas es el de posibilitar\nla toma de decisi�n sobre el tipo de actuaci�n preventiva que deber� emprenderse en virtud\nde lo dispuesto en el Real Decreto 286/2006. Por ello, cuando uno de los l�mites o niveles\nestablecidos en el mismo se sit�e dentro del intervalo de incertidumbre del resultado de la\nmedici�n podr� optarse: a) por suponer que se supera dicho l�mite o nivel, o ",
                " por\nincrementar (seg�n el instrumental utilizado) el n�mero de las mediciones (tratando\nestad�sticamente los correspondientes resultados) y/o su duraci�n (llegando, en el l�mite, a\nque el tiempo de medici�n coincida con el de exposici�n), hasta conseguir la necesaria\nreducci�n del intervalo de incertidumbre correspondiente.\nb) Tendr�n que elegirse teniendo en cuenta que el objetivo b�sico de �stas es el de posibilitar\nla toma de decisi�n sobre el tipo de actuaci�n preventiva que deber� emprenderse en virtud\nde lo dispuesto en el Real Decreto 286/2006. Por ello, cuando uno de los l�mites o niveles\nestablecidos en el mismo se sit�e dentro del intervalo de incertidumbre del resultado de la\nmedici�n podr� optarse: a) por suponer que se supera dicho l�mite o nivel, o b) por\nincrementar (seg�n el instrumental utilizado) el n�mero de las mediciones (tratando\nestad�sticamente los correspondientes resultados) pero no su duraci�n (llegando, en el l�mite,\na que el tiempo de medici�n coincida con el de exposici�n), hasta conseguir la necesaria\nreducci�n del intervalo de incertidumbre correspondiente.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se�ale la afirmaci�n correcta. De acuerdo con la Ley 38/2003 General de Subvenciones\nser� nula la resoluci�n de una concesi�n que:\n",
            "correct_answer": " Se otorgue a favor de persona que no haya justificado la entrega de los fondos percibidos.\n",
            "incorrect_answers": [
                " Sea constitutiva de infracci�n administrativa.\n",
                " Se otorgue a favor de persona que no est� al corriente de sus obligaciones tributarias."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se�ale la afirmaci�n correcta. De acuerdo la Ley 38/2003, la subvenci�n es un instrumento\nde la actividad administrativa:\n",
            "correct_answer": " De servicio p�blico.\n",
            "incorrect_answers": [
                " De limitaci�n.\n",
                " De fomento."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El art�culo 5 del Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la\nnormativa sobre prevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma\nde Canarias y sus Organismos Aut�nomos, establece que se constituir� un Comit� de\nSeguridad y Salud:\n",
            "correct_answer": " En cada Departamento que cuente con 40 o m�s empleados p�blicos, sin distinci�n del\nr�gimen jur�dico que rija su relaci�n de servicio.",
            "incorrect_answers": [
                " En cada Departamento que cuente con 50 o m�s empleados p�blicos, sin distinci�n del\nr�gimen jur�dico que rija su relaci�n de servicio.\n",
                " En cada Departamento que cuente con 70 o m�s empleados p�blicos, sin distinci�n del\nr�gimen jur�dico que rija su relaci�n de servicio.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Conforme a la Ley General de Subvenciones, el procedimiento de concesi�n de una\nsubvenci�n en r�gimen de concurrencia competitiva se inicia:\n",
            "correct_answer": " De oficio mediante convocatoria aprobada por el �rgano competente.",
            "incorrect_answers": [
                " A instancia de los beneficiarios de una subvenci�n.\n",
                " A instancia del centro gestor de los cr�ditos a distribuir.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Conforme al Estatuto B�sico del Empleado P�blico, �qu� derechos retributivos se\nreconocen a las funcionarias v�ctimas de violencia de g�nero que pasen a la situaci�n de\nexcedencia por raz�n de violencia de g�nero?\n",
            "correct_answer": " El abono de las retribuciones complementarias durante los dos primeros meses.\n",
            "incorrect_answers": [
                " El abono de las retribuciones b�sicas durante los dos primeros meses.\n",
                " El abono de las retribuciones �ntegras durante los dos primeros meses."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con la Constituci�n Espa�ola, la educaci�n tendr� por objeto:\n",
            "correct_answer": " El pleno desarrollo de la personalidad humana en el respeto de los principios democr�ticos\nde convivencia, y a los derechos y libertades fundamentales.\n",
            "incorrect_answers": [
                " El pleno desarrollo de la personalidad humana conforme a los planes educativos aprobados\npor el Consejo Escolar Nacional a instancia de las Asociaciones Nacionales de Padres de\nAlumnos.\n",
                " El pleno desarrollo de la personalidad humana en el respeto de los principios democr�ticos\nmarcados por cada colectivo educativo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En un plan de emergencias, cuando nos referimos a la acci�n de traslado planificado\nde las personas, afectadas por una emergencia, de un lugar a otro provisional seguro,\nnos estamos refiriendo a:\n",
            "correct_answer": " Alerta.",
            "incorrect_answers": [
                " Intervenci�n.\n",
                " Evacuaci�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el EBEP, los funcionarios p�blicos tienen derecho, por asuntos particulares, hasta:\n",
            "correct_answer": " 5 d�as.\n",
            "incorrect_answers": [
                " 7 d�as.\n",
                " 6 d�as."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, las personas jur�dicas solo\npodr�n ser adjudicatarias de contratos:\n",
            "correct_answer": " Cuyas prestaciones no est�n comprendidas dentro de los fines, objeto o �mbito de actividad\nque, a tenor de sus estatutos o reglas fundacionales, les sean propios.\n",
            "incorrect_answers": [
                " Cuyas prestaciones est�n comprendidas dentro de los fines, objeto o �mbito de actividad\nque, a tenor de sus estatutos o reglas fundacionales, les sean propios.\n",
                " Ninguna de las anteriores es correcta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Real Decreto 314/2006, de 17 de marzo, por el que aprueba el C�digo T�cnico de la\nEdificaci�n, establece las exigencias b�sicas de incendios en:\n",
            "correct_answer": " Art�culo 9.",
            "incorrect_answers": [
                " Art�culo 11.\n",
                " Art�culo 5.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Real Decreto 374/2001 sobre la protecci�n de la salud y seguridad de los\ntrabajadores contra los riesgos relacionados con los agentes qu�micos durante el trabajo,\nse entiende como agente qu�mico:\n",
            "correct_answer": " Todo elemento o compuesto qu�mico, por s� solo o mezclado, tal como se presenta en estado\nnatural o es producido, utilizado o vertido, incluido el vertido como residuo, en una actividad\nlaboral, se haya elaborado o no de modo intencional y se haya comercializado o no.\n",
            "incorrect_answers": [
                " Presencia de un agente qu�mico en el lugar de trabajo que implica el contacto de �ste con\nel trabajador, normalmente por inhalaci�n o por v�a d�rmica.\n",
                " Todo elemento o compuesto f�sico, por s� solo o mezclado, tal como se presenta en estado\nnatural o es producido, utilizado o vertido, incluido el vertido como residuo, en una actividad\nlaboral, se haya elaborado o no de modo intencional y se haya comercializado o no."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El contenido m�nimo del registro de establecimientos regulados por la Norma B�sica\nde Autoprotecci�n de los centros, establecimientos y dependencias, dedicados a\nactividades que puedan dar origen a situaciones de emergencia, en cuanto a los datos\nestructurales, pueden ser:\n",
            "correct_answer": " Tipo estructura, n�mero de plantas sobre y bajo rasante, Superficie �til o construida (por\nplantas), n�mero de salidas al exterior, n�mero de escaleras interiores, n�mero de escaleras\nexteriores, sectorizaci�n de incendios, Informaci�n relevante sobre la estructura y/o edificio,\nubicaci�n llaves de corte de suministros energ�ticos (gas, electricidad, gasoil...).",
            "incorrect_answers": [
                " N�mero de empleados, n�mero de ocupantes, tipo estructura, n�mero de plantas sobre y\nbajo rasante, n�mero de salidas al exterior, n�mero de escaleras interiores, n�mero de\nescaleras exteriores.\n",
                " N�mero de empleados, tipo estructura, n�mero de plantas sobre y bajo rasante, n�mero de\nsalidas al exterior, n�mero de escaleras interiores, n�mero de escaleras exteriores.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El conjunto de interrelacionados y ordenados que tienen por objeto percibir un\nfen�meno propio de un incendio y transmitir el aviso de su existencia al lugar afectado o\na otro lugar establecido para este fin, se conoce como:\n",
            "correct_answer": " El sistema de detecci�n y alarma.\n",
            "incorrect_answers": [
                " El sistema de prevenci�n y alarma.\n",
                " El sistema de contenci�n y alarma."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �A qu� hace referencia la definici�n: aviso o se�al por la que se informa a las personas\npara que sigan instrucciones espec�ficas ante una situaci�n de emergencia?\n",
            "correct_answer": " Alarma.\n",
            "incorrect_answers": [
                " Alerta.\n",
                " Autoprotecci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La norma que regula en la actualidad el Estatuto de Autonom�a de Canarias es:\n",
            "correct_answer": " Ley Org�nica 10/1982.\n",
            "incorrect_answers": [
                " Ley Org�nica 1/2018.\n",
                " Ley 4/1996."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �La Comunidad Aut�noma de Canarias puede ejercer actividades de inspecci�n y\nsanci�n en materias de una competencia estatal, de conformidad con lo establecido en\nel Estatuto de Autonom�a de Canarias?\n",
            "correct_answer": " Siempre, dentro del territorio auton�mico.",
            "incorrect_answers": [
                " S�, si existe convenio o acuerdo con el Estado.\n",
                " Nunca podr� ejercerlas.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Son criterios m�nimos para la elaboraci�n del plan de autoprotecci�n:\n",
            "correct_answer": " Se establecer� una estructura desorganizada y no jerarquizada, dentro de la organizaci�n y\npersonal existente, fijando las funciones y responsabilidades de todos sus miembros en\nsituaciones de emergencia.\n",
            "incorrect_answers": [
                " Se designar�, por parte del titular de la actividad, una persona como responsable �nica para\nla gesti�n de las actuaciones encaminadas a la prevenci�n y el control de riesgos.\n",
                " Se designar�, por parte del titular de la actividad, una o varias personas como responsable\npara la gesti�n de las actuaciones encaminadas a la prevenci�n y el control de riesgos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Son criterios m�nimos para la elaboraci�n del plan de autoprotecci�n:\n",
            "correct_answer": " Se designar�, por parte del titular de la actividad, una o varias personas como responsable\npara la gesti�n de las actuaciones encaminadas a la prevenci�n y el control de riesgos.",
            "incorrect_answers": [
                " Se designar�, por parte del titular de la actividad, una persona como responsable �nica para\nla gesti�n de las actuaciones encaminadas a la prevenci�n y el control de riesgos.\n",
                " Se establecer� una estructura desorganizada y no jerarquizada, dentro de la organizaci�n y\npersonal existente, fijando las funciones y responsabilidades de todos sus miembros en\nsituaciones de emergencia.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Conforme al Estatuto B�sico del Empleado P�blico �qu� tipo de personal es el que, en\nvirtud de nombramiento y con car�cter no permanente, s�lo realiza funciones\nexpresamente calificadas como de confianza o de asesoramiento especial?\n",
            "correct_answer": " Personal eventual.\n",
            "incorrect_answers": [
                " Funcionario interino.\n",
                " Personal directivo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Para la Constituci�n Espa�ola, la defensa de los consumidores a cargo de los poderes\np�blicos proteger�, por procedimientos eficaces:\n",
            "correct_answer": " La seguridad de los consumidores.\n",
            "incorrect_answers": [
                " La libre competencia.\n",
                " La econom�a de mercado."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el art�culo 12 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, incumplir la obligaci�n de integrar la prevenci�n de riesgos\nlaborales en la empresa a trav�s de la implantaci�n y aplicaci�n de un plan de prevenci�n,\ncon el alcance y contenido establecido en la normativa de prevenci�n de riesgos\nlaborales, se considera:\n",
            "correct_answer": " Infracci�n leve.\n",
            "incorrect_answers": [
                " Infracci�n muy grave.\n",
                " Infracci�n grave."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En cuanto a los propios dispositivos de alarma de incendios, en edificios o\nestablecimientos en los que existan personas con discapacidad auditiva, personas que\ntengan que llevar protecci�n auditiva o donde el nivel del ruido supere los 60 dB(",
            "correct_answer": ", estos\ndispositivos de alarma ser�n:\na) Ac�sticos, visuales y t�ctiles.\n",
            "incorrect_answers": [
                " Visuales y t�ctiles.\n",
                " Ac�sticos y visuales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, entiende por\n�riesgo laboral:\n",
            "correct_answer": " La posibilidad de que un trabajador sufra un determinado da�o derivado del trabajo. Para\ncalificar un riesgo desde el punto de vista de su gravedad, se valorar�n conjuntamente la\nprobabilidad de que se produzca el da�o y la severidad del mismo.\n",
            "incorrect_answers": [
                " La posibilidad de que un trabajador sufra un determinado da�o derivado del trabajo. Para\ncalificar un riesgo desde el punto de vista de su gravedad, se valorar�n solamente la\nprobabilidad de que se produzca el da�o.\n",
                " La posibilidad de que un trabajador sufra un determinado da�o derivado del trabajo. Para\ncalificar un riesgo desde el punto de vista de su gravedad, se valorar�n solo la severidad del\nmismo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Conforme dispone el Real Decreto 486/1997, de 14 de abril, la anchura m�nima de las\nescalas fijas ser� de:\n",
            "correct_answer": " 40 cent�metros y la distancia m�xima entre pelda�os de 20 cent�metros",
            "incorrect_answers": [
                " 50 cent�metros y la distancia m�xima entre pelda�os de 30 cent�metros\n",
                " 40 cent�metros y la distancia m�xima entre pelda�os de 30 cent�metros\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Real Decreto 485/1997, establece las disposiciones m�nimas para:\n",
            "correct_answer": " La se�alizaci�n de carreteras y viales.\n",
            "incorrect_answers": [
                " La se�alizaci�n de seguridad y salud en el �mbito dom�stico.\n",
                " La se�alizaci�n de seguridad y salud en el trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el art�culo 26 de la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, la evaluaci�n de los riesgos a que se refiere el art�culo 16 de dicha Ley:\n",
            "correct_answer": " Deber� contener la decisi�n que tome el empresario respecto a la naturaleza, el grado y la\nduraci�n de la exposici�n de las trabajadoras en situaci�n de embarazo o parto reciente a\nlas condiciones de trabajo que puedan influir en su salud.",
            "incorrect_answers": [
                " Deber� comprender la determinaci�n de la naturaleza, el grado y la duraci�n de la exposici�n\nde las trabajadoras en situaci�n de embarazo o parto reciente a agentes, procedimientos o\ncondiciones de trabajo que puedan influir negativamente en la salud de las trabajadoras o\ndel feto, en cualquier actividad susceptible de presentar un riesgo espec�fico.\n",
                " No deber� comprender la determinaci�n de la naturaleza, el grado y la duraci�n de la\nexposici�n de las trabajadoras en situaci�n de embarazo o parto reciente a agentes,\nprocedimientos o condiciones de trabajo que puedan influir negativamente en la salud de las\ntrabajadoras o del feto, en cualquier actividad susceptible de presentar un riesgo espec�fico.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Real Decreto por el que se aprueba el Reglamento de los Servicios de Prevenci�n\nes:\n",
            "correct_answer": " Real Decreto 40/1997, de 18 de enero.\n",
            "incorrect_answers": [
                " Real Decreto 39/1997, de 17 de enero.\n",
                " Real Decreto 39/1996, de 17 de enero."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con la Constituci�n Espa�ola, una de las siguientes no es funci�n del Rey:\n",
            "correct_answer": " En su caso, nombrar al candidato a Presidente de Gobierno, as� como poner fin a sus\nfunciones en los t�rminos previstos en la Constituci�n.\n",
            "incorrect_answers": [
                " Nombrar y separar a los miembros del Gobierno.\n",
                " Proponer los nombramientos de los miembros del Gobierno."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En relaci�n a la prueba, seg�n la Ley Org�nica 3/2007, de 22 de marzo, para la igualdad\nefectiva de mujeres y hombres, de acuerdo con las Leyes procesales, en aquellos\nprocedimientos en los que las alegaciones de la parte actora se fundamenten en\nactuaciones discriminatorias, por raz�n de sexo, corresponder� a la persona:\n",
            "correct_answer": " Demandada probar la ausencia de discriminaci�n en las medidas adoptadas y su\nproporcionalidad.\n",
            "incorrect_answers": [
                " Demandante probar la ausencia de discriminaci�n en las medidas adoptadas y su\nproporcionalidad.\n",
                " Ninguna de las anteriores es correcta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Real Decreto 486/1997, por el que se establecen las disposiciones m�nimas de\nseguridad y salud en los lugares de trabajo, es de fecha:\n",
            "correct_answer": " 14 de marzo.\n",
            "incorrect_answers": [
                " 15 de abril.\n",
                " 14 de abril."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Cu�ndo deben existir lugares de descanso en los trabajos?\n",
            "correct_answer": " Cuando la seguridad o la salud de los trabajadores lo exijan, en particular en raz�n del tipo\nde actividad o del n�mero de trabajadores, �stos dispondr�n de un local de descanso de\nf�cil acceso.",
            "incorrect_answers": [
                " Nunca.\n",
                " Siempre y en todo caso.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el EBEP, �cu�nto d�as de permiso se le conceden a los funcionarios por motivo de\nfallecimiento de un familiar dentro del segundo grado de consanguinidad, si no se precisa\ntrasladarse de localidad?\n",
            "correct_answer": " 2 d�as.",
            "incorrect_answers": [
                " 4 d�as.\n",
                " 5 d�as.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El anexo VII del Real Decreto 39/1997, de 17 de enero, por el que se aprueba el\nReglamento de Servicios de Prevenci�n, incluye una lista no exhaustiva de agentes,\nprocedimientos y condiciones de trabajo que pueden influir negativamente en la salud de\nlas trabajadoras embarazadas o en per�odo de lactancia natural, del feto o del ni�o\ndurante el per�odo de lactancia natural, en cualquier actividad que pueda implicar un\nriesgo de exposici�n, entre las que se encuentra:\n",
            "correct_answer": " Toxoplasma.",
            "incorrect_answers": [
                " Fr�o y calor extremos.\n",
                " Virus de la rubeola.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Anexo I del Real Decreto 486/1997, de 14 de abril, las escaleras que no sean\nde servicio tendr�n una anchura m�nima de:\n",
            "correct_answer": " 0,30 metros.",
            "incorrect_answers": [
                " 0,5 metros.\n",
                " 1 metros.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Entre los m�todos objetivos, conocidos como m�todos globales de evaluaci�n de las\ncondiciones de trabajo para valoraci�n de la carga metal, se encuentran:\n",
            "correct_answer": " M�todo de evaluaci�n.",
            "incorrect_answers": [
                " M�todo L.E.S.T y M�todo R.N.U.R.\n",
                " M�todo de conocimiento.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el Reglamento\nde los Servicios de Prevenci�n, entre las funciones de nivel superior que integran la\nactividad preventiva se encuentra:\n",
            "correct_answer": " Promover, en particular, las actuaciones preventivas b�sicas, tales como el orden, la limpieza,\nla se�alizaci�n y el mantenimiento general, y efectuar su seguimiento y control.",
            "incorrect_answers": [
                " El personal sanitario del servicio de prevenci�n deber� conocer las enfermedades que se\nproduzcan entre los trabajadores y las ausencias del trabajo por motivos de salud, a los\nsolos efectos de poder identificar cualquier relaci�n entre la causa de enfermedad o de\nausencia y los riesgos para la salud que puedan presentarse en los lugares de trabajo.\n",
                " Vigilar el cumplimiento del programa de control y reducci�n de riesgos y efectuar\npersonalmente las actividades de control de las condiciones de trabajo que tenga asignadas.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Los factores determinantes de la carga de trabajo mental dependen de la relaci�n que\nse establece entre:\n",
            "correct_answer": " El interior y exterior de la organizaci�n.",
            "incorrect_answers": [
                " Los objetivos del trabajador y del empresario.\n",
                " Las exigencias o requerimientos que plantea el trabajo y capacidad de respuesta del\ntrabajador.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley Canaria de prevenci�n y protecci�n integral de las mujeres contra la violencia\nde g�nero, es del a�o:\n",
            "correct_answer": " 2003.\n",
            "incorrect_answers": [
                " 2004.\n",
                " 2007."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley Org�nica 1/2004, de 28 de diciembre, de Medidas de Protecci�n Integral\ncontra la Violencia de G�nero, en el �mbito educativo, la Educaci�n Primaria contribuir�\na:\n",
            "correct_answer": " Desarrollar en el alumnado su capacidad para adquirir habilidades en la resoluci�n pac�fica\nde conflictos y para comprender y respetar la igualdad entre sexos.\n",
            "incorrect_answers": [
                " Desarrollar en la infancia el aprendizaje en la resoluci�n pac�fica de conflictos.\n",
                " Ninguna de las anteriores es correcta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Cu�ndo se aprueban los Pliegos de Cl�usulas Administrativas Particulares de los\ncontratos administrativos?\n",
            "correct_answer": " Siempre con car�cter previo a la autorizaci�n del gasto y antes de la perfecci�n y, en su\ncaso, licitaci�n del contrato.\n",
            "incorrect_answers": [
                " Previa o conjuntamente a la autorizaci�n del gasto y siempre antes de la adjudicaci�n del\ncontrato.\n",
                " Siempre conjuntamente a la autorizaci�n del gasto y antes de la licitaci�n del contrato."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Pleno del Consejo Rector del Instituto Canario de Seguridad Laboral adoptar� sus\nacuerdos:\n",
            "correct_answer": " Por mayor�a absoluta.",
            "incorrect_answers": [
                " Por mayor�a simple.\n",
                " Por mayor�a cualificada.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Indica la respuesta incorrecta sobre el Real Decreto 485/1997:\n",
            "correct_answer": " La se�alizaci�n de seguridad y salud en el trabajo puede utilizarse para transmitir\ninformaciones o mensajes distintos o adicionales a los que constituyen su objetivo propio.",
            "incorrect_answers": [
                " La eficacia de la se�alizaci�n no deber� resultar disminuida por la concurrencia de se�ales\no por otras circunstancias que dificulten su percepci�n o comprensi�n.\n",
                " La se�alizaci�n de seguridad y salud en el trabajo no deber� utilizarse para transmitir\ninformaciones o mensajes distintos o adicionales a los que constituyen su objetivo propio.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el art�culo 12 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, el incumplimiento de los derechos de informaci�n,\nconsulta, y participaci�n de los trabajadores reconocidos en la normativa sobre\nprevenci�n de riesgos laborales, se considera:\n",
            "correct_answer": " Infracci�n muy grave.\n",
            "incorrect_answers": [
                " Infracci�n leve.\n",
                " Infracci�n grave."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el Estatuto de Autonom�a de Canarias, la Comunidad Aut�noma de\nCanarias, ostenta, en materia de servicios sociales, la competencia:\n",
            "correct_answer": " Delegada.\n",
            "incorrect_answers": [
                " Exclusiva.\n",
                " Prioritaria."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con la Constituci�n Espa�ola, la educaci�n tendr� por objeto:\n",
            "correct_answer": " El pleno desarrollo de la personalidad humana conforme a los planes educativos aprobados\npor el Consejo Escolar Nacional a instancia de las Asociaciones Nacionales de Padres de\nAlumnos.\n",
            "incorrect_answers": [
                " El pleno desarrollo de la personalidad humana en el respeto de los principios democr�ticos\nde convivencia, y a los derechos y libertades fundamentales.\n",
                " El pleno desarrollo de la personalidad humana en el respeto de los principios democr�ticos\nmarcados por cada colectivo educativo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contratos de obras\naquellos que tienen por objeto uno de los siguientes:\n",
            "correct_answer": " Las dos anteriores son ciertas.",
            "incorrect_answers": [
                " La realizaci�n, por cualquier medio, de una obra que cumpla los requisitos fijados por la\nentidad del sector p�blico contratante que ejerza una influencia decisiva en el tipo o el\nproyecto de la obra.\n",
                " La ejecuci�n de una obra, aislada o conjuntamente, con la redacci�n del proyecto, o la\nrealizaci�n de alguno de los trabajos enumerados en el Anexo I.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �A qu� hace referencia la definici�n: aviso o se�al por la que se informa a las personas\npara que sigan instrucciones espec�ficas ante una situaci�n de emergencia?\n",
            "correct_answer": " Autoprotecci�n.",
            "incorrect_answers": [
                " Alarma.\n",
                " Alerta.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el articulado del texto refundido de la Ley General de la Seguridad\nSocial, aprobado por el Real Decreto Legislativo 8/2015, de 30 de octubre, tendr�n la\nconsideraci�n de accidente de trabajo:\n",
            "correct_answer": " Los sufridos cuando acuda a un acto de salvamento.",
            "incorrect_answers": [
                " Las enfermedades que pueda sufrir fuera del lugar de trabajo.\n",
                " Los que sufra el trabajador al ir o al volver del lugar de trabajo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con lo establecido en el Estatuto de Autonom�a de Canarias, indique cu�l\nde las que se se�alan a continuaci�n es una clase de competencia:\n",
            "correct_answer": " Independientes.\n",
            "incorrect_answers": [
                " Ejecutivas.\n",
                " Transversales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Los s�ntomas de la fatiga cr�nica, que se mantienen permanentes a�n despu�s de\nhaber finalizado el trabajo, son:\n",
            "correct_answer": " Reducci�n de la actividad.",
            "incorrect_answers": [
                " Estabilidad emocional.\n",
                " Alteraciones psicosom�ticas, inestabilidad emocional, astenia y alteraciones del sue�o.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el Real Decreto 1029/2022, de 20 de diciembre, por el que se\naprueba el Reglamento sobre protecci�n de la salud contra los riesgos derivados de la\nexposici�n a las radiaciones ionizantes, las situaciones de exposici�n planificada son:\n",
            "correct_answer": " Son aquellas que surgen del uso planificado de una fuente de radiaci�n o de una actividad\nhumana que altera las v�as de exposici�n, causando la exposici�n o exposici�n potencial de\nlas personas o del medio ambiente.\n",
            "incorrect_answers": [
                " Son aquellas debidas a una emergencia nuclear o radiol�gica.\n",
                " Son situaciones de exposici�n que ya existen cuando debe tomarse una decisi�n sobre su\ncontrol y que no requieren, o ya no requieren, la adopci�n de medidas urgentes, o bien\nsituaciones de exposici�n creadas por una fuente de radiaci�n cuya ubicuidad o magnitud\nhace injustificado su control de acuerdo con los mismos criterios aplicables a una situaci�n\nde exposici�n planificada."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el art�culo 156 del texto refundido de la Ley General de la Seguridad\nSocial, aprobado por el Real Decreto Legislativo 8/2015, de 30 de octubre:\n",
            "correct_answer": " Se presumir�, salvo prueba en contrario, que son constitutivas de accidente de trabajo las\nlesiones que sufra el trabajador durante el tiempo y en el lugar del trabajo.\n",
            "incorrect_answers": [
                " No se presumir� que son constitutivas de accidente de trabajo las lesiones que sufra el\ntrabajador durante el tiempo.\n",
                " Se presumir� que son constitutivas de accidente de trabajo las lesiones que sufra el\ntrabajador fuera del lugar del trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Entre los aspectos que definen la carga mental podemos encontrar situaciones de:\n",
            "correct_answer": " Sobrecarga cuantitativa, sobrecarga cualitativa, sobrecarga cuantitativa y sobrecarga\ncualitativa.\n",
            "incorrect_answers": [
                " Sobrecarga cuantitativa y cualitativa.\n",
                " Exceso de carga primaria y secundaria."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �En qu� T�tulo del Estatuto de Autonom�a de Canarias se encuentran reguladas las\ncompetencias de la Comunidad Aut�noma de Canarias?\n",
            "correct_answer": " En el T�tulo III.\n",
            "incorrect_answers": [
                " En el T�tulo II.\n",
                " En el T�tulo V."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Ley sobre Infracciones y Sanciones en el Orden Social, en materia de prevenci�n de\nRiesgo Laborales considera infracci�n leve:\n",
            "correct_answer": " Incumplir el deber de confidencialidad en el uso relativo a la vigilancia de la salud de los\ntrabajadores.",
            "incorrect_answers": [
                " Las que supongan incumplimientos de la normativa de prevenci�n de riesgos laborales,\nsiempre que carezcan de trascendencia grave para la integridad f�sica o la salud de los\ntrabajadores.\n",
                " El incumplimiento de las obligaciones en materia de formaci�n e informaci�n a los\ntrabajadores acerca de los riesgos del puesto de trabajo susceptibles de provocar da�os\npara la seguridad y salud.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la normativa sobre\nprevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma de Canarias y\nsus Organismos Aut�nomos, el tiempo dedicado a la formaci�n de los Delegados de\nPrevenci�n:\n",
            "correct_answer": " Ser� considerado como tiempo de trabajo a todos los efectos.\n",
            "incorrect_answers": [
                " No ser� considerado como tiempo de trabajo a todos los efectos.\n",
                " Ser� considerado como descanso en determinados casos previamente autorizados."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En caso de que el hijo reci�n nacido tenga que permanecer en el hospital a continuaci�n\ndel parto, �tienen derecho los progenitores funcionarios, a alg�n tipo de reducci�n\nlaboral?\n",
            "correct_answer": " S�, a la ausencia del trabajo durante tres horas diarias como m�ximo.\n",
            "incorrect_answers": [
                " S�, a la ausencia del trabajo durante dos horas diarias como m�ximo.\n",
                " No, en ning�n caso."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con lo establecido en el Estatuto de Autonom�a de Canarias, indique cu�l\nde las que se se�alan a continuaci�n es una clase de competencia:\n",
            "correct_answer": " Transversales.",
            "incorrect_answers": [
                " Ejecutivas.\n",
                " Independientes.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el art�culo 4 del Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n\nde la normativa sobre prevenci�n de riesgos laborales en el �mbito de la Comunidad\nAut�noma de Canarias y sus Organismos Aut�nomos, la designaci�n de Delegado de\nPrevenci�n podr� recaer:\n",
            "correct_answer": " En cualquier empleado que no preste sus servicios en la Administraci�n P�blica de la\nComunidad Aut�noma de Canarias.",
            "incorrect_answers": [
                " En cualquier empleado p�blico que preste sus servicios en la Administraci�n P�blica de la\nComunidad Aut�noma de Canarias y sus Organismos Aut�nomos.\n",
                " En cualquier empleado p�blico que preste sus servicios en la Administraci�n P�blica de la\nComunidad Aut�noma de Canarias y pero no en sus Organismos Aut�nomos.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el texto refundido de la Ley sobre Infracciones y Sanciones en el\nOrden Social en las sanciones por infracciones en materia de prevenci�n de riesgos\nlaborales, a efectos de graduaci�n, se tendr�n en cuenta:\n",
            "correct_answer": " La peligrosidad de las actividades desarrolladas en la empresa o centro de trabajo.",
            "incorrect_answers": [
                " El salario del trabajador.\n",
                " El comportamiento del trabajador.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Real Decreto 374/2001, sobre la protecci�n de la salud y seguridad de\nlos trabajadores contra los riesgos relacionados con los agentes qu�micos durante el\ntrabajo, �a qu� hace referencia la definici�n: la capacidad intr�nseca de un agente qu�mico\npara causar da�o?\n",
            "correct_answer": " Riesgo.\n",
            "incorrect_answers": [
                " Peligro inminente.\n",
                " Peligro."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El art�culo 4 de la Ley 31/1995, de Prevenci�n de Riesgos Laborales, entiende como\n�riesgo laboral grave e inminente�:\n",
            "correct_answer": " Aquel que no resulte probable racionalmente que se materialice en un futuro inmediato y\npueda suponer un da�o leve para la salud de los trabajadores.",
            "incorrect_answers": [
                " Aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda\nsuponer un da�o grave para la salud de los trabajadores.\n",
                " Aquel que no resulte probable racionalmente que se materialice en un futuro inmediato y no\npueda suponer un da�o grave para la salud de los trabajadores.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley reguladora de Prevenci�n de Riesgos Laborales es la:\n",
            "correct_answer": " Ley 31/1995, de 8 de noviembre.\n",
            "incorrect_answers": [
                " Ley 32/1995, de 8 de noviembre.\n",
                " Ley 31/1995, de 9 de diciembre."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley 31/1995, de 8 de noviembre, de Prevenci�n de Riesgos Laborales, establece\nque, si los resultados de la evaluaci�n riesgos revelasen un riesgo para la seguridad y\nsalud o una posible repercusi�n sobre el embarazo o lactancia de las trabajadoras, el\nempresario:\n",
            "correct_answer": " Adoptar� las medidas necesarias para evitar la exposici�n a dicho riesgo, a trav�s de una\nadaptaci�n de las condiciones o del tiempo de trabajo de la trabajadora afectada.",
            "incorrect_answers": [
                " No adoptar� medidas que puedan afectar a la productividad.\n",
                " Adoptar� las medidas necesarias para minimizar la exposici�n a dicho riesgo, a trav�s de\nuna consulta con los Delegados de Personal.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, no ser� de\naplicaci�n en aquellas actividades cuyas particularidades lo impidan en el �mbito de las\nfunciones p�blicas de:\n",
            "correct_answer": " Servicios de limpieza.\n",
            "incorrect_answers": [
                " Servicios de jardiner�a municipal.\n",
                " Polic�a, seguridad y resguardo aduanero."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La competencia de la Comunidad Aut�noma en materia de pol�ticas de g�nero viene\nregulada en el Estatuto de Autonom�a de Canarias, en su art�culo:\n",
            "correct_answer": " 145.",
            "incorrect_answers": [
                " 146.\n",
                " 144.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Cu�nto d�as de permiso, seg�n el EBEP, tienen los funcionarios p�blicos por cambio de\ndomicilio sin cambio de residencia?\n",
            "correct_answer": " Ninguno.\n",
            "incorrect_answers": [
                " 1 d�a.\n",
                " 3 d�as."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, el coste de las medidas\nrelativas a la seguridad y la salud en el trabajo:\n",
            "correct_answer": " Puede recaer sobre el trabajador en algunos casos autorizados previamente.\n",
            "incorrect_answers": [
                " No deber� recaer en modo alguno sobre el trabajador.\n",
                " Deber� recaer sobre el trabajador."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se define como Tensi�n mental (mental strain):\n",
            "correct_answer": " El total de todas las influencias valorables que inciden en un ser humano.",
            "incorrect_answers": [
                " El efecto a largo plazo de la presi�n mental en el individuo (no el efecto a largo plazo), que\ndepende de sus condiciones previas habituales y actuales, incluidos los estilos individuales\nde afrontamiento (coping).\n",
                " El efecto inmediato de la presi�n mental en el individuo (no el efecto a largo plazo), que\ndepende de sus condiciones previas habituales y actuales, incluidos los estilos individuales\nde afrontamiento (coping).\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley 31/1995, de 8 de noviembre, de Prevenci�n de Riesgos Laborales, prev� entre\nlas medidas a adoptar por el empresario para evitar la exposici�n a posibles riesgos para\nla seguridad y salud o una posible repercusi�n sobre el embarazo o lactancia de las\ntrabajadoras, la posibilidad de incluir, cuando resulte necesario:\n",
            "correct_answer": " S�lo la no realizaci�n de trabajo nocturno.",
            "incorrect_answers": [
                " La no realizaci�n de trabajo nocturno o de trabajo a turno.\n",
                " La realizaci�n de trabajo a turno.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley 31/1995, de 8 de noviembre, de Prevenci�n de Riesgos Laborales, regula la\nprotecci�n a la maternidad en su:\n",
            "correct_answer": " Art�culo 36.",
            "incorrect_answers": [
                " Art�culo 26.\n",
                " Art�culo 28.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Los sistemas de protecci�n pasiva:\n",
            "correct_answer": " Son aquellos m�todos, materiales, equipos e instalaciones que se incorporan, no con el fin\nde extinguir el fuego, sino para hacer m�s dif�cil su acci�n sobre ellos, es decir, dificultar la\ndestrucci�n de los mismos, para as� poder controlar el avance del fuego m�s f�cilmente.",
            "incorrect_answers": [
                " Son aquellos m�todos, materiales, equipos e instalaciones que se incorporan, con el fin de\nextinguir el fuego, para hacer m�s dif�cil su acci�n sobre ellos, es decir, dificultar la\ndestrucci�n de los mismos, para as� poder controlar el avance del fuego m�s f�cilmente.\n",
                " Son aquellos equipos e instalaciones que se incorporan, no con el fin de extinguir el fuego,\nsino para hacer m�s f�cil su acci�n sobre ellos, es decir, dificultar la destrucci�n de los\nmismos, para as� poder controlar el avance del fuego m�s f�cilmente.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se considerar�n como �da�os derivados del trabajo�, seg�n la Ley de prevenci�n de\nRiesgos Laborales, 31/1995, de 8 de noviembre:\n",
            "correct_answer": " Enfermedades, patolog�as o lesiones sufridas con motivo u ocasi�n del trabajo.\n",
            "incorrect_answers": [
                " Cualquier lesi�n que sufra el trabajador en su vida diaria.\n",
                " Enfermedades profesionales y riesgos no laborales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La fatiga cr�nica:\n",
            "correct_answer": " Aparece cuando la carga de trabajo es continua y se mantiene el desequilibrio entre la\ncapacidad del organismo y el esfuerzo que debe realizar para dar respuesta a las exigencias\nde la tarea.\n",
            "incorrect_answers": [
                " Es un estado de fatiga prolongada, que es recuperable por el simple descanso.\n",
                " Tiene consecuencias menos graves para el trabajador que la fatiga normal o fisiol�gica."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Convenio de la Organizaci�n Internacional del Trabajo sobre Seguridad\ny Salud el t�rmino �Trabajadores� abarca:\n",
            "correct_answer": " Todas las personas empleadas, incluidos los empleados p�blicos.\n",
            "incorrect_answers": [
                " No incluye a los empleados p�blicos.\n",
                " A las personas empleadas en determinadas empresas."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El m�todo INSHT incluye, entre los factores psicosociales que considera, la carga\nmental de trabajo, y la valora a partir de los siguientes indicadores:\n",
            "correct_answer": " Presi�n de espacios.\n",
            "incorrect_answers": [
                " Esfuerzo de atenci�n.\n",
                " Operaciones mentales y nivel de atenci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, se entender� por contrato\nmixto aquel que:\n",
            "correct_answer": " Ninguna de las anteriores es cierta.",
            "incorrect_answers": [
                " Contenga prestaciones correspondientes a otro u otros de distinta clase.\n",
                " Los contratos no pueden ser mixtos.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, las personas jur�dicas solo\npodr�n ser adjudicatarias de contratos:\n",
            "correct_answer": " Cuyas prestaciones est�n comprendidas dentro de los fines, objeto o �mbito de actividad\nque, a tenor de sus estatutos o reglas fundacionales, les sean propios.\n",
            "incorrect_answers": [
                " Cuyas prestaciones no est�n comprendidas dentro de los fines, objeto o �mbito de actividad\nque, a tenor de sus estatutos o reglas fundacionales, les sean propios.\n",
                " Ninguna de las anteriores es correcta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se�ale la afirmaci�n correcta. De acuerdo la Ley 38/2003, la subvenci�n es un instrumento\nde la actividad administrativa:\n",
            "correct_answer": " De limitaci�n.\n",
            "incorrect_answers": [
                " De servicio p�blico.\n",
                " De fomento."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Conforme dispone el Real Decreto 486/1997, de 14 de abril, la anchura m�nima de las\nescalas fijas ser� de:\n",
            "correct_answer": " 40 cent�metros y la distancia m�xima entre pelda�os de 30 cent�metros\n",
            "incorrect_answers": [
                " 50 cent�metros y la distancia m�xima entre pelda�os de 30 cent�metros\n",
                " 40 cent�metros y la distancia m�xima entre pelda�os de 20 cent�metros"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Las competencias que ejerce la Comunidad Aut�noma de Canarias de forma �ntegra:\npotestad legislativa, potestad reglamentaria y funci�n ejecutiva, se denomina:\n",
            "correct_answer": " Exclusivas.",
            "incorrect_answers": [
                " Totales.\n",
                " Integradoras.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n lo dispuesto en el Estatuto de Autonom�a de Canarias respecto de las\ncompetencias exclusivas de la Comunidad Aut�noma:\n",
            "correct_answer": " Se ejercen, de forma �ntegra, la potestad de direcci�n pol�tica, la potestad reglamentaria y\nla funci�n ejecutiva, sin perjuicio de la concurrencia de otros t�tulos competenciales del\nEstado y los Cabildos.\n",
            "incorrect_answers": [
                " Se ejercen, de forma �ntegra la potestad reglamentaria y la funci�n ejecutiva, en todo caso.\n",
                " Se ejercen, de forma �ntegra, la potestad legislativa, la potestad reglamentaria y la funci�n\nejecutiva, sin perjuicio de la concurrencia de otros t�tulos competenciales del Estado."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el art�culo 3.2 del Decreto 168/2009, de 29 de diciembre de 2009, de\nadaptaci�n de la normativa sobre prevenci�n de riesgos laborales en el �mbito de la\nComunidad Aut�noma de Canarias y sus Organismos Aut�nomos, los representantes de\nlos empleados p�blicos al servicio de la Administraci�n y de sus Organismos Aut�nomos\ncon funciones espec�ficas en materia de prevenci�n de riesgos laborales son:\n",
            "correct_answer": " Los Delegados de Personal.\n",
            "incorrect_answers": [
                " Los Delegados de Prevenci�n.\n",
                " Los empresarios."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con la Constituci�n Espa�ola, la educaci�n tendr� por objeto:\n",
            "correct_answer": " El pleno desarrollo de la personalidad humana conforme a los planes educativos aprobados\npor el Consejo Escolar Nacional a instancia de las Asociaciones Nacionales de Padres de\nAlumnos.\n",
            "incorrect_answers": [
                " El pleno desarrollo de la personalidad humana en el respeto de los principios democr�ticos\nde convivencia, y a los derechos y libertades fundamentales.\n",
                " El pleno desarrollo de la personalidad humana en el respeto de los principios democr�ticos\nmarcados por cada colectivo educativo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La fatiga mental:\n",
            "correct_answer": " Es un fen�meno aislado, su aparici�n suele coincidir y ser proporcional a la carga de trabajo\ntambi�n, puede actuar como causa de la misma.\n",
            "incorrect_answers": [
                " El estado de fatiga aumenta la eficiencia del trabajador, haciendo que las mismas exigencias\nsupongan una carga menor para �l, incluso en situaciones en que la carga de trabajo es\npeque�a.\n",
                " Es un fen�meno acumulativo, su aparici�n suele coincidir y ser proporcional a la carga de\ntrabajo tambi�n, puede actuar como causa de la misma."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el art�culo 13 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, la alteraci�n o falseamiento, por las personas o entidades\nque desarrollen la actividad de auditor�a del sistema de prevenci�n de empresas, del\ncontenido del informe de la empresa auditada, se considera:\n",
            "correct_answer": " Infracci�n muy grave.\n",
            "incorrect_answers": [
                " Infracci�n leve.\n",
                " Infracci�n grave."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el art�culo 164 de la Ley General de la Seguridad Social, todas las\nprestaciones econ�micas que tengan su causa en accidente de trabajo o enfermedad\nprofesional, seg�n la gravedad de la falta, cuando la lesi�n se produzca por equipos de\ntrabajo o en instalaciones, centros o lugares de trabajo que carezcan de los medios de\nprotecci�n reglamentarios, los tengan inutilizados o en malas condiciones, o cuando no\nse hayan observado las medidas generales o particulares de seguridad y salud en el\ntrabajo, o las de adecuaci�n personal a cada trabajo, habida cuenta de sus caracter�sticas\ny de la edad, sexo y dem�s condiciones del trabajador, se aumentar�n:\n",
            "correct_answer": " De un 10 por ciento en adelante.\n",
            "incorrect_answers": [
                " De un 30 a un 50 por ciento.\n",
                " De los 70 a un 80 por ciento."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Conforme dispone el Real Decreto 486/1997, de 14 de abril, la anchura m�nima de las\nescalas fijas ser� de:\n",
            "correct_answer": " 50 cent�metros y la distancia m�xima entre pelda�os de 30 cent�metros\n",
            "incorrect_answers": [
                " 40 cent�metros y la distancia m�xima entre pelda�os de 30 cent�metros\n",
                " 40 cent�metros y la distancia m�xima entre pelda�os de 20 cent�metros"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Real Decreto 374/2001, sobre la protecci�n de la salud y seguridad de\nlos trabajadores contra los riesgos relacionados con los agentes qu�micos durante el\ntrabajo, �a qu� hace referencia esta definici�n: agente qu�mico que puede representar un\nriesgo para la seguridad y salud de los trabajadores debido a sus propiedades\nfisicoqu�micas, qu�micas o toxicol�gicas y a la forma en que se utiliza o se halla presente\nen el lugar de trabajo?\n",
            "correct_answer": " Agente qu�mico peligroso.\n",
            "incorrect_answers": [
                " Agente qu�mico.\n",
                " Agente peligroso."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el art�culo 11 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, la falta de limpieza del centro de trabajo de la que no se\nderive riesgo para la integridad f�sica o salud de los trabajadores, se considera:\n",
            "correct_answer": " Infracci�n grave.",
            "incorrect_answers": [
                " Infracci�n muy grave.\n",
                " Infracci�n leve.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �A qu� hace referencia la definici�n: un movimiento o disposici�n de los brazos o de\nlas manos en forma codificada para guiar a las personas que est�n realizando maniobras\nque constituyan un riesgo o peligro para los trabajadores?\n",
            "correct_answer": " Comunicaci�n gestual.\n",
            "incorrect_answers": [
                " Se�al gestual.\n",
                " Orden gestual."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley Org�nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y\nhombres, tiene por objeto:\n",
            "correct_answer": " Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombres.\n",
            "incorrect_answers": [
                " Promover las condiciones para que la igualdad del individuo y de los grupos en que se\nintegra sean reales y efectivas.\n",
                " El pleno reconocimiento de la igualdad formal ante la ley."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Real Decreto 374/2001 sobre la protecci�n de la salud y seguridad de los\ntrabajadores contra los riesgos relacionados con los agentes qu�micos durante el trabajo,\nse entiende como agente qu�mico:\n",
            "correct_answer": " Todo elemento o compuesto qu�mico, por s� solo o mezclado, tal como se presenta en estado\nnatural o es producido, utilizado o vertido, incluido el vertido como residuo, en una actividad\nlaboral, se haya elaborado o no de modo intencional y se haya comercializado o no.\n",
            "incorrect_answers": [
                " Presencia de un agente qu�mico en el lugar de trabajo que implica el contacto de �ste con\nel trabajador, normalmente por inhalaci�n o por v�a d�rmica.\n",
                " Todo elemento o compuesto f�sico, por s� solo o mezclado, tal como se presenta en estado\nnatural o es producido, utilizado o vertido, incluido el vertido como residuo, en una actividad\nlaboral, se haya elaborado o no de modo intencional y se haya comercializado o no."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el art�culo 32 bis de la Ley de Prevenci�n de Riesgos Laborales\n31/1995, la presencia en el centro de trabajo de los recursos preventivos, cualquiera que\nsea la modalidad de organizaci�n de dichos recursos, ser� necesaria, entre otros casos:\n",
            "correct_answer": " Cuando la necesidad de dicha presencia sea requerida por la Inspecci�n de Trabajo y\nSeguridad Social, si las circunstancias del caso as� lo exigieran debido a las condiciones de\ntrabajo detectadas.\n",
            "incorrect_answers": [
                " En ning�n caso es necesaria.\n",
                " Cuando la necesidad de dicha presencia sea requerida por Instituto Nacional de Seguridad\ne Higiene en el Trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Indique cu�l de las siguientes afirmaciones es correcta, siguiendo lo establecido en el\nEstatuto de Autonom�a de Canarias:\n",
            "correct_answer": " En su condici�n de regi�n atl�ntica, la Comunidad Aut�noma de Canarias, a trav�s de\nf�rmulas de colaboraci�n con el Estado, en materia de pol�tica democr�tica con �frica y\npa�ses de Am�rica con vinculaciones hist�ricas con Canarias.\n",
            "incorrect_answers": [
                " En su condici�n de regi�n ultraperif�rica, La Comunidad Aut�noma de Canarias, a trav�s de\nf�rmulas de cooperaci�n y colaboraci�n con el Estado, en materia de comercio exterior con\n�frica y pa�ses de Am�rica con vinculaciones hist�ricas con Canarias.\n",
                " En su condici�n de regi�n ultraperif�rica, La Comunidad Aut�noma de Canarias, a trav�s de\nf�rmulas de cooperaci�n y colaboraci�n con el Estado, en materia de comercio exterior con\nlos pa�ses de la Uni�n Europea y Am�rica."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, el Instituto Nacional de Seguridad e Higiene en el Trabajo es:\n",
            "correct_answer": " El �rgano cient�fico t�cnico especializado de la Administraci�n General del Estado que tiene\ncomo misi�n el an�lisis y el estudio de las condiciones de seguridad y salud en el trabajo,\nas� como la promoci�n y apoyo a la mejora de las mismas.\n",
            "incorrect_answers": [
                " El �rgano cient�fico t�cnico especializado de la Administraci�n General del Estado que tiene\ncomo �nica misi�n el apoyo a la mejora de las condiciones de trabajo.\n",
                " El �rgano colegiado asesor de las Administraciones P�blicas en la formulaci�n de pol�ticas\nde prevenci�n y �rgano de participaci�n institucional en materia de seguridad y salud en el\ntrabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contratos de concesi�n\nde servicios, los:\n",
            "correct_answer": " De adecuaci�n, reforma y modernizaci�n de la obra para adaptarla a las caracter�sticas\nt�cnicas y funcionales requeridas para la correcta prestaci�n de los servicios o la realizaci�n\nde las actividades econ�micas a las que sirve de soporte material.\n",
            "incorrect_answers": [
                " En cuya virtud uno o varios poderes adjudicadores encomiendan a t�tulo oneroso a una o\nvarias personas, naturales o jur�dicas, la gesti�n de un servicio cuya prestaci�n sea de su\ntitularidad o competencia, y cuya contrapartida venga constituida bien por el derecho a\nexplotar los servicios objeto del contrato o bien por dicho derecho acompa�ado del de\npercibir un precio.\n",
                " Tienen por objeto la realizaci�n por el concesionario de algunas prestaciones, incluidas las\nde restauraci�n y reparaci�n de construcciones existentes."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con lo dispuesto en la Ley Org�nica 1/2004, de 28 de diciembre, de\nMedidas de Protecci�n Integral contra la Violencia de G�nero, indique qui�nes ser�n los\nencargados de dise�ar protocolos de actuaci�n global e integral en casos de violencia de\ng�nero:\n",
            "correct_answer": " El Gobierno y las comunidades aut�nomas que hayan asumido competencias en materia de\njusticia, organizar�n en el �mbito que a cada una le es propio los servicios forenses de modo\nque cuenten con unidades de valoraci�n forense integral.\n",
            "incorrect_answers": [
                " El Gobierno y las comunidades aut�nomas que hayan asumido competencias en materia de\nigualdad, organizar�n en el �mbito que a cada una le es propio los servicios de igualdad de\nmodo que cuenten con unidades de valoraci�n social integral.\n",
                " Las comunidades aut�nomas y los Cabildos que hayan asumido competencias en materia\nde justicia organizar�n, en el �mbito que a cada una le es propio, los servicios forenses de\nmodo que cuenten con unidades de valoraci�n forense integral."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el art�culo 12 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, incumplir la obligaci�n de integrar la prevenci�n de riesgos\nlaborales en la empresa a trav�s de la implantaci�n y aplicaci�n de un plan de prevenci�n,\ncon el alcance y contenido establecido en la normativa de prevenci�n de riesgos\nlaborales, se considera:\n",
            "correct_answer": " Infracci�n muy grave.\n",
            "incorrect_answers": [
                " Infracci�n leve.\n",
                " Infracci�n grave."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En la Constituci�n Espa�ola, �qui�nes tienen derecho a la tutela judicial efectiva de\njueces y tribunales?\n",
            "correct_answer": " Todas las personas.",
            "incorrect_answers": [
                " Solo los ciudadanos espa�oles y los nacionales de pa�ses de la Uni�n Europea legalizados.\n",
                " Todos los ciudadanos de la Uni�n Europea y los espa�oles, pero no los extranjeros ajenos\na ese �mbito.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el art�culo 4 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, las infracciones muy graves en materia de prevenci�n\nriesgos laborales prescriben:\n",
            "correct_answer": " A los siete a�os.",
            "incorrect_answers": [
                " A los cinco a�os.\n",
                " A los seis a�os.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se entiende por carga mental:\n",
            "correct_answer": " El conjunto de requerimientos f�sicos, a los que se ve sometido el trabajador a lo largo de su\njornada laboral, es decir, el nivel de actividad mental o de esfuerzo intelectual necesario para\ndesarrollar el trabajo.",
            "incorrect_answers": [
                " El conjunto de requerimientos mentales, cognitivos o intelectuales a los que se ve sometido\nel trabajador a lo largo de su jornada laboral, es decir, el nivel de actividad mental o de\nesfuerzo intelectual necesario para desarrollar el trabajo.\n",
                " El conjunto de requerimientos mentales, f�sicos o intelectuales a los que se ve sometido el\ntrabajador a lo largo de su jornada laboral, es decir, el nivel de actividad mental o de esfuerzo\nintelectual necesario para desarrollar el trabajo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con lo regulado en la Ley de la Funci�n P�blica Canaria, �cu�les de los\nsiguientes derechos no se configuran como parte del derecho a la carrera administrativa\nde los funcionarios?\n",
            "correct_answer": " Promoci�n interna.\n",
            "incorrect_answers": [
                " Grado personal.\n",
                " Antig�edad."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El cap�tulo IV de la Ley de Prevenci�n de los Riesgos Laborales 31/1995, de 8 de\nnoviembre:\n",
            "correct_answer": " Regula los �Servicios de Prevenci�n�.\n",
            "incorrect_answers": [
                " Trata de la Consulta y participaci�n de los trabajadores.\n",
                " Aborda el objeto de la Ley, su �mbito de aplicaci�n y definiciones."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Puede la Administraci�n celebrar contratos administrativos verbalmente?\n",
            "correct_answer": " La Administraci�n no podr� contratar verbalmente, salvo pacto excepcional realizado con la\nempresa y previo informe de la Junta Consultiva de Contrataci�n Administrativa.",
            "incorrect_answers": [
                " La Administraci�n no podr� contratar verbalmente, en ning�n caso.\n",
                " La Administraci�n no podr� contratar verbalmente, salvo que el contrato tenga car�cter de\nemergencia.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Las obligaciones de los titulares de las actividades del Anexo I de la Norma B�sica de\nautoprotecci�n de los centros, establecimientos y dependencias dedicados a actividades\nque puedan dar origen a situaciones de emergencia, ser�n entre otros:\n",
            "correct_answer": " Elaborar el Plan de Autoprotecci�n correspondiente a su actividad, de acuerdo con el\ncontenido m�nimo definido en el anexo II de la citada Norma aprobada por el Real Decreto\n393/2007 y los criterios establecidos en el apartado 3.3. de dicha Norma.\n",
            "incorrect_answers": [
                " Elaborar el Plan de Autoprotecci�n correspondiente a su actividad, de acuerdo con el\ncontenido m�nimo definido en el anexo II del Real Decreto 485/2007 y los criterios\nestablecidos en el apartado 3.3. de dicha Norma.\n",
                " Elaborar el Plan de Autoprotecci�n correspondiente a su actividad, de acuerdo con el\ncontenido m�nimo definido en el anexo II del Real Decreto 487/2007 y los criterios\nestablecidos en el apartado 3.3. de dicha Norma."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, la\nPresidencia de la Comisi�n Nacional de Seguridad y Salud en el trabajo, corresponder�\na:\n",
            "correct_answer": " Al Vicepresidente primero de la Comisi�n Nacional de Seguridad y Salud en el trabajo.\n",
            "incorrect_answers": [
                " El Subsecretario de Sanidad y Consumo.\n",
                " El Secretario General de Empleo y Relaciones Laborales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se�ale la afirmaci�n correcta. De acuerdo la Ley 38/2003, la subvenci�n es un instrumento\nde la actividad administrativa:\n",
            "correct_answer": " De limitaci�n.\n",
            "incorrect_answers": [
                " De servicio p�blico.\n",
                " De fomento."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Real Decreto 374/2001, sobre la protecci�n de la salud y seguridad de\nlos trabajadores contra los riesgos relacionados con los agentes qu�micos durante el\ntrabajo, se entiende como exposici�n a un agente qu�mico:\n",
            "correct_answer": " Presencia de un agente qu�mico en el lugar de trabajo que implica el contacto de �ste con\nel trabajador, normalmente por inhalaci�n o por v�a d�rmica.",
            "incorrect_answers": [
                " Todo elemento o compuesto qu�mico, por s� solo o mezclado, tal como se presenta en estado\nnatural o es producido, utilizado o vertido, incluido el vertido como residuo, en una actividad\nlaboral, se haya elaborado o no de modo intencional y se haya comercializado o no.\n",
                " Presencia de un agente qu�mico en el lugar de trabajo que implica el contacto de �ste con\nel trabajador, solamente por inhalaci�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Indique cu�l de las siguientes afirmaciones es correcta, siguiendo lo establecido en el\nEstatuto de Autonom�a de Canarias:\n",
            "correct_answer": " En su condici�n de regi�n ultraperif�rica, La Comunidad Aut�noma de Canarias, a trav�s de\nf�rmulas de cooperaci�n y colaboraci�n con el Estado, en materia de comercio exterior con\nlos pa�ses de la Uni�n Europea y Am�rica.",
            "incorrect_answers": [
                " En su condici�n de regi�n atl�ntica, la Comunidad Aut�noma de Canarias, a trav�s de\nf�rmulas de colaboraci�n con el Estado, en materia de pol�tica democr�tica con �frica y\npa�ses de Am�rica con vinculaciones hist�ricas con Canarias.\n",
                " En su condici�n de regi�n ultraperif�rica, La Comunidad Aut�noma de Canarias, a trav�s de\nf�rmulas de cooperaci�n y colaboraci�n con el Estado, en materia de comercio exterior con\n�frica y pa�ses de Am�rica con vinculaciones hist�ricas con Canarias.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El criterio de operaciones mentales como uno de los utilizados dentro del m�todo\nR.N.U.R. o m�todo de perfil del puesto, se entiende:\n",
            "correct_answer": " Como acciones no automatizadas en las que el trabajador elige conscientemente la\nrespuesta.",
            "incorrect_answers": [
                " Como acciones automatizadas en las que el trabajador elige conscientemente la respuesta.\n",
                " A tareas automatizadas, y tiene en cuenta aspectos como la duraci�n de la atenci�n, la\nprecisi�n del trabajo y las incidencias (trabajo en cadena, duraci�n del ciclo).\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Real Decreto 486/1997, por el que se establecen las disposiciones m�nimas de\nseguridad y salud en los lugares de trabajo, es de fecha:\n",
            "correct_answer": " 14 de abril.",
            "incorrect_answers": [
                " 14 de marzo.\n",
                " 15 de abril.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 38/2003, de 17 de noviembre, General de Subvenciones, tendr� la\nconsideraci�n de beneficiario de subvenciones:\n",
            "correct_answer": " Aquellos que la soliciten dentro del plazo.\n",
            "incorrect_answers": [
                " La persona que haya de realizar la actividad que fundament� su otorgamiento o que se\nencuentre en la situaci�n que legitima su concesi�n.\n",
                " Ninguna de las anteriores es correcta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, las personas jur�dicas solo\npodr�n ser adjudicatarias de contratos:\n",
            "correct_answer": " Ninguna de las anteriores es correcta.",
            "incorrect_answers": [
                " Cuyas prestaciones est�n comprendidas dentro de los fines, objeto o �mbito de actividad\nque, a tenor de sus estatutos o reglas fundacionales, les sean propios.\n",
                " Cuyas prestaciones no est�n comprendidas dentro de los fines, objeto o �mbito de actividad\nque, a tenor de sus estatutos o reglas fundacionales, les sean propios.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 31/1995, de Prevenci�n de Riesgos Laborales, el Servicio de Prevenci�n\ntendr� car�cter:\n",
            "correct_answer": " Interdisciplinario.\n",
            "incorrect_answers": [
                " Sanitario.\n",
                " Administrativo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley Org�nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y\nhombres, tiene por objeto:\n",
            "correct_answer": " Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombres.\n",
            "incorrect_answers": [
                " Promover las condiciones para que la igualdad del individuo y de los grupos en que se\nintegra sean reales y efectivas.\n",
                " El pleno reconocimiento de la igualdad formal ante la ley."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 38/2003, de 17 de noviembre, General de Subvenciones, no tienen car�cter\nde subvenciones, entre otras:\n",
            "correct_answer": " Las prestaciones contributivas y no contributivas del Sistema de la Seguridad Social. Las\npensiones asistenciales por ancianidad a favor de los espa�oles no residentes en Espa�a,\nen los t�rminos establecidos en su normativa reguladora.\n",
            "incorrect_answers": [
                " Las prestaciones derivadas del sistema de clases pasivas del Estado, pensiones de guerra\ny otras pensiones y prestaciones por raz�n de actos de terrorismo. Las prestaciones\nreconocidas por el Fondo de Garant�a Salarial. Los beneficios fiscales y beneficios en la\ncotizaci�n a la Seguridad Social.\n",
                " Las dos anteriores son correctas."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Los sistemas de protecci�n pasiva:\n",
            "correct_answer": " Son aquellos m�todos, materiales, equipos e instalaciones que se incorporan, no con el fin\nde extinguir el fuego, sino para hacer m�s dif�cil su acci�n sobre ellos, es decir, dificultar la\ndestrucci�n de los mismos, para as� poder controlar el avance del fuego m�s f�cilmente.",
            "incorrect_answers": [
                " Son aquellos m�todos, materiales, equipos e instalaciones que se incorporan, con el fin de\nextinguir el fuego, para hacer m�s dif�cil su acci�n sobre ellos, es decir, dificultar la\ndestrucci�n de los mismos, para as� poder controlar el avance del fuego m�s f�cilmente.\n",
                " Son aquellos equipos e instalaciones que se incorporan, no con el fin de extinguir el fuego,\nsino para hacer m�s f�cil su acci�n sobre ellos, es decir, dificultar la destrucci�n de los\nmismos, para as� poder controlar el avance del fuego m�s f�cilmente.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el\nReglamento de Servicios de Prevenci�n, su Anexo VIII incluye una lista no exhaustiva de\nagentes y condiciones de trabajo a los cuales no podr� haber riesgo de exposici�n por\nparte de trabajadoras embarazadas o en per�odo de lactancia natural, entre las que se\nencuentra:\n",
            "correct_answer": " Trabajos en atm�sferas de sobrepresi�n elevada, por ejemplo, en locales a presi�n,\nsubmarinismo.\n",
            "incorrect_answers": [
                " Fr�o ligero.\n",
                " Alergias."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, las personas jur�dicas solo\npodr�n ser adjudicatarias de contratos:\n",
            "correct_answer": " Cuyas prestaciones est�n comprendidas dentro de los fines, objeto o �mbito de actividad\nque, a tenor de sus estatutos o reglas fundacionales, les sean propios.\n",
            "incorrect_answers": [
                " Cuyas prestaciones no est�n comprendidas dentro de los fines, objeto o �mbito de actividad\nque, a tenor de sus estatutos o reglas fundacionales, les sean propios.\n",
                " Ninguna de las anteriores es correcta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley Org�nica 1/2004, de 28 de diciembre, de Medidas de Protecci�n Integral\ncontra la Violencia de G�nero, en el �mbito educativo, la Educaci�n Primaria contribuir�\na:\n",
            "correct_answer": " Desarrollar en la infancia el aprendizaje en la resoluci�n pac�fica de conflictos.\n",
            "incorrect_answers": [
                " Desarrollar en el alumnado su capacidad para adquirir habilidades en la resoluci�n pac�fica\nde conflictos y para comprender y respetar la igualdad entre sexos.\n",
                " Ninguna de las anteriores es correcta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, los contratos relativos a\npropiedades incorporales o valores negociables, �son contratos de suministro?\n",
            "correct_answer": " S�, pero solo los relativos a propiedades incorporales.\n",
            "incorrect_answers": [
                " No.\n",
                " S�."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n las condiciones ambientales de los lugares de trabajo, el Real Decreto 486/1997\nindica que:\n",
            "correct_answer": " En los locales donde exista riesgo de electricidad est�tica los limites inferiores de la\nhumedad relativa ser� del 70 por 100.",
            "incorrect_answers": [
                " En los locales donde exista riesgo de electricidad est�tica los limites inferiores de la\nhumedad relativa ser� del 50 por 100.\n",
                " En los locales donde exista riesgo de electricidad est�tica los limites inferiores de la\nhumedad relativa ser� del 30 por 100.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el Real Decreto 1029/2022, de 20 de diciembre, por el que se\naprueba el Reglamento sobre protecci�n de la salud contra los riesgos derivados de la\nexposici�n a las radiaciones ionizantes, las situaciones de exposici�n planificada son:\n",
            "correct_answer": " Son aquellas que surgen del uso planificado de una fuente de radiaci�n o de una actividad\nhumana que altera las v�as de exposici�n, causando la exposici�n o exposici�n potencial de\nlas personas o del medio ambiente.\n",
            "incorrect_answers": [
                " Son aquellas debidas a una emergencia nuclear o radiol�gica.\n",
                " Son situaciones de exposici�n que ya existen cuando debe tomarse una decisi�n sobre su\ncontrol y que no requieren, o ya no requieren, la adopci�n de medidas urgentes, o bien\nsituaciones de exposici�n creadas por una fuente de radiaci�n cuya ubicuidad o magnitud\nhace injustificado su control de acuerdo con los mismos criterios aplicables a una situaci�n\nde exposici�n planificada."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El art�culo 23 de la Ley 31/1995, de 8 de noviembre, establece como obligaci�n del\nempresario:\n",
            "correct_answer": " Elaborar y conservar a disposici�n de la autoridad laboral la relaci�n de accidentes de trabajo\ny enfermedades profesionales que hayan causado al trabajador una incapacidad laboral\nsuperior a un mes de trabajo.",
            "incorrect_answers": [
                " Elaborar y conservar a disposici�n de la autoridad laboral la relaci�n de accidentes de trabajo\ny enfermedades profesionales que hayan causado al trabajador una incapacidad laboral\nsuperior a una semana de trabajo.\n",
                " Elaborar y conservar a disposici�n de la autoridad laboral la relaci�n de accidentes de trabajo\ny enfermedades profesionales que hayan causado al trabajador una incapacidad laboral\nsuperior a un d�a de trabajo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El m�todo INSHT incluye, entre los factores psicosociales que considera, la carga\nmental de trabajo, y la valora a partir de los siguientes indicadores:\n",
            "correct_answer": " Velocidad de razonamiento ante la soluci�n de un conflicto.\n",
            "incorrect_answers": [
                " Percepci�n distorsionada de la realidad en las primeras cuatro horas.\n",
                " Presi�n de tiempos y percepci�n subjetiva de la realidad."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el art�culo 25 de la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, los trabajadores especialmente sensibles a determinados riesgos derivados\ndel trabajo:\n",
            "correct_answer": " Ser�n empleados en aquellos puestos en los que, a causa de sus caracter�sticas personales,\nestado biol�gico o por su discapacidad f�sica, ps�quica o sensorial debidamente reconocida,\npuedan ellos, los dem�s trabajadores u otras personas relacionadas con la empresa,\nponerse en situaci�n de peligro o en general, cuando se encuentren manifiestamente en\nestados o situaciones transitorias que no respondan a las exigencias psicof�sicas de los\nrespectivos puestos de trabajo.\n",
            "incorrect_answers": [
                " Cuando lo determine el empresario, ser�n empleados en aquellos puestos en los que, a\ncausa de sus caracter�sticas personales, estado biol�gico o por su discapacidad f�sica,\npuedan ellos, los dem�s trabajadores u otras personas relacionadas con la empresa,\nponerse en situaci�n de peligro o en general, cuando se encuentren manifiestamente en\nestados o situaciones transitorias que no respondan a las exigencias psicof�sicas de los\nrespectivos puestos de trabajo.\n",
                " No ser�n empleados en aquellos puestos en los que, a causa de sus caracter�sticas\npersonales, estado biol�gico o por su discapacidad f�sica, ps�quica o sensorial debidamente\nreconocida, puedan ellos, los dem�s trabajadores u otras personas relacionadas con la\nempresa, ponerse en situaci�n de peligro o en general, cuando se encuentren\nmanifiestamente en estados o situaciones transitorias que no respondan a las exigencias\npsicof�sicas de los respectivos puestos de trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El derecho a participar en los asuntos p�blicos, de acuerdo con la Constituci�n Espa�ola:\n",
            "correct_answer": " Podr� corresponder a los ciudadanos extranjeros, tanto para el sufragio activo como para el\npasivo en las elecciones municipales.\n",
            "incorrect_answers": [
                " S�lo corresponde a los ciudadanos espa�oles.\n",
                " Podr� corresponder a los ciudadanos extranjeros, pero s�lo para el derecho de sufragio\nactivo en las elecciones municipales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Indique cu�l de las siguientes afirmaciones es correcta, siguiendo lo establecido en el\nEstatuto de Autonom�a de Canarias:\n",
            "correct_answer": " En su condici�n de regi�n atl�ntica, la Comunidad Aut�noma de Canarias, a trav�s de\nf�rmulas de colaboraci�n con el Estado, en materia de pol�tica democr�tica con �frica y\npa�ses de Am�rica con vinculaciones hist�ricas con Canarias.\n",
            "incorrect_answers": [
                " En su condici�n de regi�n ultraperif�rica, La Comunidad Aut�noma de Canarias, a trav�s de\nf�rmulas de cooperaci�n y colaboraci�n con el Estado, en materia de comercio exterior con\n�frica y pa�ses de Am�rica con vinculaciones hist�ricas con Canarias.\n",
                " En su condici�n de regi�n ultraperif�rica, La Comunidad Aut�noma de Canarias, a trav�s de\nf�rmulas de cooperaci�n y colaboraci�n con el Estado, en materia de comercio exterior con\nlos pa�ses de la Uni�n Europea y Am�rica."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el art�culo 12 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, no realizar reconocimientos m�dicos y pruebas de\nvigilancia peri�dica del estado de salud de los trabajadores que procedan conforme a la\nnormativa sobre prevenci�n de riesgos laborales, o no comunicar su resultado a los\ntrabajadores afectados, se considera:\n",
            "correct_answer": " Infracci�n grave.",
            "incorrect_answers": [
                " Infracci�n muy grave.\n",
                " Infracci�n leve.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En cuanto a los propios dispositivos de alarma de incendios, en edificios o\nestablecimientos en los que existan personas con discapacidad auditiva, personas que\ntengan que llevar protecci�n auditiva o donde el nivel del ruido supere los 60 dB(",
            "correct_answer": ", estos\ndispositivos de alarma ser�n:\na) Ac�sticos, visuales y t�ctiles.\n",
            "incorrect_answers": [
                " Visuales y t�ctiles.\n",
                " Ac�sticos y visuales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el\nReglamento de Servicios de Prevenci�n, su Anexo VIII incluye una lista no exhaustiva de\nagentes y condiciones de trabajo a los cuales no podr� haber riesgo de exposici�n por\nparte de trabajadoras embarazadas o en per�odo de lactancia natural, entre las que se\nencuentra:\n",
            "correct_answer": " Radiaciones ionizantes.",
            "incorrect_answers": [
                " Radiaciones no ionizantes.\n",
                " Calor suave.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En relaci�n a la coordinaci�n en materia de Prevenci�n de Riesgos Laborales, el\nDecreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la normativa sobre\nprevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma de Canarias y\nsus Organismos Aut�nomos, se�ala que las funciones de coordinaci�n, seguimiento,\npromoci�n e impulso de la prevenci�n de riesgos laborales en la Administraci�n P�blica\nde la Comunidad Aut�noma de Canarias y sus Organismos Aut�nomos las realizar�:\n",
            "correct_answer": " La Direcci�n General de Trabajo.\n",
            "incorrect_answers": [
                " La Direcci�n General de la Funci�n P�blica.\n",
                " Los Comit�s de Seguridad y Salud."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �A qu� hace referencia la definici�n: aviso o se�al por la que se informa a las personas\npara que sigan instrucciones espec�ficas ante una situaci�n de emergencia?\n",
            "correct_answer": " Alerta.\n",
            "incorrect_answers": [
                " Alarma.\n",
                " Autoprotecci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Para la Constituci�n Espa�ola, la defensa de los consumidores a cargo de los poderes\np�blicos proteger�, por procedimientos eficaces:\n",
            "correct_answer": " La seguridad de los consumidores.\n",
            "incorrect_answers": [
                " La libre competencia.\n",
                " La econom�a de mercado."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el art�culo 2 de la Ley 31/1995, de Prevenci�n de Riesgos Laborales, �qu�\ncondici�n tienen las disposiciones de car�cter laboral contenidas en dicha Ley y en sus\nnormas reglamentarias?\n",
            "correct_answer": " Derecho m�nimo superior b�sico.\n",
            "incorrect_answers": [
                " Derecho dispositivo supletorio.\n",
                " Derecho necesario m�nimo indisponible pudiendo ser mejoradas y desarrolladas en los\nConvenios Colectivos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 31/1995, de Prevenci�n de Riesgos Laborales, el Servicio de Prevenci�n\ntendr� car�cter:\n",
            "correct_answer": " Sanitario.\n",
            "incorrect_answers": [
                " Interdisciplinario.\n",
                " Administrativo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se entiende por resistencia al fuego de un elemento constructivo:\n",
            "correct_answer": " La capacidad que tiene de mantener, durante un periodo de tiempo, la inestabilidad\nestructural y la estanqueidad o integridad al fuego frente a los humos y gases calientes\nderivados de la combusti�n.\n",
            "incorrect_answers": [
                " La capacidad que tiene de mantener, durante un periodo de tiempo, la estabilidad estructural\ny la estanqueidad o integridad f�sica frente a los humos y gases calientes derivados de la\ncombusti�n.\n",
                " La capacidad que tiene de mantener, durante un periodo de tiempo, la estabilidad estructural\ny la estanqueidad o integridad al fuego frente a los humos y gases calientes derivados de la\ncombusti�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �A qu� hace referencia la definici�n: una se�al que obliga a un comportamiento\ndeterminado?\n",
            "correct_answer": " Se�al de obligaci�n\n",
            "incorrect_answers": [
                " Se�al de advertencia\n",
                " Se�al de prohibici�n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Los derechos de consulta, participaci�n y representaci�n de los empleados p�blicos\nen el Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la normativa sobre\nprevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma de Canarias y\nsus Organismos Aut�nomos, se recogen en su:\n",
            "correct_answer": " Cap�tulo II.\n",
            "incorrect_answers": [
                " Cap�tulo I.\n",
                " Cap�tulo IV."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Conforme al Estatuto B�sico del Empleado P�blico �a qu� tipo de personal le\ncorresponde el ejercicio de las funciones que impliquen la participaci�n directa o\nindirecta en el ejercicio de las potestades p�blicas?\n",
            "correct_answer": " Al personal laboral.\n",
            "incorrect_answers": [
                " A los funcionarios.\n",
                " Al personal eventual."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En el comportamiento ante el fuego de los materiales de construcci�n y elementos\nconstructivos, se define como integridad:\n",
            "correct_answer": " La capacidad que tienen los elementos estructurales con funciones portantes para mantener\nsu estabilidad cuando quedan expuestos al fuego.\n",
            "incorrect_answers": [
                " La capacidad que poseen los elementos constructivos que act�an como barrera ante las\nllamas y los gases durante un incendio.\n",
                " La capacidad que poseen los elementos constructivos que act�an como barrera ante las\nllamas de evitar el traspaso de calor desde el lado expuesto al fuego al no expuesto."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se entiende por plan de autoprotecci�n, seg�n el Real Decreto 398/2007, de 23 de\nmarzo, por el que se aprueba la Norma B�sica de Autoprotecci�n de los centros,\nestablecimientos y dependencias dedicados a actividades que puedan dar origen a\nsituaciones de emergencia:\n",
            "correct_answer": " El Plan de Autoprotecci�n es en el que se prev� la organizaci�n de la respuesta ante\nsituaciones de emergencias clasificadas, las medidas de protecci�n e intervenci�n a adoptar,\ny los procedimientos y secuencia de actuaci�n para dar respuesta a las posibles\nemergencias.\n",
            "incorrect_answers": [
                " El Plan de Autoprotecci�n es el estudio e implantaci�n de las medidas necesarias y\nconvenientes para mantener bajo observaci�n, evitar o reducir las situaciones de riesgo\npotencial y da�os que pudieran derivarse. Las acciones preventivas deben establecerse\nantes de que se produzca la incidencia, emergencia, accidente o como consecuencia de la\nexperiencia adquirida tras el an�lisis de las mismas.\n",
                " El Plan de Autoprotecci�n es el documento que establece el marco org�nico y funcional\nprevisto para un centro, establecimiento, espacio, instalaci�n o dependencia, con el objeto\nde prevenir y controlar los riesgos sobre las personas y los bienes y dar respuesta adecuada\na las posibles situaciones de emergencia, en la zona bajo responsabilidad del titular de la\nactividad, garantizando la integraci�n de estas actuaciones con el sistema p�blico de\nprotecci�n civil."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, los contratos de fabricaci�n,\npor los que la cosa o cosas que hayan de ser entregadas por el empresario deban ser\nelaboradas con arreglo a caracter�sticas peculiares fijadas previamente por la entidad\ncontratante, aun cuando esta se obligue a aportar, total o parcialmente, los materiales\nprecisos, son contratos de:\n",
            "correct_answer": " Ninguna de las anteriores es cierta.",
            "incorrect_answers": [
                " Obras.\n",
                " Suministro.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La iniciativa para la reforma total de la Constituci�n, del T�TULO Preliminar, del T�TULO\nSegundo, o de la Secci�n primera del T�TULO Primero:\n",
            "correct_answer": " Llevar� aparejada la entrada en vigor del estado de excepci�n.\n",
            "incorrect_answers": [
                " Llevar� aparejada la abdicaci�n del titular de la corona.\n",
                " Llevar� aparejada la disoluci�n inmediata de las Cortes."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, los �rganos de contrataci�n\npueden ser:\n",
            "correct_answer": " Unipersonales o colegiados.\n",
            "incorrect_answers": [
                " S�lo unipersonales.\n",
                " S�lo colegiados."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Anexo III del Real Decreto 486/1997, de 14 de abril, para las corrientes de aire\nexpresamente utilizadas para evitar el estr�s en exposiciones intensas al calor, y para las\ncorrientes de aire acondicionado, el l�mite, en el caso de trabajos sedentarios, ser� de:\n",
            "correct_answer": " 0,15 m/s.\n",
            "incorrect_answers": [
                " 0,10 m/s.\n",
                " 0,25 m/s."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley 31/1995, de Prevenci�n de Riesgos Laborales, establece en su art�culo 38 que\nel Comit� de Seguridad y Salud es:\n",
            "correct_answer": " �rgano encargado de colaborar con la direcci�n de la empresa en la mejora dela acci�n\npreventiva.",
            "incorrect_answers": [
                " El �rgano paritario y colegiado de participaci�n destinado a la consulta regular y peri�dica\nde las actuaciones de la empresa en materia de prevenci�n de riesgos.\n",
                " El �rgano unipersonal destinado a la consulta de las actuaciones de la empresa en materia\nde prevenci�n de riesgos.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el art�culo 13 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, la alteraci�n o falseamiento, por las personas o entidades\nque desarrollen la actividad de auditor�a del sistema de prevenci�n de empresas, del\ncontenido del informe de la empresa auditada, se considera:\n",
            "correct_answer": " Infracci�n muy grave.\n",
            "incorrect_answers": [
                " Infracci�n leve.\n",
                " Infracci�n grave."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Ordinariamente �qu� se consideran contratos menores?\n",
            "correct_answer": " Los contratos cuyo valor estimado sea inferior a 15.000 euros, cuanto se trate de contratos\nde obras, o a 40.000 euros, cuando se trate de otros contratos.\n",
            "incorrect_answers": [
                " Solo los contratos cuyo valor estimado sea inferior a 40.000 euros y superior a 30.000 euros,\ncuando se trate de contratos de obras.\n",
                " Los contratos cuyo valor estimado sea inferior a 40.000 euros, cuando se trate de contratos\nde obras, o de 15.000 euros, cuando se trate de otros contratos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El texto refundido de la Ley sobre Infracciones y sanciones en el Orden Social fue\naprobado por:\n",
            "correct_answer": " Real Decreto legislativo 5/2000, de 4 de agosto.\n",
            "incorrect_answers": [
                " Real Decreto legislativo 4/2000, de 4 de agosto.\n",
                " Real Decreto legislativo 6/2000, de 5 de agosto."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Tiene derecho, seg�n el EBEP el funcionario a permisos para realizar pruebas definitivas\nde aptitud y ex�menes finales?\n",
            "correct_answer": " No, en ning�n caso.\n",
            "incorrect_answers": [
                " S�, pero s�lo si son Universitarias.\n",
                " S�, durante los d�as de su celebraci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El art�culo 1 de la Ley Org�nica 3/2007, de 22 de marzo, para la igualdad efectiva de\nmujeres y hombres, establece:\n",
            "correct_answer": " Las personas son iguales en dignidad humana, e iguales en derechos y deberes.\n",
            "incorrect_answers": [
                " Las mujeres y los hombres son iguales en dignidad humana, e iguales en derechos y\ndeberes.\n",
                " Las personas son iguales ante la ley, e iguales en derechos y deberes."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el art�culo 25 de la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, los trabajadores especialmente sensibles a determinados riesgos derivados\ndel trabajo:\n",
            "correct_answer": " Ser�n empleados en aquellos puestos en los que, a causa de sus caracter�sticas personales,\nestado biol�gico o por su discapacidad f�sica, ps�quica o sensorial debidamente reconocida,\npuedan ellos, los dem�s trabajadores u otras personas relacionadas con la empresa,\nponerse en situaci�n de peligro o en general, cuando se encuentren manifiestamente en\nestados o situaciones transitorias que no respondan a las exigencias psicof�sicas de los\nrespectivos puestos de trabajo.\n",
            "incorrect_answers": [
                " Cuando lo determine el empresario, ser�n empleados en aquellos puestos en los que, a\ncausa de sus caracter�sticas personales, estado biol�gico o por su discapacidad f�sica,\npuedan ellos, los dem�s trabajadores u otras personas relacionadas con la empresa,\nponerse en situaci�n de peligro o en general, cuando se encuentren manifiestamente en\nestados o situaciones transitorias que no respondan a las exigencias psicof�sicas de los\nrespectivos puestos de trabajo.\n",
                " No ser�n empleados en aquellos puestos en los que, a causa de sus caracter�sticas\npersonales, estado biol�gico o por su discapacidad f�sica, ps�quica o sensorial debidamente\nreconocida, puedan ellos, los dem�s trabajadores u otras personas relacionadas con la\nempresa, ponerse en situaci�n de peligro o en general, cuando se encuentren\nmanifiestamente en estados o situaciones transitorias que no respondan a las exigencias\npsicof�sicas de los respectivos puestos de trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �A qu� hace referencia la definici�n: una se�al que advierte de un riesgo o peligro?\n",
            "correct_answer": " Se�al gestual.",
            "incorrect_answers": [
                " Se�al de advertencia.\n",
                " Se�al indicativa.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Anexo III del Real Decreto 486/1997, de 14 de abril, para las corrientes de aire\nexpresamente utilizadas para evitar el estr�s en exposiciones intensas al calor, y para las\ncorrientes de aire acondicionado, el l�mite, en el caso de trabajos sedentarios, ser� de:\n",
            "correct_answer": " 0,15 m/s.\n",
            "incorrect_answers": [
                " 0,10 m/s.\n",
                " 0,25 m/s."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Estatuto de los Trabajadores establece que el trabajador, en la prestaci�n de sus\nservicios, tendr� derecho a una protecci�n eficaz en materia de seguridad y salud en el\ntrabajo en su:\n",
            "correct_answer": " Art�culo 21.\n",
            "incorrect_answers": [
                " Art�culo 19.\n",
                " Art�culo 9."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Ordinariamente �qu� se consideran contratos menores?\n",
            "correct_answer": " Los contratos cuyo valor estimado sea inferior a 15.000 euros, cuanto se trate de contratos\nde obras, o a 40.000 euros, cuando se trate de otros contratos.\n",
            "incorrect_answers": [
                " Solo los contratos cuyo valor estimado sea inferior a 40.000 euros y superior a 30.000 euros,\ncuando se trate de contratos de obras.\n",
                " Los contratos cuyo valor estimado sea inferior a 40.000 euros, cuando se trate de contratos\nde obras, o de 15.000 euros, cuando se trate de otros contratos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n lo que establece la Ley 38/2003, de 17 de noviembre, General de Subvenciones, no\npodr�n obtener la condici�n de beneficiario de una subvenci�n:\n",
            "correct_answer": " Los condenados mediante sentencia a la p�rdida de la posibilidad de obtener ayudas.\n",
            "incorrect_answers": [
                " Los que tengan la residencia fiscal fuera de Espa�a.\n",
                " Los que hayan dado lugar, por causa de la que hubiesen sido declarados culpables, a la\nresoluci�n firme de cualquier contrato celebrado con la Administraci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Cu�nto tiempo, seg�n el EBEP, tiene de permiso de ausencia de trabajo por lactancia el\nfuncionario que es padre de un hijo de menor de 12 meses?\n",
            "correct_answer": " Media hora, al tener que ser compartido entre los progenitores.\n",
            "incorrect_answers": [
                " Ning�n tiempo, al ser un permiso que s�lo puede disfrutar la madre.\n",
                " Una hora, ya que este derecho puede ser ejercido indistintamente por uno u otro de los\nprogenitores."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley Org�nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y\nhombres, tiene por objeto:\n",
            "correct_answer": " El pleno reconocimiento de la igualdad formal ante la ley.",
            "incorrect_answers": [
                " Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombres.\n",
                " Promover las condiciones para que la igualdad del individuo y de los grupos en que se\nintegra sean reales y efectivas.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contrato de servicios:\n",
            "correct_answer": " Aquellos cuyo objeto son prestaciones de hacer consistentes en el desarrollo de una\nactividad o dirigidas a la obtenci�n de un resultado distinto de una obra o suministro,\nincluyendo aquellos en que el adjudicatario se obligue a ejecutar el servicio de forma\nsucesiva y por precio unitario.",
            "incorrect_answers": [
                " Aquellos en los que se est� obligado a proyectar, ejecutar, conservar, reponer y reparar\naquellas obras que sean accesorias o est�n vinculadas con la principal y que sean\nnecesarias para que esta cumpla la finalidad determinante de su construcci�n.\n",
                " Aquellos que tienen por objeto la adquisici�n, el arrendamiento financiero, o el\narrendamiento, con o sin opci�n de compra, de productos o bienes muebles.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el Real Decreto 664/1997, de 12 de mayo, sobre la protecci�n de\nlos trabajadores contra los riesgos relacionados con la exposici�n a agentes biol�gicos\ndurante el trabajo, de los siguientes, es un agente biol�gico clasificado en el grupo 2:\n",
            "correct_answer": " Orientia tsutsugamushi (Rickettsia tsutsugamushi).",
            "incorrect_answers": [
                " Bacteroides fragilis.\n",
                " Mycobacterium pinnipedii.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Anexo I del Real Decreto 485/1997, el color verde en las se�ales indica:\n",
            "correct_answer": " Se�al de advertencia.",
            "incorrect_answers": [
                " Se�al de salvamento de auxilio.\n",
                " Peligro-alarma.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n establece la Ley de Prevenci�n de Riesgos Laborales 31/1995, las\nresponsabilidades administrativas que se deriven del procedimiento sancionador por\nincumplimiento del empresario de sus obligaciones en materia de prevenci�n de riesgos\nlaborales:\n",
            "correct_answer": " Ser�n incompatibles con las indemnizaciones por los da�os y perjuicios causados.",
            "incorrect_answers": [
                " Ser�n compatibles con las indemnizaciones por los da�os y perjuicios causados y de recargo\nde prestaciones econ�micas del Sistema de Seguridad Social que puedan ser fijadas por el\n�rgano competente de conformidad con la normativa reguladora de dicho sistema.\n",
                " Ser�n compatibles solo con las indemnizaciones por los da�os y perjuicios causados.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contrato de servicios:\n",
            "correct_answer": " Aquellos en los que se est� obligado a proyectar, ejecutar, conservar, reponer y reparar\naquellas obras que sean accesorias o est�n vinculadas con la principal y que sean\nnecesarias para que esta cumpla la finalidad determinante de su construcci�n.\n",
            "incorrect_answers": [
                " Aquellos que tienen por objeto la adquisici�n, el arrendamiento financiero, o el\narrendamiento, con o sin opci�n de compra, de productos o bienes muebles.\n",
                " Aquellos cuyo objeto son prestaciones de hacer consistentes en el desarrollo de una\nactividad o dirigidas a la obtenci�n de un resultado distinto de una obra o suministro,\nincluyendo aquellos en que el adjudicatario se obligue a ejecutar el servicio de forma\nsucesiva y por precio unitario."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el texto refundido de la Ley General de la Seguridad Social, aprobado\npor el Real Decreto Legislativo 8/2015, de 30 de octubre, tendr� la consideraci�n de\nsituaciones determinantes de incapacidad temporal:\n",
            "correct_answer": " Las debidas a enfermedad com�n o profesional y a accidente, sea o no de trabajo, mientras\nel trabajador reciba asistencia sanitaria de la Seguridad Social y est� impedido para el\ntrabajo, con una duraci�n m�xima de trescientos sesenta y cinco d�as, prorrogables por otros\nciento ochenta d�as cuando se presuma que durante ellos puede el trabajador ser dado de\nalta m�dica por curaci�n.\n",
            "incorrect_answers": [
                " Las debidas a enfermedad com�n o profesional y a accidente, sea o no de trabajo, mientras\nel trabajador reciba asistencia sanitaria de la Seguridad Social y est� impedido para el\ntrabajo, con una duraci�n m�xima de doscientos ochenta d�as, prorrogables por otros ciento\nochenta d�as cuando se presuma que durante ellos puede el trabajador ser dado de alta\nm�dica por curaci�n.\n",
                " Las debidas a enfermedad com�n o profesional y a accidente, no de trabajo, mientras el\ntrabajador reciba asistencia sanitaria de la Seguridad Social y est� impedido para el trabajo,\ncon una duraci�n m�xima de trescientos d�as, prorrogables por otros ciento ochenta d�as\ncuando se presuma que durante ellos puede el trabajador ser dado de alta m�dica por\ncuraci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el anexo I del Real Decreto 486/1997, de 14 de abril, las barandillas ser�n de\nmateriales r�gidos, dispondr�n de una protecci�n que impida el paso o deslizamiento por\ndebajo de las mismas o la ca�da de objetos sobre personas y tendr�n una altura m�nima\nde:\n",
            "correct_answer": " 90 cent�metros.",
            "incorrect_answers": [
                " 60 cent�metros.\n",
                " 70 cent�metros.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �La Comunidad Aut�noma de Canarias puede ejercer actividades de inspecci�n y\nsanci�n en materias de una competencia estatal, de conformidad con lo establecido en\nel Estatuto de Autonom�a de Canarias?\n",
            "correct_answer": " S�, si existe convenio o acuerdo con el Estado.\n",
            "incorrect_answers": [
                " Nunca podr� ejercerlas.\n",
                " Siempre, dentro del territorio auton�mico."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En cuanto a los propios dispositivos de alarma de incendios, en edificios o\nestablecimientos en los que existan personas con discapacidad auditiva, personas que\ntengan que llevar protecci�n auditiva o donde el nivel del ruido supere los 60 dB(",
            "correct_answer": ", estos\ndispositivos de alarma ser�n:\na) Ac�sticos, visuales y t�ctiles.\n",
            "incorrect_answers": [
                " Visuales y t�ctiles.\n",
                " Ac�sticos y visuales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Las obligaciones de los titulares de las actividades del Anexo I de la Norma B�sica de\nautoprotecci�n de los centros, establecimientos y dependencias dedicados a actividades\nque puedan dar origen a situaciones de emergencia, ser�n entre otros:\n",
            "correct_answer": " Elaborar el Plan de Autoprotecci�n correspondiente a su actividad, de acuerdo con el\ncontenido m�nimo definido en el anexo II de la citada Norma aprobada por el Real Decreto\n393/2007 y los criterios establecidos en el apartado 3.3. de dicha Norma.\n",
            "incorrect_answers": [
                " Elaborar el Plan de Autoprotecci�n correspondiente a su actividad, de acuerdo con el\ncontenido m�nimo definido en el anexo II del Real Decreto 485/2007 y los criterios\nestablecidos en el apartado 3.3. de dicha Norma.\n",
                " Elaborar el Plan de Autoprotecci�n correspondiente a su actividad, de acuerdo con el\ncontenido m�nimo definido en el anexo II del Real Decreto 487/2007 y los criterios\nestablecidos en el apartado 3.3. de dicha Norma."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley Canaria de prevenci�n y protecci�n integral de las mujeres contra la violencia\nde g�nero, es del a�o:\n",
            "correct_answer": " 2003.\n",
            "incorrect_answers": [
                " 2004.\n",
                " 2007."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Directiva Europea 92/85/CEE relativa a la aplicaci�n de medidas para promover la\nmejora de la seguridad y de la salud en el trabajo de la trabajadora embarazada, que haya\ndado a luz o en per�odo de lactancia:\n",
            "correct_answer": " No puede tener por efecto la regresi�n del nivel de protecci�n de la trabajadora embarazada,\nque haya dado a luz o en per�odo de lactancia en relaci�n con la situaci�n existente en cada\nEstado miembro en la fecha de su adopci�n.\n",
            "incorrect_answers": [
                " Permite el empresario tomar medidas que estime oportunas.\n",
                " Puede tener por efecto la regresi�n del nivel de protecci�n de la trabajadora embarazada,\nque haya dado a luz o en per�odo de lactancia en relaci�n con la situaci�n existente en cada\nEstado miembro en la fecha de su adopci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Indique qu� significa la indemnidad frente a represalias, seg�n la Ley Org�nica 3/2007,\nde 22 de marzo, para la igualdad efectiva de mujeres y hombres:\n",
            "correct_answer": " Cualquier trato inverso o efecto positivo que se produzca en una persona como\nconsecuencia de la presentaci�n por su parte de queja, reclamaci�n, denuncia, demanda o\nrecurso, de cualquier tipo, destinados a impedir su discriminaci�n y a exigir el cumplimiento\nefectivo del principio de igualdad de trato entre mujeres y hombres.\n",
            "incorrect_answers": [
                " Cualquier trato adverso o efecto negativo que se produzca en una persona como\nconsecuencia de la presentaci�n por su parte de queja, reclamaci�n, denuncia, demanda o\nrecurso, de cualquier tipo, destinados a impedir su discriminaci�n y a exigir el cumplimiento\nefectivo del principio de igualdad de trato entre mujeres y hombres.\n",
                " Ninguna de las anteriores es correcta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A tenor de lo establecido por la norma legal reguladora de los contratos administrativos\nde las Administraciones P�blicas, se�ale de las siguientes respuestas aqu�lla que haga\nreferencia a un �rgano de contrataci�n:\n",
            "correct_answer": " La Mesa de Contrataci�n.\n",
            "incorrect_answers": [
                " El Consejero.\n",
                " El Gobierno."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contrato de servicios:\n",
            "correct_answer": " Aquellos en los que se est� obligado a proyectar, ejecutar, conservar, reponer y reparar\naquellas obras que sean accesorias o est�n vinculadas con la principal y que sean\nnecesarias para que esta cumpla la finalidad determinante de su construcci�n.\n",
            "incorrect_answers": [
                " Aquellos que tienen por objeto la adquisici�n, el arrendamiento financiero, o el\narrendamiento, con o sin opci�n de compra, de productos o bienes muebles.\n",
                " Aquellos cuyo objeto son prestaciones de hacer consistentes en el desarrollo de una\nactividad o dirigidas a la obtenci�n de un resultado distinto de una obra o suministro,\nincluyendo aquellos en que el adjudicatario se obligue a ejecutar el servicio de forma\nsucesiva y por precio unitario."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Los factores determinantes de la carga de trabajo mental dependen de la relaci�n que\nse establece entre:\n",
            "correct_answer": " Los objetivos del trabajador y del empresario.\n",
            "incorrect_answers": [
                " Las exigencias o requerimientos que plantea el trabajo y capacidad de respuesta del\ntrabajador.\n",
                " El interior y exterior de la organizaci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Norma UNE-EN-614-1, que establece los principios ergon�micos a seguir durante\nel proceso de dise�o y proyecto de los equipos de trabajo (en especial de las m�quinas),\nconsidera que los sistemas de trabajo dise�ados de manera ergon�mica favorecen la\nseguridad y la eficacia, mejoran las condiciones de trabajo y de vida y compensan los\nefectos adversos sobre la salud y el rendimiento de los trabajadores y especialmente\nprevienen la fatiga mental. Entre los factores a tener en cuenta se encuentran:\n",
            "correct_answer": " El equipo de trabajo se proyectar� de tal forma que su operaci�n se sobrecargue o est� por\ndebajo de la capacidad mental de los trabajadores.\n",
            "incorrect_answers": [
                " La informaci�n se presentar� de tal forma que el trabajador no pueda entenderla y usarla\nf�cilmente.\n",
                " Cualquier informaci�n que se requiera para la realizaci�n de la tarea ser� f�cilmente\naccesible para el trabajador."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley Org�nica 1/2004, de 28 de diciembre, de Medidas de Protecci�n Integral\ncontra la Violencia de G�nero, en relaci�n a la escolarizaci�n en caso de violencia de\ng�nero:\n",
            "correct_answer": " Las Administraciones competentes deber�n prever la escolarizaci�n inmediata de los hijos\nque se vean afectados por un cambio de residencia derivada de actos de violencia de g�nero.\n",
            "incorrect_answers": [
                " Las Administraciones competentes deber�n prever la escolarizaci�n en el curso del a�o\nsiguiente, de los hijos que se vean afectados por un cambio de residencia derivada de actos\nde violencia de g�nero.\n",
                " Las dos anteriores son correctas."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Uno de los indicadores del m�todo L.E.S.T es el apremio del tiempo, que consiste en:\n",
            "correct_answer": " Para los trabajos repetitivos, surge de la necesidad del trabajador de seguir una cadencia o\nritmo impuesto. Para los trabajos no repetitivos, el apremio puede resultar de la exigencia\nde lograr unos ciertos objetivos de rendimiento en un tiempo determinado.\n",
            "incorrect_answers": [
                " Hace referencia al esfuerzo de memorizaci�n que se exige al trabajador o al n�mero de\nelecciones que debe efectuar, en relaci�n con la velocidad con que debe dar una respuesta.\n",
                " Se considera como una forma especial de atenci�n en trabajos de precisi�n, en los que el\ntrabajador debe manipular objetos muy peque�os u observar detalles muy exactos (por\nejemplo, ejecuci�n de trabajos de precisi�n o detecci�n de defectos poco perceptibles)."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley de Prevenci�n de Riesgos Laborales 31/1995, establece que las personas o\nautoridades especializadas que pretendan desarrollar la actividad de auditor�a del\nsistema de prevenci�n habr�n de contar con:\n",
            "correct_answer": " Con una �nica autorizaci�n de la autoridad laboral, que tendr� validez en todo el territorio\nespa�ol.\n",
            "incorrect_answers": [
                " No precisan de ning�n tipo de acreditaci�n.\n",
                " Con un informe previo del Comit� de Seguridad y Salud."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Entre los principios de la acci�n preventiva que recoge la Ley 31/1995, de Prevenci�n\nde Riesgos laborales, figuran:\n",
            "correct_answer": " Evaluar los riesgos que no se puedan evitar y combatir los riesgos en su origen.\n",
            "incorrect_answers": [
                " No tener en cuenta la evoluci�n de la t�cnica y no sustituir lo peligroso por lo que entra�e\npoco o ning�n peligro.\n",
                " No evitar los riesgos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley 31/1995, de Prevenci�n de Riesgos Laborales, prev� en su art�culo 40 que:\n",
            "correct_answer": " Los trabajadores y sus representantes podr�n recurrir a la Inspecci�n de Trabajo y Seguridad\nSocial si consideran que las medidas adoptadas y los medios utilizados por el empresario\nno son suficientes para garantizar la seguridad y la salud en el trabajo.\n",
            "incorrect_answers": [
                " Los trabajadores y sus representantes podr�n recurrir al Instituto Nacional de Seguridad e\nHigiene en el Trabajo cuando consideren que las medidas adoptadas y los medios utilizados\npor el empresario no son suficientes para garantizar la seguridad y la salud en el trabajo.\n",
                " Los trabajadores y sus representantes podr�n acudir a la Comisi�n Nacional de Seguridad\ny Salud en el Trabajo cuando consideren que las medidas adoptadas y los medios utilizados\npor el empresario son suficientes para garantizar la seguridad y la salud en el trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En el marco del Real Decreto 39/1997, su art�culo 37 se�ala que el personal sanitario\ndel servicio de prevenci�n que, en su caso, exista en el centro de trabajo:\n",
            "correct_answer": " No deber� proporcionar los primeros auxilios y la atenci�n de urgencia a los trabajadores\nv�ctimas de accidentes o alteraciones en el lugar de trabajo.",
            "incorrect_answers": [
                " Deber� proporcionar los primeros auxilios y la atenci�n de urgencia a los trabajadores\nv�ctimas de accidentes o alteraciones en el lugar de trabajo.\n",
                " Deber� proporcionar los primeros auxilios solo a los empresarios que se lesionen en el lugar\nde trabajo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, el perfil de contratante podr�\nincluir:\n",
            "correct_answer": " En cualquier caso, deber� contener tanto la informaci�n de tipo general que puede utilizarse\npara relacionarse con el �rgano de contrataci�n como puntos de contacto, n�meros de\ntel�fono y de fax, direcci�n postal y direcci�n electr�nica, informaciones, anuncios y\ndocumentos generales, tales como las instrucciones internas de contrataci�n y modelos de\ndocumentos, as� como la informaci�n particular relativa a los contratos que celebre.\n",
            "incorrect_answers": [
                " Cualesquiera datos y documentos referentes a la actividad contractual de los �rganos de\ncontrataci�n.\n",
                " Las dos anteriores son correctas."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El art�culo 4.7 de la Ley 31/1995, de Prevenci�n de Riesgos Laborales define como\n�condici�n de trabajo�:\n",
            "correct_answer": " Alguna caracter�stica del mismo que pueda tener influencia negativa en la generaci�n de\nriesgos solo para la seguridad del trabajador.\n",
            "incorrect_answers": [
                " Cualquier caracter�stica del mismo que pueda tener influencia significativa en la generaci�n\nde riesgos para la seguridad y la salud del trabajador.\n",
                " Alguna caracter�stica del mismo que pueda tener influencia negativa en la generaci�n de\nriesgos solo para la salud del trabajador."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Pleno del Consejo Rector del Instituto Canario de Seguridad Laboral adoptar� sus\nacuerdos:\n",
            "correct_answer": " Por mayor�a simple.\n",
            "incorrect_answers": [
                " Por mayor�a cualificada.\n",
                " Por mayor�a absoluta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Una de las siguientes materias no es mencionada en el T�tulo Preliminar de la\nConstituci�n Espa�ola:\n",
            "correct_answer": " Las Cortes Generales.\n",
            "incorrect_answers": [
                " Las Asociaciones de Empresarios.\n",
                " Las Fuerzas Armadas."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El procedimiento de reintegro de subvenciones:\n",
            "correct_answer": " Se iniciar� de oficio y no interrumpe el plazo de prescripci�n de que dispone la\nAdministraci�n para exigir el reintegro, de acuerdo con lo establecido en el art�culo 39 de la\nLey General de Subvenciones.\n",
            "incorrect_answers": [
                " Se iniciar� de oficio, como consecuencia de la propia iniciativa del �rgano concedente, a\npropuesta de la Intervenci�n General o de otros �rganos o de denuncia.\n",
                " La resoluci�n de este procedimiento se dictar� previa instrucci�n de procedimiento\nadministrativo con audiencia del interesado por un plazo no inferior a 15 d�as h�biles."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con la Ley General de Subvenciones, el beneficiario de una subvenci�n:\n",
            "correct_answer": " Puede ser una persona f�sica o jur�dica.\n",
            "incorrect_answers": [
                " Puede ser s�lo una persona f�sica.\n",
                " Ha de ser una persona jur�dica necesariamente, ya que las personas f�sicas reciben ayudas,\nno subvenciones."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 38/2003, de 17 de noviembre, General de Subvenciones, no tienen car�cter\nde subvenciones, entre otras:\n",
            "correct_answer": " Las prestaciones contributivas y no contributivas del Sistema de la Seguridad Social. Las\npensiones asistenciales por ancianidad a favor de los espa�oles no residentes en Espa�a,\nen los t�rminos establecidos en su normativa reguladora.\n",
            "incorrect_answers": [
                " Las prestaciones derivadas del sistema de clases pasivas del Estado, pensiones de guerra\ny otras pensiones y prestaciones por raz�n de actos de terrorismo. Las prestaciones\nreconocidas por el Fondo de Garant�a Salarial. Los beneficios fiscales y beneficios en la\ncotizaci�n a la Seguridad Social.\n",
                " Las dos anteriores son correctas."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �A qu� hace referencia la definici�n: una se�al que proh�be un comportamiento\nsusceptible de provocar un peligro?\n",
            "correct_answer": " Se�al de obligaci�n.\n",
            "incorrect_answers": [
                " Se�al de prohibici�n.\n",
                " Se�al de advertencia."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El texto refundido de la Ley General de la Seguridad Social, aprobado por el Real\nDecreto Legislativo 8/2015, de 30 de octubre, establece que no impedir�n la calificaci�n\nde un accidente como de trabajo:\n",
            "correct_answer": " El comportamiento doloso del trabajador.\n",
            "incorrect_answers": [
                " La prudencia que es consecuencia del ejercicio excepcional de un trabajo fuera del centro\nde trabajo.\n",
                " La imprudencia profesional que es consecuencia del ejercicio habitual de un trabajo y se\nderiva de la confianza que este inspira."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Cu�ndo se aprueban los Pliegos de Cl�usulas Administrativas Particulares de los\ncontratos administrativos?\n",
            "correct_answer": " Siempre conjuntamente a la autorizaci�n del gasto y antes de la licitaci�n del contrato.",
            "incorrect_answers": [
                " Previa o conjuntamente a la autorizaci�n del gasto y siempre antes de la adjudicaci�n del\ncontrato.\n",
                " Siempre con car�cter previo a la autorizaci�n del gasto y antes de la perfecci�n y, en su\ncaso, licitaci�n del contrato.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se considerar�n como �da�os derivados del trabajo�, seg�n la Ley de prevenci�n de\nRiesgos Laborales, 31/1995, de 8 de noviembre:\n",
            "correct_answer": " Enfermedades, patolog�as o lesiones sufridas con motivo u ocasi�n del trabajo.\n",
            "incorrect_answers": [
                " Cualquier lesi�n que sufra el trabajador en su vida diaria.\n",
                " Enfermedades profesionales y riesgos no laborales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se�ale la afirmaci�n correcta. De acuerdo con la Ley 38/2003 General de Subvenciones\nser� nula la resoluci�n de una concesi�n que:\n",
            "correct_answer": " Se otorgue a favor de persona que no haya justificado la entrega de los fondos percibidos.\n",
            "incorrect_answers": [
                " Sea constitutiva de infracci�n administrativa.\n",
                " Se otorgue a favor de persona que no est� al corriente de sus obligaciones tributarias."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley sobre Infracciones y Sanciones en el Orden Social, en materia de prevenci�n\nde Riesgo Laborales considera infracci�n leve:\n",
            "correct_answer": " Incumplir el deber de confidencialidad en el uso relativo a la vigilancia de la salud de los\ntrabajadores.",
            "incorrect_answers": [
                " No dar cuenta, en tiempo y forma, a la autoridad laboral competente, conforme a las\ndisposiciones vigentes, de los accidentes de trabajo ocurridos y de las enfermedades\nprofesionales declaradas cuando tengan la calificaci�n de leves.\n",
                " El incumplimiento de las obligaciones en materia de formaci�n e informaci�n a los\ntrabajadores acerca de los riesgos del puesto de trabajo susceptibles de provocar da�os\npara la seguridad y salud.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el Real Decreto 1311/2005, de 4 de noviembre, sobre la protecci�n de\nla salud y la seguridad de los trabajadores frente a los riesgos derivados o que puedan\nderivarse de la exposici�n a vibraciones mec�nica, para la vibraci�n transmitida al\nsistema cuerpo entero, el valor de exposici�n diaria normalizado para un per�odo de\nreferencia de ocho horas, se fija en:\n",
            "correct_answer": " 0,5 m/s2\n",
            "incorrect_answers": [
                " 1,15 m/s2\n",
                " 5m/s2"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La suspensi�n del contrato de trabajadora embarazada cuando no resulta posible el\ncambio de puesto o no pueda exigirse por motivos justificados, durar�:\n",
            "correct_answer": " Mientras la trabajadora est� embarazada.\n",
            "incorrect_answers": [
                " Durante el periodo necesario para la protecci�n de su seguridad o de su salud y mientras\npersista la imposibilidad de reincorporarse a su puesto anterior o a otro puesto compatible\ncon su estado.\n",
                " Mientras persista la imposibilidad de reincorporarse a su mismo puesto anterior."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Los funcionarios de carrera se hallar�n en alguna de las siguientes situaciones:\n",
            "correct_answer": " Servicio activo, servicios especiales, servicio en otras Administraciones P�blicas,\nexcedencia.\n",
            "incorrect_answers": [
                " Servicio activo, servicios especiales, servicio en otras Administraciones P�blicas,\nexcedencia y suspensi�n.\n",
                " Servicio activo, servicios especiales, servicio en otras Administraciones P�blicas,\nexcedencia e incapacidad laboral temporal."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el articulado del texto refundido de la Ley General de la Seguridad\nSocial, aprobado por el Real Decreto Legislativo 8/2015, de 30 de octubre, tendr�n la\nconsideraci�n de accidente de trabajo:\n",
            "correct_answer": " Las enfermedades que pueda sufrir fuera del lugar de trabajo.\n",
            "incorrect_answers": [
                " Los que sufra el trabajador al ir o al volver del lugar de trabajo.\n",
                " Los sufridos cuando acuda a un acto de salvamento."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 31/1995, de 8 de noviembre, de Prevenci�n de Riesgos Laborales, la\npol�tica en materia de prevenci�n de riesgos laborales deber�:\n",
            "correct_answer": " Promover la integraci�n eficaz de la prevenci�n de riesgos laborales en el departamento que\ndetermine el empresario.\n",
            "incorrect_answers": [
                " Solo promover� la integraci�n eficaz de la prevenci�n de riesgos laborales en el\ndepartamento que determine el trabajador.\n",
                " Promover la integraci�n eficaz de la prevenci�n de riesgos laborales en el sistema de gesti�n\nde la empresa."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Qu� tipo de ley es necesaria para regular el desarrollo del derecho de reuni�n pac�fica y\nsin armas de la Constituci�n espa�ola de 1978?\n",
            "correct_answer": " Ley org�nica.",
            "incorrect_answers": [
                " Ley ordinaria.\n",
                " Ley de bases.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �A qu� hace referencia la definici�n: una se�al que proh�be un comportamiento\nsusceptible de provocar un peligro?\n",
            "correct_answer": " Se�al de obligaci�n.\n",
            "incorrect_answers": [
                " Se�al de prohibici�n.\n",
                " Se�al de advertencia."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El criterio de operaciones mentales como uno de los utilizados dentro del m�todo\nR.N.U.R. o m�todo de perfil del puesto, se entiende:\n",
            "correct_answer": " A tareas automatizadas, y tiene en cuenta aspectos como la duraci�n de la atenci�n, la\nprecisi�n del trabajo y las incidencias (trabajo en cadena, duraci�n del ciclo).\n",
            "incorrect_answers": [
                " Como acciones automatizadas en las que el trabajador elige conscientemente la respuesta.\n",
                " Como acciones no automatizadas en las que el trabajador elige conscientemente la\nrespuesta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Qu� efectos pueden aparecer en ambientes calurosos?\n",
            "correct_answer": " S�ncope por calor.\n",
            "incorrect_answers": [
                " Hipotermia.\n",
                " Combusti�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con 4 del texto refundido de la Ley sobre Infracciones y Sanciones\nen el Orden Social, las infracciones graves en materia de prevenci�n riesgos laborales\nprescriben:\n",
            "correct_answer": " Al a�o.",
            "incorrect_answers": [
                " A los tres a�os.\n",
                " A los seis a�os.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, tiene por\nobjeto:\n",
            "correct_answer": " Proteger la salud de los trabajadores.\n",
            "incorrect_answers": [
                " Promover la seguridad de los trabajadores y de los empresarios.\n",
                " Promover la seguridad y la salud de los trabajadores mediante la aplicaci�n de medidas y el\ndesarrollo de las actividades necesarias para la prevenci�n de riesgos derivados del trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Entre las acciones a desarrollar para el control inicial de las emergencias, deben\ndefinirse:\n",
            "correct_answer": " La alerta, el confinamiento y el apoyo.\n",
            "incorrect_answers": [
                " La alarma, la evacuaci�n y el socorro.\n",
                " La evacuaci�n, el auxilio inmediato y la identificaci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con la Ley General de Subvenciones, el beneficiario de una subvenci�n:\n",
            "correct_answer": " Puede ser una persona f�sica o jur�dica.\n",
            "incorrect_answers": [
                " Puede ser s�lo una persona f�sica.\n",
                " Ha de ser una persona jur�dica necesariamente, ya que las personas f�sicas reciben ayudas,\nno subvenciones."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Real Decreto 314/2006, de 17 de marzo, por el que aprueba el C�digo T�cnico de la\nEdificaci�n, establece las exigencias b�sicas de incendios en:\n",
            "correct_answer": " Art�culo 11.\n",
            "incorrect_answers": [
                " Art�culo 5.\n",
                " Art�culo 9."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, establece\nque el acceso a la informaci�n m�dica de car�cter personal:\n",
            "correct_answer": " Solo se limitar� a las autoridades sanitarias que lleven a cabo la vigilancia de la salud sin el\nconsentimiento expreso del trabajador.\n",
            "incorrect_answers": [
                " Se limitar� al personal m�dico sin necesidad del consentimiento del trabajador.\n",
                " Se limitar� al personal m�dico y a las autoridades sanitarias que lleven a cabo la vigilancia\nde la salud, sin que pueda facilitarse al empresario o a otras personas sin el consentimiento\nexpreso del trabajador."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, la representaci�n de las\nentidades del sector p�blico en materia contractual corresponde a:\n",
            "correct_answer": " Los �rganos de contrataci�n que, en virtud de norma legal o reglamentaria o disposici�n\nestatutaria, tengan atribuida la facultad de celebrar contratos en su nombre.\n",
            "incorrect_answers": [
                " A las Unidades Administrativas de cada contrato.\n",
                " A las Direcciones contractuales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Uno de los indicadores del m�todo L.E.S.T es el apremio del tiempo, que consiste en:\n",
            "correct_answer": " Hace referencia al esfuerzo de memorizaci�n que se exige al trabajador o al n�mero de\nelecciones que debe efectuar, en relaci�n con la velocidad con que debe dar una respuesta.\n",
            "incorrect_answers": [
                " Para los trabajos repetitivos, surge de la necesidad del trabajador de seguir una cadencia o\nritmo impuesto. Para los trabajos no repetitivos, el apremio puede resultar de la exigencia\nde lograr unos ciertos objetivos de rendimiento en un tiempo determinado.\n",
                " Se considera como una forma especial de atenci�n en trabajos de precisi�n, en los que el\ntrabajador debe manipular objetos muy peque�os u observar detalles muy exactos (por\nejemplo, ejecuci�n de trabajos de precisi�n o detecci�n de defectos poco perceptibles)."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En materia de universidades, el art�culo 134 del Estatuto de Autonom�a de Canarias\ndispone que:\n",
            "correct_answer": " Corresponde a la Comunidad Aut�noma de Canarias, respetando la autonom�a universitaria,\nla competencia de desarrollo legislativo en materia de ense�anza universitaria.\n",
            "incorrect_answers": [
                " Corresponde a la Comunidad Aut�noma de Canarias, respetando la libertad de c�tedra, la\ncompetencia de ejecuci�n en materia de ense�anza universitaria.\n",
                " Corresponde a la Comunidad Aut�noma de Canarias, respetando la autonom�a universitaria,\nla competencia de desarrollo legislativo y de ejecuci�n en materia de ense�anza universitaria"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La fatiga cr�nica:\n",
            "correct_answer": " Aparece cuando la carga de trabajo es continua y se mantiene el desequilibrio entre la\ncapacidad del organismo y el esfuerzo que debe realizar para dar respuesta a las exigencias\nde la tarea.\n",
            "incorrect_answers": [
                " Es un estado de fatiga prolongada, que es recuperable por el simple descanso.\n",
                " Tiene consecuencias menos graves para el trabajador que la fatiga normal o fisiol�gica."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Todas las exposiciones a radiaciones ionizantes se encuentran en alguna de las\nsituaciones siguientes:\n",
            "correct_answer": " Situaciones de exposici�n programada.\n",
            "incorrect_answers": [
                " Situaciones de exposici�n de emergente.\n",
                " Situaciones de exposici�n de existente."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Real Decreto 665/1997, de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes cancer�genos\ndurante el trabajo, �qu� se entender� por agente cancer�geno o mut�geno?\n",
            "correct_answer": " Se entender� por agente cancer�geno o mut�geno una sustancia o mezcla que cumpla los\ncriterios para su clasificaci�n como cancer�geno o mut�geno en c�lulas germinales de\ncategor�a 1A o 1B establecidos en el anexo I del Reglamento (CE) n.� 1272/2008 del\nParlamento Europeo y del Consejo, de 16 de diciembre de 2008, sobre clasificaci�n,\netiquetado y envasado de sustancias y mezclas.\n",
            "incorrect_answers": [
                " Se entender� por agente cancer�geno o mut�geno una sustancia o mezcla que no cumpla\nlos criterios para su clasificaci�n como cancer�geno o mut�geno en c�lulas germinales de\ncategor�a 1A o 1B establecidos en el anexo I del Reglamento (CE) n.� 1272/2008 del\nParlamento Europeo y del Consejo, de 16 de diciembre de 2008, sobre clasificaci�n,\netiquetado y envasado de sustancias y mezclas.\n",
                " Se entender� por agente cancer�geno o mut�geno una sustancia o mezcla que cumpla los\ncriterios para su clasificaci�n como cancer�geno o mut�geno en c�lulas germinales de\ncategor�a 5A o 10B establecidos en el anexo I del Reglamento (CE) n.� 1272/2008 del\nParlamento Europeo y del Consejo, de 16 de diciembre de 2008, sobre clasificaci�n,\netiquetado y envasado de sustancias y mezclas."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el Real Decreto 665/1997, de 12 de mayo, sobre la protecci�n de\nlos trabajadores contra los riesgos relacionados con la exposici�n a agentes\ncancer�genos durante el trabajo, el empresario deber� suministrar a las autoridades\nlaborales y sanitarias, cuando �stas lo soliciten, la informaci�n adecuada sobre:\n",
            "correct_answer": " Las actividades o los procedimientos industriales aplicados, sin incluir las razones por las\ncuales se utilizan agentes cancer�genos o mut�genos.\n",
            "incorrect_answers": [
                " Las cantidades utilizadas de sustancias o mezclas que contengan agentes cancer�genos,\npero no mut�genos.\n",
                " Las medidas de prevenci�n adoptadas y los tipos de equipos de protecci�n utilizados."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A los efectos de aplicaci�n del Reglamento sobre protecci�n de la salud contra los\nriesgos derivados de la exposici�n a las radiaciones ionizantes, se entender� por\nefluentes radiactivos:\n",
            "correct_answer": " Productos radiactivos residuales en forma l�quida o gaseosa.\n",
            "incorrect_answers": [
                " Productos radiactivos residuales en forma s�lida.\n",
                " Productos radiactivos procedentes del petr�leo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Anexo III del Real Decreto 486/1997, de 14 de abril, para las corrientes de aire\nexpresamente utilizadas para evitar el estr�s en exposiciones intensas al calor, y para las\ncorrientes de aire acondicionado, el l�mite, en el caso de trabajos sedentarios, ser� de:\n",
            "correct_answer": " 0,15 m/s.\n",
            "incorrect_answers": [
                " 0,10 m/s.\n",
                " 0,25 m/s."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El m�todo R.N.U.R. o m�todo de perfil del puesto viene determinado por dos criterios:\n",
            "correct_answer": " Operaciones f�sicas y nivel de atenci�n.\n",
            "incorrect_answers": [
                " Indicadores psicol�gicos y operaciones mentales.\n",
                " Operaciones mentales y nivel de atenci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Las se�ales de prohibici�n tienen forma redonda y son:\n",
            "correct_answer": " Pictograma negro sobre fondo blanco, bordes y banda (transversal descendente de\nizquierda a derecha atravesando el pictograma a 45� respecto a la horizontal) rojos (el rojo\ndeber� cubrir como m�nimo el 35 por 100 de la superficie de la se�al).",
            "incorrect_answers": [
                " Pictograma negro sobre fondo blanco, bordes y banda (transversal descendente de\nizquierda a derecha atravesando el pictograma a 45� respecto a la horizontal) rojos (el rojo\ndeber� cubrir como m�nimo el 50 por 100 de la superficie de la se�al).\n",
                " Pictograma negro sobre fondo amarillo, bordes y banda (transversal descendente de\nizquierda a derecha atravesando el pictograma a 45� respecto a la horizontal) rojos (el rojo\ndeber� cubrir como m�nimo el 35 por 100 de la superficie de la se�al).\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, uno de los principios de acci�n preventiva es:\n",
            "correct_answer": " Adoptar medidas que antepongan la protecci�n colectiva a la individual.\n",
            "incorrect_answers": [
                " Adoptar medidas que antepongan siempre la protecci�n individual.\n",
                " No tener en cuenta la evoluci�n de la t�cnica."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Reglamento de instalaciones de protecci�n contra incendios 513/2017 establece\nque su objeto es:\n",
            "correct_answer": " La determinaci�n de las condiciones y los requisitos exigibles al dise�o,\ninstalaci�n/aplicaci�n, mantenimiento e inspecci�n de los equipos, sistemas y componentes\nque conforman las instalaciones de protecci�n activa contra incendios.\n",
            "incorrect_answers": [
                " La determinaci�n de los requisitos exigibles al dise�o, instalaci�n/aplicaci�n, mantenimiento\ne inspecci�n de los equipos, sistemas y componentes que conforman las instalaciones de\nprotecci�n pasiva contra incendios.\n",
                " La determinaci�n de requisitos exigibles al dise�o, instalaci�n/aplicaci�n, mantenimiento e\ninspecci�n de los equipos, sistemas y componentes que conforman las instalaciones de\nprotecci�n pasiva contra combustiones."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley 31/1995, de 8 de noviembre, de Prevenci�n de Riesgos Laborales, prev� entre\nlas medidas a adoptar por el empresario para evitar la exposici�n a posibles riesgos para\nla seguridad y salud o una posible repercusi�n sobre el embarazo o lactancia de las\ntrabajadoras, la posibilidad de incluir, cuando resulte necesario:\n",
            "correct_answer": " La no realizaci�n de trabajo nocturno o de trabajo a turno.\n",
            "incorrect_answers": [
                " La realizaci�n de trabajo a turno.\n",
                " S�lo la no realizaci�n de trabajo nocturno."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �La Comunidad Aut�noma de Canarias puede ejercer actividades de inspecci�n y\nsanci�n en materias de una competencia estatal, de conformidad con lo establecido en\nel Estatuto de Autonom�a de Canarias?\n",
            "correct_answer": " Siempre, dentro del territorio auton�mico.",
            "incorrect_answers": [
                " S�, si existe convenio o acuerdo con el Estado.\n",
                " Nunca podr� ejercerlas.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El m�todo INSHT incluye, entre los factores psicosociales que considera, la carga\nmental de trabajo, y la valora a partir de los siguientes indicadores:\n",
            "correct_answer": " Velocidad de razonamiento ante la soluci�n de un conflicto.\n",
            "incorrect_answers": [
                " Percepci�n distorsionada de la realidad en las primeras cuatro horas.\n",
                " Presi�n de tiempos y percepci�n subjetiva de la realidad."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el articulado de la Ley General de la Seguridad Social, no impedir�n\nla calificaci�n de un accidente como de trabajo:\n",
            "correct_answer": " La concurrencia de culpabilidad civil o criminal del empresario, de un compa�ero de trabajo\ndel accidentado o de un tercero, salvo que no guarde relaci�n alguna con el trabajo.\n",
            "incorrect_answers": [
                " La concurrencia de causas determinadas arbitrariamente por el propio trabajador.\n",
                " La concurrencia de causas determinadas por el empresario y el trabajador a pesar de que\nno guarde relaci�n con el trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Real Decreto 486/1997, �qu� se entiende por lugares de trabajo?\n",
            "correct_answer": " Todas las �reas del centro de trabajo, edificadas o no, aunque los trabajadores no deban\npermanecer en ellas.\n",
            "incorrect_answers": [
                " Las �reas del centro de trabajo, edificadas o no, en las que los trabajadores deban\npermanecer o a las que puedan acceder en raz�n de su trabajo.\n",
                " Las �reas del centro de trabajo, no edificadas, en las que los trabajadores deban permanecer\no a las que puedan acceder en raz�n de su trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, el empresario adoptar� las medidas necesarias con el fin de que los equipos\nde trabajo sean adecuados para el trabajo que deba realizarse y convenientemente\nadaptados a tal efecto, de forma que:\n",
            "correct_answer": " Garanticen la seguridad y salud de los trabajadores al utilizarlos.\n",
            "incorrect_answers": [
                " Garanticen solo la salud de los trabajadores al utilizarlos.\n",
                " Garanticen la seguridad de los empresarios al utilizarlos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Las emergencias se identifican y clasifican en:\n",
            "correct_answer": " En funci�n del tipo de riesgo y en funci�n de la ocupaci�n y medios humanos.\n",
            "incorrect_answers": [
                " En funci�n del tipo de riesgo y en funci�n de la gravedad.\n",
                " En funci�n del tipo de riesgo, en funci�n de la gravedad y en funci�n de la ocupaci�n y\nmedios humanos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Anexo I del Real Decreto 486/1997, de 14 de abril, estar�n prohibidas las\npuertas espec�ficamente de emergencia que sean:\n",
            "correct_answer": " Abiertas hacia el interior.",
            "incorrect_answers": [
                " Correderas y giratorias.\n",
                " Abiertas hacia el exterior.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se�ale la afirmaci�n correcta. De acuerdo la Ley 38/2003, la subvenci�n es un instrumento\nde la actividad administrativa:\n",
            "correct_answer": " De limitaci�n.\n",
            "incorrect_answers": [
                " De servicio p�blico.\n",
                " De fomento."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Qu� efectos pueden aparecer en ambientes calurosos?\n",
            "correct_answer": " Hipotermia.\n",
            "incorrect_answers": [
                " S�ncope por calor.\n",
                " Combusti�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el EBEP, �cu�nto d�as de permiso se le conceden a los funcionarios por motivo de\nfallecimiento de un familiar dentro del segundo grado de consanguinidad, si no se precisa\ntrasladarse de localidad?\n",
            "correct_answer": " 5 d�as.\n",
            "incorrect_answers": [
                " 4 d�as.\n",
                " 2 d�as."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el art�culo 156 del texto refundido de la Ley General de la Seguridad\nSocial, aprobado por el Real Decreto Legislativo 8/2015, de 30 de octubre, tendr�n la\nconsideraci�n de accidente de trabajo:\n",
            "correct_answer": " Los que sufra el trabajador con ocasi�n o como consecuencia del desempe�o de cargos\nelectivos de car�cter sindical, as� como los ocurridos al ir o al volver del lugar en que se\nejerciten las funciones propias de dichos cargos.\n",
            "incorrect_answers": [
                " Los que sean debidos a dolo o a imprudencia temeraria del trabajador accidentado.\n",
                " Los que sean debidos a fuerza mayor extra�a al trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Qu� regula el Real Decreto 486/199,7 de 14 de abril?\n",
            "correct_answer": " Las disposiciones m�nimas para la se�alizaci�n de seguridad y salud en el trabajo.\n",
            "incorrect_answers": [
                " Establece las disposiciones m�nimas de seguridad y de salud aplicables a los lugares de\ntrabajo.\n",
                " Establece las disposiciones m�nimas de seguridad y de salud aplicables a los lugares\ndom�sticos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El conjunto de interrelacionados y ordenados que tienen por objeto percibir un\nfen�meno propio de un incendio y transmitir el aviso de su existencia al lugar afectado o\na otro lugar establecido para este fin, se conoce como:\n",
            "correct_answer": " El sistema de prevenci�n y alarma.\n",
            "incorrect_answers": [
                " El sistema de detecci�n y alarma.\n",
                " El sistema de contenci�n y alarma."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con la Ley de Prevenci�n de Riesgos laborales 31/1995, de 8 de noviembre,\nse entiende como conjunto de medios humanos y materiales necesarios para realizar las\nactividades preventivas a fin de garantizar la adecuada protecci�n de la seguridad y la\nsalud de los trabajadores, asesorando y asistiendo para ello al empresario, a los\ntrabajadores y a sus representantes y a los �rganos de representaci�n especializados:\n",
            "correct_answer": " Delegados de Prevenci�n.\n",
            "incorrect_answers": [
                " Comit� de Seguridad y Salud.\n",
                " Servicio de Prevenci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, el\nplan de prevenci�n de riesgos laborales deber� incluir:\n",
            "correct_answer": " Las responsabilidades de los trabajadores.\n",
            "incorrect_answers": [
                " Solo los procesos necesarios para la acci�n preventiva.\n",
                " La estructura organizativa, las responsabilidades, las funciones, las pr�cticas, los\nprocedimientos, los procesos y los recursos necesarios para realizar la acci�n de prevenci�n\nde riesgos laborales en la empresa, en los t�rminos que reglamentariamente se establezcan."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �A qu� hace referencia la definici�n: una se�al emitida por medio de un dispositivo\nformado por materiales transparentes o transl�cidos, iluminados desde atr�s o desde el\ninterior, de tal manera que aparezca por s� misma como una superficie luminosa?\n",
            "correct_answer": " Se�al transl�cida.",
            "incorrect_answers": [
                " Se�al lum�nica.\n",
                " Se�al luminosa.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Entre los principios de la acci�n preventiva que recoge la Ley 31/1995, de Prevenci�n\nde Riesgos laborales, figuran:\n",
            "correct_answer": " No evitar los riesgos.",
            "incorrect_answers": [
                " Evaluar los riesgos que no se puedan evitar y combatir los riesgos en su origen.\n",
                " No tener en cuenta la evoluci�n de la t�cnica y no sustituir lo peligroso por lo que entra�e\npoco o ning�n peligro.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Norma UNE-EN-614-1, que establece los principios ergon�micos a seguir durante\nel proceso de dise�o y proyecto de los equipos de trabajo (en especial de las m�quinas),\nconsidera que los sistemas de trabajo dise�ados de manera ergon�mica favorecen la\nseguridad y la eficacia, mejoran las condiciones de trabajo y de vida y compensan los\nefectos adversos sobre la salud y el rendimiento de los trabajadores y especialmente\nprevienen la fatiga mental. Entre los factores a tener en cuenta se encuentran:\n",
            "correct_answer": " El equipo de trabajo se proyectar� de tal forma que su operaci�n se sobrecargue o est� por\ndebajo de la capacidad mental de los trabajadores.\n",
            "incorrect_answers": [
                " La informaci�n se presentar� de tal forma que el trabajador no pueda entenderla y usarla\nf�cilmente.\n",
                " Cualquier informaci�n que se requiera para la realizaci�n de la tarea ser� f�cilmente\naccesible para el trabajador."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el Real Decreto 665/1997, de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes cancer�genos\ndurante el trabajo, en caso de accidentes o de situaciones imprevistas que pudieran\nsuponer una exposici�n anormal de los trabajadores, el empresario informar� de ello lo\nantes posible a los mismos y adoptar�, en tanto no se hayan eliminado las causas que\nprodujeron la exposici�n anormal, las medidas necesarias para:\n",
            "correct_answer": " Poner a disposici�n de los trabajadores afectados ropa y equipos de protecci�n adecuados.",
            "incorrect_answers": [
                " No limitar la autorizaci�n para trabajar en la zona afectada a los trabajadores que sean\nindispensables para efectuar las reparaciones u otros trabajos necesarios.\n",
                " Impedir el trabajo en la zona afectada de los trabajadores protegidos adecuadamente.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �A qu� hace referencia la definici�n: una se�al que advierte de un riesgo o peligro?\n",
            "correct_answer": " Se�al gestual.",
            "incorrect_answers": [
                " Se�al de advertencia.\n",
                " Se�al indicativa.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �A qu� hace referencia la definici�n: una se�al que advierte de un riesgo o peligro?\n",
            "correct_answer": " Se�al gestual.",
            "incorrect_answers": [
                " Se�al de advertencia.\n",
                " Se�al indicativa.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La sobrecarga mental puede ser debida a:\n",
            "correct_answer": " Exceso de trabajo, o ritmo impuesto demasiado elevado que el trabajador no puede controlar.\n",
            "incorrect_answers": [
                " Exigencia de trabajo que no supera la capacidad de la persona, vi�ndose desbordada.\n",
                " Exceso de trabajo, o ritmo impuesto demasiado lento que el trabajador no puede controlar."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se define en la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre,\ncomo cualquier m�quina, aparato, instrumento o instalaci�n utilizada en el trabajo:\n",
            "correct_answer": " El equipo de protecci�n individual.\n",
            "incorrect_answers": [
                " Un agente susceptible de causar da�os.\n",
                " El equipo de trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �A qu� hace referencia la definici�n: un mensaje verbal predeterminado, en el que se\nutiliza voz humana o sint�tica?\n",
            "correct_answer": " Se�al verbal.",
            "incorrect_answers": [
                " Comunicaci�n verbal.\n",
                " Advertencia verbal.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Es una funci�n del Pleno del Consejo Rector del Instituto Canario de Seguridad\nLaboral:\n",
            "correct_answer": " Realizar estudios e informes en relaci�n con la siniestralidad laboral e investigaciones que\ndesarrolle el Instituto.\n",
            "incorrect_answers": [
                " Aprobar el Plan de prevenci�n de riesgos laborales de Canarias.\n",
                " Gestionar de forma integrada los recursos humanos, f�sicos y financieros del Instituto\nCanario de Seguridad Laboral."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Estatuto de Autonom�a de Canarias en su art�culo 114.1:\n",
            "correct_answer": " Corresponde a la Comunidad Aut�noma de Canarias la competencia ejecutiva a en materia\nde planificaci�n y promoci�n de la actividad econ�mica en Canarias, sin perjuicio de lo\nestablecido en los art�culos 149.1.11.� y 13.� de la Constituci�n.\n",
            "incorrect_answers": [
                " Corresponde a la Comunidad Aut�noma de Canarias la competencia exclusiva en materia\nde planificaci�n y promoci�n de la actividad econ�mica en Canarias, sin perjuicio de lo\nestablecido en los art�culos 149.1.11.� y 13.� de la Constituci�n.\n",
                " Corresponde a la Comunidad Aut�noma de Canarias la competencia de ejecutiva en materia\nde planificaci�n y promoci�n de la actividad econ�mica en Canarias, sin perjuicio de lo\nestablecido en los art�culos 149.1.29.� y 20.� de la Constituci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n lo que establece la Ley 38/2003, de 17 de noviembre, General de Subvenciones, no\npodr�n obtener la condici�n de beneficiario de una subvenci�n:\n",
            "correct_answer": " Los que tengan la residencia fiscal fuera de Espa�a.\n",
            "incorrect_answers": [
                " Los condenados mediante sentencia a la p�rdida de la posibilidad de obtener ayudas.\n",
                " Los que hayan dado lugar, por causa de la que hubiesen sido declarados culpables, a la\nresoluci�n firme de cualquier contrato celebrado con la Administraci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El principio por el cual el derecho propio de Canarias en materia de competencia\nexclusiva de la Comunidad Aut�noma es aplicable en su territorio con preferencia a\ncualquier otro, se denomina por el Estatuto de Autonom�a de Canarias:\n",
            "correct_answer": " Prevalencia.\n",
            "incorrect_answers": [
                " Territorialidad.\n",
                " Preferencia."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La competencia ejecutiva en materia de autorizaci�n de trabajo de los extranjeros cuya\nrelaci�n laboral se desarrolle en Canarias, ser� ejercida por:\n",
            "correct_answer": " El Ministerio competente.\n",
            "incorrect_answers": [
                " La Delegaci�n del Gobierno en Canarias.\n",
                " La Comunidad Aut�noma de Canarias."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Norma UNE-EN-614-1 en el dise�o de pantallas de informaci�n, se�ales y\ndispositivos de control, tambi�n se incluyen algunos aspectos que ser�a necesario\nconsiderar para la prevenci�n de la fatiga mental. Entre ellos, podemos destacar los\nsiguientes:\n",
            "correct_answer": " El dise�o de pantallas de informaci�n y se�ales debe proporcionar una informaci�n clara e\ninequ�voca. Se evitar� toda informaci�n innecesaria.\n",
            "incorrect_answers": [
                " Para evitar una sobrecarga de informaci�n, el n�mero y tipo de pantallas y se�ales se\nmantendr� en el m�ximo necesario para una adecuada realizaci�n de la tarea.\n",
                " La posici�n de los mandos, su movimiento, su efecto y su correspondiente funci�n o\ninformaci�n presentada ser�n mutuamente compatibles."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Entre los aspectos que definen la carga mental podemos encontrar situaciones de:\n",
            "correct_answer": " Sobrecarga cuantitativa y cualitativa.\n",
            "incorrect_answers": [
                " Sobrecarga cuantitativa, sobrecarga cualitativa, sobrecarga cuantitativa y sobrecarga\ncualitativa.\n",
                " Exceso de carga primaria y secundaria."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La norma que regula en la actualidad el Estatuto de Autonom�a de Canarias es:\n",
            "correct_answer": " Ley Org�nica 10/1982.\n",
            "incorrect_answers": [
                " Ley Org�nica 1/2018.\n",
                " Ley 4/1996."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Entre los principios de la acci�n preventiva que recoge la Ley 31/1995, de Prevenci�n\nde Riesgos laborales, figuran:\n",
            "correct_answer": " No evitar los riesgos.",
            "incorrect_answers": [
                " Evaluar los riesgos que no se puedan evitar y combatir los riesgos en su origen.\n",
                " No tener en cuenta la evoluci�n de la t�cnica y no sustituir lo peligroso por lo que entra�e\npoco o ning�n peligro.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el art�culo 32 bis de la Ley de Prevenci�n de Riesgos Laborales\n31/1995, la presencia en el centro de trabajo de los recursos preventivos, cualquiera que\nsea la modalidad de organizaci�n de dichos recursos, ser� necesaria, entre otros casos:\n",
            "correct_answer": " En ning�n caso es necesaria.\n",
            "incorrect_answers": [
                " Cuando la necesidad de dicha presencia sea requerida por la Inspecci�n de Trabajo y\nSeguridad Social, si las circunstancias del caso as� lo exigieran debido a las condiciones de\ntrabajo detectadas.\n",
                " Cuando la necesidad de dicha presencia sea requerida por Instituto Nacional de Seguridad\ne Higiene en el Trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Los equipos de protecci�n contra incendios deber�n ser de color:\n",
            "correct_answer": " Naranja.\n",
            "incorrect_answers": [
                " Negro.\n",
                " Rojo o predominante rojo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Conforme al Estatuto B�sico del Empleado P�blico y en orden a la provisi�n de puestos\nde trabajo �qu� tipo de personal debe pasar a la situaci�n administrativa de servicios\nespeciales cuando sean activados como reservistas voluntarios para prestar servicios en\nlas Fuerzas Armadas?\n",
            "correct_answer": " Los funcionarios.\n",
            "incorrect_answers": [
                " Los funcionarios de carrera.\n",
                " El personal laboral."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Cu�ndo deben existir lugares de descanso en los trabajos?\n",
            "correct_answer": " Cuando la seguridad o la salud de los trabajadores lo exijan, en particular en raz�n del tipo\nde actividad o del n�mero de trabajadores, �stos dispondr�n de un local de descanso de\nf�cil acceso.",
            "incorrect_answers": [
                " Nunca.\n",
                " Siempre y en todo caso.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La suspensi�n del contrato de trabajadora embarazada cuando no resulta posible el\ncambio de puesto o no pueda exigirse por motivos justificados, durar�:\n",
            "correct_answer": " Mientras persista la imposibilidad de reincorporarse a su mismo puesto anterior.",
            "incorrect_answers": [
                " Mientras la trabajadora est� embarazada.\n",
                " Durante el periodo necesario para la protecci�n de su seguridad o de su salud y mientras\npersista la imposibilidad de reincorporarse a su puesto anterior o a otro puesto compatible\ncon su estado.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Conforme al Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la\nnormativa sobre prevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma\nde Canarias y sus Organismos Aut�nomos, la evaluaci�n de los factores de riesgo que\npuedan afectar a la seguridad y a la salud de los empleados p�blicos al servicio de la\nAdministraci�n P�blica de la Comunidad Aut�noma de Canarias y sus Organismos\nAut�nomos en los t�rminos previstos en las disposiciones vigentes sobre prevenci�n de\nriesgos laborales, corresponde:\n",
            "correct_answer": " A las organizaciones sindicales.",
            "incorrect_answers": [
                " A los Servicios de Prevenci�n de Riesgos Laborales.\n",
                " Al Instituto Canario de Seguridad Laboral.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Conforme al art�culo 34 de la Ley 2/1987, de 30 de marzo, de la Funci�n P�blica Canaria,\nindique cu�l de las siguientes, es una causa de p�rdida de la condici�n de funcionario:\n",
            "correct_answer": " Excedencia forzosa.",
            "incorrect_answers": [
                " La incorrecci�n con el p�blico, superiores, compa�eros o subordinados.\n",
                " Sentencia firme que imponga el funcionario pena principal o accesoria de inhabilitaci�n\nabsoluta o especial para el desempe�o de cargo p�blico.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el art�culo 32 bis de la Ley de Prevenci�n de Riesgos Laborales\n31/1995, la presencia en el centro de trabajo de los recursos preventivos, cualquiera que\nsea la modalidad de organizaci�n de dichos recursos, ser� necesaria, entre otros casos:\n",
            "correct_answer": " Cuando la necesidad de dicha presencia sea requerida por la Inspecci�n de Trabajo y\nSeguridad Social, si las circunstancias del caso as� lo exigieran debido a las condiciones de\ntrabajo detectadas.\n",
            "incorrect_answers": [
                " En ning�n caso es necesaria.\n",
                " Cuando la necesidad de dicha presencia sea requerida por Instituto Nacional de Seguridad\ne Higiene en el Trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con la Ley de Prevenci�n de Riesgos laborales 31/1995, de 8 de noviembre,\nse entiende como conjunto de medios humanos y materiales necesarios para realizar las\nactividades preventivas a fin de garantizar la adecuada protecci�n de la seguridad y la\nsalud de los trabajadores, asesorando y asistiendo para ello al empresario, a los\ntrabajadores y a sus representantes y a los �rganos de representaci�n especializados:\n",
            "correct_answer": " Delegados de Prevenci�n.\n",
            "incorrect_answers": [
                " Comit� de Seguridad y Salud.\n",
                " Servicio de Prevenci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �A qu� hace referencia la definici�n: una se�al que advierte de un riesgo o peligro?\n",
            "correct_answer": " Se�al indicativa.\n",
            "incorrect_answers": [
                " Se�al de advertencia.\n",
                " Se�al gestual."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Las aportaciones dinerarias entre diferentes Administraciones p�blicas, para financiar\nglobalmente la actividad de la Administraci�n a la que vayan destinadas, seg�n la Ley\n38/2003, de 17 de noviembre, General de Subvenciones, �est�n comprendidas en el\n�mbito de aplicaci�n de la citada Ley?\n",
            "correct_answer": " S�, cuando la cuant�a sea superior a la cantidad subvencionada.",
            "incorrect_answers": [
                " S�.\n",
                " No.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el Real Decreto 665/1997, de 12 de mayo, sobre la protecci�n de\nlos trabajadores contra los riesgos relacionados con la exposici�n a agentes\ncancer�genos durante el trabajo, el empresario deber� suministrar a las autoridades\nlaborales y sanitarias, cuando �stas lo soliciten, la informaci�n adecuada sobre:\n",
            "correct_answer": " Las medidas de prevenci�n adoptadas y los tipos de equipos de protecci�n utilizados.",
            "incorrect_answers": [
                " Las actividades o los procedimientos industriales aplicados, sin incluir las razones por las\ncuales se utilizan agentes cancer�genos o mut�genos.\n",
                " Las cantidades utilizadas de sustancias o mezclas que contengan agentes cancer�genos,\npero no mut�genos.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Las competencias para establecer la organizaci�n y el r�gimen de funcionamiento de su\nAdministraci�n, le corresponde a la Comunidad Aut�noma de Canarias de forma �ntegra:\n",
            "correct_answer": " Desarrollo reglamentario.\n",
            "incorrect_answers": [
                " Funci�n ejecutiva.\n",
                " Exclusiva."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley de Prevenci�n de Riesgos laborales 31/1995, establece que la prevenci�n de\nriesgos laborales deber� integrarse en el sistema general de gesti�n de la empresa, tanto\nen el conjunto de sus actividades como en todos los niveles jer�rquicos de �sta, a trav�s\nde la implantaci�n y aplicaci�n de un:\n",
            "correct_answer": " Plan de prevenci�n de riesgos inminentes.",
            "incorrect_answers": [
                " Plan de acci�n de riesgos laborales.\n",
                " Plan de prevenci�n de riesgos laborales.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el texto refundido de la Ley General de la Seguridad Social, aprobado por el\nReal Decreto Legislativo 8/2015, de 30 de octubre, se entiende por accidente de trabajo:\n",
            "correct_answer": " Toda lesi�n corporal que el trabajador o trabajadora sufra con ocasi�n o por consecuencia\n\"del trabajo, que ejecuta por cuenta ajena\"\"\"\n",
            "incorrect_answers": [
                " Toda lesi�n que el trabajador o trabajadora sufra en su domicilio�\n",
                " Toda lesi�n fortuita que sufra el trabajador por cuenta propia�"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Para cumplir la normativa de seguridad en el lugar de trabajo, las puertas de\nemergencia:\n",
            "correct_answer": " Deben de disponer de un c�digo de seguridad.",
            "incorrect_answers": [
                " No deben cerrarse con llave.\n",
                " Deben cerrarse con llave.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Conforme al Estatuto B�sico del Empleado P�blico �a qu� tipo de personal le\ncorresponde el ejercicio de las funciones que impliquen la participaci�n directa o\nindirecta en el ejercicio de las potestades p�blicas?\n",
            "correct_answer": " A los funcionarios.\n",
            "incorrect_answers": [
                " Al personal laboral.\n",
                " Al personal eventual."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el texto refundido de la Ley sobre Infracciones y sanciones en el\nOrden Social:\n",
            "correct_answer": " Las infracciones se califican como leves y graves en atenci�n a la entidad del derecho\nafectado.",
            "incorrect_answers": [
                " Las infracciones se califican como leves, graves y muy graves en atenci�n a la naturaleza\ndel deber infringido y la entidad del derecho afectado, de conformidad con lo establecido en\nla citada Ley sobre Infracciones y sanciones en el Orden Social.\n",
                " Las infracciones se califican como leves y muy graves en atenci�n a la naturaleza del deber\ninfringido.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n regula la Constituci�n Espa�ola, las Banderas y ense�as propias de las\nComunidades Aut�nomas, reconocidas en sus Estatutos:\n",
            "correct_answer": " Se utilizar�n junto con la espa�ola s�lo en los actos oficiales de car�cter estatal.\n",
            "incorrect_answers": [
                " Se utilizar�n junto a la espa�ola en sus edificios p�blicos y en sus actos oficiales.\n",
                " La utilizaci�n conjunta de la bandera de Espa�a y la de cada Comunidad Aut�noma es\npotestad de las autoridades de la administraci�n auton�mica."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 31/1995, de Prevenci�n de Riesgos Laborales, se entender� como\n�riesgo laboral grave e inminente�:\n",
            "correct_answer": " Aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda\nsuponer un da�o leve para la salud de los trabajadores.\n",
            "incorrect_answers": [
                " Aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda\nsuponer un da�o grave para la salud de los trabajadores.\n",
                " Aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda\nsuponer un da�o muy leve para la salud de los trabajadores."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En el comportamiento ante el fuego de los materiales de construcci�n y elementos\nconstructivos, se define como integridad:\n",
            "correct_answer": " La capacidad que poseen los elementos constructivos que act�an como barrera ante las\nllamas de evitar el traspaso de calor desde el lado expuesto al fuego al no expuesto.",
            "incorrect_answers": [
                " La capacidad que tienen los elementos estructurales con funciones portantes para mantener\nsu estabilidad cuando quedan expuestos al fuego.\n",
                " La capacidad que poseen los elementos constructivos que act�an como barrera ante las\nllamas y los gases durante un incendio.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Los detectores de humo pueden ser de dos tipos:\n",
            "correct_answer": " Lineales u �pticos.\n",
            "incorrect_answers": [
                " Lineales y horizontales.\n",
                " Unidireccionales u �pticos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Norma UNE-EN-614-1, que establece los principios ergon�micos a seguir durante\nel proceso de dise�o y proyecto de los equipos de trabajo (en especial de las m�quinas),\nconsidera que los sistemas de trabajo dise�ados de manera ergon�mica favorecen la\nseguridad y la eficacia, mejoran las condiciones de trabajo y de vida y compensan los\nefectos adversos sobre la salud y el rendimiento de los trabajadores y especialmente\nprevienen la fatiga mental. Entre los factores a tener en cuenta se encuentran:\n",
            "correct_answer": " El equipo de trabajo se proyectar� de tal forma que su operaci�n se sobrecargue o est� por\ndebajo de la capacidad mental de los trabajadores.\n",
            "incorrect_answers": [
                " La informaci�n se presentar� de tal forma que el trabajador no pueda entenderla y usarla\nf�cilmente.\n",
                " Cualquier informaci�n que se requiera para la realizaci�n de la tarea ser� f�cilmente\naccesible para el trabajador."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n las condiciones ambientales de los lugares de trabajo, el Real Decreto 486/1997\nindica que:\n",
            "correct_answer": " La humedad relativa estar� comprendida entre el 70 y el 90 por 100, excepto en los locales\ndonde existan riesgos por electricidad est�tica en los que el l�mite inferior ser� el 10 por 100.",
            "incorrect_answers": [
                " La temperatura de los locales cerrados donde se realicen trabajos ligeros estar�\ncomprendida entre 17 y 27 �C.\n",
                " La temperatura de los locales donde se realicen trabajos ligeros estar� comprendida entre\n14 y 25 �C.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, la\nfunci�n de la vigilancia y control de la normativa sobre prevenci�n de riesgos laborales\ncorresponde:\n",
            "correct_answer": " Al Instituto Nacional de Seguridad e Higiene en el Trabajo.\n",
            "incorrect_answers": [
                " A la Inspecci�n de Trabajo y Seguridad Social.\n",
                " A la Comisi�n Nacional de Seguridad y Salud en el Trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Entre las acciones a desarrollar para el control inicial de las emergencias, deben\ndefinirse:\n",
            "correct_answer": " La alarma, la evacuaci�n y el socorro.\n",
            "incorrect_answers": [
                " La alerta, el confinamiento y el apoyo.\n",
                " La evacuaci�n, el auxilio inmediato y la identificaci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " S�lo uno de los siguientes principios est� garantizado constitucionalmente:\n",
            "correct_answer": " La responsabilidad de la Administraci�n P�blica.\n",
            "incorrect_answers": [
                " La responsabilidad e interdicci�n de la arbitrariedad de la Administraci�n P�blica, tanto\nnacional, como auton�mica o local.\n",
                " La interdicci�n de la arbitrariedad del poder judicial."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El texto refundido de la Ley General de la Seguridad Social, aprobado por el Real\nDecreto Legislativo 8/2015, de 30 de octubre, establece que no impedir�n la calificaci�n\nde un accidente como de trabajo:\n",
            "correct_answer": " El comportamiento doloso del trabajador.\n",
            "incorrect_answers": [
                " La prudencia que es consecuencia del ejercicio excepcional de un trabajo fuera del centro\nde trabajo.\n",
                " La imprudencia profesional que es consecuencia del ejercicio habitual de un trabajo y se\nderiva de la confianza que este inspira."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El m�todo INSHT incluye, entre los factores psicosociales que considera, la carga\nmental de trabajo, y la valora a partir de los siguientes indicadores:\n",
            "correct_answer": " Presi�n de espacios.\n",
            "incorrect_answers": [
                " Esfuerzo de atenci�n.\n",
                " Operaciones mentales y nivel de atenci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el texto refundido de la Ley General de la Seguridad Social, aprobado por el\nReal Decreto Legislativo 8/2015, de 30 de octubre, se entiende por accidente de trabajo:\n",
            "correct_answer": " Toda lesi�n corporal que el trabajador o trabajadora sufra con ocasi�n o por consecuencia\n\"del trabajo, que ejecuta por cuenta ajena\"\"\"\n",
            "incorrect_answers": [
                " Toda lesi�n que el trabajador o trabajadora sufra en su domicilio�\n",
                " Toda lesi�n fortuita que sufra el trabajador por cuenta propia�"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Conforme a la Ley General de Subvenciones, el procedimiento de concesi�n de una\nsubvenci�n en r�gimen de concurrencia competitiva se inicia:\n",
            "correct_answer": " A instancia de los beneficiarios de una subvenci�n.\n",
            "incorrect_answers": [
                " A instancia del centro gestor de los cr�ditos a distribuir.\n",
                " De oficio mediante convocatoria aprobada por el �rgano competente."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Real Decreto 374/2001, sobre la protecci�n de la salud y seguridad de\nlos trabajadores contra los riesgos relacionados con los agentes qu�micos durante el\ntrabajo, se entiende como exposici�n a un agente qu�mico:\n",
            "correct_answer": " Todo elemento o compuesto qu�mico, por s� solo o mezclado, tal como se presenta en estado\nnatural o es producido, utilizado o vertido, incluido el vertido como residuo, en una actividad\nlaboral, se haya elaborado o no de modo intencional y se haya comercializado o no.\n",
            "incorrect_answers": [
                " Presencia de un agente qu�mico en el lugar de trabajo que implica el contacto de �ste con\nel trabajador, solamente por inhalaci�n.\n",
                " Presencia de un agente qu�mico en el lugar de trabajo que implica el contacto de �ste con\nel trabajador, normalmente por inhalaci�n o por v�a d�rmica."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Una de las siguientes materias no es mencionada en el T�tulo Preliminar de la\nConstituci�n Espa�ola:\n",
            "correct_answer": " Las Fuerzas Armadas.",
            "incorrect_answers": [
                " Las Cortes Generales.\n",
                " Las Asociaciones de Empresarios.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se�ale la afirmaci�n correcta. De acuerdo con la Ley 38/2003 General de Subvenciones\nser� nula la resoluci�n de una concesi�n que:\n",
            "correct_answer": " Se otorgue a favor de persona que no est� al corriente de sus obligaciones tributarias.",
            "incorrect_answers": [
                " Sea constitutiva de infracci�n administrativa.\n",
                " Se otorgue a favor de persona que no haya justificado la entrega de los fondos percibidos.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el Reglamento\nde los Servicios de Prevenci�n, entre las funciones de nivel superior que integran la\nactividad preventiva se encuentra:\n",
            "correct_answer": " El personal sanitario del servicio de prevenci�n deber� conocer las enfermedades que se\nproduzcan entre los trabajadores y las ausencias del trabajo por motivos de salud, a los\nsolos efectos de poder identificar cualquier relaci�n entre la causa de enfermedad o de\nausencia y los riesgos para la salud que puedan presentarse en los lugares de trabajo.\n",
            "incorrect_answers": [
                " Vigilar el cumplimiento del programa de control y reducci�n de riesgos y efectuar\npersonalmente las actividades de control de las condiciones de trabajo que tenga asignadas.\n",
                " Promover, en particular, las actuaciones preventivas b�sicas, tales como el orden, la limpieza,\nla se�alizaci�n y el mantenimiento general, y efectuar su seguimiento y control."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Conforme al Estatuto B�sico del Empleado P�blico �a qu� tipo de personal le\ncorresponde el ejercicio de las funciones que impliquen la participaci�n directa o\nindirecta en el ejercicio de las potestades p�blicas?\n",
            "correct_answer": " A los funcionarios.\n",
            "incorrect_answers": [
                " Al personal laboral.\n",
                " Al personal eventual."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " S�lo uno de los siguientes principios est� garantizado constitucionalmente:\n",
            "correct_answer": " La responsabilidad e interdicci�n de la arbitrariedad de la Administraci�n P�blica, tanto\nnacional, como auton�mica o local.\n",
            "incorrect_answers": [
                " La responsabilidad de la Administraci�n P�blica.\n",
                " La interdicci�n de la arbitrariedad del poder judicial."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Anexo I del Real Decreto 485/1997, el color verde en las se�ales indica:\n",
            "correct_answer": " Se�al de advertencia.",
            "incorrect_answers": [
                " Se�al de salvamento de auxilio.\n",
                " Peligro-alarma.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se define en la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre,\ncomo cualquier m�quina, aparato, instrumento o instalaci�n utilizada en el trabajo:\n",
            "correct_answer": " Un agente susceptible de causar da�os.\n",
            "incorrect_answers": [
                " El equipo de protecci�n individual.\n",
                " El equipo de trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, el\nplan de prevenci�n de riesgos laborales deber� incluir:\n",
            "correct_answer": " La estructura organizativa, las responsabilidades, las funciones, las pr�cticas, los\nprocedimientos, los procesos y los recursos necesarios para realizar la acci�n de prevenci�n\nde riesgos laborales en la empresa, en los t�rminos que reglamentariamente se establezcan.",
            "incorrect_answers": [
                " Solo los procesos necesarios para la acci�n preventiva.\n",
                " Las responsabilidades de los trabajadores.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con la Ley General de Subvenciones, el beneficiario de una subvenci�n:\n",
            "correct_answer": " Puede ser s�lo una persona f�sica.\n",
            "incorrect_answers": [
                " Puede ser una persona f�sica o jur�dica.\n",
                " Ha de ser una persona jur�dica necesariamente, ya que las personas f�sicas reciben ayudas,\nno subvenciones."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Reglamento de instalaciones de protecci�n contra incendios 513/2017,\nse entiende por protecci�n activa contra incendios:\n",
            "correct_answer": " Conjunto de medios, equipos y sistemas, ya sean manuales o autom�ticos, cuyas funciones\nespec�ficas son la detecci�n, control y/o extinci�n de un incendio, facilitando la evacuaci�n\nde los ocupantes e impidiendo que el incendio se propague, minimizando as� las p�rdidas\npersonales y materiales.\n",
            "incorrect_answers": [
                " Conjunto de medios, equipos y sistemas, autom�ticos, cuyas funciones espec�ficas son la\ndetecci�n, control y/o extinci�n de un incendio, facilitando la evacuaci�n de los ocupantes e\nimpidiendo que el incendio se propague.\n",
                " Los equipos, sistemas y componentes que integran las instalaciones de protecci�n activa\ncontra incendios."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Las se�ales de advertencia tendr�n forma:\n",
            "correct_answer": " Cuadrada.\n",
            "incorrect_answers": [
                " Triangular.\n",
                " Circular."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Es obligaci�n de la entidad colaboradora, seg�n la Ley 38/2003, de 17 de noviembre,\nGeneral de Subvenciones, entre otras:\n",
            "correct_answer": " Las dos anteriores son correctas.",
            "incorrect_answers": [
                " Justificar la entrega de los fondos percibidos ante el �rgano concedente de la subvenci�n y,\nen su caso, entregar la justificaci�n presentada por los beneficiarios.\n",
                " Comprobar, en su caso, el cumplimiento y efectividad de las condiciones o requisitos\ndeterminantes para su otorgamiento, as� como la realizaci�n de la actividad y el\ncumplimiento de la finalidad que determinen la concesi�n o disfrute de la subvenci�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De acuerdo con el texto refundido de la Ley General de la Seguridad Social, aprobado\npor el Real Decreto Legislativo 8/2015, de 30 de octubre, tendr� la consideraci�n de\nsituaciones determinantes de incapacidad temporal:\n",
            "correct_answer": " Las debidas a enfermedad com�n o profesional y a accidente, sea o no de trabajo, mientras\nel trabajador reciba asistencia sanitaria de la Seguridad Social y est� impedido para el\ntrabajo, con una duraci�n m�xima de doscientos ochenta d�as, prorrogables por otros ciento\nochenta d�as cuando se presuma que durante ellos puede el trabajador ser dado de alta\nm�dica por curaci�n.\n",
            "incorrect_answers": [
                " Las debidas a enfermedad com�n o profesional y a accidente, sea o no de trabajo, mientras\nel trabajador reciba asistencia sanitaria de la Seguridad Social y est� impedido para el\ntrabajo, con una duraci�n m�xima de trescientos sesenta y cinco d�as, prorrogables por otros\nciento ochenta d�as cuando se presuma que durante ellos puede el trabajador ser dado de\nalta m�dica por curaci�n.\n",
                " Las debidas a enfermedad com�n o profesional y a accidente, no de trabajo, mientras el\ntrabajador reciba asistencia sanitaria de la Seguridad Social y est� impedido para el trabajo,\ncon una duraci�n m�xima de trescientos d�as, prorrogables por otros ciento ochenta d�as\ncuando se presuma que durante ellos puede el trabajador ser dado de alta m�dica por\ncuraci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Cu�nto tiempo, seg�n el EBEP, tiene de permiso de ausencia de trabajo por lactancia el\nfuncionario que es padre de un hijo de menor de 12 meses?\n",
            "correct_answer": " Ning�n tiempo, al ser un permiso que s�lo puede disfrutar la madre.\n",
            "incorrect_answers": [
                " Media hora, al tener que ser compartido entre los progenitores.\n",
                " Una hora, ya que este derecho puede ser ejercido indistintamente por uno u otro de los\nprogenitores."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con lo dispuesto en el Real Decreto 314/2006, de 17 de marzo, por el\nque aprueba el C�digo T�cnico de la Edificaci�n, el Documento B�sico DB-SI especifica:\n",
            "correct_answer": " Par�metros objetivos y procedimientos cuyo cumplimiento asegura la satisfacci�n de las\nexigencias b�sicas y la superaci�n de los niveles m�nimos de calidad propios del requisito\nb�sico de seguridad en caso de incendio, excepto en el caso de los edificios,\nestablecimientos y zonas de uso industrial a los que les sea de aplicaci�n el �Reglamento\nde seguridad contra incendios en los establecimientos industriales�.\n",
            "incorrect_answers": [
                " Par�metros objetivos y procedimientos cuyo cumplimiento no asegura la satisfacci�n de las\nexigencias b�sicas y la superaci�n de los niveles m�nimos de calidad propios del requisito\nb�sico de seguridad en caso de incendio, incluso en el caso de los edificios, establecimientos\ny zonas de uso industrial a los que les sea de aplicaci�n el �Reglamento de seguridad contra\nincendios en los establecimientos industriales�.\n",
                " Procedimientos cuyo cumplimiento no asegura la satisfacci�n de las exigencias b�sicas en\ncaso de incendio."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley Org�nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y\nhombres, tiene por objeto:\n",
            "correct_answer": " Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombres.\n",
            "incorrect_answers": [
                " Promover las condiciones para que la igualdad del individuo y de los grupos en que se\nintegra sean reales y efectivas.\n",
                " El pleno reconocimiento de la igualdad formal ante la ley."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Por cu�les dos fuentes de calor est� regido el balance t�rmico?\n",
            "correct_answer": " El entorno exterior y el entorno interior.\n",
            "incorrect_answers": [
                " El propio organismo del ser humano y por el entorno exterior.\n",
                " El entorno exterior y el entorno espacial."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Decreto por el que se crea el Instituto Canario de Seguridad Laboral es:\n",
            "correct_answer": " Decreto 215/1998, de 20 de noviembre.\n",
            "incorrect_answers": [
                " Decreto 216/1998, de 20 de noviembre.\n",
                " Decreto 216/1998, de 20 de noviembre."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el art�culo 4 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, las infracciones muy graves en materia de prevenci�n\nriesgos laborales prescriben:\n",
            "correct_answer": " A los seis a�os.\n",
            "incorrect_answers": [
                " A los cinco a�os.\n",
                " A los siete a�os."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Real Decreto 664/1997, de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes biol�gicos\ndurante el trabajo, �a qu� hace referencia la definici�n: aqu�l que puede causar una\nenfermedad en el hombre y puede suponer un peligro para los trabajadores, �siendo poco\nprobable que se propague a la colectividad y existiendo generalmente profilaxis o\ntratamiento eficaz?\n",
            "correct_answer": " Agente biol�gico del grupo 1.\n",
            "incorrect_answers": [
                " Agente biol�gico del grupo 2.\n",
                " Agente biol�gico del grupo 3."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En el marco del Real Decreto 39/1997, su art�culo 37 se�ala que el personal sanitario\ndel servicio de prevenci�n que, en su caso, exista en el centro de trabajo:\n",
            "correct_answer": " Deber� proporcionar los primeros auxilios y la atenci�n de urgencia a los trabajadores\nv�ctimas de accidentes o alteraciones en el lugar de trabajo.\n",
            "incorrect_answers": [
                " Deber� proporcionar los primeros auxilios solo a los empresarios que se lesionen en el lugar\nde trabajo.\n",
                " No deber� proporcionar los primeros auxilios y la atenci�n de urgencia a los trabajadores\nv�ctimas de accidentes o alteraciones en el lugar de trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Para cumplir la normativa de seguridad en el lugar de trabajo, las puertas de\nemergencia:\n",
            "correct_answer": " No deben cerrarse con llave.\n",
            "incorrect_answers": [
                " Deben cerrarse con llave.\n",
                " Deben de disponer de un c�digo de seguridad."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Real Decreto 8/2015 por el que se aprueba el texto refundido de la Ley General de\nla Seguridad Social reconoce la situaci�n protegida de riesgo durante el embarazo y\ndurante la lactancia natural y sus correspondientes prestaciones en los:\n",
            "correct_answer": " Cap�tulos VIII y IX.\n",
            "incorrect_answers": [
                " Cap�tulos VII y X.\n",
                " Cap�tulos II y III."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con lo dispuesto en el Real Decreto 314/2006, de 17 de marzo, por el\nque aprueba el C�digo T�cnico de la Edificaci�n, el Documento B�sico DB-SI especifica:\n",
            "correct_answer": " Par�metros objetivos y procedimientos cuyo cumplimiento no asegura la satisfacci�n de las\nexigencias b�sicas y la superaci�n de los niveles m�nimos de calidad propios del requisito\nb�sico de seguridad en caso de incendio, incluso en el caso de los edificios, establecimientos\ny zonas de uso industrial a los que les sea de aplicaci�n el �Reglamento de seguridad contra\nincendios en los establecimientos industriales�.\n",
            "incorrect_answers": [
                " Par�metros objetivos y procedimientos cuyo cumplimiento asegura la satisfacci�n de las\nexigencias b�sicas y la superaci�n de los niveles m�nimos de calidad propios del requisito\nb�sico de seguridad en caso de incendio, excepto en el caso de los edificios,\nestablecimientos y zonas de uso industrial a los que les sea de aplicaci�n el �Reglamento\nde seguridad contra incendios en los establecimientos industriales�.\n",
                " Procedimientos cuyo cumplimiento no asegura la satisfacci�n de las exigencias b�sicas en\ncaso de incendio."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Las se�ales de advertencia tendr�n forma:\n",
            "correct_answer": " Triangular.\n",
            "incorrect_answers": [
                " Cuadrada.\n",
                " Circular."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Indique qu� significa la indemnidad frente a represalias, seg�n la Ley Org�nica 3/2007,\nde 22 de marzo, para la igualdad efectiva de mujeres y hombres:\n",
            "correct_answer": " Ninguna de las anteriores es correcta.",
            "incorrect_answers": [
                " Cualquier trato adverso o efecto negativo que se produzca en una persona como\nconsecuencia de la presentaci�n por su parte de queja, reclamaci�n, denuncia, demanda o\nrecurso, de cualquier tipo, destinados a impedir su discriminaci�n y a exigir el cumplimiento\nefectivo del principio de igualdad de trato entre mujeres y hombres.\n",
                " Cualquier trato inverso o efecto positivo que se produzca en una persona como\nconsecuencia de la presentaci�n por su parte de queja, reclamaci�n, denuncia, demanda o\nrecurso, de cualquier tipo, destinados a impedir su discriminaci�n y a exigir el cumplimiento\nefectivo del principio de igualdad de trato entre mujeres y hombres.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Ordinariamente �qu� se consideran contratos menores?\n",
            "correct_answer": " Solo los contratos cuyo valor estimado sea inferior a 40.000 euros y superior a 30.000 euros,\ncuando se trate de contratos de obras.\n",
            "incorrect_answers": [
                " Los contratos cuyo valor estimado sea inferior a 15.000 euros, cuanto se trate de contratos\nde obras, o a 40.000 euros, cuando se trate de otros contratos.\n",
                " Los contratos cuyo valor estimado sea inferior a 40.000 euros, cuando se trate de contratos\nde obras, o de 15.000 euros, cuando se trate de otros contratos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Uno de los indicadores del m�todo L.E.S.T es la minuciosidad, que consiste en:\n",
            "correct_answer": " Hace referencia al esfuerzo de memorizaci�n que se exige al trabajador o al n�mero de\nelecciones que debe efectuar, en relaci�n con la velocidad con que debe dar una respuesta.\n",
            "incorrect_answers": [
                " Se considera como una forma especial de atenci�n en trabajos de precisi�n, en los que el\ntrabajador debe manipular objetos muy peque�os u observar detalles muy exactos (por\nejemplo, ejecuci�n de trabajos de precisi�n o detecci�n de defectos poco perceptibles).\n",
                " Para los trabajos repetitivos, surge de la necesidad del trabajador de seguir una cadencia o\nritmo impuesto. Para los trabajos no repetitivos, el apremio puede resultar de la exigencia\nde lograr unos ciertos objetivos de rendimiento en un tiempo determinado."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El derecho a participar en los asuntos p�blicos, de acuerdo con la Constituci�n Espa�ola:\n",
            "correct_answer": " Podr� corresponder a los ciudadanos extranjeros, tanto para el sufragio activo como para el\npasivo en las elecciones municipales.\n",
            "incorrect_answers": [
                " S�lo corresponde a los ciudadanos espa�oles.\n",
                " Podr� corresponder a los ciudadanos extranjeros, pero s�lo para el derecho de sufragio\nactivo en las elecciones municipales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el\nReglamento de Servicios de Prevenci�n, su Anexo VIII incluye una lista no exhaustiva de\nagentes y condiciones de trabajo a los cuales no podr� haber riesgo de exposici�n por\nparte de trabajadoras embarazadas o en per�odo de lactancia natural, entre las que se\nencuentra:\n",
            "correct_answer": " Alergias.",
            "incorrect_answers": [
                " Trabajos en atm�sferas de sobrepresi�n elevada, por ejemplo, en locales a presi�n,\nsubmarinismo.\n",
                " Fr�o ligero.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Decreto por el que se crea el Instituto Canario de Seguridad Laboral fue modificado\npor:\n",
            "correct_answer": " Decreto 56/2002, de 6 de mayo.\n",
            "incorrect_answers": [
                " Decreto 216/1998, de 20 de noviembre.\n",
                " Decreto 54/2002, de 6 de mayo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El procedimiento de reintegro de subvenciones:\n",
            "correct_answer": " La resoluci�n de este procedimiento se dictar� previa instrucci�n de procedimiento\nadministrativo con audiencia del interesado por un plazo no inferior a 15 d�as h�biles.",
            "incorrect_answers": [
                " Se iniciar� de oficio y no interrumpe el plazo de prescripci�n de que dispone la\nAdministraci�n para exigir el reintegro, de acuerdo con lo establecido en el art�culo 39 de la\nLey General de Subvenciones.\n",
                " Se iniciar� de oficio, como consecuencia de la propia iniciativa del �rgano concedente, a\npropuesta de la Intervenci�n General o de otros �rganos o de denuncia.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el Reglamento\nde los Servicios de Prevenci�n, entre las funciones de nivel superior que integran la\nactividad preventiva se encuentra:\n",
            "correct_answer": " El personal sanitario del servicio de prevenci�n deber� conocer las enfermedades que se\nproduzcan entre los trabajadores y las ausencias del trabajo por motivos de salud, a los\nsolos efectos de poder identificar cualquier relaci�n entre la causa de enfermedad o de\nausencia y los riesgos para la salud que puedan presentarse en los lugares de trabajo.\n",
            "incorrect_answers": [
                " Vigilar el cumplimiento del programa de control y reducci�n de riesgos y efectuar\npersonalmente las actividades de control de las condiciones de trabajo que tenga asignadas.\n",
                " Promover, en particular, las actuaciones preventivas b�sicas, tales como el orden, la limpieza,\nla se�alizaci�n y el mantenimiento general, y efectuar su seguimiento y control."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n lo dispuesto en el art�culo 97 del Estatuto de Autonom�a de Canarias respecto de\nlas competencias ejecutivas de la Comunidad Aut�noma:\n",
            "correct_answer": " Corresponden a la Comunidad Aut�noma, en todo caso, la potestad de organizaci�n de su\npropia administraci�n, as� como las potestades de inspecci�n y de sanci�n y, en general,\ntodas aquellas funciones y actividades que el ordenamiento atribuye a la Administraci�n\nP�blica. Adem�s, la potestad reglamentaria, que comprende la aprobaci�n de reglamentos\ninternos de organizaci�n de los servicios.\n",
            "incorrect_answers": [
                " Corresponden a la Comunidad Aut�noma, en todo caso, la potestad de ejecuci�n de su\npropia administraci�n y de las entidades locales, as� como las potestades de inspecci�n y\nde sanci�n y, en general, todas aquellas funciones y actividades que el ordenamiento\natribuye a la Administraci�n P�blica. Adem�s, la potestad reglamentaria, que comprende la\naprobaci�n de reglamentos internos de organizaci�n de los servicios.\n",
                " Corresponden a la Comunidad Aut�noma, en todo caso, la potestad de organizaci�n de su\npropia administraci�n, as� como las potestades de exacci�n, presupuestos y expropiaci�n y,\nen general, todas aquellas funciones y actividades que el ordenamiento atribuye a la\nAdministraci�n P�blica. Adem�s, la potestad legislativa limitada."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Una de las siguientes materias no es mencionada en el T�tulo Preliminar de la\nConstituci�n Espa�ola:\n",
            "correct_answer": " Las Cortes Generales.\n",
            "incorrect_answers": [
                " Las Asociaciones de Empresarios.\n",
                " Las Fuerzas Armadas."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �En qu� T�tulo del Estatuto de Autonom�a de Canarias se encuentran reguladas las\ncompetencias de la Comunidad Aut�noma de Canarias?\n",
            "correct_answer": " En el T�tulo II.\n",
            "incorrect_answers": [
                " En el T�tulo III.\n",
                " En el T�tulo V."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se define autoprotecci�n como:\n",
            "correct_answer": " Aviso o se�al por la que se informa a las personas para que sigan instrucciones espec�ficas\nante una situaci�n de emergencia.\n",
            "incorrect_answers": [
                " La diferencia de cota entre el nivel de un origen de evacuaci�n y el del espacio exterior\nseguro.\n",
                " Sistema de acciones y medidas, adoptadas por los titulares de las actividades, p�blicas o\nprivadas, con sus propios medios y recursos, dentro de su �mbito de competencias,\nencaminadas a prevenir y controlar los riesgos sobre las personas y los bienes, a dar\nrespuesta adecuada a las posibles situaciones de emergencia y a garantizar la integraci�n\nde estas actuaciones en el sistema p�blico de protecci�n civil."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Real Decreto 664/1997, de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes biol�gicos\ndurante el trabajo, se entender� por Agentes biol�gico del grupo 1, a:\n",
            "correct_answer": " Aquel que puede causar una enfermedad grave en el hombre y presenta un serio peligro\npara los trabajadores, con riesgo de que se propague a la colectividad y existiendo\ngeneralmente una profilaxis o tratamiento eficaz.",
            "incorrect_answers": [
                " Aquel que puede causar una enfermedad en el hombre y puede suponer un peligro para los\ntrabajadores, siendo poco probable que se propague a la colectividad y existiendo\ngeneralmente profilaxis o tratamiento eficaz.\n",
                " Aquel que resulta poco probable que cause una enfermedad en el hombre.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n lo dispuesto en el Estatuto de Autonom�a de Canarias respecto de las\ncompetencias exclusivas de la Comunidad Aut�noma:\n",
            "correct_answer": " Se ejercen, de forma �ntegra, la potestad de direcci�n pol�tica, la potestad reglamentaria y\nla funci�n ejecutiva, sin perjuicio de la concurrencia de otros t�tulos competenciales del\nEstado y los Cabildos.\n",
            "incorrect_answers": [
                " Se ejercen, de forma �ntegra la potestad reglamentaria y la funci�n ejecutiva, en todo caso.\n",
                " Se ejercen, de forma �ntegra, la potestad legislativa, la potestad reglamentaria y la funci�n\nejecutiva, sin perjuicio de la concurrencia de otros t�tulos competenciales del Estado."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el Reglamento\nde los Servicios de Prevenci�n, entre las funciones de nivel superior que integran la\nactividad preventiva se encuentra:\n",
            "correct_answer": " Vigilar el cumplimiento del programa de control y reducci�n de riesgos y efectuar\npersonalmente las actividades de control de las condiciones de trabajo que tenga asignadas.\n",
            "incorrect_answers": [
                " El personal sanitario del servicio de prevenci�n deber� conocer las enfermedades que se\nproduzcan entre los trabajadores y las ausencias del trabajo por motivos de salud, a los\nsolos efectos de poder identificar cualquier relaci�n entre la causa de enfermedad o de\nausencia y los riesgos para la salud que puedan presentarse en los lugares de trabajo.\n",
                " Promover, en particular, las actuaciones preventivas b�sicas, tales como el orden, la limpieza,\nla se�alizaci�n y el mantenimiento general, y efectuar su seguimiento y control."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El m�todo INSHT incluye, entre los factores psicosociales que considera, la carga\nmental de trabajo, y la valora a partir de los siguientes indicadores:\n",
            "correct_answer": " Presi�n de espacios.\n",
            "incorrect_answers": [
                " Esfuerzo de atenci�n.\n",
                " Operaciones mentales y nivel de atenci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Indica la respuesta incorrecta sobre el Real Decreto 485/1997:\n",
            "correct_answer": " La se�alizaci�n de seguridad y salud en el trabajo no deber� utilizarse para transmitir\ninformaciones o mensajes distintos o adicionales a los que constituyen su objetivo propio.\n",
            "incorrect_answers": [
                " La eficacia de la se�alizaci�n no deber� resultar disminuida por la concurrencia de se�ales\no por otras circunstancias que dificulten su percepci�n o comprensi�n.\n",
                " La se�alizaci�n de seguridad y salud en el trabajo puede utilizarse para transmitir\ninformaciones o mensajes distintos o adicionales a los que constituyen su objetivo propio."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Los detectores de humo pueden ser de dos tipos:\n",
            "correct_answer": " Lineales y horizontales.\n",
            "incorrect_answers": [
                " Lineales u �pticos.\n",
                " Unidireccionales u �pticos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En relaci�n a la coordinaci�n en materia de Prevenci�n de Riesgos Laborales, el\nDecreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la normativa sobre\nprevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma de Canarias y\nsus Organismos Aut�nomos, se�ala que las funciones de coordinaci�n, seguimiento,\npromoci�n e impulso de la prevenci�n de riesgos laborales en la Administraci�n P�blica\nde la Comunidad Aut�noma de Canarias y sus Organismos Aut�nomos las realizar�:\n",
            "correct_answer": " Los Comit�s de Seguridad y Salud.",
            "incorrect_answers": [
                " La Direcci�n General de la Funci�n P�blica.\n",
                " La Direcci�n General de Trabajo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A los efectos de aplicaci�n del Reglamento sobre protecci�n de la salud contra los\nriesgos derivados de la exposici�n a las radiaciones ionizantes, se entender� como\nFondo radiactivo natural a:\n",
            "correct_answer": " Fuente de radiaci�n que contiene material radiactivo a fin de aprovechar su radiactividad.",
            "incorrect_answers": [
                " Conjunto de radiaciones ionizantes que provienen de fuentes naturales terrestres o\nc�smicas.\n",
                " Entidad que puede causar una exposici�n, por ejemplo, por emitir radiaci�n ionizante o por\nliberar material radiactivo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n el Real Decreto 486/1997, �qu� se entiende por lugares de trabajo?\n",
            "correct_answer": " Las �reas del centro de trabajo, no edificadas, en las que los trabajadores deban permanecer\no a las que puedan acceder en raz�n de su trabajo.",
            "incorrect_answers": [
                " Todas las �reas del centro de trabajo, edificadas o no, aunque los trabajadores no deban\npermanecer en ellas.\n",
                " Las �reas del centro de trabajo, edificadas o no, en las que los trabajadores deban\npermanecer o a las que puedan acceder en raz�n de su trabajo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, entiende por\n�riesgo laboral:\n",
            "correct_answer": " La posibilidad de que un trabajador sufra un determinado da�o derivado del trabajo. Para\ncalificar un riesgo desde el punto de vista de su gravedad, se valorar�n solo la severidad del\nmismo.",
            "incorrect_answers": [
                " La posibilidad de que un trabajador sufra un determinado da�o derivado del trabajo. Para\ncalificar un riesgo desde el punto de vista de su gravedad, se valorar�n conjuntamente la\nprobabilidad de que se produzca el da�o y la severidad del mismo.\n",
                " La posibilidad de que un trabajador sufra un determinado da�o derivado del trabajo. Para\ncalificar un riesgo desde el punto de vista de su gravedad, se valorar�n solamente la\nprobabilidad de que se produzca el da�o.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Seg�n la Ley 31/1995, de 8 de noviembre, de Prevenci�n de Riesgos Laborales, la\npol�tica en materia de prevenci�n de riesgos laborales deber�:\n",
            "correct_answer": " Solo promover� la integraci�n eficaz de la prevenci�n de riesgos laborales en el\ndepartamento que determine el trabajador.\n",
            "incorrect_answers": [
                " Promover la integraci�n eficaz de la prevenci�n de riesgos laborales en el departamento que\ndetermine el empresario.\n",
                " Promover la integraci�n eficaz de la prevenci�n de riesgos laborales en el sistema de gesti�n\nde la empresa."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Es una funci�n del Pleno del Consejo Rector del Instituto Canario de Seguridad\nLaboral:\n",
            "correct_answer": " Aprobar el Plan de prevenci�n de riesgos laborales de Canarias.\n",
            "incorrect_answers": [
                " Realizar estudios e informes en relaci�n con la siniestralidad laboral e investigaciones que\ndesarrolle el Instituto.\n",
                " Gestionar de forma integrada los recursos humanos, f�sicos y financieros del Instituto\nCanario de Seguridad Laboral."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El n�mero, la duraci�n y el momento de realizaci�n de las mediciones, conforme al\nReal Decreto 286/2006, de 10 de marzo:\n",
            "correct_answer": " Tendr�n que elegirse teniendo en cuenta que el objetivo b�sico de �stas es el de posibilitar\nla toma de decisi�n sobre el tipo de actuaci�n preventiva que deber� emprenderse en virtud\nde lo dispuesto en el Real Decreto 286/2006. Por ello, cuando uno de los l�mites o niveles\nestablecidos en el mismo se sit�e dentro del intervalo de incertidumbre del resultado de la\nmedici�n podr� optarse: a) por suponer que no se supera dicho l�mite o nivel, o b) por no\nincrementar (seg�n el instrumental utilizado) el n�mero de las mediciones (tratando\nestad�sticamente los correspondientes resultados) y/o su duraci�n (llegando, en el l�mite, a\nque el tiempo de medici�n coincida con el de exposici�n), hasta conseguir la necesaria\nreducci�n del intervalo de incertidumbre correspondiente.",
            "incorrect_answers": [
                " Tendr�n que elegirse teniendo en cuenta que el objetivo b�sico de �stas es el de posibilitar\nla toma de decisi�n sobre el tipo de actuaci�n preventiva que deber� emprenderse en virtud\nde lo dispuesto en el Real Decreto 286/2006. Por ello, cuando uno de los l�mites o niveles\nestablecidos en el mismo se sit�e dentro del intervalo de incertidumbre del resultado de la\nmedici�n podr� optarse: a) por suponer que se supera dicho l�mite o nivel, o ",
                " por\nincrementar (seg�n el instrumental utilizado) el n�mero de las mediciones (tratando\nestad�sticamente los correspondientes resultados) y/o su duraci�n (llegando, en el l�mite, a\nque el tiempo de medici�n coincida con el de exposici�n), hasta conseguir la necesaria\nreducci�n del intervalo de incertidumbre correspondiente.\nb) Tendr�n que elegirse teniendo en cuenta que el objetivo b�sico de �stas es el de posibilitar\nla toma de decisi�n sobre el tipo de actuaci�n preventiva que deber� emprenderse en virtud\nde lo dispuesto en el Real Decreto 286/2006. Por ello, cuando uno de los l�mites o niveles\nestablecidos en el mismo se sit�e dentro del intervalo de incertidumbre del resultado de la\nmedici�n podr� optarse: a) por suponer que se supera dicho l�mite o nivel, o b) por\nincrementar (seg�n el instrumental utilizado) el n�mero de las mediciones (tratando\nestad�sticamente los correspondientes resultados) pero no su duraci�n (llegando, en el l�mite,\na que el tiempo de medici�n coincida con el de exposici�n), hasta conseguir la necesaria\nreducci�n del intervalo de incertidumbre correspondiente.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Real Decreto 374/2001, sobre la protecci�n de la salud y seguridad de\nlos trabajadores contra los riesgos relacionados con los agentes qu�micos durante el\ntrabajo, �a qu� hace referencia esta definici�n: agente qu�mico que puede representar un\nriesgo para la seguridad y salud de los trabajadores debido a sus propiedades\nfisicoqu�micas, qu�micas o toxicol�gicas y a la forma en que se utiliza o se halla presente\nen el lugar de trabajo?\n",
            "correct_answer": " Agente peligroso.",
            "incorrect_answers": [
                " Agente qu�mico.\n",
                " Agente qu�mico peligroso.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el texto refundido de la Ley sobre Infracciones y sanciones en el\nOrden Social:\n",
            "correct_answer": " Las infracciones se califican como leves y muy graves en atenci�n a la naturaleza del deber\ninfringido.\n",
            "incorrect_answers": [
                " Las infracciones se califican como leves, graves y muy graves en atenci�n a la naturaleza\ndel deber infringido y la entidad del derecho afectado, de conformidad con lo establecido en\nla citada Ley sobre Infracciones y sanciones en el Orden Social.\n",
                " Las infracciones se califican como leves y graves en atenci�n a la entidad del derecho\nafectado."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Real Decreto 664/1997, de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes biol�gicos\ndurante el trabajo, se entender� por Agentes biol�gico del grupo 1, a:\n",
            "correct_answer": " Aquel que puede causar una enfermedad en el hombre y puede suponer un peligro para los\ntrabajadores, siendo poco probable que se propague a la colectividad y existiendo\ngeneralmente profilaxis o tratamiento eficaz.\n",
            "incorrect_answers": [
                " Aquel que resulta poco probable que cause una enfermedad en el hombre.\n",
                " Aquel que puede causar una enfermedad grave en el hombre y presenta un serio peligro\npara los trabajadores, con riesgo de que se propague a la colectividad y existiendo\ngeneralmente una profilaxis o tratamiento eficaz."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Se entiende por plan de autoprotecci�n, seg�n el Real Decreto 398/2007, de 23 de\nmarzo, por el que se aprueba la Norma B�sica de Autoprotecci�n de los centros,\nestablecimientos y dependencias dedicados a actividades que puedan dar origen a\nsituaciones de emergencia:\n",
            "correct_answer": " El Plan de Autoprotecci�n es en el que se prev� la organizaci�n de la respuesta ante\nsituaciones de emergencias clasificadas, las medidas de protecci�n e intervenci�n a adoptar,\ny los procedimientos y secuencia de actuaci�n para dar respuesta a las posibles\nemergencias.\n",
            "incorrect_answers": [
                " El Plan de Autoprotecci�n es el estudio e implantaci�n de las medidas necesarias y\nconvenientes para mantener bajo observaci�n, evitar o reducir las situaciones de riesgo\npotencial y da�os que pudieran derivarse. Las acciones preventivas deben establecerse\nantes de que se produzca la incidencia, emergencia, accidente o como consecuencia de la\nexperiencia adquirida tras el an�lisis de las mismas.\n",
                " El Plan de Autoprotecci�n es el documento que establece el marco org�nico y funcional\nprevisto para un centro, establecimiento, espacio, instalaci�n o dependencia, con el objeto\nde prevenir y controlar los riesgos sobre las personas y los bienes y dar respuesta adecuada\na las posibles situaciones de emergencia, en la zona bajo responsabilidad del titular de la\nactividad, garantizando la integraci�n de estas actuaciones con el sistema p�blico de\nprotecci�n civil."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley 31/1995, de Prevenci�n de Riesgos Laborales, prev� en su art�culo 40 que:\n",
            "correct_answer": " Los trabajadores y sus representantes podr�n recurrir al Instituto Nacional de Seguridad e\nHigiene en el Trabajo cuando consideren que las medidas adoptadas y los medios utilizados\npor el empresario no son suficientes para garantizar la seguridad y la salud en el trabajo.\n",
            "incorrect_answers": [
                " Los trabajadores y sus representantes podr�n recurrir a la Inspecci�n de Trabajo y Seguridad\nSocial si consideran que las medidas adoptadas y los medios utilizados por el empresario\nno son suficientes para garantizar la seguridad y la salud en el trabajo.\n",
                " Los trabajadores y sus representantes podr�n acudir a la Comisi�n Nacional de Seguridad\ny Salud en el Trabajo cuando consideren que las medidas adoptadas y los medios utilizados\npor el empresario son suficientes para garantizar la seguridad y la salud en el trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley 38/2003 General de Subvenciones determina que para poder otorgar una\nsubvenci�n:\n",
            "correct_answer": " Debe publicarse en el Bolet�n Oficial del Estado la existencia de cr�dito adecuado y\nsuficiente para la concesi�n de la subvenci�n en cuesti�n.\n",
            "incorrect_answers": [
                " Deben aprobarse, con car�cter previo a su otorgamiento, las normas que establezcan las\nbases reguladoras de concesi�n de la subvenci�n.\n",
                " Deben aprobarse las bases reguladoras, una vez se ha tramitado el procedimiento de\nconcesi�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, no ser� de\naplicaci�n en aquellas actividades cuyas particularidades lo impidan en el �mbito de las\nfunciones p�blicas de:\n",
            "correct_answer": " Servicios de jardiner�a municipal.\n",
            "incorrect_answers": [
                " Servicios de limpieza.\n",
                " Polic�a, seguridad y resguardo aduanero."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Por �obra� se entender�, seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector\nP�blico, por la que se transponen al ordenamiento jur�dico espa�ol las Directivas del\nParlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014:\n",
            "correct_answer": " El resultado de un conjunto de trabajos de construcci�n o de ingenier�a civil, destinado a\ncumplir por s� mismo una funci�n econ�mica o t�cnica, que tenga por objeto un bien\ninmueble.\n",
            "incorrect_answers": [
                " La restauraci�n y reparaci�n de construcciones existentes, as� como la conservaci�n y\nmantenimiento de los elementos construidos.\n",
                " Ninguna de las anteriores es cierta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " A efectos del Convenio de la Organizaci�n Internacional del Trabajo sobre Seguridad\ny Salud de los trabajadores, teniendo en cuenta que se aplica a todas las ramas de\nactividad econ�mica, con la expresi�n �ramas de actividad econ�mica� debe entenderse\nque:\n",
            "correct_answer": " Abarca todas las ramas en que hay trabajadores empleados, incluida la Administraci�n\nP�blica.",
            "incorrect_answers": [
                " No incluye a la Administraci�n P�blica.\n",
                " Incluye solo a determinados departamentos de la Administraci�n P�blica.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " �Tiene derecho, seg�n el EBEP el funcionario a permisos para realizar pruebas definitivas\nde aptitud y ex�menes finales?\n",
            "correct_answer": " No, en ning�n caso.\n",
            "incorrect_answers": [
                " S�, pero s�lo si son Universitarias.\n",
                " S�, durante los d�as de su celebraci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con 4 del texto refundido de la Ley sobre Infracciones y Sanciones\nen el Orden Social, las infracciones graves en materia de prevenci�n riesgos laborales\nprescriben:\n",
            "correct_answer": " A los seis a�os.\n",
            "incorrect_answers": [
                " A los tres a�os.\n",
                " Al a�o."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El art�culo 4.7 de la Ley 31/1995, de Prevenci�n de Riesgos Laborales define como\n�condici�n de trabajo�:\n",
            "correct_answer": " Alguna caracter�stica del mismo que pueda tener influencia negativa en la generaci�n de\nriesgos solo para la salud del trabajador.",
            "incorrect_answers": [
                " Cualquier caracter�stica del mismo que pueda tener influencia significativa en la generaci�n\nde riesgos para la seguridad y la salud del trabajador.\n",
                " Alguna caracter�stica del mismo que pueda tener influencia negativa en la generaci�n de\nriesgos solo para la seguridad del trabajador.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En relaci�n a la coordinaci�n en materia de Prevenci�n de Riesgos Laborales, el\nDecreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la normativa sobre\nprevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma de Canarias y\nsus Organismos Aut�nomos, se�ala que las funciones de coordinaci�n, seguimiento,\npromoci�n e impulso de la prevenci�n de riesgos laborales en la Administraci�n P�blica\nde la Comunidad Aut�noma de Canarias y sus Organismos Aut�nomos las realizar�:\n",
            "correct_answer": " La Direcci�n General de la Funci�n P�blica.\n",
            "incorrect_answers": [
                " La Direcci�n General de Trabajo.\n",
                " Los Comit�s de Seguridad y Salud."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, y sus normas\nde desarrollo no ser�n de aplicaci�n:\n",
            "correct_answer": " En el �mbito de las relaciones de car�cter estatutario del personal al servicio de las\nAdministraciones P�blicas.\n",
            "incorrect_answers": [
                " En el �mbito de las relaciones laborales reguladas en el texto refundido de la Ley del Estatuto\nde los Trabajadores.\n",
                " A las actividades de las Fuerzas Armadas y actividades militares de la Guardia Civil."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con la Ley 2/1987 de Funci�n P�blica Canaria, �a qu� �rgano le\ncorresponde adscribir un Cuerpo o Escala de funcionarios a un Departamento u\nOrganismo?\n",
            "correct_answer": " A la Direcci�n General de Funci�n P�blica.\n",
            "incorrect_answers": [
                " A la Secretar�a General T�cnica.\n",
                " Al Gobierno de Canarias."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " De conformidad con el Estatuto de Autonom�a de Canarias, la Comunidad Aut�noma de\nCanarias, ostenta, en materia de servicios sociales, la competencia:\n",
            "correct_answer": " Exclusiva.\n",
            "incorrect_answers": [
                " Delegada.\n",
                " Prioritaria."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La fatiga mental:\n",
            "correct_answer": " Es un fen�meno aislado, su aparici�n suele coincidir y ser proporcional a la carga de trabajo\ntambi�n, puede actuar como causa de la misma.\n",
            "incorrect_answers": [
                " El estado de fatiga aumenta la eficiencia del trabajador, haciendo que las mismas exigencias\nsupongan una carga menor para �l, incluso en situaciones en que la carga de trabajo es\npeque�a.\n",
                " Es un fen�meno acumulativo, su aparici�n suele coincidir y ser proporcional a la carga de\ntrabajo tambi�n, puede actuar como causa de la misma."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Las se�ales de prohibici�n tienen forma redonda y son:\n",
            "correct_answer": " Pictograma negro sobre fondo blanco, bordes y banda (transversal descendente de\nizquierda a derecha atravesando el pictograma a 45� respecto a la horizontal) rojos (el rojo\ndeber� cubrir como m�nimo el 35 por 100 de la superficie de la se�al).",
            "incorrect_answers": [
                " Pictograma negro sobre fondo blanco, bordes y banda (transversal descendente de\nizquierda a derecha atravesando el pictograma a 45� respecto a la horizontal) rojos (el rojo\ndeber� cubrir como m�nimo el 50 por 100 de la superficie de la se�al).\n",
                " Pictograma negro sobre fondo amarillo, bordes y banda (transversal descendente de\nizquierda a derecha atravesando el pictograma a 45� respecto a la horizontal) rojos (el rojo\ndeber� cubrir como m�nimo el 35 por 100 de la superficie de la se�al).\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " Para cumplir la normativa de seguridad en el lugar de trabajo, las puertas de\nemergencia:\n",
            "correct_answer": " No deben cerrarse con llave.\n",
            "incorrect_answers": [
                " Deben cerrarse con llave.\n",
                " Deben de disponer de un c�digo de seguridad."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " En el marco del Real Decreto 39/1997, su art�culo 37 se�ala que el personal sanitario\ndel servicio de prevenci�n que, en su caso, exista en el centro de trabajo:\n",
            "correct_answer": " Deber� proporcionar los primeros auxilios y la atenci�n de urgencia a los trabajadores\nv�ctimas de accidentes o alteraciones en el lugar de trabajo.\n",
            "incorrect_answers": [
                " Deber� proporcionar los primeros auxilios solo a los empresarios que se lesionen en el lugar\nde trabajo.\n",
                " No deber� proporcionar los primeros auxilios y la atenci�n de urgencia a los trabajadores\nv�ctimas de accidentes o alteraciones en el lugar de trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El m�todo INSHT incluye, entre los factores psicosociales que considera, la carga\nmental de trabajo, y la valora a partir de los siguientes indicadores:\n",
            "correct_answer": " Presi�n de espacios.\n",
            "incorrect_answers": [
                " Esfuerzo de atenci�n.\n",
                " Operaciones mentales y nivel de atenci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Real Decreto 314/2006, de 17 de marzo, por el que aprueba el C�digo T�cnico de la\nEdificaci�n, establece las exigencias b�sicas de incendios en:\n",
            "correct_answer": " Art�culo 9.",
            "incorrect_answers": [
                " Art�culo 11.\n",
                " Art�culo 5.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley Canaria de prevenci�n y protecci�n integral de las mujeres contra la violencia\nde g�nero, es del a�o:\n",
            "correct_answer": " 2007.",
            "incorrect_answers": [
                " 2003.\n",
                " 2004.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Norma UNE-EN-614-1 en el dise�o de pantallas de informaci�n, se�ales y\ndispositivos de control, tambi�n se incluyen algunos aspectos que ser�a necesario\nconsiderar para la prevenci�n de la fatiga mental. Entre ellos, podemos destacar los\nsiguientes:\n",
            "correct_answer": " Para evitar una sobrecarga de informaci�n, el n�mero y tipo de pantallas y se�ales se\nmantendr� en el m�ximo necesario para una adecuada realizaci�n de la tarea.\n",
            "incorrect_answers": [
                " El dise�o de pantallas de informaci�n y se�ales debe proporcionar una informaci�n clara e\ninequ�voca. Se evitar� toda informaci�n innecesaria.\n",
                " La posici�n de los mandos, su movimiento, su efecto y su correspondiente funci�n o\ninformaci�n presentada ser�n mutuamente compatibles."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Decreto por el que se crea el Instituto Canario de Seguridad Laboral fue modificado\npor:\n",
            "correct_answer": " Decreto 56/2002, de 6 de mayo.\n",
            "incorrect_answers": [
                " Decreto 216/1998, de 20 de noviembre.\n",
                " Decreto 54/2002, de 6 de mayo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El Defensor del Pueblo:\n",
            "correct_answer": " Es designado por las Cortes Generales, a las que dar� cuenta.\n",
            "incorrect_answers": [
                " Es designado por el Congreso de los Diputados, dando cuenta de su actividad al Rey.\n",
                " Es designado por el Gobierno de la Naci�n, al que dar� cuenta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " El m�todo R.N.U.R. o m�todo de perfil del puesto viene determinado por dos criterios:\n",
            "correct_answer": " Operaciones mentales y nivel de atenci�n.",
            "incorrect_answers": [
                " Operaciones f�sicas y nivel de atenci�n.\n",
                " Indicadores psicol�gicos y operaciones mentales.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, fue\nampliamente modificada por:\n",
            "correct_answer": " La Ley 5/2000, de 4 de agosto, por la que aprueba el texto refundido sobre Infracciones y\nSanciones en el Orden Social.",
            "incorrect_answers": [
                " La Ley 54/2003, de reforma del Marco Normativo de la Prevenci�n de Riesgos Laborales.\n",
                " La Ley 53/2004, de reforma del Marco Normativo de la Prevenci�n de Riesgos Laborales.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": " La suspensi�n del contrato de trabajadora embarazada cuando no resulta posible el\ncambio de puesto o no pueda exigirse por motivos justificados, durar�:\n",
            "correct_answer": " Mientras la trabajadora est� embarazada.\n",
            "incorrect_answers": [
                " Durante el periodo necesario para la protecci�n de su seguridad o de su salud y mientras\npersista la imposibilidad de reincorporarse a su puesto anterior o a otro puesto compatible\ncon su estado.\n",
                " Mientras persista la imposibilidad de reincorporarse a su mismo puesto anterior."
            ]
        }
    ]
}

var axios;

// let xhttp = new XMLHttpRequest()
let x;
let index = 0;
let result = 0;
score.textContent = index
totalScore.textContent = result
alertBox.style.display = "none"
const arrlength = [0, 1, 2, 3]
arrlength.sort((a, b) => { return 0.5 - Math.random() })
hamburger.addEventListener('mouseover', hamFunction)
hamburger.addEventListener('mouseout', hamFunction1)
let correctAnswer;
let submitting = false;
(function () {
    localStorage.setItem('ispwainstalled', false)
    const value = localStorage.getItem('theme')
    if (value === 'Dark Mode') {
        darkMode()
    }
    else if (value === 'Light Mode') {
        return null
    }
    else {
        localStorage.setItem('theme', 'Light Mode')
    }
})()


if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js')
        .then(() => { console.log('Service Worker Registered'); });
}

const evalFunc = async function () {

    // if (xhttp.status === 200) {
    form.style.display = "block"
    toggleLoading()

    options.forEach(item => {
        item.checked = false;
    })

    if (x.results[index].incorrect_answers.length === 3) {
        answers[arrlength[0]].innerHTML = x.results[index].correct_answer
        answers[arrlength[1]].innerHTML = x.results[index].incorrect_answers[0]
        answers[arrlength[2]].innerHTML = x.results[index].incorrect_answers[1]
        answers[arrlength[3]].innerHTML = x.results[index].incorrect_answers[2]
        question.innerHTML = x.results[index].question
        correctAnswer = x.results[index].correct_answer;

    }
    else {
        index++;
        answers[arrlength[0]].innerHTML = x.results[index].correct_answer
        answers[arrlength[1]].innerHTML = x.results[index].incorrect_answers[0]
        answers[arrlength[2]].innerHTML = x.results[index].incorrect_answers[1]
        answers[arrlength[3]].innerHTML = x.results[index].incorrect_answers[2]
        question.innerHTML = x.results[index].question
        correctAnswer = x.results[index].correct_answer;


    }
    // }
}




// xhttp.onload = function() {
//     x = JSON.parse(this.response)
//     console.log(x);
//     evalFunc();
// }
// xhttp.open('GET', "https://opentdb.com/api.php?amount=10", true)
// xhttp.send()

async function getData() {
    const response = await axios.get(`https://opentdb.com/api.php?amount=10`);
    return response;
}

(async () => {
    try {
        const result = await getData();
        //x = result.data;
        console.log("aca imprimo algo", x)
        x = jsonData
        evalFunc();
    } catch (err) {
        console.log(err);
    }
})();




const onHandleSubmit = () => {
    var count = 0;
    if (submitting) {
        return; // ignore if the user has already submitted the answer for this question
    }
    (options.forEach((item) => {
        if (item.checked) {
            submitting = true;
            if (item.value === options[arrlength[0]].value) {
                var timer = 2;
                document.getElementById('timer').innerHTML = timer;
                document.getElementById('question_switch_info').style.visibility = "visible";
                var nextQuestionTimer = setInterval(function () {
                    timer -= 1;
                    if (timer <= 0) {
                        clearInterval(nextQuestionTimer);
                        document.getElementById('question_switch_info').style.visibility = "hidden";
                    }
                    document.getElementById('timer').innerHTML = timer;
                }, 1000)

                let correctAnswerId = options[arrlength[0]].value + 'a';
                showRightAnswer(correctAnswerId);
                function showRightAnswer() {
                    document.getElementById(options[arrlength[0]].value + 'a').classList.add('correct-answer');
                    setTimeout(() => {
                        form.style.display = "none"
                        index++
                        result++
                        evalFunc();
                        score.textContent = index
                        totalScore.textContent = result
                        document.getElementById(correctAnswerId).classList.remove('correct-answer');
                    }, 2000);
                }
            }
            else {
                var timer = 2;
                document.getElementById('timer').innerHTML = timer;
                document.getElementById('question_switch_info').style.visibility = "visible";
                var nextQuestionTimer = setInterval(function () {
                    timer -= 1;
                    if (timer <= 0) {
                        clearInterval(nextQuestionTimer);
                        document.getElementById('question_switch_info').style.visibility = "hidden";
                    }
                    document.getElementById('timer').innerHTML = timer;
                }, 1000)

                let correctAnswerId = options[arrlength[0]].value + 'a';
                let wrongAnswerId = item.value + 'a';
                showRightAndWrongAnswer();
                function showRightAndWrongAnswer() {
                    document.getElementById(correctAnswerId).classList.add('correct-answer');
                    document.getElementById(wrongAnswerId).classList.add('wrong-answer');
                    setTimeout(() => {
                        index++
                        evalFunc();
                        score.textContent = index
                        document.getElementById(correctAnswerId).classList.remove('correct-answer');
                        document.getElementById(wrongAnswerId).classList.remove('wrong-answer');
                    }, 2000);
                }
            }
            setTimeout(() => {
                toggleLoading()
                submitting = false;
            }, 2000)

            arrlength.sort((a, b) => { return 0.5 - Math.random() })

            if (index === 10) {
                alertBox.style.display = "block"
                alertBoxScore.textContent = result

            }

        }
        else {
            count++;
        }

    }))
    if (count == 4) {
        alert("Please select an option!");
    }

}

const toggleLoading = () => {
    document.querySelector(".form").classList.toggle("hide");
    document.querySelector(".form").classList.toggle("show");
    document.querySelector(".lds-ring").classList.toggle("hide");
    document.querySelector(".lds-ring").classList.toggle("show");

}

function hamFunction() {

    hamdiv.classList.add('blackhover')
}

function hamFunction1() {

    hamdiv.classList.remove('blackhover')
}

function onHandleReset() {
    index = 0;
    result = 0;
    toggleLoading()

    form.style.display = "none"
    // xhttp.onload = function () {

    // if (xhttp.status)

    // if (xhttp.status === 200) {

    async function getData() {
        const response = await axios.get(`https://opentdb.com/api.php?amount=10`);
        return response;
    }


    (async () => {
        try {
            const result = await getData();
            //x = result.data;
            console.log("aca imprimo algo", x)
            x = jsonData
            evalFunc();
        } catch (err) {
            console.log(err);
        }
    })();


    setTimeout(() => {
        document.querySelector(".lds-ring").classList.add("hide");
        form.style.display = "block"
        form.classList.remove('hide')
        form.classList.add('show')
    }, 2000)

    options.forEach(item => {
        item.checked = false;
    })

    // x = JSON.parse(this.response)
    if (x.results[index].incorrect_answers.length === 3) {
        answers[arrlength[0]].innerHTML = x.results[index].correct_answer
        answers[arrlength[1]].innerHTML = x.results[index].incorrect_answers[0]
        answers[arrlength[2]].innerHTML = x.results[index].incorrect_answers[1]
        answers[arrlength[3]].innerHTML = x.results[index].incorrect_answers[2]
        question.innerHTML = x.results[index].question
        correctAnswer = x.results[index].correct_answer;

    }
    else {
        index++;
        answers[arrlength[0]].innerHTML = x.results[index].correct_answer
        answers[arrlength[1]].innerHTML = x.results[index].incorrect_answers[0]
        answers[arrlength[2]].innerHTML = x.results[index].incorrect_answers[1]
        answers[arrlength[3]].innerHTML = x.results[index].incorrect_answers[2]
        question.innerHTML = x.results[index].question
        correctAnswer = x.results[index].correct_answer;


    }
    // }
    // }
    // xhttp.open('GET', "https://opentdb.com/api.php?amount=10", true)
    // xhttp.send()



    score.textContent = index
    totalScore.textContent = result
    alertBox.style.display = "none"
}

function darkMode() {
    document.body.classList.toggle("dark");
    document.querySelector('.right_btn')
    document.querySelector('.left_btn')
    document.querySelector('.container')

    localStorage.setItem('theme', themeSelector.textContent)
    const value = localStorage.getItem('theme')


    value === 'Dark Mode' ? themeSelector.textContent = "Light Mode" : themeSelector.textContent = "Dark Mode"
    document.querySelector(".form").classList.toggle("dark");
}



let deferredPromt
installBtn.style.display = 'none'
// console.log(!localStorage.getItem('ispwainstalled'))

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPromt = e
    installBtn.style.display = "block"
})


installBtn.addEventListener("click", (e) => {
    e.target.style.display = "none"
    deferredPromt.prompt()
    console.log('localstorage   access')
    deferredPromt.userChoice.then((choiceResult) => {
        if (choiceResult.content === 'accepted') {
            console.log('user accepted to install pwa')
            localStorage.setItem('ispwainstalled', true)
        }
        else {
            console.log('user declined to install pwa')
            localStorage.setItem('ispwainstalled', false)
        }
    })
})


