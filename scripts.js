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
            "question": "1.  La Constituci�n Espa�ola se fundamenta:\n",
            "correct_answer": " En la indisoluble unidad de la Naci�n Espa�ola.",
            "incorrect_answers": [
                " En la unidad de la Naci�n Espa�ola.\n",
                " En el compromiso de unidad de todos los pueblos y nacionalidades integrantes de la Naci�n\nEspa�ola.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "2.  Los valores superiores del ordenamiento jur�dico propugnados desde nuestra\nConstituci�n son:\n",
            "correct_answer": " La libertad, la justicia, la igualdad y el pluralismo pol�tico.\n",
            "incorrect_answers": [
                " La libertad, la justicia y la libre competencia.\n",
                " La libertad, la igualdad y el pluralismo pol�tico y sindical."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "3.  S�lo uno de los siguientes principios est� garantizado constitucionalmente:\n",
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
            "question": "4.  Una de las siguientes materias no es mencionada en el T�tulo Preliminar de la\nConstituci�n Espa�ola:\n",
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
            "question": "5.  La Constituci�n Espa�ola establece que todos los espa�oles, con respecto a la lengua\noficial del Estado:\n",
            "correct_answer": " Tienen el deber de conocerla y el derecho de usarla.\n",
            "incorrect_answers": [
                " Tienen el deber de usarla.\n",
                " Tienen el deber y el derecho de conocerla."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "6.  Seg�n regula la Constituci�n Espa�ola, las Banderas y ense�as propias de las\nComunidades Aut�nomas, reconocidas en sus Estatutos:\n",
            "correct_answer": " Se utilizar�n junto a la espa�ola en sus edificios p�blicos y en sus actos oficiales.\n",
            "incorrect_answers": [
                " Se utilizar�n junto con la espa�ola s�lo en los actos oficiales de car�cter estatal.\n",
                " La utilizaci�n conjunta de la bandera de Espa�a y la de cada Comunidad Aut�noma es\npotestad de las autoridades de la administraci�n auton�mica."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "7.  La Constituci�n Espa�ola de 1978 consta de:\n",
            "correct_answer": " 169 art�culos.",
            "incorrect_answers": [
                " 161 art�culos.\n",
                " 167 art�culos.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "8.  El Defensor del Pueblo:\n",
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
            "question": "9.  La iniciativa para la reforma total de la Constituci�n, del T�TULO Preliminar, del T�TULO\nSegundo, o de la Secci�n primera del T�TULO Primero:\n",
            "correct_answer": " Llevar� aparejada la disoluci�n inmediata de las Cortes.",
            "incorrect_answers": [
                " Llevar� aparejada la abdicaci�n del titular de la corona.\n",
                " Llevar� aparejada la entrada en vigor del estado de excepci�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "10.  El derecho a participar en los asuntos p�blicos, de acuerdo con la Constituci�n Espa�ola:\n",
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
            "question": "11.  Para la Constituci�n Espa�ola, la defensa de los consumidores a cargo de los poderes\np�blicos proteger�, por procedimientos eficaces:\n",
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
            "question": "12.  La Constituci�n Espa�ola establece que s�lo uno de los siguientes derechos podr� ser\nsuspendido en caso de se acuerde la declaraci�n de estado de excepci�n o de sitio:\n",
            "correct_answer": " Derecho de huelga.\n",
            "incorrect_answers": [
                " Derecho de petici�n colectiva.\n",
                " Derecho a obtener la tutela efectiva de Jueces y Tribunales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "13.  De acuerdo con la Constituci�n Espa�ola, las penas privativas de libertad:\n",
            "correct_answer": " No podr�n consistir en trabajos forzados.",
            "incorrect_answers": [
                " Podr�n estar orientadas hacia la reeducaci�n.\n",
                " Estar�n orientadas hacia la reeducaci�n y la reinserci�n social, al contrario de lo que sucede\ncon las medidas de seguridad.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "14.  En la Constituci�n Espa�ola, �qui�nes tienen derecho a la tutela judicial efectiva de\njueces y tribunales?\n",
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
            "question": "15.  En la Constituci�n Espa�ola, el derecho de huelga reconocido en favor de los\ntrabajadores para la defensa de sus intereses:\n",
            "correct_answer": " Se har� compatible su ejercicio con el mantenimiento de los servicios esenciales de la\ncomunidad, en todo caso.",
            "incorrect_answers": [
                " Se har� compatible su ejercicio con la posible vulneraci�n de los derechos de los\nempresarios.\n",
                " Carece de limitaci�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "16.  �Qu� tipo de ley es necesaria para regular el desarrollo del derecho de reuni�n pac�fica y\nsin armas de la Constituci�n espa�ola de 1978?\n",
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
            "question": "17.  De acuerdo con la Constituci�n Espa�ola, la educaci�n tendr� por objeto:\n",
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
            "question": "18.  �Seg�n la Constituci�n espa�ola de 1978, qui�n dirige la Administraci�n del Estado en el\nterritorio de la Comunidad Aut�noma y la coordinar�, cuando proceda, con la\nadministraci�n propia de la Comunidad?:\n",
            "correct_answer": " Un delegado nombrado por el Gobierno.\n",
            "incorrect_answers": [
                " El presidente de la Comunidad Aut�noma.\n",
                " Una Asamblea Legislativa."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "19.  �Cu�l de las siguientes condiciones no se exige para ser Regente?\n",
            "correct_answer": " Ser miembro de la familia real.\n",
            "incorrect_answers": [
                " Ser espa�ol.\n",
                " Ser mayor de edad."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "20.  De acuerdo con la Constituci�n Espa�ola, una de las siguientes no es funci�n del Rey:\n",
            "correct_answer": " Proponer los nombramientos de los miembros del Gobierno.",
            "incorrect_answers": [
                " Nombrar y separar a los miembros del Gobierno.\n",
                " En su caso, nombrar al candidato a Presidente de Gobierno, as� como poner fin a sus\nfunciones en los t�rminos previstos en la Constituci�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "21.  La norma que regula en la actualidad el Estatuto de Autonom�a de Canarias es:\n",
            "correct_answer": " Ley Org�nica 1/2018.\n",
            "incorrect_answers": [
                " Ley Org�nica 10/1982.\n",
                " Ley 4/1996."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "22.  �En qu� T�tulo del Estatuto de Autonom�a de Canarias se encuentran reguladas las\ncompetencias de la Comunidad Aut�noma de Canarias?\n",
            "correct_answer": " En el T�tulo V.",
            "incorrect_answers": [
                " En el T�tulo II.\n",
                " En el T�tulo III.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "23.  Seg�n lo dispuesto en el Estatuto de Autonom�a de Canarias respecto de las\ncompetencias exclusivas de la Comunidad Aut�noma:\n",
            "correct_answer": " Se ejercen, de forma �ntegra, la potestad legislativa, la potestad reglamentaria y la funci�n\nejecutiva, sin perjuicio de la concurrencia de otros t�tulos competenciales del Estado.",
            "incorrect_answers": [
                " Se ejercen, de forma �ntegra, la potestad de direcci�n pol�tica, la potestad reglamentaria y\nla funci�n ejecutiva, sin perjuicio de la concurrencia de otros t�tulos competenciales del\nEstado y los Cabildos.\n",
                " Se ejercen, de forma �ntegra la potestad reglamentaria y la funci�n ejecutiva, en todo caso.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "24.  Seg�n lo dispuesto en el art�culo 97 del Estatuto de Autonom�a de Canarias respecto de\nlas competencias ejecutivas de la Comunidad Aut�noma:\n",
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
            "question": "25.  Seg�n el Estatuto de Autonom�a de Canarias en su art�culo 114.1:\n",
            "correct_answer": " Corresponde a la Comunidad Aut�noma de Canarias la competencia exclusiva en materia\nde planificaci�n y promoci�n de la actividad econ�mica en Canarias, sin perjuicio de lo\nestablecido en los art�culos 149.1.11.� y 13.� de la Constituci�n.\n",
            "incorrect_answers": [
                " Corresponde a la Comunidad Aut�noma de Canarias la competencia ejecutiva a en materia\nde planificaci�n y promoci�n de la actividad econ�mica en Canarias, sin perjuicio de lo\nestablecido en los art�culos 149.1.11.� y 13.� de la Constituci�n.\n",
                " Corresponde a la Comunidad Aut�noma de Canarias la competencia de ejecutiva en materia\nde planificaci�n y promoci�n de la actividad econ�mica en Canarias, sin perjuicio de lo\nestablecido en los art�culos 149.1.29.� y 20.� de la Constituci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "26.  Seg�n el art�culo 121 del Estatuto de Autonom�a de Canarias la competencia en materia\nde consumo:\n",
            "correct_answer": " Se considera exclusiva para la Comunidad Aut�noma de Canarias.\n",
            "incorrect_answers": [
                " Se considera de desarrollo legislativo para la Comunidad Aut�noma de Canarias.\n",
                " Se considera compartida con el Estado."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "27.  En materia de universidades, el art�culo 134 del Estatuto de Autonom�a de Canarias\ndispone que:\n",
            "correct_answer": " Corresponde a la Comunidad Aut�noma de Canarias, respetando la autonom�a universitaria,\nla competencia de desarrollo legislativo y de ejecuci�n en materia de ense�anza universitaria",
            "incorrect_answers": [
                " Corresponde a la Comunidad Aut�noma de Canarias, respetando la autonom�a universitaria,\nla competencia de desarrollo legislativo en materia de ense�anza universitaria.\n",
                " Corresponde a la Comunidad Aut�noma de Canarias, respetando la libertad de c�tedra, la\ncompetencia de ejecuci�n en materia de ense�anza universitaria.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "28.  El art�culo 137.1 del Estatuto de Autonom�a de Canarias establece que:\n",
            "correct_answer": " Ambas respuestas son ciertas.",
            "incorrect_answers": [
                " Corresponde a la Comunidad Aut�noma de Canarias la competencia exclusiva sobre el\npatrimonio cultural, sin perjuicio del art�culo 149.2 de la Constituci�n.\n",
                " En todo caso la competencia incluye la regulaci�n del r�gimen jur�dico de los bienes,\nactividades y dem�s manifestaciones que lo integran por sus valores hist�ricos,\narquitect�nicos, art�sticos, arqueol�gicos, etnogr�ficos, paleontol�gicos, cient�ficos o\nt�cnicos.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "29.  De conformidad con lo establecido en el Estatuto de Autonom�a de Canarias, indique cu�l\nde las que se se�alan a continuaci�n es una clase de competencia:\n",
            "correct_answer": " Ejecutivas.\n",
            "incorrect_answers": [
                " Independientes.\n",
                " Transversales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "30.  Las competencias que ejerce la Comunidad Aut�noma de Canarias de forma �ntegra:\npotestad legislativa, potestad reglamentaria y funci�n ejecutiva, se denomina:\n",
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
            "question": "31.  El principio por el cual el derecho propio de Canarias en materia de competencia\nexclusiva de la Comunidad Aut�noma es aplicable en su territorio con preferencia a\ncualquier otro, se denomina por el Estatuto de Autonom�a de Canarias:\n",
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
            "question": "32.  �La Comunidad Aut�noma de Canarias puede ejercer actividades de inspecci�n y\nsanci�n en materias de una competencia estatal, de conformidad con lo establecido en\nel Estatuto de Autonom�a de Canarias?\n",
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
            "question": "33.  Las competencias para establecer la organizaci�n y el r�gimen de funcionamiento de su\nAdministraci�n, le corresponde a la Comunidad Aut�noma de Canarias de forma �ntegra:\n",
            "correct_answer": " Exclusiva.",
            "incorrect_answers": [
                " Desarrollo reglamentario.\n",
                " Funci�n ejecutiva.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "34.  Corresponde a la Comunidad Aut�noma de Canarias competencia exclusiva en materia\nde:\n",
            "correct_answer": " Asociaciones.",
            "incorrect_answers": [
                " Ordenaci�n de la actividad econ�mica en Canarias.\n",
                " Registro Civil.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "35.  Indique cu�l de las siguientes afirmaciones es correcta, siguiendo lo establecido en el\nEstatuto de Autonom�a de Canarias:\n",
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
            "question": "36.  �Qu� tipo de competencia le corresponde a la Comunidad Aut�noma de Canarias en\nmateria de la ordenaci�n del sector pesquero?\n",
            "correct_answer": " Desarrollo legislativo y ejecuci�n.\n",
            "incorrect_answers": [
                " Ejecutiva.\n",
                " Prioritaria."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "37.  La competencia de la Comunidad Aut�noma en materia de pol�ticas de g�nero viene\nregulada en el Estatuto de Autonom�a de Canarias, en su art�culo:\n",
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
            "question": "38.  De conformidad con el Estatuto de Autonom�a de Canarias, la Comunidad Aut�noma de\nCanarias, en el marco de la legislaci�n b�sica del Estado, ostenta, en materia de empleo\ny relaciones laborales, la competencia:\n",
            "correct_answer": " Ejecutiva.\n",
            "incorrect_answers": [
                " Desarrollo legislativo y ejecuci�n.\n",
                " Prioritaria."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "39.  De conformidad con el Estatuto de Autonom�a de Canarias, la Comunidad Aut�noma de\nCanarias, ostenta, en materia de servicios sociales, la competencia:\n",
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
            "question": "40.  La competencia ejecutiva en materia de autorizaci�n de trabajo de los extranjeros cuya\nrelaci�n laboral se desarrolle en Canarias, ser� ejercida por:\n",
            "correct_answer": " La Comunidad Aut�noma de Canarias.",
            "incorrect_answers": [
                " El Ministerio competente.\n",
                " La Delegaci�n del Gobierno en Canarias.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "41.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contratos administrativos:\n",
            "correct_answer": " Los contratos de obras, concesi�n de obras, concesi�n de servicios, suministro y servicios\nque celebren las entidades pertenecientes al sector p�blico.\n",
            "incorrect_answers": [
                " Todos los contratos que celebren las entidades pertenecientes al sector p�blico.\n",
                " Ninguna de las anteriores es cierta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "42.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contratos de obras\naquellos que tienen por objeto uno de los siguientes:\n",
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
            "question": "43.  Por �obra� se entender�, seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector\nP�blico, por la que se transponen al ordenamiento jur�dico espa�ol las Directivas del\nParlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014:\n",
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
            "question": "44.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, en los contratos de concesi�n\nde obras:\n",
            "correct_answer": " Se considerar� que el concesionario asume un riesgo operacional cuando no est�\ngarantizado que, en condiciones normales de funcionamiento, el mismo vaya a recuperar\nlas inversiones realizadas ni a cubrir los costes en que hubiera incurrido como consecuencia\nde la explotaci�n de las obras que sean objeto de la concesi�n.\n",
            "incorrect_answers": [
                " No existe riesgo operacional para el concesionario, sino que lo asume la Administraci�n.\n",
                " El riesgo operacional entre el concesionario y la Administraci�n es compartido."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "45.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contratos de concesi�n\nde servicios, los:\n",
            "correct_answer": " En cuya virtud uno o varios poderes adjudicadores encomiendan a t�tulo oneroso a una o\nvarias personas, naturales o jur�dicas, la gesti�n de un servicio cuya prestaci�n sea de su\ntitularidad o competencia, y cuya contrapartida venga constituida bien por el derecho a\nexplotar los servicios objeto del contrato o bien por dicho derecho acompa�ado del de\npercibir un precio.\n",
            "incorrect_answers": [
                " De adecuaci�n, reforma y modernizaci�n de la obra para adaptarla a las caracter�sticas\nt�cnicas y funcionales requeridas para la correcta prestaci�n de los servicios o la realizaci�n\nde las actividades econ�micas a las que sirve de soporte material.\n",
                " Tienen por objeto la realizaci�n por el concesionario de algunas prestaciones, incluidas las\nde restauraci�n y reparaci�n de construcciones existentes."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "46.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, cu�l de los siguientes\ncontratos, es un contrato de suministro:\n",
            "correct_answer": " Las dos anteriores son ciertas.",
            "incorrect_answers": [
                " Aquellos en los que el empresario se obligue a entregar una pluralidad de bienes de forma\nsucesiva y por precio unitario sin que la cuant�a total se defina con exactitud al tiempo de\ncelebrar el contrato, por estar subordinadas las entregas a las necesidades del adquirente.\n",
                " Los que tengan por objeto la adquisici�n de energ�a primaria o energ�a transformada.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "47.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, los contratos de fabricaci�n,\npor los que la cosa o cosas que hayan de ser entregadas por el empresario deban ser\nelaboradas con arreglo a caracter�sticas peculiares fijadas previamente por la entidad\ncontratante, aun cuando esta se obligue a aportar, total o parcialmente, los materiales\nprecisos, son contratos de:\n",
            "correct_answer": " Suministro.\n",
            "incorrect_answers": [
                " Obras.\n",
                " Ninguna de las anteriores es cierta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "48.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contrato de servicios:\n",
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
            "question": "49.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, no podr�n ser objeto de\ncontrato de servicios:\n",
            "correct_answer": " Los servicios que impliquen ejercicio de la autoridad inherente a los poderes p�blicos.\n",
            "incorrect_answers": [
                " Los que tengan por objeto la adquisici�n y el arrendamiento de equipos y sistemas de\ntelecomunicaciones o para el tratamiento de la informaci�n.\n",
                " Ninguna de las anteriores es cierta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "50.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, se entender� por contrato\nmixto aquel que:\n",
            "correct_answer": " Contenga prestaciones correspondientes a otro u otros de distinta clase.\n",
            "incorrect_answers": [
                " Los contratos no pueden ser mixtos.\n",
                " Ninguna de las anteriores es cierta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "51.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, los contratos relativos a\npropiedades incorporales o valores negociables, �son contratos de suministro?\n",
            "correct_answer": " No.\n",
            "incorrect_answers": [
                " S�, pero solo los relativos a propiedades incorporales.\n",
                " S�."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "52.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, los �rganos de contrataci�n\npueden ser:\n",
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
            "question": "53.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, la representaci�n de las\nentidades del sector p�blico en materia contractual corresponde a:\n",
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
            "question": "54.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, el perfil de contratante podr�\nincluir:\n",
            "correct_answer": " Las dos anteriores son correctas.",
            "incorrect_answers": [
                " En cualquier caso, deber� contener tanto la informaci�n de tipo general que puede utilizarse\npara relacionarse con el �rgano de contrataci�n como puntos de contacto, n�meros de\ntel�fono y de fax, direcci�n postal y direcci�n electr�nica, informaciones, anuncios y\ndocumentos generales, tales como las instrucciones internas de contrataci�n y modelos de\ndocumentos, as� como la informaci�n particular relativa a los contratos que celebre.\n",
                " Cualesquiera datos y documentos referentes a la actividad contractual de los �rganos de\ncontrataci�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "55.  Seg�n la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P�blico, por la que se\ntransponen al ordenamiento jur�dico espa�ol las Directivas del Parlamento Europeo y del\nConsejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, las personas jur�dicas solo\npodr�n ser adjudicatarias de contratos:\n",
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
            "question": "56.  Ordinariamente �qu� se consideran contratos menores?\n",
            "correct_answer": " Los contratos cuyo valor estimado sea inferior a 40.000 euros, cuando se trate de contratos\nde obras, o de 15.000 euros, cuando se trate de otros contratos.",
            "incorrect_answers": [
                " Los contratos cuyo valor estimado sea inferior a 15.000 euros, cuanto se trate de contratos\nde obras, o a 40.000 euros, cuando se trate de otros contratos.\n",
                " Solo los contratos cuyo valor estimado sea inferior a 40.000 euros y superior a 30.000 euros,\ncuando se trate de contratos de obras.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "57.  Los contratos administrativos se perfeccionan, cualquiera que sea el procedimiento o la\nforma de adjudicaci�n utilizados:\n",
            "correct_answer": " Cuando se formalizan.\n",
            "incorrect_answers": [
                " Mediante la adjudicaci�n realizada por el �rgano competente.\n",
                " Cuando se licitan."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "58.  �Puede la Administraci�n celebrar contratos administrativos verbalmente?\n",
            "correct_answer": " La Administraci�n no podr� contratar verbalmente, salvo que el contrato tenga car�cter de\nemergencia.\n",
            "incorrect_answers": [
                " La Administraci�n no podr� contratar verbalmente, en ning�n caso.\n",
                " La Administraci�n no podr� contratar verbalmente, salvo pacto excepcional realizado con la\nempresa y previo informe de la Junta Consultiva de Contrataci�n Administrativa."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "59.  A tenor de lo establecido por la norma legal reguladora de los contratos administrativos\nde las Administraciones P�blicas, se�ale de las siguientes respuestas aqu�lla que haga\nreferencia a un �rgano de contrataci�n:\n",
            "correct_answer": " El Consejero.\n",
            "incorrect_answers": [
                " La Mesa de Contrataci�n.\n",
                " El Gobierno."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "60.  �Cu�ndo se aprueban los Pliegos de Cl�usulas Administrativas Particulares de los\ncontratos administrativos?\n",
            "correct_answer": " Previa o conjuntamente a la autorizaci�n del gasto y siempre antes de la adjudicaci�n del\ncontrato.\n",
            "incorrect_answers": [
                " Siempre con car�cter previo a la autorizaci�n del gasto y antes de la perfecci�n y, en su\ncaso, licitaci�n del contrato.\n",
                " Siempre conjuntamente a la autorizaci�n del gasto y antes de la licitaci�n del contrato."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "61.  Seg�n lo que establece la Ley 38/2003, de 17 de noviembre, General de Subvenciones, no\npodr�n obtener la condici�n de beneficiario de una subvenci�n:\n",
            "correct_answer": " Los que hayan dado lugar, por causa de la que hubiesen sido declarados culpables, a la\nresoluci�n firme de cualquier contrato celebrado con la Administraci�n.",
            "incorrect_answers": [
                " Los condenados mediante sentencia a la p�rdida de la posibilidad de obtener ayudas.\n",
                " Los que tengan la residencia fiscal fuera de Espa�a.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "62.  Conforme a la Ley 38/2003, de 17 de noviembre, General de Subvenciones en la gesti�n\nde subvenciones en r�gimen de concurrencia competitiva:\n",
            "correct_answer": " El proceso de selecci�n de los beneficiarios culmina con una resoluci�n del �rgano\nconcedente, que llevar� consigo el compromiso de gasto por el importe de las subvenciones\nconcedidas.",
            "incorrect_answers": [
                " La tramitaci�n del expediente de gasto se inicia una vez publicada la convocatoria en el\nBolet�n Oficial del Estado y abierto el plazo de presentaci�n de solicitudes.\n",
                " El reconocimiento de la obligaci�n es previo a la justificaci�n de la aplicaci�n de los fondos\npor el beneficiario y a la acreditaci�n de que �ste se encuentra al corriente de sus\nobligaciones tributarias y con la Seguridad Social.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "63.  Conforme a la Ley General de Subvenciones, el procedimiento de concesi�n de una\nsubvenci�n en r�gimen de concurrencia competitiva se inicia:\n",
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
            "question": "64.  Seg�n la Ley 38/2003, de 17 de noviembre, General de Subvenciones, deben concederse\npor concurrencia competitiva las subvenciones:\n",
            "correct_answer": " Las que se concedan con criterios de valoraci�n previamente fijados.",
            "incorrect_answers": [
                " Con asignaci�n nominal en los Presupuestos Generales del Estado.\n",
                " Las de cuant�a impuesta por una norma de rango legal.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "65.  Se�ale la afirmaci�n correcta. De acuerdo con la Ley 38/2003 General de Subvenciones\nser� nula la resoluci�n de una concesi�n que:\n",
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
            "question": "66.  Se�ale la afirmaci�n correcta. De acuerdo la Ley 38/2003, la subvenci�n es un instrumento\nde la actividad administrativa:\n",
            "correct_answer": " De fomento.",
            "incorrect_answers": [
                " De servicio p�blico.\n",
                " De limitaci�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "67.  Seg�n la Ley 38/2003, de 17 de noviembre, General de Subvenciones en el gasto de\nsubvenciones, �en qu� momento debe efectuarse la aprobaci�n del gasto?\n",
            "correct_answer": " Con car�cter previo a la convocatoria de la subvenci�n.",
            "incorrect_answers": [
                " Una vez aprobada la propuesta de resoluci�n definitiva.\n",
                " Durante la instrucci�n del procedimiento de concesi�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "68.  La Ley 38/2003 General de Subvenciones determina que para poder otorgar una\nsubvenci�n:\n",
            "correct_answer": " Deben aprobarse, con car�cter previo a su otorgamiento, las normas que establezcan las\nbases reguladoras de concesi�n de la subvenci�n.\n",
            "incorrect_answers": [
                " Debe publicarse en el Bolet�n Oficial del Estado la existencia de cr�dito adecuado y\nsuficiente para la concesi�n de la subvenci�n en cuesti�n.\n",
                " Deben aprobarse las bases reguladoras, una vez se ha tramitado el procedimiento de\nconcesi�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "69.  De conformidad con la Ley General de Subvenciones, el beneficiario de una subvenci�n:\n",
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
            "question": "70.  El procedimiento de reintegro de subvenciones:\n",
            "correct_answer": " Se iniciar� de oficio, como consecuencia de la propia iniciativa del �rgano concedente, a\npropuesta de la Intervenci�n General o de otros �rganos o de denuncia.\n",
            "incorrect_answers": [
                " Se iniciar� de oficio y no interrumpe el plazo de prescripci�n de que dispone la\nAdministraci�n para exigir el reintegro, de acuerdo con lo establecido en el art�culo 39 de la\nLey General de Subvenciones.\n",
                " La resoluci�n de este procedimiento se dictar� previa instrucci�n de procedimiento\nadministrativo con audiencia del interesado por un plazo no inferior a 15 d�as h�biles."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "71.  Tienen car�cter de subvenci�n p�blica, a los efectos de la Ley General de Subvenciones:\n",
            "correct_answer": " Las actividades subvencionables de las Administraciones de las Comunidades Aut�nomas.",
            "incorrect_answers": [
                " Las prestaciones no contributivas de la Seguridad Social.\n",
                " Las prestaciones por raz�n de terrorismo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "72.  De acuerdo con lo establecido en la vigente Ley General de Subvenciones, �cu�l de los\nsiguientes informes se debe recabar con car�cter previo a la aprobaci�n de las bases\nreguladoras de las subvenciones?\n",
            "correct_answer": " El informe de la Intervenci�n Delegada correspondiente.",
            "incorrect_answers": [
                " El informe del Ministerio de Econom�a y Hacienda.\n",
                " El informe del Ministerio de Administraciones P�blicas.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "73.  Seg�n la Ley 38/2003, de 17 de noviembre, General de Subvenciones, �cu�l es el concepto\nde subvenci�n?\n",
            "correct_answer": " Toda disposici�n dineraria realizada por cualesquiera de los sujetos contemplados en el\nart�culo 3 de esta ley, a favor de personas p�blicas o privadas, cumpliendo una serie de\nrequisitos.\n",
            "incorrect_answers": [
                " Toda disposici�n normativa realizada por cualesquiera de los sujetos contemplados en el\nart�culo 3 de esta ley, a favor de personas p�blicas o privadas, y que cumpla los siguientes\nrequisitos.\n",
                " Toda disposici�n dineraria realizada por cualesquiera de los sujetos contemplados en la\nnormativa de contratos, a favor de personas privadas, y que cumpla los siguientes requisitos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "74.  �Seg�n la Ley 38/2003, de 17 de noviembre, General de Subvenciones, la disposici�n\ndineraria realizada ha de hacerse con contraprestaci�n directa de los beneficiarios?\n",
            "correct_answer": " No.\n",
            "incorrect_answers": [
                " S�.\n",
                " S�, salvo los menores."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "75.  Las aportaciones dinerarias entre diferentes Administraciones p�blicas, para financiar\nglobalmente la actividad de la Administraci�n a la que vayan destinadas, seg�n la Ley\n38/2003, de 17 de noviembre, General de Subvenciones, �est�n comprendidas en el\n�mbito de aplicaci�n de la citada Ley?\n",
            "correct_answer": " No.\n",
            "incorrect_answers": [
                " S�.\n",
                " S�, cuando la cuant�a sea superior a la cantidad subvencionada."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "76.  Seg�n la Ley 38/2003, de 17 de noviembre, General de Subvenciones, no tienen car�cter\nde subvenciones, entre otras:\n",
            "correct_answer": " Las dos anteriores son correctas.",
            "incorrect_answers": [
                " Las prestaciones contributivas y no contributivas del Sistema de la Seguridad Social. Las\npensiones asistenciales por ancianidad a favor de los espa�oles no residentes en Espa�a,\nen los t�rminos establecidos en su normativa reguladora.\n",
                " Las prestaciones derivadas del sistema de clases pasivas del Estado, pensiones de guerra\ny otras pensiones y prestaciones por raz�n de actos de terrorismo. Las prestaciones\nreconocidas por el Fondo de Garant�a Salarial. Los beneficios fiscales y beneficios en la\ncotizaci�n a la Seguridad Social.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "77.  Seg�n la Ley 38/2003, de 17 de noviembre, General de Subvenciones, quedan excluidos\ndel �mbito de aplicaci�n de la ley:\n",
            "correct_answer": " Las dos anteriores son correctas.",
            "incorrect_answers": [
                " Los premios que se otorguen sin la previa solicitud del beneficiario. Las subvenciones\nprevistas en la Ley Org�nica del R�gimen Electoral General. Las subvenciones reguladas\nen la Ley Org�nica de Financiaci�n de los Partidos Pol�ticos.\n",
                " Las subvenciones a los grupos parlamentarios de las C�maras de las Cortes Generales, en\nlos t�rminos previstos en los Reglamentos del Congreso de los Diputados y del Senado, as�\ncomo las subvenciones a los grupos parlamentarios de las Asambleas auton�micas y a los\ngrupos pol�ticos de las corporaciones locales, seg�n establezca su propia normativa.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "78.  Seg�n la Ley 38/2003, de 17 de noviembre, General de Subvenciones, dentro de los\nrequisitos para el otorgamiento de las subvenciones, con car�cter previo a dicho\notorgamiento deber�n:\n",
            "correct_answer": " Ninguna de las anteriores es cierta.",
            "incorrect_answers": [
                " Aprobarse las normas que establezcan las bases reguladoras de concesi�n en los t�rminos\nestablecidos en la Ley de Contratos.\n",
                " Aprobarse las normas que establezcan las bases reguladoras de concesi�n en los t�rminos\nestablecidos en la Ley General de Patrimonio.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "79.  Seg�n la Ley 38/2003, de 17 de noviembre, General de Subvenciones, tendr� la\nconsideraci�n de beneficiario de subvenciones:\n",
            "correct_answer": " La persona que haya de realizar la actividad que fundament� su otorgamiento o que se\nencuentre en la situaci�n que legitima su concesi�n.\n",
            "incorrect_answers": [
                " Aquellos que la soliciten dentro del plazo.\n",
                " Ninguna de las anteriores es correcta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "80.  Es obligaci�n de la entidad colaboradora, seg�n la Ley 38/2003, de 17 de noviembre,\nGeneral de Subvenciones, entre otras:\n",
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
            "question": "81.  Los funcionarios de carrera se hallar�n en alguna de las siguientes situaciones:\n",
            "correct_answer": " Servicio activo, servicios especiales, servicio en otras Administraciones P�blicas,\nexcedencia y suspensi�n.\n",
            "incorrect_answers": [
                " Servicio activo, servicios especiales, servicio en otras Administraciones P�blicas,\nexcedencia.\n",
                " Servicio activo, servicios especiales, servicio en otras Administraciones P�blicas,\nexcedencia e incapacidad laboral temporal."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "82.  Conforme al art�culo 89.2 del Estatuto B�sico del Empleado P�blico, la excedencia\nvoluntaria por inter�s particular se podr� solicitar cuando:\n",
            "correct_answer": " Cuando hayan prestado servicios efectivos m�nimo de cinco a�os inmediatamente anteriores,\nen cualquier administraci�n.\n",
            "incorrect_answers": [
                " Cuando hayan prestado servicio efectivos m�nimo de cinco a�os inmediatamente anteriores\nen la administraci�n donde prestan en la actualidad sus servicios.\n",
                " Cuando hayan prestado servicio efectivos m�nimo de cuatro a�os inmediatamente anteriores,\nen cualquier administraci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "83.  Conforme al Estatuto B�sico del Empleado P�blico �qu� tipo de personal es el que, en\nvirtud de nombramiento y con car�cter no permanente, s�lo realiza funciones\nexpresamente calificadas como de confianza o de asesoramiento especial?\n",
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
            "question": "84.  Conforme a la Ley 7/2007, de 12 de abril, del Estatuto B�sico del Empleado P�blico\ncuando un funcionario sea designado como personal eventual, se encuentra en la\nsituaci�n administrativa de:\n",
            "correct_answer": " Excedencia voluntaria.\n",
            "incorrect_answers": [
                " Servicios especiales, cuando no opten por permanecer en la situaci�n de servicio activo.\n",
                " Excedencia forzosa."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "85.  Conforme al Estatuto B�sico del Empleado P�blico, �qu� derechos retributivos se\nreconocen a las funcionarias v�ctimas de violencia de g�nero que pasen a la situaci�n de\nexcedencia por raz�n de violencia de g�nero?\n",
            "correct_answer": " El abono de las retribuciones �ntegras durante los dos primeros meses.",
            "incorrect_answers": [
                " El abono de las retribuciones b�sicas durante los dos primeros meses.\n",
                " El abono de las retribuciones complementarias durante los dos primeros meses.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "86.  Conforme al Estatuto B�sico del Empleado P�blico �a qu� tipo de personal le\ncorresponde el ejercicio de las funciones que impliquen la participaci�n directa o\nindirecta en el ejercicio de las potestades p�blicas?\n",
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
            "question": "87.  Conforme al Estatuto B�sico del Empleado P�blico y en orden a la provisi�n de puestos\nde trabajo �qu� tipo de personal debe pasar a la situaci�n administrativa de servicios\nespeciales cuando sean activados como reservistas voluntarios para prestar servicios en\nlas Fuerzas Armadas?\n",
            "correct_answer": " Los funcionarios de carrera.\n",
            "incorrect_answers": [
                " Los funcionarios.\n",
                " El personal laboral."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "88.  En las Ofertas de Empleo P�blico se reservar�, para ser cubiertas entre personas con\ndiscapacidad cuyo grado de minusval�a sea igual o superior al 33 por ciento, un cupo de\nplazas no inferior al:\n",
            "correct_answer": " Siete por ciento.",
            "incorrect_answers": [
                " Tres por ciento.\n",
                " Cinco por ciento.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "89.  Se�ale c�mo se clasifican los empleados p�blicos de acuerdo con el Estatuto B�sico del\nEmpleado P�blico:\n",
            "correct_answer": " Funcionarios de carrera, funcionarios interinos, personal laboral y personal eventual.",
            "incorrect_answers": [
                " Funcionarios de carrera, personal laboral y personal estatutario.\n",
                " Funcionarios de carrera, funcionarios interinos y personal estatutario.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "90.  Seg�n el EBEP, �cu�nto d�as de permiso se le conceden a los funcionarios por motivo de\nfallecimiento de un familiar dentro del segundo grado de consanguinidad, si no se precisa\ntrasladarse de localidad?\n",
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
            "question": "91.  �Cu�nto d�as de permiso, seg�n el EBEP, tienen los funcionarios p�blicos por cambio de\ndomicilio sin cambio de residencia?\n",
            "correct_answer": " 1 d�a.\n",
            "incorrect_answers": [
                " Ninguno.\n",
                " 3 d�as."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "92.  Seg�n el EBEP, los funcionarios p�blicos tienen derecho, por asuntos particulares, hasta:\n",
            "correct_answer": " 6 d�as.",
            "incorrect_answers": [
                " 7 d�as.\n",
                " 5 d�as.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "93.  Al cumplir el octavo trienio, �en cu�ntos d�as se ve incrementado el permiso por asuntos\nparticulares?\n",
            "correct_answer": " 1 d�a.\n",
            "incorrect_answers": [
                " 2 d�as.\n",
                " 3 d�as."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "94.  �Cu�nto tiempo, seg�n el EBEP, tiene de permiso de ausencia de trabajo por lactancia el\nfuncionario que es padre de un hijo de menor de 12 meses?\n",
            "correct_answer": " Una hora, ya que este derecho puede ser ejercido indistintamente por uno u otro de los\nprogenitores.",
            "incorrect_answers": [
                " Ning�n tiempo, al ser un permiso que s�lo puede disfrutar la madre.\n",
                " Media hora, al tener que ser compartido entre los progenitores.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "95.  En caso de que el hijo reci�n nacido tenga que permanecer en el hospital a continuaci�n\ndel parto, �tienen derecho los progenitores funcionarios, a alg�n tipo de reducci�n\nlaboral?\n",
            "correct_answer": " S�, a la ausencia del trabajo durante dos horas diarias como m�ximo.\n",
            "incorrect_answers": [
                " S�, a la ausencia del trabajo durante tres horas diarias como m�ximo.\n",
                " No, en ning�n caso."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "96.  �Tiene derecho, seg�n el EBEP el funcionario a permisos para realizar pruebas definitivas\nde aptitud y ex�menes finales?\n",
            "correct_answer": " S�, durante los d�as de su celebraci�n.",
            "incorrect_answers": [
                " No, en ning�n caso.\n",
                " S�, pero s�lo si son Universitarias.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "97.  �Cu�l de las siguientes es una de las medidas recogidas en el EBEP, en relaci�n a las\nfuncionarias v�ctimas de violencia de g�nero?\n",
            "correct_answer": " Tendr�n derecho a la reducci�n de la jornada con disminuci�n proporcional de la retribuci�n,\no la reordenaci�n del tiempo de trabajo.\n",
            "incorrect_answers": [
                " Tendr�n derecho a la reducci�n de la jornada sin disminuci�n proporcional de la retribuci�n,\no la reordenaci�n del tiempo de trabajo.\n",
                " No tendr�n derecho en ning�n caso a la reducci�n de la jornada con disminuci�n\nproporcional de la retribuci�n, pero si a la reordenaci�n del tiempo de trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "98.  Conforme al art�culo 34 de la Ley 2/1987, de 30 de marzo, de la Funci�n P�blica Canaria,\nindique cu�l de las siguientes, es una causa de p�rdida de la condici�n de funcionario:\n",
            "correct_answer": " Sentencia firme que imponga el funcionario pena principal o accesoria de inhabilitaci�n\nabsoluta o especial para el desempe�o de cargo p�blico.\n",
            "incorrect_answers": [
                " La incorrecci�n con el p�blico, superiores, compa�eros o subordinados.\n",
                " Excedencia forzosa."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "99.  De conformidad con el art�culo 4 de la Ley 2/1987 de Funci�n P�blica Canaria, �cu�l de\nlos siguientes �rganos superiores no tiene competencias en materia de personal?\n",
            "correct_answer": " La Comisi�n de Asuntos Preparatorios del Gobierno.",
            "incorrect_answers": [
                " El Gobierno de Canarias.\n",
                " El Consejero competente en materia de Hacienda.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "100.  De conformidad con la Ley 2/1987 de Funci�n P�blica Canaria, �a qu� �rgano le\ncorresponde adscribir un Cuerpo o Escala de funcionarios a un Departamento u\nOrganismo?\n",
            "correct_answer": " Al Gobierno de Canarias.",
            "incorrect_answers": [
                " A la Direcci�n General de Funci�n P�blica.\n",
                " A la Secretar�a General T�cnica.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "101.  De acuerdo con lo regulado en la Ley de la Funci�n P�blica Canaria, �cu�les de los\nsiguientes derechos no se configuran como parte del derecho a la carrera administrativa\nde los funcionarios?\n",
            "correct_answer": " Antig�edad.",
            "incorrect_answers": [
                " Grado personal.\n",
                " Promoci�n interna.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "102.  En cuanto a las medidas espec�ficas para prevenir la comisi�n de delitos y otras\nconductas contra la libertad sexual y la integridad moral en el trabajo, tras la redacci�n\ndel art�culo 48 de la Ley Org�nica 3/2007, para la igualdad efectiva entre mujeres y\nhombres, se�ale la opci�n correcta:\n",
            "correct_answer": " Ambas opciones son correctas.",
            "incorrect_answers": [
                " Las empresas deber�n promover condiciones de trabajo que eviten la comisi�n de delitos y\notras conductas contra la libertad sexual y la integridad moral en el trabajo, incidiendo\nespecialmente en el acoso sexual y el acoso por raz�n de sexo, incluidos los cometidos en\nel �mbito digital.\n",
                " Con esta finalidad se podr�n establecer medidas que deber�n negociarse con los\nrepresentantes de los trabajadores, tales como la elaboraci�n y difusi�n de c�digos de\nbuenas pr�cticas, la realizaci�n de campa�as informativas o acciones de formaci�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "103.  De conformidad con lo dispuesto en la Ley Org�nica 1/2004, de 28 de diciembre, de\nMedidas de Protecci�n Integral contra la Violencia de G�nero, el derecho a la reparaci�n\nde las v�ctimas, incorporado por la Ley Org�nica 10/2022, comprender�:\n",
            "correct_answer": " La compensaci�n econ�mica por los da�os y perjuicios derivados de la violencia, las\nmedidas necesarias para su completa recuperaci�n f�sica, ps�quica y social, las acciones de\nreparaci�n simb�lica y las garant�as de no repetici�n.\n",
            "incorrect_answers": [
                " La compensaci�n moral por los da�os y perjuicios derivados de la violencia, las medidas\nnecesarias para su completa recuperaci�n f�sica, las acciones de reparaci�n simb�lica y la\ndisculpa p�blica en medios de comunicaci�n social.\n",
                " La compensaci�n econ�mica por los da�os y perjuicios derivados de la violencia, las\nmedidas necesarias para su completa recuperaci�n f�sica, ps�quica y social y una\nindemnizaci�n adicional para las mujeres con m�s de cuatro hijos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "104.  De conformidad con lo dispuesto en la Ley Org�nica 1/2004, de 28 de diciembre, de\nMedidas de Protecci�n Integral contra la Violencia de G�nero, indique qui�nes ser�n los\nencargados de dise�ar protocolos de actuaci�n global e integral en casos de violencia de\ng�nero:\n",
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
            "question": "105.  La Ley Org�nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y\nhombres:\n",
            "correct_answer": " Establece principios de actuaci�n de los Poderes P�blicos.\n",
            "incorrect_answers": [
                " �nicamente regula derechos y deberes de las personas f�sicas.\n",
                " Prev� medidas destinadas a eliminar y corregir exclusivamente en el sector p�blico, toda\nforma de discriminaci�n por raz�n de sexo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "106.  La Ley Org�nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y\nhombres, tiene por objeto:\n",
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
            "question": "107.  La Ley Org�nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y\nhombres, tiene por objeto la eliminaci�n de la discriminaci�n de la mujer, sea cual fuere\nsu circunstancia o condici�n, en cualesquiera de los �mbitos de la vida y, singularmente,\nen las esferas:\n",
            "correct_answer": " Ambas son correctas.",
            "incorrect_answers": [
                " Pol�tica y civil.\n",
                " Laboral y econ�mica.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "108.  La Ley Org�nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y\nhombres, establece que gozar�n de los derechos derivados del principio de igualdad de\ntrato y de la prohibici�n de discriminaci�n por raz�n de sexo:\n",
            "correct_answer": " Todas las personas.\n",
            "incorrect_answers": [
                " Solo las mujeres.\n",
                " Las mujeres y los hombres."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "109.  El art�culo 1 de la Ley Org�nica 3/2007, de 22 de marzo, para la igualdad efectiva de\nmujeres y hombres, establece:\n",
            "correct_answer": " Las mujeres y los hombres son iguales en dignidad humana, e iguales en derechos y\ndeberes.\n",
            "incorrect_answers": [
                " Las personas son iguales en dignidad humana, e iguales en derechos y deberes.\n",
                " Las personas son iguales ante la ley, e iguales en derechos y deberes."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "110.  Las obligaciones establecidas en la Ley Org�nica 3/2007, de 22 de marzo, para la\nigualdad efectiva de mujeres y hombres, ser�n de aplicaci�n a toda persona:\n",
            "correct_answer": " F�sica o jur�dica, que se encuentre o act�e en territorio espa�ol, cualquiera que fuese su\nnacionalidad, domicilio o residencia.\n",
            "incorrect_answers": [
                " F�sica o jur�dica, que se encuentre o act�e en territorio espa�ol, con nacionalidad, domicilio\no residencia espa�ola.\n",
                " F�sica o jur�dica, cualquiera que fuese su nacionalidad, domicilio o residencia, aunque no se\nencuentre o act�e en territorio espa�ol."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "111.  El �rgano colegiado adscrito al Ministerio de Trabajo y Asuntos Sociales se denomina\nconforme el art. 30 de la Ley Org�nica 1/2004, de Medidas de Protecci�n Integral contra\nla Violencia de G�nero:\n",
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
            "question": "112.  Seg�n la Ley Org�nica 1/2004, de 28 de diciembre, de Medidas de Protecci�n Integral\ncontra la Violencia de G�nero, en el �mbito educativo, la Educaci�n Infantil contribuir� a:\n",
            "correct_answer": " Desarrollar en la infancia el aprendizaje en la resoluci�n pac�fica de conflictos.\n",
            "incorrect_answers": [
                " Desarrollar en el alumnado su capacidad para adquirir habilidades en la resoluci�n pac�fica\nde conflictos y para comprender y respetar la igualdad entre sexos.\n",
                " Desarrollar en el alumnado la capacidad para relacionarse con los dem�s de forma pac�fica\ny para conocer, valorar y respetar la igualdad de oportunidades de hombres y mujeres."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "113.  Seg�n la Ley Org�nica 1/2004, de 28 de diciembre, de Medidas de Protecci�n Integral\ncontra la Violencia de G�nero, en el �mbito educativo, la Educaci�n Primaria contribuir�\na:\n",
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
            "question": "114.  Seg�n la Ley Org�nica 1/2004, de 28 de diciembre, de Medidas de Protecci�n Integral\ncontra la Violencia de G�nero, en el �mbito educativo, la Educaci�n Secundaria\nObligatoria contribuir� a:\n",
            "correct_answer": " Desarrollar en el alumnado la capacidad para relacionarse con los dem�s de forma pac�fica\ny para conocer, valorar y respetar la igualdad de oportunidades de hombres y mujeres.\n",
            "incorrect_answers": [
                " Desarrollar en el alumnado la capacidad para consolidar su madurez personal, social y moral,\nque les permita actuar de forma responsable y aut�noma y para analizar y valorar\ncr�ticamente las desigualdades de sexo y fomentar la igualdad real y efectiva entre hombres\ny mujeres.\n",
                " Desarrollar en la infancia el aprendizaje en la resoluci�n pac�fica de conflictos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "115.  Seg�n la Ley Org�nica 1/2004, de 28 de diciembre, de Medidas de Protecci�n Integral\ncontra la Violencia de G�nero, en relaci�n a la escolarizaci�n en caso de violencia de\ng�nero:\n",
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
            "question": "116.  Indique qu� significa la indemnidad frente a represalias, seg�n la Ley Org�nica 3/2007,\nde 22 de marzo, para la igualdad efectiva de mujeres y hombres:\n",
            "correct_answer": " Cualquier trato adverso o efecto negativo que se produzca en una persona como\nconsecuencia de la presentaci�n por su parte de queja, reclamaci�n, denuncia, demanda o\nrecurso, de cualquier tipo, destinados a impedir su discriminaci�n y a exigir el cumplimiento\nefectivo del principio de igualdad de trato entre mujeres y hombres.\n",
            "incorrect_answers": [
                " Cualquier trato inverso o efecto positivo que se produzca en una persona como\nconsecuencia de la presentaci�n por su parte de queja, reclamaci�n, denuncia, demanda o\nrecurso, de cualquier tipo, destinados a impedir su discriminaci�n y a exigir el cumplimiento\nefectivo del principio de igualdad de trato entre mujeres y hombres.\n",
                " Ninguna de las anteriores es correcta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "117.  Los actos y las cl�usulas de los negocios jur�dicos que constituyan o causen\ndiscriminaci�n por raz�n de sexo se considerar�n, seg�n la Ley Org�nica 3/2007, de 22\nde marzo, para la igualdad efectiva de mujeres y hombres:\n",
            "correct_answer": " Nulos y sin efecto.\n",
            "incorrect_answers": [
                " Anulables.\n",
                " Incorrectos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "118.  En relaci�n a la tutela judicial efectiva, seg�n la Ley Org�nica 3/2007, de 22 de marzo,\npara la igualdad efectiva de mujeres y hombres, la persona acosada ser�:\n",
            "correct_answer": " La �nica legitimada en los litigios sobre acoso sexual y acoso por raz�n de sexo.\n",
            "incorrect_answers": [
                " La principal legitimada en los litigios sobre acoso sexual y acoso por raz�n de sexo.\n",
                " Legitimada, si as� lo solicita solo en los litigios sobre acoso sexual."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "119.  En relaci�n a la prueba, seg�n la Ley Org�nica 3/2007, de 22 de marzo, para la igualdad\nefectiva de mujeres y hombres, de acuerdo con las Leyes procesales, en aquellos\nprocedimientos en los que las alegaciones de la parte actora se fundamenten en\nactuaciones discriminatorias, por raz�n de sexo, corresponder� a la persona:\n",
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
            "question": "120.  La Ley Canaria de igualdad entre mujeres y hombres, es:\n",
            "correct_answer": " Ley 1/2010, de 26 de febrero.",
            "incorrect_answers": [
                " Ley Org�nica 3/2007, de 22 de marzo.\n",
                " Ley 1/2004, de 28 de diciembre.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "121.  La Ley Canaria de prevenci�n y protecci�n integral de las mujeres contra la violencia\nde g�nero, es del a�o:\n",
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
            "question": "122.  La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, entiende por\n�riesgo laboral:\n",
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
            "question": "123.  La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, define el\nconcepto de �da�os derivados del trabajo� en el:\n",
            "correct_answer": " Art�culo 4.3\n",
            "incorrect_answers": [
                " Art�culo 21.\n",
                " Art�culo 4.1"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "124.  A efectos de la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre,\nse entiende por �prevenci�n�:\n",
            "correct_answer": " El conjunto de actividades o medidas adoptadas o previstas en todas las fases de actividad\nde la empresa con el fin de evitar o disminuir los riesgos derivados del trabajo.\n",
            "incorrect_answers": [
                " El conjunto de actividades o medidas adoptadas o previstas solo en algunas de las fases de\nactividad de la empresa con el fin de disminuir los riesgos derivados del trabajo.\n",
                " El concepto de prevenci�n no aparece recogido en Ley de Prevenci�n de Riesgos Laborales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "125.  De acuerdo con la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, uno de los principios de acci�n preventiva es:\n",
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
            "question": "126.  Los principios de la acci�n preventiva se regulan en la Ley de Prevenci�n de Riesgos\nLaborales 31/1995, de 8 de noviembre, en el:\n",
            "correct_answer": " Art�culo 15.\n",
            "incorrect_answers": [
                " Art�culo 17.\n",
                " Art�culo 5."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "127.  El art�culo 4.7 de la Ley 31/1995, de Prevenci�n de Riesgos Laborales define como\n�condici�n de trabajo�:\n",
            "correct_answer": " Cualquier caracter�stica del mismo que pueda tener influencia significativa en la generaci�n\nde riesgos para la seguridad y la salud del trabajador.\n",
            "incorrect_answers": [
                " Alguna caracter�stica del mismo que pueda tener influencia negativa en la generaci�n de\nriesgos solo para la seguridad del trabajador.\n",
                " Alguna caracter�stica del mismo que pueda tener influencia negativa en la generaci�n de\nriesgos solo para la salud del trabajador."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "128.  El art�culo 4 de la Ley 31/1995, de Prevenci�n de Riesgos Laborales, entiende como\n�riesgo laboral grave e inminente�:\n",
            "correct_answer": " Aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda\nsuponer un da�o grave para la salud de los trabajadores.\n",
            "incorrect_answers": [
                " Aquel que no resulte probable racionalmente que se materialice en un futuro inmediato y no\npueda suponer un da�o grave para la salud de los trabajadores.\n",
                " Aquel que no resulte probable racionalmente que se materialice en un futuro inmediato y\npueda suponer un da�o leve para la salud de los trabajadores."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "129.  Entre los principios de la acci�n preventiva que recoge la Ley 31/1995, de Prevenci�n\nde Riesgos laborales, figuran:\n",
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
            "question": "130.  La Ley 31/1995, de Prevenci�n de Riesgos Laborales, en su art�culo 15 establece los\nprincipios de la acci�n preventiva. Se�ale cu�l de los siguientes es falso:\n",
            "correct_answer": " Adoptar medidas que antepongan la protecci�n individual a la colectiva.",
            "incorrect_answers": [
                " Evitar los riesgos.\n",
                " Evaluar los riesgos que no se pueden evitar.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "131.  Seg�n el art�culo 2 de la Ley 31/1995, de Prevenci�n de Riesgos Laborales, �qu�\ncondici�n tienen las disposiciones de car�cter laboral contenidas en dicha Ley y en sus\nnormas reglamentarias?\n",
            "correct_answer": " Derecho necesario m�nimo indisponible pudiendo ser mejoradas y desarrolladas en los\nConvenios Colectivos.",
            "incorrect_answers": [
                " Derecho dispositivo supletorio.\n",
                " Derecho m�nimo superior b�sico.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "132.  Seg�n el art�culo 21 de la Ley 31/1995, de 8 de noviembre, de Prevenci�n de Riesgos\nLaborales, los trabajadores tendr�n derecho a:\n",
            "correct_answer": " Interrumpir su actividad y abandonar el lugar de trabajo, en caso necesario, cuando\nconsidere que dicha actividad entra�a un riesgo grave e inminente para su vida o salud.",
            "incorrect_answers": [
                " Interrumpir su actividad sin abandonar el lugar de trabajo, en caso necesario, cuando\nconsidere que dicha actividad entra�a un riesgo muy leve para su vida o salud.\n",
                " Interrumpir su actividad y abandonar el lugar de trabajo, en caso necesario, cuando\nconsidere que dicha actividad entra�a un riesgo leve e inminente para su salud.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "133.  Seg�n la Ley 31/1995, de Prevenci�n de Riesgos Laborales, se entender� como\n�riesgo laboral grave e inminente�:\n",
            "correct_answer": " Aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda\nsuponer un da�o grave para la salud de los trabajadores.\n",
            "incorrect_answers": [
                " Aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda\nsuponer un da�o leve para la salud de los trabajadores.\n",
                " Aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda\nsuponer un da�o muy leve para la salud de los trabajadores."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "134.  Se considerar�n como �da�os derivados del trabajo�, seg�n la Ley de prevenci�n de\nRiesgos Laborales, 31/1995, de 8 de noviembre:\n",
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
            "question": "135.  Se define en la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre,\ncomo cualquier m�quina, aparato, instrumento o instalaci�n utilizada en el trabajo:\n",
            "correct_answer": " El equipo de trabajo.",
            "incorrect_answers": [
                " El equipo de protecci�n individual.\n",
                " Un agente susceptible de causar da�os.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "136.  A tenor de lo dispuesto en el art�culo 7 de La Ley 31/1995, de 8 de noviembre, de\nPrevenci�n de Riesgos Laborales, las Administraciones P�blicas competentes en materia\nlaboral:\n",
            "correct_answer": " Desarrollar�n entre otras, labores de formaci�n e investigaci�n en materia preventiva.\n",
            "incorrect_answers": [
                " Instar�n la publicaci�n en le BOE de todas las malas pr�cticas de las que tengan\nconocimiento en materia de prevenci�n de riesgos.\n",
                " Desarrollar�n entre otras, labores de formaci�n e investigaci�n en materia cognitiva."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "137.  De conformidad con el art�culo 17 de la Ley de Prevenci�n de Riesgos Laborales\n31/1995, de 8 de noviembre, el empresario respecto a los equipos de trabajo:\n",
            "correct_answer": " Adoptar� las medidas necesarias con el fin de que sean adecuados para el trabajo que deba\nrealizarse y convenientemente adaptados a tal efecto, de forma que garanticen la seguridad\ny la salud de los trabajadores al utilizarlos.\n",
            "incorrect_answers": [
                " Adoptar� las medidas necesarias con el fin de que sean adecuados para el trabajo que deba\nrealizarse y la adaptaci�n la realizar� siempre el trabajador.\n",
                " No tienen que tenerlos disponibles ni adaptados."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "138.  La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, prev� que\ncuando los trabajadores est�n o puedan estar expuestos a un riesgo grave e inminente\ncon ocasi�n de su trabajo el empresario estar� obligado:\n",
            "correct_answer": " A informar lo antes posible a todos los trabajadores afectados acerca de la existencia del\nriesgo grave e inminente y de las medidas adoptadas o que, en su caso, deban adoptarse,\nen materia de protecci�n.\n",
            "incorrect_answers": [
                " A informar lo antes posible solo a la autoridad laboral competente.\n",
                " A informar a algunos trabajadores afectados solo en determinados supuestos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "139.  Seg�n la Ley 31/1995, de 8 de noviembre, de Prevenci�n de Riesgos Laborales, la\npol�tica en materia de prevenci�n de riesgos laborales deber�:\n",
            "correct_answer": " Promover la integraci�n eficaz de la prevenci�n de riesgos laborales en el sistema de gesti�n\nde la empresa.",
            "incorrect_answers": [
                " Promover la integraci�n eficaz de la prevenci�n de riesgos laborales en el departamento que\ndetermine el empresario.\n",
                " Solo promover� la integraci�n eficaz de la prevenci�n de riesgos laborales en el\ndepartamento que determine el trabajador.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "140.  Con arreglo al art�culo 4.7 de la Ley de Prevenci�n de Riesgos Laborales que responde\na la definici�n de �condici�n de trabajo�, de los siguientes enunciados, se�ala el que se\nincluye en la misma:\n",
            "correct_answer": " Las caracter�sticas generales de los locales, instalaciones, equipos, productos, y dem�s\n�tiles existentes en los centros de trabajo.",
            "incorrect_answers": [
                " La naturaleza de los agentes qu�micos que no est�n presentes en el ambiente de trabajo.\n",
                " Otras caracter�sticas del trabajo, sin incluir las relativas a su organizaci�n y ordenaci�n, que\nno influyan en la magnitud de los riesgos a que est� expuesto el trabajador.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "141.  La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, no ser� de\naplicaci�n en aquellas actividades cuyas particularidades lo impidan en el �mbito de las\nfunciones p�blicas de:\n",
            "correct_answer": " Polic�a, seguridad y resguardo aduanero.",
            "incorrect_answers": [
                " Servicios de limpieza.\n",
                " Servicios de jardiner�a municipal.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "142.  La Directiva 89/391/CEE/relativa a la aplicaci�n de medidas para promoverla mejora\nde la seguridad y de la salud de los trabajadores en el trabajo, fue adoptada:\n",
            "correct_answer": " El 12 de junio de 1989.",
            "incorrect_answers": [
                " El 12 de julio de 1989.\n",
                " El 13 de junio de 1998.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "143.  La Ley reguladora de Prevenci�n de Riesgos Laborales es la:\n",
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
            "question": "144.  La Constituci�n Espa�ola encomienda a los poderes p�blicos, como uno de los\nprincipios rectores de la pol�tica social y econ�mica, velar por la seguridad e higiene en\nel trabajo en su art�culo:\n",
            "correct_answer": " Art�culo 40.2.",
            "incorrect_answers": [
                " Art�culo 42.1.\n",
                " Art�culo 41.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "145.  Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, la\nfunci�n de la vigilancia y control de la normativa sobre prevenci�n de riesgos laborales\ncorresponde:\n",
            "correct_answer": " A la Inspecci�n de Trabajo y Seguridad Social.\n",
            "incorrect_answers": [
                " Al Instituto Nacional de Seguridad e Higiene en el Trabajo.\n",
                " A la Comisi�n Nacional de Seguridad y Salud en el Trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "146.  Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, el\nInstituto Nacional de Seguridad e Higiene en el Trabajo tiene entre sus funciones:\n",
            "correct_answer": " Asesoramiento t�cnico en la elaboraci�n de la normativa legal y en el desarrollo de la\nnormalizaci�n, tanto a nivel nacional como internacional.\n",
            "incorrect_answers": [
                " Asesoramiento t�cnico en la elaboraci�n de la normativa legal y en el desarrollo de la\nnormalizaci�n a nivel nacional.\n",
                " Asesorar e informar a las empresas y a los trabajadores sobre la manera m�s efectiva de\ncumplir las disposiciones cuya vigilancia tiene encomendada."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "147.  Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, la\nSecretar�a de la Comisi�n Nacional de Seguridad y Salud en el trabajo, como �rgano de\napoyo t�cnico y administrativo recaer� en:\n",
            "correct_answer": " La Direcci�n del Instituto Nacional de Seguridad e Higiene en el Trabajo.\n",
            "incorrect_answers": [
                " La Inspecci�n de Trabajo y Seguridad Social.\n",
                " En el Presidente de la Comisi�n Nacional de Seguridad y Salud en el trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "148.  Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, la\nPresidencia de la Comisi�n Nacional de Seguridad y Salud en el trabajo, corresponder�\na:\n",
            "correct_answer": " El Secretario General de Empleo y Relaciones Laborales.",
            "incorrect_answers": [
                " Al Vicepresidente primero de la Comisi�n Nacional de Seguridad y Salud en el trabajo.\n",
                " El Subsecretario de Sanidad y Consumo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "149.  De acuerdo con la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, la elaboraci�n de los informes solicitados por los Juzgados de los Social en\nlas demandas deducidas ante los mismos en los procedimientos de accidentes de trabajo\ny enfermedades profesionales es una funci�n que le corresponde a:\n",
            "correct_answer": " La Inspecci�n de Trabajo y Seguridad Social.\n",
            "incorrect_answers": [
                " El Instituto Nacional de Seguridad e Higiene en el Trabajo.\n",
                " La Direcci�n General de Trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "150.  De acuerdo con la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, el Instituto Nacional de Seguridad e Higiene en el Trabajo es:\n",
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
            "question": "151.  El Estatuto de los Trabajadores establece que el trabajador, en la prestaci�n de sus\nservicios, tendr� derecho a una protecci�n eficaz en materia de seguridad y salud en el\ntrabajo en su:\n",
            "correct_answer": " Art�culo 19.\n",
            "incorrect_answers": [
                " Art�culo 21.\n",
                " Art�culo 9."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "152.  El cap�tulo IV de la Ley de Prevenci�n de los Riesgos Laborales 31/1995, de 8 de\nnoviembre:\n",
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
            "question": "153.  La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, tiene por\nobjeto:\n",
            "correct_answer": " Promover la seguridad y la salud de los trabajadores mediante la aplicaci�n de medidas y el\ndesarrollo de las actividades necesarias para la prevenci�n de riesgos derivados del trabajo.",
            "incorrect_answers": [
                " Promover la seguridad de los trabajadores y de los empresarios.\n",
                " Proteger la salud de los trabajadores.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "154.  La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, fue\nampliamente modificada por:\n",
            "correct_answer": " La Ley 54/2003, de reforma del Marco Normativo de la Prevenci�n de Riesgos Laborales.\n",
            "incorrect_answers": [
                " La Ley 53/2004, de reforma del Marco Normativo de la Prevenci�n de Riesgos Laborales.\n",
                " La Ley 5/2000, de 4 de agosto, por la que aprueba el texto refundido sobre Infracciones y\nSanciones en el Orden Social."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "155.  La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, y sus normas\nde desarrollo no ser�n de aplicaci�n:\n",
            "correct_answer": " A las actividades de las Fuerzas Armadas y actividades militares de la Guardia Civil.",
            "incorrect_answers": [
                " En el �mbito de las relaciones laborales reguladas en el texto refundido de la Ley del Estatuto\nde los Trabajadores.\n",
                " En el �mbito de las relaciones de car�cter estatutario del personal al servicio de las\nAdministraciones P�blicas.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "156.  La Directiva 89/391/CEE/ relativa a la aplicaci�n de medidas para promover la mejora\nde la seguridad y de la salud de los trabajadores en el trabajo, dispone en su art�culo 1\nque:\n",
            "correct_answer": " No afecta a las disposiciones nacionales y comunitarias, existentes o futuras, que sean m�s\nfavorables para la protecci�n de la seguridad y de la salud de los trabajadores en el trabajo.\n",
            "incorrect_answers": [
                " No afecta a las disposiciones nacionales que sean m�s favorables para la protecci�n de la\nseguridad y de la salud de los trabajadores en el trabajo.\n",
                " S� afecta a las disposiciones nacionales y comunitarias, existentes o futuras, que sean m�s\nfavorables para la protecci�n de la seguridad y de la salud de los trabajadores en el trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "157.  El Real Decreto por el que se aprueba el Reglamento de los Servicios de Prevenci�n\nes:\n",
            "correct_answer": " Real Decreto 39/1997, de 17 de enero.\n",
            "incorrect_answers": [
                " Real Decreto 40/1997, de 18 de enero.\n",
                " Real Decreto 39/1996, de 17 de enero."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "158.  El Convenio de la Organizaci�n Internacional del Trabajo sobre Seguridad y Salud de\nlos trabajadores y medio ambiente de trabajo, fue adoptado en el a�o:\n",
            "correct_answer": " 1981.\n",
            "incorrect_answers": [
                " 1985.\n",
                " 1891."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "159.  A efectos del Convenio de la Organizaci�n Internacional del Trabajo sobre Seguridad\ny Salud el t�rmino �Trabajadores� abarca:\n",
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
            "question": "160.  A efectos del Convenio de la Organizaci�n Internacional del Trabajo sobre Seguridad\ny Salud de los trabajadores, teniendo en cuenta que se aplica a todas las ramas de\nactividad econ�mica, con la expresi�n �ramas de actividad econ�mica� debe entenderse\nque:\n",
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
            "question": "161.  El Convenio de la Organizaci�n Internacional del Trabajo sobre Seguridad y Salud de\nlos trabajadores y medio ambiente de trabajo, fue ratificado por Espa�a en:\n",
            "correct_answer": " 1985.\n",
            "incorrect_answers": [
                " 1895.\n",
                " 1983."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "162.  De acuerdo con la Ley de Prevenci�n de Riesgos laborales 31/1995, de 8 de noviembre,\nse entiende como conjunto de medios humanos y materiales necesarios para realizar las\nactividades preventivas a fin de garantizar la adecuada protecci�n de la seguridad y la\nsalud de los trabajadores, asesorando y asistiendo para ello al empresario, a los\ntrabajadores y a sus representantes y a los �rganos de representaci�n especializados:\n",
            "correct_answer": " Servicio de Prevenci�n.",
            "incorrect_answers": [
                " Delegados de Prevenci�n.\n",
                " Comit� de Seguridad y Salud.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "163.  Seg�n el art�culo 29 de la Ley 31/1995, de 8 de noviembre, de Prevenci�n de Riesgos\nLaborales, es obligaci�n del trabajador:\n",
            "correct_answer": " Cooperar con el empresario para que �ste pueda garantizar unas condiciones de trabajo\nque sean seguras.\n",
            "incorrect_answers": [
                " Proveerse de los medios y equipos de protecci�n necesarios para su seguridad.\n",
                " No existen obligaciones de los trabajadores, �stas son del empresario."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "164.  De acuerdo con el art�culo 30 de la Ley 31/1995, de Prevenci�n de Riesgos Laborales,\nlos trabajadores designados para velar por el cumplimiento del deber de prevenci�n de\nriesgos profesionales:\n",
            "correct_answer": " No podr�n sufrir ning�n perjuicio derivado de sus actividades de protecci�n y prevenci�n de\nlos riesgos profesionales de la empresa.\n",
            "incorrect_answers": [
                " No es necesario que guarden sigilo profesional sobre la informaci�n relativa a la empresa,\nsalvo excepciones.\n",
                " Dispondr�n de un n�mero de horas determinadas para el cumplimiento de este deber."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "165.  Seg�n la Ley 31/1995, de Prevenci�n de Riesgos Laborales, para poder actuar como\nservicios de prevenci�n, las entidades especializadas deber�n ser objeto de:\n",
            "correct_answer": " Una acreditaci�n por la autoridad laboral.\n",
            "incorrect_answers": [
                " Un informe previo del Comit� de Seguridad y Salud.\n",
                " Un informe previo del empresario."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "166.  Seg�n la Ley 31/1995, de Prevenci�n de Riesgos Laborales, el Servicio de Prevenci�n\ntendr� car�cter:\n",
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
            "question": "167.  Seg�n la Ley 31/1995, de Prevenci�n de Riesgos Laborales, los instrumentos\nesenciales para la gesti�n y aplicaci�n del plan de prevenci�n de riesgos laborales, que\npodr�n ser llevados a cabo por fases de forma programada, son la evaluaci�n de riesgos\nlaborales y la planificaci�n de la actividad preventiva:\n",
            "correct_answer": " Son la evaluaci�n de riesgos laborales y la planificaci�n de la actividad preventiva.\n",
            "incorrect_answers": [
                " Son el estudio y la planificaci�n de los riesgos laborales.\n",
                " Son el estudio la seguridad y salud de los trabajadores."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "168.  Seg�n la Ley 31/1995, de Prevenci�n de Riesgos Laborales, cuando los trabajadores\nest�n o puedan estar expuestos a un riesgo grave e inminente con ocasi�n de su trabajo\ny el empresario no adopte o no permita la adopci�n de las medidas necesarias para\ngarantizar la seguridad y la salud de los trabajadores:\n",
            "correct_answer": " Los representantes legales de �stos podr�n acordar, por mayor�a de sus miembros, la\nparalizaci�n de la actividad de los trabajadores afectados por dicho riesgo.\n",
            "incorrect_answers": [
                " La autoridad laboral acordar� el estudio previo de la actividad de los trabajadores afectados\npor dicho riesgo.\n",
                " Los representantes legales de �stos no acordar�n la paralizaci�n de la actividad de los\ntrabajadores."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "169.  Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, en\nrelaci�n a las medidas de emergencia, �qui�n deber� analizar las posibles situaciones de\nemergencia y adoptar las medidas necesarias en materia de primeros auxilios, lucha\ncontra incendios y evacuaci�n de los trabajadores?\n",
            "correct_answer": " El empresario.\n",
            "incorrect_answers": [
                " Los Delegados de Personal.\n",
                " Las organizaciones sindicales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "170.  La Ley de Prevenci�n de Riesgos laborales 31/1995, establece que la prevenci�n de\nriesgos laborales deber� integrarse en el sistema general de gesti�n de la empresa, tanto\nen el conjunto de sus actividades como en todos los niveles jer�rquicos de �sta, a trav�s\nde la implantaci�n y aplicaci�n de un:\n",
            "correct_answer": " Plan de prevenci�n de riesgos laborales.\n",
            "incorrect_answers": [
                " Plan de acci�n de riesgos laborales.\n",
                " Plan de prevenci�n de riesgos inminentes."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "171.  El art�culo 16 de la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, establece que cuando el resultado de la evaluaci�n de riesgos lo hiciera\nnecesario, el empresario realizar� controles peri�dicos de las condiciones de trabajo y\nde la actividad de los trabajadores en la prestaci�n de sus servicios:\n",
            "correct_answer": " Para detectar situaciones potencialmente peligrosas.\n",
            "incorrect_answers": [
                " Para ofrecer confianza al trabajador.\n",
                " Para evaluar a los trabajadores."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "172.  De acuerdo con la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, el empresario deber� asegurarse de la efectiva ejecuci�n de las actividades\npreventivas incluidas en la planificaci�n de la actividad preventiva, efectuando para ello:\n",
            "correct_answer": " Un seguimiento continuo de la misma.\n",
            "incorrect_answers": [
                " Una vigilancia exhaustiva por un equipo especializado.\n",
                " Un seguimiento aleatorio de la misma."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "173.  De acuerdo con la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, el empresario adoptar� las medidas necesarias con el fin de que los equipos\nde trabajo sean adecuados para el trabajo que deba realizarse y convenientemente\nadaptados a tal efecto, de forma que:\n",
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
            "question": "174.  Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, el\nplan de prevenci�n de riesgos laborales deber� incluir:\n",
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
            "question": "175.  De conformidad con la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, en cumplimiento del deber de protecci�n, el empresario deber� garantizar,\nque cada trabajador reciba una formaci�n te�rica y pr�ctica, suficiente y adecuada, en\nmateria preventiva:\n",
            "correct_answer": " Tanto en el momento de su contrataci�n, cualquiera que sea la modalidad o duraci�n de �sta\ncomo cuando se produzcan cambios en las funciones que desempe�e o se introduzcan\nnuevas tecnolog�as o cambios en los equipos de trabajo.\n",
            "incorrect_answers": [
                " Tanto en el momento la contrataci�n como en el momento del despido.\n",
                " Solo en el caso de que se introduzcan nuevas tecnolog�as."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "176.  Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, en su\nart�culo 22, se establece que el empresario garantizar� a los trabajadores a su servicio la\nvigilancia peri�dica de su estado de salud:\n",
            "correct_answer": " En funci�n de los riesgos inherentes al trabajo.\n",
            "incorrect_answers": [
                " En funci�n de los recursos de la empresa.\n",
                " En funci�n de los resultados del trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "177.  De conformidad con la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, los datos relativos a la vigilancia de la salud de los trabajadores:\n",
            "correct_answer": " No podr�n ser usados con fines discriminatorios ni en perjuicio del trabajador.\n",
            "incorrect_answers": [
                " En algunos casos s� podr�n ser usados con fines discriminatorios.\n",
                " Pueden ser usados con fines discriminatorios si lo decide el empresario."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "178.  La Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, establece\nque el acceso a la informaci�n m�dica de car�cter personal:\n",
            "correct_answer": " Se limitar� al personal m�dico y a las autoridades sanitarias que lleven a cabo la vigilancia\nde la salud, sin que pueda facilitarse al empresario o a otras personas sin el consentimiento\nexpreso del trabajador.",
            "incorrect_answers": [
                " Solo se limitar� a las autoridades sanitarias que lleven a cabo la vigilancia de la salud sin el\nconsentimiento expreso del trabajador.\n",
                " Se limitar� al personal m�dico sin necesidad del consentimiento del trabajador.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "179.  De conformidad con el art�culo 32 bis de la Ley de Prevenci�n de Riesgos Laborales\n31/1995, la presencia en el centro de trabajo de los recursos preventivos, cualquiera que\nsea la modalidad de organizaci�n de dichos recursos, ser� necesaria, entre otros casos:\n",
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
            "question": "180.  La Ley de Prevenci�n de Riesgos Laborales 31/1995, establece que las personas o\nautoridades especializadas que pretendan desarrollar la actividad de auditor�a del\nsistema de prevenci�n habr�n de contar con:\n",
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
            "question": "181.  Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, el coste de las medidas\nrelativas a la seguridad y la salud en el trabajo:\n",
            "correct_answer": " No deber� recaer en modo alguno sobre el trabajador.\n",
            "incorrect_answers": [
                " Puede recaer sobre el trabajador en algunos casos autorizados previamente.\n",
                " Deber� recaer sobre el trabajador."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "182.  Seg�n establece el art�culo 42 de la Ley de Prevenci�n de Riesgos Laborales 31/1995,\nel incumplimiento por los empresarios de sus obligaciones en materia de prevenci�n de\nriesgos laborales dar� lugar a:\n",
            "correct_answer": " Responsabilidades administrativas, as� como en su caso a responsabilidades penales y a\nlas civiles por los da�os y perjuicios que puedan derivarse de dicho incumplimiento.\n",
            "incorrect_answers": [
                " Responsabilidades administrativas por los da�os y perjuicios que puedan derivarse de dicho\nincumplimiento.\n",
                " Solo responsabilidades civiles."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "183.  Seg�n establece la Ley de Prevenci�n de Riesgos Laborales 31/1995, las\nresponsabilidades administrativas que se deriven del procedimiento sancionador por\nincumplimiento del empresario de sus obligaciones en materia de prevenci�n de riesgos\nlaborales:\n",
            "correct_answer": " Ser�n compatibles con las indemnizaciones por los da�os y perjuicios causados y de recargo\nde prestaciones econ�micas del Sistema de Seguridad Social que puedan ser fijadas por el\n�rgano competente de conformidad con la normativa reguladora de dicho sistema.\n",
            "incorrect_answers": [
                " Ser�n compatibles solo con las indemnizaciones por los da�os y perjuicios causados.\n",
                " Ser�n incompatibles con las indemnizaciones por los da�os y perjuicios causados."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "184.  Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, cuando el Inspector de\nTrabajo y Seguridad Social compruebe que la inobservancia de la normativa sobre\nprevenci�n de riesgos laborales implica, a su juicio, un riesgo grave e inminente para la\nseguridad y salud de los trabajadores:\n",
            "correct_answer": " Podr� ordenar la paralizaci�n inmediata de tales trabajos.\n",
            "incorrect_answers": [
                " No podr� ordenar la paralizaci�n inmediata de tales trabajos.\n",
                " Podr� ordenar la paralizaci�n inmediata de tales trabajos, pero necesita la conformidad del\nempresario."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "185.  Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, la paralizaci�n de los\ntrabajos con motivo de la inobservancia de la normativa sobre prevenci�n de riesgos\nlaborales por implicar riesgo grave e inminente para la seguridad y salud de los\ntrabajadores se levantar�:\n",
            "correct_answer": " Por la propia Inspecci�n de Trabajo y Seguridad Social que la hubiera decretado o por el\nempresario tan pronto como se subsanen las causas que lo motivaron, debiendo\ncomunicarlo inmediatamente a la Inspecci�n de Trabajo y Seguridad Social.",
            "incorrect_answers": [
                " Por la Direcci�n General de Trabajo sin necesidad de comunicarlo inmediatamente a la\nInspecci�n de Trabajo y Seguridad Social.\n",
                " Por los Delegados de Personal.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "186.  El texto refundido de la Ley sobre Infracciones y sanciones en el Orden Social fue\naprobado por:\n",
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
            "question": "187.  De conformidad con el texto refundido de la Ley sobre Infracciones y sanciones en el\nOrden Social:\n",
            "correct_answer": " Las infracciones se califican como leves, graves y muy graves en atenci�n a la naturaleza\ndel deber infringido y la entidad del derecho afectado, de conformidad con lo establecido en\nla citada Ley sobre Infracciones y sanciones en el Orden Social.\n",
            "incorrect_answers": [
                " Las infracciones se califican como leves y muy graves en atenci�n a la naturaleza del deber\ninfringido.\n",
                " Las infracciones se califican como leves y graves en atenci�n a la entidad del derecho\nafectado."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "188.  De conformidad con el art�culo 4 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, las infracciones muy graves en materia de prevenci�n\nriesgos laborales prescriben:\n",
            "correct_answer": " A los cinco a�os.\n",
            "incorrect_answers": [
                " A los seis a�os.\n",
                " A los siete a�os."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "189.  De conformidad con 4 del texto refundido de la Ley sobre Infracciones y Sanciones\nen el Orden Social, las infracciones leves en materia de prevenci�n riesgos laborales\nprescriben:\n",
            "correct_answer": " Al a�o.\n",
            "incorrect_answers": [
                " A los dos a�os.\n",
                " A los seis meses."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "190.  De acuerdo con el art�culo 11 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, la falta de limpieza del centro de trabajo de la que no se\nderive riesgo para la integridad f�sica o salud de los trabajadores, se considera:\n",
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
            "question": "191.  De acuerdo con el art�culo 12 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, incumplir la obligaci�n de integrar la prevenci�n de riesgos\nlaborales en la empresa a trav�s de la implantaci�n y aplicaci�n de un plan de prevenci�n,\ncon el alcance y contenido establecido en la normativa de prevenci�n de riesgos\nlaborales, se considera:\n",
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
            "question": "192.  De acuerdo con el art�culo 12 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, no realizar reconocimientos m�dicos y pruebas de\nvigilancia peri�dica del estado de salud de los trabajadores que procedan conforme a la\nnormativa sobre prevenci�n de riesgos laborales, o no comunicar su resultado a los\ntrabajadores afectados, se considera:\n",
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
            "question": "193.  De acuerdo con el art�culo 12 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, incumplir la obligaci�n de efectuar la planificaci�n de la\nactividad preventiva que derive como necesaria de la evaluaci�n de riesgos, se considera:\n",
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
            "question": "194.  De acuerdo con el art�culo 12 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, el incumplimiento de los derechos de informaci�n,\nconsulta, y participaci�n de los trabajadores reconocidos en la normativa sobre\nprevenci�n de riesgos laborales, se considera:\n",
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
            "question": "195.  De acuerdo con el art�culo 12 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, la falta de presencia de los recursos preventivos cuando\nello sea preceptivo o el incumplimiento de las obligaciones derivadas de su presencia, se\nconsidera:\n",
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
            "question": "196.  De acuerdo con el art�culo 13 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, la alteraci�n o falseamiento, por las personas o entidades\nque desarrollen la actividad de auditor�a del sistema de prevenci�n de empresas, del\ncontenido del informe de la empresa auditada, se considera:\n",
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
            "question": "197.  De acuerdo con el art�culo 13 del texto refundido de la Ley sobre Infracciones y\nSanciones en el Orden Social, las acciones u omisiones que impidan el ejercicio de\nderecho de los trabajadores a paralizar su actividad en los casos de riesgo grave e\ninminente, en los t�rminos previstos en el art�culo 21 de la Ley de Prevenci�n de Riesgos\nLaborales, se considera:\n",
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
            "question": "198.  De conformidad con el texto refundido de la Ley sobre Infracciones y Sanciones en el\nOrden Social en las sanciones por infracciones en materia de prevenci�n de riesgos\nlaborales, a efectos de graduaci�n, se tendr�n en cuenta:\n",
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
            "question": "199.  Dentro del procedimiento sancionador previsto en la la Ley sobre Infracciones y\nSanciones en el Orden Social, los hechos constatados por los funcionarios de la\nInspecci�n de Trabajo y Seguridad Social que se formalicen en las actas de inspecci�n\nobservando los requisitos que recoge dicha Ley:\n",
            "correct_answer": " Tendr�n presunci�n de certeza, sin perjuicio de las pruebas que en defensa de los\nrespectivos derechos e intereses puedan aportar los interesados.\n",
            "incorrect_answers": [
                " No tendr�n presunci�n de certeza, sin perjuicio de las pruebas que en defensa de los\nrespectivos derechos e intereses puedan aportar los interesados.\n",
                " No tendr�n presunci�n de certeza, y no se podr�n presentar las pruebas salvo autorizaci�n\ndel empresario."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "200.  Ley sobre Infracciones y Sanciones en el Orden Social, en materia de prevenci�n de\nRiesgo Laborales considera infracci�n leve:\n",
            "correct_answer": " Las que supongan incumplimientos de la normativa de prevenci�n de riesgos laborales,\nsiempre que carezcan de trascendencia grave para la integridad f�sica o la salud de los\ntrabajadores.\n",
            "incorrect_answers": [
                " El incumplimiento de las obligaciones en materia de formaci�n e informaci�n a los\ntrabajadores acerca de los riesgos del puesto de trabajo susceptibles de provocar da�os\npara la seguridad y salud.\n",
                " Incumplir el deber de confidencialidad en el uso relativo a la vigilancia de la salud de los\ntrabajadores."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "201.  De conformidad con 4 del texto refundido de la Ley sobre Infracciones y Sanciones\nen el Orden Social, las infracciones graves en materia de prevenci�n riesgos laborales\nprescriben:\n",
            "correct_answer": " A los tres a�os.\n",
            "incorrect_answers": [
                " A los seis a�os.\n",
                " Al a�o."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "202.  El Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la normativa sobre\nprevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma de Canarias y\nsus Organismos Aut�nomos, seg�n el art�culo 2, no ser� de aplicaci�n:\n",
            "correct_answer": " Para aquellas actividades cuyas particularidades lo impidan, en el �mbito, en su caso, de las\nfunciones p�blicas, de polic�a, seguridad y de servicios operativos de protecci�n civil y\nperitaje forense en los casos grave riesgo, cat�strofe y calamidad p�blica.\n",
            "incorrect_answers": [
                " Para aquellas actividades cuyas particularidades lo impidan, en el �mbito, en su caso, de\nlas funciones p�blicas, de servicios operativos de protecci�n civil y peritaje forense en los\ncasos grave riesgo, cat�strofe y calamidad p�blica.\n",
                " No ser� de aplicaci�n en el �mbito de la Administraci�n P�blica de la Comunidad Aut�noma\nde Canarias."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "203.  Los derechos de consulta, participaci�n y representaci�n de los empleados p�blicos\nen el Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la normativa sobre\nprevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma de Canarias y\nsus Organismos Aut�nomos, se recogen en su:\n",
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
            "question": "204.  De acuerdo con el art�culo 3.2 del Decreto 168/2009, de 29 de diciembre de 2009, de\nadaptaci�n de la normativa sobre prevenci�n de riesgos laborales en el �mbito de la\nComunidad Aut�noma de Canarias y sus Organismos Aut�nomos, los representantes de\nlos empleados p�blicos al servicio de la Administraci�n y de sus Organismos Aut�nomos\ncon funciones espec�ficas en materia de prevenci�n de riesgos laborales son:\n",
            "correct_answer": " Los Delegados de Prevenci�n.\n",
            "incorrect_answers": [
                " Los Delegados de Personal.\n",
                " Los empresarios."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "205.  El Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la normativa sobre\nprevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma de Canarias y\nsus Organismos Aut�nomos, define a los Comit� de Seguridad y Salud como:\n",
            "correct_answer": " Los �rganos colegiados paritarios de participaci�n, destinados a la consulta regular y\nperi�dica de las actuaciones de la Administraci�n P�blica de la Comunidad Aut�noma de\nCanarias y de sus Organismos Aut�nomos en materia de prevenci�n de riesgos laborales.\n",
            "incorrect_answers": [
                " Los �rganos unipersonales de representaci�n, destinados a la consulta regular y peri�dica\nde las actuaciones de la Administraci�n P�blica de la Comunidad Aut�noma de Canarias y\nde sus Organismos Aut�nomos en materia de prevenci�n de riesgos laborales.\n",
                " Los entes de participaci�n, destinados a la consulta regular y peri�dica de las actuaciones\nde la Administraci�n P�blica de la Comunidad Aut�noma de Canarias y de sus Organismos\nAut�nomos en materia de prevenci�n de riesgos laborales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "206.  Seg�n el art�culo 4 del Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n\nde la normativa sobre prevenci�n de riesgos laborales en el �mbito de la Comunidad\nAut�noma de Canarias y sus Organismos Aut�nomos, la designaci�n de Delegado de\nPrevenci�n podr� recaer:\n",
            "correct_answer": " En cualquier empleado p�blico que preste sus servicios en la Administraci�n P�blica de la\nComunidad Aut�noma de Canarias y sus Organismos Aut�nomos.\n",
            "incorrect_answers": [
                " En cualquier empleado p�blico que preste sus servicios en la Administraci�n P�blica de la\nComunidad Aut�noma de Canarias y pero no en sus Organismos Aut�nomos.\n",
                " En cualquier empleado que no preste sus servicios en la Administraci�n P�blica de la\nComunidad Aut�noma de Canarias."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "207.  El Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la normativa sobre\nprevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma de Canarias y\nsus Organismos Aut�nomos, el tiempo dedicado a la formaci�n de los Delegados de\nPrevenci�n:\n",
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
            "question": "208.  De acuerdo con la regulaci�n del Decreto 168/2009, de 29 de diciembre de 2009, de\nadaptaci�n de la normativa sobre prevenci�n de riesgos laborales en el �mbito de la\nComunidad Aut�noma de Canarias y sus Organismos Aut�nomos, el dise�o,\nimplantaci�n y aplicaci�n de un plan sectorial de prevenci�n de riesgos laborales que\npermita la integraci�n de la prevenci�n en la Administraci�n P�blica de la Comunidad\nAut�noma de Canarias y sus Organismos Aut�nomos, dentro del marco de actuaci�n que\ndetermine el plan general de prevenci�n, es una funci�n que le corresponde:\n",
            "correct_answer": " A los Servicios de Prevenci�n de Riesgos Laborales.\n",
            "incorrect_answers": [
                " A las organizaciones sindicales m�s representativas.\n",
                " A los Servicios de Personal."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "209.  El art�culo 12 del Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la\nnormativa sobre prevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma\nde Canarias y sus Organismos Aut�nomos, se�ala que las instrucciones precisas en\nmateria de prevenci�n de riesgos laborales ser�n dictadas por:\n",
            "correct_answer": " Los titulares de los �rganos de los que dependen los Servicios de Prevenci�n de Riesgos\nLaborales.\n",
            "incorrect_answers": [
                " Los Comit�s de seguridad y salud.\n",
                " Las organizaciones sindicales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "210.  De conformidad con el art�culo 15 del Decreto 168/2009, de 29 de diciembre de 2009,\nde adaptaci�n de la normativa sobre prevenci�n de riesgos laborales en el �mbito de la\nComunidad Aut�noma de Canarias y sus Organismos Aut�nomos, la realizaci�n de una\nauditor�a o evaluaci�n externa del sistema de prevenci�n de la Administraci�n P�blica de\nla Comunidad Aut�noma de Canarias y sus Organismos Aut�nomos corresponde a:\n",
            "correct_answer": " La Direcci�n General de Trabajo a trav�s del Instituto Canario de Seguridad Laboral, como\n�rgano t�cnico en materia preventiva de la Comunidad Aut�noma, en colaboraci�n con la\nInspecci�n General de Servicios, y al Servicio Canario de la Salud para la auditor�a del\nsistema en lo referente a la vigilancia de la salud de los empleados p�blicos.\n",
            "incorrect_answers": [
                " La Inspecci�n General de Servicios.\n",
                " Los Comit�s de Seguridad y Salud."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "211.  En relaci�n a la coordinaci�n en materia de Prevenci�n de Riesgos Laborales, el\nDecreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la normativa sobre\nprevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma de Canarias y\nsus Organismos Aut�nomos, se�ala que las funciones de coordinaci�n, seguimiento,\npromoci�n e impulso de la prevenci�n de riesgos laborales en la Administraci�n P�blica\nde la Comunidad Aut�noma de Canarias y sus Organismos Aut�nomos las realizar�:\n",
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
            "question": "212.  Seg�n la Disposici�n Adicional Primera del Decreto 168/2009, de 29 de diciembre de\n2009, de adaptaci�n de la normativa sobre prevenci�n de riesgos laborales en el �mbito\nde la Comunidad Aut�noma de Canarias y sus Organismos Aut�nomos, colaborar�n en\nla implantaci�n, seguimiento y mejora de las condiciones de trabajo en la Administraci�n\nP�blica de la Comunidad Aut�noma, as� como el asesoramiento t�cnico y pericial:\n",
            "correct_answer": " El Instituto Canario de Seguridad Laboral y el Servicio Canario de la Salud, a trav�s de sus\n�rganos competentes.\n",
            "incorrect_answers": [
                " La Direcci�n General de Trabajo.\n",
                " Ninguna de las anteriores es correcta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "213.  El Decreto por el que se crea el Instituto Canario de Seguridad Laboral es:\n",
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
            "question": "214.  El Decreto por el que se crea el Instituto Canario de Seguridad Laboral fue modificado\npor:\n",
            "correct_answer": " Decreto 54/2002, de 6 de mayo.",
            "incorrect_answers": [
                " Decreto 56/2002, de 6 de mayo.\n",
                " Decreto 216/1998, de 20 de noviembre.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "215.  El Consejo Rector del Instituto Canario de Seguridad Laboral est� integrado por los\nsiguientes �rganos:\n",
            "correct_answer": " El Pleno y la Comisi�n Permanente.\n",
            "incorrect_answers": [
                " El Pleno y la Comisi�n Asesora.\n",
                " El Pleno y la Secretar�a."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "216.  Dictar las directrices para la elaboraci�n del Anteproyecto de Presupuesto del\nInstituto Canario de Seguridad Laboral, corresponde:\n",
            "correct_answer": " A la Comisi�n Permanente del Consejo Rector del Instituto Canario de Seguridad Laboral.\n",
            "incorrect_answers": [
                " Al Pleno del Consejo Rector del Instituto Canario de Seguridad Laboral.\n",
                " Al Vicepresidente del Instituto Canario de Seguridad Laboral."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "217.  Es una funci�n del Pleno del Consejo Rector del Instituto Canario de Seguridad\nLaboral:\n",
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
            "question": "218.  El Pleno del Consejo Rector del Instituto Canario de Seguridad Laboral adoptar� sus\nacuerdos:\n",
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
            "question": "219.  Conforme al Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la\nnormativa sobre prevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma\nde Canarias y sus Organismos Aut�nomos, la evaluaci�n de los factores de riesgo que\npuedan afectar a la seguridad y a la salud de los empleados p�blicos al servicio de la\nAdministraci�n P�blica de la Comunidad Aut�noma de Canarias y sus Organismos\nAut�nomos en los t�rminos previstos en las disposiciones vigentes sobre prevenci�n de\nriesgos laborales, corresponde:\n",
            "correct_answer": " A los Servicios de Prevenci�n de Riesgos Laborales.\n",
            "incorrect_answers": [
                " Al Instituto Canario de Seguridad Laboral.\n",
                " A las organizaciones sindicales."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "220.  El art�culo 5 del Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la\nnormativa sobre prevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma\nde Canarias y sus Organismos Aut�nomos, establece que se constituir� un Comit� de\nSeguridad y Salud:\n",
            "correct_answer": " En cada Departamento que cuente con 50 o m�s empleados p�blicos, sin distinci�n del\nr�gimen jur�dico que rija su relaci�n de servicio.\n",
            "incorrect_answers": [
                " En cada Departamento que cuente con 70 o m�s empleados p�blicos, sin distinci�n del\nr�gimen jur�dico que rija su relaci�n de servicio.\n",
                " En cada Departamento que cuente con 40 o m�s empleados p�blicos, sin distinci�n del\nr�gimen jur�dico que rija su relaci�n de servicio."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "221.  La organizaci�n de los recursos para el desarrollo de las actividades preventivas en\nel Decreto 168/2009, de 29 de diciembre de 2009, de adaptaci�n de la normativa sobre\nprevenci�n de riesgos laborales en el �mbito de la Comunidad Aut�noma de Canarias y\nsus Organismos Aut�nomos, se recogen en su:\n",
            "correct_answer": " Cap�tulo III.\n",
            "incorrect_answers": [
                " Cap�tulo I.\n",
                " Cap�tulo IV."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "222.  La Ley 31/1995, de 8 de noviembre, de Prevenci�n de Riesgos Laborales, regula la\nprotecci�n a la maternidad en su:\n",
            "correct_answer": " Art�culo 26.\n",
            "incorrect_answers": [
                " Art�culo 28.\n",
                " Art�culo 36."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "223.  La Ley 31/1995, de 8 de noviembre, de Prevenci�n de Riesgos Laborales, prev� entre\nlas medidas a adoptar por el empresario para evitar la exposici�n a posibles riesgos para\nla seguridad y salud o una posible repercusi�n sobre el embarazo o lactancia de las\ntrabajadoras, la posibilidad de incluir, cuando resulte necesario:\n",
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
            "question": "224.  La Ley 31/1995, de 8 de noviembre, de Prevenci�n de Riesgos Laborales, establece\nque, si los resultados de la evaluaci�n riesgos revelasen un riesgo para la seguridad y\nsalud o una posible repercusi�n sobre el embarazo o lactancia de las trabajadoras, el\nempresario:\n",
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
            "question": "225.  De conformidad con el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el\nReglamento de Servicios de Prevenci�n, su Anexo VII incluye una lista no exhaustiva de\nagentes, procedimientos y condiciones de trabajo que pueden influir negativamente en la\nsalud de las trabajadoras embarazadas o en per�odo de lactancia natural, del feto o del\nni�o durante el per�odo de lactancia natural, en cualquier actividad que pueda implicar un\nriesgo de exposici�n, entre las que se encuentra:\n",
            "correct_answer": " Ruido.\n",
            "incorrect_answers": [
                " Cambios suaves de temperatura.\n",
                " Aire templado."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "226.  En materia de prevenci�n de riesgos, las trabajadoras embarazadas:\n",
            "correct_answer": " Tendr�n derecho a ausentarse del trabajo, con derecho a remuneraci�n, para la realizaci�n\nde ex�menes prenatales y t�cnicas de preparaci�n al parto, previo aviso al empresario y\njustificaci�n de la necesidad de su realizaci�n dentro de la jornada de trabajo.\n",
            "incorrect_answers": [
                " Tendr�n derecho a ausentarse del trabajo, sin derecho a remuneraci�n, para la realizaci�n\nde ex�menes prenatales y t�cnicas de preparaci�n al parto, previo aviso al empresario.\n",
                " Tendr�n derecho a ausentarse del trabajo, sin derecho a remuneraci�n, para la realizaci�n\nde ex�menes prenatales y t�cnicas de preparaci�n al parto, sin previo aviso al servicio de\nprevenci�n y sin justificaci�n de la necesidad de su realizaci�n dentro de la jornada de\ntrabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "227.  De conformidad con el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el\nReglamento de Servicios de Prevenci�n, su Anexo VIII incluye una lista no exhaustiva de\nagentes y condiciones de trabajo a los cuales no podr� haber riesgo de exposici�n por\nparte de trabajadoras embarazadas o en per�odo de lactancia natural, entre las que se\nencuentra:\n",
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
            "question": "228.  De conformidad con el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el\nReglamento de Servicios de Prevenci�n, su Anexo VIII incluye una lista no exhaustiva de\nagentes y condiciones de trabajo a los cuales no podr� haber riesgo de exposici�n por\nparte de trabajadoras embarazadas o en per�odo de lactancia natural, entre las que se\nencuentra:\n",
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
            "question": "229.  La Directiva Europea relativa a la aplicaci�n de medidas para promover la mejora de\nla seguridad y de la salud en el trabajo de la trabajadora embarazada, que haya dado a luz\no en per�odo de lactancia corresponde a:\n",
            "correct_answer": " Directiva 92/85/CEE, del Consejo del 19 de octubre de 1992.\n",
            "incorrect_answers": [
                " Directiva 92/88/CEE, del Consejo del 21de octubre de 1992.\n",
                " Directiva 90/85/CEE, del Consejo del 20 de octubre de 1992."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "230.  La Directiva Europea 92/85/CEE relativa a la aplicaci�n de medidas para promover la\nmejora de la seguridad y de la salud en el trabajo de la trabajadora embarazada, que haya\ndado a luz o en per�odo de lactancia:\n",
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
            "question": "231.  Seg�n el art�culo 26 de la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, la evaluaci�n de los riesgos a que se refiere el art�culo 16 de dicha Ley:\n",
            "correct_answer": " Deber� comprender la determinaci�n de la naturaleza, el grado y la duraci�n de la exposici�n\nde las trabajadoras en situaci�n de embarazo o parto reciente a agentes, procedimientos o\ncondiciones de trabajo que puedan influir negativamente en la salud de las trabajadoras o\ndel feto, en cualquier actividad susceptible de presentar un riesgo espec�fico.\n",
            "incorrect_answers": [
                " No deber� comprender la determinaci�n de la naturaleza, el grado y la duraci�n de la\nexposici�n de las trabajadoras en situaci�n de embarazo o parto reciente a agentes,\nprocedimientos o condiciones de trabajo que puedan influir negativamente en la salud de las\ntrabajadoras o del feto, en cualquier actividad susceptible de presentar un riesgo espec�fico.\n",
                " Deber� contener la decisi�n que tome el empresario respecto a la naturaleza, el grado y la\nduraci�n de la exposici�n de las trabajadoras en situaci�n de embarazo o parto reciente a\nlas condiciones de trabajo que puedan influir en su salud."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "232.  De acuerdo con la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, el empresario:\n",
            "correct_answer": " Garantizar� de manera espec�fica la protecci�n de aquellos trabajadores que, por sus\npropias caracter�sticas personales o estado biol�gico desconocido, incluidos aquellos que\ntengan reconocida la situaci�n de discapacidad f�sica, ps�quica o sensorial, sean\nespecialmente sensibles a los riesgos derivados del trabajo.\n",
            "incorrect_answers": [
                " No tendr� que garantizar de manera espec�fica la protecci�n de aquellos trabajadores que,\npor sus propias caracter�sticas personales o estado biol�gico desconocido, incluidos\naquellos que tengan reconocida la situaci�n de discapacidad f�sica, ps�quica o sensorial,\nsean especialmente sensibles a los riesgos derivados del trabajo.\n",
                " Garantizar� cuando lo estime adecuado para su empresa, la protecci�n de aquellos\ntrabajadores que, por sus propias caracter�sticas personales o estado biol�gico desconocido,\nno incluidos aquellos que tengan reconocida la situaci�n de discapacidad f�sica, ps�quica o\nsensorial, sean especialmente sensibles a los riesgos derivados del trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "233.  Seg�n el art�culo 25 de la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de\nnoviembre, los trabajadores especialmente sensibles a determinados riesgos derivados\ndel trabajo:\n",
            "correct_answer": " No ser�n empleados en aquellos puestos en los que, a causa de sus caracter�sticas\npersonales, estado biol�gico o por su discapacidad f�sica, ps�quica o sensorial debidamente\nreconocida, puedan ellos, los dem�s trabajadores u otras personas relacionadas con la\nempresa, ponerse en situaci�n de peligro o en general, cuando se encuentren\nmanifiestamente en estados o situaciones transitorias que no respondan a las exigencias\npsicof�sicas de los respectivos puestos de trabajo.",
            "incorrect_answers": [
                " Ser�n empleados en aquellos puestos en los que, a causa de sus caracter�sticas personales,\nestado biol�gico o por su discapacidad f�sica, ps�quica o sensorial debidamente reconocida,\npuedan ellos, los dem�s trabajadores u otras personas relacionadas con la empresa,\nponerse en situaci�n de peligro o en general, cuando se encuentren manifiestamente en\nestados o situaciones transitorias que no respondan a las exigencias psicof�sicas de los\nrespectivos puestos de trabajo.\n",
                " Cuando lo determine el empresario, ser�n empleados en aquellos puestos en los que, a\ncausa de sus caracter�sticas personales, estado biol�gico o por su discapacidad f�sica,\npuedan ellos, los dem�s trabajadores u otras personas relacionadas con la empresa,\nponerse en situaci�n de peligro o en general, cuando se encuentren manifiestamente en\nestados o situaciones transitorias que no respondan a las exigencias psicof�sicas de los\nrespectivos puestos de trabajo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "234.  Seg�n la Ley de Prevenci�n de Riesgos Laborales 31/1995, de 8 de noviembre, el\nempresario deber� tener en cuenta los factores de riesgo que puedan influir en la funci�n\nde procreaci�n de los trabajadores/as, en particular por la exposici�n de agentes f�sicos,\nqu�micos y biol�gicos que puedan ejercer efectos mutag�nicos o de toxicidad para la\nprocreaci�n:\n",
            "correct_answer": " En las evaluaciones de riesgos.\n",
            "incorrect_answers": [
                " En los anuncios de contrataci�n.\n",
                " En los resultados de la empresa."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "235.  De conformidad con el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el\nReglamento de Servicios de Prevenci�n, el personal sanitario del Servicio de Prevenci�n:\n",
            "correct_answer": " Estudiar� y valorar�, especialmente, los riesgos que puedan afectar a las trabajadoras en\nsituaci�n de embarazo o parto reciente, a los menores y a los trabajadores especialmente\nsensibles a determinados riesgos, y propondr� las medidas preventivas adecuadas.\n",
            "incorrect_answers": [
                " No estudiar� ni valorar�, especialmente, los riesgos que puedan afectar a las trabajadoras\nen situaci�n de embarazo o parto reciente, a los menores y a los trabajadores especialmente\nsensibles a determinados riesgos, y propondr� las medidas preventivas adecuadas.\n",
                " Solo tiene la obligaci�n de comunicar al empresario los riesgos que puedan afectar a las\ntrabajadoras en situaci�n de embarazo o parto reciente, a los menores y a los trabajadores\nespecialmente sensibles a determinados riesgos, sin poder proponer medidas preventivas."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "236.  Las prestaciones econ�micas del sistema de la Seguridad Social por maternidad,\npaternidad, riesgo durante el embarazo y riesgo durante la lactancia natural, se regulan:\n",
            "correct_answer": " Real Decreto 295/2009, de 6 de marzo.\n",
            "incorrect_answers": [
                " Real Decreto 255/2006, de 6 de marzo.\n",
                " Real Decreto 265/2009, de 7 de marzo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "237.  El Real Decreto Legislativo 5/2000, por el que se aprueba el texto refundido de la Ley\nsobre Infracciones y Sanciones en el Orden Social tipifica no observar las normas\nespec�ficas en materia de protecci�n de la seguridad y salud de las trabajadoras durante\nlos periodos de embarazo y lactancia, como:\n",
            "correct_answer": " Infracci�n muy grave.",
            "incorrect_answers": [
                " Infracci�n leve.\n",
                " Infracci�n grave.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "238.  La suspensi�n del contrato de trabajadora embarazada cuando no resulta posible el\ncambio de puesto o no pueda exigirse por motivos justificados, durar�:\n",
            "correct_answer": " Durante el periodo necesario para la protecci�n de su seguridad o de su salud y mientras\npersista la imposibilidad de reincorporarse a su puesto anterior o a otro puesto compatible\ncon su estado.\n",
            "incorrect_answers": [
                " Mientras la trabajadora est� embarazada.\n",
                " Mientras persista la imposibilidad de reincorporarse a su mismo puesto anterior."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "239.  La relaci�n de los puestos de trabajo exentos de riesgos para la salud de la\ntrabajadora embarazada o del feto cuando �sta deba desempe�ar un puesto de trabajo\ndiferente y compatible con su estado, se deber� determinar por:\n",
            "correct_answer": " Por el empresario, previa consulta con los representantes de los trabajadores.\n",
            "incorrect_answers": [
                " Por la autoridad laboral.\n",
                " Por los Servicios M�dicos del Instituto Nacional de la Seguridad Social."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "240.  El anexo VII del Real Decreto 39/1997, de 17 de enero, por el que se aprueba el\nReglamento de Servicios de Prevenci�n, incluye una lista no exhaustiva de agentes,\nprocedimientos y condiciones de trabajo que pueden influir negativamente en la salud de\nlas trabajadoras embarazadas o en per�odo de lactancia natural, del feto o del ni�o\ndurante el per�odo de lactancia natural, en cualquier actividad que pueda implicar un\nriesgo de exposici�n, entre las que se encuentra:\n",
            "correct_answer": " Fr�o y calor extremos.\n",
            "incorrect_answers": [
                " Virus de la rubeola.\n",
                " Toxoplasma."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "241.  El Real Decreto 8/2015 por el que se aprueba el texto refundido de la Ley General de\nla Seguridad Social reconoce la situaci�n protegida de riesgo durante el embarazo y\ndurante la lactancia natural y sus correspondientes prestaciones en los:\n",
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
            "question": "242.  Seg�n el texto refundido de la Ley General de la Seguridad Social, aprobado por el\nReal Decreto Legislativo 8/2015, de 30 de octubre, se entiende por accidente de trabajo:\n",
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
            "question": "243.  De acuerdo con el art�culo 156 del texto refundido de la Ley General de la Seguridad\nSocial, aprobado por el Real Decreto Legislativo 8/2015, de 30 de octubre, tendr�n la\nconsideraci�n de accidente de trabajo:\n",
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
            "question": "244.  De acuerdo con el articulado del texto refundido de la Ley General de la Seguridad\nSocial, aprobado por el Real Decreto Legislativo 8/2015, de 30 de octubre, tendr�n la\nconsideraci�n de accidente de trabajo:\n",
            "correct_answer": " Los que sufra el trabajador al ir o al volver del lugar de trabajo.\n",
            "incorrect_answers": [
                " Las enfermedades que pueda sufrir fuera del lugar de trabajo.\n",
                " Los sufridos cuando acuda a un acto de salvamento."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "245.  De acuerdo con el articulado de la Ley General de la Seguridad Social, no tendr� la\nconsideraci�n de accidente de trabajo:\n",
            "correct_answer": " Los que sean debidos a dolo o a imprudencia temeraria del trabajador accidentado.\n",
            "incorrect_answers": [
                " Las enfermedades o defectos, padecidos con anterioridad por el trabajador, que se agraven\ncomo consecuencia de la lesi�n constitutiva del accidente.\n",
                " Los ocurridos con ocasi�n o por consecuencia de las tareas que, aun siendo distintas a las\nde su grupo profesional, ejecute el trabajador en cumplimiento de las �rdenes del empresario\no espont�neamente en inter�s del buen funcionamiento de la empresa."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "246.  De acuerdo con el articulado de la Ley General de la Seguridad Social, no impedir�n\nla calificaci�n de un accidente como de trabajo:\n",
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
            "question": "247.  De acuerdo con el art�culo 164 de la Ley General de la Seguridad Social, todas las\nprestaciones econ�micas que tengan su causa en accidente de trabajo o enfermedad\nprofesional, seg�n la gravedad de la falta, cuando la lesi�n se produzca por equipos de\ntrabajo o en instalaciones, centros o lugares de trabajo que carezcan de los medios de\nprotecci�n reglamentarios, los tengan inutilizados o en malas condiciones, o cuando no\nse hayan observado las medidas generales o particulares de seguridad y salud en el\ntrabajo, o las de adecuaci�n personal a cada trabajo, habida cuenta de sus caracter�sticas\ny de la edad, sexo y dem�s condiciones del trabajador, se aumentar�n:\n",
            "correct_answer": " De un 30 a un 50 por ciento.\n",
            "incorrect_answers": [
                " De un 10 por ciento en adelante.\n",
                " De los 70 a un 80 por ciento."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "248.  El art�culo 23 de la Ley 31/1995, de 8 de noviembre, establece como obligaci�n del\nempresario:\n",
            "correct_answer": " Elaborar y conservar a disposici�n de la autoridad laboral la relaci�n de accidentes de trabajo\ny enfermedades profesionales que hayan causado al trabajador una incapacidad laboral\nsuperior a un d�a de trabajo.\n",
            "incorrect_answers": [
                " Elaborar y conservar a disposici�n de la autoridad laboral la relaci�n de accidentes de trabajo\ny enfermedades profesionales que hayan causado al trabajador una incapacidad laboral\nsuperior a una semana de trabajo.\n",
                " Elaborar y conservar a disposici�n de la autoridad laboral la relaci�n de accidentes de trabajo\ny enfermedades profesionales que hayan causado al trabajador una incapacidad laboral\nsuperior a un mes de trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "249.  El art�culo 23 de la Ley 31/1995, de 8 de noviembre, se�ala que el empresario estar�\nobligado a:\n",
            "correct_answer": " Notificar por escrito a la autoridad laboral los da�os para la salud de los trabajadores a su\nservicio que se hubieran producido con motivo del desarrollo de su trabajo, conforme al\nprocedimiento que se determine reglamentariamente.\n",
            "incorrect_answers": [
                " Notificar como m�nimo de manera oral a la autoridad laboral los da�os para la salud de los\ntrabajadores a su servicio que se hubieran producido con motivo del desarrollo de su trabajo,\nconforme al procedimiento que se determine reglamentariamente.\n",
                " Notificar a la autoridad laboral los da�os para la salud de los trabajadores a su servicio que\nse hubieran producido sin motivo del desarrollo de su trabajo, conforme al procedimiento\nque se determine reglamentariamente."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "250.  En el marco del Real Decreto 39/1997, su art�culo 37 se�ala como funci�n superior de\nla actividad preventiva que el personal sanitario del Servicio de Prevenci�n:\n",
            "correct_answer": " Deber� conocer las enfermedades que se produzcan entre los trabajadores y las ausencias\ndel trabajo por motivos de salud, a los solos efectos de poder identificar cualquier relaci�n\nentre la causa de enfermedad o de ausencia y los riesgos para la salud que puedan\npresentarse en los lugares de trabajo.\n",
            "incorrect_answers": [
                " No deber� conocer las enfermedades que se produzcan entre los trabajadores y las\nausencias del trabajo por motivos de salud.\n",
                " Deber� conocer las enfermedades que se produzcan entre los trabajadores, pero no las\nausencias del trabajo por motivos de salud."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "251.  En el marco del Real Decreto 39/1997, su art�culo 37 se�ala que el personal sanitario\ndel servicio de prevenci�n que, en su caso, exista en el centro de trabajo:\n",
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
            "question": "252.  La Ley sobre Infracciones y Sanciones en el Orden Social, en materia de prevenci�n\nde Riesgo Laborales considera infracci�n leve:\n",
            "correct_answer": " No dar cuenta, en tiempo y forma, a la autoridad laboral competente, conforme a las\ndisposiciones vigentes, de los accidentes de trabajo ocurridos y de las enfermedades\nprofesionales declaradas cuando tengan la calificaci�n de leves.\n",
            "incorrect_answers": [
                " El incumplimiento de las obligaciones en materia de formaci�n e informaci�n a los\ntrabajadores acerca de los riesgos del puesto de trabajo susceptibles de provocar da�os\npara la seguridad y salud.\n",
                " Incumplir el deber de confidencialidad en el uso relativo a la vigilancia de la salud de los\ntrabajadores."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "253.  De acuerdo con el art�culo 14 de la Ley de Prevenci�n de Riesgos Laborales 31/1995,\nde 8 de noviembre:\n",
            "correct_answer": " Los trabajadores tienen derecho a una protecci�n eficaz en materia de seguridad y salud en\nel trabajo y el citado derecho supone la existencia de un correlativo deber del empresario de\nprotecci�n de los trabajadores frente a los riesgos laborales.",
            "incorrect_answers": [
                " Los trabajadores no tienen derecho a una protecci�n eficaz en materia de seguridad y salud\nen el trabajo.\n",
                " Los trabajadores tienen derecho a una protecci�n eficaz en materia de seguridad y pero no\nde salud en el trabajo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "254.  Seg�n el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el Reglamento\nde los Servicios de Prevenci�n, entre las funciones de nivel b�sico que integran la\nactividad preventiva se encuentra:\n",
            "correct_answer": " Promover los comportamientos seguros y la correcta utilizaci�n de los equipos de trabajo y\nprotecci�n, y fomentar el inter�s y cooperaci�n de los trabajadores en una acci�n preventiva\nintegrada.\n",
            "incorrect_answers": [
                " Realizar actividades de informaci�n y formaci�n b�sica de trabajadores.\n",
                " Vigilar el cumplimiento del programa de control y reducci�n de riesgos y efectuar\npersonalmente las actividades de control de las condiciones de trabajo que tenga asignadas."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "255.  De acuerdo con el art�culo 156 del texto refundido de la Ley General de la Seguridad\nSocial, aprobado por el Real Decreto Legislativo 8/2015, de 30 de octubre:\n",
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
            "question": "256.  De acuerdo con el texto refundido de la Ley General de la Seguridad Social, aprobado\npor el Real Decreto Legislativo 8/2015, de 30 de octubre, tendr� la consideraci�n de\nsituaciones determinantes de incapacidad temporal:\n",
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
            "question": "257.  El texto refundido de la Ley General de la Seguridad Social, aprobado por el Real\nDecreto Legislativo 8/2015, de 30 de octubre, establece que no impedir�n la calificaci�n\nde un accidente como de trabajo:\n",
            "correct_answer": " La imprudencia profesional que es consecuencia del ejercicio habitual de un trabajo y se\nderiva de la confianza que este inspira.",
            "incorrect_answers": [
                " El comportamiento doloso del trabajador.\n",
                " La prudencia que es consecuencia del ejercicio excepcional de un trabajo fuera del centro\nde trabajo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "258.  La Ley sobre Infracciones y Sanciones en el Orden Social, en materia de prevenci�n\nde Riesgo Laborales considera no dar cuenta en tiempo y forma a la autoridad laboral,\nconforme a las disposiciones vigentes, de los accidentes de trabajo ocurridos y de las\nenfermedades profesionales declaradas cuando tengan la calificaci�n de graves, muy\ngraves o mortales, o no llevar a cabo una investigaci�n en caso de producirse da�os a la\nsalud de los trabajadores o de tener indicios de que las medidas preventivas son\ninsuficientes:\n",
            "correct_answer": " Infracci�n grave.\n",
            "incorrect_answers": [
                " Infracci�n leve.\n",
                " Infracci�n muy grave."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "259.  La Ley 31/1995, de Prevenci�n de Riesgos Laborales, establece en su art�culo 38 que\nel Comit� de Seguridad y Salud es:\n",
            "correct_answer": " El �rgano paritario y colegiado de participaci�n destinado a la consulta regular y peri�dica\nde las actuaciones de la empresa en materia de prevenci�n de riesgos.\n",
            "incorrect_answers": [
                " El �rgano unipersonal destinado a la consulta de las actuaciones de la empresa en materia\nde prevenci�n de riesgos.\n",
                " �rgano encargado de colaborar con la direcci�n de la empresa en la mejora dela acci�n\npreventiva."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "260.  La Ley 31/1995, de Prevenci�n de Riesgos Laborales, prev� en su art�culo 40 que:\n",
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
            "question": "261.  Seg�n el Real Decreto 39/1997, de 17 de enero, por el que se aprueba el Reglamento\nde los Servicios de Prevenci�n, entre las funciones de nivel superior que integran la\nactividad preventiva se encuentra:\n",
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
            "question": "262.  �Qu� regula el Real Decreto 486/199,7 de 14 de abril?\n",
            "correct_answer": " Establece las disposiciones m�nimas de seguridad y de salud aplicables a los lugares de\ntrabajo.\n",
            "incorrect_answers": [
                " Las disposiciones m�nimas para la se�alizaci�n de seguridad y salud en el trabajo.\n",
                " Establece las disposiciones m�nimas de seguridad y de salud aplicables a los lugares\ndom�sticos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "263.  El Real Decreto 486/1997, por el que se establecen las disposiciones m�nimas de\nseguridad y salud en los lugares de trabajo, es de fecha:\n",
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
            "question": "264.  Se�ale la respuesta incorrecta. El Real Decreto 486/1997 no ser� aplicable a:\n",
            "correct_answer": " Las obras de construcci�n en general.\n",
            "incorrect_answers": [
                " Las obras de construcci�n temporales o m�viles.\n",
                " Los buques de pesca."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "265.  Seg�n el Real Decreto 486/1997, �qu� se entiende por lugares de trabajo?\n",
            "correct_answer": " Las �reas del centro de trabajo, edificadas o no, en las que los trabajadores deban\npermanecer o a las que puedan acceder en raz�n de su trabajo.\n",
            "incorrect_answers": [
                " Todas las �reas del centro de trabajo, edificadas o no, aunque los trabajadores no deban\npermanecer en ellas.\n",
                " Las �reas del centro de trabajo, no edificadas, en las que los trabajadores deban permanecer\no a las que puedan acceder en raz�n de su trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "266.  Para cumplir la normativa de seguridad en el lugar de trabajo, la anchura m�nima de\nlas puertas exteriores y de los pasillos ser� de:\n",
            "correct_answer": " 80 cent�metros y 1 metro, respectivamente.\n",
            "incorrect_answers": [
                " 70 cent�metros y 1 metro, respectivamente.\n",
                " 90 cent�metros y 1 metro, respectivamente."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "267.  Para cumplir la normativa de seguridad en el lugar de trabajo, las puertas correderas\ndeber�n ir provistas de un sistema de seguridad que les impida:\n",
            "correct_answer": " Salirse de los carriles y caer.\n",
            "incorrect_answers": [
                " Salir a los trabajadores.\n",
                " Ser utilizadas por los usuarios."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "268.  Para cumplir la normativa de seguridad en el lugar de trabajo, las puertas de\nemergencia:\n",
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
            "question": "269.  Seg�n las condiciones ambientales de los lugares de trabajo, el Real Decreto 486/1997\nindica que:\n",
            "correct_answer": " La temperatura de los locales donde se realicen trabajos ligeros estar� comprendida entre\n14 y 25 �C.\n",
            "incorrect_answers": [
                " La temperatura de los locales cerrados donde se realicen trabajos ligeros estar�\ncomprendida entre 17 y 27 �C.\n",
                " La humedad relativa estar� comprendida entre el 70 y el 90 por 100, excepto en los locales\ndonde existan riesgos por electricidad est�tica en los que el l�mite inferior ser� el 10 por 100."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "270.  Seg�n las condiciones ambientales de los lugares de trabajo, el Real Decreto 486/1997\nindica que:\n",
            "correct_answer": " En los locales donde exista riesgo de electricidad est�tica los limites inferiores de la\nhumedad relativa ser� del 50 por 100.\n",
            "incorrect_answers": [
                " En los locales donde exista riesgo de electricidad est�tica los limites inferiores de la\nhumedad relativa ser� del 30 por 100.\n",
                " En los locales donde exista riesgo de electricidad est�tica los limites inferiores de la\nhumedad relativa ser� del 70 por 100."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "271.  Seg�n las condiciones ambientales de los lugares de trabajo, el Real Decreto 486/1997\nindica que el sistema de ventilaci�n empleado y, en particular, la distribuci�n de las\nentradas de aire limpio y salidas de aire viciado, deber�n asegurar:\n",
            "correct_answer": " Una efectiva renovaci�n del aire del local de trabajo.\n",
            "incorrect_answers": [
                " Una compactaci�n del aire del local de trabajo.\n",
                " Una limitaci�n de temperatura."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "272.  �Cu�ndo deben existir lugares de descanso en los trabajos?\n",
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
            "question": "273.  �En qu� circunstancia debe de tener una empresa un local destinado a los primeros\nauxilios y otras posibles atenciones sanitarias?\n",
            "correct_answer": " En los lugares de trabajo de m�s de 25 trabajadores cuando as� lo determine la autoridad\nlaboral.",
            "incorrect_answers": [
                " En los lugares de trabajo de m�s de 50 trabajadores.\n",
                " En los lugares de trabajo de m�s de 40 trabajadores.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "274.  Seg�n lo establecido en el Real Decreto 486/1997, de 14 de abril, �en qu� situaciones\nse hace obligatorio proteger las aberturas en los suelos?\n",
            "correct_answer": " Siempre.\n",
            "incorrect_answers": [
                " Cuando no suponga riesgo de ca�da.\n",
                " Cuando el suelo sea estable y resbaladizo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "275.  Seg�n establece el Anexo IV del Real Decreto 486/1997, el nivel m�nimo de iluminaci�n\nen los puestos en los que las exigencias visuales de la tarea a realizar se consideran\nbajas, ser� de:\n",
            "correct_answer": " 100 lux.",
            "incorrect_answers": [
                " 500 lux.\n",
                " 200 lux.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "276.  Seg�n el anexo I del Real Decreto 486/1997, de 14 de abril, las barandillas ser�n de\nmateriales r�gidos, dispondr�n de una protecci�n que impida el paso o deslizamiento por\ndebajo de las mismas o la ca�da de objetos sobre personas y tendr�n una altura m�nima\nde:\n",
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
            "question": "277.  Seg�n el Real Decreto 486/1997, de 14 de abril, los lados cerrados de las escaleras\ntendr�n un pasamanos:\n",
            "correct_answer": " A una altura m�nima de 90 cent�metros, si la anchura de la escalera es mayor de 1.2 metros.",
            "incorrect_answers": [
                " A una altura m�nima de 80 cent�metros, si la anchura de la escalera es mayor de 1.2 metros.\n",
                " A una altura m�nima de 100 cent�metros, si la anchura de la escalera es mayor de 1.2 metros.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "278.  Seg�n el Anexo I del Real Decreto 486/1997, de 14 de abril, las escaleras que no sean\nde servicio tendr�n una anchura m�nima de:\n",
            "correct_answer": " 1 metros.\n",
            "incorrect_answers": [
                " 0,5 metros.\n",
                " 0,30 metros."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "279.  Seg�n el Anexo I del Real Decreto 486/1997, de 14 de abril, estar�n prohibidas las\npuertas espec�ficamente de emergencia que sean:\n",
            "correct_answer": " Correderas y giratorias.\n",
            "incorrect_answers": [
                " Abiertas hacia el exterior.\n",
                " Abiertas hacia el interior."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "280.  Seg�n el Anexo III del Real Decreto 486/1997, de 14 de abril, para las corrientes de aire\nexpresamente utilizadas para evitar el estr�s en exposiciones intensas al calor, y para las\ncorrientes de aire acondicionado, el l�mite, en el caso de trabajos sedentarios, ser� de:\n",
            "correct_answer": " 0,25 m/s.",
            "incorrect_answers": [
                " 0,15 m/s.\n",
                " 0,10 m/s.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "281.  Conforme dispone el Real Decreto 486/1997, de 14 de abril, la anchura m�nima de las\nescalas fijas ser� de:\n",
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
            "question": "282.  El Real Decreto 485/1997 sobre disposiciones m�nimas en materia de se�alizaci�n de\nseguridad y salud en el trabajo es de fecha:\n",
            "correct_answer": " 14 de abril.\n",
            "incorrect_answers": [
                " 14 de febrero.\n",
                " 14 de marzo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "283.  �A qu� hace referencia la definici�n: una se�al que proh�be un comportamiento\nsusceptible de provocar un peligro?\n",
            "correct_answer": " Se�al de prohibici�n.\n",
            "incorrect_answers": [
                " Se�al de obligaci�n.\n",
                " Se�al de advertencia."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "284.  �A qu� hace referencia la definici�n: un movimiento o disposici�n de los brazos o de\nlas manos en forma codificada para guiar a las personas que est�n realizando maniobras\nque constituyan un riesgo o peligro para los trabajadores?\n",
            "correct_answer": " Se�al gestual.\n",
            "incorrect_answers": [
                " Comunicaci�n gestual.\n",
                " Orden gestual."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "285.  �A qu� hace referencia la definici�n: una se�al que advierte de un riesgo o peligro?\n",
            "correct_answer": " Se�al de advertencia.\n",
            "incorrect_answers": [
                " Se�al indicativa.\n",
                " Se�al gestual."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "286.  �A qu� hace referencia la definici�n: una se�al que obliga a un comportamiento\ndeterminado?\n",
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
            "question": "287.  �A qu� hace referencia la definici�n: una se�al que proporciona indicaciones relativas\na las salidas de socorro, a los primeros auxilios o a los dispositivos de salvamento?\n",
            "correct_answer": " Se�al de salvamento o de socorro.\n",
            "incorrect_answers": [
                " Se�al de seguridad y salud en el trabajo.\n",
                " Se�al indicativa."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "288.  �A qu� hace referencia la definici�n: una se�al emitida por medio de un dispositivo\nformado por materiales transparentes o transl�cidos, iluminados desde atr�s o desde el\ninterior, de tal manera que aparezca por s� misma como una superficie luminosa?\n",
            "correct_answer": " Se�al luminosa.\n",
            "incorrect_answers": [
                " Se�al lum�nica.\n",
                " Se�al transl�cida."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "289.  �A qu� hace referencia la definici�n: una se�al sonora codificada, emitida y difundida\npor medio de un dispositivo apropiado, sin intervenci�n de voz humana o sint�tica?\n",
            "correct_answer": " Se�al ac�stica.",
            "incorrect_answers": [
                " Comunicaci�n verbal.\n",
                " Se�al verbal.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "290.  �A qu� hace referencia la definici�n: una se�alizaci�n que, referida a un objeto,\nactividad o situaci�n determinadas, proporcione una indicaci�n o una obligaci�n relativa\na la seguridad o la salud en el trabajo mediante una se�al en forma de panel, un color,\nuna se�al luminosa o ac�stica, una comunicaci�n verbal o una se�al gestual, seg�n\nproceda?\n",
            "correct_answer": " Se�alizaci�n de seguridad y salud en el trabajo.\n",
            "incorrect_answers": [
                " Se�al de advertencia.\n",
                " Se�al indicativa."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "291.  �A qu� hace referencia la definici�n: un mensaje verbal predeterminado, en el que se\nutiliza voz humana o sint�tica?\n",
            "correct_answer": " Comunicaci�n verbal.\n",
            "incorrect_answers": [
                " Advertencia verbal.\n",
                " Se�al verbal."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "292.  �A qu� hace referencia la definici�n: un color al que se atribuye una significaci�n\ndeterminada en relaci�n con la seguridad y salud en el trabajo?\n",
            "correct_answer": " Color de seguridad.\n",
            "incorrect_answers": [
                " Color de emergencia.\n",
                " Color de salvamento y socorro."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "293.  El Real Decreto 485/1997, establece las disposiciones m�nimas para:\n",
            "correct_answer": " La se�alizaci�n de seguridad y salud en el trabajo.",
            "incorrect_answers": [
                " La se�alizaci�n de carreteras y viales.\n",
                " La se�alizaci�n de seguridad y salud en el �mbito dom�stico.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "294.  �Qui�n debe adoptar las medidas precisas para que en los lugares de trabajo exista\nuna se�alizaci�n de seguridad y salud que cumpla lo establecido en los anexos I a VII del\nR.D. 485/1997?\n",
            "correct_answer": " El empresario.",
            "incorrect_answers": [
                " El trabajador.\n",
                " La inspecci�n de trabajo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "295.  Indica la respuesta incorrecta sobre el Real Decreto 485/1997:\n",
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
            "question": "296.  Seg�n el Anexo I del Real Decreto 485/1997, el color amarillo o amarillo anaranjado en\nlas se�ales indica:\n",
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
            "question": "297.  Seg�n el Anexo I del Real Decreto 485/1997, el color verde en las se�ales indica:\n",
            "correct_answer": " Se�al de salvamento de auxilio.\n",
            "incorrect_answers": [
                " Peligro-alarma.\n",
                " Se�al de advertencia."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "298.  Seg�n el Real Decreto 485/1997, cuando el color de fondo sobre el que tenga que\naplicarse el color de seguridad pueda dificultar la percepci�n de este �ltimo, se utilizar�\nun color de contraste que enmarque o se alterne con el de seguridad. Si el color de\nseguridad fuese rojo, �cu�l se utilizar� como contraste?\n",
            "correct_answer": " Blanco.\n",
            "incorrect_answers": [
                " Negro.\n",
                " Amarillo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "299.  Las se�ales de advertencia tendr�n forma:\n",
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
            "question": "300.  Las se�ales de prohibici�n tienen forma redonda y son:\n",
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
            "question": "301.  Los equipos de protecci�n contra incendios deber�n ser de color:\n",
            "correct_answer": " Rojo o predominante rojo.",
            "incorrect_answers": [
                " Naranja.\n",
                " Negro.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "302.  Se entiende por �combusti�n�:\n",
            "correct_answer": " Se entiende por �combusti�n� una reacci�n qu�mica de oxidaci�n-reducci�n fuertemente\nexot�rmica. Por lo tanto, exige la presencia de un material �oxidante� y de otro �reductor�.\n",
            "incorrect_answers": [
                " Se entiende por �combusti�n� una reacci�n qu�mica de oxidaci�n-reducci�n fuertemente\nexot�rmica. Por lo tanto, exige la presencia de un material �propagante� y de otro �ejecutor�.\n",
                " Se entiende por �combusti�n� una reacci�n qu�mica de oxidaci�n-reducci�n fuertemente\nexot�rmica. Por lo tanto, exige la presencia de un material �antioxidante� y de otro �refractor�."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "303.  La reacci�n qu�mica, seg�n la velocidad de propagaci�n del frente de las llamas,\npuede recibir diferentes nombres:\n",
            "correct_answer": " Combusti�n, para una velocidad inferior a 1 m por segundo, deflagraci�n, para una velocidad\nsuperior a 1 m por segundo y detonaci�n, para una velocidad superior a la del sonido.",
            "incorrect_answers": [
                " Combusti�n, para una velocidad inferior a 1 m por segundo, deflagraci�n, para una velocidad\nsuperior a 1 m por segundo y detonaci�n, para una velocidad superior a la de la luz.\n",
                " Combusti�n, para una velocidad inferior a 5 m por segundo, deflagraci�n, para una velocidad\nsuperior a 5 m por segundo y detonaci�n, para una velocidad superior a la de la luz.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "304.  Las formas de trasmisi�n del calor en un incendio son:\n",
            "correct_answer": " La conducci�n, la convecci�n, la radiaci�n y el contacto directo con part�culas\nincandescentes.\n",
            "incorrect_answers": [
                " La conducci�n, la contracci�n, la radiaci�n y el contacto indirecto con part�culas\nincandescentes.\n",
                " La conclusi�n, la convecci�n, la radiaci�n y el contacto directo con part�culas incandescentes."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "305.  Se entiende por resistencia al fuego de un elemento constructivo:\n",
            "correct_answer": " La capacidad que tiene de mantener, durante un periodo de tiempo, la estabilidad estructural\ny la estanqueidad o integridad al fuego frente a los humos y gases calientes derivados de la\ncombusti�n.",
            "incorrect_answers": [
                " La capacidad que tiene de mantener, durante un periodo de tiempo, la inestabilidad\nestructural y la estanqueidad o integridad al fuego frente a los humos y gases calientes\nderivados de la combusti�n.\n",
                " La capacidad que tiene de mantener, durante un periodo de tiempo, la estabilidad estructural\ny la estanqueidad o integridad f�sica frente a los humos y gases calientes derivados de la\ncombusti�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "306.  En el comportamiento ante el fuego de los materiales de construcci�n y elementos\nconstructivos, se define como integridad:\n",
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
            "question": "307.  Los sistemas de protecci�n pasiva:\n",
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
            "question": "308.  Dentro de los sistemas de protecci�n pasiva, podemos encontrar los siguientes:\n",
            "correct_answer": " La sectorizaci�n de incendios, los sistemas de lucha contra el humo, la se�alizaci�n y la\niluminaci�n de emergencia.\n",
            "incorrect_answers": [
                " La sectorizaci�n de incendios, los sistemas de lucha contra la emergencia, la se�alizaci�n y\nla iluminaci�n del humo.\n",
                " La divisi�n de incendios, los sistemas de lucha contra el fuego, la se�alizaci�n y la\niluminaci�n de general."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "309.  El conjunto de interrelacionados y ordenados que tienen por objeto percibir un\nfen�meno propio de un incendio y transmitir el aviso de su existencia al lugar afectado o\na otro lugar establecido para este fin, se conoce como:\n",
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
            "question": "310.  Entre los distintos elementos que forman el sistema de detecci�n y alarma se\nencuentran:\n",
            "correct_answer": " Detector, pulsador, dispositivo de alarma, equipo de control y se�alizaci�n y central de\nrecepci�n.",
            "incorrect_answers": [
                " Detector, pulsador, equipo de prevenci�n de riesgos, dispositivo de alarma y equipo de\ncontrol y se�alizaci�n.\n",
                " Detector, pulsador, equipo de prevenci�n de riesgos, dispositivo anal�gico de control y\nse�alizaci�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "311.  Los detectores de humo pueden ser de dos tipos:\n",
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
            "question": "312.  Existen dos tipos de detectores t�rmicos:\n",
            "correct_answer": " El est�tico y el termovelocim�trico.\n",
            "incorrect_answers": [
                " El din�mico y el est�tico.\n",
                " El din�mico y el termovelocim�trico."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "313.  En cuanto a los propios dispositivos de alarma de incendios, en edificios o\nestablecimientos en los que existan personas con discapacidad auditiva, personas que\ntengan que llevar protecci�n auditiva o donde el nivel del ruido supere los 60 dB(",
            "correct_answer": " Ac�sticos y visuales.",
            "incorrect_answers": [
                ", estos\ndispositivos de alarma ser�n:\na) Ac�sticos, visuales y t�ctiles.\n",
                " Visuales y t�ctiles.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "314.  El Reglamento de instalaciones de protecci�n contra incendios 513/2017 establece\nque su objeto es:\n",
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
            "question": "315.  El art�culo 1 del Reglamento de instalaciones de protecci�n contra incendios 513/2017\nviene a establecer que se aplicar�:\n",
            "correct_answer": " Con car�cter supletorio en aquellos aspectos relacionados con las instalaciones de\nprotecci�n activa contra incendios no regulados en las legislaciones espec�ficas, con la\nexcepci�n de los t�neles de carreteras del Estado.\n",
            "incorrect_answers": [
                " Sin car�cter supletorio en aquellos aspectos relacionados con las instalaciones de\nprotecci�n activa contra incendios no regulados en las legislaciones espec�ficas, con la\nexcepci�n de los t�neles de carreteras del Estado.\n",
                " Con car�cter supletorio en aquellos aspectos relacionados con las instalaciones de\nprotecci�n activa contra incendios no regulados en las legislaciones espec�ficas, incluido los\nt�neles de carreteras del Estado."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "316.  A efectos del Reglamento de instalaciones de protecci�n contra incendios 513/2017,\nse entiende por protecci�n activa contra incendios:\n",
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
            "question": "317.  El Real Decreto 513/2017, de 22 de mayo, por el que se aprueba el Reglamento de\ninstalaciones de protecci�n contra incendios, establece en su art�culo 19:\n",
            "correct_answer": " En los edificios a los que sea de aplicaci�n el C�digo T�cnico de la Edificaci�n, Documento\nB�sico �Seguridad en caso de incendio (SI)�, las instalaciones de protecci�n contra\nincendios se atendr�n a lo dispuesto en el mismo.\n",
            "incorrect_answers": [
                " En los edificios a los que sea de aplicaci�n el C�digo T�cnico de la Edificaci�n, Documento\nB�sico �Seguridad en caso de incendio (SI)�, las instalaciones de protecci�n contra\nincendios no se atendr�n a lo dispuesto en el mismo.\n",
                " En los edificios a los no sea de aplicaci�n el C�digo T�cnico de la Edificaci�n, Documento\nB�sico �Seguridad en caso de incendio (SI)�, las instalaciones de protecci�n contra\nincendios se atendr�n a lo dispuesto en el mismo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "318.  El Real Decreto 314/2006, de 17 de marzo, por el que aprueba el C�digo T�cnico de la\nEdificaci�n, establece las exigencias b�sicas de incendios en:\n",
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
            "question": "319.  De conformidad con lo dispuesto en el Real Decreto 314/2006, de 17 de marzo, por el\nque aprueba el C�digo T�cnico de la Edificaci�n, el objetivo del requisito b�sico de\nseguridad en caso de incendio:\n",
            "correct_answer": " Consiste en reducir a l�mites aceptables el riesgo de que los usuarios de un edificio sufran\nda�os derivados de un incendio de origen accidental, como consecuencia de las\nCaracter�sticas de su proyecto, construcci�n, uso y mantenimiento.\n",
            "incorrect_answers": [
                " Consiste en reducir a l�mites aceptables el riesgo de que los usuarios de un edificio sufran\nda�os derivados de un incendio provocado.\n",
                " Consiste en limitar el riesgo de propagaci�n del incendio por el exterior, tanto en el edificio\nconsiderado como a otros edificios."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "320.  De conformidad con lo dispuesto en el Real Decreto 314/2006, de 17 de marzo, por el\nque aprueba el C�digo T�cnico de la Edificaci�n, el Documento B�sico DB-SI especifica:\n",
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
            "question": "321.  Se entiende por extintor de incendios:\n",
            "correct_answer": " Un equipo que contiene un agente extintor, que puede proyectarse y dirigirse sobre un fuego,\npor la acci�n de una presi�n interna. Esta presi�n puede producirse por una compresi�n\nprevia permanente o mediante la liberaci�n de un gas auxiliar.\n",
            "incorrect_answers": [
                " Un equipo que contiene un agente extintor, que puede proyectarse y dirigirse sobre un fuego,\nsin la acci�n de una presi�n interna.\n",
                " Un equipo que contiene un agente inflamable, que puede proyectarse y dirigirse sobre un\nfuego, sin la acci�n de una presi�n interna."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "322.  Se entiende por plan de autoprotecci�n, seg�n el Real Decreto 398/2007, de 23 de\nmarzo, por el que se aprueba la Norma B�sica de Autoprotecci�n de los centros,\nestablecimientos y dependencias dedicados a actividades que puedan dar origen a\nsituaciones de emergencia:\n",
            "correct_answer": " El Plan de Autoprotecci�n es el documento que establece el marco org�nico y funcional\nprevisto para un centro, establecimiento, espacio, instalaci�n o dependencia, con el objeto\nde prevenir y controlar los riesgos sobre las personas y los bienes y dar respuesta adecuada\na las posibles situaciones de emergencia, en la zona bajo responsabilidad del titular de la\nactividad, garantizando la integraci�n de estas actuaciones con el sistema p�blico de\nprotecci�n civil.",
            "incorrect_answers": [
                " El Plan de Autoprotecci�n es en el que se prev� la organizaci�n de la respuesta ante\nsituaciones de emergencias clasificadas, las medidas de protecci�n e intervenci�n a adoptar,\ny los procedimientos y secuencia de actuaci�n para dar respuesta a las posibles\nemergencias.\n",
                " El Plan de Autoprotecci�n es el estudio e implantaci�n de las medidas necesarias y\nconvenientes para mantener bajo observaci�n, evitar o reducir las situaciones de riesgo\npotencial y da�os que pudieran derivarse. Las acciones preventivas deben establecerse\nantes de que se produzca la incidencia, emergencia, accidente o como consecuencia de la\nexperiencia adquirida tras el an�lisis de las mismas.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "323.  El contenido m�nimo del registro de establecimientos regulados por la Norma B�sica\nde Autoprotecci�n de los centros, establecimientos y dependencias, dedicados a\nactividades que puedan dar origen a situaciones de emergencia, en cuanto a los datos\nestructurales, pueden ser:\n",
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
            "question": "324.  Para evaluar la eficacia y operatividad de los planes de actuaci�n en emergencias\ndeben realizarse simulacros de emergencia, con la periodicidad m�nima fijada en el propio\nplan, el cual en todo deber� ser:\n",
            "correct_answer": " Al menos una vez al a�o.\n",
            "incorrect_answers": [
                " Al menos una vez cada dos a�os.\n",
                " Al menos dos veces al a�o."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "325.  El Plan de autoprotecci�n tendr� vigencia:\n\"",
            "correct_answer": " Indeterminada se mantendr� adecuadamente actualizado, y se revisar�, al menos, con una\"\nperiodicidad no superior a tres a�os.\n\"",
            "incorrect_answers": [
                " Indeterminada se mantendr� adecuadamente actualizado, y se revisar�, al menos, con una\"\nperiodicidad no superior a cinco a�os.\n\"",
                " Determinada se mantendr� adecuadamente actualizado, y se revisar�, al menos, con una\"\nperiodicidad no superior a un a�o."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "326.  Entre las acciones a desarrollar para el control inicial de las emergencias, deben\ndefinirse:\n",
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
            "question": "327.  Son procedimientos de actuaci�n ante emergencias entre otros:\n",
            "correct_answer": " Evacuaci�n y/o Confinamiento.",
            "incorrect_answers": [
                " Avistamiento y Alerta.\n",
                " Mecanismos de Apoyo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "328.  En el Plan de actuaci�n de Emergencias deben definirse las acciones a desarrollar\npara el control inicial de las emergencias, garantiz�ndose la alarma, la evacuaci�n y el\nsocorro. El Plan comprender�:\n",
            "correct_answer": " Identificaci�n y clasificaci�n de las emergencias, procedimientos de actuaci�n ante\nemergencias, identificaci�n y funciones de las personas y equipos que llevar�n a cabo los\nprocedimientos de actuaci�n en emergencias e identificaci�n del responsable de la puesta\nen marcha del Plan de Actuaci�n ante Emergencias.\n",
            "incorrect_answers": [
                " Identificaci�n y clasificaci�n de las emergencias, Procedimientos de actuaci�n ante\nemergencias, e identificaci�n del responsable de la puesta en marcha del Plan de Actuaci�n\nante Emergencias.\n",
                " Identificaci�n y clasificaci�n de las emergencias, Procedimientos de actuaci�n ante\nemergencias, Identificaci�n y funciones de las personas y equipos que llevar�n a cabo los\nprocedimientos de actuaci�n en emergencias."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "329.  Las emergencias se identifican y clasifican en:\n",
            "correct_answer": " En funci�n del tipo de riesgo, en funci�n de la gravedad y en funci�n de la ocupaci�n y\nmedios humanos.",
            "incorrect_answers": [
                " En funci�n del tipo de riesgo y en funci�n de la gravedad.\n",
                " En funci�n del tipo de riesgo y en funci�n de la ocupaci�n y medios humanos.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "330.  �A qu� hace referencia la definici�n: capacidad total de p�blico en un recinto o edificio\ndestinado a espect�culos p�blicos o actividades recreativas?\n",
            "correct_answer": " Aforo.\n",
            "incorrect_answers": [
                " Actividad.\n",
                " Alarma."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "331.  �A qu� hace referencia la definici�n: situaci�n declarada con el fin de tomar\nprecauciones espec�ficas debido a la probable y cercana ocurrencia de un suceso o\naccidente?\n",
            "correct_answer": " Alerta.\n",
            "incorrect_answers": [
                " Alarma.\n",
                " Actividad."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "332.  �A qu� hace referencia la definici�n: aviso o se�al por la que se informa a las personas\npara que sigan instrucciones espec�ficas ante una situaci�n de emergencia?\n",
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
            "question": "333.  Se define autoprotecci�n como:\n",
            "correct_answer": " Sistema de acciones y medidas, adoptadas por los titulares de las actividades, p�blicas o\nprivadas, con sus propios medios y recursos, dentro de su �mbito de competencias,\nencaminadas a prevenir y controlar los riesgos sobre las personas y los bienes, a dar\nrespuesta adecuada a las posibles situaciones de emergencia y a garantizar la integraci�n\nde estas actuaciones en el sistema p�blico de protecci�n civil.",
            "incorrect_answers": [
                " Aviso o se�al por la que se informa a las personas para que sigan instrucciones espec�ficas\nante una situaci�n de emergencia.\n",
                " La diferencia de cota entre el nivel de un origen de evacuaci�n y el del espacio exterior\nseguro.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "334.  En un plan de emergencias, cuando nos referimos a la acci�n de traslado planificado\nde las personas, afectadas por una emergencia, de un lugar a otro provisional seguro,\nnos estamos refiriendo a:\n",
            "correct_answer": " Evacuaci�n.\n",
            "incorrect_answers": [
                " Intervenci�n.\n",
                " Alerta."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "335.  Se define como Efecto Domin�:\n",
            "correct_answer": " La concatenaci�n de efectos causantes de riesgo que multiplican las consecuencias, debido\na que los fen�menos peligrosos pueden afectar, adem�s de los elementos vulnerables\nexteriores, otros recipientes, tuber�as, equipos o instalaciones del mismo establecimiento o\nde otros pr�ximos, de tal manera que a su vez provoquen nuevos fen�menos peligrosos.\n",
            "incorrect_answers": [
                " Consiste en la respuesta a la emergencia, para proteger y socorrer a las personas y los\nbienes. Medios: Conjunto de personas, m�quinas, equipos y sistemas que sirven para\nreducir o eliminar riesgos y controlar las emergencias que se puedan generar.\n",
                " Acci�n de traslado planificado de las personas, afectadas por una emergencia, de un lugar\na otro provisional seguro."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "336.  El documento perteneciente al plan de autoprotecci�n en el que se prev� la\norganizaci�n de la respuesta ante situaciones de emergencias clasificadas, las medidas\nde protecci�n e intervenci�n a adoptar, y los procedimientos y secuencia de actuaci�n\npara dar respuesta a las posibles emergencias:\n",
            "correct_answer": " Plan de actuaci�n de emergencias.\n",
            "incorrect_answers": [
                " Plan de Autoprotecci�n.\n",
                " Plan de Prevenci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "337.  Las obligaciones de los titulares de las actividades del Anexo I de la Norma B�sica de\nautoprotecci�n de los centros, establecimientos y dependencias dedicados a actividades\nque puedan dar origen a situaciones de emergencia, ser�n entre otros:\n",
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
            "question": "338.  El plan de Autoprotecci�n habr� de estar redactado y firmado por:\n",
            "correct_answer": " El t�cnico competente capacitado para dictaminar sobre aquellos aspectos relacionados con\nla autoprotecci�n.\n",
            "incorrect_answers": [
                " La autoridad competente capacitada para dictaminar sobre aquellos aspectos relacionados\ncon la autoprotecci�n.\n",
                " El Director General de Seguridad y Emergencias."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "339.  Son criterios m�nimos para la elaboraci�n del plan de autoprotecci�n:\n",
            "correct_answer": " Se designar�, por parte del titular de la actividad, una persona como responsable �nica para\nla gesti�n de las actuaciones encaminadas a la prevenci�n y el control de riesgos.\n",
            "incorrect_answers": [
                " Se establecer� una estructura desorganizada y no jerarquizada, dentro de la organizaci�n y\npersonal existente, fijando las funciones y responsabilidades de todos sus miembros en\nsituaciones de emergencia.\n",
                " Se designar�, por parte del titular de la actividad, una o varias personas como responsable\npara la gesti�n de las actuaciones encaminadas a la prevenci�n y el control de riesgos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "340.  �Qui�n ser� responsable de activar el plan de Actuaci�n de Emergencias de acuerdo\ncon lo establecido en el mismo, declarando la correspondiente situaci�n de emergencia,\nnotificando a las autoridades competentes de Protecci�n Civil, informando al personal, y\nadoptando las acciones inmediatas para reducir las consecuencias del accidente o\nsuceso?\n",
            "correct_answer": " El director del Plan de Actuaci�n en Emergencias.\n",
            "incorrect_answers": [
                " El t�cnico competente capacitado para dictaminar sobre aquellos aspectos relacionados con\nla autoprotecci�n.\n",
                " El Secretario General de Emergencias."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "341.  Los simulacros de emergencias se realizar�n:\n",
            "correct_answer": " Para evaluar los planes de autoprotecci�n y asegurar la eficacia y operatividad de los planes\nde actuaci�n en emergencias con la periodicidad m�nima que fije el propio plan, y en todo\ncaso, al menos una vez al a�o evaluando sus resultados.\n",
            "incorrect_answers": [
                " Para evaluar los planes de autoprotecci�n y asegurar la eficacia y operatividad de los planes\nde actuaci�n en emergencias con la periodicidad m�nima que fije el el empresario, y en todo\ncaso, al menos dos veces al a�o evaluando sus resultados.\n",
                " Para evaluar los planes de autoprotecci�n con la periodicidad m�nima que fije el propio plan,\ny en todo caso, al menos tres veces al a�o evaluando sus resultados."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "342.  De conformidad al Real Decreto 286/2006, de 10 de marzo, la medici�n del ruido deber�\nrealizarse:\n",
            "correct_answer": " Siempre que sea posible, en ausencia del trabajador afectado, colocando el micr�fono a la\naltura donde se encontrar�a su o�do. Si la presencia del trabajador es necesaria, el micr�fono\n\"se colocar�, preferentemente, frente a su o�do, a unos 10 cent�metros de distancia cuando\"\nel micr�fono tenga que situarse muy cerca del cuerpo deber�n efectuarse los ajustes\nadecuados para que el resultado de la medici�n sea equivalente al que se obtendr�a si se\nrealizara en un campo sonoro no perturbado.\n",
            "incorrect_answers": [
                " Siempre que sea posible, en presencia del trabajador afectado, colocando el micr�fono a la\naltura donde se encontrar�a su o�do. Si la presencia del trabajador es posible, el micr�fono\n\"se colocar�, preferentemente, frente a su o�do, a unos 20 cent�metros de distancia cuando\"\nel micr�fono tenga que situarse muy cerca del cuerpo deber�n efectuarse los ajustes\nadecuados para que el resultado de la medici�n sea equivalente al que se obtendr�a si se\nrealizara en un campo sonoro no perturbado.\n",
                " Obligatoriamente, en ausencia del trabajador afectado, colocando el micr�fono a la altura\ndonde se encontrar�a su o�do. Si la presencia del trabajador es imposible, el micr�fono se\ncolocar�, preferentemente, a trav�s de medios electr�nicos frente a su dispositivo, a unos\n\"30 cent�metros de distancia cuando el micr�fono tenga que situarse muy cerca del cuerpo\"\ndeber�n efectuarse los ajustes adecuados para que el resultado de la medici�n sea\nequivalente al que se obtendr�a si se realizara en un campo sonoro no perturbado."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "343.  El n�mero, la duraci�n y el momento de realizaci�n de las mediciones, conforme al\nReal Decreto 286/2006, de 10 de marzo:\n",
            "correct_answer": " Tendr�n que elegirse teniendo en cuenta que el objetivo b�sico de �stas es el de posibilitar\nla toma de decisi�n sobre el tipo de actuaci�n preventiva que deber� emprenderse en virtud\nde lo dispuesto en el Real Decreto 286/2006. Por ello, cuando uno de los l�mites o niveles\nestablecidos en el mismo se sit�e dentro del intervalo de incertidumbre del resultado de la\nmedici�n podr� optarse: a) por suponer que se supera dicho l�mite o nivel, o ",
            "incorrect_answers": [
                " por\nincrementar (seg�n el instrumental utilizado) el n�mero de las mediciones (tratando\nestad�sticamente los correspondientes resultados) y/o su duraci�n (llegando, en el l�mite, a\nque el tiempo de medici�n coincida con el de exposici�n), hasta conseguir la necesaria\nreducci�n del intervalo de incertidumbre correspondiente.\nb) Tendr�n que elegirse teniendo en cuenta que el objetivo b�sico de �stas es el de posibilitar\nla toma de decisi�n sobre el tipo de actuaci�n preventiva que deber� emprenderse en virtud\nde lo dispuesto en el Real Decreto 286/2006. Por ello, cuando uno de los l�mites o niveles\nestablecidos en el mismo se sit�e dentro del intervalo de incertidumbre del resultado de la\nmedici�n podr� optarse: a) por suponer que se supera dicho l�mite o nivel, o b) por\nincrementar (seg�n el instrumental utilizado) el n�mero de las mediciones (tratando\nestad�sticamente los correspondientes resultados) pero no su duraci�n (llegando, en el l�mite,\na que el tiempo de medici�n coincida con el de exposici�n), hasta conseguir la necesaria\nreducci�n del intervalo de incertidumbre correspondiente.\n",
                " Tendr�n que elegirse teniendo en cuenta que el objetivo b�sico de �stas es el de posibilitar\nla toma de decisi�n sobre el tipo de actuaci�n preventiva que deber� emprenderse en virtud\nde lo dispuesto en el Real Decreto 286/2006. Por ello, cuando uno de los l�mites o niveles\nestablecidos en el mismo se sit�e dentro del intervalo de incertidumbre del resultado de la\nmedici�n podr� optarse: a) por suponer que no se supera dicho l�mite o nivel, o b) por no\nincrementar (seg�n el instrumental utilizado) el n�mero de las mediciones (tratando\nestad�sticamente los correspondientes resultados) y/o su duraci�n (llegando, en el l�mite, a\nque el tiempo de medici�n coincida con el de exposici�n), hasta conseguir la necesaria\nreducci�n del intervalo de incertidumbre correspondiente."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "344.  Conforme al Real Decreto 286/2006, de 10 de marzo, respecto a los Instrumentos de\nmedici�n y condiciones de aplicaci�n, establece que los son�metros (no integradorespromediadores):\n",
            "correct_answer": " Podr�n emplearse �nicamente para la medici�n de Nivel de presi�n ac�stica ponderado A\n(LpA) del ruido estable. La lectura promedio se considerar� igual al Nivel de presi�n ac�stica\ncontinuo equivalente ponderado A (LAeq,T) de dicho ruido.\n",
            "incorrect_answers": [
                " Podr�n emplearse para la medici�n del Nivel de presi�n ac�stica continuo equivalente\nponderado A (LAeq,T) de cualquier tipo de ruido.\n",
                " No podr�n emplearse para la medici�n de Nivel de presi�n ac�stica ponderado A (LpA) del\nruido estable. La lectura promedio se considerar� igual al Nivel de presi�n ac�stica continuo\nequivalente ponderado A (LAeq,T) de dicho ruido."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "345.  El Real Decreto 1311/2005, de 4 de noviembre, sobre la protecci�n de la salud y la\nseguridad de los trabajadores frente a los riesgos derivados o que puedan derivarse de\nla exposici�n a vibraciones mec�nicas, define la vibraci�n mec�nica que, cuando se\ntransmite al sistema humano de mano y brazo, supone riesgos para la salud y la\nseguridad de los trabajadores, en particular, problemas vasculares, de huesos o de\narticulaciones, nerviosos o musculares, como:\n",
            "correct_answer": " Vibraci�n transmitida al sistema mano-brazo.\n",
            "incorrect_answers": [
                " Vibraci�n transmitida al sistema mano-cabeza.\n",
                " Vibraci�n transmitida al sistema mano-piernas."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "346.  El Real Decreto 1311/2005, de 4 de noviembre, sobre la protecci�n de la salud y la\nseguridad de los trabajadores frente a los riesgos derivados o que puedan derivarse de\nla exposici�n a vibraciones mec�nicas, define la vibraci�n mec�nica que, cuando se\ntransmite a todo el cuerpo, conlleva riesgos para la salud y la seguridad de los\ntrabajadores, en particular, lumbalgias y lesiones de la columna vertebral:\n",
            "correct_answer": " Vibraci�n transmitida al sistema cuerpo entero.\n",
            "incorrect_answers": [
                " Vibraci�n transmitida al sistema mano-cabeza.\n",
                " Vibraci�n transmitida al sistema mano-piernas."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "347.  De acuerdo con el Real Decreto 1311/2005, de 4 de noviembre, sobre la protecci�n de\nla salud y la seguridad de los trabajadores frente a los riesgos derivados o que puedan\nderivarse de la exposici�n a vibraciones mec�nicas, para la vibraci�n transmitida al\nsistema mano-brazo el valor l�mite de exposici�n diaria normalizado para un per�odo de\nreferencia de ocho horas, se fija en:\n",
            "correct_answer": " 5m/s2",
            "incorrect_answers": [
                " 8m/s2.\n",
                " 10m/s2.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "348.  De acuerdo con el Real Decreto 1311/2005, de 4 de noviembre, sobre la protecci�n de\nla salud y la seguridad de los trabajadores frente a los riesgos derivados o que puedan\nderivarse de la exposici�n a vibraciones mec�nicas, para la vibraci�n transmitida al\nsistema mano-brazo el valor de exposici�n diaria normalizado para un per�odo de\nreferencia de ocho horas que da lugar a una acci�n, se fija en:\n",
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
            "question": "349.  De acuerdo con el Real Decreto 1311/2005, de 4 de noviembre, sobre la protecci�n de\nla salud y la seguridad de los trabajadores frente a los riesgos derivados o que puedan\nderivarse de la exposici�n a vibraciones mec�nica, para la vibraci�n transmitida al\nsistema cuerpo entero el valor l�mite de exposici�n diaria normalizado para un per�odo de\nreferencia de ocho horas, se fija en:\n",
            "correct_answer": " 1,15 m2/s\n",
            "incorrect_answers": [
                " 8m/s2\n",
                " 5m/s2"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "350.  De acuerdo con el Real Decreto 1311/2005, de 4 de noviembre, sobre la protecci�n de\nla salud y la seguridad de los trabajadores frente a los riesgos derivados o que puedan\nderivarse de la exposici�n a vibraciones mec�nica, para la vibraci�n transmitida al\nsistema cuerpo entero, el valor de exposici�n diaria normalizado para un per�odo de\nreferencia de ocho horas, se fija en:\n",
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
            "question": "351.  Todas las exposiciones a radiaciones ionizantes se encuentran en alguna de las\nsituaciones siguientes:\n",
            "correct_answer": " Situaciones de exposici�n de existente.",
            "incorrect_answers": [
                " Situaciones de exposici�n programada.\n",
                " Situaciones de exposici�n de emergente.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "352.  De conformidad con el Real Decreto 1029/2022, de 20 de diciembre, por el que se\naprueba el Reglamento sobre protecci�n de la salud contra los riesgos derivados de la\nexposici�n a las radiaciones ionizantes, las situaciones de exposici�n planificada son:\n",
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
            "question": "353.  De conformidad con el Real Decreto 1029/2022, de 20 de diciembre, por el que se\naprueba el Reglamento sobre protecci�n de la salud contra los riesgos derivados de la\nexposici�n a las radiaciones ionizantes, aquellas situaciones debidas a una emergencia\nnuclear o radiol�gica son:\n",
            "correct_answer": " Situaciones de exposici�n de emergencia.",
            "incorrect_answers": [
                " Situaciones de exposici�n planificada.\n",
                " Situaciones de exposici�n existente.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "354.  En particular, el Real Decreto 1029/2022, de 20 de diciembre, por el que se aprueba el\nReglamento sobre protecci�n de la salud contra los riesgos derivados de la exposici�n a\nlas radiaciones ionizantes, se aplicar� a:\n",
            "correct_answer": " Todas las situaciones de exposici�n planificada que conlleven una exposici�n a las\nradiaciones ionizantes.\n",
            "incorrect_answers": [
                " La exposici�n de miembros del p�blico, o de trabajadores que no formen parte de la\ntripulaci�n de aeronaves o de veh�culos espaciales, a la radiaci�n c�smica durante el vuelo\no en el espacio.\n",
                " Los radionucleidos contenidos naturalmente en el cuerpo humano, los rayos c�smicos a\nnivel del suelo, y la exposici�n en la superficie de la tierra debida a los radionucleidos\npresentes en la corteza terrestre no alterada."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "355.  A los efectos de aplicaci�n del Reglamento sobre protecci�n de la salud contra los\nriesgos derivados de la exposici�n a las radiaciones ionizantes, se entender� por\nefluentes radiactivos:\n",
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
            "question": "356.  A los efectos de aplicaci�n del Reglamento sobre protecci�n de la salud contra los\nriesgos derivados de la exposici�n a las radiaciones ionizantes, se entender� como\nFondo radiactivo natural a:\n",
            "correct_answer": " Conjunto de radiaciones ionizantes que provienen de fuentes naturales terrestres o\nc�smicas.\n",
            "incorrect_answers": [
                " Entidad que puede causar una exposici�n, por ejemplo, por emitir radiaci�n ionizante o por\nliberar material radiactivo.\n",
                " Fuente de radiaci�n que contiene material radiactivo a fin de aprovechar su radiactividad."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "357.  A los efectos de aplicaci�n del Reglamento sobre protecci�n de la salud contra los\nriesgos derivados de la exposici�n a las radiaciones ionizantes, el material que contiene\nradionucleidos de origen natural en concentraciones superiores a los niveles de exenci�n\nestablecidos en la reglamentaci�n vigente, excluidos aquellos materiales que se\nprocesen, utilicen o aprovechen en raz�n de sus propiedades f�siles o radiactivas, se\nconoce como:\n",
            "correct_answer": " Material NORM.\n",
            "incorrect_answers": [
                " Material ROM.\n",
                " Material MARN."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "358.  �Por cu�les dos fuentes de calor est� regido el balance t�rmico?\n",
            "correct_answer": " El propio organismo del ser humano y por el entorno exterior.\n",
            "incorrect_answers": [
                " El entorno exterior y el entorno interior.\n",
                " El entorno exterior y el entorno espacial."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "359.  Existen dos tipos de mecanismos termorreguladores:\n",
            "correct_answer": " El comportamental y modificar la actividad f�sica.",
            "incorrect_answers": [
                " El comportamental y modificar la actividad ps�quica.\n",
                " El temperamental y el espacial.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "360.  �Qu� efectos pueden aparecer en ambientes calurosos?\n",
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
            "question": "361.  Seg�n el Real Decreto 665/1997, de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes cancer�genos\ndurante el trabajo, �qu� se entender� por agente cancer�geno o mut�geno?\n",
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
            "question": "362.  Seg�n el Real Decreto 665/1997 de 12 de mayo, sobre la protecci�n de los trabajadores\ncontra los riesgos relacionados con la exposici�n a agentes cancer�genos durante el\ntrabajo, se entender� por valor l�mite:\n",
            "correct_answer": " Salvo que se especifique lo contrario, el l�mite de la media ponderada en el tiempo de la\nconcentraci�n de un agente cancer�geno o mut�geno en el aire dentro de la zona en que\nrespira el trabajador, en relaci�n con un per�odo de referencia espec�fico, tal como se\nestablece en el anexo III de dicho real decreto.\n",
            "incorrect_answers": [
                " Salvo que se especifique lo contrario, el l�mite de la media ponderada en el tiempo de la\nconcentraci�n de un agente cancer�geno o mut�geno en el aire fuera de la zona en que\nrespira el trabajador, en relaci�n con un per�odo de referencia espec�fico, tal como se\nestablece en el anexo III de dicho real decreto.\n",
                " Los posibles efectos sobre la seguridad o la salud de los trabajadores especialmente\nsensibles a estos riesgos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "363.  De acuerdo con el Real Decreto 665/1997, de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes cancer�genos\ndurante el trabajo, en el caso de que no sea posible t�cnicamente la sustituci�n del agente\ncancer�geno o mut�geno:\n",
            "correct_answer": " El empresario garantizar� que la producci�n y utilizaci�n del mismo se lleven a cabo en un\nsistema cerrado.\n",
            "incorrect_answers": [
                " El empresario garantizar� que la producci�n y utilizaci�n del mismo se lleven a cabo en un\nsistema abierto.\n",
                " El empresario garantizar� que la producci�n y utilizaci�n del mismo se lleven a cabo en un\nsistema protegido."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "364.  De acuerdo con el Real Decreto 665/1997 de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes cancer�genos\ndurante el trabajo, cada vez que se utilicen agentes cancer�genos, el empresario aplicar�\nlas medidas siguientes:\n",
            "correct_answer": " Limitar las cantidades del agente cancer�geno o mut�geno en el lugar de trabajo.\n",
            "incorrect_answers": [
                " Evacuar los agentes cancer�genos en origen, y en destino mediante extracci�n localizada o,\ncuando ello no sea t�cnicamente posible, por ventilaci�n particular, en condiciones que\nsupongan un riesgo para la salud p�blica y el medio ambiente.\n",
                " Limitar al mayor n�mero posible los trabajadores expuestos o que puedan estarlo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "365.  De acuerdo con el Real Decreto 665/1997, de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes cancer�genos\ndurante el trabajo, entre las medidas necesarias que el empresario debe adoptar, en toda\nactividad que exista un riesgo de contaminaci�n por agentes cancer�genos o mut�genos,\nest�n:\n",
            "correct_answer": " Disponer de un lugar determinado para el almacenamiento adecuado de los equipos de\nprotecci�n y verificar que se limpian y se comprueba su buen funcionamiento, si fuera posible\ncon anterioridad y, en todo caso, despu�s de cada utilizaci�n, reparando o sustituyendo los\nequipos defectuosos antes de un nuevo uso.",
            "incorrect_answers": [
                " Permitir que los trabajadores coman, beban o fumen en cualquier zona de trabajo en las que\nexista dicho riesgo.\n",
                " Disponer de lugares separados para guardar de manera conjunta las ropas de trabajo o de\nprotecci�n y las ropas de vestir, para evitar riesgos de contaminaci�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "366.  De acuerdo con el Real Decreto 665/1997, de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes cancer�genos\ndurante el trabajo, en caso de accidentes o de situaciones imprevistas que pudieran\nsuponer una exposici�n anormal de los trabajadores, el empresario informar� de ello lo\nantes posible a los mismos y adoptar�, en tanto no se hayan eliminado las causas que\nprodujeron la exposici�n anormal, las medidas necesarias para:\n",
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
            "question": "367.  De conformidad con lo dispuesto en el art�culo 8 relativo a la vigilancia de la salud de\nlos trabajadores del Real Decreto 665/1997, de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes cancer�genos\ndurante el trabajo:\n",
            "correct_answer": " El empresario deber� revisar la evaluaci�n y las medidas de prevenci�n y de protecci�n\ncolectivas e individuales adoptadas cuando se hayan detectado alteraciones de la salud de\nlos trabajadores que puedan deberse a la exposici�n a agentes cancer�genos o mut�genos\no cuando el resultado de los controles peri�dicos, incluidos los relativos a la vigilancia de la\nsalud, ponga de manifiesto la posible inadecuaci�n o insuficiencia de las mismas.",
            "incorrect_answers": [
                " Los trabajadores tendr�n que solicitar la revisi�n de los resultados de la vigilancia de su\nsalud.\n",
                " Deber� llevarse un historial m�dico individual y colectivo, tanto de los trabajadores afectados,\ncomo los que no lo est�n.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "368.  De conformidad con el Real Decreto 665/1997, de 12 de mayo, sobre la protecci�n de\nlos trabajadores contra los riesgos relacionados con la exposici�n a agentes\ncancer�genos durante el trabajo, el empresario deber� suministrar a las autoridades\nlaborales y sanitarias, cuando �stas lo soliciten, la informaci�n adecuada sobre:\n",
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
            "question": "369.  El Real Decreto 374/2001, sobre la protecci�n de la salud y seguridad de los\ntrabajadores contra los riesgos relacionados con los agentes qu�micos durante el trabajo,\ntiene como objeto:\n",
            "correct_answer": " Establecer las disposiciones m�nimas para la protecci�n de los trabajadores contra los\nriesgos derivados o que puedan derivarse de la presencia de agentes qu�micos en el lugar\nde trabajo o de cualquier actividad con agentes qu�micos.\n",
            "incorrect_answers": [
                " Establecer las disposiciones m�ximas para la protecci�n de los trabajadores contra los\nriesgos derivados o que puedan derivarse de la presencia de agentes qu�micos en el lugar\nde trabajo o de cualquier actividad con agentes qu�micos.\n",
                " Establecer las disposiciones m�nimas para la protecci�n de los trabajadores contra los\nriesgos derivados o que puedan derivarse de la presencia de agentes qu�micos, f�sicos o\ngaseosos en el lugar de trabajo o de cualquier actividad con agentes qu�micos."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "370.  A efectos del Real Decreto 374/2001 sobre la protecci�n de la salud y seguridad de los\ntrabajadores contra los riesgos relacionados con los agentes qu�micos durante el trabajo,\nse entiende como agente qu�mico:\n",
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
            "question": "371.  A efectos del Real Decreto 374/2001, sobre la protecci�n de la salud y seguridad de\nlos trabajadores contra los riesgos relacionados con los agentes qu�micos durante el\ntrabajo, se entiende como exposici�n a un agente qu�mico:\n",
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
            "question": "372.  A efectos del Real Decreto 374/2001, sobre la protecci�n de la salud y seguridad de\nlos trabajadores contra los riesgos relacionados con los agentes qu�micos durante el\ntrabajo, �a qu� hace referencia la definici�n: la capacidad intr�nseca de un agente qu�mico\npara causar da�o?\n",
            "correct_answer": " Peligro.",
            "incorrect_answers": [
                " Peligro inminente.\n",
                " Riesgo.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "373.  A efectos del Real Decreto 374/2001, sobre la protecci�n de la salud y seguridad de\nlos trabajadores contra los riesgos relacionados con los agentes qu�micos durante el\ntrabajo, �a qu� hace referencia esta definici�n: agente qu�mico que puede representar un\nriesgo para la seguridad y salud de los trabajadores debido a sus propiedades\nfisicoqu�micas, qu�micas o toxicol�gicas y a la forma en que se utiliza o se halla presente\nen el lugar de trabajo?\n",
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
            "question": "374.  A efectos del Real Decreto 374/2001 sobre la protecci�n de la salud y seguridad de los\ntrabajadores contra los riesgos relacionados con los agentes qu�micos durante el trabajo,\n�a qu� hace referencia la definici�n: el l�mite de la concentraci�n, en el medio biol�gico\nadecuado, del agente qu�mico o de uno de sus metabolitos o de otro indicador biol�gico\ndirecta o indirectamente relacionado con los efectos de la exposici�n del trabajador al\nagente en cuesti�n?\n",
            "correct_answer": " Valor l�mite biol�gico.\n",
            "incorrect_answers": [
                " Valor l�mite ambiental.\n",
                " Valor l�mite ambiental para la exposici�n diaria."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "375.  A efectos del Real Decreto 374/2001 sobre la protecci�n de la salud y seguridad de los\ntrabajadores contra los riesgos relacionados con los agentes qu�micos durante el trabajo,\nel valor l�mite de la concentraci�n media, medida o calculada de forma ponderada con\nrespecto al tiempo para la jornada laboral real y referida a una jornada est�ndar de ocho\nhoras diarias, se entiende por:\n",
            "correct_answer": " Valor l�mite ambiental para la exposici�n diaria.\n",
            "incorrect_answers": [
                " Valor l�mite ambiental para la exposici�n horaria.\n",
                " Valor l�mite ambiental para exposiciones de corta duraci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "376.  A efectos del Real Decreto 664/1997, de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes biol�gicos\ndurante el trabajo, se entender� por Agentes biol�gico del grupo 1, a:\n",
            "correct_answer": " Aquel que resulta poco probable que cause una enfermedad en el hombre.\n",
            "incorrect_answers": [
                " Aquel que puede causar una enfermedad en el hombre y puede suponer un peligro para los\ntrabajadores, siendo poco probable que se propague a la colectividad y existiendo\ngeneralmente profilaxis o tratamiento eficaz.\n",
                " Aquel que puede causar una enfermedad grave en el hombre y presenta un serio peligro\npara los trabajadores, con riesgo de que se propague a la colectividad y existiendo\ngeneralmente una profilaxis o tratamiento eficaz."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "377.  A efectos del Real Decreto 664/1997, de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes biol�gicos\ndurante el trabajo, se entender� por Agente biol�gico del grupo 4, a:\n",
            "correct_answer": " Aquel que causando una enfermedad grave en el hombre supone un serio peligro para los\ntrabajadores, con muchas probabilidades de que se propague a la colectividad y sin que\nexista generalmente una profilaxis o un tratamiento eficaz.\n",
            "incorrect_answers": [
                " Aquel que puede causar una enfermedad grave en el hombre y presenta un serio peligro\npara los trabajadores, con riesgo de que se propague a la colectividad y existiendo\ngeneralmente una profilaxis o tratamiento eficaz.\n",
                " Aquel que resulta poco probable que cause una enfermedad en el hombre."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "378.  A efectos del Real Decreto 664/1997, de 12 de mayo, sobre la protecci�n de los\ntrabajadores contra los riesgos relacionados con la exposici�n a agentes biol�gicos\ndurante el trabajo, �a qu� hace referencia la definici�n: aqu�l que puede causar una\nenfermedad en el hombre y puede suponer un peligro para los trabajadores, �siendo poco\nprobable que se propague a la colectividad y existiendo generalmente profilaxis o\ntratamiento eficaz?\n",
            "correct_answer": " Agente biol�gico del grupo 2.\n",
            "incorrect_answers": [
                " Agente biol�gico del grupo 1.\n",
                " Agente biol�gico del grupo 3."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "379.  De conformidad con el Real Decreto 664/1997, de 12 de mayo, sobre la protecci�n de\nlos trabajadores contra los riesgos relacionados con la exposici�n a agentes biol�gicos\ndurante el trabajo, de los siguientes, es un agente biol�gico clasificado en el grupo 2:\n",
            "correct_answer": " Bacteroides fragilis.\n",
            "incorrect_answers": [
                " Mycobacterium pinnipedii.\n",
                " Orientia tsutsugamushi (Rickettsia tsutsugamushi)."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "380.  Seg�n dispone el RD 664/1997, sobre la protecci�n de los trabajadores contra los\nriesgos relacionados con la exposici�n a agentes biol�gicos durante el trabajo, cuando\nla evaluaci�n a que se refiriere el art�culo 4 de dicho Real Decreto, demuestre la existencia\nde un riesgo para la seguridad y salud de los trabajadores, por exposici�n a agentes\nbiol�gicos contra los que existan vacunas eficaces, el empresario:\n",
            "correct_answer": " Deber� ofrecer dicha vacunaci�n.",
            "incorrect_answers": [
                " Deber� obligar a la vacunaci�n.\n",
                " Deber� informar a las autoridades.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "381.  La fatiga cr�nica:\n",
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
            "question": "382.  Los s�ntomas de la fatiga cr�nica, que se mantienen permanentes a�n despu�s de\nhaber finalizado el trabajo, son:\n",
            "correct_answer": " Alteraciones psicosom�ticas, inestabilidad emocional, astenia y alteraciones del sue�o.\n",
            "incorrect_answers": [
                " Estabilidad emocional.\n",
                " Reducci�n de la actividad."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "383.  La fatiga mental:\n",
            "correct_answer": " Es un fen�meno acumulativo, su aparici�n suele coincidir y ser proporcional a la carga de\ntrabajo tambi�n, puede actuar como causa de la misma.",
            "incorrect_answers": [
                " Es un fen�meno aislado, su aparici�n suele coincidir y ser proporcional a la carga de trabajo\ntambi�n, puede actuar como causa de la misma.\n",
                " El estado de fatiga aumenta la eficiencia del trabajador, haciendo que las mismas exigencias\nsupongan una carga menor para �l, incluso en situaciones en que la carga de trabajo es\npeque�a.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "384.  �Por qu� factores puede estar determinada la infra carga?\n",
            "correct_answer": " Trabajo con pocas exigencias.\n",
            "incorrect_answers": [
                " Trabajo con muchas exigencias.\n",
                " Puesto con mucho contenido de trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "385.  La sobrecarga mental puede ser debida a:\n",
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
            "question": "386.  Se entiende por carga mental:\n",
            "correct_answer": " El conjunto de requerimientos mentales, cognitivos o intelectuales a los que se ve sometido\nel trabajador a lo largo de su jornada laboral, es decir, el nivel de actividad mental o de\nesfuerzo intelectual necesario para desarrollar el trabajo.\n",
            "incorrect_answers": [
                " El conjunto de requerimientos mentales, f�sicos o intelectuales a los que se ve sometido el\ntrabajador a lo largo de su jornada laboral, es decir, el nivel de actividad mental o de esfuerzo\nintelectual necesario para desarrollar el trabajo.\n",
                " El conjunto de requerimientos f�sicos, a los que se ve sometido el trabajador a lo largo de su\njornada laboral, es decir, el nivel de actividad mental o de esfuerzo intelectual necesario para\ndesarrollar el trabajo."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "387.  Los factores determinantes de la carga de trabajo mental dependen de la relaci�n que\nse establece entre:\n",
            "correct_answer": " Las exigencias o requerimientos que plantea el trabajo y capacidad de respuesta del\ntrabajador.\n",
            "incorrect_answers": [
                " Los objetivos del trabajador y del empresario.\n",
                " El interior y exterior de la organizaci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "388.  Entre los aspectos que definen la carga mental podemos encontrar situaciones de:\n",
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
            "question": "389.  El m�todo INSHT incluye, entre los factores psicosociales que considera, la carga\nmental de trabajo, y la valora a partir de los siguientes indicadores:\n",
            "correct_answer": " Presi�n de tiempos y percepci�n subjetiva de la realidad.",
            "incorrect_answers": [
                " Velocidad de razonamiento ante la soluci�n de un conflicto.\n",
                " Percepci�n distorsionada de la realidad en las primeras cuatro horas.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "390.  Entre los m�todos objetivos, conocidos como m�todos globales de evaluaci�n de las\ncondiciones de trabajo para valoraci�n de la carga metal, se encuentran:\n",
            "correct_answer": " M�todo L.E.S.T y M�todo R.N.U.R.\n",
            "incorrect_answers": [
                " M�todo de conocimiento.\n",
                " M�todo de evaluaci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "391.  Uno de los indicadores del m�todo L.E.S.T es el apremio del tiempo, que consiste en:\n",
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
            "question": "392.  Uno de los indicadores del m�todo L.E.S.T es la minuciosidad, que consiste en:\n",
            "correct_answer": " Se considera como una forma especial de atenci�n en trabajos de precisi�n, en los que el\ntrabajador debe manipular objetos muy peque�os u observar detalles muy exactos (por\nejemplo, ejecuci�n de trabajos de precisi�n o detecci�n de defectos poco perceptibles).\n",
            "incorrect_answers": [
                " Hace referencia al esfuerzo de memorizaci�n que se exige al trabajador o al n�mero de\nelecciones que debe efectuar, en relaci�n con la velocidad con que debe dar una respuesta.\n",
                " Para los trabajos repetitivos, surge de la necesidad del trabajador de seguir una cadencia o\nritmo impuesto. Para los trabajos no repetitivos, el apremio puede resultar de la exigencia\nde lograr unos ciertos objetivos de rendimiento en un tiempo determinado."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "393.  El m�todo R.N.U.R. o m�todo de perfil del puesto viene determinado por dos criterios:\n",
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
            "question": "394.  El criterio de operaciones mentales como uno de los utilizados dentro del m�todo\nR.N.U.R. o m�todo de perfil del puesto, se entiende:\n",
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
            "question": "395.  El m�todo INSHT incluye, entre los factores psicosociales que considera, la carga\nmental de trabajo, y la valora a partir de los siguientes indicadores:\n",
            "correct_answer": " Esfuerzo de atenci�n.\n",
            "incorrect_answers": [
                " Presi�n de espacios.\n",
                " Operaciones mentales y nivel de atenci�n."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "396.  Se define como Presi�n mental (mental stress):\n",
            "correct_answer": " El total de todas las influencias valorables que inciden en un ser humano.\n",
            "incorrect_answers": [
                " El efecto inmediato de la presi�n mental en el individuo (no el efecto a largo plazo), que\ndepende de sus condiciones previas habituales y actuales, incluidos los estilos individuales\nde afrontamiento (coping).\n",
                " El l�mite particular de todas las influencias valorables que inciden en un ser humano."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "397.  Se define como Tensi�n mental (mental strain):\n",
            "correct_answer": " El efecto inmediato de la presi�n mental en el individuo (no el efecto a largo plazo), que\ndepende de sus condiciones previas habituales y actuales, incluidos los estilos individuales\nde afrontamiento (coping).\n",
            "incorrect_answers": [
                " El efecto a largo plazo de la presi�n mental en el individuo (no el efecto a largo plazo), que\ndepende de sus condiciones previas habituales y actuales, incluidos los estilos individuales\nde afrontamiento (coping).\n",
                " El total de todas las influencias valorables que inciden en un ser humano."
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "398.  Entre las medidas a tomar para prevenir la fatiga mental se encuentran entre otras:\n",
            "correct_answer": " Controlar la cantidad y la calidad de la informaci�n tratada.",
            "incorrect_answers": [
                " Adaptar la carga de trabajador a las capacidades del puesto.\n",
                " Procurar dotar a las tareas de un nivel de inter�s decreciente.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "399.  La Norma UNE-EN-614-1, que establece los principios ergon�micos a seguir durante\nel proceso de dise�o y proyecto de los equipos de trabajo (en especial de las m�quinas),\nconsidera que los sistemas de trabajo dise�ados de manera ergon�mica favorecen la\nseguridad y la eficacia, mejoran las condiciones de trabajo y de vida y compensan los\nefectos adversos sobre la salud y el rendimiento de los trabajadores y especialmente\nprevienen la fatiga mental. Entre los factores a tener en cuenta se encuentran:\n",
            "correct_answer": " Cualquier informaci�n que se requiera para la realizaci�n de la tarea ser� f�cilmente\naccesible para el trabajador.",
            "incorrect_answers": [
                " El equipo de trabajo se proyectar� de tal forma que su operaci�n se sobrecargue o est� por\ndebajo de la capacidad mental de los trabajadores.\n",
                " La informaci�n se presentar� de tal forma que el trabajador no pueda entenderla y usarla\nf�cilmente.\n"
            ]
        },
        {
            "category": "Examen: para el Lucho",
            "type": "multiple",
            "difficulty": "medium",
            "question": "400.  La Norma UNE-EN-614-1 en el dise�o de pantallas de informaci�n, se�ales y\ndispositivos de control, tambi�n se incluyen algunos aspectos que ser�a necesario\nconsiderar para la prevenci�n de la fatiga mental. Entre ellos, podemos destacar los\nsiguientes:\n",
            "correct_answer": " El dise�o de pantallas de informaci�n y se�ales debe proporcionar una informaci�n clara e\ninequ�voca. Se evitar� toda informaci�n innecesaria.\n",
            "incorrect_answers": [
                " Para evitar una sobrecarga de informaci�n, el n�mero y tipo de pantallas y se�ales se\nmantendr� en el m�ximo necesario para una adecuada realizaci�n de la tarea.\n",
                " La posici�n de los mandos, su movimiento, su efecto y su correspondiente funci�n o\ninformaci�n presentada ser�n mutuamente compatibles."
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

    if (x.results[index].incorrect_answers.length === 2) {
        answers[arrlength[0]].innerHTML = x.results[index].correct_answer
        answers[arrlength[1]].innerHTML = x.results[index].incorrect_answers[0]
        answers[arrlength[2]].innerHTML = x.results[index].incorrect_answers[1]
        question.innerHTML = x.results[index].question
        correctAnswer = x.results[index].correct_answer;
    }
    else {
        throw new Error('Wring length of incorrect answers!');
    }
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


