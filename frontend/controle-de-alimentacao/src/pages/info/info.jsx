import React from 'react';
import './info.css';
import fruit from './fruits.gif';
import piramide from './piramide.png';

const Info = () => {
    return (<main>
        <br/>
        <h1>Alimentação saudável</h1>
        <h2>A importância da boa alimentação</h2>
        <p>Existe uma relação direta entre nutrição, saúde e bem-estar físico e mental do indivíduo. 
            As pesquisas comprovam que a boa alimentação tem um papel fundamental na prevenção e no 
            tratamento de doenças. Há milhares de anos, Hipócrates já afirmava: “que teu alimento 
            seja teu remédio e que teu remédio seja teu alimento”. É isso mesmo. O equilíbrio na dieta 
            é um dos motivos que permitiu ao homem ter vida mais longa neste século.</p>
            <img src={fruit} alt=""/>
        <h2>O que são alimentos?</h2>
        <p>Alimentos são todas as substâncias sólidas e líquidas que, levadas ao tubo digestivo, 
            são degradadas e depois usadas para formar e/ou manter os tecidos do corpo, regular 
            processos orgânicos e fornecer energia. Mas devemos tomar cuidado com definições 
            genéricas. Um exemplo: não existem alimentos perfeitos, ou seja , nenhum alimento 
            possui todos os nutrientes responsáveis por regular, construir ou manter os tecidos 
            e fornecer energia. Também existem alimentos que só nos fornecem calorias vazias, 
            ou seja, são concentrados em certas substâncias que se transformam apenas em energia 
            após a digestão, como é o caso das bebidas álcoólicas e refrigerantes.</p>
            <img src={piramide} alt=""/>
        <h2>O que são nutrientes?</h2>
        <p>Nutrientes são todas as substâncias químicas que fazem parte dos alimentos e que são 
            absorvidas pelo organismo, sendo indispensáveis para o seu funcionamento. Também 
            podemos dizer que os nutrientes são os produtos dos alimentos depois de degradados. 
            Assim, os alimentos são digeridos para que os nutrientes sejam absorvidos (processo 
            pelo qual os nutrientes chegam ao intestino e, daí, passam para o sangue, agindo sobre
             o organismo).</p>
        <h2>O que é caloria?</h2>
        <p>A caloria é a unidade de calor usada na Nutrição. Esta unidade de calor é a medida de 
            energia liberada a partir da “queima” (digestão) do alimento e que é então utilizada 
            pelo corpo. Cada nutriente fornece diferentes quantidades de energia (caloria). 
            Quanto maior for a variedade de nutrientes que um alimento tiver, maior será o seu valor 
            nutricional (equilíbrio entre qualidade e quantidade). Assim, os alimentos são divididos 
            em grupos, pelas semelhanças que apresentam, sendo uma delas a concentração de nutrientes.</p>
        <h2>O que são macronutrientes?</h2>
        <p>Os macronutrientes são os nutrientes dos quais o organismo precisa em grandes quantidades 
            e que são amplamente encontrados nos alimentos. São especificamente os carboidratos, 
            as gorduras e as proteínas</p>
        <h3>Os carboidratos</h3>
        <p>Os carboidratos são nutrientes que fornecem energia para o nosso organismo. A ingestão de 
            carboidratos evita que as proteínas dos tecidos sejam usadas para o fornecimento de 
            energia. Quando isso ocorre, há comprometimento do crescimento e reparo dos tecidos, 
            que são as funções importantes das proteínas</p>
        <h3>As gorduras e o colesterol</h3>
        <p>As gorduras ou lipídeos são os principais fornecedores de energia, além dos carboidratos. 
            Também são responsáveis por proteger os órgãos contra lesões, manter a temperatura do corpo, 
            ajudar na absorção de algumas vitaminas ( A, D, E e K) e produzir uma sensação de saciedade 
            depois das refeições</p>
            <p>O tão falado colesterol não é um tipo de gordura. É um composto parecido com esse nutriente 
                e que participa de vários processos orgânicos envolvendo os lipídeos. Conhecido como um 
                vilão, o colesterol tem, na verdade, importantes funções, como estruturação das células, 
                formação de hormônios e de vitamina D. O colesterol só é prejudicial quando ingerido 
                em excesso, acumulando-se no sangue, o que aumenta o risco de doenças cardiovasculares.</p>
        <h3>As proteínas</h3>
        <p>As proteínas são componentes necessários para o crescimento,
construção e reparação dos tecidos do nosso corpo. Elas entram na constituição de qualquer célula, sejam células nervosas no cérebro,
células sangüíneas ( hemácias), células dos músculos, coração, fígado, das glândulas produtoras de hormônio ou quaisquer outras.
As proteínas ainda fazem parte da composição dos anticorpos do sistema imunológico corporal, participam ativamente de inúmeros processos metabólicos e de muitas outras funções do corpo. Quando necessário, as proteínas são convertidas em glicose para fornecer energia.</p>
        <h2>O que são micronutrientes?</h2>
        <p>o contrário dos macronutrientes, existem nutrientes que não precisamos absorver em grandes quantidades, embora eles sejam muito
importantes para o bom funcionamento de nosso organismo. São
os micronutrientes, encontrados nos alimentos em concentrações
pequenas. Existem dois tipos de micronutrientes: as vitaminas e os
minerais.</p>
        <h3>Vitaminas</h3>
        <p>Podemos encontrar as vitaminas nas frutas, vegetais e em alimentos de origem animal. Elas são importantes na regulação das funções do nosso organismo, ou seja , são indispensáveis para o seu
bom funcionamento, contribuindo para o fortalecimento do nosso corpo e evitando gripes freqüentes e outras doenças. Por isso, são
essenciais para ajudar as proteínas a construir e/ou manter os tecidos e os processos metabólicos</p>
    <h3>Minerais</h3>
    <p>Podemos encontrar os minerais nos alimentos de origem animal e
vegetal. As melhores fontes alimentares são aquelas nas quais os
minerais estão presentes em maior quantidade e são melhor absorvidos pelo organismo, ou seja, quando são melhor aproveitados.
Alguns dizem que as melhores fontes são de origem animal, mas
outros já preferem as de origem vegetal. Seja qual for a fonte, os
minerais são indispensáveis para regular as funções do nosso organismo e compor a estrutura dos nossos ossos e dentes. O cálcio é
o principal responsável por essa função e pode ser encontrado em
maior quantidade nos leites e derivados.</p>
<p>Para mais informações, acesse <a href="https://bvsms.saude.gov.br/bvs/publicacoes/alimentacao_saudavel.pdf">aqui</a>.</p>
<br/>
    </main>);
}

export default Info;