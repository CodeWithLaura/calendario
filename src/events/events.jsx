// Definición de los eventos
export const EVENTS = [
    {
        event_id: 1,
        title: "Event 1",
        start: new Date(2025, 2, 12, 9, 30),  // 12 de marzo, 2025 a las 9:30
        end: new Date(2025, 2, 12, 10, 30),
        admin_id: 1,  // Relacionado con el recurso de "Pedro"
        description: null,
    },
    {
        event_id: 2,
        title: "Event 2",
        start: new Date(2025, 2, 12, 9, 30),
        end: new Date(2025, 2, 12, 10, 30),
        admin_id: 2,
        description: null,  // Relacionado con el recurso de "Sara"
    },
    {
        event_id: 3,
        title: "Event 3",
        start: new Date(2025, 2, 12, 11, 30),
        end: new Date(2025, 2, 12, 13, 30),
        admin_id: 3,
        description: null,  // Relacionado con el recurso de "Jose"
    },
    {
        event_id: 4,
        title: "Event 4",
        start: new Date(2025, 2, 12, 17, 0),
        end: new Date(2025, 2, 12, 19, 30),
        admin_id: 1,
        description: null,  // Relacionado con el recurso de "Pedro"
    }
];

// Definición de los recursos (personas)
export const RESOURCES = [
    {
        admin_id: 1,
        admin_name: "Pedro",  // Nombre de la persona
        mobile: "666666666",   // Número de móvil
        avatar: "https://picsum.photos/200/300",  // Avatar de la persona
        color: "#ab2d2d",      // Color asociado
    },
    {
        admin_id: 2,
        admin_name: "Sara",    // Nombre de la persona
        mobile: "666666666",   // Número de móvil
        avatar: "https://picsum.photos/200/300",  // Avatar de la persona
        color: "#58ab2d",      // Color asociado
    },
    {
        admin_id: 3,
        admin_name: "Jose",    // Nombre de la persona
        mobile: "666666666",   // Número de móvil
        avatar: "https://picsum.photos/200/300",  // Avatar de 
    }]