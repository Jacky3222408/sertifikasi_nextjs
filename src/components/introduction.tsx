import Image from "next/image";

export default function Introduction() {
    return (
        <>
            <div className="w-screen h-[500px] bg-slate-800 p-8">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-white text-2xl font-bold">
                            Sistem Informasi
                        </p>
                        <h2 className="text-7xl text-white">Hello I&apos;m</h2>
                        <h2 className="text-7xl text-white">Jacky</h2>
                        <div className="my-5">
                            <p className="text-white max-w-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque amet assumenda expedita quis ex impedit aliquam at, saepe inventore harum repellat autem praesentium distinctio, commodi possimus consequuntur ducimus quos excepturi.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-[300px] h-[300px]">
                        <Image
                            src="/img/profile.jpg"
                            alt="profile"
                            fill={true}
                            priority={true}
                            className="rounded-3xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
