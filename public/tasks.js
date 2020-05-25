const tasks = [
  {
    subject: "国語",
    tasks: [
      {
        title: "プロセスの建築",
        number: 1,
        distribusion: [new Date(2020, 3, 27), new Date(2020, 4, 11)],
        filing: new Date(2020, 4, 18)
      },{
        title: "宇宙が叫ぶー梵鐘・歓喜",
        number: 1,
        distribusion: [new Date(2020, 3, 27), new Date(2020, 4, 11)],
        filing: new Date(2020, 4, 18),
      },{
        title: "最初の質問",
       
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18),
      },{
        title: "言葉をより深く理解するために",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18),
      },{
        title: "学習の達成１３",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: "noSubmission",
      },{
        title: "漢字テスト 第一回",
        number: 3,
        distribusion: new Date(2020, 4, 18),
        filing: "noSubmission",
      },{
        title: "漢字テスト 第二回",
        number: 3,
        distribusion: new Date(2020, 4, 18),
        filing: "noSubmission",
      },{
        title: "漢字テスト 第三回",
        number: 3,
        distribusion: new Date(2020, 4, 18),
        filing: "noSubmission",
      },{
        title: "言葉の共有　1",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: new Date(2020, 4, 25),
      },{
        title: "言葉の共有　2",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: new Date(2020, 4, 25),
      },{
        title: "言葉の共有　3",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: new Date(2020, 4, 25),
      },{
        title: "意見文を書こう 1",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: "noSubmission",
      },{
        title: "意見文を書こう 2",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: "noSubmission",
      },{
        title: "意見文を書こう 3",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: "noSubmission",
      },{
        title: "意見文を書こう 4",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: "noSubmission",
      },{
        title: "意見文を書こう　原稿用紙",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: new Date(2020, 4, 25),
      },{
        title: "第四回漢字テスト",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "noSubmission",
      },{
        title: "第五回漢字テスト",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "noSubmission",
      },{
        title: "「ケナリも花、桜も花」ワークシート1",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },{
        title: "「ケナリも花、桜も花」ワークシート2",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },{
        title: "「ケナリも花、桜も花」ワークシート3",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },{
        title: "「文字を見抜く１　表意文字と表音文字」ワークシート1",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },{
        title: "「文字を見抜く１　表意文字と表音文字」ワークシート2",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },
    ]
  },{
    subject: "数学",
    tasks: [
      {
        title: "第三回学習のすすめ",
        number: 1,
        distribusion: [new Date(2020, 3, 27), new Date(2020, 4, 11)],
        filing: new Date(2020, 4, 18)
      },{
        title: "家庭学習の内容　５月①",
        number: 2,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18)
      },{
        title: "家庭学習の内容　５月２",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: new Date(2020, 4, 25),
        note: "任意"
      },{
        title: "家庭学習の内容　５月３",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },
    ]
  },{
    subject: "社会",
    tasks: [
      {
        title: "歴史プリント「欧米の進出と日本の開国」 vol.1-5",
        number: 6,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18),
      },{
        title: "公民「グローバル化」",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18)
      },{
        title: "欧米の進出と日本の開国 Vol6",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: new Date(2020, 4, 25),
        note: "記名欄がないが年・組・番号・名前を必ず記入"
      },{
        title: "明治維新 Vol1, 2",
        number: 2,
        distribusion: new Date(2020, 4, 18),
        filing: new Date(2020, 4, 25),
        note: "記名欄がないが年・組・番号・名前を必ず記入, <br> 第三回までの「学習のすすめ」の提出課題は提出を取り消し（既に取り組んでいる場合は別途対応）"
      },{
        title: "情報化",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: new Date(2020, 4, 25),
      },{
        title: "明治維新Vol3",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },{
        title: "明治維新Vol4",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },{
        title: "明治維新Vol5",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },{
        title: "印象に残った19年の出来事ランキング",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },
    ]
  },{
    subject: "理科",
    tasks: [
      {
        title: "自宅学習プリント１",
        number: 1,
        distribusion: [new Date(2020, 3, 27), new Date(2020, 4, 11)],
        filing: new Date(2020, 4, 18)
      },{
        title: "自宅学習プリント２、３",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18)
      },{
        title: "調べ学習「自然環境がもたらす災害」",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18)
      },{
        title: "自宅学習プリント4,5",
        number: 2,
        distribusion: new Date(2020, 4, 18),
        filing: new Date(2020, 4, 25),
      },{
        title: "暮らしを支える科学技術（調べ学習）",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: new Date(2020, 4, 25),
      },{
        title: "自宅学習プリント６",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },{
        title: "調べ学習「電気エネルギーの作り方」",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },
    ]
  },{
    subject: "英語",
    tasks: [
      {
        title: "Let's read 3 内容確認プリント",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18)
      },{
        title: "文法プリント　３７・３８・３９・４０",
        number: 2,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18)
      },{
        title: "Listening　21, 22",
        number: 2,
        distribusion: new Date(2020, 4, 11),
        filing: "noSubmission",
      },{
        title: "単語テスト Unit 7, Let's Read 3, Unit 0",
        number: 3,
        distribusion: new Date(2020, 4, 11),
        filing: "noSubmission",
      },{
        title: "不規則動詞　神経衰弱 1, 2, 3",
        number: 2,
        distribusion: new Date(2020, 4, 11),
        filing: "noSubmission",
      },{
        title: "Let's Read 3 教科書ワークシート",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: "noSubmission",
      },{
        title: "Listening 23",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: "noSubmission",
      },{
        title: "Writing topic in May",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: new Date(2020, 4, 25),
        loilo: new Date(2020, 4, 25),
      },{
        title: "U0 / 受け身　ワークシート",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: "noSubmission",
        note: "答えが気になったらロイロ or メール"
      },{
        title: "Listening 24 Worksheet",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "noSubmission",
      },{
        title: "Presentation1　受け身2 Worksheet",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "noSubmission",
      },{
        title: "Presentation1 Speech作り 参考用",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "noSubmission",
      },{
        title: "Presentation1 Writing",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
        loilo: new Date(2020, 5, 1),
      },
    ]
  },{
    subject: "音楽",
    tasks: [
      {
        title: "おすすめの一曲",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18)
      },{
        title: "音楽鑑賞シート",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: "afterRestart",
        note: "5/29に提出とあるが誤記"
      },{
        title: "リコーダー（さくら）楽譜",
        number: 2,
        distribusion: new Date(2020, 4, 18),
        filing: "noSubmission",
        note: "消毒、唾処理をしっかりと, 苦情が来ない程度の音量で"
      },{
        title: "リコーダー（さくら）ポイントチェックシート",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: "afterRestart",
      },{
        title: "三年生音楽〜音符や記号〜今までの復習！覚えてるかな？",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },
    ]
  },{
    subject: "美術",
    tasks: [
      {
        title: "アイデアスケッチ",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18)
      },{
        title: "鑑賞",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18),
      },{
        title: "装飾レポート",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: "afterRestart",
        loilo: new Date(2020, 4, 29),
      },
    ]
  },{
    subject: "保体",
    tasks: [
      {
        title: "第四章　健康な生活と病気の予防「健康の成り立ち」",
        number: 3,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18),
        note: "ホッチキスで止めるか、ばらけないように工夫する"
      },{
        title: "運動と健康",
        number: 1,
        distribusion: new Date(2020, 4, 18),
        filing: new Date(2020, 4, 25),
      },{
        title: "水泳学習プリント",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },
    ]
  },{
    subject: "技術",
    tasks: [
      {
        title: "日本の農業の課題と解決策",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: "afterRestart",
        note: "資料は何でも可"
      },
    ]
  },{
    subject: "家庭",
    tasks: [
      {
        title: "余り布を用いて作れる幼児のおもちゃ",
        number: 1,
        distribusion: [new Date(2020, 3, 27), new Date(2020, 4, 11)],
        filing: new Date(2020, 4, 18),
      },{
        title: "学習ノート p108, 109",
        number: 2,
        distribusion: new Date(2020, 4, 18),
        filing: "afterRestart",
      },{
        title: "幼児を観察しよう",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },
    ]
  },{
    subject: "学校",
    tasks: [
      {
        title: "修学旅行事前学習シート",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 25),
      },{
        title: "世田谷タイム",
        number: 1,
        distribusion: new Date(2020, 4, 11),
        filing: new Date(2020, 4, 18)
      },{
        title: "世田谷タイム",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },{
        title: "個人情報の掲載について",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },{
        title: "PTA委員・お手伝い係事前アンケート",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },{
        title: "クラス連絡網の作成について",
        number: 1,
        distribusion: new Date(2020, 4, 25),
        filing: "afterRestart",
      },
    ]
  }
]