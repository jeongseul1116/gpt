# 마참내! 폰트도 웃길 수 있다

정슬기 기획안을 바탕으로 제작한 A5 밈 타이포그래피 소책자 디자인 초안입니다.

- A5 148×210mm, 8쪽, 4개 펼침면, 사방 도련 3mm
- 말보다 표정 / 일단 가보자고 / 사랑이 너무 많아 / 폰트 실험실
- 전체 32쪽 기획 중 발췌 시안이며, 시안의 페이지 번호는 04–11입니다.

## 다운로드

- [편집용 IDML v2](design/Meme_Typography_8p_v2.idml)
- [InDesign에서 실제 INDD를 만드는 대체 파일](design/Create_Native_InDesign.jsx)
- [디자인 미리보기](design/preview.jpg)

기존 `Meme_Typography_8p.idml`도 v2와 같은 내용으로 갱신했습니다.

## IDML 열기

Noto Sans CJK KR·Noto Serif CJK KR의 Regular·Bold를 설치하고 IDML을 InDesign에서 엽니다. 서체, 문자 기호, 텍스트 넘침과 펼침면을 확인한 뒤 `.indd`로 저장합니다.

서체 공식 배포: https://github.com/notofonts/noto-cjk

v1은 사용자 InDesign에서 열기 오류가 확인되었습니다. v2는 실제 InDesign 생성 견본과 비교하여 누락된 Adobe 문서 식별 처리 지시문, 기본 스타일, 문서 참조 순서, 섹션 및 텍스트 프레임 정보를 보완했습니다. ZIP·XML·객체 참조 검사와 SimpleIDML 파서에서 8쪽·4개 펼침면·86개 스토리 읽기를 확인했습니다. 실제 InDesign에서 v2를 여는 검증은 아직 하지 못했습니다.

## InDesign 안에서 INDD 생성

IDML 열기가 계속 실패하거나 Windows 기본 한글 서체로 작업하려면 `Create_Native_InDesign.jsx`를 사용합니다.

1. InDesign에서 **창 → 유틸리티 → 스크립트**를 엽니다.
2. **사용자** 폴더를 우클릭해 탐색기에서 표시합니다.
3. 다운로드한 `.jsx`를 그 폴더에 넣고 스크립트 패널에서 두 번 클릭합니다.
4. 저장할 폴더를 선택합니다.

스크립트는 새 문서를 만들어 실제 `.indd`로 저장하고, InDesign 자체의 IDML 내보내기도 시도합니다. Noto 서체가 없으면 설치된 맑은 고딕·바탕 등으로 대체하고, 사용한 서체와 텍스트 넘침을 보고서에 기록합니다. 기존 파일은 덮어쓰지 않습니다. 스크립트 구문은 검사했지만 실제 InDesign 실행 검증은 하지 못했습니다.

## 자료와 검증 범위

별도 폰트 분석 리포트와 실제 밈 이미지는 제공되지 않아 새 원고와 문자 표정을 사용했습니다. 미리보기는 별도 렌더러로 생성한 참고 이미지이며 InDesign 내보내기 결과가 아닙니다. 제공한 파일 형식은 IDML과 JSX이며, INDD 바이너리는 이 환경에서 직접 생성하지 못했습니다.

## 구조 참고와 라이선스

v2의 기본 IDML 리소스 정의는 [Starou/SimpleIDML의 InDesign 생성 견본](https://github.com/Starou/SimpleIDML/tree/master/tests/regressiontests/IDML)을 참고·활용했습니다. 해당 BSD 3-Clause 고지문은 [SimpleIDML-LICENSE.txt](design/SimpleIDML-LICENSE.txt)와 IDML 내부에 포함했습니다. 책의 원고와 지면은 이 작업에서 작성했습니다.
