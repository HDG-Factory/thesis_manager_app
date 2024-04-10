'use client'
import React from "react";
import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Input } from "@nextui-org/react";

export default function StudentForm() {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            // Aquí puedes enviar el archivo al servidor o realizar cualquier otra acción
            console.log('Archivo seleccionado:', selectedFile);
            // Ejemplo: Si quieres subir el archivo usando fetch
            // const formData = new FormData();
            // formData.append('file', selectedFile);
            // fetch('URL_DEL_ENDPOINT', {
            //   method: 'POST',
            //   body: formData,
            // })
            // .then(response => {
            //   // Handle response
            // })
            // .catch(error => {
            //   // Handle error
            // });
        } else {
            console.log('Ningún archivo seleccionado');
        }
    };

    return (
        < Card className="max-w-[400px] h-[500px]" >
            <CardHeader className=" flex justify-center mb-3 mt-3">

                <h1 className="text-2xl">Registrar estudiante</h1>

            </CardHeader>
            <Divider />
            <CardBody className=" bordered flex place-content-evenly " >
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input variant="bordered" type="nombre" label="Nombre" />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input variant="bordered" type="dni" label="DNI" />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input variant="bordered" type="codigo" label="grado" />
                </div>
                <div className=" text-red-500 flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input variant="bordered" type="email" label="Correo institucional" />
                </div>

                <div className="flex">
                    <Input className="flex justify-center" type="file" onChange={handleFileChange} />
                    <Button color="primary" onClick={handleUpload}>
                        Subir Archivo
                    </Button>
                </div>
            </CardBody>
            <CardFooter className="flex  justify-center mb-2 mt-2">
                <Button color="primary" className="w-full">
                    Crear Registro
                </Button>
            </CardFooter>
        </Card >
    );
}
