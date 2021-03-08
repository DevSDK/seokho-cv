import React from "react";

import MainLayout from '../layouts/main-layout'
import Items from '../components/items'
import AwardItem from '../components/awardItem'
import ProjectItem from '../components/projectItem'
import SkillShared from '../shared/skillShared'
import PrintBreak from '../components/printBreak'
export default function App() {
  return (

    <div>
      <MainLayout lng='ko'>
        <Items title="Introduce">

          <div className="introduce-content">

            <span className="introduce-title">세상을 바꾸는 엔지니어입니다.</span><br />
            &nbsp;  더 나은 세상을 만들고자 오픈소스에서 적극적으로 활동하고 있고, 세상에 기여하는 것을 즐기고 있습니다. 
            현재는 Chromium 프로젝트의 맴버로 활동하며 Chromium Blink 웹 엔진 기능 구현 및 버그픽스 작업을 하고 있습니다. 
            구현한 기능(Select Custom Scroll Bar)이 크롬 라이브 버전에 업데이트되어 그 기능을 기다리던 사람들에게 감사 인사를 받기도 하였습니다. 
            이러한 경험을 나누고 성장하며, 세상을 변화시키고자 하는 사람들과 함께 나아가기를 기대하고 있습니다.<br />
            <br />
            <span className="introduce-title">다양한 경험을 좋아합니다.</span><br />
            &nbsp; 다양한 경험을 토대로 넓은 개발 스팩트럼을 가지고 있습니다. 저는 안드로이드 어플리케이션, 웹 프론트엔드 / 백엔드, 시스템소프트웨어 / 응용소프트웨어 등 분야의 경계를 뛰어넘어 다양한 개발 경험을 하는 것을 항상 즐겨왔고, 도전했습니다. 정보올림피아드를 시작으로 여러 대회에서 상을 받는 등 다양한 성과를 냈습니다. 또한 한국 정보산업 연합회 (Fkii)가 주관하는SW마에스트로 8기에 선정되어 훌륭한 사람들과 어깨를 나란히 하며 멘토링을 받고 프로젝트를 진행하는 등 다양한 경험을 하였습니다.
  새로운 Web Feature (i.e. <a href="https://chromestatus.com/feature/6261030015467520">WebNFC</a>)에 관심을 가지고 살펴보고 있습니다. Chromium에 Ship되거나 제안되는 웹 피쳐들은 <a href="https://groups.google.com/a/chromium.org/g/blink-dev/">여기서 </a>찾아볼 수 있습니다.
   또한 최근에는 웹서비스에 관심을 가지고 go 언어 기반 백엔드, React 기반 프론트엔드 프로젝트 DFD를 진행하였습니다.<br />
            
            <br />
            <span className='introduce-title'>같이 일하고 싶은 "소통하는 개발자"를 지향합니다.</span><br/>
              &nbsp; 다양한 개발 패러다임에 대해 열린 마음으로 받아들이고, 문제에 대해 더 나은 방향을 같이 고민하며, 블로그에 아티클을 공유하거나 코드리뷰를 해나가면서 동료에게 끊임없이 도움과 인사이트를 주는 개발자가 되고 싶습니다.
             이를 위해 오픈소스 개발자들과 개발하고 있는 것에 대해 소통하기 위한 디자인 문서를 쓰고, 블로그에 습득한 지식과 기술 사항을 정리하고 있습니다. <br/>
              &nbsp; 준비된 자가 기회를 잡을 수 있다고 믿고 있으며, 항상 준비된 사람이 되기 위해 노력하고 있습니다.<br/>

          </div>
        </Items>

        <Items title="Activities">
          <ul>
            <li>(2020) Open Source 컨트리뷰톤 Chromium 팀 ( 주관: 정보통신산업진흥원(NIPA) )</li>
            <li>(2017) SW 마에스트로 8기 ( 정보산업연합회 (FKII) 산하) )</li>
            <li>(2015) 충남대학교 정보영재교육원 사사과정 (소논문 작성)</li>
            <li>(2014) 충남대학교 정보영재교육원 심화과정</li>

          </ul>

        </Items>

        <Items title="Awards">
          <AwardItem year='2020' title='컨트리뷰톤' prize='2위' from='정보산업통신산업진흥원' />
          <AwardItem year='2020' title='SW 융합 해커톤 경진대회' prize='1위' from='배재대학교 컴퓨터공학부' />

          <AwardItem year='2019' title='프로그래밍 경진대회' prize='1위' from='배재대학교 컴퓨터공학부' />
          <AwardItem year='2019' title='학술제' prize='1위' from='배재대학교 컴퓨터공학부' />
          <AwardItem year='2017' title='대전 기능경기대회(게임개발부분)' prize='3위' from='대한민국 대전광역시 기능경기대회 위원회' />
          <AwardItem year='2016' title='한국 정보 올림피아드 (공모부분)' prize='3위' from='대한민국 과학기술정보통신부' />
          <AwardItem year='2015' title='한국 정보 올림피아드 (공모부분)' prize='1위' from='대한민국 미래창조과학부 (현 과기정통부)' />
          <AwardItem year='2015' title='대전 정보 올림피아드 (경시부분)' prize='장려상' from='대한민국 대전 교육정보원' />
        </Items>
        <Items title="Devlog">
          <a className="devlog-url" href="https://devsdk.github.io/ko">https://devsdk.github.io/ko</a>
        </Items>
        <PrintBreak />



        <Items title="Open Source Projects">

          <ProjectItem title='Chromium' date='2020.8-' >
            구글 크로미움 프로젝트 맴버
             <ul>
              <li>Project Member</li>
              <li> C++, HTML/CSS/Javascript</li>
              <li><a className='breakable' href="https://chromestatus.com/feature/5657825571241984">CSS calc infinity and NaN feature owner </a></li>
              <li><a className='breakable' href="https://chromium-review.googlesource.com/dashboard/1438488 ">Dashboard: https://chromium-review.googlesource.com/q/owner:0xdevssh%2540gmail.com </a></li>
              <li><a className='breakable' href="https://chromium-review.googlesource.com/q/owner:0xdevssh%2540gmail.com ">Work: https://chromium-review.googlesource.com/q/owner:0xdevssh%2540gmail.com </a>  </li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Perf, Kernel/Linux' date='2017.12-2017.12' >
            Perf GUI의 잘못된 초기화 순서를 올바르게 고침
             <ul>
              <li>Contributor</li>
              <li> C </li>
              <li> System, Linux </li>
              <li><a className='breakable' href="https://bit.ly/2PazOTn">Patch: https://bit.ly/2PazOTn</a></li>
            </ul>
          </ProjectItem>
          <ProjectItem title='Osu!' date='2017.12-2017.12' >
            Retry 카운터에 문제가 있는걸 발견하고 고침
             <ul>
              <li>Contributor</li>
              <li> C# </li>
              <li> Game </li>
              <li><a className='breakable' href="https://github.com/ppy/osu/pull/1709 ">Patch: https://github.com/ppy/osu/pull/1709 </a></li>
            </ul>
          </ProjectItem>


          <ProjectItem title='Osu!-Framework' date='2017.12-2017.12' >
            비동기 함수를 사용하는 부분에 대한 문제를 제시하고 그 가능성을 제거함
             <ul>
              <li>Contributor</li>
              <li> C# </li>
              <li> Game Engine, Framework</li>
              <li><a className='breakable' href="https://github.com/ppy/osu-framework/pull/1241">Patch: https://github.com/ppy/osu-framework/pull/1241</a></li>
            </ul>
          </ProjectItem>
          <ProjectItem title='Solvedac-plugin' date='2019.11-2019.11' >
            맴버가 아닌 사람도 레이팅을 임시로 계산할 수 있는 기능을 제안 & 구현
             <ul>
              <li>Contributor</li>
              <li> JS/HTML </li>
              <li> Chrome-extension </li>
              <li><a className='breakable' href="https://github.com/shiftpsh/solvedac-plugin/pull/23 ">Patch: https://github.com/shiftpsh/solvedac-plugin/pull/23 </a></li>
            </ul>
          </ProjectItem>
        </Items>
        <PrintBreak />
        <Items title="Projects">


        <ProjectItem title='DFD' date='2021.1-2021.2'>
            롤팟 'fv'을 위해 League of Legends 승률과 전적을 제공하는 웹서비스
            <ul>
              <li> 개인프로젝트</li>
              <li> Golang, Gin-Gonic, MongoDB, Docker, JWT, Kubernetes, RESTFul, Redis, RIOT API, React </li>
              <li> Web-Service, Back-end, Restful API</li>
              <li><a className='breakable' href="https://devsdk.net/dfd"> Service: https://devsdk.net/dfd</a></li>
              <li><a className='breakable' href="https://github.com/DevSDK/DFD">Repository: https://github.com/DevSDK/DFD</a></li>
            </ul>
          </ProjectItem>


          <ProjectItem title='EmotionTalk' date='2020.11-2020.11' >
            Google Cloud Platform을 활용한 안면 인식/감정 추출 기반 어플리케이션
            <ul>
              <li> 개인프로젝트</li>
              <li> ReactNative, Google Cloud Platform, Face Recognition</li>
              <li> Android, AI, CV</li>
              <li><a className='breakable' href="https://bit.ly/3qwTnGk">발표자료(Google Presentation) (https://bit.ly/3qwTnGk)</a></li>
            </ul>
          </ProjectItem>


          <ProjectItem title='GCP-WebProject' date='2019.11-2019-12' >
            Google Cloud Platform을 활용한 안면 인식/감정 추출 기반 웹 프로젝트
            <ul>
              <li> 팀프로젝트</li>
              <li> JQuery, Bootstrap, Google Cloud Platform, Face Recognition</li>
              <li> Web, AI, CV</li>
              <li><a className='breakable' href="https://github.com/DevSDK/GCPWebProejct">Repository: https://github.com/DevSDK/GCPWebProejct</a></li>
            </ul>
          </ProjectItem>


          <ProjectItem title='Batu' date='2017.06-2017.12' >
            KVM기반의 가상머신 솔루션. 하나의 머신을 여러 유저가 사용한다는 컨셉
            <ul>
              <li> SW 마에스트로 8기 팀프로젝트 </li>
              <li> C/C++ </li>
              <li> System, Linux, OpenGL </li>
              <li><a className='breakable' href="https://github.com/Bac0de">Repository: https://github.com/Bac0de</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='0SOS' date='2017.06-2017-12' >
            64비트 범용 운영체제 개발 프로젝트
          <ul>
              <li> 개인 프로젝트</li>
              <li> Assembly (NASM), C</li>
              <li> System, Kernel, Operating System </li>
              <li><a className='breakable' href="https://github.com/DevSDK/0SOS">Repository: https://github.com/DevSDK/0SOS</a></li>
            </ul>
          </ProjectItem>

          <ProjectItem title='Connseed' date='2017.06-207.07' >
            SKT 로라 네트워크 기반 스마트팜 솔루션

             <ul>
              <li>팀프로젝트</li>
              <li> Python, Django, SQLite </li>
              <li> A solution, Application, IOT </li>
              <li><a className='breakable' href="https://github.com/DevSDK/Connseed_Server">Server Repository: https://github.com/DevSDK/Connseed_Server</a></li>

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
              <li><a className='breakable' href="https://github.com/DevSDK/BlockGL">Repository: https://github.com/DevSDK/BlockGL</a></li>
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

        <Items title="Skills">
          <SkillShared />
        </Items>
        <Items title="Certificates">
          <ul>
            <li>(2020) TOEIC 835</li>
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
          <AwardItem year='2020' title='프로그래밍 경진대회' prize='2위' from='배재대학교 컴퓨터공학부' />
          <AwardItem year='2017' title='대전 스타트업 경진대회' prize='1위' from='대한민국 대전광역시' />
          <AwardItem year='2017' title='대전 과학경진대회' prize='특상' from='대한민국 대전광역시' />
          <AwardItem year='2016' title='Smarteen App Chalange (STAC)' prize='1위 (특별상)' from='SKT TexchX' />
          <AwardItem year='2015' title='전국 대학부설 영재교육원 사사과정 연구성과 발표대회' prize='2nd' from='대한민국 KAIST' />
        </Items>
      </MainLayout>
    </div>

    
  );
}
