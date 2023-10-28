let student = {
    student: 100, 
    name: 'suresh',
    marks:[90, 57, 69],
    address:{
        street: 'kphb',
        pincode: 555555,
        city: 'hyd'
    },
    getAverageOfMarks: function(){
        let avg = this.marks[0] + this.marks[1] + this.marks[2];
        return avg;
    }
}