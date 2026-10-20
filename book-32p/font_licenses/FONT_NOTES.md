# 서체 확인 기록

이 목록은 무료 배포 조건과 실제 폰트의 cmap을 확인한 결과입니다. InDesign 조판 결과를 검증한 기록은 아닙니다.

| 역할 | 실제 서체 이름 | 확인한 라이선스 |
| --- | --- | --- |
| 기본 한글 고딕 | Noto Sans CJK KR Regular / Bold | SIL Open Font License 1.1 |
| 기본 한글 명조 | Noto Serif CJK KR Regular / Bold | SIL Open Font License 1.1 |
| A01 문자 얼굴 | Noto Sans Mono CJK KR Regular | SIL Open Font License 1.1 |
| B02 점자 그림 | Noto Sans Symbols2 Regular | SIL Open Font License 1.1 |
| B02 얼굴의 수학기호·결합부호 | DejaVu Sans Mono Book | Bitstream Vera license; DejaVu 변경분 public domain |
| B02 얼굴의 양끝 ༼ ༽ | Noto Serif Tibetan Regular | SIL Open Font License 1.1 |
| B04 사람 실루엣 👥 👤 | Noto Emoji Regular, variable wght=400 | SIL Open Font License 1.1 |

## 글자 지원과 배치

- Noto CJK 본문 서체에는 점자, 얼굴에 쓰인 일부 수학기호와 결합부호, 티베트 기호, 사람 이모지가 없습니다. 본문 서체 하나로 전체 원문을 그리면 누락될 수 있습니다.
- A01의 모든 글자는 Noto Sans Mono CJK KR에서 확인했습니다. ASCII 문자·보통 공백은 500unit, EM SPACE·전각 공백·상자 선·원은 1000unit으로, 원문에 들어 있는 반각/전각 관계를 보존해야 합니다.
- B02의 점자 영역(U+2800–U+28FF)은 Noto Sans Symbols2에 256개 전부 있습니다. U+2800은 빈칸처럼 보이는 별도 점자 문자이므로 ASCII 공백으로 바꾸지 않습니다.
- DejaVu Sans Mono는 점자를 지원하지 않습니다. 이름이 비슷한 DejaVu Sans Regular는 점자를 지원하지만 이 작업의 점자용 지정 서체는 Noto Sans Symbols2입니다.
- B02 얼굴의 `≖̃͡ ◡̶ ≖̃͡`에는 결합부호가 들어 있습니다. 각 글리프를 따로 윤곽선으로 그리기 전에 HarfBuzz 등으로 shaping해야 합니다. 결합부호를 삭제하거나 띄어쓰기로 바꾸지 않습니다.
- B04의 두 이모지는 내려받은 Noto Emoji에 있습니다. 컬러 이모지의 운영체제별 그림과는 외형이 다를 수 있습니다. 원문은 같은 유니코드로 보존됩니다.
- 모든 11개 원문을 합쳐 검사했을 때, 위 서체 조합에서 전혀 지원하지 않는 코드포인트는 없었습니다. cmap 지원이 결합부호 배치나 원래 기기의 표시 형태까지 같음을 보장하지는 않습니다.

## 출처

- Noto CJK: https://github.com/notofonts/noto-cjk
- Noto Sans Symbols2 / Noto Serif Tibetan: https://github.com/notofonts/noto-fonts
- Noto Emoji: https://github.com/google/fonts/tree/main/ofl/notoemoji
- DejaVu: https://dejavu-fonts.github.io/

동봉한 font_manifest.json에는 지원용 폰트 파일의 버전, 실제 이름, 원본 URL 및 SHA-256이 있습니다. Noto CJK 대용량 본문 서체 파일은 이 폴더에 복사하지 않았습니다. 각 라이선스 전문을 함께 보관했습니다.
