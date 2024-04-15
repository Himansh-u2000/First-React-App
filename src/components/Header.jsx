import React from 'react'
import { Button, Navbar } from "flowbite-react";

export default function Header() {
    return (
        <div>
            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button>Get started</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
