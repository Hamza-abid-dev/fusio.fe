type Callback<T extends unknown[]> = (...args: T) => void;
interface CardProps {
    img: string;
    title: string;
    semiTitle: string;
    icon: String; // Restrict to specific values if needed
    percent: string; // Adjust type as needed, e.g., number if it's a numeric percentage
  }

  interface PortfolioCardProps {
    title: string;
    semiTitle: string;
    icon: 'arrow-up' | 'arrow-down'; // Restrict to specific values if needed
    return: String;
    usdc: String;
  }
  interface InvestmentCardProps {
    title: string;
    value: String;
    price: String;
  }

  interface TopPorfoliosCardProps {
    img: String;
    title: string;
    desc: string;
  }

  interface ExploreCardProps {
    img: String;
    title: string;
    desc1: string;
    desc2: string;
    desc3: string;
    desc4: string;
  }

  interface ExploreDetailCardProps {
    img: String;
    title: string;
    desc: string;
  }

  interface PortfoliosCardProps {
    img: String;
    title: string;
    desc1: string;
    desc2: string;
    desc3: string;
    status: string;
  }

  interface MyOrderCardsProps {
    img: String;
    title: string;
    desc1: string;
    desc2: string;
    desc3: string;
    desc4: string;
  }

  interface WalletCardProps {
    img: String;
    title: string;
  }