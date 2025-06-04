import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card text-card-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <div className="mr-4">
          <Image
            src="/images/kfc-text.png"
            alt="Park & Order Logo"
            width={100} // Adjust width as needed
            height={50} // Adjust height as needed
            data-ai-hint="company logo"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold text-center font-headline">
          Park & Order Menu
        </h1>
      </div>
    </header>
  );
};

export default Header;
