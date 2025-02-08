# :cherry_blossom: 졸업요건 확인 서비스(Graduation-check) README

![메인화면](https://github.com/leesuin0710/Graduation-check/assets/132324729/80b90f4e-535f-4a61-a7aa-499e1f7ede78)

## 프로젝트 소개
* 호서대학교 학생들의 졸업 요건을 계산하여 달성도를 시각화하여 원활한 졸업을 도와주는 웹페이지입니다.
* 시각화 된 졸업 요건 정보를 통해 자신의 졸업 달성도를 상세히 확인할 수 있습니다.
* 꿀교양 찾기 기능으로 남은 학점을 채울 교양 과목 추천이 가능합니다.


## 개발 기간
* 2024.04 ~ 2024.06


## 특징
- 기존의 학교 홈페이지에서 제공하는 복잡하고 가독성이 떨어지는 표 형식 UI를 한눈에 보기 쉽고 가독성 있는 UI로 개선하여 사용자 편의성을 높임.
- 사용자가 직접 학점을 계산해야 하는 번거로움을 해소하기 위해 교육과정 이수 확인자료 엑셀 파일을 업로드하고 자동으로 계산하는 기능을 추가.
- 기존의 교육과정 이수 확인자료에서는 확인할 수 없던 학과 세부 졸업요건도 추가할 수 있도록 제공하여, 세부 졸업요건도 같이 점검 가능.


## 역할
- 이수인: 프론트엔드(검사 페이지, 교양 찾기 페이지)
- 이강희: 디자인, 프론트엔드(로그인/회원가입 페이지, 네비게이션 바, 푸터)
- 안소희: 프론트엔드(메인페이지, 마이페이지)
- 박은희: 백엔드(서버 연결, 데이터 관리)


## 기술 스택

### 프론트엔드
- React.js
- JavaScript
- CSS
- HTML
- Visual Studio Code
- npm

### 백엔드
- Node.js
- MySQL
- Amazon Web Services (AWS)

### 기타
- Git
- GitHub


## 기능 설명
클릭하여 각 항목별 기능을 자세히 살펴볼 수 있습니다.
<br>
<br>

<details>
<summary><b>로그인/회원가입</b></summary>

<br>
<br>- 학번 정보를 이용하여 회원가입 후 로그인
<br>
|

![회원가입](https://github.com/leesuin0710/Graduation-check/assets/132324729/88a947a5-3ff4-4914-9c7f-e2809081c47c)

![로그인](https://github.com/leesuin0710/Graduation-check/assets/132324729/37dd33f2-aaf1-4e16-934f-1dd0641d3e04)|
|:--:|



</details>
<br>

<details>
<summary><b>마이페이지</b></summary>

<br>
<br>- 교육과정 이수 확인자료 엑셀 파일 업로드
<br>- 추가할 과목 직접 입력 기능으로 추가
<br>- 이수한 과목과 학점 정보, 세부 학과 졸업요건 확인
<br>
  
|
- 파일 업로드 전 기본 상태
![마이페이지(파일업로드 전)](https://github.com/leesuin0710/Graduation-check/assets/132324729/8da87883-d69f-4371-8153-e6e99bcd5589)

- 파일 업로드 후 데이터가 반영된 모습
![마이페이지(파일업로드 후)](https://github.com/leesuin0710/Graduation-check/assets/132324729/0f5bf151-f1b9-4fce-b2e1-ef869c70070b)

- 학점 정보 아래의 수강 과목 리스트
![마이페이지(수강과목리스트)](https://github.com/leesuin0710/Graduation-check/assets/132324729/f259bea5-538b-4949-8500-0ea8ac02e61b)

- 직접 추가를 통해 따로 원하는 과목 추가 가능

![마이페이지(직접추가)](https://github.com/leesuin0710/Graduation-check/assets/132324729/12c2bbe7-ddda-4399-8ec9-4c357403e01a)|
|:--:|
</details>
<br>


<details>
<summary><b>교양 찾기 페이지</b></summary>

<br>
<br>- 카테고리 필터링으로 필요한 교양 목록 검색 가능
<br>- 교양의 학수번호, 과목명, 이수구분 등의 정보 확인
<br>
  
|
![교양추천게시판](https://github.com/leesuin0710/Graduation-check/assets/132324729/565e9ac4-008b-4a38-8ba4-0cf51d883856)|
|:--:|
</details>
<br>

<details>
<summary><b>검사 페이지</b></summary>

<br>
<br>- 전체적인 졸업 달성도 및 영역별 학점 달성도 확인
<br>
  
|
![검사페이지](https://github.com/leesuin0710/Graduation-check/assets/132324729/d87eba7d-57c6-4d6f-a62d-9615cfb59766)|
|:--:|
</details>
<br>
<br>

## 플로우차트
![호서대 졸업요건 확인 서비스 플로우차트 drawio](https://github.com/leesuin0710/Graduation-check/assets/132324729/e41caece-a5ab-4f73-bf57-66e1f4c4bb8b)

<br>
<br>

## ERD
![erd](https://github.com/leesuin0710/Graduation-check/assets/132324729/684b3290-f9e9-42dc-bccf-a560ce270be4)

<br>
<br>

## Figma
[디자인 설계](https://www.figma.com/design/NLbqTMWUAHGbuLZ5Z6oP9h/Please-let-me-graduate?node-id=0-1&p=f&t=5m2xWhxf6syFeqY5-0)
