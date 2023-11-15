import styled from "@emotion/styled";
import { FaHome } from "react-icons/fa";
import { FaRegNoteSticky, FaRegAddressBook, FaLock } from "react-icons/fa6";
import { SideBarProps } from "./types";
import { useState } from "react";
import { Link } from "@chakra-ui/next-js";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";


export default function SideBar({children}: SideBarProps) {

    const [widthSidebar, setWidthSidebar] = useState("30rem");
    const [heightSidebar, setHeightSidebar] = useState("100vh");

    const SideBarButton = styled.button`

        padding: .75rem;
        display: block;
        @media screen and (max-width: 768px) {
            display:  none;
        }

        span{
            color: white;
            margin-left: 0.5rem;
        }
    `;
    const Sidebar = styled.nav`
        width: ${widthSidebar};
        height: ${heightSidebar};
        background-color: blue;
        
        ul {

        }
        
        ul > li {
            margin-top: .30rem;
            color: white;
            list-style: none;
            ${
                (widthSidebar == "30rem") ? 
                "" : 
                "display: flex; justify-content: center;"
            }
        }
        ul > li:hover:not(.active) {
            background-color: black;
            color: white;
        }

        div.btn-open-close{
            display: flex;
            justify-content: center;
        }

        ul > li a {
            text-decoration: none;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }
        ul > li a {
            text-decoration: none;
        }
        ul > li a span {
            font-size: 1rem;
            padding-left: .30rem;
        }
        .icon{
            font-size: ${(widthSidebar == "30rem") ? "1.30rem" : "1.75rem"};
        }
        
    `;
    
    return (
        <>
            <Sidebar>
                <div className={"btn-open-close"}>
                    <SideBarButton title="teste" onClick={() => { setWidthSidebar((widthSidebar == "30rem") ? "5rem": "30rem") } } >{(widthSidebar == "30rem") ? (<><ArrowLeftIcon w="1.1rem" h="1.1rem" color={"white"} /> <span>Colapse</span></>): <ArrowRightIcon w="1.1rem" h="1.1rem" color={"white"} /> }</SideBarButton>
                </div>
                <ul>
                    <li><Link title="Painel Principal" href="/" ><FaHome className="icon"/>{(widthSidebar == "30rem") ? <span>Painel Principal</span>: ""}</Link></li>
                    <li><Link title="Senhas" href="/" ><FaLock className="icon"/>{(widthSidebar == "30rem") ? <span>Senhas</span>: ""}</Link></li>
                    <li><Link title="Notas" href="/" ><FaRegNoteSticky className="icon"/>{(widthSidebar == "30rem") ? <span>Notas</span>: ""}</Link></li>
                    <li><Link title="Endereços" href="/" ><FaRegAddressBook className="icon"/>{(widthSidebar == "30rem") ? <span>Endereços</span>: ""}</Link></li>
                </ul>
                
                {children}
            </Sidebar>
        </>
    )
}