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
      <MainLayout lng='ko'>
        <Items title="Introduce">
          <br/>
        <span style={{fontWeight:'bold'}}>하고싶은거 하는 개발자입니다. </span>
<br/>
다양한 경험을 토대로 넓은 개발 스팩트럼을 가지고 있습니다.
<br/>
&nbsp;초등학생 시절, 좋아하던 게임 '마인크래프트'의 모드를 개발하는 것을 시작으로 프로그래밍 세계에 뛰어들었습니다. 다양한 프로그래밍과 관련된 모든 것에 관심을 가지고 있으며, 특히 Web Browser, Operating System에 관심을 가지고, 최근에는 Algorithm에 관심을 많이 가지고 있습니다.

<br/>

&nbsp; 준비된 자가 기회를 잡을 수 있다고 믿고 있으며, 항상 준비된 사람이 되기 위해 노력하고 있습니다.



            </Items>

        <Items title="Awards">
          <AwardItem year='2019' title='프로그래밍 경진대회' prize='1위' from='배재대학교 컴퓨터공학부' />
          <AwardItem year='2019' title='학술제' prize='1위' from='배재대학교 컴퓨터공학부' />
          <AwardItem year='2017' title='대전 기능경기대회(게임개발부분)' prize='3위' from='대한민국 대전광역시 기능경기대회 위원회' />
          <AwardItem year='2016' title='한국 정보 올림피아드 (공모부분)' prize='3위' from='대한민국 과학기술정보통신부' />
          <AwardItem year='2015' title='한국 정보 올림피아드 (공모부분)' prize='1위' from='대한민국 미래창조과학부 (현 과기정통부)' />
          <AwardItem year='2015' title='대전 정보 올림피아드 (경시부분)' prize='장려상' from='대한민국 대전 교육정보원' />


        </Items>

        <PrintBreak />
        <Items title="Projects">

          <ProjectItem title='seokho-cv' date='2020.08-' >
            이 페이지.
            <ul>
              <li> 개인 프로젝트 </li>
              <li> React, Gatsby</li>
              <li> Multi Language Static Web page </li>
              <li><a className='breakable' href="https://github.com/DevSDK/seokho-cv">저장소: https://github.com/DevSDK/seokho-cv</a></li>
            </ul>
          </ProjectItem>


          <ProjectItem title='GCP-WebProject' date='2019.11-2019-12' >
            Google Cloud Platform을 활용한 안면 인식/감정 추출
            <ul>
              <li> 팀프로젝트</li>
              <li> JQuery, Bootstrap, Google Cloud Platform, Face Recognition</li>
              <li> Web, AI, CV</li>
              <li><a className='breakable' href="https://github.com/DevSDK/GCPWebProejct">저장소: https://github.com/DevSDK/GCPWebProejct</a></li>
            </ul>
          </ProjectItem>


          <ProjectItem title='Batu' date='2017.06-2017.12' >
            KVM기반의 가상머신 솔루션. 하나의 머신을 여러 유저가 사용한다는 컨셉
            <ul>
              <li> SW 마에스트로 8기 팀프로젝트 </li>
              <li> C/C++ </li>
              <li> System, Linux, OpenGL </li>
              <li><a className='breakable' href="https://github.com/Bac0de">저장소: https://github.com/Bac0de</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='0SOS' date='2017.06-' >
          64비트 범용 운영체제 개발 프로젝트
          <ul>
              <li> 개인 프로젝트</li>
              <li> Assembly (NASM), C</li>
              <li> System, Kernel, Operating System </li>
              <li><a className='breakable' href="https://github.com/DevSDK/0SOS">저장소: https://github.com/DevSDK/0SOS</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Connseed' date='2017.06-207.07' >
            SKT 로라 네트워크 기반 스마트팜 솔루션

             <ul>
              <li>팀프로젝트</li>
              <li> Python, Django, SQLite </li>
              <li> A solution, Application, IOT </li>
              <li><a className='breakable' href="https://github.com/DevSDK/Connseed_Server">서버 저장소: https://github.com/DevSDK/Connseed_Server</a></li>

            </ul>
          </ProjectItem>
          <ProjectItem title='Co-Language' date='2016.12-2017.01' >
            프로그래밍 언어 개발 프로젝트
             <ul>
              <li> 개인 프로젝트 </li>
              <li> Bision, Flex, C/C++ </li>
              <li> Programming Language </li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Block GL' date='2016.10-2016.12' >
            스크래치같은 WebGL 블록코딩 웹페이지
             <ul>
              <li> 팀프로젝트 </li>
              <li> JS, Blockly, WebGL, Pair Programming </li>
              <li> Webpage </li>
              <li><a className='breakable' href="https://devsdk.github.io/BlockGL/Code/Editor/Editor.html">URL: https://devsdk.github.io/BlockGL/Code/Editor/Editor.html</a></li>
              <li><a className='breakable' href="https://github.com/DevSDK/BlockGL">저장소: https://github.com/DevSDK/BlockGL</a></li>

            </ul>
          </ProjectItem>

          <ProjectItem title='책첵' date='2016.7-2016.10' >
            스마트 라이브러리 시스템
             <ul>
              <li> 팀프로젝트 </li>
              <li> Java, JS, NodeJS, Android, Arduino </li>
              <li> A solution, Application </li>
            </ul>
          </ProjectItem>
          <ProjectItem title='Comet Engine' date='2016.06-2016.12' >
              Java기반 크로스 플랫폼 게임엔진
             <ul>
              <li>개인프로젝트</li>
              <li> Java, GLSL </li>
              <li> Game Engine, OpenGL/GLES </li>
              <li><a className='breakable' href="https://github.com/DevSDK/CometEngine-old">Repository: https://github.com/DevSDK/CometEngine-old</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Arrive The Light' date='2015.06-2015.07' >
            빛의 광선을 활용한 2D 게임
            <ul>
              <li> C/C++ </li>
              <li> Game, Cocos2d-x </li>
            </ul>
          </ProjectItem>
        </Items>

        <PrintBreak />


        <Items title="Open Source Experiences">

        <ProjectItem title='Chromium' date='2020.8-' >
            구글 크로미움 프로젝트 맴버
             <ul>
              <li>Contributor</li>
              <li> C++</li>
              <li><a className='breakable' href="https://chromium-review.googlesource.com/dashboard/1438488 ">Dashboard: https://chromium-review.googlesource.com/dashboard/1438488 </a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Solvedac-plugin' date='2019.11-' >
            맴버가 아닌 사람도 레이팅을 임시로 계산할 수 있는 기능을 제안 & 구현
             <ul>
              <li>Contributor</li>
              <li> JS/HTML </li>
              <li> Chrome-extension </li>
              <li><a className='breakable' href="https://github.com/shiftpsh/solvedac-plugin/pull/23 ">Patch: https://github.com/shiftpsh/solvedac-plugin/pull/23 </a></li>
            </ul>
          </ProjectItem>
          <ProjectItem title='Osu!' date='2017.12-' >
            Retry 카운터에 문제가 있는걸 발견하고 고침
             <ul>
              <li>Contributor</li>
              <li> C# </li>
              <li> Game </li>
              <li><a className='breakable' href="https://github.com/ppy/osu/pull/1709 ">Patch: https://github.com/ppy/osu/pull/1709 </a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Osu!-Framework' date='2017.12-' >
            비동기 함수를 사용하는 부분에 대한 문제를 제시하고 그 가능성을 제거함
             <ul>
              <li>Contributor</li>
              <li> C# </li>
              <li> Game Engine, Framework</li>
              <li><a className='breakable' href="https://github.com/ppy/osu-framework/pull/1241">Patch: https://github.com/ppy/osu-framework/pull/1241</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Perf, Kernel/Linux' date='2017.12-' >
            Perf GUI의 잘못된 초기화 순서를 올바르게 고침
             <ul>
              <li>Contributor</li>
              <li> C </li>
              <li> System, Linux </li>
              <li><a className='breakable' href="https://bit.ly/2PazOTn">Patch: https://bit.ly/2PazOTn</a></li>
            </ul>
          </ProjectItem>
        </Items>

        <PrintBreak />

        <Items title="Skills">
          <SkillShared />
        </Items>

        <Items title="Activities">
          <ul>
           <li>(2020) Open Source 컨트리뷰톤 Chromium 팀</li>
            <li>(2017) SW 마에스트로 8기</li>
            <li>(2015) 충남대학교 정보영재교육원 사사과정</li>
            <li>(2014) 충남대학교 정보영재교육원 심화과정</li>

          </ul>

        </Items>
        
        <Items title="Certificates">
          <ul>
            <li>(2016) 정보처리기능사</li>
          </ul>
        </Items>

        <Items title="Educations">
          <ul>
            <li>(2019) 배재대학교 컴퓨터 공학과</li>
          </ul>
        </Items>
        <Items title="ETC"> 
        <AwardItem year='2020' title='멘토링 경진대회' prize='2위' from='배재대학교 컴퓨터공학부' />
          <AwardItem year='2017' title='대전 스타트업 경진대회' prize='1위' from='대한민국 대전광역시' />
          <AwardItem year='2017' title='대전 과학경진대회' prize='특상' from='대한민국 대전광역시' />
          <AwardItem year='2016' title='Smarteen App Chalange (STAC)' prize='1위 (특별상)' from='SKT TexchX' />
          <AwardItem year='2015' title='전국 대학부설 영재교육원 사사과정 연구성과 발표대회' prize='2nd' from='대한민국 KAIST' />
        </Items>

        
      </MainLayout>
    </div>
  );
}
