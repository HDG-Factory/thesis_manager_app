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
let getDropdownAdvisors: PersonData[] = [
    {
        id: 12,
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 13,
        nombre: 'George Sanchez',
        codigo: 'A9774195FD',
        correo: 'george.sanchez@uncp.edu.pe',
        linea: 'EDUC'
    }
];
let getDropdownReviewers: PersonData[] = [
    {
        id: 14,
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 15,
        nombre: 'Manuel Vallejo',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    }
];
let getDropdownJuries: PersonData[] = [
    {
        id: 16,
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 17,
        nombre: 'Manuel Vallejo',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    }
];

let advisorsDefaultData: PersonData[] = [
    {
        id: 1,
        nombre: 'Alberto Fernandez',
        codigo: '6BP65971FD',
        correo: 'alberto.fernandez@uncp.edu.pe',
        linea: 'EDUC'
    },
    {
        id: 2,
        nombre: 'Manuel Vallejo',
        codigo: '65465468FD',
        correo: 'manuel.vallejo@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 3,
        nombre: 'Arturo Navarro',
        codigo: '65465468FD',
        correo: 'arturo.navarro@uncp.edu.pe',
        linea: 'EDUC'
    },
    {
        id: 4,
        nombre: 'Valeria Lopez',
        codigo: 'PE569876W6',
        correo: 'vale.lopez@uncp.edu.pe',
        linea: 'TICS'
    }
];
let reviewersDefaultData: PersonData[] = [
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
        linea: 'EDUC'
    },
    {
        id: 7,
        nombre: 'Arturo Navarro',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 8,
        nombre: 'Valeria Lopez',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    }
];
let juriesDefaultData: PersonData[] = [
    {
        id: 9,
        nombre: 'Luis Seminario',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 10,
        nombre: 'Manuel Vallejo',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id:11,
        nombre: 'Arturo Navarro',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    },
    {
        id: 12,
        nombre: 'Valeria Lopez',
        codigo: '65465468FD',
        correo: 'luis.seminario@uncp.edu.pe',
        linea: 'TICS'
    }
]
//

const InputDropdown = ({dropdownData, add} : {dropdownData: PersonData[], add: any}) => {

    // const addItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: PersonData) =>{
    //     let newItems = dropdownData.filter(i => i.id != item.id);
    //     setDropdownData(newItems)

    //     let newList = [...val, item]
    //     set(newList)
    // }

    const renderDescription = (email: string, line: string) => {return <ul><li>{email}</li><li>{line}</li></ul>}

    return (
    <Dropdown>
        <DropdownTrigger>
            <Button variant="bordered">
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
            onClick={(event) => add(event, item)}
            textValue={item.nombre}
            >
            {item.nombre} | {item.codigo}
            </DropdownItem>
        )}
        </DropdownMenu>
    </Dropdown>
    );
}
 
function AssignmentsTable({dropdownData, setDropdownData, val, set}: DropdownProps) {

    const addItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: PersonData) =>{
        let newItems = dropdownData.filter(i => i.id != item.id);
        setDropdownData(newItems)

        let newList = [...val, item]
        set(newList)
    }

    const deleteItems = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>, it: PersonData) => {
        let newList = val.filter(i => i.id != it.id);
        set(newList)

        let newItems = [...dropdownData, it];
        setDropdownData(newItems)
    }

    return (
        <>
            <InputDropdown dropdownData={dropdownData} add={addItem}/>
            <Table aria-label="AssignmentsTable" className="mt-8">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>            
            <TableBody items={val}>
                {(item: any) => (
                    <TableRow key={item.id}>
                    {(columnKey) =>
                        <TableCell>
                            {
                                columnKey === 'actions'?
                                <Button isIconOnly color="danger" variant="light" aria-label="Delete row" onClick={(event)=> deleteItems(event, item)}>
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
      </>
    );
  }

export default function AsignacionView(){
    const [tabSelected, setTabSelected] = useState<TabValues>("Asesor");

    let [advisors, setAdvisors] = useState(advisorsDefaultData);
    let [reviewers, setReviewers] = useState(reviewersDefaultData);
    let [juries, setJuries] = useState(juriesDefaultData);

    let [totalAdvisors, setTotalAdvisors] = useState(getDropdownAdvisors);
    let [totalReviewers, setTotalReviewers] = useState(getDropdownReviewers);
    let [totalJuries, setTotalJuries] = useState(getDropdownJuries);

    return(
        <>
            <Card className="w-5/12	mx-8">
                <Tabs key="underlined" variant="underlined" color="primary" selectedKey={tabSelected} onSelectionChange={key => setTabSelected(key as TabValues)}>
                    <Tab key="Asesor" title="Asesor(es)">
                        <CardBody>
                            {/* <InputDropdown dropdownData={totalAdvisors} setDropdownData={setTotalAdvisors} val={advisors} set={setAdvisors}/> */}
                            <AssignmentsTable dropdownData={totalAdvisors} setDropdownData={setTotalAdvisors} val={advisors} set={setAdvisors}/>
                        </CardBody>
                    </Tab>
                    {/* <Tab key="Revisor" title="Revisor(es)">
                        <CardBody>
                            <InputDropdown dropdownData={totalReviewers} setDropdownData={setTotalReviewers} val={reviewers} set={setReviewers}/>
                            <AssignmentsTable dropdownData={totalReviewers} setDropdownData={setTotalReviewers} val={reviewers} set={setReviewers} />
                        </CardBody>
                    </Tab>
                    <Tab key="Jurado" title="Jurado(s)">
                        <CardBody>
                            <InputDropdown dropdownData={totalJuries} setDropdownData={setTotalJuries} val={juries} set={setJuries}/>
                            <AssignmentsTable dropdownData={totalJuries} setDropdownData={setTotalJuries} val={juries} set={setJuries} />
                        </CardBody>
                    </Tab> */}
                </Tabs>
            </Card>
        </>
    )

}

