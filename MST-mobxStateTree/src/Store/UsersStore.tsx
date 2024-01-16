import axios from "axios";
import { flow, onSnapshot, types } from "mobx-state-tree";

const UserModel = types
.model ('User' , {
    userID : types.string,
    usename : types.string,
    math : types.number,
    hindi : types.number,
})

.actions ((self) => ({
    setMath(value : string) {
        self.math = parseInt(value)
    },
    aftarCreate () {
        onSnapshot(self , (snapshot) => console.log('======' , snapshot))
        console.log('Yes i am Called.')
    },
    getMathMarks : flow (function*getMathMarks () {
        console.log('am called')
        var res = yield axios.get('https://fakestoreapi.com/users')
        console.log(res.data)
        return getMathMarks
    })
}))
.views((self) => ({
    get totalMarks () {
        return self.hindi + self.math
    },
    get percentage () {
        return ((self.hindi + self.math)/200 * 100)
    }
}))
const users = UserModel.create({
    userID : 'CS117',
    usename : 'Zaheer Ahmad',
    math : 76,
    hindi : 80
})

export default users