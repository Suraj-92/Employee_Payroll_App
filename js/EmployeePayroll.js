class EmployeePayrollData {
    //getter and setter method
    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(name)) this._name = name;
        else throw "Name is incorrect!";
    }

    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get note() {
        return this._note;
    }

    set note(note) {
        this._note = note;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        this._startDate = startDate;
    }

    //method
    toString() {
        const option = { day: "numeric", month: "long", year: "number" };
        const empDate = !this.startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US", option);
        return (
            "id=" + this.id +
            ",name= '" + this.name +
            ",gender= '" + this.gender +
            ",profilePic= '" + this.profilePic +
            ",department=" + this.department +
            ",salary=" + this.salary +
            ",startDate=" + empDate +
            ",note=" + this.note
        );
    }
}