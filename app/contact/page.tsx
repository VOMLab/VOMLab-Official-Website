import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Contact = () => {
  return <main className="flex flex-col h-screen bg-[url('/images/img_contact.webp')] bg-cover bg-center bg-no-repeat opacity-90">
        <div className="sm:flex sm:items-center bg-overlay pb-5 sm:pb-0">
            <Header />
            <Navigation />
        </div>
        <section className="hidden sm:flex sm:justify-between sm:h-full sm:text-xl sm:font-light sm:ml-24 sm:mr-24 sm:text-white">
            <div className="grid grid-row-3">
                <div></div>
                <div className="flex flex-col gap-5">
                    <p>브이오엠랩&#40;VOMLAB&#41;의 작업은 공통으로 <strong className='font-bold'>&apos;공간&apos;</strong>에 기반하여,</p>
                    <p>관객의 경험을 끌어가는 <strong className='font-bold'>&apos;시간&apos;</strong>을 다룹니다.</p>
                    <p>우리는 <strong className='font-bold'>예술적 상상력과 기술의 조화를 통해 공간의 새로운 가치</strong>를 찾아 나가고,</p>
                    <p>더 많은 관객과 만나기 위한 시도를 이어갑니다.</p>
                </div>
                <div>
                    <p>프로젝트 문의는 메일 혹은 전화로 연락주세요.</p>
                </div>
            </div>
            <div className='grid grid-row-3 pb-10 pt-10'>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold mb-10'>SERVICES.</p>
                    <p>인터랙티브 아트 / 영상 / MR(MIXED REALITY)</p>
                    <p>조명 / 미디어파사드</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold mb-10'>CONTACT.</p>
                    <p>02-6405-0318</p>
                    <p>INFO@VOMLAB.COM</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold mb-10'>ADDRESS.</p>
                    <p>서울특별시 돌곶이로 32, 3층</p>
                </div>
            </div>
        </section>
        <section className="flex-1 mt-24 pr-5 pl-5 grid grid-template-rows text-white sm:hidden" style={{gridTemplateRows: '30% 20% 40%'}}>
            <div className="grid-row-1 text-lg font-light flex flex-col justify-end">
                <p>브이오엠랩&#40;VOMLAB&#41;의 작업은</p>
                <p>공통으로 <strong className='font-bold'>&apos;공간&apos;</strong>에 기반하여</p>
                <p>관객의 경험을 끌어가는 <strong className='font-bold'>&apos;시간&apos;</strong>을 다룹니다.</p>
                <p>우리는 <strong className='font-bold'>예술적 상상력과 기술의 조화를 통해</strong></p>
                <p><strong className='font-bold'>공간의 새로운 가치</strong>를 찾아 나가고,</p>
                <p>더 많은 관객과 만나기 위한 시도를 이어갑니다.</p>
            </div>
            <div className="grid-row-2 flex flex-col justify-center font-light">
                <p>프로젝트 문의는 메일 혹은 전화로 연락해주세요.</p>
            </div>
            <div className="grid-row-3 flex flex-col gap-5">
                <div>
                    <p className='mb-3'><strong>SERVICES.</strong></p>
                    <div className='font-light'>
                        <p>인터랙티브 아트 / 영상 / MR(MIXED REALITY)</p>
                        <p>조명 / 미디어파사드</p>
                    </div>
                </div>
                <div>
                    <p className='mb-3'><strong>CONTACT.</strong></p>
                    <div className='font-light'>
                        <p>02-6405-0318</p>
                        <p>INFO@VOMLAB.COM</p>
                    </div>
                </div>
                <div>
                    <p className='mb-3'><strong>ADDRESS.</strong></p>
                    <p className='font-light'>서울특별시 돌곶이로 32, 3층</p>
                </div>
            </div>
        </section>
    </main>
};

export default Contact;
