import MyClient from "./myclient";
import MyServer from "./myserver";

export default function ClientPage(){
    return <div>
        <MyClient>
             <MyServer/>
        </MyClient>
    </div>
}