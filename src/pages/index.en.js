import React from "react";
import MainLayout from '../layouts/main-layout'
import Contacts from '../shared/contacts'
import Items from '../tags/items'
import AwardItem from '../tags/awardItem'
import ProjectItem from '../tags/projectItem'
import SkillShared from '../shared/skillShared'
import PrintBreak from '../tags/printBreak'
export default function App() {
  return (

    <div>
      <MainLayout lng='en'>
        <Items title="Introduce">
        &nbsp; "Choice and concentration" that keywords, I always have in my mind since I was young. Twelve years old, I was a gamer. I usually played Minecraft. And that game has a Mod that was made by developer users. 
One day, I thought "I wanna make them". 
<br/> &nbsp;I opened the online bookstore and purchased Java Programming Language book. That was the moment to enter the programming world in my life.
<br/> &nbsp;I wanted to know more deep things while I studied more and more.  I decided to study Operating System, Networks, Computer Structure, and Computer Graphics.  And those things transformed into my codes. That experience was very unique to me. 
<br/> &nbsp;"I wanna make a Mode" gradually changed  "I wanna make a game". So I developed my own game based on my idea Lay and Mirror and I got the prize from the contest by my game. After the game, "How about Game Engine?" mind grown in my mind. So I studied Game Engine Architecture and finally developed "Comet Engine( A Java, AndroidSDK,  OpenGL, GLES based cross-platform Game Engine. )"
<br/> &nbsp; While I directed to the native area of programming, I remind the developer bucket list. That was my own operating system. And I dived into it. 0SOS project is an operating system developing project from the bootloader to shell. To develop 0SOS I read the Intel x86 Architecture documents. As a result, I finally and deeply knew what is the Computer.
<br/> &nbsp;With my programming experiences, I entered Software Maestro 8th as a mentee. I wrote the code for the virtual machine, optimization, and computer graphics. 

<br/> &nbsp;And I wished to share those experiences. Also, I want to contribute to the world. So I participated in Open Source Projects such as Osu!, Osu!-Framework, Linux Kernel, and solved-ac.

<br/> &nbsp;In opensource projects, English skills are required. And I had no idea what was English is, right before 2 years ago. For example, I cannot separate what was correct between "today" and "to day". But I am a good self-starter and hard-worker. I learned as quickly as possible to read and write even speaking and listening by my own-creative-curriculum.
<br/> &nbsp;I have experienced between High Levels like Web, Application, and Low Levels like Operating System, Game Engine, Compilers. I can handle the wide and various things. That is my strong point.
<br/> &nbsp;Nowadays, the Information era's talented people require creativity, productivity, and self-directed. And I swear, I'm satisfying those requirements.

        </Items>

        <PrintBreak/>
        <Items title="Awards">
          <AwardItem year='2020' title='Mentoring Competition' prize='2nd' from='Computer Science and Engineering in Pai Chai University' />

          <AwardItem year='2019' title='Programming Challange' prize='1st' from='Computer Science and Engineering in Pai Chai University' />
          <AwardItem year='2019' title='Programming Contest' prize='1st' from='Computer Science and Engineering in Pai Chai University' />
          <AwardItem year='2017' title='Daejeon Start Up Contest' prize='1st' from='Daejeon, Republic of Korea' />
          <AwardItem year='2017' title='Daejeon Science Contest' prize='Special Prize' from='Daejeon, Republic of Korea' />

          <AwardItem year='2017' title='Daejeon Skill Competition' prize='3rd' from='Organization of Daejeon skill competition, Daejeon, Republic of Korea' />
          <AwardItem year='2016' title='Smarteen App Chalange' prize='1st   (Special Prize)' from='SKT TexchX, Republic of Korea' />
          <AwardItem year='2016' title='Korea Olympiad in Informatics (Contest)' prize='3rd' from='Ministry of Science and ICT , Republic of Korea' />
          <AwardItem year='2015' title='Korea Olympiad in Informatics (Contest)' prize='1rd' from='Ministry of Science and ICT , Republic of Korea' />
          <AwardItem year='2015' title='Daejeon Olympiad in Informatics (Competition)' prize='Participation Prize' from='Daejeon Institute of Education Information, Republic of Korea' />
          <AwardItem year='2015' title='Korea Research Contest of gifted and talented education in collage' prize='2nd' from='Korea Advanced Institute of Science and Technology, Republic of Korea' />

        </Items>

        <PrintBreak/>
        <Items title="Project Experiences">

        <ProjectItem title='seokho-cv' date='2020.08-' >
            This page.
            <ul>
              <li> Persnal Project </li>
              <li> React, Gatsby</li>
              <li> Multi Language Static Web page </li>
              <li><a className='breakable' href="https://github.com/DevSDK/seokho-cv">Repository: https://github.com/DevSDK/seokho-cv</a></li>
            </ul>
          </ProjectItem>


          <ProjectItem title='GCP-WebProject' date='2019.11-2019-12' >
            project in university. the emotion of the evaluated by GCP store to chrome local stroage. My role was the leader of this project.
            <ul>
              <li> Team Project </li>
              <li> JQuery, Bootstrap, Google Cloud Platform, Face Recognition</li>
              <li> Web, AI, CV</li>
              <li><a className='breakable' href="https://github.com/DevSDK/GCPWebProejct">Repository: https://github.com/DevSDK/GCPWebProejct</a></li>
            </ul>
          </ProjectItem>


          <ProjectItem title='Batu' date='2017.06-2017.12' >
            Batu is a virtual machine solution. The base concept is 'Use multiple people a computer.' This project is a team project. My role was "OpenGL Rendering and Optimization of graphic part"  <ul>
              <li> SW Maestro 8th team project </li>
              <li> C/C++ </li>
              <li> System, Linux, OpenGL </li>
              <li><a className='breakable' href="https://github.com/Bac0de">Repository: https://github.com/Bac0de</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='0SOS' date='2017.06-' >
          0SOS project is a development project of 64bit (IA-32) general-purpose Operating System. This project was Breakthrough my knowledge of memory management, debugging methods, low-level systems.
          <ul>
              <li> Persnal Project </li>
              <li> Assembly (NASM), C</li>
              <li> System, Kernel, Operating System </li>
              <li><a className='breakable' href="https://github.com/DevSDK/0SOS">Repository: https://github.com/DevSDK/0SOS</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Connseed' date='2017.06-207.07' >

            Connseed project is a smart farming and monitoring solution using SKT Lora network. My role was to develop Back-END, API design, connect F/E.

             <ul>
              <li> Team Project </li>
              <li> Python, Django, SQLite </li>
              <li> A solution, Application, IOT </li>
              <li><a className='breakable' href="https://github.com/DevSDK/Connseed_Server">Server Repository: https://github.com/DevSDK/Connseed_Server</a></li>

            </ul>
          </ProjectItem>
          <ProjectItem title='Co-Language' date='2016.12-2017.01' >
            C-Like Programming Language Development project using Bision and Flex. This experience gives a chance to think about the compiler's internal structure such as back-end and front-end.
             <ul>
              <li> Persnal Project </li>
              <li> Bision, Flex, C/C++ </li>
              <li> Programming Language </li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Block GL' date='2016.10-2016.12' >
          Block GL is a block-based WebGL shader programming solution. When users edit the blocks, it would generate GLSL source code automatically and rendering WebGL with generated GLSL source code binding. My role was to guide design blocks WebGL and GLSL parts.
             <ul>
              <li> Team Project </li>
              <li> JS, Blockly, WebGL, Pair Programming</li>
              <li> Webpage </li>
              <li><a className='breakable' href="https://devsdk.github.io/BlockGL/Code/Editor/Editor.html">URL: https://devsdk.github.io/BlockGL/Code/Editor/Editor.html</a></li>
              <li><a className='breakable' href="https://github.com/DevSDK/BlockGL">Repository: https://github.com/DevSDK/BlockGL</a></li>

            </ul>
          </ProjectItem>

          <ProjectItem title='Book Check' date='2016.7-2016.10' >
            Book Check project's concept is the 21st century's smart library system using IT technology. Books can be maintained by an RFID tag system smartly comfortably. My role was to develop a manager client, resolve issues, and connect the communication system.
             <ul>
              <li> Team Project </li>
              <li> Java, JS, NodeJS, Android, Arduino </li>
              <li> A solution, Application </li>
            </ul>
          </ProjectItem>
          <ProjectItem title='Comet Engine' date='2016.06-2016.12' >
            Comet Engine project is a game engine development project. Comet Engine is a Java-based cross-platform game engine. It supports Android, Linux, Windows.
             <ul>
              <li>Persnal Project</li>
              <li> Java, GLSL </li>
              <li> Game Engine, OpenGL/GLES </li>
              <li><a className='breakable' href="https://github.com/DevSDK/CometEngine-old">Repository: https://github.com/DevSDK/CometEngine-old</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Arrive The Light' date='2015.06-2015.07' >
            Arrive The Light is a 2D puzzle game concept with light rays based on the Cocos2d-x game engine and C++ language. I god the prize of 1st place from the KOI competition (2015).
            <ul>
              <li> C/C++ </li>
              <li> Game, Cocos2d-x </li>
            </ul>
          </ProjectItem>
        </Items>

        <PrintBreak/>


        <Items title="Open Source Experiences">

        <ProjectItem title='Solvedac-plugin' date='2019.11-' >
        Suggested & implemented the feature non-regular member can evaluate their ratings. 
             <ul>
              <li>Contributor</li>
              <li> JS/HTML </li>
              <li> Chrome-extension </li>
              <li><a className='breakable' href="https://github.com/shiftpsh/solvedac-plugin/pull/23 ">Patch: https://github.com/shiftpsh/solvedac-plugin/pull/23 </a></li>
            </ul>
        </ProjectItem>
        <ProjectItem title='Osu!' date='2017.12-' >
        Found & Fix the bug on the Retry counter.  
             <ul>
              <li>Contributor</li>
              <li> C# </li>
              <li> Game </li>
              <li><a className='breakable' href="https://github.com/ppy/osu/pull/1709 ">Patch: https://github.com/ppy/osu/pull/1709 </a></li>
            </ul>
        </ProjectItem>

        <ProjectItem title='Osu!-Framework' date='2017.12-' >
        Suggest the possibility of asynchronous functions' problem. Fix the possibility.
             <ul>
              <li>Contributor</li>
              <li> C# </li>
              <li> Game Engine, Framework</li>
              <li><a className='breakable' href="https://github.com/ppy/osu-framework/pull/1241">Patch: https://github.com/ppy/osu-framework/pull/1241</a></li>
            </ul>
        </ProjectItem>

        <ProjectItem title='Perf, Kernel/Linux' date='2017.12-' >
        Fix the initialization order in Perf GUI. 
             <ul>
              <li>Contributor</li>
              <li> C </li>
              <li> System, Linux </li>
              <li><a className='breakable' href="https://bit.ly/2PazOTn">Patch: https://bit.ly/2PazOTn</a></li>
            </ul>
        </ProjectItem>

        </Items>
        <PrintBreak/>

        <Items title="Skills">
          <SkillShared/>
        </Items>


        <Items title="Activity">
          <ul>
           <li>(2020) Open Source Contributhon Chromium Team</li>
            <li>(2017) Software maestro 8th mentee</li>
            <li>(2015) Information special education 2nd step of chungnam national university</li>
            <li>(2014) Information special education 1st step of chungnam national university</li>
          </ul>

        </Items>

        <Items title="Certificates">
          <ul>
            <li>(2016) Craftsman Information Processing</li>
          </ul>
        </Items>

        <Items title="Educations">
          <ul>
            <li>(2019) Computer Science and Engineering of Pai Chai University</li>
          </ul>
        </Items>
      </MainLayout>
    </div>
  );
}
