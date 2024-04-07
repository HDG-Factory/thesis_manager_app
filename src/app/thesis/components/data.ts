import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "ESTUDIANTE", uid: "name", sortable: true},
  {name: "ASESOR(ES)", uid: "asesores", sortable: true},
  {name: "REVISOR(ES)", uid: "revisores", sortable: true},
  {name: "JURADO(S)", uid: "jurados", sortable: true},
  {name: "AGE", uid: "age", sortable: true},
  {name: "CARGO", uid: "cargo", sortable: true},
  {name: "FECHA", uid: "date", sortable: true},
  {name: "TEAM", uid: "team"},
  {name: "EMAIL", uid: "email"},
  {name: "ESTADO", uid: "estado", sortable: true},
  {name: "ACCIÓN", uid: "actions"},
];

const statusOptions = [
  {name: "Activo", uid: "activo"},
  {name: "Rechazado", uid: "rechazado"},
  {name: "Pendiente", uid: "pendiente"},
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      },
      {
        nombre: 'Juan Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      },
      {
        nombre: 'Diego Morales',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      },
      {
        nombre: 'Hugo Olivera',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      },
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
    ],
    cargo: "CEO",
    date: "04/04/2024",
    team: "Management",
    estado: "activo",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Jorge Sánchez',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'María Rosas',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "Tech Lead",
    date: "04/04/2024",
    team: "Development",
    estado: "rechazado",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Ernesto Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Henriquez',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "Sr. Dev",
    date: "04/04/2024",
    team: "Development",
    estado: "activo",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Patrick Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Ronaldo',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "C.M.",
    date: "04/04/2024",
    team: "Marketing",
    estado: "pendiente",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Suarez',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Daniela Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Gabriel Correa',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "S. Manager",
    date: "04/04/2024",
    team: "Sales",
    estado: "activo",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Brian Kim",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Vangladesh',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Tomas Rincon',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Javier Chavez',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "P. Manager",
    date: "04/04/2024",
    team: "Management",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "brian.kim@example.com",
    estado: "activo",
  },
  {
    id: 7,
    name: "Michael Hunt",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "Designer",
    date: "04/04/2024",
    team: "Design",
    estado: "rechazado",
    age: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    email: "michael.hunt@example.com",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "HR Manager",
    date: "04/04/2024",
    team: "HR",
    estado: "activo",
    age: "31",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    email: "samantha.brooks@example.com",
  },
  {
    id: 9,
    name: "Frank Harrison",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "F. Manager",
    date: "04/04/2024",
    team: "Finance",
    estado: "pendiente",
    age: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "frank.harrison@example.com",
  },
  {
    id: 10,
    name: "Emma Adams",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "Ops Manager",
    date: "04/04/2024",
    team: "Operations",
    estado: "activo",
    age: "35",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "emma.adams@example.com",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "Jr. Dev",
    date: "04/04/2024",
    team: "Development",
    estado: "activo",
    age: "22",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "brandon.stevens@example.com",
  },
  {
    id: 12,
    name: "Megan Richards",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "P. Manager",
    date: "04/04/2024",
    team: "Product",
    estado: "rechazado",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "megan.richards@example.com",
  },
  {
    id: 13,
    name: "Oliver Scott",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "S. Manager",
    date: "04/04/2024",
    team: "Security",
    estado: "activo",
    age: "37",
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "oliver.scott@example.com",
  },
  {
    id: 14,
    name: "Grace Allen",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "M. Specialist",
    date: "04/04/2024",
    team: "Marketing",
    estado: "activo",
    age: "30",
    avatar: "https://i.pravatar.cc/150?img=16",
    email: "grace.allen@example.com",
  },
  {
    id: 15,
    name: "Noah Carter",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "IT Specialist",
    date: "04/04/2024",
    team: "I. Technology",
    estado: "rechazado",
    age: "31",
    avatar: "https://i.pravatar.cc/150?img=15",
    email: "noah.carter@example.com",
  },
  {
    id: 16,
    name: "Ava Perez",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "Manager",
    date: "04/04/2024",
    team: "Sales",
    estado: "activo",
    age: "29",
    avatar: "https://i.pravatar.cc/150?img=20",
    email: "ava.perez@example.com",
  },
  {
    id: 17,
    name: "Liam Johnson",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "Data Analyst",
    date: "04/04/2024",
    team: "Analysis",
    estado: "activo",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=33",
    email: "liam.johnson@example.com",
  },
  {
    id: 18,
    name: "Sophia Taylor",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "QA Analyst",
    date: "04/04/2024",
    team: "Testing",
    estado: "activo",
    age: "27",
    avatar: "https://i.pravatar.cc/150?img=29",
    email: "sophia.taylor@example.com",
  },
  {
    id: 19,
    name: "Lucas Harris",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "Administrator",
    date: "04/04/2024",
    team: "Information Technology",
    estado: "rechazado",
    age: "32",
    avatar: "https://i.pravatar.cc/150?img=50",
    email: "lucas.harris@example.com",
  },
  {
    id: 20,
    name: "Mia Robinson",
    asesor: "Hugo Javier",
    asesores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    revisores: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    jurados: [
      {
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
      }
    ],
    cargo: "Coordinator",
    date: "04/04/2024",
    team: "Operations",
    estado: "activo",
    age: "26",
    avatar: "https://i.pravatar.cc/150?img=45",
    email: "mia.robinson@example.com",
  },
];

export {columns, users, statusOptions};
