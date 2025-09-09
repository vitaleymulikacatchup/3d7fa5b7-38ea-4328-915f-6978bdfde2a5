"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: "funAndTrendy",
      colorTemplate: 1,
      textAnimation: "slide"
    }}>
      <NavbarBase 
        logoSrc="/images/logo.svg"
        logoAlt="Memecoin Logo"
        leftButtonText="Join Community"
        className="bg-white shadow"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero 
          title="Welcome to Memecoin!"
          subtitle="Join the fun and thriving community of meme enthusiasts"
          primaryButtonText="Buy MEME"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="What is Memecoin?"
          descriptions={["Memecoin is not just a currency, it's a community!", "Join us on this exciting journey of fun and rewards!"]} 
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy MEME"
          steps={[
            { title: "Step 1", description: "Get a digital wallet to store your MEME.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase MEME using our user-friendly interface.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Join our community and start enjoying the perks!", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Here’s a quick snapshot of MEME token distribution"
          kpiItems={[
            { value: "1B", description: "Total Supply", longDescription: "Total number of tokens available for circulation.", icon: ArrowRight },
            { value: "50%", description: "Market Cap", longDescription: "Our existing capital available in the cryptocurrency market.", icon: ArrowRight },
            { value: "20%", description: "Liquidity", longDescription: "Percentage held for market flexibility and stability.", icon: ArrowRight }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Memecoin Logo"
          logoText="Memecoin"
          className="bg-gray-200"
          columns={[
            { title: "Community", items: [{ label: "Join Us", onClick: () => {} }, { label: "Discord", onClick: () => {} }] },
            { title: "Resources", items: [{ label: "Whitepaper", onClick: () => {} }, { label: "FAQ", onClick: () => {} }] },
            { title: "Follow Us", items: [{ label: "Twitter", onClick: () => {} }, { label: "Telegram", onClick: () => {} }] }
          ]} 
          copyrightText="© 2023 Memecoin. All rights reserved." 
          onPrivacyClick={() => {}} 
        />
      </div>
    </SiteThemeProvider>
  );
}