import React from "react";

import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Skills from '../components/skills'
import Skill from '../components/skill'
library.add(fab)


const SkillShared = () => {
    return (
        <div>
            <Skills title="Programming Languages">
                <Skill>C/C++</Skill>
                <Skill>C#</Skill>
                <Skill>Java</Skill>
                <Skill>Go</Skill>
                <Skill>Assembly (NASM, MIPS)</Skill>
                <Skill>Javascript</Skill>
                <Skill>Python</Skill>
                <Skill>Lua</Skill>
            </Skills>
            <Skills title="Game Engines">
                <Skill>Cocos2d-x</Skill>
                <Skill>Unity</Skill>
            </Skills>
            <Skills title="Low-level Frameworks / Libraries">
                <Skill>AndroidSDK</Skill>
                <Skill>OpenGL</Skill>
                <Skill>DirectX</Skill>
                <Skill>OpenCV</Skill>
            </Skills>
            <Skills title="Web Frameworks / Libraries">
                <Skill>Django</Skill>
                <Skill>Jquery</Skill>
                <Skill>NodeJS</Skill>
                <Skill>Gin-Gonic</Skill>
                <Skill>React</Skill>
                <Skill>BootStrap</Skill>
            </Skills>
            <Skills title="Systems/Platforms">
                <Skill>X86 / 64 Architecture</Skill>
                <Skill>Windows</Skill>
                <Skill>Ubuntu / Linux</Skill>
                <Skill>Android</Skill>
                <Skill>Linux Kernel</Skill>
                <Skill>GCP</Skill>
                <Skill>AWS</Skill>
                <Skill>Docker</Skill>
                <Skill>Kubernetes</Skill>
            </Skills>
            <Skills title="DataBases">
                <Skill>MYSQL</Skill>
                <Skill>SQLite</Skill>
                <Skill>MongoDB</Skill>
            </Skills>

            <Skills title="Web">
                <Skill>HTML5 / CSS3</Skill>
                <Skill>Markdown</Skill>
                <Skill>WebGL</Skill>
            </Skills>
            <Skills title="Tools">
                <Skill>Git</Skill>
                <Skill>Vim</Skill>
                <Skill>GDB</Skill>
                <Skill>Objdump</Skill>
                <Skill>VSCode</Skill>
                <Skill>PyCharm</Skill>
                <Skill>IDEA</Skill>
                <Skill>CMake / Makefile</Skill>
                <Skill>Notion</Skill>
            </Skills>
            <Skills title="Etc.">
                <Skill>Redis</Skill>
                <Skill>Compiler</Skill>
                <Skill>Cross-Platform Architecture</Skill>
                <Skill>Open Source</Skill>
                <Skill>Linux Server</Skill>
                <Skill>NginX</Skill>
                <Skill>Algorithm</Skill>
                <Skill>Data Structure</Skill>
                <Skill>Design Pattern</Skill>
            </Skills>
        </div>
    )
}

export default SkillShared;