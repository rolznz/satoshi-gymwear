import "./index.css";
import img1 from "./assets/1.jpg";
import { BitcoinAcceptedHere } from "./icons/btc-accepted-here";

function App() {
  return (
    <div className="relative">
      <div className="h-20 px-4 w-full flex items-center justify-between fixed top-0 left-0 z-50 bg-white">
        <h1 className="flex flex-col items-center justify-center font-logo tracking-widest font-bold">
          <span className="text-2xl">SATOSHI</span>
          <span className="text -mt-2">GYMWEAR</span>
        </h1>
        <ShopNow />
      </div>
      <div
        className="w-full h-[50vh] lg:h-[70vh] mt-20 bg-center lg:bg-position-[50%_60%] bg-cover relative"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="w-full h-full flex flex-col items-start justify-between text-white z-10 absolute top-0 left-0 p-8">
          <div className="flex w-full justify-end"></div>
          <div>
            <p className="font-bold text-2xl font-heading">SATOSHI TANK</p>
            <p className="text-sm pt-2 font-content">
              Pioneer tank built for bitcoiners
            </p>
          </div>
        </div>
        <div className="bg-linear-to-t from-transparent to-black w-full h-[25%] absolute top-0 left-0 opacity-50 pointer-events-none" />
        <div className="bg-linear-to-b from-transparent to-black w-full h-[50%] absolute bottom-0 left-0 pointer-events-none" />
      </div>

      <div className="p-8">
        <div>
          <h2 className="font-bold text-2xl">REAL WORKOUT CLOTHING</h2>
          <p className="pt-4 font-content">
            Each product by SATOSHI GYMWEAR has been tested countless times in
            the gym and outdoors, from simple workouts to calisthenics and
            powerlifting.
          </p>
          <p className="pt-4 font-content">
            Our clothing is made from 100% cotton; comfortable, natural, and
            good for the skin. We only sell clothing we are proud to wear
            ourselves.
          </p>
        </div>
        <div className="pt-8">
          <h2 className="font-bold text-2xl">SUBTLE DESIGN</h2>
          <p className="pt-4 font-content">
            No bitcoin symbols or bright orange logos.
          </p>
          <p className="pt-4 font-content">
            We value a simple lifestyle, and our clothing designs reflect that.
          </p>
        </div>

        <div className="pt-8">
          <h2 className="font-bold text-2xl">MADE IN THAILAND</h2>
          <p className="pt-4 font-content">
            SATOSHI GYMWEAR is produced in a factory in Bangkok, Thailand. Our
            bulk clothing orders support the local economy.
          </p>
          <p className="pt-4 font-content">
            Free shipping for all orders within Thailand.
          </p>
        </div>

        <div className="pt-8">
          <h2 className="font-bold text-2xl">PAY WITH BITCOIN</h2>
          <p className="pt-4 font-content">
            SATOSHI GYMWEAR is the world's first producer of gymwear for
            individuals living on the bitcoin standard.
          </p>
          <p className="pt-4 font-content">
            Pay with any lightning wallet to our own Alby Hub node. Payment
            gateway powered by BTCPayServer.
          </p>
        </div>

        <div className="pt-8">
          <h2 className="font-bold text-2xl">A MESSAGE FROM THE CREATOR</h2>
          <p className="pt-4 font-content">
            I'm an introvert software developer working on a bitcoin wallet who
            sits at the PC for many hours every day. Going to the gym is a place
            where I can rest my mind and train my body instead. For me, the
            lifter's high is a wonderful feeling, it makes me truly feel alive.
          </p>
          <p className="pt-4 font-content">
            Maybe you've heard of "One creative pursuit, one social thing, and
            one physical activity" to be well-rounded and happy. For me the
            first two mostly revolve around my work in bitcoin: building a
            bitcoin wallet, and attending bitcoin events. For physical activity,
            I go to the gym. Working out feels very bitcoin-aligned: it's
            definitely proof of work.
          </p>
          <p className="pt-4 font-content">
            Working out is a very individual thing: no-one can do it for you. By
            wearing SATOSHI GYMWEAR you can feel part of a team of people
            working endlessly in their own way to bring the world to the bitcoin
            standard. Bring another small piece of bitcoin to your physical
            activity by wearing SATOSHI GYMWEAR, and prompt people to think: who
            is Satoshi?
          </p>
        </div>

        <div className="flex items-center gap-2">
          <BitcoinAcceptedHere />
        </div>
      </div>
    </div>
  );
}

function ShopNow() {
  return (
    <a
      href="https://pay.satoshigymwear.store/apps/44HM24bpTQME7zUDLUvRaqPeXKqG/pos"
      className=" bg-black text-white px-4 py-3 rounded-lg font-heading font-semibold drop-shadow-sm"
    >
      SHOP NOW
    </a>
  );
}

export default App;
