import Header from "../components/Header";
import Navigation from "../components/Navigation";

const About = () => {
  return <>
    <main className="flex flex-col h-screen">
        <div className="sm:flex sm:items-center">
            <Header />
            <Navigation />
        </div>
        <section className="grid h-full" style={{gridTemplateRows: '40% 10% 40%'}}>
            <div className="grid-rows-1 w-full flex flex-col justify-end text-lg sm:gap-8">
                <div className='flex justify-center'>
                    <div className='flex gap-4 text-2xl sm:gap-12'>
                        <h1>VOID-MULTIMEDIA</h1>
                        <h1>VOMLab</h1>
                    </div>
                </div>
                <div className='flex items-center flex-col'>
                    <div className='flex gap-40 text-2xl sm:gap-48'>
                        <h1>브이오엠랩</h1>
                        <h1>봄랩</h1>
                    </div>
                </div>
            </div>
            <div className='grid-row-1'></div>
            <section className='grid-cols-1 w-full'>
                <div>
                    {/* 데스크톱 버전 (2줄) */}
                    <div className="hidden sm:flex flex-col items-center text-2xl font-light gap-4">
                        <p>우리는 예술적 상상력과 기술의 조화를 통해 다양한 현실이 중첩된 새로운 공간을 만듭니다.</p>
                        <p>아날로그와 디지털, 자연과 매체 사이에 나 자신과 세계를 돌아보는 사색의 시간을 전합니다.</p>
                    </div>

                    {/* 모바일 버전 (4줄) */}
                    <div className="sm:hidden flex flex-col items-center text-md font-light">
                        <p>우리는 예술적 상상력과 기술의 조화를 통해</p>
                        <p>다양한 현실이 중첩된 새로운 공간을 만듭니다.</p>
                        <p>아날로그와 디지털, 자연과 매체 사이에</p>
                        <p>나 자신과 세계를 돌아보는 사색의 시간을 전합니다.</p>
                    </div>

                </div>
                <div className='flex justify-center mt-10 text-md font-light sm:text-2xl sm:mt-20'>
                    <p>우리는 공간의 기억을 만듭니다.</p>
                </div>
            </section>
        </section>
    </main>
  </>
};

export default About;
