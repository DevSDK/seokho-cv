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
          &nbsp; 선택과 집중, 목표를 정하고 그를 위해 끊임없이 노력하는 것. 제가 어렸을 때부터 해왔던 것입니다. 12살의 저는 게임을 좋아하는 게이머였습니다. 주로 마인크래프트 라는 게임을 즐겨했는데, 그 게임은 MOD라는 유저들이 만든 확장이 존재했습니다. 어느날 저는 그것을 직접 만들어 보고 싶다는 생각이 들었고, 저는 Java 전공 서적을 구입하면서 프로그래밍의 세계에 발을 들이게 됩니다. 그렇게 공부를 진행할수록 컴퓨터에 대해 조금 더 깊이있는 공부를 하고 싶었습니다. 운영체제, 네트워크, 컴퓨터 구조론과 같은 학문을 공부하면서 컴퓨터를 더 다양한 시각에서 바라볼 수 있게 되었고, 특히 배운걸 활용해 직접 개발해 보며 많은 경험을 쌓았습니다. 게임의 확장을 개발하고자 했던 저는 점진적으로 목표가 확장되며 직접 게임을 개발해보자는 목표를 세우고 나만의 아이디어로 게임을 만들어 상을 받게 됩니다. 게임 엔진을 활용하여 게임을 만들다 보니 게임 엔진 자체에 대해 많은 흥미가 생겼고, 게임엔진 아키텍쳐를 공부하여 OpenGL과 GLES및 Android SDK를 활용해 Java 기반의 멀티플랫폼 게임 엔진  Coment Engine을 개발하였습니다.

 <br /> &nbsp; 점점 더 Native로 내려가던 도중, 나만의 OS를 만들어 보고 싶다는 생각을 가졌고, X86 범용 운영체제를 부트로더 부터 쉘 까지 개발하는 프로젝트 0SOS를 개발하며 현대의 대규모 운영체제들의 시작점을 경험 할 수 있었습니다. 특히 개발을 하기 위해 인텔의 x86 아키텍처 가이드라인을 살펴보기도 하는 등 국제 표준과 실제 컴퓨터의 구조를 알 수 있었습니다.

 <br /> &nbsp;다양한 프로젝트로 경험을 쌓는 도중 sw마에스트로 8기로 선정되어 가상머신과, 컴퓨터 그래픽스와 관련된 프로젝트를 진행하였습니다.

  이러한 경험을 나누고 세상에 기여하기 위하여 오픈소스 활동에 관심을 가지고 참여하고 있습니다. 참여한 프로젝트로는 Osu!, Osu! Framework, Linux Kernel, solved-ac가 있습니다.
<br /> &nbsp; 오픈소스 활동에는 영어가 필수적임을 알게되었고, today와 to day조차 구분하지 못했던 영어실력을 자기주도적으로 그리고 나만의 커리큘럼을 통해 향상시킬 수 있었습니다.

영어를 통해 전세계의 개발자들과 소통하며 개발해 나가는 오픈소스의 매력에 빠졌고, 이를 다른사람들에게도 알리기 위해 학교 멘토로써 멘티들에게 오픈소스에 대한 강연을 진행하기도 하였습니다.

<br /> &nbsp; 저는 WebPage을 비롯한 High Level Software부터 Kernel Driver와 같은 Low Level Software까지 모두 경험해보았고, 이것들을 포용할 수 있는 넓은 바운더리를 가지고 있습니다. 그리고 전 이것을 저만의 큰 장점이라고 생각합니다.

<br /> &nbsp; 정보화시대에는 창의적, 생산적, 자기주도적인 것들이 필수 요소라고 생각되어집니다. 저는 그러한 요소들을 고루 가지고 있다고 확신할 수 있습니다.
            </Items>

        <PrintBreak />
        <Items title="Awards">
          <AwardItem year='2020' title='멘토링 경진대회' prize='2위' from='배재대학교 컴퓨터공학부' />

          <AwardItem year='2019' title='프로그래밍 경진대회' prize='1위' from='배재대학교 컴퓨터공학부' />
          <AwardItem year='2019' title='학술제' prize='1위' from='배재대학교 컴퓨터공학부' />
          <AwardItem year='2017' title='대전 스타트업 경진대회' prize='1위' from='대한민국 대전광역시' />
          <AwardItem year='2017' title='대전 과학경진대회' prize='특상' from='대한민국 대전광역시' />

          <AwardItem year='2017' title='대전 기능경기대회' prize='3위' from='대한민국 대전광역시 기능경기대회 위원회' />
          <AwardItem year='2016' title='Smarteen App Chalange (STAC)' prize='1위 (특별상)' from='SKT TexchX' />
          <AwardItem year='2016' title='한국 정보 올림피아드 (공모부분)' prize='3위' from='대한민국 과학기술정보통신부' />
          <AwardItem year='2015' title='한국 정보 올림피아드 (공모부분)' prize='1위' from='대한민국 미래창조과학부 (현 과기정통부)' />
          <AwardItem year='2015' title='대전 정보 올림피아드 (경시부분)' prize='장려상' from='대한민국 대전 교육정보원' />
          <AwardItem year='2015' title='전국 대학부설 영재교육원 사사과정 연구성과 발표대회' prize='2nd' from='대한민국 KAIST' />

        </Items>

        <PrintBreak />
        <Items title="Project Experiences">

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
            교내 프로젝트, GCP를 이용해 추출한 얼굴의 감정 정보를 크롬 로컬 스토리지에 저장하는 프로젝트. 팀장 역할
            <ul>
              <li> 팀프로젝트</li>
              <li> JQuery, Bootstrap, Google Cloud Platform, Face Recognition</li>
              <li> Web, AI, CV</li>
              <li><a className='breakable' href="https://github.com/DevSDK/GCPWebProejct">저장소: https://github.com/DevSDK/GCPWebProejct</a></li>
            </ul>
          </ProjectItem>


          <ProjectItem title='Batu' date='2017.06-2017.12' >
            Batu 프로젝트는 가상 머신 솔루션이다. 근간이 되는 컨셉트는 하나의 머신을 여러명이 사용할 수 있게 하는 것. 팀프로젝트로써 OpenGL 렌더링 패널과 그래픽스 파트에서의 최적화 역할을 맡았다.
            <ul>
              <li> SW 마에스트로 8기 팀프로젝트 </li>
              <li> C/C++ </li>
              <li> System, Linux, OpenGL </li>
              <li><a className='breakable' href="https://github.com/Bac0de">저장소: https://github.com/Bac0de</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='0SOS' date='2017.06-' >
            0SOS 프로젝트는 x86/64 (IA-32) 범용 운영체제 개발 프로젝트다. 이 프로젝트로 메모리관리와 디버깅방법, 로우레벨 시스템에 대한 많은 지식을 얻었다.
          <ul>
              <li> 개인 프로젝트</li>
              <li> Assembly (NASM), C</li>
              <li> System, Kernel, Operating System </li>
              <li><a className='breakable' href="https://github.com/DevSDK/0SOS">저장소: https://github.com/DevSDK/0SOS</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Connseed' date='2017.06-207.07' >
            Connseed 프로젝트는 스마트 팜 & 모니터링 솔루션으로, SKT Lora 네트워크 망을 사용한다. 팀프로젝트로, 백엔드 개발과 API디자인, 프론트엔드 연동을 맡았다.

             <ul>
              <li>팀프로젝트</li>
              <li> Python, Django, SQLite </li>
              <li> A solution, Application, IOT </li>
              <li><a className='breakable' href="https://github.com/DevSDK/Connseed_Server">서버 저장소: https://github.com/DevSDK/Connseed_Server</a></li>

            </ul>
          </ProjectItem>
          <ProjectItem title='Co-Language' date='2016.12-2017.01' >
            C-Like 프로그래밍 언어로, Bision 과 Flex가 사용되었다. 이 프로젝트를 통해 컴파일러의 내부 구조와 백엔드 그리고 프론트엔드에 대한 지식을 확장할 수 있었다.
             <ul>
              <li> 개인 프로젝트 </li>
              <li> Bision, Flex, C/C++ </li>
              <li> Programming Language </li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Block GL' date='2016.10-2016.12' >
            Block GL은 블럭 기반 WebGL 프로그래밍 솔루션이다. 사용자가 블럭을 수정하면 Block GL이 GLSL 소스코드를 생성하고 실시간으로 렌더링한다. 팀프로젝트로, WebGL 블럭 디자인과, GLSL 파트를 맡았다.
             <ul>
              <li> 팀프로젝트 </li>
              <li> JS, Blockly, WebGL, Pair Programming </li>
              <li> Webpage </li>
              <li><a className='breakable' href="https://devsdk.github.io/BlockGL/Code/Editor/Editor.html">URL: https://devsdk.github.io/BlockGL/Code/Editor/Editor.html</a></li>
              <li><a className='breakable' href="https://github.com/DevSDK/BlockGL">저장소: https://github.com/DevSDK/BlockGL</a></li>

            </ul>
          </ProjectItem>

          <ProjectItem title='책첵' date='2016.7-2016.10' >
            책첵은 IT 기기를 활용한 21세기 스마트 도서관 시스템으로, 책들은 RFID테그를 통해 스마트하고 편리하게 관리된다. 팀프로젝트로, 관리자 클라이언트, 이슈해결, 통신 연동이였다.
             <ul>
              <li> 팀프로젝트 </li>
              <li> Java, JS, NodeJS, Android, Arduino </li>
              <li> A solution, Application </li>
            </ul>
          </ProjectItem>
          <ProjectItem title='Comet Engine' date='2016.06-2016.12' >
            Comet Engine 프로젝트는 게임엔진 개발 프로젝트이며, Java 기반의 크로스플랫폼 게임엔진이다. Android, Linux Windows를 지원한다.
             <ul>
              <li>개인프로젝트</li>
              <li> Java, GLSL </li>
              <li> Game Engine, OpenGL/GLES </li>
              <li><a className='breakable' href="https://github.com/DevSDK/CometEngine-old">Repository: https://github.com/DevSDK/CometEngine-old</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Arrive The Light' date='2015.06-2015.07' >
            Arrive The Light는 광선을 활용한 2D 퍼즐게임이다. Cocos2d-x, C++을 이용해 개발되었다. 이 프로젝트로 정보올림피아드 공모부분 대상을 탈 수 있었다.
            <ul>
              <li> C/C++ </li>
              <li> Game, Cocos2d-x </li>
            </ul>
          </ProjectItem>
        </Items>

        <PrintBreak />


        <Items title="Open Source Experiences">

          <ProjectItem title='Solvedac-plugin' date='2019.11-' >
            맴버가 아닌 사람도 레이팅을 임시로 계산할 수 있는 기능을 제안 & 구현하였다.
             <ul>
              <li>Contributor</li>
              <li> JS/HTML </li>
              <li> Chrome-extension </li>
              <li><a className='breakable' href="https://github.com/shiftpsh/solvedac-plugin/pull/23 ">Patch: https://github.com/shiftpsh/solvedac-plugin/pull/23 </a></li>
            </ul>
          </ProjectItem>
          <ProjectItem title='Osu!' date='2017.12-' >
            Retry 카운터에 문제가 있는걸 발견하고 고쳤다.
             <ul>
              <li>Contributor</li>
              <li> C# </li>
              <li> Game </li>
              <li><a className='breakable' href="https://github.com/ppy/osu/pull/1709 ">Patch: https://github.com/ppy/osu/pull/1709 </a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Osu!-Framework' date='2017.12-' >
            비동기 함수를 사용하는 부분에 대한 문제를 제시하고 그 가능성을 제거하였다.
             <ul>
              <li>Contributor</li>
              <li> C# </li>
              <li> Game Engine, Framework</li>
              <li><a className='breakable' href="https://github.com/ppy/osu-framework/pull/1241">Patch: https://github.com/ppy/osu-framework/pull/1241</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Perf, Kernel/Linux' date='2017.12-' >
            Perf GUI의 잘못된 초기화 순서를 고쳤다.
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

        <Items title="Activity">
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
      </MainLayout>
    </div>
  );
}
