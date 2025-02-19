import Searchinput from "./Searchinput.jsx"
import Logout from "./Logout.jsx"
import Conversations from "./Conversations.jsx"
 const Sidebar = () => {
  return (
    <div className="border-r flex flex-col p-4 border-slate-500">
      <Searchinput/>
      <div className="divider px-3"></div>
      <Conversations/>
      <Logout/>
    </div>
  )
}

export default Sidebar
