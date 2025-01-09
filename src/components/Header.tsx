export default function Header(){
    return(
        <>
        <div className="flex w-screen p-8 bg-slate-900 justify-between" >
            <div>
                <p className="font-bold text-2xl text-white">JACKY</p>
            </div>
            <div>
                <ul className="flex ">
                    <li className="text-white text-lg ">Home</li>
                    <li className="text-white text-lg ">Techs</li>
                    <li className="text-white text-lg ">Biography</li>
                    <li className="text-white text-lg ">Contacts</li>
                </ul>
            </div>
        
        </div> 
        </>
    )
}