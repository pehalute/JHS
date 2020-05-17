const app = new Vue({
  el: 'main',
  data: {
    belongs: {
      grades: "3",
      classes: "a",
      numbers: "0"
    },
    //他ファイルから読み込み
    tasks: tasks,
    done: []
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
      const schoolDay = schoolDayTable.filter(d => {
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        return d.getTime() >= today.getTime()
      })[0]

      if(!schoolDay) {
        return
      }

      return `${schoolDay.getFullYear()}/${schoolDay.getMonth() + 1}/${schoolDay.getDate()} `
    },
    dateText: function() {
      return function(d) {
        if (d === "afterRestart") {
          return "学校再開後"
        }
        if (!Array.isArray(d)) {
          return `${d.getMonth() + 1}/${d.getDate()}`
        }
        return d.map(d => `${d.getMonth() + 1}/${d.getDate()}`).join(', ')
      }
    },
  },
  mounted: function(){
    this.done = JSON.parse(localStorage.getItem("done")) || []
  }
})