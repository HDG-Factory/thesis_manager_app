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
        < Card className="max-w-[1000px] w-[600px] h-[600px]" >

            <CardHeader className=" flex justify-center mb-3 mt-3">

                <h1 className="text-2xl">Registrar estudiante</h1>

            </CardHeader>
            <CardBody >
                <div className="flex justify-center  mb-6">
                    <Input variant="bordered" className="w-3/4" type="nombre" label="Nombre" />
                </div>
                <div className="flex justify-center  mb-6  gap-4">
                    <Input variant="bordered" className="w-3/4" type="dni" label="DNI" />
                </div>
                <div className="flex justify-center   mb-6  gap-4">
                    <Input variant="bordered" className="w-3/4" type="codigo" label="grado" />
                </div>
                <div className=" text-red-500 flex justify-center  mb-8 gap-4">
                    <Input variant="bordered" className="w-3/4" type="email" label="Correo institucional" />
                </div>

                <div className="flex justify-center">
                    <div className=" flex justify-center w-4/5 ">
                        <Input type="file" onChange={handleFileChange} />
                        <Button className="w-2/5 ml-1" color="primary" onClick={handleUpload}>
                            Subir Archivo
                        </Button>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="flex  justify-center mb-2 mt-2">
                <Button color="primary" className="w-5/6">
                    Crear Registro
                </Button>
            </CardFooter>

        </Card >
    );
}
