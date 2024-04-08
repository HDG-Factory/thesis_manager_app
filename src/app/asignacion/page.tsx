"use client"
import { Card, CardBody, CardHeader, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs, Tooltip, getKeyValue } from "@nextui-org/react"
import { useState } from "react"
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { PlusIcon } from "../components/PlusIcon";
import { UserIcon } from "../components/UserIcon";
import { DeleteIcon } from "../components/DeleteIcon";

type TabValues = 'Asesor' | 'Revisor' | 'Jurado';

type DropdownProps = {
    dropdownData: PersonData[],
    setDropdownData: React.Dispatch<React.SetStateAction<PersonData[]>>
    val: PersonData[],
    set: React.Dispatch<React.SetStateAction<PersonData[]>>
}

interface PersonData {
    id: number;
    nombre: string;
    codigo: string;
    correo: string;
    linea: string;
};

const columns = [
    {
        key: "nombre",
        label: "NOMBRE",
    },
    {
        key: "codigo",
        label: "CÓDIGO",
    },
    {
        key: "correo",
        label: "CORREO",
    },
    {
        key: "linea",
        label: "LÍNEA",
    },
    {
        key: "actions",
        label: "",
    }
];

// Default Data
const getDropdownAdvisors: PersonData[] = [
    {
        id: 5,
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 6,
        nombre: 'Manuel Vallejo',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    }
];
const getDropdownReviewers: PersonData[] = [
    {
        id: 5,
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 6,
        nombre: 'Manuel Vallejo',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    }
];
const getDropdownJuries: PersonData[] = [
    {
        id: 5,
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 6,
        nombre: 'Manuel Vallejo',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    }
];

const advisorsDefaultData: PersonData[] = [
    {
        id: 1,
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 2,
        nombre: 'Manuel Vallejo',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 3,
        nombre: 'Arturo Navarro',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 4,
        nombre: 'Valeria Lopez',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    }
];
const reviewersDefaultData: PersonData[] = [
    {
        id: 1,
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 2,
        nombre: 'Manuel Vallejo',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 3,
        nombre: 'Arturo Navarro',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 4,
        nombre: 'Valeria Lopez',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    }
];
const juriesDefaultData: PersonData[] = [
    {
        id: 1,
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 2,
        nombre: 'Manuel Vallejo',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 3,
        nombre: 'Arturo Navarro',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 4,
        nombre: 'Valeria Lopez',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    }
]
//

const InputDropdown = ({dropdownData, setDropdownData, val, set}: DropdownProps) => {

    const addItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: PersonData) =>{
        let newItems = dropdownData.filter(i => i.id != item.id);
        setDropdownData(newItems)

        let newList = [...val, item]
        set(newList)
    }

    const renderDescription = (email: string, line: string) => {return <ul><li>{email}</li><li>{line}</li></ul>}

    return (
    <Dropdown>
        <DropdownTrigger>
            <Button 
                variant="bordered" 
            >
                Asignar <PlusIcon/>
            </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" items={dropdownData}>
        {(item) => (
            <DropdownItem
            key={item.id}
            color="default"
            description={renderDescription(item.correo, item.linea)}
            startContent={<UserIcon/>}
            onClick={(event) => addItem(event, item)}
            textValue={item.nombre}
            >
            {item.nombre} | {item.codigo}
            </DropdownItem>
        )}
        </DropdownMenu>
    </Dropdown>
    );
}
 
function AssignmentsTable({items, setItems}: {items: PersonData[], setItems: React.Dispatch<React.SetStateAction<PersonData[]>>}) {

    const deleteItems = (_: React.MouseEvent<HTMLLIElement, MouseEvent>, it: PersonData) => {
        let newItems = items.filter(i => i.id != it.id);
        setItems(newItems)
    }

    return (
      <Table aria-label="AssignmentsTable" className="mt-8">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={items}>
          {(item: any) => (
            <TableRow key={item.id}>
              {(columnKey) =>
                <TableCell>
                    {
                        columnKey === 'actions'?
                        <Button isIconOnly color="danger" variant="light" aria-label="Delete row" /*onClick={(event)=> deleteItems(event, item)}*/>
                            <DeleteIcon />
                        </Button>
                        :
                        item[columnKey]
                    }
                </TableCell>
              }
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }

export default function AsignacionView(){
    const [tabSelected, setTabSelected] = useState<TabValues>("Asesor");

    const [advisors, setAdvisors] = useState(advisorsDefaultData);
    const [reviewers, setReviewers] = useState(reviewersDefaultData);
    const [juries, setJuries] = useState(juriesDefaultData);

    const [totalAdvisors, setTotalAdvisors] = useState(getDropdownAdvisors);
    const [totalReviewers, setTotalReviewers] = useState(getDropdownReviewers);
    const [totalJuries, setTotalJuries] = useState(getDropdownJuries);

    return(
        <>
            <Card className="w-5/12	mx-8">
                <Tabs key="underlined" variant="underlined" color="primary" selectedKey={tabSelected} onSelectionChange={key => setTabSelected(key as TabValues)}>
                    <Tab key="Asesor" title="Asesor(es)">
                        <CardBody>
                            <InputDropdown dropdownData={totalAdvisors} setDropdownData={setTotalAdvisors} val={advisors} set={setAdvisors}/>
                            <AssignmentsTable items={advisors} setItems={setAdvisors}/>
                        </CardBody>
                    </Tab>
                    <Tab key="Revisor" title="Revisor(es)">
                        <CardBody>
                            <InputDropdown dropdownData={totalReviewers} setDropdownData={setTotalReviewers} val={reviewers} set={setReviewers}/>
                            <AssignmentsTable items={reviewers} setItems={setReviewers} />
                        </CardBody>
                    </Tab>
                    <Tab key="Jurado" title="Jurado(s)">
                        <CardBody>
                            <InputDropdown dropdownData={totalJuries} setDropdownData={setTotalJuries} val={juries} set={setJuries}/>
                            <AssignmentsTable items={juries} setItems={setJuries} />
                        </CardBody>
                    </Tab>
                </Tabs>
            </Card>
        </>
    )

}

