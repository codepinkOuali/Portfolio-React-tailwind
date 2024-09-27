import React,{useState,useEffect} from "react";

const BackToTop = () =>{
    const [isVisible,setIsVisible] = useState(false);

    const handleScroll =()=>{
        setIsVisible(window.scrollY > 300);
    };

    const scrolToTop = ()=>{
        window.scrollTo({ top :0,behavior : 'smooth'})
    };

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[]);

    return(
        <>
            { isVisible && (
                <button
                onClick={scrolToTop}
                className="fixed bottom-4 right-4 bg-gradient-to-r bg-black text-white rounded-full w-12 h-12 flex items-center justify-center
                text-xl cursor-pointer transition-opacity duration-300
                "
                >
                    ↥
                </button>
            ) }
        </>
    )
}

export default BackToTop;