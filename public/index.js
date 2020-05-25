const app = new Vue({
  el: 'main',
  data: {
    belongs: {
      grades: "3",
      classes: "a",
      numbers: "0"
    },
    tasks: tasks,
    done: [],
    submissionFilterTypesList: ["all", "noSubmission", ...schoolDays, "afterRestart", "loilo"],
    movieIds: ["plkIKhiAA7s", "wJNrg9noyHs"],
    submissionFilterTypeId: schoolDays.length + 2,
    completionFilterTypeId: 1,
  },
  watch: {
    done: function() {
      //タスク完了情報をローカルストレージに保存
      localStorage.setItem("done", JSON.stringify(this.done))
    }
  },
  computed: {
    isFDisabled: function() {
      //3年ならF組を選択できなくする
      return this.belongs.grades === "3"
    },
    schoolTime: function() {
      //3年F組ならエラ〜メッセージを表示
      if (this.belongs.grades === "3" && this.belongs.classes === "f") {
        this.belongs.classes = "e"
        document.getElementById("errorMessage").style.display = "block"
      } else {
        document.getElementById("errorMessage").style.display = "none"
      }
      //次回の投稿時刻を計算
      return `${schoolTimeTable[this.belongs.grades][this.belongs.classes][this.belongs.numbers]}`
    },
    schoolDay: function() {
      //次の登校日を計算
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const schoolDay = schoolDays.filter(d => d.getTime() >= today.getTime())[0]

      if(!schoolDay) {
        //もう登校日がない場合
        return
      } 

      return schoolDay
    },
    shownTasks: function(){
      return this.tasks.map((e, i) => {
        return e.tasks.filter((e2, i2) => {
          let submissionFilter = false;
          let completionFilter;
          (Array.isArray(e2.filing) ? [...e2.filing] : [e2.filing]).forEach(e3 => {
            if (this.submissionFilterTypesList[this.submissionFilterTypeId] === "all") {
              submissionFilter = true
              return
            } else if (this.submissionFilterTypesList[this.submissionFilterTypeId] === "loilo") {
              if (e2.loilo) {
                submissionFilter = true
                return
              }
              submissionFilter = false
              return
            } else if(this.getType(e3) === "Date" && this.getType(this.submissionFilterTypesList[this.submissionFilterTypeId]) === "Date"){
              submissionFilter = (e3.getTime() === this.submissionFilterTypesList[this.submissionFilterTypeId].getTime() || submissionFilter)
              return
            } else {
              submissionFilter = (e3 === this.submissionFilterTypesList[this.submissionFilterTypeId] || submissionFilter)
              return
            }
          })
          
          const isDone = this.done.indexOf(`${i}-${i2}`) !== -1

          switch (this.completionFilterTypeId) {
            case 1:
              //絞り込み：未完了
              completionFilter = !isDone
              break;
            case 2:
              //絞り込み：完了
              completionFilter = isDone
              break;
            default:
              completionFilter = true;
              break;
          }
          return submissionFilter && completionFilter
        }).map((e4) => {
          return this.tasks[i].tasks.indexOf(e4)
        })
      })
    },
    noTaskToShow: function() {
      let noTaskToShow = true;
      for(let i = 0; i < this.shownTasks.length; i++){
        if (this.shownTasks[i].length !== 0) {
          noTaskToShow = false;
          break
        }
      }

      return noTaskToShow
    }
  },
  mounted: function() {
    //絞り込みメニュー初期値読み込み
    if(this.schoolDay) {
      this.submissionFilterTypeId = this.submissionFilterTypesList.indexOf(this.schoolDay)
    }

    //完了済みタスクの読み込み
    this.done = JSON.parse(localStorage.getItem("done")) || []

    //絞り込みメニュー表示更新設定
    const submissionFilterMenu = document.getElementById("submissionFilterMenu")
    submissionFilterMenu.onscroll = () => {
      this.submissionFilterTypeId = Math.floor((submissionFilterMenu.scrollLeft + 101.5) / 202)
    }

    //絞り込みメニュー表示初期設定
    submissionFilterMenu.scrollTo(this.submissionFilterTypeId * 202, 0)

    const hammer = new Hammer(document.getElementById("tasks"));
    hammer.on("swipeleft", function() {
      submissionFilterMenu.scrollBy(202, 0)
    });
    hammer.on("swiperight", function() {
      submissionFilterMenu.scrollBy(-202, 0)
    });

  },
  methods: {
    setSubmissionType: function(i) {
      document.getElementById("submissionFilterMenu").scrollTo(i * 202, 0)
    },
    getDisplayFormat: function(d, includeYear = false, message = "") {
      if (typeof d === "object") {
        const year = includeYear ? d.getFullYear() + "/" : ""
        if (Array.isArray(d)) {
          return d.map(d => {
            if(this.getType(d) === "Date") {
              return `${year + (d.getMonth() + 1)}/${d.getDate() + message}`
            }
          }).join(', ')
        }
        return `${year + (d.getMonth() + 1)}/${d.getDate() + message}`
      } else {
        const dic = {
          afterRestart: "学校再開後に提出",
          noSubmission: "提出なし",
          all: "全て",
          loilo: "ロイロ"
        }
        if (dic[d]) {
          return dic[d]
        }
        return d
      }
    },
    selectSwitchDisplay: function(i) {
      this.completionFilterTypeId = i
    },
    getType: function(v) {
      return Object.prototype.toString.call(v).slice(8, -1)
    },
    isHide: function(i, i2) {
      return this.shownTasks[i].indexOf(i2) === -1
    },
  },
})