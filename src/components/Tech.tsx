
import TechCard from "./techcard";

export default function Tech (){
    return(
        <>
        <div className="bg-slate-800 w-screen min-h-[300px] p-8">
            <h1 className=" text-3xl text-white font-bold mb-4">Techs</h1>
            <div className="w-32 border-2 mb-8"/>
            <div className="flex justify-center items-center w-full flex-wrap gap-5">
                <TechCard imageURL ="/img/css.jpg" techStack="C++"/>
                <TechCard imageURL ="/img/download.jpg" techStack="Python"/>
                <TechCard imageURL ="/img/html.jpg" techStack="Html"/>
                <TechCard imageURL ="/img/js.jpg" techStack="Java Script"/>
                \
            </div>
            
        </div>
        
        </>
    )
}