import React from 'react';
import { Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Heart className="w-6 h-6 mr-2" />
          <span className="font-semibold">lovable</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>GPT Engineer</li>
            <li>Vision</li>
            <li>News</li>
            <li>Careers</li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="mb-8">
          <img src="/placeholder.svg" alt="Colorful heart" className="mx-auto object-cover w-32 h-32" />
        </div>
        <h1 className="text-4xl font-bold mb-4">The last piece of software.</h1>
        <p className="max-w-2xl mb-8">
          We're building software that builds software. Our vision is to unlock
          human creativity — by enabling anyone to create software.
        </p>
        <div className="flex items-center mb-8">
          <img src="/placeholder.svg" alt="GPT Engineer logo" className="mx-auto object-cover w-6 h-6 mr-2" />
          <span className="text-xl font-semibold">It starts with an AI software engineer.</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
          {['For Everyone', 'For Developers', 'For Agencies'].map((title, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{title} &gt;</h3>
              <p className="text-sm text-gray-400">
                {index === 0 && "Chat with AI to build and deploy web apps, with no technical knowledge needed."}
                {index === 1 && "Collaborate in chat and code with an AI engineer, to build at lightning speed."}
                {index === 2 && "Partner with AI to streamline web app creation, iteration, and support."}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Heart className="w-6 h-6 mr-2" />
          <span className="font-semibold">lovable</span>
        </div>
        <div className="flex space-x-8">
          <div>
            <h4 className="font-semibold mb-2">GPT Engineer</h4>
            <ul className="text-sm">
              <li>Overview</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="text-sm">
              <li>Vision</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;