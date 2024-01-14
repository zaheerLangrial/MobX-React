import { observer } from "mobx-react-lite"
import { useStore } from "../Hooks/useStore"


const GithubUserDetail = observer (() => {
    const {rootStore : {githubUserDetail}} = useStore() ;

    const handleSerach = (e : any) => {
        e.preventDefault() ;
        githubUserDetail.fetchUserDetail(e.target.name.value)
    }
  return (
    <div>
        <form onSubmit={handleSerach}>
        <input type="text" placeholder="Enter the user Name...." name="name" />
        <button type="submit">Search</button>
        </form>
        <hr />
        <p>User Name : {githubUserDetail.UserDetial.name}</p>
        <p>User Login : {githubUserDetail.UserDetial.login}</p>
    </div>
  )
})

export default GithubUserDetail