const app = new Vue({
  el: 'main',
  data: {
    belongs: {
      grades: "3",
      classes: "a",
      numbers: "0"
    },
    tasks: tasks,
    schoolDayTable: schoolDayTable,
    done: [],
    a: 0,
    narrowDownSelected: 0,
    siwtchDisplaySelected: 0,
  },
  watch: {
    belongs: {
      handler: function() {
        if (this.belongs.grades === "3") {
          document.getElementById("class").lastChild.disabled = true;
        } else {
          document.getElementById("class").lastChild.disabled = false;
        }
      },
      deep: true,
    },
    done: function() {
      localStorage.setItem("done", JSON.stringify(this.done))
    }
  },
  computed: {
    isFDisabled: function() {
      return this.belongs.grades === "3"
    },
    schoolTime: function() {
      if (this.belongs.grades === "3" && this.belongs.classes === "f") {
        this.belongs.classes = "e"
        document.getElementById("errorMessage").style.display = "block"
      } else {
        document.getElementById("errorMessage").style.display = "none"
      }
      return `${schoolTimeTable[this.belongs.grades][this.belongs.classes][this.belongs.numbers]}`
    },
    schoolDay: function() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const schoolDay = schoolDayTable.filter(d => d.getTime() >= today.getTime())[0]

      if(!schoolDay) {
        return
      } 
      return schoolDay
    },
    narrowDownSelections: function (){
      let temp = ["all", "noSubmission"].concat(this.schoolDayTable)
      temp.push("afterRestart")
      return temp
    },
  },
  mounted: function() {
    //絞り込みメニュー初期値読み込み
    if(this.schoolDay) {
      this. narrowDownSelected = this.narrowDownSelections.indexOf(this.schoolDay)
    }

    //完了済みタスクの読み込み
    this.done = JSON.parse(localStorage.getItem("done")) || []

    //絞り込みメニュー表示更新設定
    const narrowDown = document.getElementById("narrowDownDisplay")
    narrowDown.onscroll = () => {
      this.narrowDownSelected = Math.floor((narrowDown.scrollLeft + 101.5) / 202)
    }

    //絞り込みメニュー表示初期設定
    document.getElementById("narrowDownDisplay").scrollTo(this.narrowDownSelected * 202, 0)
  },
  methods: {
    selectClicked: function(i) {
      document.getElementById("narrowDownDisplay").scrollTo(i * 202, 0)
    },
    getDisplayFormat: function(d, includeYear = false, message = "") {
      if (typeof d === "object") {
        const year = includeYear ? d.getFullYear() + "/" : ""
        if (Array.isArray(d)) {
          return d.map(d => `${year + (d.getMonth() + 1)}/${d.getDate() + message}`).join(', ')
        }
        return `${year + (d.getMonth() + 1)}/${d.getDate() + message}`
      } else {
        const dic = {
          afterRestart: "学校再開後に提出",
          noSubmission: "提出なし",
          all: "全て",
        }
        if (dic[d]) {
          return dic[d]
        }
        return d
      }
    },
    selectSwitchDisplay: function(i) {
      this.siwtchDisplaySelected = i
    },
    getType: function(v) {
      return Object.prototype.toString.call(v).slice(8, -1)
    },
    switchDisplay: function(i, i2) {
      switch (this.siwtchDisplaySelected) {
        case 1:
          if (this.done.indexOf(`${i}-${i2}`) === -1) {
            return false
          } else {
            return true
          }
        break;
        case 2:
          if (this.done.indexOf(`${i}-${i2}`) === -1) {
            return true
          } else {
            return false 
          }
        break;
        default:
          return false
          break;
      }
    },
    narrowDown: function(i, i2) {
      if(this.getType(this.narrowDownSelections[this.narrowDownSelected]) === "Date" && this.getType(this.tasks[i].tasks[i2].filing) === "Date") {
        if (this.narrowDownSelections[this.narrowDownSelected].getTime() === this.tasks[i].tasks[i2].filing.getTime()) {
          return false
        }
        return true
      }
      switch (this.narrowDownSelections[this.narrowDownSelected]) {
        case this.tasks[i].tasks[i2].filing:
          return false
          break;
          
        case "all":
          return false;
          break;
          
        default:
          return true;
      } 
    }
  },
})