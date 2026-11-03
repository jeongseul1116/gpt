# 이미지가 내부에 포함된 최신 인디자인 파일

[이미지 내장 IDML 다운로드](https://github.com/jeongseul1116/gpt/raw/refs/heads/main/submission-embedded-image/Meme_Font_Book_28p_Embedded_Image.idml) · [파일 안내](submission-embedded-image/README_KO.md)

이 IDML 안에 표지PNG가 직접 들어 있습니다. 별도의 Links폴더·이미지파일·복구스크립트 없이 IDML 하나로 사용할 수 있도록 저장했습니다. 본문·폰트·목차01쪽 시작·총28면은 마지막 전달본과 같습니다. 실제 Adobe InDesign에서 열기 테스트는 이 환경에서 미검증입니다.

# 목차부터 1쪽

표지는 번호 없이 두고 **목차01 → 들어가며02 → 폰트 대조표03–04 → 본문26** 순서로 수정했습니다. 목차 안의 안내와 PDF뷰어의 페이지 라벨도 맞췄으며, 뒷표지는 ‘뒤표지’로 안내합니다.

- [수정 목차 보기](submission-contents-one/Contents_Preview.png)
- [전체 PDF](submission-contents-one/PDF/Meme_Font_Book_System_28p_Review.pdf)
- [A3 양면 인쇄용 PDF](submission-contents-one/PDF/Meme_Font_Book_System_A3_Duplex_Booklet.pdf)
- [독서 순서 펼침면 PDF](submission-contents-one/PDF/Meme_Font_Book_System_Spreads_Review.pdf)
- [인디자인·PDF·기획안 ZIP](https://github.com/jeongseul1116/gpt/raw/refs/heads/main/Meme_Font_Book_Contents_Page_1_28p.zip)
- [전체 미리보기](submission-contents-one/preview_28p.jpg)
- [인쇄와 편집 안내](submission-contents-one/README_KO.md)

표지 포함28면·A3용지7장·PDF14면·3mm도련·재단선을 유지했습니다. 출력은 A3가로·양면·짧은 쪽 넘김·100%, 소책자·모아찍기·용지 맞춤 해제입니다. 실제 InDesign 실행과 실물 출력은 미검증입니다. 현재판은 submission-contents-one 폴더입니다.


## 편집용 폰트 다운로드

[Windows 설치용 폰트11종 ZIP](https://github.com/jeongseul1116/gpt/raw/refs/heads/main/Meme_Font_Book_Fonts_11_Windows.zip) · [설치 안내와 목록](editing-fonts/README_KO.md)

ZIP을 풀고 Fonts폴더의 TTF·OTF11개를 설치한 뒤 InDesign을 다시 실행하세요. 예스체는 전에 제공하신 YES24.ttf를 별도로 설치합니다. 라이선스와 은궁서 대응 소스를 동봉했습니다. 책 디자인·쪽수·인쇄본은 변경하지 않았습니다.


## 이전 외부 연결판 복구(새 내장판에는 불필요)

[이미지 복구 ZIP](https://github.com/jeongseul1116/gpt/raw/refs/heads/main/Meme_Font_Book_Image_Repair.zip) · [표지 PNG](image-link-repair/Links/cover_cutout.png) · [사용법](image-link-repair/README_KO.md)

기존 수정 문서를 연 상태에서 동봉한 Recover_Cover_Image.jsx를 InDesign 스크립트 패널에서 실행하면, 인식한 표지 이미지만 다시 연결하고 문서 안에 포함시킵니다. 문서를 새로 만들거나 자동 저장하지 않습니다. 수동으로는 링크 패널에서 PNG를 다시 연결한 뒤 ‘링크 포함’을 선택합니다. 실제 InDesign 앱 실행은 이 환경에서 검증하지 못했습니다.
