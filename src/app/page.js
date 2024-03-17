"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Category from "./components/Category";



  


export default function Home() {

    
    
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [duas, setDuas] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://iftekhar-duas-page.vercel.app/api');
          const data = await response.json();
  
          setCategories(data.categories);
          setSubCategories(data.subCategories);
          setDuas(data.duas);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };

      fetchData();
    }, []);




    const [isModalOpen, setIsModalOpen] = useState(false);
    function handleOpenModal(){
        setIsModalOpen(true);
    }
    
    function handleCloseModal(){
        setIsModalOpen(false);
    }

    function getSubcategories(catId) {
        return subCategories.filter(subCategory => subCategory.cat_id === catId);
      }
    function getDuas(subId) {
        return duas.filter(dua => dua.subcat_id === subId);
          }
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    function openProfile(){
        // if(isProfileOpen === true){
        //     setIsProfileOpen(false);
        // }
        setIsProfileOpen(true);
    }
    function closeProfile(){
        setIsProfileOpen(false);
    }


    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    function openCategories(){
        setIsCategoriesOpen(true);
    }
    function closeCategories(){
        setIsCategoriesOpen(false);
    }

    // audio
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        const audioElement = document.getElementById('audio');

        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }

        setIsPlaying(!isPlaying);
    };


    

    return (
    <div className="duas-page-container bg-gray3 w-[100svw] h-[100svh] flex flex-grow-0 leading-relaxed overflow-hidden">

        <div className="duas-page-wrapper w-full p-3 flex gap-3">


            <div className="nav-left-container w-full md:w-24 h-16 md:h-full bg-light1 px-3 py-5 fixed left-0 bottom-0 md:static flex md:flex-col justify-between items-center rounded-t-lg md:rounded-lg shadow-xl md:shadow-none z-[99]">
                <div className="nav-icon hidden md:block">
                    <img className="w-12 shadow-logo-light rounded-lg" src="/images/logo.png" alt="" />
                </div>

                <div className="nav-icons-container w-full md:w-auto px-5 md:px-0 flex justify-between md:justify-normal md:flex-col gap-4 md:overflow-y-scroll">
                    <a className="nav-link-container md:bg-gray2 w-10 aspect-square p-2 rounded-full flex justify-center items-center" href="">
                        <img className="nav-link w-5 transition" src="/svgs/home.svg" alt="" />
                    </a>
                    <a className="nav-link-container md:bg-gray2 w-10 aspect-square p-2 rounded-full flex justify-center items-center" href="">
                        <img className="nav-link w-5 transition" src="/svgs/categories.svg" alt="" />
                    </a>
                    <a className="nav-link-container md:bg-gray2 w-10 aspect-square p-2 rounded-full flex justify-center items-center" href="">
                        <img className="nav-link w-4 transition" src="/svgs/lightbulb.svg" alt="" />
                    </a>
                    <a className="nav-link-container md:bg-gray2 w-10 aspect-square p-2 rounded-full flex justify-center items-center" href="">
                        <img className="nav-link w-4 transition" src="/svgs/bookmark.svg" alt="" />
                    </a>
                    <a className="nav-link-container md:bg-gray2 w-10 aspect-square p-2 rounded-full hidden md:flex justify-center items-center" href="">
                        <img className="nav-link w-5 transition" src="/svgs/ruqyah-plus.svg" alt="" />
                    </a>
                    <a className="nav-link-container md:bg-gray2 w-10 aspect-square p-2 rounded-full hidden md:flex justify-center items-center" href="">
                        <img className="nav-link w-5 transition" src="/svgs/chat.svg" alt="" />
                    </a>
                    <a className="nav-link-container md:bg-gray2 w-10 aspect-square p-2 rounded-full hidden md:flex justify-center items-center" href="">
                        <img className="nav-link w-5 transition" src="/svgs/book.svg" alt="" />
                    </a>
                    <a className="nav-link-container md:bg-gray2 w-10 h-10 aspect-square p-2 rounded-full flex md:hidden justify-center items-center" href="">
                        <div className="nav-link text-gray1 relative top-1 text-2xl transition"><iconify-icon icon="iconamoon:profile-circle-light"></iconify-icon></div>
                    </a>
                </div>

                <a className="nav-donate-icon hidden md:block" href="">
                    <div className="w-12 h-12 rounded-lg bg-accent1 shadow-logo-light flex justify-center items-center">
                        <img className="w-5" src="/svgs/donate.svg" alt="" />
                    </div>
                </a>
            </div>




            <div className="main-container w-full h-full">


                <div className="nav-top-container w-full flex justify-between items-center mb-3 pt-3 md:pt-0">
                    <div className="name text-xl font-semibold mt-5 ml-3">Duas Page</div>
                    <div className="flex gap-3 items-center">
                        <div className="search-container hidden md:flex gap-5">
                            {/* <input type="text" placeholder="Search.."> */}
                            <form className="bg-light1 p-1 flex items-center rounded-lg">
                                <input className="h-12 text-sm px-3 rounded-lg" type="text" name="name" placeholder="Search by Dua Name"/>
                                <button className="h-full px-5 bg-gray3 rounded-lg" type="submit"><img className="w-5" src="/svgs/search.svg" alt="" /></button>
                            </form>
                        </div>


                        <button onClick={closeProfile} className={`profile-close-container cursor-default ${isProfileOpen? "absolute top-0 left-0 w-full h-[100svh]" : "hidden z-[99]"}`}></button>
                        <button onClick={openProfile} className="btn-profile-dropdown hidden md:block relative">
                            <div className="profile flex gap-1">
                                <img className="w-10 h-10 rounded-full" src="/svgs/profile.svg" alt="" />
                                <img className="w-3 rounded-full" src="/svgs/dropdown.svg" alt="" />
                            </div>
                            <div className={`profile-dropdown-container text-sm p-3 bg-light1 shadow-lg rounded-lg ${isProfileOpen? "absolute -bottom-[285px] right-0 z-[999] w-[300px]" : "hidden"}`}>
                                <a className="flex hover:bg-gray3 px-3 py-1 items-center gap-2 rounded-lg transition" href="">
                                    <div className="text-xl relative top-1 text-accent1"><iconify-icon icon="bxs:donate-heart"></iconify-icon></div>
                                    Support us
                                </a>
                                <a className="flex hover:bg-gray3 px-3 py-1 items-center gap-2 rounded-lg transition" href="">
                                    <div className="text-xl relative top-1 text-accent1"><iconify-icon icon="mdi:download-box"></iconify-icon></div>
                                    Download Dua App
                                </a>
                                <a className="flex hover:bg-gray3 px-3 py-1 items-center gap-2 rounded-lg transition" href="">
                                    <div className="text-xl relative top-1 text-accent1"><iconify-icon icon="mdi:shield-tick"></iconify-icon></div>
                                    Privacy Policy
                                </a>
                                <a className="flex hover:bg-gray3 px-3 py-1 items-center gap-2 rounded-lg transition" href="">
                                    <div className="text-xl relative top-1 text-accent1"><iconify-icon icon="mdi:tick-decagram"></iconify-icon></div>
                                    Thanks & Credits
                                </a>
                                <a className="flex hover:bg-gray3 px-3 py-1 items-center gap-2 rounded-lg transition" href="">
                                    <div className="text-xl relative top-1 text-accent1"><iconify-icon icon="mdi:about"></iconify-icon></div>
                                    About Us
                                </a>
                                <a className="flex hover:bg-gray3 px-3 py-1 items-center gap-2 rounded-lg transition" href="">
                                    <div className="text-xl relative top-1 text-accent1"><iconify-icon icon="mingcute:copyright-fill"></iconify-icon></div>
                                    Copyright Warning
                                </a>
                                <a className="flex hover:bg-gray3 px-3 py-1 items-center gap-2 rounded-lg transition" href="">
                                    <div className="text-xl relative top-1 text-accent1"><iconify-icon icon="heroicons:rectangle-stack-solid"></iconify-icon></div>
                                    Our Other Projects
                                </a>
                            </div>
                        </button>
                        {/* <button className="btn-settings text-2xl relative top-1 text-accent1">
                            <iconify-icon icon="solar:settings-bold"></iconify-icon>
                        </button> */}


                        {/* const [isModalOpen, setIsModalOpen] = useState(false);
                            function handleOpenModal(){
                                setIsModalOpen(true);
                            }
                            
                            
                            function handleCloseModal(){
                                setIsModalOpen(false);
                            } 
                        */}

                        {/* <button onClick={handleOpenModal} className="btn-settings text-2xl relative top-1 text-accent1">
                            <iconify-icon icon="solar:settings-bold"></iconify-icon>
                        </button>
                        <Modal onClose={handleCloseModal} isOpen={isModalOpen}> 
                            <p>This is the modal content.</p>
                        </Modal> */}

                        <button onClick={handleOpenModal} className="btn-settings text-2xl relative top-1 text-accent1">
                            <iconify-icon icon="solar:settings-bold"></iconify-icon>
                        </button>
                        <Modal onClose={handleCloseModal} isOpen={isModalOpen}> 
                            <div className={`settings-modal bg-light1 p-3 shadow-lg rounded-l-lg w-[400px] h-[100svh] absolute top-0 transition-slide ${isModalOpen? 'right-0':'right[-150%]'}`}>
                                <div className="title text-lg font-semibold text-center p-5">Settings</div>
                                <div className="flex flex-col gap-3">
                                    <div className="tab-container rounded-lg">
                                        <div className="title h-16 bg-gray3 flex items-center gap-3 rounded-t-lg">
                                            <div className="line h-full w-1 bg-accent1"></div>
                                            <div className="logo-container bg-gray2 text-accent1 w-10 h-10 flex justify-center items-center rounded-full text-accent">
                                                <iconify-icon icon="heroicons:language-solid"></iconify-icon>
                                            </div>
                                            Language Settings
                                        </div>
                                        <div className="toggle-buttons-container border-x-[1px] border-b-[1px] border-gray2 rounded-b-lg p-5 flex gap-3">
                                            <button className="english w-full p-2 bg-accent1 text-light1 rounded-lg">English</button>
                                            <button className="bangla w-full p-2 border-[1px] border-gray-2 rounded-lg">বাংলা</button>
                                        </div>
                                    </div>
                                    <button className="tab-container bg-gray3 text-gray1 p-3 rounded-lg flex items-center gap-3">
                                        <div className="icon-container w-10 h-10 flex justify-center items-center rounded-full bg-gray2 text-dark2">
                                            <iconify-icon icon="heroicons:rectangle-stack-solid"></iconify-icon>
                                        </div>General Settings
                                    </button>
                                    <button className="tab-container bg-gray3 text-gray1 p-3 rounded-lg flex items-center gap-3">
                                        <div className="icon-container w-10 h-10 flex justify-center items-center rounded-full bg-gray2 text-dark2">
                                            <iconify-icon icon="heroicons:rectangle-stack-solid"></iconify-icon>
                                        </div>Font Settings
                                    </button>
                                    <button className="tab-container bg-gray3 text-gray1 p-3 rounded-lg flex items-center gap-3">
                                        <div className="icon-container w-10 h-10 flex justify-center items-center rounded-full bg-gray2 text-dark2">
                                            <iconify-icon icon="heroicons:rectangle-stack-solid"></iconify-icon>
                                        </div>Appearance Settings
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>


                <div className="flex gap-3">
                    {/* <div className="categories-container h-[400px] w-80 rounded-lg text-dark1 bg-light1"> */}
                {/* <div className="categories-container h-[calc(90svh-24px)] w-80 rounded-lg text-dark1 bg-light1 overflow-hidden"> */}
                <div className={`categories-container absolute md:static top-0 md:block h-[100svh] md:h-[85svh] w-full md:w-[500px] md:rounded-lg text-dark1 bg-light1 overflow-hidden z-[999] md:z-0 transition-slide ${isCategoriesOpen? 'left-0' : 'left-[-100%]'}`}>
                    <div className="heading bg-accent1 flex justify-between text-light1 p-5 md:px-5 md:py-3 text-center font-semibold md:rounded-t-lg">
                        Categories
                        <button onClick={closeCategories} className="icon block md:hidden text-2xl relative top-1"><iconify-icon icon="iconamoon:close"></iconify-icon></button>
                    </div>

                    <div className="px-3 pt-3">
                        <form className="bg-light1 flex items-center rounded-lg border-2 border-gray3 mb-3">
                            {/* <button className="h-full p-2" type="submit"><img className="w-5" src="/svgs/search.svg" alt="" /></button> */}
                            <button className="h-full p-2 text-lg text-gray1 relative top-1" type="submit"><iconify-icon icon="ion:search-outline"></iconify-icon></button>
                            <input className="text-sm py-2 rounded-lg" type="text" name="name" placeholder="Search Categories"/>
                        </form>
                    </div>
                    <div className="categories-main-container px-3 pb-3 h-full overflow-y-scroll">

                        <div className="categories-container pl-2">
                            {

                                categories.map((category, index) => {
                                    return <Category cat_icon={category.cat_icon} cat_name_en={category.cat_name_en} no_of_dua={category.no_of_dua} no_of_subcat={category.no_of_subcat} key={index} subCategories={getSubcategories(category.cat_id)}/>
                                })
                            }
                        </div>
                        
                    </div>
                </div>



                <div className="duas-container w-full h-[85svh] flex flex-col gap-3 rounded-lg overflow-y-scroll pb-16 md:pb-0">

                    <button onClick={openCategories} className="btn-dua-important bg-light1 px-5 py-3 flex md:hidden items-center gap-3">
                        <div className="icon text-xl relative top-[3px]"><iconify-icon icon="charm:menu-hamburger"></iconify-icon></div>
                        Dua's Importance
                    </button>

                    <div className="section w-full rounded-lg px-3 py-2 bg-light1 text-sm font-medium"><span className="text-accent1">Section: </span>Excellence of doing Tasbeeh, Tahmid, Tahlil, Takbeer</div>

                    
                    <div className="dua-container bg-light1 rounded-lg px-7 py-5 flex flex-col gap-5">
                        <div className="title-container flex items-center gap-3">
                            <img src="/svgs/logo-Allah.svg" alt="" />
                            <p className="title text-accent1 text-sm font-semibold">22. The reward of freeing the four slaves of Bani Ismail (AS)</p>
                        </div>

                        <div className="instruction-container">
                            <p className="instruction font-semibold text-sm">Say ten times -</p>
                        </div>

                        <div className="dua-container">
                            <p className="dua text-5xl text-right leading-relaxed">لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</p>
                        </div>

                        <div className="transliteration-container">
                            <p className="transliteration italic"><span className="font-semibold">Transliteration: </span>Laa 'ilaaha 'illAllahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu wa Huwa 'alaa kulli shay'in Qadeer</p>
                        </div>

                        <div className="translation-container">
                            <p className="translation opacity-85"><span className="font-semibold">Translation: </span>None has the right to be worshipped except Allah, alone, without any partner. To Him belong all sovereignty and praise and He is over all things omnipotent.</p>
                        </div>

                        <div className="reward-container">
                            <p className="reward">Whoever says this dua ten times is like one who has freed four slaves from among the children of Ismaa'eel.</p>
                        </div>
                        
                        <div className="reference-container">
                            <p className="reference font-medium"><span className="text-accent1 font-semibold">Reference</span><br/>Bukhari No: 6403; Muslim No: 2693</p>
                        </div>

                        <div className="audio-container mt-5 flex justify-between items-center">
                            <div className="audio-container flex items-center gap-3">
                                <button onClick={toggleAudio} className="left">
                                    {/* <img src="/svgs/play-button.svg" alt="" /> */}
                                    <div className="icon w-10 h-10 text-xl bg-accent1 text-light1 rounded-full flex justify-center items-center">
                                        <iconify-icon icon="ph:play-fill"></iconify-icon>
                                    </div>
                                </button>
                                <audio id="audio" className={`hidden ${isPlaying? 'mb:block':'md:hidden'}`} controls src="/hello-there.mp3">
                                    Your browser does not support the
                                    <code>audio</code> element.
                                </audio>
                            </div>
                            <div className="right flex gap-7">
                                <button className="btn-audio btn-audio-copy relative">
                                    <div className="tag w-fit bg-dark1 text-light1 px-3 py-1 rounded-lg text-sm absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 hidden">copy</div>
                                    <img className="w-5" src="/svgs/copy.svg" alt="" />
                                </button>
                                <button className="btn-audio btn-audio-bookmark relative">
                                    <div className="tag w-fit bg-dark1 text-light1 px-3 py-1 rounded-lg text-sm absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 hidden">bookmark</div>
                                    <img className="w-5" src="/svgs/bookmark.svg" alt="" />
                                </button>
                                <button className="btn-audio btn-audio-memorize relative">
                                    <div className="tag w-fit bg-dark1 text-light1 px-3 py-1 rounded-lg text-sm absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 hidden">memorize</div>
                                    <img className="w-5" src="/svgs/lightbulb.svg" alt="" />
                                </button>
                                <button className="btn-audio btn-audio-share relative">
                                    <div className="tag w-fit bg-dark1 text-light1 px-3 py-1 rounded-lg text-sm absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 hidden">share</div>
                                    <img className="w-5" src="/svgs/share.svg" alt="" />
                                </button>
                                <button className="btn-audio btn-audio-report relative">
                                    <div className="tag w-fit bg-dark1 text-light1 px-3 py-1 rounded-lg text-sm absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 hidden">report</div>
                                    <img className="w-5" src="/svgs/report.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>



                </div>
            </div>


            </div>


        </div>
    </div>
  );
}
