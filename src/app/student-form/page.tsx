'use client'
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Input } from "@nextui-org/react";
import Form from "./components/Form"
import NavBarHome from "../../app/navbarhome/page"

export default function StudentForm() {
    return (
        <div className="flex ">
            <NavBarHome />
            <div className="w-full h-screen items-center flex justify-center">
                <Form />
            </div>
        </div>
    );
}
