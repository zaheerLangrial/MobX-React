import { action, autorun, computed, makeObservable, observable, runInAction } from "mobx"


export class UserStore {
    userInfo = {
        id : 'CS117',
        name : 'Zaheer',
        subjects : ['Math' , 'English' , 'Hindi']
    }

    constructor () {
        makeObservable (this , {
            userInfo : observable,
            upDateUser : action,
            addSubject : action,
            getTotalSubjects : computed,

        });
        this.logUserDetials = this.logUserDetials.bind(this);
        this.prefetchData = this.prefetchData.bind(this);


        autorun(this.logUserDetials)
        runInAction(this.prefetchData);
    }
    prefetchData () {
        console.log('Hello World')
    }

    logUserDetials () {
        console.log(this.userInfo.subjects)
        console.log('Subject Length is' , this.getTotalSubjects)
    }
    upDateUser (name :string) {
        return this.userInfo.name = name
    }
    addSubject (data:string) {
        return this.userInfo.subjects.push(data)
    }

    get getTotalSubjects () {
        return this.userInfo.subjects.length;
    }
}