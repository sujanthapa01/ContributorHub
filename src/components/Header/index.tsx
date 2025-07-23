import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Heart, Code2 } from "lucide-react";
const Index: React.FC<{
  bgColor: string;
  borderColor?: string;
  state?: string;
}> = ({ bgColor, borderColor, state }) => {
  return (
    <header
      className={`sticky top-0 z-50 ${bgColor} backdrop-blur-md border-b ${borderColor} sm:px-6 md:px-8`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
              <img src="./contributorhub.jpg" alt="Logo" className="w-6 h-6" />
            </div>
            <div>
              <a href="/">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  ContributorHub
                </h1>
                <p className="text-xs text-muted-foreground">
                  Premium Contributors Platform
                </p>
              </a>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            {state === "docs" ? null : (
              <a
                href="/docs"
                className="border-b border-gray-300 hover:border-primary/50 transition-colors px-2 py-1 text-sm font-medium hidden lg:block xl:block"
              >
                Docs
              </a>
            )}
            <a
              href="https://github.com/sujanthapa01/ContributorHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-border hover:border-primary/50 flex items-center"
              >
                <Github className="w-4 h-4 mr-2" />
                View Source
              </Button>
            </a>
            {state === "docs" ? (
              <a href="/" className="ml-2">
                <Button
                  size="sm"
                  className="bg-gradient-to-r to-green-400 hover:from-primary/100 hover:to-green-600/100 transition-colors font-extrabold text-[18px] flex items-center"
                >
                  <Code2 className="w-4 h-4 mr-2" />
                  let's contribute
                </Button>
              </a>
            ) : (
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-pink-400 hover:from-primary/90 hover:to-pink-600/90 transition-colors flex items-center ml-2"
              >
                <Heart className="w-4 h-4 mr-2" />
                Sponsor
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Index;
