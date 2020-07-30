import React from "react";
import MainLayout from '../layouts/main-layout'
import Contacts from '../shared/contacts'
import Items from '../tags/items'
import AwardItem from '../tags/awardItem'
import ProjectItem from '../tags/projectItem'
import Skills from '../tags/skills'
import Skill from '../tags/skill'
export default function App() {
  return (

    <div>
      <MainLayout lng='en'>
        <Items title="Introduce">
          &nbsp; "How?" or "Why"  Those keywords are always appeared in my mind when I met some technologies or theories.
          And then I tried to think deeply to figure out.
&nbsp; When I was 12 years old, I was curious about computer games. I usually played Minecraft.  That game has Mod system that is the game extensions made by developer players.<br />
One day, I hit on "I want to make that Mod. But How?
&nbsp; 12 years old young video game player was searching "How to make Mod"<br />
&nbsp; That was the moment of the first step to be a developer. In middle school, I wanted to develop a game. And I did it. <br />
As a high school student, I wanted to expand my knowledge. Like Computer Science, Networking, and so on. And I made my own game engine that was used for game making.<br />
&nbsp; Until now, I've focused on more experience and understand the principles. <br />
 In this area really need English skills. So I wanted to learning English as well. Right before 2 years ago, I cannot separate what is correct between "today" and "to day". But I am a good self-starter and hard-worker. I learned as quickly as possible to read and write even speaking and listening by my own-creative-curriculum.<br />
Nowadays, the Information era's talented people require creativity, productivity, and self-directed more and more.
        </Items>
        <Items title="Awards">
          <AwardItem year='2020' title='Mentoring Competition' prize='2nd' from='Computer Science and Engineering of Pai Chai University' />

          <AwardItem year='2019' title='Programming Challange' prize='1st' from='Computer Science and Engineering of Pai Chai University' />
          <AwardItem year='2019' title='Programming Contest' prize='1st' from='Computer Science and Engineering of Pai Chai University' />
          <AwardItem year='2017' title='Daejeon Start Up Contest' prize='1st' from='Daejeon, Republic of Korea' />
          <AwardItem year='2017' title='Daejeon Science Contest' prize='Special Prize' from='Daejeon, Republic of Korea' />

          <AwardItem year='2017' title='Daejeon Skill Competition' prize='3rd' from='Organization of Daejeon skill competition, Daejeon, Republic of Korea' />
          <AwardItem year='2016' title='Smarteen App Chalange' prize='1st   (Special Prize)' from='SKT TexchX, Republic of Korea' />
          <AwardItem year='2016' title='Korea Olympiad in Informatics (Contest)' prize='3rd' from='Ministry of Science and ICT , Republic of Korea' />
          <AwardItem year='2015' title='Korea Olympiad in Informatics (Contest)' prize='1rd' from='Ministry of Science and ICT , Republic of Korea' />
          <AwardItem year='2015' title='Daejeon Olympiad in Informatics (Competition)' prize='Participation Prize' from='Daejeon Institute of Education Information, Republic of Korea' />
          <AwardItem year='2015' title='Korea Research Contest of gifted and talented education in collage' prize='2nd' from='Korea Advanced Institute of Science and Technology, Republic of Korea' />

        </Items>
        <Items title="Project Experiences">
          <ProjectItem title='Batu' date='2017.6-2017.12' >
            Batu is a virtual machine solution. Base concept is 'Use multiple people a computer.' This projectt is team project and I took "OpenGL Rendering and Optimization of graphic part"  <ul>
              <li> C/C++ </li>
              <li> System, Linux, OpenGL </li>
              <li><a className='breakable' href="https://github.com/Bac0de">Repository: https://github.com/Bac0de</a></li>
            </ul>
          </ProjectItem>
          <ProjectItem title="">

          </ProjectItem>
        </Items>
        <Items title="Skills">
          <Skills title="Programming Languages">
            <Skill>C/C++</Skill>
            <Skill>Java</Skill>
            <Skill>Assembly (Nasm, MIPS)</Skill>
            <Skill>Python</Skill>
            <Skill>Javascript</Skill>
          </Skills>
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
