

import React from "react";
import i18next from 'i18next'
import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from '../tags/link'
import Skills from '../tags/skills'
import Skill from '../tags/skill'
library.add(fab)


class SkillShared extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var ele = <div>

            <Skills title="Programming Languages">
                <Skill>C/C++</Skill>
                <Skill>C#</Skill>
                <Skill>Java</Skill>
                <Skill>Assembly (NASM, MIPS)</Skill>
                <Skill>Javascript</Skill>
                <Skill>Python</Skill>
                <Skill>Lua</Skill>
            </Skills>
            <Skills title="Game Engines">
                <Skill>Cocos2d-x</Skill>
                <Skill>Unity</Skill>
                <Skill>Unreal</Skill>
            </Skills>
            <Skills title="Principle Frameworks / Libraries">
                <Skill>AndroidSDK</Skill>
                <Skill>OpenGL</Skill>
                <Skill>DirectX</Skill>
                <Skill>OpenCV</Skill>
            </Skills>
            <Skills title="Web Frameworks / Libraries">
                <Skill>Django</Skill>
                <Skill>Jquery</Skill>
                <Skill>NodeJS</Skill>
                <Skill>VueJS</Skill>
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
            <Skills title="Data Bases">
                <Skill>MYSQL</Skill>
                <Skill>SQLite</Skill>
            </Skills>

            <Skills title="Web">
                <Skill>HTML5 / CSS3</Skill>
                <Skill>Markdown</Skill>
                <Skill>WebGL</Skill>

            </Skills>

            <Skills title="Etc.">
                <Skill>Compiler</Skill>
                <Skill>Cross-Platform Architecture</Skill>
                <Skill>Open Source</Skill>
                <Skill>Linux Server</Skill>
                <Skill>NginX</Skill>
                <Skill>Algorithm</Skill>
                <Skill>Data Structure</Skill>
            </Skills>


        </div>
        return ele
    }

}

export default SkillShared;