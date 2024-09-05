interface WalletCardProps {
  img: String;
  title: string;
}


const WalletCards: React.FC<WalletCardProps> = (props) => {
  return (
      <div className="flex items-center bg-[white]/40 py-2 px-1 rounded-lg gap-3 w-[400px]">
      <div className="flex items-center gap-3 w-[400px]">
      <img className="w-[50px]" src={`${props.img}`} alt="" />
      <h2>{props.title}</h2>
      </div>
    </div>
  )
}

export default WalletCards
