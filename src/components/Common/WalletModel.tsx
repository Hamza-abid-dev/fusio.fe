import WalletCards from "./WalletCards";
import wallet1img1 from "../../assets/images/wallet1.png"
import wallet1img2 from "../../assets/images/wallet2.png"
import wallet1img3 from "../../assets/images/wallet3.png"
import wallet1img4 from "../../assets/images/wallet4.png"
import wallet1img5 from "../../assets/images/wallet5.png"


const walletCard=[
    {
        title: 'WalletConnect',
        img: wallet1img1
    },
    {
        title: 'MetaMask',
        img: wallet1img2
    },
    {
        title: 'Trust Wallet',
        img: wallet1img3
    },
    {
        title: 'Coinbase',
        img: wallet1img4
    },
    {
        title: 'All Wallets',
        img: wallet1img5
    },
]

interface WalletCardProps {
  showModel: (show: boolean) => void;
}


export default function WalletModel(props: WalletCardProps) {
    return (
          <>
            <div
              className="justify-center bg-white/70 text-white items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#18749D] outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 border-solid border-blueGray-200 rounded-t">
                    <div>
                    <i className="fa fa-question-circle"></i>
                    </div>
                    <h3 className="text-3xl font-semibold">
                    Connect Wallet
                    </h3>
                    <button
                      className="p-1 border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => props.showModel(false)}
                    >
                      <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex flex-col gap-2">
                    {walletCard.map((x)=>(
                        <WalletCards title={x.title} img={x.img}/>                        
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
    );
  }