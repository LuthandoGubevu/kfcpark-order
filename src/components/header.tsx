import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card text-card-foreground shadow-md">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold text-center font-headline">
          Park & Order Menu
        </h1>
      </div>
    </header>
  );
};

export default Header;
