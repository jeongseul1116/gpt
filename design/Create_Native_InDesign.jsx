#target "InDesign"
/* Editable native InDesign reconstruction. No external files or network required.
   Run in InDesign's Scripts panel. Saves a new .indd and a native-exported .idml.
   This script has been syntax-checked; actual InDesign execution is still unverified. */
(function () {
    var oldUnit = app.scriptPreferences.measurementUnit;
    var oldRedraw = app.scriptPreferences.enableRedraw;
    var doc = null;
    var notes = [];
    var data = [[{"kind":"text","x":28,"y":20,"w":365,"h":15,"text":"쓸데없이 진지한 밈 타이포그래피 도감  /  DESIGN SAMPLE","size":7,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":43,"w":363,"h":1,"color":"black"},{"kind":"text","x":28,"y":562,"w":300,"h":14,"text":"마참내! 폰트도 웃길 수 있다   ·   정슬기","size":7,"color":"black","font":"sans","bold":false},{"kind":"text","x":366,"y":559,"w":30,"h":18,"text":"04","size":10,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":62,"w":350,"h":23,"text":"01  /  말보다 표정","size":12,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":99,"w":360,"h":105,"text":"말은 없고\n표정은 있다.","size":34,"color":"black","font":"sans","bold":true},{"kind":"rect","x":14,"y":233,"w":391,"h":202,"color":"pink"},{"kind":"text","x":27,"y":262,"w":375,"h":93,"text":"( •_• )","size":60,"color":"black","font":"sans","bold":true},{"kind":"ellipse","x":259,"y":373,"w":128,"h":40,"color":"red"},{"kind":"text","x":272,"y":383,"w":110,"h":23,"text":"나 지금 진지함.","size":12,"color":"paper","font":"sans","bold":true},{"kind":"text","x":28,"y":458,"w":354,"h":48,"text":"단톡방이 갑자기 조용해졌다.\n누군가는 표정 하나만 남겼다.","size":14,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":522,"w":350,"h":23,"text":"사용 시점  /  말로 대답하면 너무 길어질 때","size":9,"color":"black","font":"sans","bold":false}],[{"kind":"text","x":28,"y":20,"w":365,"h":15,"text":"쓸데없이 진지한 밈 타이포그래피 도감  /  DESIGN SAMPLE","size":7,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":43,"w":363,"h":1,"color":"black"},{"kind":"text","x":28,"y":562,"w":300,"h":14,"text":"마참내! 폰트도 웃길 수 있다   ·   정슬기","size":7,"color":"black","font":"sans","bold":false},{"kind":"text","x":366,"y":559,"w":30,"h":18,"text":"05","size":10,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":63,"w":350,"h":34,"text":"표정의 재료는 글자다.","size":21,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":106,"w":354,"h":70,"text":"괄호는 얼굴의 윤곽이 되고, 점은 눈이 된다.\n입 자리에 놓인 짧은 선 하나가 감정을 닫는다.\n읽을 문장은 없지만, 우리는 이미 표정을 읽었다.","size":11,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":195,"w":363,"h":103,"color":"yellow"},{"kind":"text","x":40,"y":204,"w":335,"h":16,"text":"FONT SPECIMEN  /  같은 표정, 다른 목소리","size":8,"color":"black","font":"sans","bold":true},{"kind":"text","x":40,"y":230,"w":160,"h":47,"text":"( •_• )","size":27,"color":"black","font":"sans","bold":false},{"kind":"text","x":207,"y":230,"w":160,"h":47,"text":"( •_• )","size":27,"color":"black","font":"sans","bold":true},{"kind":"text","x":40,"y":278,"w":335,"h":16,"text":"Noto Sans CJK KR  /  Regular → Bold","size":8,"color":"black","font":"sans","bold":false},{"kind":"text","x":28,"y":322,"w":350,"h":20,"text":"진지하게 뜯어보기","size":14,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":354,"w":354,"h":112,"text":"01  획의 굵기\n균일한 획은 표정을 간결하게 보이게 한다.\n02  기호 사이의 거리\n눈과 입이 멀어지면 표정이 느슨해진다.\n03  기준선과 정렬\n기호를 나란히 놓아야 얼굴이 흩어지지 않는다.","size":10,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":479,"w":363,"h":1,"color":"red"},{"kind":"text","x":28,"y":493,"w":353,"h":54,"text":"친구에게 써먹기\n“과제 다 했어?”  →  ( •_• )\n대답은 하지 않았다. 표정만 제출했다.","size":10,"color":"black","font":"sans","bold":false}],[{"kind":"text","x":28,"y":20,"w":365,"h":15,"text":"쓸데없이 진지한 밈 타이포그래피 도감  /  DESIGN SAMPLE","size":7,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":43,"w":363,"h":1,"color":"black"},{"kind":"text","x":28,"y":562,"w":300,"h":14,"text":"마참내! 폰트도 웃길 수 있다   ·   정슬기","size":7,"color":"black","font":"sans","bold":false},{"kind":"text","x":366,"y":559,"w":30,"h":18,"text":"06","size":10,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":62,"w":350,"h":23,"text":"02  /  일단 가보자고","size":12,"color":"black","font":"sans","bold":true},{"kind":"rect","x":19,"y":110,"w":382,"h":279,"color":"red"},{"kind":"text","x":35,"y":126,"w":350,"h":114,"text":"카쟈!","size":78,"color":"paper","font":"sans","bold":true},{"kind":"text","x":34,"y":252,"w":355,"h":71,"text":"ι(｀ロ´)ノ","size":37,"color":"paper","font":"sans","bold":true},{"kind":"ellipse","x":237,"y":349,"w":156,"h":48,"color":"yellow"},{"kind":"text","x":254,"y":361,"w":130,"h":24,"text":"계획은 가면서.","size":13,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":425,"w":360,"h":85,"text":"준비는 덜 됐고,\n기세는 충분하다.","size":27,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":516,"w":357,"h":28,"text":"사용 시점  /  아무도 시작하지 않는 조별 과제","size":9,"color":"black","font":"sans","bold":false}],[{"kind":"text","x":28,"y":20,"w":365,"h":15,"text":"쓸데없이 진지한 밈 타이포그래피 도감  /  DESIGN SAMPLE","size":7,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":43,"w":363,"h":1,"color":"black"},{"kind":"text","x":28,"y":562,"w":300,"h":14,"text":"마참내! 폰트도 웃길 수 있다   ·   정슬기","size":7,"color":"black","font":"sans","bold":false},{"kind":"text","x":366,"y":559,"w":30,"h":18,"text":"07","size":10,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":63,"w":355,"h":30,"text":"글자가 먼저 달려간다.","size":21,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":108,"w":354,"h":72,"text":"짧은 외침에는 설명보다 힘이 필요하다.\n굵은 획으로 덩어리를 만들고, 큰 크기로 밀어붙인다.\n표정 기호는 문장 끝에서 팔을 번쩍 든다.","size":11,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":199,"w":363,"h":108,"color":"pink"},{"kind":"text","x":41,"y":210,"w":337,"h":15,"text":"FONT SPECIMEN  /  Noto Sans CJK KR Bold","size":8,"color":"black","font":"sans","bold":true},{"kind":"text","x":41,"y":234,"w":337,"h":60,"text":"일단 가보자고","size":33,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":328,"w":350,"h":20,"text":"기세를 만드는 세 가지","size":14,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":360,"w":354,"h":111,"text":"01  굵기  /  Bold\n검은 면적이 커지면 목소리가 앞으로 나온다.\n02  크기  /  제목은 크게, 설명은 작게\n극단적인 크기 차이가 외침과 속삭임을 나눈다.\n03  획 끝  /  단정한 끝맺음\n짧고 선명한 글자 덩어리가 즉각적인 반응을 만든다.","size":10,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":483,"w":363,"h":1,"color":"red"},{"kind":"text","x":28,"y":495,"w":354,"h":51,"text":"친구에게 써먹기\n“자료 조사는 누가 할래?”  →  카쟈!\n일단 손은 들었다. 검색창은 아직 안 켰다.","size":10,"color":"black","font":"sans","bold":false}],[{"kind":"text","x":28,"y":20,"w":365,"h":15,"text":"쓸데없이 진지한 밈 타이포그래피 도감  /  DESIGN SAMPLE","size":7,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":43,"w":363,"h":1,"color":"black"},{"kind":"text","x":28,"y":562,"w":300,"h":14,"text":"마참내! 폰트도 웃길 수 있다   ·   정슬기","size":7,"color":"black","font":"sans","bold":false},{"kind":"text","x":366,"y":559,"w":30,"h":18,"text":"08","size":10,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":62,"w":350,"h":23,"text":"03  /  사랑이 너무 많아","size":12,"color":"black","font":"sans","bold":true},{"kind":"rect","x":9,"y":113,"w":402,"h":300,"color":"pink"},{"kind":"text","x":27,"y":134,"w":365,"h":149,"text":"사랑사랑\n누가 말했나","size":40,"color":"black","font":"serif","bold":true},{"kind":"ellipse","x":42,"y":310,"w":333,"h":70,"color":"red"},{"kind":"text","x":65,"y":326,"w":296,"h":39,"text":"내가 말했지.","size":26,"color":"paper","font":"serif","bold":true},{"kind":"text","x":28,"y":445,"w":357,"h":70,"text":"고백도 서체를 만나면\n장르가 생긴다.","size":22,"color":"black","font":"serif","bold":true},{"kind":"text","x":28,"y":521,"w":356,"h":23,"text":"사용 시점  /  친구가 내 몫까지 간식을 사 왔을 때","size":9,"color":"black","font":"sans","bold":false}],[{"kind":"text","x":28,"y":20,"w":365,"h":15,"text":"쓸데없이 진지한 밈 타이포그래피 도감  /  DESIGN SAMPLE","size":7,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":43,"w":363,"h":1,"color":"black"},{"kind":"text","x":28,"y":562,"w":300,"h":14,"text":"마참내! 폰트도 웃길 수 있다   ·   정슬기","size":7,"color":"black","font":"sans","bold":false},{"kind":"text","x":366,"y":559,"w":30,"h":18,"text":"09","size":10,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":63,"w":358,"h":30,"text":"명조체로 고백하는 법","size":21,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":107,"w":354,"h":75,"text":"고딕체의 직진하는 말투와 달리, 명조체는\n획의 굵기 차이와 끝의 장식으로 리듬을 만든다.\n평범한 감사 인사도 괜히 비장한 고백처럼 들린다.","size":11,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":201,"w":363,"h":109,"color":"yellow"},{"kind":"text","x":41,"y":211,"w":338,"h":16,"text":"FONT SPECIMEN  /  Noto Serif CJK KR Bold","size":8,"color":"black","font":"sans","bold":true},{"kind":"text","x":41,"y":242,"w":338,"h":52,"text":"사랑사랑 누가 말했나","size":24,"color":"black","font":"serif","bold":true},{"kind":"text","x":28,"y":331,"w":352,"h":20,"text":"과몰입의 형태","size":14,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":363,"w":354,"h":111,"text":"01  획의 대비\n굵은 부분과 가는 부분이 한 글자 안에서 만난다.\n02  획 끝의 장식\n작은 돌출부가 말의 끝에 여운을 더한다.\n03  넉넉한 행간\n줄 사이를 띄워 읽는 속도를 늦추면 감정이 남는다.","size":10,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":483,"w":363,"h":1,"color":"red"},{"kind":"text","x":28,"y":495,"w":354,"h":51,"text":"친구에게 써먹기\n“네 것도 사 왔어.”  →  사랑사랑 누가 말했나.\n커피 한 잔에 시작되는 장편 서사.","size":10,"color":"black","font":"sans","bold":false}],[{"kind":"text","x":28,"y":20,"w":365,"h":15,"text":"쓸데없이 진지한 밈 타이포그래피 도감  /  DESIGN SAMPLE","size":7,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":43,"w":363,"h":1,"color":"black"},{"kind":"text","x":28,"y":562,"w":300,"h":14,"text":"마참내! 폰트도 웃길 수 있다   ·   정슬기","size":7,"color":"black","font":"sans","bold":false},{"kind":"text","x":366,"y":559,"w":30,"h":18,"text":"10","size":10,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":62,"w":350,"h":23,"text":"EXTRA  /  폰트 실험실","size":12,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":103,"w":360,"h":103,"text":"같은 말,\n다른 텐션.","size":33,"color":"black","font":"sans","bold":true},{"kind":"rect","x":28,"y":221,"w":363,"h":1,"color":"red"},{"kind":"text","x":28,"y":231,"w":350,"h":15,"text":"01  Noto Sans CJK KR Regular","size":8,"color":"black","font":"sans","bold":false},{"kind":"text","x":28,"y":256,"w":360,"h":53,"text":"마참내!","size":38,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":322,"w":363,"h":1,"color":"red"},{"kind":"text","x":28,"y":332,"w":350,"h":15,"text":"02  Noto Sans CJK KR Bold","size":8,"color":"black","font":"sans","bold":false},{"kind":"text","x":28,"y":357,"w":360,"h":53,"text":"마참내!","size":38,"color":"black","font":"sans","bold":true},{"kind":"rect","x":28,"y":423,"w":363,"h":1,"color":"red"},{"kind":"text","x":28,"y":433,"w":350,"h":15,"text":"03  Noto Serif CJK KR Bold","size":8,"color":"black","font":"sans","bold":false},{"kind":"text","x":28,"y":458,"w":360,"h":53,"text":"마참내!","size":38,"color":"black","font":"serif","bold":true},{"kind":"text","x":28,"y":530,"w":353,"h":19,"text":"문구·크기·위치는 고정하고, 서체와 굵기만 바꿨다.","size":8,"color":"black","font":"sans","bold":false}],[{"kind":"text","x":28,"y":20,"w":365,"h":15,"text":"쓸데없이 진지한 밈 타이포그래피 도감  /  DESIGN SAMPLE","size":7,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":43,"w":363,"h":1,"color":"black"},{"kind":"text","x":28,"y":562,"w":300,"h":14,"text":"마참내! 폰트도 웃길 수 있다   ·   정슬기","size":7,"color":"black","font":"sans","bold":false},{"kind":"text","x":366,"y":559,"w":30,"h":18,"text":"11","size":10,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":63,"w":356,"h":30,"text":"웃긴 건 글자 탓일까?","size":21,"color":"black","font":"sans","bold":true},{"kind":"text","x":28,"y":109,"w":354,"h":72,"text":"왼쪽 세 문구를 차례로 읽어보자. 같은 말인데\n하나는 담담하고, 하나는 외치고, 하나는 선언한다.\n서체는 내용 옆에 붙는 작은 표정이다.","size":11,"color":"black","font":"sans","bold":false},{"kind":"text","x":28,"y":204,"w":35,"h":25,"text":"01","size":15,"color":"red","font":"sans","bold":true},{"kind":"text","x":70,"y":204,"w":310,"h":25,"text":"담담함","size":15,"color":"black","font":"sans","bold":true},{"kind":"text","x":70,"y":233,"w":320,"h":44,"text":"Regular는 검은 면적이 작아 가볍게 읽힌다.\n조용히 도착한 “드디어”에 가깝다.","size":10,"color":"black","font":"sans","bold":false},{"kind":"text","x":28,"y":289,"w":35,"h":25,"text":"02","size":15,"color":"red","font":"sans","bold":true},{"kind":"text","x":70,"y":289,"w":310,"h":25,"text":"기세","size":15,"color":"black","font":"sans","bold":true},{"kind":"text","x":70,"y":318,"w":320,"h":44,"text":"Bold는 획이 두꺼워 시선이 먼저 멈춘다.\n기다림이 끝났다는 외침에 어울린다.","size":10,"color":"black","font":"sans","bold":false},{"kind":"text","x":28,"y":374,"w":35,"h":25,"text":"03","size":15,"color":"red","font":"sans","bold":true},{"kind":"text","x":70,"y":374,"w":310,"h":25,"text":"비장함","size":15,"color":"black","font":"sans","bold":true},{"kind":"text","x":70,"y":403,"w":320,"h":44,"text":"명조의 획 대비와 장식은 문장에 격식을 더한다.\n사소한 성공도 역사적인 순간처럼 보인다.","size":10,"color":"black","font":"sans","bold":false},{"kind":"rect","x":28,"y":464,"w":363,"h":82,"color":"black"},{"kind":"text","x":40,"y":477,"w":339,"h":23,"text":"적절한 상황에 부적절하게 사용하십시오.","size":12,"color":"paper","font":"sans","bold":true},{"kind":"text","x":40,"y":509,"w":338,"h":27,"text":"글·구성  정슬기 기획 기반 초안  /  서체  Google Noto\n이미지 대신 문자 표정 사용 · 기존 폰트 리포트 미반영","size":7,"color":"paper","font":"sans","bold":false}]];

    function safeString(value) {
        try { return String(value); } catch (_) { return ""; }
    }
    function normalized(value) {
        return safeString(value).replace(/\s+/g, "").toLowerCase();
    }
    function fontLabel(face) {
        return safeString(face.fontFamily) + " " + safeString(face.fontStyleName);
    }
    function findFaces(candidates, fonts) {
        for (var a = 0; a < candidates.length; a++) {
            var family = [];
            for (var b = 0; b < fonts.length; b++) {
                var face = fonts[b];
                try {
                    if (face.status !== FontStatus.INSTALLED) continue;
                    if (normalized(face.fontFamily) === normalized(candidates[a])) family.push(face);
                } catch (_) {}
            }
            if (!family.length) continue;
            var regular = null, bold = null;
            for (var c = 0; c < family.length; c++) {
                var style = safeString(family[c].fontStyleName);
                if (/^(Regular|Normal|Roman|Book|보통|표준)$/i.test(style)) regular = family[c];
                if (/^(Bold|굵게|굵은)$/i.test(style)) bold = family[c];
            }
            if (!regular) regular = family[0];
            if (!bold) {
                for (var e = 0; e < family.length; e++) {
                    if (/bold|heavy|black|demi|굵/i.test(safeString(family[e].fontStyleName))) {
                        bold = family[e]; break;
                    }
                }
            }
            if (!bold) {
                bold = regular;
                notes.push(safeString(regular.fontFamily) + ": 별도 Bold가 없어 설치된 굵기로 사용했습니다.");
            }
            return { regular: regular, bold: bold };
        }
        return null;
    }
    function makeColor(name, values) {
        return doc.colors.add({
            name: "Meme_" + name,
            model: ColorModel.PROCESS,
            space: ColorSpace.CMYK,
            colorValue: values
        });
    }
    function pageBounds(page, a) {
        // SPREAD_ORIGIN plus actual page bounds avoids placing left-page items
        // on the right page, regardless of the document's current ruler origin.
        var b = page.bounds;
        return [Number(b[0]) + a.y, Number(b[1]) + a.x,
                Number(b[0]) + a.y + a.h, Number(b[1]) + a.x + a.w];
    }
    function replaceSpecimenNames(text, sans, serif) {
        return text
            .replace(/Noto Sans CJK KR  \/  Regular → Bold/g,
                fontLabel(sans.regular) + " → " + fontLabel(sans.bold))
            .replace(/Noto Sans CJK KR Regular/g, fontLabel(sans.regular))
            .replace(/Noto Sans CJK KR Bold/g, fontLabel(sans.bold))
            .replace(/Noto Serif CJK KR Regular/g, fontLabel(serif.regular))
            .replace(/Noto Serif CJK KR Bold/g, fontLabel(serif.bold));
    }
    function writeLog(file, message) {
        try {
            file.encoding = "UTF-8";
            if (file.open("w")) { file.write(message); file.close(); }
        } catch (_) {}
    }

    try {
        app.scriptPreferences.measurementUnit = MeasurementUnits.POINTS;
        var fonts = app.fonts.everyItem().getElements();
        var sans = findFaces([
            "Noto Sans CJK KR", "Noto Sans KR", "Malgun Gothic", "맑은 고딕",
            "Source Han Sans K", "본고딕", "NanumGothic", "나눔고딕", "Apple SD Gothic Neo"
        ], fonts);
        var serif = findFaces([
            "Noto Serif CJK KR", "Noto Serif KR", "Batang", "바탕", "BatangChe", "바탕체",
            "Source Han Serif K", "본명조", "NanumMyeongjo", "나눔명조", "Adobe Myungjo Std"
        ], fonts);
        if (!sans) throw Error("사용 가능한 한글 고딕체를 찾지 못했습니다. 맑은 고딕 또는 Noto Sans CJK KR를 설치한 뒤 다시 실행해주세요.");
        if (!serif) {
            serif = sans;
            notes.push("한글 명조체를 찾지 못해 고딕체로 대체했습니다. 명조 비교 지면의 서체를 나중에 교체해주세요.");
        }
        var outputFolder = Folder.selectDialog("새 InDesign 원본(.indd)을 저장할 폴더를 선택하세요");
        if (!outputFolder) return;
        var stem = "Meme_Typography_8p";
        var nativeFile = File(outputFolder.fsName + "/" + stem + ".indd");
        if (nativeFile.exists) {
            stem += "_" + new Date().getTime();
            nativeFile = File(outputFolder.fsName + "/" + stem + ".indd");
        }
        app.scriptPreferences.enableRedraw = false;
        doc = app.documents.add();
        doc.documentPreferences.properties = {
            facingPages: true,
            pagesPerDocument: 1,
            pageWidth: 419.527559,
            pageHeight: 595.275591,
            documentBleedTopOffset: 8.503937,
            documentBleedBottomOffset: 8.503937,
            documentBleedInsideOrLeftOffset: 8.503937,
            documentBleedOutsideOrRightOffset: 8.503937
        };
        // Set an even first number before adding the other pages. InDesign's
        // normal page shuffling then forms four left/right pairs: 4–5 ... 10–11.
        doc.documentPreferences.allowPageShuffle = true;
        doc.sections[0].continueNumbering = false;
        doc.sections[0].pageNumberStart = 4;
        while (doc.pages.length < 8) doc.pages.add(LocationOptions.AT_END);
        if (doc.spreads.length !== 4) {
            throw Error("페이지 자동 정렬 결과가 4개 펼침면과 다릅니다. 저장하지 않았습니다. 페이지 패널에서 구성을 확인해주세요.");
        }
        for (var s = 0; s < doc.spreads.length; s++) {
            if (doc.spreads[s].pages.length !== 2) {
                throw Error("2쪽 펼침면 구성을 만들지 못했습니다. 페이지 패널에서 확인해주세요.");
            }
        }
        doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.POINTS;
        doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.POINTS;
        doc.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;
        doc.zeroPoint = [0, 0];
        var colors = {
            paper: makeColor("Paper", [0, 0, 0, 0]),
            black: makeColor("Black", [0, 0, 0, 100]),
            red: makeColor("Red", [0, 90, 75, 0]),
            pink: makeColor("Pink", [0, 23, 10, 0]),
            yellow: makeColor("Yellow", [0, 0, 75, 0]),
            grey: makeColor("Grey", [0, 0, 0, 55]),
            blue: makeColor("Blue", [85, 65, 0, 0])
        };
        var layer = doc.layers.add({ name: "Meme typography — editable" });
        var frames = [];
        for (var i = 0; i < data.length; i++) {
            var page = doc.pages[i];
            page.marginPreferences.properties = { top: 28, bottom: 28, left: 28, right: 28 };
            for (var j = 0; j < data[i].length; j++) {
                var a = data[i][j], item;
                if (a.kind === "text") {
                    item = page.textFrames.add();
                    item.itemLayer = layer;
                    item.geometricBounds = pageBounds(page, a);
                    item.textFramePreferences.insetSpacing = [0, 0, 0, 0];
                    item.textFramePreferences.verticalJustification = VerticalJustification.TOP_ALIGN;
                    item.textFramePreferences.firstBaselineOffset = FirstBaseline.ASCENT_OFFSET;
                    item.contents = replaceSpecimenNames(a.text, sans, serif).replace(/\r\n|\r|\n/g, "\r");
                    var pair = a.font === "serif" ? serif : sans;
                    var chosen = a.bold ? pair.bold : pair.regular;
                    var text = item.parentStory.texts[0];
                    text.appliedFont = chosen;
                    text.fontStyle = chosen.fontStyleName;
                    text.pointSize = a.size;
                    text.leading = a.size * 1.45;
                    text.fillColor = colors[a.color];
                    text.hyphenation = false;
                    text.justification = Justification.LEFT_ALIGN;
                    text.spaceBefore = 0;
                    text.spaceAfter = 0;
                    text.leftIndent = 0;
                    text.rightIndent = 0;
                    text.firstLineIndent = 0;
                    text.alignToBaseline = false;
                    // Leave the installed InDesign edition's composer intact:
                    // hard-coded English composer names can fail in Korean UI.
                    item.label = "Meme type / page " + page.name + " / text " + j;
                    frames.push(item);
                } else {
                    item = a.kind === "ellipse" ? page.ovals.add() : page.rectangles.add();
                    item.itemLayer = layer;
                    item.geometricBounds = pageBounds(page, a);
                    item.fillColor = colors[a.color];
                    item.strokeWeight = 0;
                }
            }
        }
        doc.recompose();
        var overflows = [];
        for (var f = 0; f < frames.length; f++) {
            if (frames[f].overflows) overflows.push(frames[f].parentPage.name + ": " + frames[f].contents.substr(0, 24));
        }
        doc.viewPreferences.rulerOrigin = RulerOrigin.PAGE_ORIGIN;
        doc.save(nativeFile);
        var idmlNote = "";
        try {
            var exchangeFile = File(outputFolder.fsName + "/" + stem + ".idml");
            doc.exportFile(ExportFormat.INDESIGN_MARKUP, exchangeFile);
            idmlNote = "\r\nInDesign 내보내기 IDML: " + exchangeFile.fsName;
        } catch (exportError) {
            idmlNote = "\r\nIDML 추가 내보내기 실패: " + exportError.message + " (.indd 저장은 완료)";
        }
        var report = "A5 148×210mm / 8쪽 / 4개 펼침면 / 도련 3mm\r\n" +
            "InDesign 원본: " + nativeFile.fsName + idmlNote + "\r\n\r\n" +
            "고딕 Regular: " + fontLabel(sans.regular) + "\r\n고딕 Bold: " + fontLabel(sans.bold) +
            "\r\n명조 Regular: " + fontLabel(serif.regular) + "\r\n명조 Bold: " + fontLabel(serif.bold) +
            "\r\n\r\n텍스트 넘침: " + (overflows.length ? overflows.join("\r\n") : "없음") +
            "\r\n\r\n참고: " + notes.join("\r\n");
        writeLog(File(outputFolder.fsName + "/" + stem + "_report.txt"), report);
        alert("InDesign 원본 저장 완료:\r\n" + nativeFile.fsName +
            "\r\n\r\n" + (overflows.length ? "텍스트 넘침 " + overflows.length + "개: 보고서와 지면을 확인해주세요." : "텍스트 넘침 없음.") +
            (notes.length ? "\r\n서체 대체 정보는 함께 저장한 보고서에서 확인하세요." : "") +
            "\r\n문자 표정의 기호 모양도 확인해주세요.");
    } catch (error) {
        alert("InDesign 문서 생성 중 오류:\r\n" + error.message +
            "\r\n줄: " + error.line +
            (doc ? "\r\n진단할 수 있도록 생성 중인 문서는 열어두었습니다." : ""));
    } finally {
        app.scriptPreferences.measurementUnit = oldUnit;
        app.scriptPreferences.enableRedraw = oldRedraw;
    }
})();
