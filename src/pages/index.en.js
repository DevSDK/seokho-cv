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
       <span style={{fontWeight:'bold'}}> The developer who does everything I want to do.</span>
<br/>
I have a very wide spectrum of development through various experiences.
<br/>

&nbsp;In elementary students, I entered the programming world with developing Minecraft mod. I'm interested in everything related to programming, especially Web Browser, Operating System, and Algorithm recently. 
<br/>
&nbsp;I believe chance favors only the prepared mind. Now I work hard to be ready.

        </Items>




        <Items title="Awards">



          <AwardItem year='2019' title='Programming Challange' prize='1st' from='Computer Science and Engineering in Pai Chai University' />
          <AwardItem year='2019' title='Programming Contest' prize='1st' from='Computer Science and Engineering in Pai Chai University' />
          <AwardItem year='2017' title='Daejeon Skill Competition (Game Development)' prize='3rd' from='Organization of Daejeon skill competition, Daejeon, Republic of Korea' />
          <AwardItem year='2016' title='Korea Olympiad in Informatics (Contest)' prize='3rd' from='Ministry of Science and ICT , Republic of Korea' />
          <AwardItem year='2015' title='Korea Olympiad in Informatics (Contest)' prize='1rd' from='Ministry of Science and ICT , Republic of Korea' />
          <AwardItem year='2015' title='Daejeon Olympiad in Informatics (Competition)' prize='Participation Prize' from='Daejeon Institute of Education Information, Republic of Korea' />

        </Items>

        <PrintBreak/>
        <Items title="Projects">


          <ProjectItem title='GCP-WebProject' date='2019.11-2019-12' >
            Face Recognition using Google Cloud Platform. 
            <ul>
              <li> Team Project </li>
              <li> JQuery, Bootstrap, Google Cloud Platform, Face Recognition</li>
              <li> Web, AI, CV</li>
              <li><a className='breakable' href="https://github.com/DevSDK/GCPWebProejct">Repository: https://github.com/DevSDK/GCPWebProejct</a></li>
            </ul>
          </ProjectItem>


          <ProjectItem title='Batu' date='2017.06-2017.12' >
            Virtual Machine solution based on KVM. One Machine, Multi User concept.
            <ul>
              <li> SW Maestro 8th team project </li>
              <li> C/C++ </li>
              <li> System, Linux, OpenGL </li>
              <li><a className='breakable' href="https://github.com/Bac0de">Repository: https://github.com/Bac0de</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='0SOS' date='2017.06-' >
            An 64Bit general-purpose Operating system development project.
            <ul>
              <li> Persnal Project </li>
              <li> Assembly (NASM), C</li>
              <li> System, Kernel, Operating System </li>
              <li><a className='breakable' href="https://github.com/DevSDK/0SOS">Repository: https://github.com/DevSDK/0SOS</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Connseed' date='2017.06-207.07' >
            Smartfarm solution project based on SKT Lora network. 
             <ul>
              <li> Team Project </li>
              <li> Python, Django, SQLite </li>
              <li> A solution, Application, IOT </li>
              <li><a className='breakable' href="https://github.com/DevSDK/Connseed_Server">Server Repository: https://github.com/DevSDK/Connseed_Server</a></li>

            </ul>
          </ProjectItem>
          <ProjectItem title='Co-Language' date='2016.12-2017.01' >
            Programming Langauge development project.
             <ul>
              <li> Persnal Project </li>
              <li> Bision, Flex, C/C++ </li>
              <li> Programming Language </li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Block GL' date='2016.10-2016.12' >

          WebGL block coding webpage like scratch.
             <ul>
              <li> Team Project </li>
              <li> JS, Blockly, WebGL, Pair Programming</li>
              <li> Webpage </li>
              <li><a className='breakable' href="https://devsdk.github.io/BlockGL/Code/Editor/Editor.html">URL: https://devsdk.github.io/BlockGL/Code/Editor/Editor.html</a></li>
              <li><a className='breakable' href="https://github.com/DevSDK/BlockGL">Repository: https://github.com/DevSDK/BlockGL</a></li>

            </ul>
          </ProjectItem>

          <ProjectItem title='Book Check' date='2016.7-2016.10' >
            Smart libarry system
             <ul>
              <li> Team Project </li>
              <li> Java, JS, NodeJS, Android, Arduino </li>
              <li> A solution, Application </li>
            </ul>
          </ProjectItem>
          <ProjectItem title='Comet Engine' date='2016.06-2016.12' >
            Java based cross-platform game engine.
             <ul>
              <li>Persnal Project</li>
              <li> Java, GLSL </li>
              <li> Game Engine, OpenGL/GLES </li>
              <li><a className='breakable' href="https://github.com/DevSDK/CometEngine-old">Repository: https://github.com/DevSDK/CometEngine-old</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Arrive The Light' date='2015.06-2015.07' >
            Arrive The Light is a 2D puzzle game concept with light rays.
            <ul>
              <li> C/C++ </li>
              <li> Game, Cocos2d-x </li>
            </ul>
          </ProjectItem>
        </Items>

        <PrintBreak/>


        <Items title="Open Source Experiences">
        <ProjectItem title='Chromium' date='2020.8-' >
            The Chromium Project Member
             <ul>
              <li>Contributor</li>
              <li> C++</li>
              <li><a className='breakable' href="https://chromium-review.googlesource.com/dashboard/1438488 ">Dashboard: https://chromium-review.googlesource.com/dashboard/1438488 </a></li>
            </ul>
          </ProjectItem>
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


        <Items title="Activities">
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
        <Items title="ETC"> 
        <AwardItem year='2020' title='Mentoring Competition' prize='2nd' from='Computer Science and Engineering in Pai Chai University' />
         <AwardItem year='2017' title='Daejeon Start Up Contest' prize='1st' from='Daejeon, Republic of Korea' />
          <AwardItem year='2017' title='Daejeon Science Contest' prize='Special Prize' from='Daejeon, Republic of Korea' />
          <AwardItem year='2016' title='Smarteen App Chalange' prize='1st   (Special Prize)' from='SKT TexchX, Republic of Korea' />
          <AwardItem year='2015' title='Korea Research Contest of gifted and talented education in collage' prize='2nd' from='Korea Advanced Institute of Science and Technology, Republic of Korea' />
        </Items>

      </MainLayout>
    </div>
  );
}
