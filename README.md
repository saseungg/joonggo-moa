# 🥕 세컨드 핸드 - 중고거래 서비스
- 중고 거래 서비스 웹 구현 프로젝트
- 팀 구성: FE 2, BE 2
- 기간: 2023.06.01 ~ 2023.06.30 (한달)
- [팀레포 보러가기](https://github.com/second-hand-team06/second-hand)  |  [팀노션 보러가기](https://yielding-effect-d6a.notion.site/Second-Hand-Team06-2ffd62e597074a5a89781298be87713a?pvs=4)

## 🎥 기능 데모
|**데스크톱뷰**|**로그인**|**홈화면**|
|:---:|:---:|:---:|
|<img src="https://github.com/saseungg/readme-art/assets/115215178/62b441a9-30e9-4f7b-85df-9071be2d422f" width="468px" height="270px" alt="데스크톱"/>|<img src="https://github.com/saseungg/readme-art/assets/115215178/3a9cfb51-c20d-4c3e-bbe7-b4882e3c876a" width="138px" height="270px" alt="로그인"/>|<img src="https://github.com/saseungg/readme-art/assets/115215178/643d139a-c850-4b97-8f1f-869656e2e4dd" width="138px" height="270px" alt="홈화면"/>|


|**카테고리**|**상품 등록**|**상품 삭제**|**상품 상태 변경**|**관심상품 등록**|
|:---:|:---:|:---:|:---:|:---:|
<img src="https://github.com/saseungg/readme-art/assets/115215178/189b404e-2675-47bd-9ac3-fba3d7762e51" width="138px" height="270px" alt="카테고리"/>|<img src="https://github.com/saseungg/readme-art/assets/115215178/6b1a8a07-9278-44b6-9e2d-0cfb89e963f8" width="138px" height="270px" alt="상품 등록"/>|<img src="https://github.com/saseungg/readme-art/assets/115215178/62940a6f-d2f1-40b9-bebe-9f82a1960094" width="138px" height="270px" alt="게시글 삭제"/>|<img src="https://github.com/saseungg/readme-art/assets/115215178/6bcadffc-0790-4da3-af3d-f22255c33133" width="138px" height="270px" alt="상품 상태 변경"/>|<img src="https://github.com/saseungg/readme-art/assets/115215178/cc943a08-a744-4d5e-83d3-f7de20545066" width="138px" height="270px" alt="관심상품 등록"/>|

## 🛠️ 주요 기술
- **React.js:** 웹 UI 라이브러리
- **TypeScript:** 정적 타입 사용 및 코드 에러 검출
- **styled-components:** css-in-js를 통한 컴포넌트 스타일 관리
- **storybook:** 컴포넌트 UI 테스트
- **ESLint & Prettier:** 코드 컨벤션 검사 및 코드 포맷팅

## 👥 협업
- [코딩 컨벤션](https://yielding-effect-d6a.notion.site/3370cf8abd234217b1ad939e9a102be0?pvs=4)
- [브랜치 전략, 이슈, 커밋, PR](https://yielding-effect-d6a.notion.site/0b94e85318244cf38f5b48e2b3a80856?pvs=4)
- 코드 리뷰 후 merge 진행: [PR 보러가기](https://github.com/second-hand-team06/second-hand/pulls?q=is%3Apr+is%3Aclosed)

## 📂 프로젝트 구조
```
📦 public                                # 정적 파일들이 위치하는 디렉토리
├─ .storybook                            # Storybook 설정 파일
├─ src                                   # 소스 코드가 위치하는 디렉토리
│  ├─ assets                            # 이미지 및 기타 자원 파일들
│  ├─ components                        # 컴포넌트 파일 - UI 구성 요소들
│  │   ├─ common                        # 공통으로 사용되는 컴포넌트들
│  │   └─ ...                           # 페이지별 컴포넌트들
│  ├─ context                           # 상태 관리를 위한 컨텍스트 파일들
│  │   ├─ themeContext.tsx              # 다크모드 테마 관련 컨텍스트
│  │   └─ userContext.tsx               # 유저 로그인 상태 관련 컨텍스트
│  ├─ hooks                             # 커스텀 훅 파일들
│  │   ├─ useFetch.ts                   # 데이터 페치 관련 커스텀 훅
│  │   └─ useIntersectionObserver.ts    # 무한 스크롤 타겟 감지 커스텀 훅
│  ├─ pages                             # 페이지 컴포넌트들
│  ├─ styles                            # 전역 스타일 설정 및 컬러, 타이포 시스템 정리
│  │   ├─ color.ts                      # 컬러 시스템 정의
│  │   ├─ font.ts                       # 타이포시스템 정의 
│  │   └─ GlobalStyle.ts                # 전역 스타일 설정
│  ├─ utils                             # 공통으로 사용하는 유틸리티 함수들
│  ├─ App.tsx                           # 애플리케이션 컴포넌트
│  └─ index.tsx                         # 엔트리 포인트 파일
├─ .env                                  # 환경 변수 설정 파일
├─ .eslintrc.json                        # ESLint 설정 파일
├─ prettierrc                            # Prettier 설정 파일
├─ craco.config.js                       # Craco 설정 파일
├─ package-lock.json                     # npm 패키지 의존성 파일
├─ package.json                          # npm 패키지 의존성 및 프로젝트 상세 파일
├─ README.md                             # README 파일
├─ tsconfig.json                         # 타입스크립트 설정 파일
└─ tsconfig.paths.json                   # 절대 경로 설정 파일
```

## 🗺️ 아키텍처
![image](https://github.com/saseungg/second-hand/assets/115215178/be4dfe43-f1d9-4c73-82dc-959c9254b52a)
