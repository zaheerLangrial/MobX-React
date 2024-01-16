import { observer } from "mobx-react-lite";

const Home = observer (({store}) => {
    return (
        <>
            <h1>Hello {store.userInfo.name}</h1>
        <button onClick={() => store.upDateUser('Zaheer Ahmad !')}>Change the Subject</button>
        <br />
        <br />
        <button onClick={() => store.addSubject('DSA')}>Add Subject</button>
        <ul>
            {
                store.userInfo.subjects.map((subj : string , index : number) => {
                    return (
                        <li key={index}>{subj}</li>
                    )
                })
            }
        </ul>
        </>
    )
})

export default Home;