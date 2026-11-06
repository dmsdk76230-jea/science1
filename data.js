// ==============================================================
// 🔬 중1 과학 디지털 탐구실 통합 데이터 저장소 (data.js)
// 1반(1~28번), 2반(1~26, 28번), 3반(1~5, 7~28번) 결번 반영 완료
// 1회차 ~ 5회차 도장판 제출 관리 지원
// 실시간 수업 위치(Live Spotlight) 기능 지원
// ==============================================================

const DASHBOARD_DATA = {
  // 0. 실시간 수업 위치 안내 (지금 여기로 모여라!)
  currentActivity: {
    active: true,
    title: "비열 대항전 시뮬레이션 탐구",
    message: "선생님과 함께 비열 대항전 시뮬레이션을 실행해 봅시다!",
    targetType: "link", // 'link' (파일/URL 열기) 또는 'scroll' (화면 내 이동)
    targetUrl: "비열 대항전.html",
    updatedAt: "수업 준비 중"
  },

  // 1. 반별 총 도장 개수
  stamps: {
    class1: { name: "1학년 1반", count: 32, motto: "열정 가득 1반! 🔥" },
    class2: { name: "1학년 2반", count: 38, motto: "단합력 최고 2반! 🚀" },
    class3: { name: "1학년 3반", count: 35, motto: "성실함 1등 3반! 🌟" }
  },

  // 2. 수행평가 현황 및 D-Day 알리미
  assessments: [
    {
      id: "assess_1",
      title: "1학기 1차 탐구: 열과 비열 실험 보고서",
      unit: "3단원. 열",
      dueDate: "2026-05-18",
      target: "1반, 2반, 3반 전체",
      notice: "가열 시간에 따른 온도 변화 그래프 및 물질별 비열 비교 분석을 반드시 포함할 것!"
    },
    {
      id: "assess_2",
      title: "물질의 상태 변화 입자 모형 그리기",
      unit: "4단원. 물질의 상태 변화",
      dueDate: "2026-06-08",
      target: "1반, 2반, 3반 전체",
      notice: "상태 변화 과정(융해, 기화 등)에서 열에너지 흡수/방출 화살표 색상 구분 필수."
    }
  ],

  // 3. 학생 도장판 1회차~5회차 제출 현황
  students: {
    class1: Array.from({ length: 28 }, (_, i) => ({
      num: i + 1,
      name: `${i + 1}번`,
      rounds: { 1: false, 2: false, 3: false, 4: false, 5: false }
    })),
    class2: [
      ...Array.from({ length: 26 }, (_, i) => ({
        num: i + 1,
        name: `${i + 1}번`,
        rounds: { 1: false, 2: false, 3: false, 4: false, 5: false }
      })),
      {
        num: 28,
        name: "28번",
        rounds: { 1: false, 2: false, 3: false, 4: false, 5: false }
      }
    ],
    class3: [
      ...Array.from({ length: 5 }, (_, i) => ({
        num: i + 1,
        name: `${i + 1}번`,
        rounds: { 1: false, 2: false, 3: false, 4: false, 5: false }
      })),
      ...Array.from({ length: 22 }, (_, i) => ({
        num: i + 7,
        name: `${i + 7}번`,
        rounds: { 1: false, 2: false, 3: false, 4: false, 5: false }
      }))
    ]
  },

  // 4. 단원별 학습 자료
  units: [
    {
      id: "unit3",
      unitNum: "3단원",
      title: "열",
      icon: "🔥",
      desc: "입자의 운동과 온도, 열평형, 열의 이동 방식 및 비열과 열팽창을 탐구합니다.",
      simulations: [
        {
          title: "비열 대항전",
          file: "비열 대항전.html",
          desc: "다양한 물질의 비열을 비교하며 온도 변화의 차이를 대항전 게임 형태로 탐구합니다."
        },
        {
          title: "비열 실험실",
          file: "비열 실험실.html",
          desc: "가열 시간, 질량, 물질의 종류를 조절하여 비열과 온도 변화를 정밀하게 가상 실험합니다."
        }
      ],
      worksheets: [
        { title: "3. 열과 입자에 대한 개념 변화", file: "3. 열과 입자에 대한 개념 변화.pdf" },
        { title: "3.1.1. 입자 운동에 따라 달라지는 온도", file: "3.1.1. 입자 운동에 따라 달라지는 온도.pdf" },
        { title: "3.1.2. 열평형 과정에서의 입자 운동 변화(예시)", file: "3.1.2. 열평형 과정에서의 입자 운동 변화(예시).pdf" },
        { title: "3.1.3. 다양한 방식으로 이동하는 열", file: "3.1.3. 다양한 방식으로 이동하는 열.pdf" },
        { title: "3.2. 비열과 열팽창(들어가기)", file: "3.2. 비열과 열팽창(들어가기).pdf" },
        { title: "3.2.1. 물질에 따라 다른 온도 변화", file: "3.2.1. 물질에 따라 다른 온도 변화.pdf" },
        { title: "3.2.2. 물질에 따라 다른 열팽창", file: "3.2.2. 물질에 따라 다른 열팽창.pdf" }
      ],
      links: []
    },
    {
      id: "unit4",
      unitNum: "4단원",
      title: "물질의 상태 변화",
      icon: "🧊",
      desc: "스스로 운동하는 입자, 물질의 세 가지 상태와 상태 변화에 따른 열에너지 출입을 탐구합니다.",
      simulations: [
        {
          title: "상태 변화와 열에너지 출입 이용",
          file: "상태 변화와 열에너지 출입 이용.html",
          desc: "상태 변화 시 열에너지를 흡수하거나 방출하는 현상과 일상생활 속 활용 사례를 시뮬레이션합니다."
        }
      ],
      worksheets: [
        { title: "4. 물질의 상태 변화(들어가기)", file: "4. 물질의 상태 변화(들어가기_진짜).pdf" },
        { title: "4.1.1. 스스로 운동하는 입자", file: "4.1.1. 스스로 운동하는 입자(2026).pdf" },
        { title: "4.1.2. 물질의 세 가지 상태와 입자 모형", file: "4.1.2. 물질의 세 가지 상태와 입자 모형.pdf" },
        { title: "4.1.3. 물질의 상태 변화", file: "4.1.3. 물질의 상태 변화.pdf" },
        { title: "4.2.1~2. 열에너지 흡수 방출", file: "4.2.1~2. 열에너지 흡수 방출.pdf" },
        { title: "4.2.3. 상태가 변할 때 출입하는 열에너지의 이용", file: "4.2.3. 상태가 변할 때 출입하는 열에너지의 이용.pdf" }
      ],
      links: []
    },
    {
      id: "unit5",
      unitNum: "5단원",
      title: "힘의 작용",
      icon: "🚀",
      desc: "중력, 탄성력, 마찰력 등 다양한 힘의 표현과 힘의 평형, 물체를 잡아당기는 힘을 탐구합니다.",
      simulations: [
        {
          title: "중력의 방향",
          file: "중력의 방향4.html",
          desc: "지구 중심을 향해 작용하는 중력의 방향과 물체의 운동 모습을 시각적으로 탐구합니다."
        }
      ],
      worksheets: [
        { title: "5. 여러 가지 힘(들어가기)", file: "5. 여러 가지 힘(들어가기).pdf" },
        { title: "5.1.1. 힘을 나타내는 법", file: "5.1.1. 힘을 나타내는 법.pdf" },
        { title: "5.1.2. 나란한 두 힘의 평형", file: "5.1.2. 나란한 두 힘의 평형.pdf" },
        { title: "5.1.3. 물체를 잡아당기는 힘 (중력)", file: "5.1.3. 물체를 잡아당기는 힘.pdf" }
      ],
      links: []
    },
    {
      id: "unit6",
      unitNum: "6단원",
      title: "기체의 성질",
      icon: "🎈",
      desc: "입자의 운동, 압력과 온도에 따른 기체의 부피 변화(보일·샤를 법칙)를 탐구합니다.",
      simulations: [],
      worksheets: [],
      links: [],
      isComingSoon: true
    }
  ]
};
