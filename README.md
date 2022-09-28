# To-Do-List-Site
포트폴리오용 토이프로젝트 - 여러 기능을 담은 To Do List 사이트입니다.
바닐라 자바스크립트로 모든 기능을 구현하였습니다.

#호스팅
netlify를 통해 호스팅한 사이트의 주소입니다.
https://to-do-site-jy.netlify.app/

#기능
  1. To Do List
  2. 계산기
  3. 이미지 슬라이드
  4. 캘린더(라이브러리 이용)

#디자인
: 피그마를 이용하여 사이트의 컨셉과 레아이웃을 잡았습니다.

#로그인-로그아웃
: 처음 사이트 접속 시 로그인 화면이 나타나며 사용자가 정보 입력시 로컬 스토리지에 정보가 저장됩니다.
: 로컬 스토리지에 사용자 정보가 있을 경우 로그인 화면이 나타나지 않습니다.
: 로그아웃버튼을 누르면 로컬 스토리지의 정보가 사라지며 사이트가 새로고침되어 로그인 화면이 다시 니타납니다.

#To Do List
: 노마드 코더의 클론코딩으로 배운 To Do List를 중심으로 리셋버튼을 추가 구현하였습니다. 
: To Do List 상단 입력창에 할 일을 입력하면 로컬 스토리지에 저장되며 입력창 하단에 리스트로 작성됩니다.
: 체크표시를 누르면 로컬 스토리지에 저장된 해당 리스트를 지우고 리스트를 다시 출력합니다.

#계산기
: 기본 사칙연산과 음수 양수 변환을 구현하였습니다.
: 해당하는 기능들은 함수 로직을 구현하여 버튼의 target 값에 따라 해당하는 함수가 실행될 수 있도록 하였습니다.

#이미지 슬라이드
: 첫 번째 이미지에서 이전 버튼을 누르면 마지막 이미지로, 마지막 이미지에서 이후 버튼을 누르면 첫 번째 이미지로 이동하는 무한 슬라이드입니다.
: 사용자가 이전, 이후 버튼을 누르지 않아도 7초마다 이미지가 이동하도록 구현하였습니다.

#캘린더
: fullcalendar 라이브러리를 사용하여 구현하였습니다.
: 기본 디자인을 그대로 사용하며 레이아웃에 맞도록 padding 값과 버튼의 크기만 조절하였습니다.

#랜덤 명언, 랜덤 배경
: 새로고침할 때마다 배경과 하단의 명언이 바뀌도록 구현하였습니다.

#반응형
: 1400px, 950px, 415px 을 기준으로 페이지의 레이아웃이 변경되도록 하였습니다.
: 1400px, 950px일 땐 메인 콘텐츠의 레이아웃이 변경되며 415px일 땐 콘텐츠의 크기가 줄어들도록 구현하였습니다.


#오류
1. js 로드 오류
: 자바스크립트를 기능별로 파일을 분류하였는데 JavaScript가 로드되는 순서에 문제가 있어 로그인 JS 파일의 이벤트가 정상 작동하지 않는 오류가 있었습니다. HTML이 전부 로드되기 전에 JavaScript가 먼저 실행되어 생기는 오류였습니다. 그래서 자바스크립트 로드 순서를 변경하여 로그인 JS 파일을 맨 위로 올려 오류를 해결하였습니다.

2. CSS 우선 적용
: 기능을 구현할 때 여러 번 고민했던 문제였습니다. 로그인 화면이 나타나는 경우 다른 콘텐츠를 숨겨야 하는데 콘텐츠에 설정해둔 display: flex가 우선 적용되어 display: hidden을 담은 클래스를 추가해도 적용되지 않았습니다. 그래서 최대한 css는 js에서 건드리지 않고 css 내에서 바꾸고 싶었지만 해결방법을 찾지 못해 클래스를 추가하는 것이 아니라 style.display = "none"으로 JS에서 직접 css를 변경해주는 방법을 사용하여 해결하였습니다.

: 동일한 클래스를 사용하거나 부모로 묶여있는 클래스의 경우 우선순위가 적용되어 미디어 쿼리가 적용되지 않는 점을 알게 되었습니다. 따라서 미디어 쿼리로 적용할 클래스들은 부모 클래스를 함께 작성하며 우선순위로 적용될 수 있도록 하였습니다.

: 모바일 화면으로 봤을 때 로그인 화면에서 메인 콘텐츠가 숨겨지지 않고 로그인 화면 아래로 나타나는 것을 발견했습니다. pc에선 문제가 없었는데 확인해보니 콘텐츠가 담긴 main 클래스에 display grid와 hidden 클래스의 display: none가 있는데 css 선택자에서 둘의 우선순위가 동일하여 display: grid가 적용되는 것을 확인할 수 있었습니다. 따라서 hidden의 우선순위를 높히기 위해 body .hidden으로 클래스를 세분화해주어 해결하였습니다.


#회고
: 큰 프로젝트는 아니었지만 처음으로 무언가를 구상하고 구현한 프로젝트라 기능이 구현될 때마다 뿌듯함을 느꼈습니다. 리액트를 공부하면서 바닐라 자바스크립트를 더 자세히 알고 사용해보아야 겠다고 생각하여 시작한 프로젝트이며 이 프로젝트 이후 바닐라 자바스크립트 이론에 관한 강의를 들을 예정입니다. 
: 오류를 만날 때마다 혼자 해결하며 정말 간단하게 해결할 수 있었음에도 엄청 오래걸리는 경우도 많았고 돌아가는 경우도 많았습니다. 하지만 그럼에도 포기하지 않고 오류를 하나씩 해결할 수 있어서 기뻤습니다.
: 간단한 기능인데도 시간이 오래걸렸던 것 같아서 아쉽습니다. 다음 프로젝트를 구현할 땐 혼자 진행하는 프로젝트여도 마감기한을 정하고 시간을 효율적으로 쓸 수 있도록 계획해야할 것 같습니다.
