export interface Experience {
    title: string;
    company: string;
    date_start: string;
    date_fin: string;
    description: string;
}

export interface ParcoursCategory {
    title: string;
    items: Experience[];
}

export const ParcoursList: ParcoursCategory[] = [
    {
        title: "Expériences professionnelles",
        items: [
            {
                title: "CDI dévelopement front-end",
                company: "Bemove",
                date_start: "Septembre 2021",
                date_fin: "?",
                description: "Cette signature en CDI est une poursuite des projets menés durant mon alternance avec + de responsabilité et une montée en compétence dans le front-end."
            },
            {
                title: "Alternance dévelopement front-end",
                company: "Bemove",
                date_start: "Septembre 2020",
                date_fin: "Septembre 2021",
                description: "Suite à mon stage, Bemove me prend en alternance, j'ai pu monter encore + en compétences et en responsabilités malgré le contexte sanitaire."
            },
            {
                title: "Stage Intégration HTML/CSS",
                company: "Bemove",
                date_start: "Juin 2020",
                date_fin: "Septembre 2020",
                description: "Ce deuxième stage chez Bemove m'a permis d'intégrer une équipe et un environnement complètement nouveau, j'ai pu faire mes premières armes sur git, symfony et Tailwind CSS."
            },
            {
                title: "Stage développement FullStack",
                company: "green_e",
                date_start: "Avril 2019",
                date_fin: "Juillet 2019",
                description: "Mon tout premier stage et ma première expérience professionnelle ! J'ai pu mener (tout seul) un projet web de A à Z du maquettage au développement web jusqu'à la mise en production sous PHP, HTML, CSS, Bootstrap et SQL."
            },
        ]
    },
    {
        title: "Expériences personnelles",
        items: [
            {
                title: "Réalisation du site Naches Automobile",
                company: "Naches Automobile",
                date_start: "Mars 2021",
                date_fin: "Octobre 2021",
                description: "Réalisation d'un site vitrine de concession de voitures de collection sous Symfony 5, Easy Admin 3 et Tailwind css"
            },
            {
                title: "Réalisation du site portfolio de Jade Barbier",
                company: "Jade Barbier",
                date_start: "Novembre 2021",
                date_fin: "Décembre 2021",
                description: "Mon premier projet sous symfony"
            },
            {
                title: "Refonte graphique du site green_e",
                company: "green_e",
                date_start: "Septembre 2019",
                date_fin: "Décembre 2019",
                description: "Suite à mon stage chez green_e, j'ai proposé une refonte graphique qui soit graphiquement différente de ce qui existait déjà"
            },
            {
                title: "Réalisation de mon site Portfolio",
                company: "Moi-même",
                date_start: "Septembre 2019",
                date_fin: "Aujourd'hui",
                description: "Durant ma carrière dans le développement web j'ai fait évoluer ce portfolio, d'abord en PHP classique puis Symfony puis en VUEJS"
            },
        ]
    },
    {
        title: "Formations",
        items: [
            {
                title: "Formation Chef de projet Digital",
                company: "Digital Campus",
                date_start: "Septembre 2018",
                date_fin: "Juillet 2021",
                description: "Depuis 2020, ayant soif de connaissances et toujours dans l'optique d'augmenter mes compétences, je consacre mon temps à apprendre de nouveaux langages dont vueJS par exemple."
            },
            {
                title: "Apprentissage autodidacte",
                company: "Udemy",
                date_start: "2021",
                date_fin: "?",
                description: "Durant ce cursus de 3 comprenant 2 stages et une alternance d'un an, j'ai appris et mis en pratique tous les rouages de la conception d'un site web : du recueil de la demande client à la mise en production du site."
            },
        ]
    }
]