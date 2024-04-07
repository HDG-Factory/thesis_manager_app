"use client"
import { Card, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react"
import { useState } from "react"
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { PlusIcon } from "../components/PlusIcon";
import { UserIcon } from "../components/UserIcon";

type TabValues = 'Asesor' | 'Revisor' | 'Jurado';
//type tabType = Array<TabValues>
const items = [
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
const columns = [
    {
        key: "name",
        label: "NOMBRE",
    },
    {
        key: "role",
        label: "ROLE",
    },
    {
        key: "status",
        label: "STATUS",
    },
];

const InputDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Asignar <PlusIcon/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.id}
            color="default"
            description={<ul>
                <li>{item.correo}</li>
                <li>{item.linea}</li>
            </ul>}
            startContent={<UserIcon></UserIcon>}
          >
            {item.nombre} | {item.codigo}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}

export default function AsignacionView(){
    const [tabSelected, setTabSelected] = useState<TabValues>("Revisor");

    return(
        <>
            <Card className="w-5/12	mx-8">
                <Tabs key="underlined" variant="underlined" color="primary" selectedKey={tabSelected} onSelectionChange={key => setTabSelected(key as TabValues)}>
                    <Tab key="Asesor" title="Asesor(es)">
                        <CardBody>
                            <InputDropdown />
                        </CardBody>
                    </Tab>
                    <Tab key="Revisor" title="Revisor(es)">
                        <CardBody>
                            cuak
                        </CardBody>
                    </Tab>
                    <Tab key="Jurado" title="Jurado(s)">
                        
                    </Tab>
                </Tabs>
            </Card>
        </>
    )

}

