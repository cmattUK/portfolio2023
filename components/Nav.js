import {AiOutlineMail} from "react-icons/ai";

function Nav(){
    return(
        <nav className="border-b border-zinc-300">
            <ul className="grid justify-items-end">
                <li className="py-2 mx-4 px-4 text-grey-300 0"><a title="emailme" className="hover:text-rose-800" href="mailto:chris.elixir@gmail.com"><AiOutlineMail className="inline text-2xl"/></a></li>
            </ul>
        </nav>
    )
}
export default Nav;