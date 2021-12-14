function Master() {
    this.gpa = (marks) => {
        const gpa = []
        if (marks < 0 || marks > 100) {
            gpa.push('Invalid')
        } else if (marks >= 0 && marks <= 32) {
            gpa.push('F')
            gpa.push(0)
        } else if (marks >= 33 && marks <= 39) {
            gpa.push('D')
            gpa.push(1)
        } else if (marks >= 40 && marks <= 49) {
            gpa.push('C')
            gpa.push(2)
        } else if (marks >= 50 && marks <= 59) {
            gpa.push('B')
            gpa.push(3)
        } else if (marks >= 60 && marks <= 69) {
            gpa.push('A-')
            gpa.push(3.5)
        } else if (marks >= 70 && marks <= 79) {
            gpa.push('A')
            gpa.push(4)
        } else if (marks >= 80 && marks <= 100) {
            gpa.push('A+')
            gpa.push(5)
        }

        return gpa;
    }

    this.final = (value) => {

        value.forEach(data => {

            console.log(`
              Name : ${data.Name}
              Roll : ${data.Roll}
              =====================Resultsheet=======================
              Bangla  : Marks = ${data.Marks.Bangla}  GPA = ${this.gpa(data.Marks.Bangla)[1]}  Grade = ${this.gpa(data.Marks.Bangla)[0]}
              English : Marks = ${data.Marks.EngLish} GPA = ${this.gpa(data.Marks.EngLish)[1]} Grade = ${this.gpa(data.Marks.EngLish)[0]}
              Math    : Marks = ${data.Marks.Math}    GPA = ${this.gpa(data.Marks.Math)[1]}    Grade = ${this.gpa(data.Marks.Math)[0]}
              Science : Marks = ${data.Marks.Science} GPA = ${this.gpa(data.Marks.Science)[1]} Grade = ${this.gpa(data.Marks.Science)[0]}
              Ict     : Marks = ${data.Marks.Ict}     GPA = ${this.gpa(data.Marks.Ict)[1]}     Grade = ${this.gpa(data.Marks.Ict)[0]}
              Religion: Marks = ${data.Marks.Reli}    GPA = ${this.gpa(data.Marks.Reli)[1]}    Grade = ${this.gpa(data.Marks.Reli)[0]}


              Total GPA = ${((
                this.gpa(data.Marks.Bangla)[1] +
                 this.gpa(data.Marks.EngLish)[1] + 
                 this.gpa(data.Marks.Math)[1] + 
                 this.gpa(data.Marks.Science)[1] +
                 this.gpa(data.Marks.Ict)[1] +
                 this.gpa(data.Marks.Reli)[1]
              ) / 6).toFixed(2)
            
            }

            `);
        });
    } 


}