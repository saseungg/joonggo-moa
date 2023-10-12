<br>
<div align = "center">
<img src="https://github.com/saseungg/joonggo-moa/assets/115215178/4a660f8f-aed9-4fff-b396-955416f79d1e" width="20%"/>
<h3>우리 동네 중고 거래 마켓</h3>

다양한 중고 물품들을 중고모아에서 만나보세요!<br><br><br>
</div>



## 🌟 서비스 소개
> 중고모아는 당근마켓을 모티브로 만들어진 프로젝트입니다. <br>
팀프로젝트 이후 새로운 서비스로 만들고자 개인 프로젝트로 리팩토링 하면서 기능을 추가하고 있습니다.
- [팀프로젝트 레포](https://github.com/second-hand-team06/second-hand)
- [팀노션 확인](https://www.notion.so/b0b482d007df45838bb3c8ce44130a48)

### 어떤 서비스인지 자세히 알아볼까요?
중고모아는 중고 물품들을 사고 팔 수 있는 플랫폼입니다.

- 동네 설정을 통해 우리 동네에서 판매하고 있는 물품들을 확인할 수 있어요.
- 사놓고 쓰지 않는 물건들이 있나요? 중고모아에서 상품을 등록해서 판매해보세요.
- 관심 있는 물품은 좋아요를 꾸욱! 관심 리스트에서 확인할 수 있습니다.
- 카테고리별로 물품들을 확인해보세요!

[👉 중고모아 사이트로 고고싱!]() <br>

## 📹 동작 화면

## 🔥 기여한 기능
- 모바일, 데스크탑 반응형 웹 지원
- oauth를 이용한 로그인 처리
- 홈화면 무한 스크롤
- 상품 등록 추가 (카테고리 선택, 이미지 업로드)

## 🗳️ 기술스택
|목적|이름|버전|선정 이유|
|:---:|:---:|:---:|:---:|
|정적 타입 검사|[TypeScript](https://www.typescriptlang.org/)|^4.9.5|prop으로 받는 값들 감지 및 코드 안전성|
|웹 개발|[React](https://react.dev/)|^18.2.0|컴포넌트 기반의 동적 웹 개발을 위해서|
|스타일 관리|[styled-components](https://styled-components.com/)|^6.0.0|컴포넌트 기반 스타일링|
|테스트|[Storybook](https://storybook.js.org/)|^7.0.20|컴포넌트 시각적 테스트|
|코드 포맷팅|[prettier](https://prettier.io/)|^2.8.8|
|코드 품질 검사|[eslint](https://eslint.org/)|^8.42.0|코드 오류와 버그를 탐지 및 코드 품질 향상|

## 🧐 고민했던 부분
### createObjectURL vs FileReader

