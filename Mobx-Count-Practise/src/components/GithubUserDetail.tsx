import { useStore } from "../Hooks/useStore"
import { observer } from "mobx-react-lite"

const GithubUserDetail = observer( () => {
    const {rootStore : {githubUserDetial}} = useStore()

    const handleSearch = (e : any) => {
        e.preventDefault() ;
        githubUserDetial.fetchUserDetial(e.target.name.value)
    }
  return (
    <div>
        <form onSubmit={handleSearch}>
            <input type="text" name="name" placeholder="Enter User Name" />
            <button type="submit">Search</button>
        </form>
        <hr />
        <p>User Name : {githubUserDetial.githubUserDetial.name}</p>
        <p>User Login : {githubUserDetial.githubUserDetial.login}</p>
        <p>User Url : {githubUserDetial.githubUserDetial.url}</p>

    </div>
  )
})

export default GithubUserDetail