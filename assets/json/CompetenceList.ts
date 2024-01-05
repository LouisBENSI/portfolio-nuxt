export interface Competences {
    techno : string,
    value : number,
    class : string
}

export interface CompetencesCategory {
    title : string,
    languages : Competences[]
}

export const CompetenceList: CompetencesCategory[] = [
    {
        title: "FRONT-END",
        languages: [
            {
                techno: "HTML",
                value: 100,
                class: "w-[100%]"
            },
            {
                techno: "CSS",
                value: 100,
                class: "w-[100%]"
            },
            {
                techno: "JS",
                value: 75,
                class: "w-[75%]"
            },
            {
                techno: "Tailwind CSS",
                value: 95,
                class: "w-[95%]"
            },
            {
                techno: "Vue.js",
                value: 60,
                class: `w-[80%]`
            },
        ],
    },
    {
        title: "BACK-END",
        languages: [
            {
                techno: "PHP",
                value: 45,
                class: "w-[45%]"
            },
            {
                techno: "SQL",
                value: 50,
                class: "w-[50%]"
            },
            {
                techno: "Symfony",
                value: 65,
                class: "w-[65%]"
            },
        ]
    },
    {
        title: "DESIGN",
        languages: [
            {
                techno: "Photoshop",
                value: 75,
                class: "w-[75%]"
            },
            {
                techno: "Figma",
                value: 85,
                class: "w-[85%]"
            },
            {
                techno: "Adobe XD",
                value: 85,
                class: "w-[85%]"
            },
            {
                techno: "UX",
                value: 75,
                class: "w-[75%]"
            },
        ]
    },
]